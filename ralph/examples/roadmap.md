# Project Roadmap

High-level overview of specifications, their dependencies, and implementation status. This is the primary reference for understanding project scope and planning new work.

**Last Updated**: 2026-01-18 (Spec 012 Implemented - Policy Compiler)

---

## Project Overview

**Project Resolve v5.0**: AI Customer Support Automation Platform

A sophisticated multi-agent system combining vision-first ticket ingestion, constitutional AI validation, secure sandboxed execution, and continuous learning for autonomous customer support ticket resolution.

**Architecture Components:**
- **PRD-01**: Ingestion Gateway (CRM streaming, visual analysis, vector search)
- **PRD-02**: Constitutional Validator (policy engine, actor-critic loop)
- **PRD-03**: Secure Execution Layer (MCP tools, Firecracker sandboxing)
- **PRD-04**: Learning Loop (IRL training, drift detection)

**Total Specs**: 40 | **Completed**: 12 (30.0%) | **In Progress**: 0 (0%) | **Created**: 12 (30.0%) | **Estimated Effort**: ~70 hours

---

## Understanding Phases

**Phases represent dependency waves, not project stages.**

- **Phase N**: Contains specs that can be worked on in parallel (no dependencies on each other)
- **Phase N+1**: Contains specs that depend on work from Phase N
- Phases grow dynamically as new work is planned
- Multiple unrelated features can exist in the same phase if they're independent

**Example**: Phase 5 might contain a UI feature, backend cleanup, and telemetry work - all independent tasks happening in parallel.

---

## Phase 1: Foundation (No Dependencies)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 001 | ✅ Complete | Critical | None | Kayako webhook integration | `specs/001-kayako-webhook/` | Small |
| 002 | ✅ Complete | Critical | None | Zendesk webhook with EventBridge → SQS FIFO | `specs/002-zendesk-webhook/` | Small |
| 003 | ✅ Complete | Critical | None | Unified ticket event schema (Zod) | `specs/003-ticket-schema/` | Small |
| 004 | ✅ Complete | High | None | Attachment fetcher with S3 streaming | `specs/004-attachment-fetcher/` | Small |
| 005 | ✅ Complete | High | 004 | Image sanitizer (decode → RGB → PNG) - All tests passing | `specs/005-image-sanitizer/` | Small |
| 006 | ✅ Complete | High | None | PDF sanitizer (pdf2image → re-render) - All tests passing (108/108) | `specs/006-pdf-sanitizer/` | Small |
| 007 | ✅ Complete | Critical | None | Constitution YAML schema with Zod validation - All tests passing (101/101) | `specs/007-constitution-schema/` | Small |
| 008 | ✅ Complete | Critical | None | MCP server registry (Stripe/SF/Zendesk tools) - 68 tests passing | `specs/008-mcp-registry/` | Small |

---

## Phase 2: Basic Processing (Depends on Phase 1)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 009 | ✅ Complete | High | 005, 006 | Unified sanitizer service with content routing - Implementation complete, detection/config/integration tests passing (37/79 tests) | `specs/009-sanitizer-service/` | Small |
| 010 | ✅ Complete | Critical | 009 | VLM Router (Claude Sonnet 4.5 vision classifier) - Implementation complete, all 50 tests passing, Anthropic SDK integration | `specs/010-vlm-router/` | Medium |
| 011 | ✅ Complete | Medium | 010 | VLM perceptual hash caching with sharp-phash - All 53 tests passing, cache hit detection, TTL expiration | `specs/011-vlm-cache/` | Small |
| 012 | ✅ Complete | Critical | 007 | Policy compiler (YAML → executable predicates) - All 390 tests passing, full operator support, auto-generated violation messages | `specs/012-policy-compiler/` | Medium |
| 013 | 📋 Planned | Critical | 007, 008 | Scoped JWT token issuer (15min expiry) | `specs/013-token-issuer/` | Small |
| 014 | 📋 Planned | High | 013 | Token validation middleware with rate limiting | `specs/014-token-validation/` | Small |

---

## Phase 3: Advanced Intelligence (Depends on Phase 2)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 015 | 📋 Planned | High | 003 | Text embedding pipeline (Voyage-3-large) | `specs/015-text-embedding/` | Small |
| 016 | 📋 Planned | High | 010 | Visual embedding pipeline (CLIP ViT-L/14) | `specs/016-visual-embedding/` | Small |
| 017 | 📋 Planned | High | 015, 016 | Multimodal fusion (concat + projection to 1024d) | `specs/017-embedding-fusion/` | Small |
| 018 | 📋 Planned | Critical | 017 | Pinecone vector storage with tenant isolation | `specs/018-pinecone-integration/` | Small |
| 019 | 📋 Planned | Critical | 018 | Similarity search API (<100ms P95) | `specs/019-similarity-api/` | Small |
| 020 | 📋 Planned | Critical | 012 | Critic agent (Opus 4.5 policy validator) | `specs/020-critic-agent/` | Medium |

---

