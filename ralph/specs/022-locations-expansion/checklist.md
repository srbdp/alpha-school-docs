# Implementation Checklist: Spec 022 - Locations Expansion Plans

**Spec**: 022-locations-expansion
**Status**: 📋 Planned
**Current Phase**: Not Started
**Progress**: 0% (0/15 tasks)
**Last Updated**: 2026-01-20

---

## Phase 2.0: Content Planning ✅

**Status**: Not Started
**Objective**: Plan documentation structure and verify source material completeness
**Progress**: 0/5 tasks completed

### Planning & Verification

- [ ] **Task 2.0.1**: Review source material
  - Read `research/locations.md` (Spec 001f) completely
  - Identify all expansion-related content
  - Note any information gaps or ambiguities
  - **FR**: All FRs (source validation)
  - **Files**: `research/locations.md`

- [ ] **Task 2.0.2**: Review existing locations documentation
  - Read `reference/locations/overview.md` (Spec 021)
  - Identify overlap to avoid duplication
  - Plan cross-references between overview and expansion docs
  - **FR**: All FRs (consistency)
  - **Files**: `alpha-school-docs/reference/locations/overview.md`

- [ ] **Task 2.0.3**: Verify template requirements
  - Review roadmap template structure (ralph/roadmap.md:136-173)
  - Review completed reference docs (Specs 002-021) for style patterns
  - Confirm required sections: Overview, Properties, Details, Examples, Related, FAQs, Sources
  - **FR**: Template adherence
  - **Files**: `ralph/roadmap.md`, `reference/*/*.md`

- [ ] **Task 2.0.4**: Categorize expansion information
  - Separate confirmed Fall 2026 openings from exploratory targets
  - Organize Texas Sports Academy expansion separately
  - Group strategic partnership information
  - Create outline matching FR requirements
  - **FR**: FR1.1, FR1.2, FR2, FR3
  - **Files**: (Planning document or notes)

- [ ] **Task 2.0.5**: Validate source citations
  - Confirm all expansion claims have source URLs
  - Verify retrieval dates are present (2026-01-20)
  - Check for any missing citations in research/locations.md
  - **FR**: All FRs (source accuracy)
  - **Files**: `research/locations.md`

---

## Phase 2.1: Implementation ✅

**Status**: Not Started
**Objective**: Create complete expansion documentation following template
**Progress**: 0/10 tasks completed

### File Creation and Structure

- [ ] **Task 2.1.1**: Create expansion.md file
  - Create `alpha-school-docs/reference/locations/expansion.md`
  - Add file header with one-sentence definition
  - Add last updated and last verified dates (2026-01-20)
  - **FR**: Template structure
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

- [ ] **Task 2.1.2**: Write Overview section
  - Craft one-sentence definition: "Publicly announced expansion plans and strategic growth initiatives"
  - Write 2-3 paragraph overview covering:
    - Current expansion trajectory
    - Role of strategic partnerships
    - Geographic expansion strategy
  - **FR**: All FRs (context setting)
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

### Confirmed Expansion (FR1.1)

- [ ] **Task 2.1.3**: Document Fall 2026 confirmed openings
  - Create table or structured list for:
    - The Woodlands, TX ($40,000)
    - Dorado, Puerto Rico ($50,000)
    - Palo Alto, CA
    - Santa Monica, CA
    - Chicago, IL
  - Include columns: Location, Grades (if known), Tuition (if known), Notes
  - Add source citations for each location
  - **FR**: FR1.1 - Confirmed Openings
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

### Exploratory Targets (FR1.2)

- [ ] **Task 2.1.4**: Document exploratory/exploring targets
  - Create clearly marked section for exploratory expansion
  - List cities: Aspen CO, Houston TX, Orlando FL, Phoenix AZ, East Bay CA
  - Add caveat: "These locations are under exploration and do not have confirmed opening dates"
  - Source: alpha.school/locations, ABC7 San Francisco
  - **FR**: FR1.2 - Future Exploration Targets
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

