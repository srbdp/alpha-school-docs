# Spec 001a: Research Organization Domain

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/organization.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available information about Alpha School's **Organization** domain. This includes foundational facts about what Alpha School is, its mission, vision, values, leadership, and history.

### Scope

Information to research for this domain:
- **Overview**: What is Alpha School? Basic definition and description
- **Mission**: Mission statement (if publicly stated)
- **Vision**: Vision statement (if publicly stated)
- **Values**: Core values (if publicly stated)
- **Leadership**: Founders, key people, backgrounds (public info only)
- **History**: Founding date, founding story, key milestones

### Output File

Create `research/organization.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school homepage** - Overview, taglines, key messaging
2. **alpha.school "About" page** - Mission, vision, team info
3. **alpha.school "Team" or "Leadership" page** - Founder bios, leadership
4. **Official LinkedIn company page** - Company description, founding date
5. **Official Twitter/X account** - Bio, pinned posts

### Secondary Sources
1. **Crunchbase** - Founding date, founders, funding info
2. **News articles** - Founding story, interviews with founders
3. **Podcast interviews** - Founder insights on mission and vision
4. **Press releases** - Official announcements about leadership

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit homepage, About page, Team page
   - **IMMEDIATELY write findings to `research/organization.md`**
3. **Research social media**
   - Check LinkedIn, Twitter/X for company info
   - **IMMEDIATELY append findings to file**
4. **Research news/press**
   - Search for articles about Alpha School founding, leadership
   - **IMMEDIATELY append findings to file**
5. **Research other sources**
   - Check Crunchbase, podcasts for additional info
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section
   - Add Notes section (conflicts, caveats)
   - Update status to Complete

---

## Output Template

Create `research/organization.md` with this structure:

```markdown
# Organization Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### Overview
<!-- What is Alpha School? Basic definition -->

#### Mission
<!-- Mission statement if stated -->

#### Vision
<!-- Vision statement if stated -->

#### Values
<!-- Core values if stated -->

#### Leadership
<!-- Founders, key people with backgrounds -->

#### History
<!-- Founding date, story, milestones -->

### From Social Media

#### LinkedIn
<!-- Company description, dates, employee count -->

#### Twitter/X
<!-- Key info from bio and posts -->

### From News/Press
<!-- Articles about founding, leadership -->

### From Other Sources
<!-- Crunchbase, podcasts, etc. -->

## Information Gaps

<!-- List what information was NOT found -->

## Notes

<!-- Conflicts between sources, caveats, sensitive topics -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [ ] `research/organization.md` file exists
- [ ] All primary sources researched
- [ ] All facts have source citations with retrieval dates
- [ ] Information gaps documented
- [ ] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 002 (Organization Overview), Spec 003 (Mission), Spec 004 (Leadership), Spec 005 (History)

---

*End of Specification*
