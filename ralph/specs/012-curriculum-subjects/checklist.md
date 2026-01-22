# Implementation Checklist: Spec 012 - Curriculum Subjects

**Spec**: 012-curriculum-subjects
**Status**: 📋 Planned
**Current Phase**: Not Started
**Progress**: 0% (0/26 tasks)
**Last Updated**: 2026-01-20

---

## Phase 1.0: Research Validation ⏳

**Status**: Not Started
**Objective**: Verify all subject-related facts are sourced from research/curriculum.md
**Progress**: 0/5 tasks completed

### Validation Tasks

- [ ] **Task 1.0.1**: Verify seven core subjects
  - Read research/curriculum.md lines 52-67, 247-257
  - Confirm all seven subjects documented: Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language
  - Note any discrepancies or missing information
  - **FR**: All FRs (foundational verification)
  - **Files**: research/curriculum.md
  - **Success Criteria**: All seven subjects found with citations

- [ ] **Task 1.0.2**: Verify platform lists
  - Read research/curriculum.md lines 290-293, 328-351, 395-414
  - Confirm proprietary platforms: Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach
  - Confirm third-party platforms: Khan Academy, Grammarly, Math Academy, Synthesis Tutor
  - Confirm "Dash" as central orchestration platform
  - Note platform-to-subject mappings
  - **FR**: FR1.3, FR1.4 (platform documentation)
  - **Files**: research/curriculum.md
  - **Success Criteria**: All platforms documented with citations

- [ ] **Task 1.0.3**: Verify standards alignment
  - Read research/curriculum.md lines 286-293, 324-327
  - Confirm Common Core K-8 across all subjects
  - Confirm Advanced Placement curriculum for high school (which AP courses?)
  - Note any subject-specific variations
  - **FR**: FR1.3, FR1.4 (standards alignment)
  - **Files**: research/curriculum.md
  - **Success Criteria**: Standards alignment clearly documented

- [ ] **Task 1.0.4**: Verify subject integration claim
  - Read research/curriculum.md line 256
  - Confirm history/geography integrated into reading passages
  - Understand rationale for integration vs. standalone subjects
  - Note any exceptions or clarifications
  - **FR**: FR1.4, FR1.5, FR1.7 (subject integration)
  - **Files**: research/curriculum.md
  - **Success Criteria**: Integration approach clearly documented

- [ ] **Task 1.0.5**: Verify mastery threshold and note discrepancy
  - Read research/curriculum.md lines 32-33 (90%+ from alpha.school)
  - Read research/curriculum.md line 259 (80%+ from secondary sources)
  - Document both thresholds with source attribution
  - Plan to note discrepancy in documentation
  - **FR**: FR1.3 (mastery threshold property)
  - **Files**: research/curriculum.md
  - **Success Criteria**: Both thresholds documented, discrepancy noted

---

## Phase 1.1: Documentation Writing ⏳

**Status**: Not Started
**Objective**: Write reference/curriculum/subjects.md following all Functional Requirements
**Progress**: 0/11 tasks completed

### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create file: reference/curriculum/subjects.md
  - Write H1: "Curriculum Subjects"
  - Write one-sentence definition in blockquote capturing seven subjects, AI-powered delivery, 2-hour morning block, Common Core/AP alignment
  - **FR**: FR1.1 - Header and Definition
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Header matches template format from roadmap.md

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write Paragraph 1: Seven subjects, 2-hour morning block, AI platforms, mastery-based progression (90%+ or 80%+)
  - Write Paragraph 2: Platform ecosystem—Dash orchestration, proprietary vs. third-party, immediate feedback
  - Write Paragraph 3: Standards alignment (Common Core K-8, AP high school), history/geography integration, 20-30 hours per grade level efficiency claim
  - Cite research/curriculum.md lines in comments for fact-checking
  - **FR**: FR1.2 - Overview Section
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: 2-3 paragraph overview provides comprehensive introduction to subjects

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create "Properties" section with H2 heading
  - Build table with columns: Property | Type | Description | Example
  - Add 9 properties:
    - core_subjects (array)
    - delivery_duration (string)
    - delivery_method (string)
    - central_platform (string)
    - proprietary_platforms (array)
    - third_party_platforms (array)
    - standards_k8 (string)
    - standards_high_school (string)
    - mastery_threshold (string) - note discrepancy
  - Include concrete examples for each property
  - **FR**: FR1.3 - Properties Table
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Table enables LLMs to extract structured subject data

