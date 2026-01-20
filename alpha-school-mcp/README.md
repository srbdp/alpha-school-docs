# Alpha School MCP Server

An MCP (Model Context Protocol) server that exposes Alpha School documentation to AI assistants like Claude.

## Features

- **search_docs**: Keyword search across all documentation
- **get_document**: Retrieve a specific document by path
- **list_documents**: List all available documentation paths

## Installation

### Using npx (Recommended)

No installation needed:

```bash
npx @alpha-school/mcp
```

### Global Installation

```bash
npm install -g @alpha-school/mcp
alpha-school-mcp
```

## Configuration

Add to your MCP client configuration:

### Claude Code (~/.claude.json)

```json
{
  "mcpServers": {
    "alpha-school": {
      "command": "npx",
      "args": ["@alpha-school/mcp"]
    }
  }
}
```

### Claude Desktop (claude_desktop_config.json)

```json
{
  "mcpServers": {
    "alpha-school": {
      "command": "npx",
      "args": ["@alpha-school/mcp"]
    }
  }
}
```

## Tools

### list_documents

Lists all available documentation files.

**Parameters:** None

**Example Response:**
```json
{
  "documents": [
    { "path": "docs/organization/mission.md", "category": "docs" },
    { "path": "api/students/list.mdx", "category": "api" }
  ]
}
```

### get_document

Retrieves the full content of a specific document.

**Parameters:**
- `path` (string, required): The document path (e.g., "docs/organization/mission")

**Example Response:**
```json
{
  "path": "docs/organization/mission.md",
  "content": "# Alpha School Mission\n\n..."
}
```

### search_docs

Searches across all documentation for a keyword or phrase.

**Parameters:**
- `query` (string, required): The search query (case-insensitive)

**Example Response:**
```json
{
  "results": [
    {
      "path": "docs/organization/mission.md",
      "snippet": "...Alpha School is dedicated to..."
    }
  ]
}
```

## How It Works

1. On startup, the server fetches documentation from the Alpha School GitHub repository
2. Documents are cached in memory for 1 hour to improve performance
3. When tools are called, the server searches/retrieves from the local cache
4. Cache automatically refreshes after TTL expires

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run locally
npm start

# Development mode (watch)
npm run dev
```

## Configuration Options

The following can be modified in `src/index.ts`:

| Variable | Default | Description |
|----------|---------|-------------|
| `DOCS_REPO` | `srbdp/alpha-school-docs` | GitHub repository path |
| `DOCS_BRANCH` | `master` | Branch to fetch from |
| `DOCS_PATHS` | `["docs", "api", "guides"]` | Directories to index |
| `CACHE_TTL_MS` | `3600000` (1 hour) | Cache duration |

## License

MIT
