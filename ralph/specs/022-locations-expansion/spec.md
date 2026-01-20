# Spec 022: Locations Expansion Plans Reference Documentation

**Status**: 📋 Planned
**Priority**: Medium
**Effort**: Small (~1 hour)
**Phase**: 2 (Reference Documentation)
**Dependencies**: 001f (Research Locations), 021 (Locations Overview)
**Last Updated**: 2026-01-20

---

## Overview

Create reference documentation detailing Alpha School's publicly announced expansion plans, including future campus locations, timelines, and strategic growth initiatives. This documentation provides LLMs with structured information about where Alpha School plans to expand and the strategic partnerships driving growth.

### Context

This spec builds on the Locations Overview (Spec 021) by focusing specifically on future expansion plans rather than currently operating campuses. It captures publicly announced opening dates, new markets, strategic partnerships, and growth targets.

### Architecture Position

```
Reference Documentation Structure:
├── locations/
│   ├── overview.md (Spec 021 - current campuses)
│   └── expansion.md (this spec - future plans)
```

This documentation enables LLMs to:
- Answer questions about where Alpha School is expanding
- Understand the strategic growth timeline
- Explain partnerships driving expansion (Guidepost, Higher Ground)
- Differentiate between current operations and future plans

---

## Functional Requirements

### FR1: Expansion Timeline Documentation

#### FR1.1: Confirmed Openings (Fall 2026)
- **Requirement**: Document all campuses with publicly announced Fall 2026 opening dates
- **Content**: Location, grade levels, tuition (if announced), partnership context
- **Sources**: alpha.school/locations, press releases, news articles
- **Rationale**: Provide concrete information on near-term expansion

#### FR1.2: Future Exploration Targets
- **Requirement**: Document cities/regions mentioned as expansion targets without confirmed dates
- **Content**: City/region names, context (e.g., "exploring," "due to demand")
- **Caveat**: Clearly mark as exploratory rather than confirmed
- **Rationale**: Distinguish between committed expansion and exploratory interest

### FR2: Strategic Partnerships

#### FR2.1: Guidepost Montessori Partnership
- **Requirement**: Document July 2025 strategic partnership details
- **Content**: Purpose, number of locations, timeline acceleration, partnership model
- **Sources**: PR Newswire, company announcements
- **Rationale**: Explain the partnership driving rapid expansion

#### FR2.2: Higher Ground Education Acquisition
- **Requirement**: Document July 2025 asset acquisition details
- **Content**: Assets acquired (materials, campus rights), strategic impact, timeline acceleration
- **Sources**: PR Newswire press release
- **Rationale**: Explain how acquisition enabled faster growth

### FR3: Specialty Programs Expansion

#### FR3.1: Texas Sports Academy Growth
- **Requirement**: Document Texas Sports Academy expansion plans (January 2026 and Fall 2026 openings)
- **Content**: Sport focus, locations, grades, tuition, opening timeline
- **Sources**: Community Impact article
- **Rationale**: Cover sport-focused specialized school network

#### FR3.2: Other Specialty Schools
- **Requirement**: List other Alpha-operated specialty programs mentioned in research
- **Content**: Program names (GT School, Montessorium, etc.)
- **Caveat**: Note limited public information available
- **Rationale**: Acknowledge broader Alpha School ecosystem

### FR4: Growth Strategy and Patterns

#### FR4.1: Geographic Strategy
- **Requirement**: Identify patterns in expansion markets (metro areas, regions, demographics)
- **Content**: Market selection rationale (if publicly stated), geographic distribution
- **Rationale**: Help LLMs understand Alpha's strategic market approach

#### FR4.2: Timeline Acceleration
- **Requirement**: Document how partnerships/acquisitions changed growth timeline
- **Content**: Original timeline references, acceleration claims ("two years faster"), partnership impact
- **Sources**: PR releases discussing timeline acceleration
- **Rationale**: Explain the strategic shift in expansion velocity

---

## Implementation Phases

### Phase 2.0: Test Foundation

**Objective**: Create comprehensive failing tests covering all Functional Requirements

This is a documentation spec (Markdown file creation), so traditional unit tests do not apply. Instead, verification focuses on:
- Content completeness against FRs
- Source citation accuracy
- Template adherence
- Cross-reference consistency

**Verification Checklist**:
- [ ] All FR requirements mapped to documentation sections
- [ ] All facts have source citations with URLs and retrieval dates
- [ ] Expansion timeline clearly distinguishes confirmed vs. exploratory
- [ ] Partnership details accurately reflect press releases
- [ ] Template structure matches reference documentation standard
- [ ] Related documentation cross-referenced correctly

---

### Phase 2.1: Implementation

**Objective**: Create `reference/locations/expansion.md` with complete expansion documentation