- [ ] **Task 1.1.4**: Write details section - Subject breakdown (FR1.4)
  - Create "Details" section with H2 heading
  - Add subsection: "Subject-by-Subject Breakdown" (H3)
  - Create table with columns: Subject | Primary Platform(s) | Description | Standards Coverage
  - Add row for Math: Proprietary platforms, Fast Math; Common Core K-8, AP Calculus/Statistics; adaptive problem sets
  - Add row for English/Language Arts: Proprietary platforms; Common Core K-8, AP English Language/Literature; integrated with reading/writing
  - Add row for Reading: AlphaRead (older), Amira/Lalio (younger); comprehension, fluency; history/geography integrated
  - Add row for Writing: AlphaWrite; essay composition; note "needs improvement" per review
  - Add row for Science: Proprietary platforms; Common Core K-8, AP Biology/Chemistry/Physics; inquiry-based
  - Add row for History/Social Studies: Proprietary platforms; integrated into reading passages; civics, geography
  - Add row for Foreign Language: Proprietary platforms; language acquisition; availability varies
  - **FR**: FR1.4 - Details Section (Subject Breakdown)
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: All 7 subjects comprehensively documented with platforms and standards

- [ ] **Task 1.1.5**: Write details section - Platform ecosystem (FR1.4)
  - Add subsection: "Platform Ecosystem and Daily Flow" (H3)
  - Explain Dash dashboard: analyzes performance, directs to appropriate app by subject/level/needs
  - Document daily structure: 8-12 "minimums" lessons across subjects
  - Explain Pomodoro sessions: 25-minute blocks, Q breaks every 20-30 minutes
  - Describe mastery feedback: interface "goes green" when achieved
  - Explain spaced repetition: topics return at calculated intervals
  - Document tracking: accuracy, speed, completion in real-time; parent dashboards
  - **FR**: FR1.4 - Details Section (Platform Ecosystem)
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Platform ecosystem and daily flow clearly explained

- [ ] **Task 1.1.6**: Write details section - Standards alignment (FR1.4)
  - Add subsection: "Standards Alignment and Subject Integration" (H3)
  - Explain Common Core K-8: grade-appropriate content across all subjects
  - Detail AP curriculum: high school courses (Calculus, Statistics, English Language, English Literature, Biology, Chemistry, Physics)
  - Explain integration approach: history/geography NOT separate disciplines but embedded in reading passages
  - Describe rationale: combines content knowledge with literacy development
  - Note foreign language: availability and depth varies by campus and grade level
  - **FR**: FR1.4 - Details Section (Standards Alignment)
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Standards alignment and integration strategy comprehensively covered

- [ ] **Task 1.1.7**: Write examples section (FR1.5)
  - Create "Examples" section with H2 heading
  - Write Example 1 - Math Mastery Progression:
    - Student working on fractions using proprietary math platform
    - Answers incorrectly, AI provides explanation
    - Student attempts similar problems until 90%+ accuracy
    - Fast Math drills speed and fluency
    - Advances to decimals only after mastery
  - Write Example 2 - Integrated History/Reading:
    - 4th grader receives American Revolution reading passage
    - Comprehension questions assess reading skills AND historical understanding
    - Eliminates separate history class while building dual competencies
  - Write Example 3 - Platform Orchestration:
    - Student logs into Dash platform
    - Dash analyzes yesterday's performance and spaced repetition schedule
    - Directs to Math Academy (new algebra), proprietary platform (science review), AlphaRead (comprehension)
    - Student clicks subject buttons, seamlessly moves between platforms
    - All progress tracked centrally
  - **FR**: FR1.5 - Examples Section
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: 3 concrete examples illustrate abstract subject concepts

