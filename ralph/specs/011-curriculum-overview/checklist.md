# Spec 011: Curriculum Overview - Implementation Checklist

**Spec**: 011-curriculum-overview
**Output**: `reference/curriculum/overview.md`
**Status**: 📋 Not Started

---

## Pre-Implementation

- [ ] Read complete Spec 011 (`ralph/specs/011-curriculum-overview/spec.md`)
- [ ] Read research source (`research/curriculum.md` - all 558 lines)
- [ ] Read Spec 006 reference doc (`reference/model/educational-philosophy.md`) for mastery-based learning context
- [ ] Review roadmap template (`roadmap.md` lines 136-173)
- [ ] Review recent reference documentation examples (Spec 008, Spec 010 output files)

---

## Phase 2.0: Write Documentation

### Create Output Structure (FR1.1)

- [ ] **Task 2.0.1**: Create output directory
  - Run: `mkdir -p reference/curriculum/`
  - **FR**: FR1.1
  - **Files**: `reference/curriculum/` directory

- [ ] **Task 2.0.2**: Create output file with skeleton structure
  - Create: `reference/curriculum/overview.md`
  - Add H1, H2 section headers as skeleton
  - **FR**: FR1.1
  - **Files**: `reference/curriculum/overview.md`

### Header & Overview (FR1.1, FR1.2)

- [ ] **Task 2.0.3**: Write H1 title
  - Write: `# Curriculum Overview`
  - **FR**: FR1.1
  - **Source**: Spec 011
  - **Files**: `reference/curriculum/overview.md` (line 1)

- [ ] **Task 2.0.4**: Write one-sentence definition
  - Write blockquote definition capturing: mastery-based, 2-hour academics + 4-hour life skills, K-12, personalized progression
  - Format: `> [One-sentence definition]`
  - **FR**: FR1.1
  - **Source**: research/curriculum.md lines 30-128
  - **Files**: `reference/curriculum/overview.md` (lines 3-4)

- [ ] **Task 2.0.5**: Write Overview paragraph 1 (Philosophy)
  - Cover: Mastery-based learning, 90%+ threshold (alpha.school) or 80%+ (secondary sources—note discrepancy), personalized pacing, spaced repetition, eliminates knowledge gaps
  - **FR**: FR1.2
  - **Source**: research/curriculum.md lines 30-44
  - **Files**: `reference/curriculum/overview.md` (Overview section, paragraph 1)

- [ ] **Task 2.0.6**: Write Overview paragraph 2 (Core Academics)
  - Cover: Core subjects (Math, ELA, Science, Social Studies), 2-hour morning block, standards alignment (Common Core K-8, AP high school), third-party and proprietary platforms
  - **FR**: FR1.2
  - **Source**: research/curriculum.md lines 52-65, 247-254, 287-289
  - **Files**: `reference/curriculum/overview.md` (Overview section, paragraph 2)

- [ ] **Task 2.0.7**: Write Overview paragraph 3 (Life Skills)
  - Cover: 24 life skills across 5 core areas, afternoon workshops, real-world projects (Airbnb, food trucks, athletic training), PreK-12 progression
  - **FR**: FR1.2
  - **Source**: research/curriculum.md lines 66-128
  - **Files**: `reference/curriculum/overview.md` (Overview section, paragraph 3)

### Properties Table (FR1.3)

- [ ] **Task 2.0.8**: Create Properties table header
  - Create table with columns: Property | Type | Description | Example
  - **FR**: FR1.3
  - **Files**: `reference/curriculum/overview.md` (Properties section)

- [ ] **Task 2.0.9**: Add `curriculum_philosophy` property
  - Type: string
  - Description: Core pedagogical approach
  - Example: "Mastery-based personalized learning with spaced repetition"
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 32-42
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 1)

- [ ] **Task 2.0.10**: Add `mastery_threshold` property
  - Type: string
  - Description: Proficiency requirement before advancement (note source discrepancy)
  - Example: "90%+ (alpha.school) or 80%+ (secondary sources)"
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 32-34, 259, 413, 515-518
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 2)

