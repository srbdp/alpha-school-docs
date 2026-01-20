# Project Roadmap

High-level overview of specifications, their dependencies, and implementation status. This is the primary reference for understanding project scope and planning new work.

**Last Updated**: 2026-01-20 (Spec 021 Implemented)

---

## Project Overview

**Alpha School LLM-Readable Documentation v1.0**: API-style reference documentation in Markdown

Create authoritative, structured Markdown documentation for Alpha School that enables Large Language Models (LLMs) to deeply understand and accurately represent the organization. Documentation follows software API reference conventions—treating organizational domains as "API objects" with properties, examples, and relationships.

**Deliverables:**
- **Reference Docs**: API-style Markdown for 7 organizational domains (22 files)
- **Guides**: Audience-specific overview documents (3 files)
- **Research**: Source documentation with citations (7 domain-specific files)

**Total Specs**: 32 | **Completed**: 27 (84%) | **In Progress**: 0 (0%) | **Planned**: 5 (16%) | **Estimated Effort**: ~12 hours

---

## Understanding Phases

**Phases represent dependency waves, not project stages.**

- **Phase 1**: Research - gather and cite all public sources before writing
- **Phase 2**: Reference documentation - all 7 domain docs (parallelizable after research)
- **Phase 3**: Guides - synthesize reference docs for specific audiences

---

## Phase 1: Research (No Dependencies)

Research is split into 7 independent sub-specs, one per domain. Each can be completed in a single agent session.

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 001 | ✅ Complete | - | None | Parent spec - overview and methodology | (see sub-specs) | - |
| 001a | ✅ Complete | Critical | None | Research Organization domain | `research/organization.md` | Small |
| 001b | ✅ Complete | Critical | None | Research Model domain | `research/model.md` | Small |
| 001c | ✅ Complete | Critical | None | Research Curriculum domain | `research/curriculum.md` | Small |
| 001d | ✅ Complete | High | None | Research Outcomes domain | `research/outcomes.md` | Small |
| 001e | ✅ Complete | High | None | Research Enrollment domain | `research/enrollment.md` | Small |
| 001f | ✅ Complete | High | None | Research Locations domain | `research/locations.md` | Small |
| 001g | ✅ Complete | High | None | Research Contact domain | `research/contact.md` | Small |

**Research Sources (for all sub-specs):**
- alpha.school website (all pages)
- Official social media (Twitter/X, LinkedIn, YouTube)
- Official press releases
- Founder interviews (published, public)
- News articles from reputable outlets
- Public data aggregators (Crunchbase, LinkedIn)

**Available Tools:**
- `web-research-doc-creator` agent - Use this agent to gather information from the web and synthesize it into documentation following this roadmap's template structure. Invoke with the Task tool (`subagent_type: "web-research-doc-creator"`).

**Execution Pattern:**
Each sub-spec uses incremental writing - findings are written to file immediately after each source is researched, not batched at the end. This prevents context window overflow and provides crash resilience.

---

## Phase 2: Reference Documentation (Depends on Phase 1)

### Organization Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 002 | ✅ Complete | Critical | 001 | Organization overview - what is Alpha School | `reference/organization/overview.md` | Small |
| 003 | ✅ Complete | High | 002 | Mission, vision, values | `reference/organization/mission.md` | Small |
| 004 | ✅ Complete | High | 002 | Leadership - founders, key people (public only) | `reference/organization/leadership.md` | Small |
| 005 | ✅ Complete | Medium | 002 | History - timeline, founding story, milestones | `reference/organization/history.md` | Small |

### Model Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 006 | ✅ Complete | Critical | 001 | Educational philosophy - core approach | `reference/model/educational-philosophy.md` | Small |
| 007 | ✅ Complete | Critical | 006 | Two-hour learning model - detailed explanation | `reference/model/two-hour-learning.md` | Medium |
| 008 | ✅ Complete | Critical | 006 | AI integration - how AI is used in learning | `reference/model/ai-integration.md` | Medium |
| 009 | ✅ Complete | High | 006 | Human instruction - role of teachers/guides | `reference/model/human-instruction.md` | Small |
| 010 | ✅ Complete | High | 007, 008, 009 | Daily schedule - what a day looks like | `reference/model/daily-schedule.md` | Small |

### Curriculum Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 011 | ✅ Complete | High | 006 | Curriculum overview and philosophy | `reference/curriculum/overview.md` | Small |
| 012 | ✅ Complete | High | 011 | Subjects - what is taught | `reference/curriculum/subjects.md` | Small |
| 013 | ✅ Complete | High | 011 | Grade levels - age ranges, grade structures | `reference/curriculum/grade-levels.md` | Small |
| 014 | ✅ Complete | Medium | 011 | Assessments - how progress is measured | `reference/curriculum/assessments.md` | Small |