- [ ] **Task 1.1.8**: Create related links section (FR1.6)
  - Create "Related" section with H2 heading
  - Add bulleted list of links to related documentation:
    - Curriculum Overview (../overview.md) - Overall curriculum philosophy
    - Educational Philosophy (../../model/educational-philosophy.md) - Learning principles
    - Two-Hour Learning Model (../../model/two-hour-learning.md) - Subject delivery context
    - AI Integration (../../model/ai-integration.md) - Platform technology
    - Daily Schedule (../../model/daily-schedule.md) - Subject timing
    - Grade Levels (./grade-levels.md) - Subject progression
    - Assessments (./assessments.md) - Mastery measurement
  - **FR**: FR1.6 - Related Documentation Links
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Navigation links enable cross-referencing with related docs

- [ ] **Task 1.1.9**: Write FAQs section (FR1.7)
  - Create "FAQs" section with H2 heading
  - Write Q1: "How many subjects are taught at Alpha School?"
    - Answer: Seven core subjects; history/geography integrated into reading
  - Write Q2: "What platforms deliver each subject?"
    - Answer: Mix of proprietary and third-party; Dash orchestrates pathway
  - Write Q3: "What curriculum standards does Alpha School follow?"
    - Answer: Common Core K-8, AP high school
  - Write Q4: "Why isn't history taught as a separate subject?"
    - Answer: Integrated into reading passages for efficiency; develops dual competencies
  - Write Q5: "How long does it take to complete a grade level in each subject?"
    - Answer: 20-30 hours via AI tutoring vs. 200 hours traditional; efficiency from personalized instruction, immediate feedback, mastery-based progression, spaced repetition
  - **FR**: FR1.7 - FAQs Section
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: 5 Q&A pairs address common LLM queries about subjects