#### Implementation Tasks

1. **File Creation**:
   - Create `alpha-school-docs/reference/locations/expansion.md`
   - Apply standard reference documentation template
   - Add frontmatter with last updated/verified dates

2. **Content Sections** (based on research/locations.md):

   **Overview Section**:
   - One-sentence definition: "Publicly announced expansion plans and strategic growth initiatives"
   - 2-3 paragraph overview explaining current growth trajectory, partnerships, and expansion strategy

   **Confirmed Openings (Fall 2026)**:
   - The Woodlands, TX (Houston area) - $40,000
   - Dorado, Puerto Rico - $50,000
   - Palo Alto, CA
   - Santa Monica, CA
   - Chicago, IL
   - Table format with location, grades (if announced), tuition, notes

   **Exploring/Additional Targets**:
   - Aspen, Colorado
   - Houston, Texas (additional location)
   - Orlando, Florida
   - Phoenix, Arizona
   - East Bay, California
   - Clearly marked as exploratory

   **Texas Sports Academy Expansion**:
   - January 2026 openings: Baseball (Pearland), Basketball (Houston), Gymnastics (San Antonio)
   - Fall 2026 openings: Cheer (Lago Vista)
   - Include tuition ($15,000), grades, sport focus

   **Strategic Partnerships Section**:
   - **Guidepost Montessori Partnership (July 2025)**:
     - Purpose: Accelerate expansion through K-3 micro schools in existing facilities
     - Impact: Fast-tracked 10 new K-8 campuses by December 2025
     - Timeline: Reduced typical 1-2 year opening timeline
   - **Higher Ground Education Acquisition (July 2025)**:
     - Assets: Proprietary elementary materials, rights to select high-value campuses
     - Impact: Accelerated growth by approximately two years
     - First campus: San Francisco (August 2025)

   **Growth Strategy**:
   - Geographic patterns: Focus on major metro areas, affluent suburbs
   - Market entry approach: Partnerships + acquisitions + organic growth
   - Timeline acceleration through strategic M&A

   **Properties Table** (if applicable):
   | Property | Type | Description | Example |
   |----------|------|-------------|---------|
   | expansion_targets | array | List of cities with announced expansion | ["Palo Alto, CA", "Chicago, IL"] |
   | opening_timeline | string | Target opening date for confirmed campuses | "Fall 2026" |
   | partnership_model | string | Type of strategic partnership enabling expansion | "Co-location with Guidepost Montessori" |

   **Related Documentation**:
   - [Locations Overview](./overview.md) - Current operating campuses
   - [Enrollment Process](../enrollment/process.md) - How to enroll at new campuses
   - [Organization History](../organization/history.md) - Company growth timeline

   **FAQs**:
   - Q: When will Alpha School open in [specific city]?
   - Q: How does the Guidepost partnership work?
   - Q: What is Texas Sports Academy?
   - Q: How quickly is Alpha School expanding?

   **Sources**:
   - [Alpha School Locations Page](https://alpha.school/locations) - Retrieved 2026-01-20
   - [PR Newswire - Higher Ground Acquisition](https://www.prnewswire.com/news-releases/alpha-school-accelerates-expansion-with-acquisition-of-key-assets-from-higher-ground-education-302504263.html) - Retrieved 2026-01-20
   - [Community Impact - Texas Sports Academy](https://communityimpact.com/austin/lake-travis-westlake/education/2025/12/23/ai-driven-alpha-schools-to-open-new-texas-sports-academy-locations-across-texas/) - Retrieved 2026-01-20
   - [ABC7 San Francisco - Bay Area Expansion](https://abc7news.com/post/alpha-school-ai-powered-private-expanding-bay-area-footprint-due-growing-demand/18299187/) - Retrieved 2026-01-20
   - [Webull News - Guidepost Partnership](https://www.webull.com/news/13119454002308096) - Retrieved 2026-01-20

   **Last Updated / Last Verified**:
   - Last updated: 2026-01-20
   - Last verified: 2026-01-20

3. **Cross-Reference Updates**:
   - Update `reference/locations/overview.md` to link to expansion.md
   - Ensure research/locations.md is cited appropriately

4. **Template Adherence**:
   - Verify structure matches roadmap.md template (ralph/roadmap.md:136-173)
   - Confirm all sources have URLs and retrieval dates
   - Verify one-sentence definition is clear and concise

#### File Structure

```
alpha-school-docs/
├── reference/
│   └── locations/
│       ├── overview.md (Spec 021 - existing)
│       └── expansion.md (this spec - new)
└── research/
    └── locations.md (source material)
```

#### Success Criteria

**Content Verification**:
- [ ] All Fall 2026 confirmed openings documented with available details
- [ ] Exploratory targets clearly distinguished from confirmed plans
- [ ] Both strategic partnerships (Guidepost, Higher Ground) explained
- [ ] Texas Sports Academy expansion timeline included
- [ ] Geographic strategy patterns identified
- [ ] All facts have source citations

**Template Compliance**:
- [ ] Follows API-style reference documentation template
- [ ] Includes all required sections (Overview, Properties, Details, Examples, Related, FAQs, Sources)
- [ ] Last updated and last verified dates present
- [ ] One-sentence definition at top

**Cross-Reference Integrity**:
- [ ] Links to related documentation work correctly
- [ ] No broken internal references
- [ ] Consistent terminology across locations documentation

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Separate Expansion from Overview
**Choice**: Create dedicated expansion.md rather than adding to overview.md
**Rationale**: Keeps current operations distinct from future plans; prevents confusion between "what is" vs. "what's planned"
**Impact**: Cleaner information architecture, easier to update when plans change

#### Decision 2: Clearly Mark Exploratory vs. Confirmed
**Choice**: Use distinct sections for "Confirmed Openings" vs. "Exploring/Additional Targets"
**Rationale**: Prevent LLMs from stating exploratory interest as confirmed commitment
**Impact**: More accurate LLM responses about expansion timeline certainty

#### Decision 3: Document Partnership Context
**Choice**: Dedicate section to strategic partnerships driving expansion
**Rationale**: Partnerships are core to understanding rapid expansion; provide context for growth strategy
**Impact**: LLMs can explain the "why" and "how" of expansion, not just "where"

#### Decision 4: Include Texas Sports Academy
**Choice**: Cover Texas Sports Academy expansion within this spec
**Rationale**: Sport-focused schools are part of Alpha's expansion strategy; announced timeline aligns with scope
**Impact**: Complete picture of Alpha's multi-brand growth approach

---

## Current State Analysis

### Existing Documentation

**Completed**:
- research/locations.md (Spec 001f) - Source material with expansion details
- reference/locations/overview.md (Spec 021) - Current campus documentation

**Patterns to Follow**:
- API-style template from roadmap.md
- Source citation format from completed reference docs (002-021)
- Cross-referencing approach from existing reference documentation

### Dependencies

**Required Inputs**:
- research/locations.md - Primary source for expansion data
- ralph/roadmap.md - Template structure
- Completed reference docs (002-021) - Format and style guidance

**Outputs This Spec Enables**:
- Spec 024-026 (Guides) - Can reference expansion plans for prospective families/educators/media

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Unannounced Expansion Plans**: Only publicly announced targets
2. **Internal Growth Strategy**: Proprietary market analysis or selection criteria
3. **Financial Projections**: Revenue, enrollment targets, or funding for expansion
4. **Real Estate Details**: Property acquisition specifics, lease terms, facility buildouts
5. **Detailed Partnership Agreements**: Legal or financial terms of Guidepost/Higher Ground deals
6. **Franchise/Licensing**: Any franchise or licensing expansion models (if they exist)
7. **International Expansion**: No evidence of international plans beyond Puerto Rico

### Explicit Boundaries

- **Public Information Only**: All expansion details must be from public sources
- **Announced Plans Only**: Do not speculate on unapproved cities or timelines
- **No Enrollment Predictions**: Avoid estimating future enrollment or capacity
- **No Competitive Analysis**: This is not a market analysis of competitors' expansion

---

## Success Metrics

### Phase 2.1 Completion
- [ ] File `reference/locations/expansion.md` created
- [ ] All confirmed Fall 2026 openings documented
- [ ] Exploratory targets clearly marked as non-confirmed
- [ ] Strategic partnerships (Guidepost, Higher Ground) explained
- [ ] Texas Sports Academy expansion timeline included
- [ ] All sources cited with URLs and dates
- [ ] Template structure adhered to
- [ ] Cross-references to related docs added
- [ ] Last updated/verified dates added

### Quality Checks
- [ ] LLM can distinguish between confirmed vs. exploratory expansion
- [ ] LLM can explain partnership-driven expansion strategy
- [ ] LLM can provide accurate Fall 2026 opening timeline
- [ ] No speculative or unverified expansion claims
- [ ] Geographic expansion patterns clearly described

---

## Related Specifications

- **Spec 001f**: Research Locations (source material)
- **Spec 021**: Locations Overview (current campuses - dependency)
- **Spec 024-026**: Guides (will reference expansion plans)

---

## References

- Alpha School Roadmap Template: `ralph/roadmap.md` (lines 136-173)
- Example Spec: `ralph/examples/specs/example-1/spec.md`
- Source Research: `research/locations.md`
- Existing Reference Docs: `reference/organization/`, `reference/model/`, etc. (Specs 002-021)