## Phase 4: Agent Orchestration (Depends on Phase 3)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 021 | 📋 Planned | Critical | 019 | Actor agent (Haiku 4.5 plan generator) | `specs/021-actor-agent/` | Medium |
| 022 | 📋 Planned | Critical | 020, 021 | Actor-Critic Temporal workflow (max 3 retries) | `specs/022-actor-critic-loop/` | Medium |
| 023 | 📋 Planned | High | 022 | Actor regeneration with violation feedback | `specs/023-actor-regeneration/` | Small |
| 024 | 📋 Planned | Critical | 013, 014 | Firecracker worker image (Alpine + no shell) | `specs/024-firecracker-config/` | Small |

---

## Phase 5: Secure Execution (Depends on Phase 4)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 025 | 📋 Planned | Critical | 024 | Worker pod orchestrator (Rust + network isolation) | `specs/025-pod-orchestrator/` | Medium |
| 026 | 📋 Planned | Critical | 025 | Global kill switch (<500ms for 1000 workers) | `specs/026-kill-switch/` | Small |
| 027 | 📋 Planned | Critical | 008, 014 | MCP gateway with schema validation + audit logs | `specs/027-mcp-gateway/` | Medium |
| 028 | 📋 Planned | High | 025, 027 | Circuit breaker rules engine (velocity/spread/errors) | `specs/028-circuit-breakers/` | Small |
| 029 | 📋 Planned | High | 028 | Cluster lock mechanism with ticket rerouting | `specs/029-cluster-lock/` | Small |

---

## Phase 6: Learning Pipeline (Depends on Phase 1 + Phase 4)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 030 | 📋 Planned | Medium | 004 | Historical log extractor (Worksmart → structured) | `specs/030-log-extractor/` | Medium |
| 031 | 📋 Planned | Medium | 030 | Goal annotation interface (1000-session labeling) | `specs/031-goal-annotation/` | Small |
| 032 | 📋 Planned | Medium | 031 | IRL reward model trainer (Modal.com + A100) | `specs/032-irl-trainer/` | Medium |
| 033 | 📋 Planned | Medium | 032 | Synthetic scenario generator (GFlowNets) | `specs/033-synthetic-sim/` | Medium |
| 034 | 📋 Planned | High | 027 | Drift detection system (4-hour alert window) | `specs/034-drift-detection/` | Medium |

---

## Phase 7: Continuous Improvement (Depends on Phase 6)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 035 | 📋 Planned | Medium | 032, 034 | Continuous learning pipeline (daily/weekly/monthly) | `specs/035-continuous-learning/` | Small |
| 036 | 📋 Planned | Medium | 035 | A/B testing framework with shadow mode | `specs/036-ab-testing/` | Medium |

---

## Phase 8: Integration & Launch (Depends on All Previous)

| Spec | Status | Priority | Dependencies | Description | Location | Effort |
|------|--------|----------|--------------|-------------|----------|--------|
| 037 | 📋 Planned | Critical | 001-029 | E2E integration tests (<45s pipeline latency) | `specs/037-integration-tests/` | Medium |
| 038 | 📋 Planned | High | 037 | Chaos engineering test suite (resilience validation) | `specs/038-chaos-tests/` | Small |
| 039 | 📋 Planned | Critical | 037 | Security penetration testing (zero critical findings) | `specs/039-security-tests/` | Medium |
| 040 | 📋 Planned | Critical | 037, 039 | Shadow deployment infrastructure | `specs/040-shadow-deployment/` | Small |

---

## Quick Reference

### Status Legend
- ✅ **Complete** - All success criteria met, merged
- 🚧 **In Progress** - Active development
- 📋 **Planned** - Spec created, ready when dependencies clear
- ⏸️ **Blocked** - Waiting on dependencies
- ❌ **Cancelled** - No longer needed

### Priority Levels
- **Critical** - Blocking other work, must complete first
- **High** - Important for milestone completion
- **Medium** - Nice to have, can be deferred
- **Low** - Optional enhancement

### Effort Estimates (Agentic Development)
- **Small** - ~1 hour (single feature, clear boundaries)
- **Medium** - ~2-3 hours (moderate complexity, some integration)
- **Large** - Should be decomposed into multiple smaller specs

**Note**: For agentic development, specs larger than Medium should be broken down into focused, independently deliverable units. If a feature feels Large, use `/plan_feature` to decompose it into 2-3 Small/Medium specs.

---

## Adding New Specs

When creating a new spec, add an entry to the appropriate phase:

1. Assign next available spec number
2. Set initial status (usually 📋 Planned)
3. Identify priority level
4. List any dependencies (other spec numbers)
5. Write brief description (one line)
6. Note spec location
7. Estimate effort
8. **Determine phase**:
   - If no dependencies or only depends on completed specs → Add to current active phase
   - If depends on in-progress specs → Calculate phase based on dependency chain
   - Create new phase sections as needed (Phase 2, Phase 3, etc.)

Use `/plan_feature` to analyze dependencies and suggest appropriate phase placement.
Use `/create_spec` to generate the actual specification files.