- [ ] **Task 2.0.11**: Add `core_subjects` property
  - Type: array
  - Description: Academic subjects taught in morning block
  - Example: ["Math", "English/Language Arts", "Science", "Social Studies", "Reading", "Writing", "Foreign Language"]
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 54-58, 247-254
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 3)

- [ ] **Task 2.0.12**: Add `core_subjects_duration` property
  - Type: string
  - Description: Daily time allocation for core academics
  - Example: "2 hours (morning block)"
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 54, 220
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 4)

- [ ] **Task 2.0.13**: Add `life_skills_count` property
  - Type: number
  - Description: Number of life skills emphasized in afternoon program
  - Example: 24
  - **FR**: FR1.3
  - **Source**: research/curriculum.md line 68
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 5)

- [ ] **Task 2.0.14**: Add `life_skills_duration` property
  - Type: string
  - Description: Daily time allocation for life skills workshops
  - Example: "~4 hours (afternoon program)"
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 66, 128
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 6)

- [ ] **Task 2.0.15**: Add `standards_alignment` property
  - Type: object
  - Description: Educational standards followed
  - Example: {"K-8": "Common Core", "High School": "Advanced Placement"}
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 287-289, 324-326
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 7)

- [ ] **Task 2.0.16**: Add `delivery_model` property
  - Type: string
  - Description: Primary instructional delivery approach
  - Example: "AI-powered platforms with human guide support"
  - **FR**: FR1.3
  - **Source**: research/curriculum.md lines 45-50, 211-214
  - **Files**: `reference/curriculum/overview.md` (Properties table, row 8)

### Details Section (FR1.4)

- [ ] **Task 2.0.17**: Write Details subsection 1 - Mastery-Based Learning Philosophy
  - Cover: 90%+ accuracy (alpha.school) vs. 80%+ (secondary sources—note discrepancy per research/curriculum.md lines 515-518); personalized pacing; spaced repetition; prevents cumulative knowledge gaps; efficiency claim (20-30 hours per grade level vs. 200 hours traditional—attribute to Alpha); knowledge graph tracking
  - **FR**: FR1.4
  - **Source**: research/curriculum.md lines 30-44, 259, 348-351, 413-414, 515-518
  - **Files**: `reference/curriculum/overview.md` (Details section, H3 subsection 1)

- [ ] **Task 2.0.18**: Write Details subsection 2 - Core Academic Subjects (Morning Block)
  - Cover: Four core subjects (Math, English/Language Arts, Science, History/Social Studies) plus Reading, Writing, Foreign Language; 2-hour morning block; Pomodoro sessions (25-minute blocks); AI-powered delivery; platform-based (IXL, Khan Academy, Math Academy, proprietary tools); Common Core K-8, AP high school; history/geography integrated into reading passages
  - **FR**: FR1.4
  - **Source**: research/curriculum.md lines 52-65, 207-225, 247-256, 287-289, 324-326, 395-407
  - **Files**: `reference/curriculum/overview.md` (Details section, H3 subsection 2)