### Texas Sports Academy Expansion (FR3.1)

- [ ] **Task 2.1.5**: Document Texas Sports Academy January 2026 openings
  - Create subsection for Texas Sports Academy
  - Document January 2026 openings:
    - Baseball - Pearland, TX (Grades 4-8, $15,000)
    - Basketball - Houston, TX (Grades 4-8, $15,000)
    - Gymnastics - San Antonio, TX (Grades 4-8, $15,000)
  - Include table format with Sport, Location, Grades, Tuition
  - **FR**: FR3.1 - Texas Sports Academy Growth
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

- [ ] **Task 2.1.6**: Document Texas Sports Academy Fall 2026 opening
  - Add Fall 2026 Texas Sports Academy opening:
    - Cheer - Lago Vista, TX (Grades 5-8, $15,000)
  - Note: Texas ESA program may provide ~$10,300 toward tuition
  - Source: Community Impact article
  - **FR**: FR3.1 - Texas Sports Academy Growth
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

### Strategic Partnerships (FR2)

- [ ] **Task 2.1.7**: Document Guidepost Montessori partnership
  - Create Strategic Partnerships section
  - Document Guidepost partnership (July 2025):
    - Purpose: Accelerate expansion through K-3 micro schools
    - Impact: Fast-tracked 10 new K-8 campuses by December 2025
    - Timeline reduction: Typical 1-2 year timeline reduced
    - Locations enabled: Charlotte, Raleigh, Folsom, Palm Beach, Chantilly, Lake Forest, Austin, Plano
  - Source: PR Newswire, Webull News
  - **FR**: FR2.1 - Guidepost Montessori Partnership
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

- [ ] **Task 2.1.8**: Document Higher Ground Education acquisition
  - Add Higher Ground acquisition details (July 2025):
    - Assets acquired: Proprietary elementary materials, rights to select high-value campuses
    - Impact: Accelerated growth timeline by ~2 years
    - First campus result: San Francisco (August 2025)
    - Media contact: Anna Davlantes (anna@alpha.school, 312-488-3472)
  - Source: PR Newswire - Higher Ground press release
  - **FR**: FR2.2 - Higher Ground Education Acquisition
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

### Growth Strategy and Supporting Sections (FR4)

- [ ] **Task 2.1.9**: Add Properties table and Details section
  - Create Properties table (if applicable):
    - expansion_targets (array of cities)
    - opening_timeline (string - "Fall 2026")
    - partnership_model (string - description)
  - Write Details section covering:
    - Geographic strategy patterns (major metros, affluent suburbs)
    - Market entry approach (partnerships + acquisitions + organic)
    - Timeline acceleration through strategic M&A
  - **FR**: FR4.1, FR4.2 - Growth Strategy and Patterns
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

