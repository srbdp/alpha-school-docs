# Spec 011: Curriculum Overview

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001c (Research Curriculum Domain), Spec 006 (Educational Philosophy)
**Output**: `reference/curriculum/overview.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is Alpha School's curriculum?" for LLM consumption. This document synthesizes findings from `research/curriculum.md` into a structured, authoritative explanation of Alpha School's mastery-based curriculum philosophy, core academic subjects, life skills program, standards alignment, and assessment approach—focusing on curriculum structure and content while separating from implementation details (AI platforms, daily schedule) and outcomes (evidence, claims).

### Scope

Transform research findings into a structured reference document covering:
- **Curriculum Philosophy**: Mastery-based learning (90%+ or 80%+ threshold per source), personalized pacing, spaced repetition
- **Core Academic Subjects**: Math, English/Language Arts, Science, Social Studies, Reading, Writing, Foreign Language (K-12)
- **Life Skills Program**: 24 life skills organized across 5 core areas, age-appropriate workshops, real-world projects
- **Standards Alignment**: Common Core (K-8), Advanced Placement (high school), third-party platforms (Khan Academy)
- **Assessment Approach**: NWEA MAP tests (3x yearly), internal mastery tests, platform-tracked progression
- **Grade Level Structure**: K-12, level-based vs. age-based progression, PreK-8 structured vs. high school self-directed

### Output File

`reference/curriculum/overview.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Curriculum Overview" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Curriculum Overview

  > [One-sentence definition capturing Alpha School's mastery-based curriculum combining 2-hour AI-powered core academics with 4-hour hands-on life skills program, spanning K-12 with personalized progression]
  ```
- **Source**: Synthesize from research/curriculum.md lines 30-174
- **Rationale**: Follows API-style documentation pattern established in Specs 002-010

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's curriculum
- **Content Coverage**:
  - Paragraph 1: Curriculum philosophy—mastery-based learning with 90%+ threshold (alpha.school) or 80%+ (secondary sources), personalized pacing, spaced repetition, eliminates knowledge gaps
  - Paragraph 2: Core academic subjects (Math, ELA, Science, Social Studies) delivered via AI platforms in 2-hour morning block; standards alignment (Common Core K-8, AP high school); third-party and proprietary platforms
  - Paragraph 3: Life skills program—24 life skills across 5 core areas, afternoon workshops, real-world projects (Airbnb, food trucks, athletic training), PreK-12 progression
- **Source**: research/curriculum.md lines 30-128
- **Rationale**: Provides LLMs with comprehensive overview before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key curriculum attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (8 properties):
  - `curriculum_philosophy` (string) - Core pedagogical approach
  - `mastery_threshold` (string) - Proficiency requirement (note discrepancy)
  - `core_subjects` (array) - Academic subjects taught
  - `core_subjects_duration` (string) - Daily time allocation for academics
  - `life_skills_count` (number) - Number of life skills emphasized
  - `life_skills_duration` (string) - Daily time allocation for life skills
  - `standards_alignment` (object) - Curriculum standards followed
  - `delivery_model` (string) - Instructional delivery approach
- **Source**: research/curriculum.md lines 30-174
- **Rationale**: Enables LLMs to quickly extract structured facts about curriculum

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required):
  - **Mastery-Based Learning Philosophy**: 90%+ accuracy requirement (alpha.school) vs. 80%+ (secondary sources—note discrepancy per research/curriculum.md lines 515-518); personalized pacing; spaced repetition; prevents cumulative knowledge gaps; efficiency claim (20-30 hours per grade level vs. 200 hours traditional); knowledge graph tracking
  - **Core Academic Subjects (Morning Block)**: Four core subjects (Math, English/Language Arts, Science, History/Social Studies) plus Reading, Writing, Foreign Language; 2-hour morning block; Pomodoro sessions (25-minute blocks); AI-powered delivery; platform-based (Khan Academy, Math Academy, proprietary tools); Common Core K-8, AP high school; history/geography integrated into reading passages
  - **Life Skills Program (Afternoon)**: 24 life skills across 5 core areas (Teamwork & Leadership, Storytelling & Public Speaking, Entrepreneurship & Financial Literacy, Relationship Building & Socialization, Grit & Hard Work); 4-hour afternoon workshops; age-appropriate progression (PreK → K-1 → 2-3 → 4-5 → 6-8 → high school); real-world projects (Airbnb operations, food trucks, athletic training, public speaking progressions); "Tests to Pass" for life skills mastery; screen-free, hands-on format
  - **Standards Alignment and Curriculum Sources**: Common Core (K-8), Advanced Placement (high school); third-party platforms (Khan Academy, Grammarly, Math Academy, Synthesis Tutor); proprietary platforms (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach); central platform "Dash" curates pathway through applications; history/geography integrated vs. standalone subjects
  - **Assessment and Progression**: NWEA MAP tests 3x yearly (nationally normed, adaptive); internal mastery tests (90%+ or 80%+ threshold); real-time platform tracking (accuracy, speed, completion); level-based vs. age-based progression; "Test to Pass Showcase" events; no homework policy (efficiency claim); parent dashboards with performance insights
- **Source**: research/curriculum.md lines 30-174, 247-314, 395-443
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating curriculum in practice
- **Examples to Include** (3 required):
  - **Mastery-Based Progression**: Student scoring 65% on fractions does not advance; AI identifies gaps, provides targeted instruction; student continues until 90%+ mastery; then advances to decimals—preventing cumulative knowledge gaps
  - **Life Skills Workshop**: "Business Launch Pad" (grades 4-5)—students run profitable Airbnb or food truck; manage pricing, customer communication, maintenance, finances; real consequences and measurable outcomes
  - **Curriculum Integration Example**: History/geography content integrated into reading passages rather than taught as separate disciplines; student reads about American Revolution while developing reading comprehension skills
- **Source**: research/curriculum.md lines 78-82, 104-106, 256, 310-314
- **Rationale**: Grounds abstract curriculum description with concrete applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Educational Philosophy (Spec 006) - Learning science principles underlying curriculum
  - Two-Hour Learning Model (Spec 007) - Morning academic block structure
  - AI Integration (Spec 008) - How AI delivers curriculum
  - Daily Schedule (Spec 010) - When curriculum components occur
  - Subjects (Spec 012) - Detailed subject-by-subject breakdown
  - Grade Levels (Spec 013) - Level-based progression details
  - Assessments (Spec 014) - Comprehensive assessment approach
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: 5 Q&A pairs addressing common questions about curriculum
- **Required Questions**:
  - What subjects does Alpha School teach?
  - What is mastery-based learning in Alpha's curriculum?
  - What are the 24 life skills in the afternoon program?
  - How does Alpha's curriculum align with educational standards?
  - How is student progress assessed?
- **Source**: research/curriculum.md lines 30-174
- **Rationale**: Anticipates LLM queries and provides direct answers

#### FR1.8: Sources Section
- **Requirement**: All source citations with retrieval dates
- **Required Sources**:
  - alpha.school website (homepage, program page, life skills page, FAQ)
  - research/curriculum.md (primary synthesis source)
  - Modern Wisdom podcast (MacKenzie Price interview)
  - Cognitive Revolution podcast
  - Other sources cited in research file
- **Format**: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Rationale**: Maintains academic rigor and source traceability

#### FR1.9: Footer Metadata
- **Requirement**: Last updated and last verified dates
- **Format**:
  ```markdown
  ---
  *Last updated: YYYY-MM-DD*
  *Last verified: YYYY-MM-DD*
  ```
- **Rationale**: Helps LLMs assess information freshness

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All facts must trace to research/curriculum.md
- **Verification**: Each claim should have corresponding line reference in research file
- **No Speculation**: Do not infer or create curriculum content beyond research findings
- **Specific Line References**:
  - Mastery threshold: lines 32-34 (90%+), lines 259, 413 (80%+)
  - Core subjects: lines 54-58, 247-254
  - Life skills: lines 68-128
  - Standards alignment: lines 287-289, 324-326
  - Assessment: lines 154-174, 353-358
- **Rationale**: Maintains documentation trustworthiness and accuracy

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's claims from independently verified curriculum facts
- **Attribution Patterns**:
  - "Alpha School's curriculum requires..." for mastery thresholds
  - "According to Alpha materials..." for efficiency claims
  - "Alpha reports..." for student outcomes
  - "Alpha School describes..." for curriculum characterizations
- **Critical Claims Requiring Attribution**:
  - "20-30 hours per grade level" efficiency claim - Self-reported, no independent verification
  - "2.6x faster" learning claim - Self-reported MAP results
  - "Top 1% nationwide" performance claim - Self-reported
  - Student satisfaction percentages (95%, 60%) - Self-reported
  - Real-world project profitability (Airbnb, food trucks) - Alpha's reported examples
- **Rationale**: Prevents LLMs from stating unverified curriculum effectiveness claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note where curriculum information is incomplete
- **Known Gaps** (from research/curriculum.md lines 479-510):
  - Detailed curriculum scope and sequence not publicly available
  - Foreign language specifics (which languages offered) not documented
  - Science curriculum details (specific topics, labs) not described
  - Social studies content beyond "integrated into reading passages" unclear
  - High school AP course catalog not detailed
  - Special needs accommodations not documented
  - Independent curriculum audit not found
  - Writing instruction quality (AlphaWrite acknowledged as needing improvement)
- **Handling**: Include notes like "While Alpha School follows Common Core standards K-8, detailed scope and sequence documents are not publicly available" or "Specific foreign languages offered are not documented in public materials"
- **Rationale**: Transparency about documentation limits maintains LLM trust

#### FR2.4: Neutral Presentation of Curriculum
- **Requirement**: Present curriculum without advocacy or critique
- **Approach**:
  - Document what Alpha School's curriculum includes based on research
  - Use neutral language: "Alpha's curriculum emphasizes..." not "Alpha's superior curriculum..."
  - Avoid editorial commentary on curriculum effectiveness or comprehensiveness
  - Present curriculum structure as Alpha describes it with appropriate attribution
- **Sensitive Topics**:
  - Mastery threshold discrepancy (80% vs 90%+): Present both values with source attribution
  - Efficiency claims (20-30 hours): Attribute clearly without validating
  - Writing instruction weakness (AlphaWrite needing improvement): Present factually from Astral Codex Ten review
  - Limited scope and sequence documentation: Note gap without critique
- **Rationale**: Documentation serves as reference, not curriculum marketing or educational critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Consistent heading hierarchy for LLM parsing
- **Structure**: H1 (title) → H2 (major sections) → H3 (subsections only)
- **No H4 or Deeper**: Keep hierarchy flat for parseability
- **Section Order**:
  1. H1: Curriculum Overview
  2. H2: Overview
  3. H2: Properties
  4. H2: Details
     - H3: Mastery-Based Learning Philosophy
     - H3: Core Academic Subjects (Morning Block)
     - H3: Life Skills Program (Afternoon)
     - H3: Standards Alignment and Curriculum Sources
     - H3: Assessment and Progression
  5. H2: Examples
     - H3: Mastery-Based Progression
     - H3: Life Skills Workshop
     - H3: Curriculum Integration Example
  6. H2: Related
  7. H2: FAQs
  8. H2: Sources
- **Rationale**: Enables efficient LLM navigation and content extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table in GitHub Flavored Markdown
- **Format**: Consistent column alignment, clear delimiters
- **Example**:
  ```markdown
  | Property | Type | Description | Example |
  |----------|------|-------------|---------|
  | core_subjects | array | Academic subjects taught in morning block | ["Math", "English/Language Arts", "Science", "Social Studies"] |
  ```
- **Rationale**: Enables LLM structured data extraction

#### FR3.3: Example Formatting
- **Requirement**: Examples use clear H3 headings and structured format
- **Pattern**:
  ```markdown
  ### Mastery-Based Progression

  **Scenario**: Student scores 65% on fractions unit
  **Traditional Approach**: Student "passes" with 72% and moves to decimals with knowledge gaps
  **Alpha Approach**: Student does not advance; AI identifies gaps, provides targeted instruction; student continues until 90%+ mastery before advancing
  **Rationale**: Preventing cumulative gaps enables faster learning ultimately
  ```
- **Rationale**: Clear delimiters help LLMs identify and extract examples

---

## Implementation Approach

### Single-Phase Execution

Following the pattern from Specs 002-010, documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/curriculum.md` (all 558 lines) completely
2. **Read Dependencies**: Read `reference/model/educational-philosophy.md` (Spec 006) for context on mastery-based learning philosophy
3. **Create Output Directory**: `mkdir -p reference/curriculum/`
4. **Create Output File**: Create `reference/curriculum/overview.md` with template skeleton
5. **Write Section by Section**: Follow FR1.1 through FR1.9 sequentially
6. **Quality Check**: Verify against FR2 (Content Quality Standards)—especially mastery threshold discrepancy handling and efficiency claim attribution
7. **LLM Optimization Check**: Verify against FR3 (structure, tables, formatting)
8. **Update Status**: Mark Spec 011 as complete in roadmap.md, update progress.md, activity.log

---

## Success Criteria

### Automated Verification

These checks can be automated via scripts or CI/CD:

- [ ] `reference/curriculum/overview.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] All required sections present:
  - [ ] `grep "^# Curriculum Overview"` returns match
  - [ ] `grep "^## Overview"` returns match
  - [ ] `grep "^## Properties"` returns match
  - [ ] `grep "^## Details"` returns match
  - [ ] `grep "^## Examples"` returns match
  - [ ] `grep "^## Related"` returns match
  - [ ] `grep "^## FAQs"` returns match
  - [ ] `grep "^## Sources"` returns match
- [ ] Properties table has 8 required properties (grep count)
- [ ] All sources include retrieval dates (format: `Retrieved YYYY-MM-DD`)
- [ ] Footer includes "Last updated:" and "Last verified:" dates
- [ ] Roadmap.md shows Spec 011 status as "✅ Complete"
- [ ] Progress.md contains Spec 011 completion entry
- [ ] Activity.log contains Spec 011 completion entry

### Manual Verification

These checks require human review:

- [ ] One-sentence definition clearly captures curriculum structure (mastery-based, academics + life skills, K-12)
- [ ] Overview section is 2-3 paragraphs covering philosophy, core subjects, life skills
- [ ] All facts in document trace to research/curriculum.md with line references
- [ ] Mastery threshold discrepancy (80% vs 90%+) is noted with source attribution (research/curriculum.md lines 515-518)
- [ ] Efficiency claims (20-30 hours, 2.6x faster) are properly attributed to Alpha, not stated as facts
- [ ] Information gaps are noted where relevant (no public scope/sequence, foreign language details unclear)
- [ ] 24 life skills are listed or referenced with examples
- [ ] Real-world project examples (Airbnb, food trucks) are attributed as Alpha's reported examples
- [ ] 5 FAQs address common curriculum questions with authoritative answers
- [ ] 3 Examples illustrate curriculum with concrete applications
- [ ] Related links use correct relative paths to other specs
- [ ] Document tone is neutral (presents Alpha's curriculum without advocacy or critique)
- [ ] Professional quality suitable for LLM consumption

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Detailed Subject Breakdown**: Covered by Spec 012 (Subjects) - math topics, reading levels, science units, etc.
2. **Grade Level Specifics**: Covered by Spec 013 (Grade Levels) - K vs. 1st vs. 2nd grade curriculum, level-based vs. age-based details
3. **Comprehensive Assessment Details**: Covered by Spec 014 (Assessments) - MAP test details, mastery test structure, parent dashboards
4. **Educational Philosophy Deep Dive**: Covered by Spec 006 (Educational Philosophy) - learning science foundations, Bloom's 2 Sigma, zone of proximal development
5. **AI Platform Technical Details**: Covered by Spec 008 (AI Integration) - how Dash recommends lessons, knowledge graph implementation, vision monitoring
6. **Daily Schedule Structure**: Covered by Spec 010 (Daily Schedule) - Pomodoro timing, Limitless Launch, transition between morning/afternoon
7. **Curriculum Outcomes/Evidence**: Covered by Specs 015-018 (Outcomes domain) - MAP results, SAT scores, independent verification status

### Explicit Boundaries

- **Curriculum Overview Only**: This document covers "what is taught" at high level, not subject-by-subject details (Spec 012), grade-level specifics (Spec 013), or assessment mechanics (Spec 014)
- **Research-Based**: Content must trace to research/curriculum.md; no new research
- **LLM-Optimized**: Written for machine parsing and extraction, not human marketing
- **No Speculation**: Information gaps remain gaps; do not infer curriculum details beyond research
- **Neutral Presentation**: Document Alpha's curriculum without advocacy or critique
- **Attribution Required**: Efficiency claims and outcome claims must be attributed to Alpha, not stated as objective facts
- **Mastery Threshold Discrepancy**: Note both 80% and 90%+ values with source attribution rather than choosing one

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Following pattern from Specs 002-010, all Phase 2 reference documentation uses single-phase execution: write documentation directly with verification through review.
**File Reference**: Spec 006 (lines 230-250), Spec 008 (lines 241-260) used single-phase successfully.

### Decision 2: 8 Properties Emphasizing Curriculum Attributes
**Rationale**: Properties table focuses on curriculum characteristics (philosophy, subjects, standards, delivery) rather than implementation details (AI platforms), outcomes (test scores), or schedule (Pomodoro timing). Following Spec 006 pattern (8 properties) as both are "overview" specs providing broad curriculum/philosophy context. The 8 properties enable LLM structured extraction of key curriculum facts: what's taught (core_subjects, life_skills_count), how it's taught (curriculum_philosophy, mastery_threshold, delivery_model), and what standards guide it (standards_alignment).
**File Reference**: Spec 006 used 8 properties; research/curriculum.md lines 30-174 provide property source data.

### Decision 3: Five Details Subsections Providing Curriculum Depth
**Rationale**: Five subsections (Mastery-Based Learning Philosophy → Core Academic Subjects → Life Skills Program → Standards Alignment → Assessment and Progression) provide comprehensive curriculum coverage organized logically: philosophy → what's taught → how it's aligned → how it's assessed. This structure separates curriculum philosophy (mastery-based approach) from subject content (academics vs. life skills) from external alignment (Common Core, AP) from assessment (MAP tests, internal mastery tests). Each subsection addresses distinct curriculum aspect.
**File Reference**: All Phase 2 specs use 5 Details subsections; research/curriculum.md provides content for each subsection.

### Decision 4: Handle Mastery Threshold Discrepancy Transparently
**Rationale**: research/curriculum.md documents inconsistency: alpha.school states "over 90% accuracy" (line 33) while GenWise Substack and Astral Codex Ten report "80% accuracy" (lines 259, 413). research/curriculum.md lines 515-518 provide resolution: "May reflect different thresholds for different assessment types (daily lessons vs. mastery tests)." Rather than choosing one value, Spec 011 will note both values with source attribution in Properties table (mastery_threshold property) and Details section (Mastery-Based Learning Philosophy), following the research file's own transparency about this discrepancy. This maintains documentation trustworthiness by acknowledging source conflicts.
**File Reference**: research/curriculum.md lines 32-34, 259, 413, 515-518.

### Decision 5: Life Skills as Major Curriculum Component (Not Secondary)
**Rationale**: research/curriculum.md dedicates substantial coverage to life skills (lines 68-128): 24 life skills across 5 core areas, age-appropriate workshops (PreK → high school), real-world projects (Airbnb, food trucks, athletic training), "Tests to Pass" assessments, 4-hour daily allocation. Life skills receive more time than academics (4 hours vs. 2 hours) and are integral to Alpha's model ("learn life skills" is one of three core commitments). Therefore, Life Skills Program warrants full Details subsection with comprehensive coverage (not just mentioned in passing). The Properties table includes both core_subjects (academics) and life_skills_count + life_skills_duration (life skills) to reflect equal curriculum weight.
**File Reference**: research/curriculum.md lines 68-128; roadmap.md line 12 lists "learn life skills" as core commitment.

### Decision 6: Note Information Gaps Explicitly Without Speculation
**Rationale**: research/curriculum.md lines 479-510 identify significant information gaps: no public scope/sequence, foreign language specifics unclear, science/social studies details limited, no high school AP catalog, special needs accommodations not documented, independent curriculum audit not found, AlphaWrite weakness acknowledged. FR2.3 requires noting these gaps explicitly. Rather than inferring or speculating (e.g., "Alpha likely offers Spanish and French" when not documented), Spec 011 will note gaps directly: "Specific foreign languages offered are not documented in public materials." This transparency maintains LLM trust by distinguishing documented facts from missing information.
**File Reference**: research/curriculum.md lines 479-510 (Information Gaps section); Spec 006 lines 155-163, Spec 009 lines 374-380 establish precedent for noting gaps.

### Decision 7: Attribute Efficiency Claims and Real-World Project Outcomes
**Rationale**: research/curriculum.md shows all curriculum efficiency claims are self-reported: "20-30 hours per grade level" (line 43), "2.6x faster" learning (line 167), real-world project profitability like "profitable Airbnb" (line 79) and "$4,000+ profit" food truck (line 312). research/curriculum.md lines 531-539 explicitly notes "all performance claims come from Alpha School's own data or reporting. No independent third-party verification has been published." FR2.2 requires attribution for unverified claims. Therefore, Spec 011 will use attribution language: "Alpha School claims students can complete a grade level in 20-30 hours" (not "students complete..."), "According to Alpha materials, fifth graders run profitable Airbnbs" (not "fifth graders run profitable Airbnbs"). This prevents LLMs from stating unverified curriculum effectiveness as objective fact.
**File Reference**: research/curriculum.md lines 43, 79, 167, 312, 531-539; Spec 007 lines 143-153 establish attribution pattern.

---

## Related

- **Dependency**: [Spec 001c: Research Curriculum Domain](../001c-research-curriculum/spec.md) - Research source
- **Dependency**: [Spec 006: Educational Philosophy](../006-model-educational-philosophy/spec.md) - Learning science principles underlying curriculum
- **Sibling**: [Spec 012: Subjects](../012-curriculum-subjects/spec.md) - Detailed subject-by-subject breakdown
- **Sibling**: [Spec 013: Grade Levels](../013-curriculum-grade-levels/spec.md) - Level-based progression details
- **Sibling**: [Spec 014: Assessments](../014-curriculum-assessments/spec.md) - Comprehensive assessment approach
- **Cross-Reference**: [Spec 007: Two-Hour Learning Model](../007-model-two-hour-learning/spec.md) - Morning academic block structure
- **Cross-Reference**: [Spec 008: AI Integration](../008-ai-integration/spec.md) - How AI delivers curriculum
- **Cross-Reference**: [Spec 010: Daily Schedule](../010-daily-schedule/spec.md) - When curriculum components occur
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide)

---

*Last Updated: 2026-01-20*
