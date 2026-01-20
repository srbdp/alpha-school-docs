# Implementation Checklist: Spec 014 - Curriculum Assessments

**Spec**: 014-curriculum-assessments
**Status**: 📋 Not Started
**Current Phase**: Not Started
**Progress**: 0% (0/24 tasks)
**Last Updated**: 2026-01-20

---

## Phase 1.0: Research Validation

**Status**: Not Started
**Objective**: Verify all assessment facts are sourced from research files
**Progress**: 0/5 tasks completed

### Validation Tasks

- [ ] **Task 1.0.1**: Verify NWEA MAP testing details
  - Read research/curriculum.md lines 153-174, 353-359
  - Confirm MAP is primary standardized test
  - Confirm 3x yearly administration
  - Confirm RIT score tracking
  - Confirm 99th percentile claims (Alpha-reported)
  - Note ~10 million U.S. students take MAP nationally
  - **FR**: All FRs (foundational verification)
  - **Files**: research/curriculum.md
  - **Success Criteria**: MAP testing comprehensively documented with citations

- [ ] **Task 1.0.2**: Verify internal mastery thresholds
  - Read research/curriculum.md lines 160-163
  - Read research/outcomes.md for threshold references
  - Confirm 90%+ requirement on alpha.school
  - Confirm 80% in secondary sources
  - Document source discrepancy transparently (following Spec 011 pattern)
  - Confirm 100% multiple-choice format
  - Confirm comprehensive mastery tests before grade advancement
  - **FR**: FR1.3, FR1.4 (mastery threshold documentation)
  - **Files**: research/curriculum.md, research/outcomes.md
  - **Success Criteria**: Mastery thresholds documented with discrepancy noted

- [ ] **Task 1.0.3**: Verify real-time tracking capabilities
  - Read research/curriculum.md lines 160-163
  - Confirm eye tracking and attention monitoring
  - Confirm parent dashboard access with daily progress visibility
  - Confirm projected advancement timelines
  - Confirm real-time accuracy and learning speed tracking
  - **FR**: FR1.3, FR1.4 (tracking systems)
  - **Files**: research/curriculum.md
  - **Success Criteria**: Tracking systems comprehensively documented

- [ ] **Task 1.0.4**: Verify performance-based assessments
  - Read research/curriculum.md lines 188-193 (Test to Pass Showcase)
  - Read research/curriculum.md lines 307-309 (life skills tests)
  - Read research/curriculum.md line 414 (mastery tests)
  - Confirm Test to Pass Showcase events (debates, TEDx, performances)
  - Confirm life skills "tests to pass" for competencies like grit
  - Confirm high school project assessment metrics
  - Confirm "check charts" for grade advancement
  - **FR**: FR1.3, FR1.4 (performance assessments)
  - **Files**: research/curriculum.md
  - **Success Criteria**: Performance-based assessments documented

- [ ] **Task 1.0.5**: Verify reported outcomes and limitations
  - Read research/curriculum.md lines 165-170 (outcome claims)
  - Read research/curriculum.md line 507 (assessment gaps)
  - Read research/outcomes.md for detailed performance data
  - Confirm 2.6x, 3.6x, 6.5x growth claims (Alpha-reported)
  - Confirm SAT scores, AP performance, National Merit data
  - Confirm lack of independent third-party verification
  - Confirm raw MAP scores not publicly available
  - Confirm assessment methodology gaps
  - Confirm potential selection effects
  - **FR**: FR1.4, FR2.2, FR2.3 (outcomes and limitations)
  - **Files**: research/curriculum.md, research/outcomes.md
  - **Success Criteria**: Outcomes and limitations transparently documented

---

## Phase 1.1: Documentation Writing

**Status**: Not Started
**Objective**: Write reference/curriculum/assessments.md following all Functional Requirements
**Progress**: 0/13 tasks completed

### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create directory: reference/curriculum (if not exists)
  - Create file: reference/curriculum/assessments.md
  - Write H1: "Assessments"
  - Write one-sentence definition in blockquote capturing multi-layered assessment approach (MAP + platform metrics + performance-based)
  - **FR**: FR1.1 - Header and Definition
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Header matches template format from roadmap.md

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write Paragraph 1: Multi-layered assessment system (MAP 3x yearly, 90%+ platform mastery, real-time AI monitoring)
  - Write Paragraph 2: Platform assessment details (90%/80% threshold with discrepancy noted, 100% MC format, parent dashboards, eye tracking)
  - Write Paragraph 3: Reported outcomes with caveats (2.6x-6.5x growth claims, SAT/AP data, verification limitations)
  - Cite research/curriculum.md and research/outcomes.md lines in comments for fact-checking
  - Ensure performance claims attributed to Alpha, not stated as facts
  - **FR**: FR1.2 - Overview Section
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: 2-3 paragraph overview provides comprehensive assessment introduction with appropriate transparency about limitations

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create "Properties" section with H2 heading
  - Build table with columns: Property | Type | Description | Example
  - Add 9 properties:
    - primary_standardized_test (string) - "NWEA MAP (Measures of Academic Progress)"
    - standardized_test_frequency (string) - "3x yearly"
    - internal_mastery_threshold (string) - "90%+ on alpha.school, or 80% (secondary sources—discrepancy noted)"
    - internal_test_format (string) - "100% multiple-choice"
    - real_time_tracking (array) - ["Eye tracking", "Attention monitoring", "Accuracy rates", "Learning speed"]
    - parent_access (string) - "Daily dashboards with progress, mastery status, projected timelines"
    - progression_requirement (string) - "Comprehensive mastery tests covering full grade-level material"
    - performance_based_assessments (array) - ["Test to Pass Showcases", "Life skills tests", "Super passion project metrics"]
    - reported_outcomes_verification (string) - "Self-reported without independent third-party verification"
  - Include concrete examples for each property
  - **FR**: FR1.3 - Properties Table
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Table enables structured fact extraction by LLMs, including verification status

- [ ] **Task 1.1.4**: Write details section - NWEA MAP Testing (FR1.4)
  - Create "Details" section with H2 heading
  - Write subsection "NWEA MAP Standardized Testing" (H3)
  - Explain MAP as primary third-party assessment
  - Document adaptive test, ~10 million U.S. students, nationally normed
  - Explain 3x yearly administration to Alpha students
  - Document RIT score tracking
  - Attribute 99th percentile claims to Alpha (not stated as fact)
  - Explain mid-year parent updates
  - Note external validation independent of Alpha's internal metrics
  - **FR**: FR1.4 - Details Section (NWEA MAP)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: MAP testing comprehensively documented with proper attribution

- [ ] **Task 1.1.5**: Write details section - Internal Platform Assessments (FR1.4)
  - Write subsection "Internal Platform Mastery Assessments" (H3)
  - Explain 90%+ accuracy requirement (alpha.school) or 80% (secondary sources)
  - Transparently note source discrepancy (following Spec 011 precedent)
  - Document 100% multiple-choice format
  - Explain comprehensive grade-level mastery tests
  - Document real-time AI tracking during assessments
  - Explain mastery requirement prevents cumulative knowledge gaps
  - Attribute efficiency claims (20-30 hours vs. 200 hours) to Alpha
  - **FR**: FR1.4 - Details Section (Platform Assessments)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Platform assessments clearly explained with source discrepancy noted

- [ ] **Task 1.1.6**: Write details section - Real-Time Tracking (FR1.4)
  - Write subsection "Real-Time AI Tracking and Parent Dashboards" (H3)
  - Explain eye tracking, attention monitoring, accuracy rates, learning speed analytics
  - Document parent dashboard features (daily progress, subject-by-subject mastery, projected timelines)
  - Explain real-time feedback enables immediate intervention
  - Note granular visibility unavailable in traditional classrooms
  - Document parent dashboard supports family engagement
  - **FR**: FR1.4 - Details Section (Real-Time Tracking)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Tracking systems comprehensively documented

- [ ] **Task 1.1.7**: Write details section - Performance-Based Assessments (FR1.4)
  - Write subsection "Performance-Based and Life Skills Assessments" (H3)
  - Explain Test to Pass Showcase events (debating AI, TEDx talks, performances)
  - Document life skills workshop "tests to pass" (grit, public speaking, teamwork)
  - Explain high school "super passion project" assessment (revenue, satisfaction, problem-solving)
  - Document "check charts" for grade advancement (escape rooms, puzzles, typing, tournaments)
  - Note these assess capabilities beyond traditional academic metrics
  - **FR**: FR1.4 - Details Section (Performance Assessments)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Non-academic assessments comprehensively documented