- [ ] **Task 2.0.19**: Write Details subsection 3 - Life Skills Program (Afternoon)
  - Cover: 24 life skills across 5 core areas (Teamwork & Leadership, Storytelling & Public Speaking, Entrepreneurship & Financial Literacy, Relationship Building & Socialization, Grit & Hard Work); 4-hour afternoon workshops; age-appropriate progression (PreK → K-1 → 2-3 → 4-5 → 6-8 → high school with examples); real-world projects (Airbnb operations, food trucks, athletic training, public speaking progressions—attribute as Alpha's reported examples); "Tests to Pass" for life skills mastery; screen-free, hands-on format
  - **FR**: FR1.4
  - **Source**: research/curriculum.md lines 66-128, 189-193, 221-222, 235-237, 299-318, 360-373
  - **Files**: `reference/curriculum/overview.md` (Details section, H3 subsection 3)

- [ ] **Task 2.0.20**: Write Details subsection 4 - Standards Alignment and Curriculum Sources
  - Cover: Common Core (K-8), Advanced Placement (high school); third-party platforms (IXL, Khan Academy, Grammarly, Math Academy, Synthesis Tutor); proprietary platforms (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach); central platform "Dash" curates pathway through applications; history/geography integrated vs. standalone subjects
  - **FR**: FR1.4
  - **Source**: research/curriculum.md lines 256, 287-293, 324-343, 395-407
  - **Files**: `reference/curriculum/overview.md` (Details section, H3 subsection 4)

- [ ] **Task 2.0.21**: Write Details subsection 5 - Assessment and Progression
  - Cover: NWEA MAP tests 3x yearly (nationally normed, adaptive); internal mastery tests (90%+ or 80%+ threshold); real-time platform tracking (accuracy, speed, completion); level-based vs. age-based progression; "Test to Pass Showcase" events; no homework policy (efficiency claim—attribute to Alpha); parent dashboards with performance insights
  - **FR**: FR1.4
  - **Source**: research/curriculum.md lines 154-174, 189-193, 259-273, 353-358, 419-420
  - **Files**: `reference/curriculum/overview.md` (Details section, H3 subsection 5)

### Examples Section (FR1.5)

- [ ] **Task 2.0.22**: Write Example 1 - Mastery-Based Progression
  - Include: Scenario, Traditional Approach, Alpha Approach, Rationale
  - Content: Student scores 65% on fractions; does not advance; AI identifies gaps; student continues until 90%+ mastery; prevents cumulative knowledge gaps
  - **FR**: FR1.5
  - **Source**: Spec 011 FR1.5, research/curriculum.md lines 32-44
  - **Files**: `reference/curriculum/overview.md` (Examples section, H3 example 1)

- [ ] **Task 2.0.23**: Write Example 2 - Life Skills Workshop
  - Include: Workshop Name, Grade Level, Activity, Outcome
  - Content: "Business Launch Pad" (grades 4-5); students run profitable Airbnb or food truck; manage pricing, customer communication, maintenance, finances; real consequences and measurable outcomes (attribute as Alpha's reported example)
  - **FR**: FR1.5
  - **Source**: research/curriculum.md lines 79, 104-106, 310-314
  - **Files**: `reference/curriculum/overview.md` (Examples section, H3 example 2)

- [ ] **Task 2.0.24**: Write Example 3 - Curriculum Integration
  - Include: Integration Approach, Subject Combination, Student Experience
  - Content: History/geography content integrated into reading passages rather than taught as separate disciplines; student reads about American Revolution while developing reading comprehension skills; combines content knowledge with literacy skills
  - **FR**: FR1.5
  - **Source**: research/curriculum.md line 256
  - **Files**: `reference/curriculum/overview.md` (Examples section, H3 example 3)

### Related Links (FR1.6)

- [ ] **Task 2.0.25**: Add Related links section
  - Links to: Educational Philosophy (Spec 006), Two-Hour Learning Model (Spec 007), AI Integration (Spec 008), Daily Schedule (Spec 010), Subjects (Spec 012), Grade Levels (Spec 013), Assessments (Spec 014)
  - Use relative paths: `../model/educational-philosophy.md`, etc.
  - **FR**: FR1.6
  - **Files**: `reference/curriculum/overview.md` (Related section)

### FAQs Section (FR1.7)

- [ ] **Task 2.0.26**: Write FAQ 1 - What subjects does Alpha School teach?
  - Answer: Core academics (Math, English/Language Arts, Science, Social Studies, Reading, Writing, Foreign Language) in 2-hour morning block; 24 life skills in 4-hour afternoon program
  - **FR**: FR1.7
  - **Source**: research/curriculum.md lines 54-58, 68-128, 247-254
  - **Files**: `reference/curriculum/overview.md` (FAQs section, Q&A 1)

- [ ] **Task 2.0.27**: Write FAQ 2 - What is mastery-based learning in Alpha's curriculum?
  - Answer: Students must demonstrate 90%+ proficiency (per alpha.school) or 80%+ (per secondary sources) before advancing; prevents cumulative knowledge gaps; personalized pacing; contrasts with traditional 70% passing threshold
  - **FR**: FR1.7
  - **Source**: research/curriculum.md lines 32-34, 259, 413, 515-518
  - **Files**: `reference/curriculum/overview.md` (FAQs section, Q&A 2)

- [ ] **Task 2.0.28**: Write FAQ 3 - What are the 24 life skills in the afternoon program?
  - Answer: Organized across 5 core areas: (1) Teamwork & Leadership, (2) Storytelling & Public Speaking, (3) Entrepreneurship & Financial Literacy, (4) Relationship Building & Socialization, (5) Grit & Hard Work; delivered through age-appropriate workshops and real-world projects
  - **FR**: FR1.7
  - **Source**: research/curriculum.md lines 83-88
  - **Files**: `reference/curriculum/overview.md` (FAQs section, Q&A 3)

- [ ] **Task 2.0.29**: Write FAQ 4 - How does Alpha's curriculum align with educational standards?
  - Answer: Common Core standards K-8, Advanced Placement curriculum high school; uses third-party platforms (IXL, Khan Academy) and proprietary tools aligned to these standards; central platform "Dash" curates pathway through applications
  - **FR**: FR1.7
  - **Source**: research/curriculum.md lines 287-289, 324-326, 337-346
  - **Files**: `reference/curriculum/overview.md` (FAQs section, Q&A 4)

- [ ] **Task 2.0.30**: Write FAQ 5 - How is student progress assessed?
  - Answer: NWEA MAP tests 3x yearly (nationally normed, adaptive), internal mastery tests (90%+ or 80%+ threshold), real-time platform tracking, level-based progression, "Test to Pass Showcase" events, parent dashboards
  - **FR**: FR1.7
  - **Source**: research/curriculum.md lines 154-174, 189-193, 353-358
  - **Files**: `reference/curriculum/overview.md` (FAQs section, Q&A 5)

### Sources Section (FR1.8)

- [ ] **Task 2.0.31**: Add Sources section with all citations
  - Include: alpha.school (homepage, program page, life skills page, FAQ), research/curriculum.md, Modern Wisdom podcast, Cognitive Revolution podcast, other sources from research file
  - Format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
  - **FR**: FR1.8
  - **Source**: research/curriculum.md lines 8-24
  - **Files**: `reference/curriculum/overview.md` (Sources section)

### Footer Metadata (FR1.9)

- [ ] **Task 2.0.32**: Add footer metadata
  - Add separator line: `---`
  - Add last updated: `*Last updated: 2026-01-20*`
  - Add last verified: `*Last verified: 2026-01-20*`
  - **FR**: FR1.9
  - **Files**: `reference/curriculum/overview.md` (footer, final lines)

---

## Quality Checks (FR2: Content Quality Standards)

- [ ] **Task 3.1**: Verify factual accuracy (FR2.1)
  - All facts trace to research/curriculum.md with line references
  - No speculation beyond research findings
  - Mastery threshold: lines 32-34 (90%+), 259/413 (80%+)
  - Core subjects: lines 54-58, 247-254
  - Life skills: lines 68-128
  - Standards alignment: lines 287-289, 324-326
  - Assessment: lines 154-174, 353-358

- [ ] **Task 3.2**: Verify claims attribution (FR2.2)
  - "20-30 hours per grade level" attributed to Alpha (not stated as fact)
  - "2.6x faster" learning attributed to Alpha
  - Real-world project outcomes (Airbnb, food trucks) attributed as Alpha's reported examples
  - Student satisfaction percentages attributed to Alpha materials
  - Use attribution language: "Alpha School claims...", "According to Alpha materials...", "Alpha reports..."

- [ ] **Task 3.3**: Verify information gaps noted (FR2.3)
  - Scope/sequence documentation gap noted
  - Foreign language specifics gap noted
  - Science/social studies details gap noted
  - Special needs accommodations gap noted
  - AlphaWrite improvement need noted (from Astral Codex Ten review)
  - Use language: "not publicly available", "not documented in public materials", "unclear"

- [ ] **Task 3.4**: Verify neutral presentation (FR2.4)
  - No promotional language ("revolutionary", "superior", "innovative")
  - No critical language ("concerning", "inadequate", "problematic")
  - Mastery threshold discrepancy handled transparently (both values with sources)
  - Efficiency claims attributed, not validated
  - Real-world projects presented as Alpha's reported examples

---

## LLM Optimization Checks (FR3)

- [ ] **Task 4.1**: Verify hierarchical structure (FR3.1)
  - H1 (title) → H2 (major sections) → H3 (subsections only)
  - No H4 or deeper headings
  - Section order: Overview → Properties → Details (5 H3s) → Examples (3 H3s) → Related → FAQs → Sources
  - 20+ total headings for parseability

- [ ] **Task 4.2**: Verify scannable tables (FR3.2)
  - Properties table uses GitHub Flavored Markdown
  - Consistent column alignment
  - 8 required properties present
  - Clear delimiters (pipes, hyphens)

- [ ] **Task 4.3**: Verify example formatting (FR3.3)
  - Each example has clear H3 heading
  - Structured format with bold labels (Scenario, Approach, Outcome, etc.)
  - Clear delimiters help LLM extraction

---

## Final Verification

### Automated Checks

- [ ] File exists: `reference/curriculum/overview.md`
- [ ] Valid Markdown syntax (no parsing errors)
- [ ] `grep "^# Curriculum Overview"` returns match
- [ ] `grep "^## Overview"` returns match
- [ ] `grep "^## Properties"` returns match
- [ ] `grep "^## Details"` returns match
- [ ] `grep "^## Examples"` returns match
- [ ] `grep "^## Related"` returns match
- [ ] `grep "^## FAQs"` returns match
- [ ] `grep "^## Sources"` returns match
- [ ] Properties table has 8 rows (excluding header)
- [ ] All sources include retrieval dates (format: `Retrieved YYYY-MM-DD`)
- [ ] Footer includes "Last updated:" and "Last verified:" dates

### Manual Review

- [ ] One-sentence definition clearly captures curriculum structure
- [ ] Overview is 2-3 paragraphs covering philosophy, core subjects, life skills
- [ ] All facts trace to research/curriculum.md
- [ ] Mastery threshold discrepancy (80% vs 90%+) noted with source attribution
- [ ] Efficiency claims properly attributed to Alpha
- [ ] Information gaps noted where relevant
- [ ] 24 life skills referenced with examples
- [ ] Real-world projects attributed as Alpha's reported examples
- [ ] 5 FAQs address common curriculum questions
- [ ] 3 Examples illustrate curriculum concretely
- [ ] Related links use correct relative paths
- [ ] Document tone is neutral
- [ ] Professional quality suitable for LLM consumption

---

## Post-Implementation

- [ ] Update roadmap.md: Change Spec 011 status from "📋 Planned" to "✅ Complete"
- [ ] Update roadmap.md: Update completion statistics (17/32 complete, 53.1%)
- [ ] Update progress.md: Add Spec 011 completion entry with date, status, key details
- [ ] Update activity.log: Log Spec 011 completion with timestamp
- [ ] Update this checklist status to "✅ Complete"

---

## Completion Criteria

**Total Tasks**: 32 tasks (Phase 2.0) + 7 quality checks + 3 LLM checks + 13 automated + 14 manual + 5 post = **74 total tasks**

**Estimated Time**: ~1 hour (Small effort per roadmap.md)

**Definition of Done**:
- All 32 implementation tasks completed
- All 7 quality checks pass
- All 3 LLM optimization checks pass
- All 13 automated verification checks pass
- All 14 manual verification checks pass
- All 5 post-implementation tasks completed
- `reference/curriculum/overview.md` exists and follows template
- Roadmap.md, progress.md, activity.log updated
- Spec 011 marked "✅ Complete" in all tracking files

---

*Checklist created: 2026-01-20*
