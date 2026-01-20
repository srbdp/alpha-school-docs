# Spec 001: Research & Source Documentation (Parent Overview)

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 1 (Research)
**Dependencies**: None
**Last Updated**: 2026-01-20

---

## Overview

This is the **parent specification** for all research tasks. Research has been split into 7 independent sub-specs, one per documentation domain. This approach:
- Prevents context window overflow during agent execution
- Enables parallel execution of research tasks
- Provides crash resilience (partial work saved)
- Allows incremental progress tracking

### Sub-Specs

| Sub-Spec | Domain | Output | Status |
|----------|--------|--------|--------|
| [001a](../001a-research-organization/spec.md) | Organization | `research/organization.md` | 📋 Planned |
| [001b](../001b-research-model/spec.md) | Model | `research/model.md` | 📋 Planned |
| [001c](../001c-research-curriculum/spec.md) | Curriculum | `research/curriculum.md` | 📋 Planned |
| [001d](../001d-research-outcomes/spec.md) | Outcomes | `research/outcomes.md` | 📋 Planned |
| [001e](../001e-research-enrollment/spec.md) | Enrollment | `research/enrollment.md` | 📋 Planned |
| [001f](../001f-research-locations/spec.md) | Locations | `research/locations.md` | 📋 Planned |
| [001g](../001g-research-contact/spec.md) | Contact | `research/contact.md` | 📋 Planned |

---

## Research Methodology

All sub-specs follow this methodology:

### Source Types

**Primary Sources (Official)**:
- Alpha School website (alpha.school) - all pages
- Official social media accounts (Twitter/X, LinkedIn, YouTube, Instagram)
- Official press releases
- Founder interviews (public, published)
- Official blog posts or articles

**Secondary Sources (Third-Party)**:
- News articles from reputable outlets (TechCrunch, EdSurge, local news)
- Published reviews and testimonials
- Public data aggregators (Crunchbase, LinkedIn company page)
- Podcast interviews with founders/staff
- Conference presentations (if publicly available)

### Source Metadata

For each source, capture:
- Source title/name
- URL (if web-based)
- Date published (if available)
- Date retrieved/accessed
- Source type (official/news/social/data aggregator)
- Credibility level (verified/likely/requires verification)
- Key topics covered

### Quality Standards

- Every fact has a source citation
- Every source has retrieval date
- Source credibility levels assigned
- Direct quotes marked as quotes
- Paraphrases clearly identified
- No speculation presented as fact

---

## Incremental Writing Pattern

**Critical**: Each sub-spec instructs the agent to write findings immediately after each source, not batch at the end.

**Pattern**:
```
1. Create research/{domain}.md with template skeleton
2. Research Source A → IMMEDIATELY write findings to file
3. Research Source B → IMMEDIATELY append findings to file
4. ... repeat for each source
5. Final pass: add gaps/notes section
```

This approach:
- Frees context window after each source
- Provides crash resilience (partial work saved)
- Shows progress in real-time
- Prevents "huge update at the end" memory pressure

---

## Research Output Template

Each sub-spec produces a file following this structure:

```markdown
# {Domain} Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress | Complete

## Sources Consulted
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school
<!-- Write immediately after researching website -->

### From Social Media
<!-- Write immediately after researching social -->

### From News/Press
<!-- Write immediately after researching news -->

### From Other Sources
<!-- Write immediately after researching other -->

## Information Gaps
<!-- Add at end -->

## Notes
<!-- Conflicts, caveats, sensitive topics -->
```

---

## Execution

### Using web-research-doc-creator Agent

Each sub-spec is designed to be executed using the `web-research-doc-creator` agent:

```
Task tool invocation:
  subagent_type: "web-research-doc-creator"
  prompt: "Execute Spec 001x: Research {Domain} for Alpha School..."
```

### Execution Order

Sub-specs can be executed in any order or in parallel. No dependencies between them.

**Recommended order** (by information density):
1. 001a Organization (foundational facts)
2. 001b Model (core differentiator)
3. 001c Curriculum (detailed content)
4. 001e Enrollment (practical info)
5. 001f Locations (straightforward)
6. 001d Outcomes (requires careful handling)
7. 001g Contact (quick to complete)

---

## Completion Criteria

This parent spec (001) is complete when:
- [ ] All 7 sub-specs (001a-001g) are marked complete
- [ ] All 7 research files exist in `research/` directory
- [ ] Each research file follows the template structure
- [ ] All facts have source citations

---

## What This Spec Does NOT Include

### Out of Scope
1. **Writing Documentation**: This spec only gathers sources; actual documentation writing is Phase 2
2. **Internal/Non-Public Information**: v1 is strictly public information only
3. **Competitive Analysis**: We document Alpha School, not comparisons to competitors
4. **Stakeholder Interviews**: This phase uses only published, public sources
5. **Verification Calls**: We do not contact Alpha School for verification in v1

---

## Related Specifications

**This spec (001) is a dependency for all Phase 2 specs:**
- Spec 002-005: Organization domain docs
- Spec 006-010: Model domain docs
- Spec 011-014: Curriculum domain docs
- Spec 015-018: Outcomes domain docs
- Spec 019-020: Enrollment domain docs
- Spec 021-022: Locations domain docs
- Spec 023: Contact domain docs

**Phase 3 dependencies (indirect):**
- Spec 024-026: Guide documents

---

## References

- **PRD Section 8**: Research Required (source types, methodology)
- **Roadmap Phase 1**: Research & source documentation
- **llms.txt Standard**: https://llmstxt.org/

---

*End of Parent Specification*