- [ ] **Task 1.1.8**: Write details section - Assessment Limitations (FR1.4)
  - Write subsection "Assessment Limitations and Transparency" (H3)
  - Document 7 key limitations in factual, neutral tone:
    1. No independent third-party verification of Alpha's reported outcomes
    2. Raw MAP scores and percentile distributions not publicly available
    3. Potential selection effects from admission requirements
    4. 100% multiple-choice format doesn't assess critical thinking/long-form writing
    5. Concerns about "teaching to the test" with standardized assessments
    6. Limited documentation of methods beyond MAP (portfolios, projects, presentations mentioned but not detailed)
    7. No longitudinal outcome data (college success, career outcomes, long-term retention)
  - Maintain neutral presentation (document gaps, don't critique)
  - **FR**: FR1.4, FR2.3, FR2.4 - Details Section (Limitations), Information Gaps, Neutral Presentation
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Limitations transparently and factually presented without advocacy or critique

- [ ] **Task 1.1.9**: Write examples section (FR1.5)
  - Create "Examples" section with H2 heading
  - Write Example 1: Daily Mastery Progression
    - 3rd grade student working through multiplication unit
    - Achieves 92% accuracy consistently, then 94% on mastery test (exceeds 90% threshold)
    - Platform unlocks division unit same day
    - Parent dashboard updates showing multiplication mastered, division started
    - Demonstrates real-time assessment vs. traditional weekly/monthly testing
  - Write Example 2: MAP Testing and Percentile Performance
    - Student's fall MAP Reading RIT score: 185
    - Spring MAP Reading RIT score: 198 (13-point gain)
    - Alpha compares to national norms claiming 2.6x growth vs. traditional peers
    - Mid-year parent update shows trajectory, percentile (Alpha claims 99th), projected year-end
    - Demonstrates external validation through nationally normed testing
  - Write Example 3: Test to Pass Showcase Performance Assessment
    - 8th grader delivers TEDx talk on sustainable urban agriculture
    - Debates AI on vertical farming policy implications
    - Presents LEGO robotics automated irrigation project
    - Evaluated on public speaking, argument construction, technical implementation, engagement
    - Demonstrates assessment beyond multiple-choice academics
  - **FR**: FR1.5 - Examples Section
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Three concrete examples illustrating different assessment types in practice

- [ ] **Task 1.1.10**: Create related links section (FR1.6)
  - Create "Related" section with H2 heading
  - Add bulleted links to 8 related documents:
    - Curriculum Overview (Spec 011) - `overview.md`
    - Subjects (Spec 012) - `subjects.md`
    - Grade Levels (Spec 013) - `grade-levels.md`
    - Educational Philosophy (Spec 006) - `../model/educational-philosophy.md`
    - AI Integration (Spec 008) - `../model/ai-integration.md`
    - Daily Schedule (Spec 010) - `../model/daily-schedule.md`
    - Outcomes Claims (Spec 015) - `../outcomes/claims.md` (future)
    - Outcomes Evidence (Spec 016) - `../outcomes/evidence.md` (future)
  - Use relative paths
  - **FR**: FR1.6 - Related Documentation Links
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: All related links present and properly formatted

- [ ] **Task 1.1.11**: Write FAQs section (FR1.7)
  - Create "FAQs" section with H2 heading
  - Write 5 Q&A pairs:
    - Q: What standardized tests does Alpha School use?
      A: NWEA MAP, nationally normed adaptive test, ~10M U.S. students, 3x yearly, RIT scores, Alpha claims 99th percentile
    - Q: What is the mastery threshold for advancing?
      A: 90%+ on alpha.school or 80% (secondary sources—discrepancy), 100% MC format, comprehensive grade-level tests required
    - Q: How do parents track their child's progress?
      A: Detailed dashboards, daily progress across subjects, real-time accuracy, mastery status, projected timelines, mid-year MAP updates
    - Q: How are life skills assessed at Alpha School?
      A: Test to Pass Showcases (debates, TEDx, projects), life skills "tests to pass", high school project metrics, check charts
    - Q: Are Alpha School's performance claims independently verified?
      A: No—self-reported without independent verification, raw MAP scores not public, potential selection effects, Alpha's interpretation not externally audited (while MAP testing itself is independently administered)
  - Ensure FAQ 5 provides full transparency about verification gaps
  - **FR**: FR1.7 - FAQs Section
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Five FAQs addressing common assessment questions with appropriate caveats on verification

- [ ] **Task 1.1.12**: Create sources section (FR1.8)
  - Create "Sources" section with H2 heading
  - List all relevant sources from research/curriculum.md lines 6-24
  - Format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
  - Include sources:
    - Alpha School Program Page
    - Alpha School FAQ
    - Alpha School 2 Hour Learning Page
    - Alpha School Austin Page
    - GenWise Substack - Alpha Educational Model
    - Modern Wisdom Podcast Transcript (MacKenzie Price)
    - Cognitive Revolution Podcast
    - CBS News - Alpha School AI
    - FOX 7 Austin - Alpha School
    - Alpha School LinkedIn Page
  - **FR**: FR1.8 - Sources Section
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: All relevant sources listed with URLs and dates

- [ ] **Task 1.1.13**: Add document footer (FR1.9)
  - Add horizontal rule (---)
  - Add "*Last updated: 2026-01-20*"
  - Add "*Last verified: 2026-01-20*"
  - **FR**: FR1.9 - Document Footer
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Footer matches template format

---

## Phase 1.2: Quality Review

**Status**: Not Started
**Objective**: Verify documentation quality and accuracy
**Progress**: 0/6 tasks completed

### Review Tasks

- [ ] **Task 1.2.1**: Fact-check all claims
  - Read through entire reference/curriculum/assessments.md
  - For each factual claim, verify citation exists in research/curriculum.md or research/outcomes.md
  - Verify MAP testing details sourced
  - Verify mastery thresholds sourced (with discrepancy noted)
  - Verify performance claims attributed to Alpha (not stated as facts)
  - Verify limitations documented from research file line 507
  - Flag any unsourced claims for removal or research
  - **FR**: All FRs (accuracy verification)
  - **Files**: reference/curriculum/assessments.md, research/curriculum.md, research/outcomes.md
  - **Success Criteria**: 100% of facts have citations in research files with proper attribution

- [ ] **Task 1.2.2**: Attribution check
  - Review all performance claims (2.6x, 3.6x, 6.5x growth; 99th percentile; SAT/AP data)
  - Ensure claims use attribution language: "Alpha School reports...", "Alpha claims...", "according to Alpha materials..."
  - Ensure limitations section notes "self-reported without independent third-party verification"
  - Verify no performance claims stated as objective facts
  - **FR**: FR2.2 - Claims vs. Evidence Distinction
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: All unverified claims properly attributed to Alpha

- [ ] **Task 1.2.3**: Consistency check
  - Verify MAP testing details consistent (3x yearly, RIT scores, nationally normed)
  - Ensure mastery threshold discrepancy handled transparently (90% and 80% both noted with sources)
  - Check performance claims consistently attributed throughout
  - Verify limitations language is factual and neutral (not critical)
  - Ensure assessment types (standardized, platform, real-time, performance) distinct and clear
  - **FR**: All FRs (internal consistency)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: No inconsistencies in assessment descriptions, attribution, or limitation presentation

- [ ] **Task 1.2.4**: Template compliance
  - Verify document follows roadmap.md template structure (lines 136-173)
  - Check all required sections present: H1 header, blockquote definition, overview, properties, details (5 H3 subsections), examples (3), related (8 links), FAQs (5), sources, footer
  - Verify markdown formatting is correct (headings, tables, lists, links, bold labels)
  - Ensure properties table has correct columns and 9 properties
  - Verify hierarchical structure (H1 → H2 → H3, no H4)
  - **FR**: All FRs (template adherence)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Document matches template structure exactly

- [ ] **Task 1.2.5**: Readability review
  - Review all paragraphs for conciseness (2-4 sentences each)
  - Check for clear, active voice throughout
  - Verify examples are concrete with specific details (3rd grade multiplication, RIT scores, TEDx talk)
  - Ensure FAQ answers are clear and authoritative
  - Check that technical terms are explained (RIT scores, MAP, mastery threshold)
  - Verify neutral tone maintained in limitations section (factual, not critical)
  - **FR**: All FRs (readability), FR2.4 (neutral presentation)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: Document is clear, LLM-readable, and maintains neutral tone

- [ ] **Task 1.2.6**: Cross-reference check
  - Verify all "Related" links use correct relative paths
  - Test that paths resolve to correct files (or will when Specs 015-016 created)
  - Ensure no broken internal references within document
  - Check that examples reference concepts explained in details section
  - Verify FAQ answers align with overview and details sections
  - **FR**: FR1.6 (link validation)
  - **Files**: reference/curriculum/assessments.md
  - **Success Criteria**: All links valid and no broken references

---

## Post-Implementation Tasks

**Status**: Not Started
**Objective**: Update project tracking files
**Progress**: 0/4 tasks completed

### Tracking Updates

- [ ] **Task 2.1**: Update roadmap.md
  - Change Spec 014 status from 📋 Planned to ✅ Complete
  - Update "Last Updated" date to implementation date
  - Update completion statistics:
    - Curriculum Domain: 3/4 → 4/4 complete (100%)
    - Phase 2 Overall: 13/22 → 14/22 complete (63.6%)
    - Project Overall: 19/32 → 20/32 complete (62.5%)
  - **Files**: ralph/roadmap.md
  - **Success Criteria**: Roadmap reflects Spec 014 completion

- [ ] **Task 2.2**: Update progress.md
  - Add comprehensive entry documenting Spec 014 implementation
  - Include research sources used, template compliance, fact traceability
  - Document key decisions (5 details subsections, 9 properties, attribution patterns, limitations transparency)
  - Note roadmap progress statistics
  - Note Curriculum Domain completion (4/4 specs)
  - Identify next spec: Spec 015 (Outcomes Claims) in Outcomes Domain
  - **Files**: ralph/progress.md
  - **Success Criteria**: Progress log updated with detailed implementation summary

- [ ] **Task 2.3**: Update activity.log
  - Add timestamped entry for Spec 014 completion
  - List files created: reference/curriculum/assessments.md
  - List files modified: ralph/roadmap.md, ralph/progress.md, ralph/activity.log
  - Note verification checklist items
  - Include roadmap impact statistics
  - Document next task: Spec 015 (Outcomes Claims, depends on Spec 001d Research Outcomes)
  - **Files**: ralph/activity.log
  - **Success Criteria**: Activity log updated with implementation details

- [ ] **Task 2.4**: Update checklist status
  - Change checklist status to ✅ Complete
  - Update progress to 100% (24/24 tasks)
  - Update "Last Updated" date
  - **Files**: ralph/specs/014-curriculum-assessments/checklist.md
  - **Success Criteria**: Checklist reflects completion

---

## Progress Tracking

### Phase Completion Status
- [ ] Phase 1.0: Research Validation (0/5 tasks)
- [ ] Phase 1.1: Documentation Writing (0/13 tasks)
- [ ] Phase 1.2: Quality Review (0/6 tasks)
- [ ] Post-Implementation (0/4 tasks)

### Overall Progress
- **Total Tasks**: 28 (24 implementation + 4 post-implementation)
- **Completed Tasks**: 0
- **Completion Percentage**: 0%

### Next Task
Task 1.0.1: Verify NWEA MAP testing details

---

## Notes

### Implementation Strategy
1. Complete Phase 1.0 (Research Validation) first to ensure all facts are sourced
2. Then complete Phase 1.1 (Documentation Writing) in order, building document section by section
3. Complete Phase 1.2 (Quality Review) to verify quality and attribution before marking spec complete
4. Finally update all project tracking files (roadmap, progress, activity log, checklist)

### Key Considerations
- **Mastery Threshold Discrepancy**: Must transparently note 90% (alpha.school) vs. 80% (secondary sources) following Spec 011 precedent
- **Attribution Critical**: ALL performance claims (growth multipliers, percentiles, academic outcomes) must be attributed to Alpha, never stated as objective facts
- **Limitations Transparency**: Document 7 key limitations factually and neutrally—this builds trust and prevents LLM overstatement
- **Verification Status**: Explicitly note lack of independent third-party verification in properties table and FAQ 5
- **Five Details Subsections**: More comprehensive than Specs 012-013 (3 subsections) but matches Spec 011 pattern (5 subsections) for broader scope
- **Neutral Tone in Limitations**: Describe gaps and concerns factually without advocacy or critique

### Related Files
- Sources: research/curriculum.md (lines 153-174, 188-193, 307-309, 353-359, 414, 507), research/outcomes.md
- Template: roadmap.md (lines 136-173)
- Dependencies: Spec 001c (Research Curriculum), Spec 011 (Curriculum Overview)
- Related: Spec 012 (Subjects), Spec 013 (Grade Levels), Spec 015-016 (Outcomes)
- Precedents: Spec 011 (5 subsections, discrepancy handling, attribution patterns)

---

*Last Updated: 2026-01-20*