- [ ] **Task 2.1.10**: Add Related, FAQs, and Sources sections
  - **Related Documentation**:
    - Link to `./overview.md` (Current operating campuses)
    - Link to `../enrollment/process.md` (Enrollment at new campuses)
    - Link to `../organization/history.md` (Company growth timeline)
  - **FAQs** (4-6 questions):
    - When will Alpha School open in [specific city]?
    - How does the Guidepost Montessori partnership work?
    - What is Texas Sports Academy?
    - How quickly is Alpha School expanding?
    - Are expansion plans confirmed or exploratory?
  - **Sources** (all with URLs and retrieval dates):
    - Alpha School Locations Page
    - PR Newswire - Higher Ground Acquisition
    - PR Newswire - Guidepost Partnership
    - Community Impact - Texas Sports Academy
    - ABC7 San Francisco - Bay Area expansion
    - Webull News - Guidepost Partnership
  - **FR**: Template compliance
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`

---

## Cross-Reference Updates

**Status**: Not Started
**Progress**: 0/2 tasks completed

- [ ] **Task 2.1.11**: Update locations/overview.md with link to expansion.md
  - Add "Related" link in overview.md pointing to expansion.md
  - Add forward reference in appropriate section (e.g., "For future expansion plans, see [Expansion Plans](./expansion.md)")
  - **Files**: `alpha-school-docs/reference/locations/overview.md`

- [ ] **Task 2.1.12**: Verify all internal cross-references work
  - Test all links in expansion.md resolve correctly
  - Verify bidirectional links between overview.md and expansion.md
  - Check links to enrollment/process.md and organization/history.md
  - **Files**: `alpha-school-docs/reference/locations/expansion.md`, related files

---

## Verification and Quality Checks

**Status**: Not Started
**Progress**: 0/3 tasks completed

- [ ] **Task 2.1.13**: Content completeness verification
  - Verify all FR requirements addressed:
    - FR1.1: Confirmed Fall 2026 openings ✓
    - FR1.2: Exploratory targets with caveats ✓
    - FR2.1: Guidepost partnership documented ✓
    - FR2.2: Higher Ground acquisition documented ✓
    - FR3.1: Texas Sports Academy expansion ✓
    - FR3.2: Other specialty schools mentioned ✓
    - FR4.1: Geographic strategy patterns ✓
    - FR4.2: Timeline acceleration explained ✓
  - Verify all facts have source citations
  - Confirm confirmed vs. exploratory distinction is clear
  - **Success Criteria**: Content Verification

- [ ] **Task 2.1.14**: Template compliance check
  - Verify structure matches roadmap template:
    - One-sentence definition at top ✓
    - Overview (2-3 paragraphs) ✓
    - Properties table (if applicable) ✓
    - Details section ✓
    - Examples (if applicable) ✓
    - Related documentation ✓
    - FAQs ✓
    - Sources with URLs and dates ✓
    - Last updated / Last verified dates ✓
  - Check formatting consistency with other reference docs
  - **Success Criteria**: Template Compliance

- [ ] **Task 2.1.15**: Final quality review
  - Read full document for clarity and flow
  - Verify no speculative or unverified claims
  - Check that exploratory targets are clearly marked
  - Confirm partnership explanations are accurate
  - Verify all URLs in sources are complete and correct
  - Test document with LLM query scenarios:
    - "When is Alpha School opening in Chicago?" → Should return "Fall 2026 (announced)"
    - "Is Alpha School opening in Aspen?" → Should clarify "exploring, not confirmed"
    - "How is Alpha School expanding so fast?" → Should reference partnerships
  - **Success Criteria**: Quality Checks

---

## Current Status Summary

**Phase**: Not Started
**Progress**: 0% complete (0/15 tasks)
**Blockers**: None (dependencies met: 001f, 021 complete)
**Next Task**: Task 2.0.1 - Review source material (research/locations.md)

---

## Session Recovery Context

**Last Working On**: N/A (not started)
**File Paths**:
- Output: `alpha-school-docs/reference/locations/expansion.md` (to be created)
- Source: `research/locations.md` (exists)
- Related: `alpha-school-docs/reference/locations/overview.md` (exists)

**Next Steps**:
1. Review research/locations.md to extract all expansion-related content
2. Review overview.md to identify overlap and cross-reference opportunities
3. Create expansion.md file with template structure
4. Populate sections according to FR requirements

---

## Notes and Decisions

### Implementation Decisions Made
- **Separate File**: expansion.md separate from overview.md for clarity
- **Clear Distinction**: Confirmed vs. exploratory sections to prevent LLM confusion
- **Partnership Context**: Dedicated section explaining Guidepost and Higher Ground deals

### Discovered Issues
- None yet (not started)

### Information Gaps from Research
- Some Fall 2026 locations missing grade level details (Palo Alto, Santa Monica, Chicago)
- Limited information on specialty schools (GT School, Montessorium, etc.) beyond names
- No international expansion evidence beyond Puerto Rico

---

**Checklist last updated**: 2026-01-20
**Spec version**: 1.0