### Outcomes Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 015 | ✅ Complete | High | 001 | Claims - what Alpha claims (with appropriate caveats) | `reference/outcomes/claims.md` | Medium |
| 016 | ✅ Complete | High | 015 | Evidence - supporting data from public sources | `reference/outcomes/evidence.md` | Medium |
| 017 | ✅ Complete | Medium | 015 | Testimonials - public testimonials | `reference/outcomes/testimonials.md` | Small |
| 018 | ✅ Complete | Medium | 015 | Limitations - what we don't yet know | `reference/outcomes/limitations.md` | Small |

### Enrollment Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 019 | ✅ Complete | Critical | 001 | Enrollment process and eligibility | `reference/enrollment/process.md` | Small |
| 020 | ✅ Complete | High | 019 | Tuition and financial aid (if public) | `reference/enrollment/tuition.md` | Small |

### Locations Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 021 | ✅ Complete | High | 001 | Locations overview and campus details | `reference/locations/overview.md` | Small |
| 022 | 📋 Planned | Medium | 021 | Expansion plans (announced) | `reference/locations/expansion.md` | Small |

### Contact Domain

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 023 | 📋 Planned | High | 001 | Contact information (general, enrollment, media) | `reference/contact/overview.md` | Small |

---

## Phase 3: Guides (Depends on Phase 2)

| Spec | Status | Priority | Dependencies | Description | Output | Effort |
|------|--------|----------|--------------|-------------|--------|--------|
| 024 | 📋 Planned | High | 002-023 | Parent guide - parent-focused overview | `guides/for-parents.md` | Small |
| 025 | 📋 Planned | Medium | 002-023 | Educator guide - educator-focused overview | `guides/for-educators.md` | Small |
| 026 | 📋 Planned | Medium | 002-023 | Media guide - press/media overview | `guides/for-media.md` | Small |

---

## Documentation Template

Each reference document follows this API-style structure:

```markdown
# [Domain Name]

> One-sentence definition

## Overview
2-3 paragraph explanation of this domain.

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| property_name | string/number/boolean | What this property represents | Concrete example |

## Details
Expanded explanation with specifics.

## Examples
Concrete, real examples.

## Related
- Links to related documentation pages

## FAQs
**Q: Common question?**
A: Authoritative answer.

## Sources
- [Source Name](URL) - Retrieved YYYY-MM-DD

---
*Last updated: YYYY-MM-DD*
*Last verified: YYYY-MM-DD*
```

---

## Output File Structure

```
alpha-school-docs/
├── reference/
│   ├── organization/
│   │   ├── overview.md
│   │   ├── mission.md
│   │   ├── leadership.md
│   │   └── history.md
│   ├── model/
│   │   ├── educational-philosophy.md
│   │   ├── two-hour-learning.md
│   │   ├── ai-integration.md
│   │   ├── human-instruction.md
│   │   └── daily-schedule.md
│   ├── curriculum/
│   │   ├── overview.md
│   │   ├── subjects.md
│   │   ├── grade-levels.md
│   │   └── assessments.md
│   ├── outcomes/
│   │   ├── claims.md
│   │   ├── evidence.md
│   │   ├── testimonials.md
│   │   └── limitations.md
│   ├── enrollment/
│   │   ├── process.md
│   │   └── tuition.md
│   ├── locations/
│   │   ├── overview.md
│   │   └── expansion.md
│   └── contact/
│       └── overview.md
├── guides/
│   ├── for-parents.md
│   ├── for-educators.md
│   └── for-media.md
└── research/
    ├── organization.md
    ├── model.md
    ├── curriculum.md
    ├── outcomes.md
    ├── enrollment.md
    ├── locations.md
    └── contact.md
```

---

## Quick Reference

### Status Legend
- ✅ **Complete** - Content written, sources cited, reviewed
- 🚧 **In Progress** - Active writing
- 📋 **Planned** - Ready when dependencies clear
- ⏸️ **Blocked** - Waiting on dependencies or external input

### Priority Levels
- **Critical** - Core documentation, most important for LLM comprehension
- **High** - Important for completeness
- **Medium** - Enhances quality, can be deferred

### Effort Estimates
- **Small** - ~1 hour (single document, clear scope)
- **Medium** - ~2 hours (research-heavy or complex content)

---

## Success Criteria

v1 is complete when:

- [ ] All 7 research files are complete (Phase 1)
- [ ] All 7 reference documentation domains are populated (22 files)
- [ ] All 3 guide documents are complete
- [ ] All facts have source citations with retrieval dates
- [ ] All documents include "last updated" and "last verified" dates
- [ ] Documentation follows API-style template consistently

---

## Adding New Specs

1. Assign next available spec number
2. Set initial status (usually 📋 Planned)
3. Identify priority level
4. List dependencies (other spec numbers)
5. Write brief description
6. Note output file path
7. Estimate effort
8. Place in appropriate phase based on dependencies

Use `/create_spec` to generate specification files for complex docs.