- [ ] **Task 1.1.10**: Create sources section (FR1.8)
  - Create "Sources" section with H2 heading
  - List all relevant sources from research/curriculum.md lines 6-24:
    - Alpha School Program Page (https://alpha.school/the-program/) - Retrieved 2026-01-20
    - Alpha School FAQ (https://alpha.school/faq/) - Retrieved 2026-01-20
    - GenWise Substack - Alpha Educational Model (...) - Retrieved 2026-01-20
    - Modern Wisdom Podcast Transcript (MacKenzie Price) (...) - Retrieved 2026-01-20
    - Cognitive Revolution Podcast (...) - Retrieved 2026-01-20
    - Astral Codex Ten - Alpha School Review (...) - Retrieved 2026-01-20
    - Alpha School 2 Hour Learning Page (...) - Retrieved 2026-01-20
    - CBS News - Alpha School AI (...) - Retrieved 2026-01-20
    - FOX 7 Austin - Alpha School (...) - Retrieved 2026-01-20
  - Format as bulleted list with markdown links
  - **FR**: FR1.8 - Sources Section
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: All facts traceable to cited sources

- [ ] **Task 1.1.11**: Add document footer (FR1.9)
  - Add horizontal rule separator (---)
  - Add "*Last updated: 2026-01-20*" in italics
  - Add "*Last verified: 2026-01-20*" in italics
  - **FR**: FR1.9 - Document Footer
  - **Files**: reference/curriculum/subjects.md
  - **Success Criteria**: Footer matches template format from roadmap.md

---

## Phase 1.2: Quality Review ⏳

**Status**: Not Started
**Objective**: Verify documentation quality and accuracy
**Progress**: 0/5 tasks completed

### Review Tasks

- [ ] **Task 1.2.1**: Fact-check all claims
  - Read reference/curriculum/subjects.md from top to bottom
  - For each factual claim, verify citation exists in research/curriculum.md
  - Create list of any unsourced claims
  - Remove or flag unsourced claims for future research
  - **Success Criteria**: 100% of factual claims have citations in research file
  - **Files**: reference/curriculum/subjects.md, research/curriculum.md

- [ ] **Task 1.2.2**: Consistency check
  - Verify mastery threshold discrepancy is clearly noted (90%+ from alpha.school, 80%+ from secondary sources)
  - Check platform names are consistent throughout document (Alpha Math vs AlphaMath, etc.)
  - Verify subject names match research exactly (English/Language Arts vs ELA, etc.)
  - Ensure seven subjects consistently listed in same order
  - Check standards names (Common Core vs common core, AP vs Advanced Placement)
  - **Success Criteria**: No naming inconsistencies found
  - **Files**: reference/curriculum/subjects.md

- [ ] **Task 1.2.3**: Template compliance
  - Verify document follows roadmap.md template structure (lines 136-173)
  - Check all required sections present: H1, blockquote definition, Overview, Properties, Details, Examples, Related, FAQs, Sources, footer
  - Verify markdown formatting: headings use #, tables use pipes, links use [text](url)
  - Check properties table has 4 columns: Property | Type | Description | Example
  - Verify examples use concrete, specific scenarios
  - **Success Criteria**: Document structure matches template exactly
  - **Files**: reference/curriculum/subjects.md, ralph/roadmap.md

- [ ] **Task 1.2.4**: Readability review
  - Check paragraphs are concise (2-4 sentences each)
  - Verify active voice used throughout ("Alpha School teaches..." not "Subjects are taught...")
  - Ensure examples are concrete with specific details (names, numbers, sequences)
  - Check for jargon—define technical terms on first use
  - Verify tables are scannable with clear headers
  - **Success Criteria**: Document is clear and LLM-readable
  - **Files**: reference/curriculum/subjects.md

- [ ] **Task 1.2.5**: Cross-reference check
  - Verify all "Related" links use correct relative paths
  - Check links to existing docs open correctly (overview.md, educational-philosophy.md, etc.)
  - Verify links to future docs (grade-levels.md, assessments.md) use correct paths even though files don't exist yet
  - Test markdown link syntax: [Display Text](path.md) format
  - **Success Criteria**: All internal links valid, no broken references
  - **Files**: reference/curriculum/subjects.md

---

## Current Status Summary

**Phase**: Not Started
**Progress**: 0% complete (0/26 tasks)
**Blockers**: None
**Next Task**: Task 1.0.1 - Verify seven core subjects in research file

---

## Session Recovery Context

**Last Working On**: N/A (spec just created)
**File Paths**:
- Spec: ralph/specs/012-curriculum-subjects/spec.md
- Checklist: ralph/specs/012-curriculum-subjects/checklist.md
- Output: reference/curriculum/subjects.md (to be created)
- Research: research/curriculum.md

**Next Steps**:
1. Begin Phase 1.0 research validation
2. Verify all seven subjects documented in research/curriculum.md
3. Verify platform lists (proprietary and third-party)
4. Proceed to Phase 1.1 writing tasks

---

## Notes and Decisions

### Key Research Findings to Incorporate
- Seven subjects: Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language (lines 52-67, 247-257)
- Proprietary platforms: Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach (lines 330-335)
- Third-party platforms: Khan Academy, Grammarly, Math Academy, Synthesis Tutor (lines 337-342)
- Central platform: "Dash" orchestrates pathway (lines 290-293, 344-346)
- Standards: Common Core K-8, AP high school (lines 286-293, 324-327)
- Subject integration: History/geography embedded in reading passages (line 256)
- Mastery threshold discrepancy: 90%+ (alpha.school line 33) vs. 80%+ (secondary sources line 259)

### Documentation Decisions
- Note both mastery thresholds (90%+ and 80%+) with source attribution to handle discrepancy
- Emphasize platform ecosystem (Dash as orchestrator, not just list of apps)
- Highlight subject integration approach (history/geography in reading) as distinctive feature
- Include weakness noted in review (AlphaWrite "needs improvement") for balanced representation
- Organize details by: subject breakdown, platform ecosystem, standards alignment (3 subsections)

### Questions Resolved During Spec Creation
- Q: Should we list all AP courses mentioned?
  - A: Yes, include AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, Physics from research
- Q: How to handle platform-to-subject mapping inconsistencies?
  - A: Use subject-by-subject table to clearly map platforms per subject based on Astral Codex Ten review (most detailed source)
- Q: Should we mention AlphaWrite weakness?
  - A: Yes, for balanced documentation; research/curriculum.md line 407 notes "needs improvement"

### Future Enhancements (Out of Scope for This Spec)
- Deep dive into each subject's scope and sequence (could be separate specs 012a-012g if needed)
- Platform technical details and API integrations (covered in Spec 008 AI Integration)
- Subject-specific outcomes data (covered in Outcomes domain Specs 015-018)
- Detailed AP course offerings and pass rates (if data becomes publicly available)

---

**Checklist last updated**: 2026-01-20
**Spec version**: 1.0
