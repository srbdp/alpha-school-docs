# Spec 001f: Research Locations Domain

**Status**: ✅ Complete
**Priority**: High
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/locations.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available information about Alpha School's **Locations** domain. This includes current campus locations, campus details, and announced expansion plans.

### Scope

Information to research for this domain:
- **Current Locations**: Cities, addresses (if public)
- **Campus Details**: Size, facilities, features
- **Expansion Plans**: Announced future locations
- **Geographic Reach**: Service area, remote options (if any)

### Output File

Create `research/locations.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school "Locations" or "Campuses" page** - Current locations
2. **alpha.school "About" page** - Headquarters, location mentions
3. **alpha.school footer/contact** - Address information
4. **Official social media** - Location announcements

### Secondary Sources
1. **News articles** - Coverage of expansions, new campuses
2. **Press releases** - Location announcements
3. **Crunchbase** - Headquarters information
4. **Google Maps/Business listings** - Verified addresses

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit Locations, Campuses, About pages
   - **IMMEDIATELY write findings to `research/locations.md`**
3. **Research social media**
   - Check for location announcements
   - **IMMEDIATELY append findings to file**
4. **Research news/press**
   - Search for expansion news, new campus announcements
   - **IMMEDIATELY append findings to file**
5. **Verify with external sources**
   - Check Crunchbase, Google Maps
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section
   - Add Notes section
   - Update status to Complete

---

## Output Template

Create `research/locations.md` with this structure:

```markdown
# Locations Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### Current Locations
<!-- Cities, campuses currently operating -->

#### Campus Details
<!-- Size, facilities, features -->

#### Expansion Plans
<!-- Announced future locations -->

### From Social Media
<!-- Location announcements -->

### From News/Press
<!-- Expansion coverage, new campus news -->

### From Other Sources
<!-- Crunchbase, Google Maps verification -->

## Information Gaps

<!-- List what location info was NOT found -->

## Notes

<!-- Conflicts, caveats -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [x] `research/locations.md` file exists
- [x] All primary sources researched
- [x] Current locations documented
- [x] All facts have source citations with retrieval dates
- [x] Information gaps documented
- [x] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 021 (Locations Overview), Spec 022 (Expansion)

---

*End of Specification*
