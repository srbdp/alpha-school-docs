#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Configuration
const DOCS_REPO = "srbdp/alpha-school-docs";
const DOCS_BRANCH = "master";
const DOCS_PATHS = ["docs", "api", "guides"];
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Types
interface DocFile {
  path: string;
  content: string;
  category: string;
}

interface CacheEntry {
  docs: DocFile[];
  timestamp: number;
}

// Cache
let cache: CacheEntry | null = null;

// GitHub API helpers
async function fetchGitHubTree(repo: string, branch: string): Promise<any> {
  const url = `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`;
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github.v3+json" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch repo tree: ${response.statusText}`);
  }
  return response.json();
}

async function fetchRawContent(
  repo: string,
  branch: string,
  path: string
): Promise<string> {
  const url = `https://raw.githubusercontent.com/${repo}/${branch}/${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
  }
  return response.text();
}

async function loadDocs(): Promise<DocFile[]> {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
    return cache.docs;
  }

  const docs: DocFile[] = [];
  const tree = await fetchGitHubTree(DOCS_REPO, DOCS_BRANCH);

  // Filter for markdown/mdx files in our target paths
  const docFiles = tree.tree.filter((item: any) => {
    if (item.type !== "blob") return false;
    if (!item.path.match(/\.(md|mdx)$/)) return false;
    return DOCS_PATHS.some((p) => item.path.startsWith(p + "/"));
  });

  // Fetch content for each file (with concurrency limit)
  const batchSize = 10;
  for (let i = 0; i < docFiles.length; i += batchSize) {
    const batch = docFiles.slice(i, i + batchSize);
    const contents = await Promise.all(
      batch.map(async (file: any) => {
        try {
          const content = await fetchRawContent(
            DOCS_REPO,
            DOCS_BRANCH,
            file.path
          );
          const category = file.path.split("/")[0];
          return { path: file.path, content, category };
        } catch (error) {
          console.error(`Failed to fetch ${file.path}:`, error);
          return null;
        }
      })
    );
    docs.push(...contents.filter((d): d is DocFile => d !== null));
  }

  // Update cache
  cache = { docs, timestamp: Date.now() };
  return docs;
}

// Tool implementations
async function listDocuments(): Promise<{
  documents: { path: string; category: string }[];
}> {
  const docs = await loadDocs();
  return {
    documents: docs.map((d) => ({ path: d.path, category: d.category })),
  };
}

async function getDocument(
  path: string
): Promise<{ path: string; content: string } | { error: string }> {
  const docs = await loadDocs();

  // Try exact match first
  let doc = docs.find((d) => d.path === path);

  // Try with extensions
  if (!doc) {
    doc = docs.find(
      (d) => d.path === `${path}.md` || d.path === `${path}.mdx`
    );
  }

  // Try matching just the filename portion
  if (!doc) {
    doc = docs.find((d) => {
      const filename = d.path.replace(/\.(md|mdx)$/, "");
      return filename.endsWith(path);
    });
  }

  if (!doc) {
    return { error: `Document not found: ${path}` };
  }

  return { path: doc.path, content: doc.content };
}

async function searchDocs(
  query: string
): Promise<{ results: { path: string; snippet: string }[] }> {
  const docs = await loadDocs();
  const queryLower = query.toLowerCase();
  const results: { path: string; snippet: string }[] = [];

  for (const doc of docs) {
    const contentLower = doc.content.toLowerCase();
    const index = contentLower.indexOf(queryLower);

    if (index !== -1) {
      // Extract snippet with context
      const start = Math.max(0, index - 100);
      const end = Math.min(doc.content.length, index + query.length + 100);
      let snippet = doc.content.slice(start, end);

      if (start > 0) snippet = "..." + snippet;
      if (end < doc.content.length) snippet = snippet + "...";

      results.push({ path: doc.path, snippet });
    }
  }

  return { results };
}

// MCP Server setup
const server = new Server(
  {
    name: "alpha-school-docs",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_documents",
        description:
          "List all available Alpha School documentation files with their paths and categories",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "get_document",
        description:
          "Retrieve the full content of a specific Alpha School documentation file by path",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description:
                'The document path (e.g., "docs/organization/mission" or "api/students/list")',
            },
          },
          required: ["path"],
        },
      },
      {
        name: "search_docs",
        description:
          "Search across all Alpha School documentation for a keyword or phrase",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "The search query (case-insensitive)",
            },
          },
          required: ["query"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "list_documents": {
        const result = await listDocuments();
        return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
      }

      case "get_document": {
        const path = (args as { path?: string })?.path;
        if (!path) {
          return {
            content: [{ type: "text", text: "Error: path parameter is required" }],
            isError: true,
          };
        }
        const result = await getDocument(path);
        return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
      }

      case "search_docs": {
        const query = (args as { query?: string })?.query;
        if (!query) {
          return {
            content: [{ type: "text", text: "Error: query parameter is required" }],
            isError: true,
          };
        }
        const result = await searchDocs(query);
        return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
      }

      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      content: [{ type: "text", text: `Error: ${message}` }],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Alpha School MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
