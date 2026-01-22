# Spec 012: Curriculum Subjects

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001c (Research Curriculum Domain), Spec 011 (Curriculum Overview)
**Output**: `reference/curriculum/subjects.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What subjects does Alpha School teach?" for LLM consumption. This document synthesizes findings from `research/curriculum.md` into a structured, authoritative explanation of the specific academic subjects taught during the 2-hour morning block (Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language), the delivery platforms used (proprietary and third-party), and how subjects align to standards (Common Core K-8, AP high school).

### Scope

Transform research findings into a structured reference document covering:
- **Core Academic Subjects**: Seven subjects taught during morning block (Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language)
- **Subject-Specific Delivery Platforms**: Platform breakdown per subject (Khan Academy, Math Academy, proprietary tools)
- **Standards Alignment**: Common Core (K-8), Advanced Placement (high school)
- **Subject Integration**: History/geography integrated into reading passages vs. standalone subjects
- **Platform Ecosystem**: Central "Dash" platform curating pathways through applications
- **Proprietary vs Third-Party**: Clear distinction between Alpha-developed and external platforms

### Output File

`reference/curriculum/subjects.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Curriculum Subjects" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Curriculum Subjects

  > [One-sentence definition capturing the seven core academic subjects taught through AI-powered platforms during Alpha School's 2-hour morning block, aligned to Common Core (K-8) and AP (high school) standards]
  ```
- **Source**: Synthesize from research/curriculum.md lines 52-67, 247-257, 286-293
- **Rationale**: Follows API-style documentation pattern established in Specs 002-011

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's subject offerings
- **Content Coverage**:
  - Paragraph 1: Seven core subjects taught during 2-hour morning block—Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language; delivered via AI-powered platforms with personalized instruction; mastery-based progression requires 90%+ accuracy (alpha.school) or 80%+ (secondary sources) before advancing
  - Paragraph 2: Platform ecosystem—central "Dash" platform analyzes performance and curates pathways through mix of proprietary applications (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach) and third-party platforms (Khan Academy, Grammarly, Math Academy, Synthesis Tutor); students receive immediate feedback on each question with explanations for incorrect answers
  - Paragraph 3: Standards alignment—Common Core K-8, Advanced Placement for high school; history/geography integrated into reading passages rather than taught as separate disciplines; curriculum designed to complete grade-level material in 20-30 hours vs. traditional 200 hours
- **Source**: research/curriculum.md lines 30-67, 247-257, 286-293, 328-351, 395-414
- **Rationale**: Provides LLMs with comprehensive overview before detailed subject breakdown

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key subject-related attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties):
  - `core_subjects` (array) - Seven academic subjects taught
  - `delivery_duration` (string) - Daily time allocation for all subjects
  - `delivery_method` (string) - Instructional delivery approach
  - `central_platform` (string) - Platform orchestrating curriculum pathway
  - `proprietary_platforms` (array) - Alpha School-developed applications
  - `third_party_platforms` (array) - External platforms integrated
  - `standards_k8` (string) - K-8 curriculum standards
  - `standards_high_school` (string) - High school curriculum standards
  - `mastery_threshold` (string) - Required proficiency before advancement
- **Source**: research/curriculum.md lines 30-67, 247-257, 286-293, 328-351
- **Rationale**: Enables LLMs to quickly extract structured facts about subjects

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (3 required):
  - **Subject-by-Subject Breakdown**: Detailed table with columns: Subject | Primary Platform(s) | Description | Standards Coverage
    - Math: Proprietary platforms (new concepts), "Fast Math"/proprietary (speed/accuracy); Common Core K-8, AP Calculus/Statistics high school; adaptive problem sets with immediate feedback
    - English/Language Arts: Proprietary platforms (spelling/grammar); Common Core K-8, AP English Language/Literature high school; integrated with reading and writing components
    - Reading: AlphaRead (older students), Amira/Lalio (younger students); comprehension, fluency, vocabulary; history/geography integrated into passages
    - Writing: AlphaWrite (proprietary, "needs improvement" per review); essay composition, creative writing; identified as weaker area requiring enhancement
    - Science: Proprietary platforms (primary platform); Common Core K-8, AP Biology/Chemistry/Physics high school; inquiry-based learning with simulations
    - History/Social Studies: Proprietary platforms (primary platform); integrated into reading passages vs. standalone subject; civics, geography, historical analysis
    - Foreign Language: Proprietary platforms (primary platform); language acquisition; availability varies by grade level
  - **Platform Ecosystem and Daily Flow**: Central "Dash" dashboard analyzes student performance and directs to appropriate application based on subject, level, and learning needs; students complete 8-12 daily lessons ("minimums") across subjects; 25-minute Pomodoro sessions with Q breaks every 20-30 minutes; interface "goes green" when mastery achieved; spaced repetition brings back topics at calculated intervals; system tracks accuracy, speed, completion in real-time; parent dashboards provide performance insights
  - **Standards Alignment and Subject Integration**: Common Core curriculum K-8 ensures grade-appropriate content across subjects; Advanced Placement curriculum at high school level (AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, Physics); history and geography NOT taught as separate disciplines but integrated into reading passages; this approach combines content knowledge with literacy skill development; foreign language availability and depth varies by campus and grade level
- **Source**: research/curriculum.md lines 30-67, 247-257, 286-293, 328-351, 395-443
- **Rationale**: Provides comprehensive subject-level detail while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating subjects in practice
- **Examples to Include** (3 required):
  - **Math Mastery Progression**: Student working on fractions using proprietary math platform; answers question incorrectly; AI provides explanation of correct approach; student attempts similar problems until achieving 90%+ accuracy on problem set; "Fast Math" platform then drills speed and fluency on mastered concepts; student advances to decimals only after demonstrating mastery
  - **Integrated History/Reading**: Student in 4th grade receives reading passage about the American Revolution; comprehension questions assess both reading skills and historical understanding; eliminates need for separate history class while building dual competencies; history/geography content embedded across reading curriculum
  - **Platform Orchestration**: Student logs into "Dash" central platform at start of morning; Dash analyzes yesterday's performance and today's spaced repetition schedule; directs student to Math Academy for new algebra concept, then proprietary platform for science review, then AlphaRead for comprehension practice; student clicks each subject button and seamlessly moves between platforms; all progress tracked centrally
- **Source**: research/curriculum.md lines 60-64, 256, 290-293, 328-351, 409-414
- **Rationale**: Grounds abstract subject description with concrete student experiences

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Curriculum Overview (Spec 011) - Overall curriculum philosophy and structure
  - Educational Philosophy (Spec 006) - Learning science principles underlying subject delivery
  - Two-Hour Learning Model (Spec 007) - Morning academic block structure
  - AI Integration (Spec 008) - How AI delivers subject instruction
  - Daily Schedule (Spec 010) - When subjects are taught during the day
  - Grade Levels (Spec 013) - Subject progression across levels
  - Assessments (Spec 014) - How subject mastery is measured
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about subjects with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: How many subjects are taught at Alpha School?**
    A: Seven core academic subjects during the 2-hour morning block: Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, and Foreign Language. History and geography are integrated into reading passages rather than taught as standalone subjects.

  - **Q: What platforms deliver each subject?**
    A: Alpha uses a mix of proprietary platforms (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach) and third-party platforms (Khan Academy, Grammarly, Math Academy, Synthesis Tutor). The central "Dash" platform orchestrates the student's pathway through these applications based on performance and learning needs.

  - **Q: What curriculum standards does Alpha School follow?**
    A: Common Core curriculum for K-8 students across all subjects. High school students follow Advanced Placement (AP) curriculum including AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, and Physics.

  - **Q: Why isn't history taught as a separate subject?**
    A: History and geography content is integrated into reading passages rather than taught as standalone disciplines. This approach allows students to develop reading comprehension skills while simultaneously building historical and geographic knowledge, making learning more efficient.

  - **Q: How long does it take to complete a grade level in each subject?**
    A: Alpha School claims that an entire grade level of material in one subject requires only 20-30 hours of focused study through AI tutoring, compared to approximately 200 hours in traditional schooling. This efficiency is attributed to personalized instruction, immediate feedback, mastery-based progression, and spaced repetition.
- **Source**: research/curriculum.md lines 30-67, 172-174, 247-257, 286-293, 328-351
- **Rationale**: Addresses common questions LLMs might encounter when explaining subjects

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/curriculum.md (lines 6-24) relevant to subjects:
  - Alpha School Program Page
  - Alpha School FAQ
  - GenWise Substack - Alpha Educational Model
  - Modern Wisdom Podcast Transcript (MacKenzie Price)
  - Cognitive Revolution Podcast
  - Astral Codex Ten - Alpha School Review
  - Alpha School 2 Hour Learning Page
  - CBS News - Alpha School AI
  - FOX 7 Austin - Alpha School
- **Source**: research/curriculum.md lines 6-24
- **Rationale**: Provides citation trail for fact verification

#### FR1.9: Document Footer
- **Requirement**: Timestamp metadata at document end
- **Format**:
  ```markdown
  ---
  *Last updated: 2026-01-20*
  *Last verified: 2026-01-20*
  ```
- **Rationale**: Maintains documentation freshness tracking

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all subject-related facts are sourced from research/curriculum.md

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify seven core subjects
  - Confirm Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language are documented in research
  - Source lines: 52-67, 247-257
  - **Success**: All seven subjects found with citations

- [ ] **Task 1.0.2**: Verify platform lists
  - Confirm proprietary platforms: Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach
  - Confirm third-party platforms: Khan Academy, Grammarly, Math Academy, Synthesis Tutor
  - Confirm "Dash" as central platform
  - Source lines: 290-293, 328-351, 395-414
  - **Success**: All platforms documented with citations

- [ ] **Task 1.0.3**: Verify standards alignment
  - Confirm Common Core K-8 and Advanced Placement high school
  - Source lines: 286-293, 324-327
  - **Success**: Standards alignment documented

- [ ] **Task 1.0.4**: Verify subject integration claim
  - Confirm history/geography integrated into reading passages
  - Source line: 256
  - **Success**: Integration approach documented

- [ ] **Task 1.0.5**: Verify mastery threshold
  - Confirm 90%+ (alpha.school) and 80%+ (secondary sources) thresholds
  - Note discrepancy per research/curriculum.md lines 32-33, 259
  - **Success**: Both thresholds documented with discrepancy noted

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/curriculum/subjects.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create H1: "Curriculum Subjects"
  - Write one-sentence definition in blockquote
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write 3-paragraph overview covering subjects, platforms, standards
  - Cite research lines in comments
  - **Success**: Overview provides comprehensive introduction

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Build 9-property table with all required fields
  - Include concrete examples for each property
  - **Success**: Table enables structured fact extraction

- [ ] **Task 1.1.4**: Write details section - Subject breakdown (FR1.4)
  - Create subject-by-subject table with 7 subjects
  - Include platform, description, standards for each
  - **Success**: All subjects comprehensively documented

- [ ] **Task 1.1.5**: Write details section - Platform ecosystem (FR1.4)
  - Explain Dash orchestration and daily flow
  - Document "minimums", Pomodoro sessions, spaced repetition
  - **Success**: Platform ecosystem clearly explained

- [ ] **Task 1.1.6**: Write details section - Standards alignment (FR1.4)
  - Explain Common Core K-8 and AP high school
  - Document subject integration approach
  - **Success**: Standards alignment comprehensively covered

- [ ] **Task 1.1.7**: Write examples section (FR1.5)
  - Create 3 concrete examples (math mastery, integrated history, platform orchestration)
  - Ensure examples illustrate key concepts
  - **Success**: Examples ground abstract concepts

- [ ] **Task 1.1.8**: Create related links section (FR1.6)
  - Link to 7 related documentation files
  - Use relative paths
  - **Success**: Navigation links enable cross-referencing

- [ ] **Task 1.1.9**: Write FAQs section (FR1.7)
  - Create 5 Q&A pairs addressing common questions
  - Ensure answers are authoritative and cited
  - **Success**: FAQs address likely LLM queries

- [ ] **Task 1.1.10**: Create sources section (FR1.8)
  - List all relevant sources from research/curriculum.md
  - Include URLs and retrieval dates
  - **Success**: All facts traceable to sources

- [ ] **Task 1.1.11**: Add document footer (FR1.9)
  - Add timestamp metadata
  - **Success**: Footer matches template format

---

### Phase 1.2: Quality Review

**Objective**: Verify documentation quality and accuracy

#### Review Tasks

- [ ] **Task 1.2.1**: Fact-check all claims
  - Verify every factual claim has citation in research/curriculum.md
  - Flag any unsourced claims for removal
  - **Success**: 100% of facts sourced

- [ ] **Task 1.2.2**: Consistency check
  - Verify mastery threshold discrepancy is noted (90%+ vs. 80%+)
  - Ensure platform names are consistent throughout
  - Check subject names match research exactly
  - **Success**: No inconsistencies found

- [ ] **Task 1.2.3**: Template compliance
  - Verify document follows roadmap.md template (lines 136-173)
  - Check all required sections present
  - Verify markdown formatting
  - **Success**: Document matches template structure

- [ ] **Task 1.2.4**: Readability review
  - Ensure paragraphs are concise (2-4 sentences)
  - Check for clear, active voice
  - Verify examples are concrete
  - **Success**: Document is LLM-readable

- [ ] **Task 1.2.5**: Cross-reference check
  - Verify links to related docs use correct paths
  - Ensure no broken internal references
  - **Success**: All links valid

---

## Technical Architecture

### File Organization

```
reference/
  curriculum/
    overview.md          # Spec 011 (dependency)
    subjects.md          # This spec (012)
    grade-levels.md      # Spec 013 (future)
    assessments.md       # Spec 014 (future)
```

### Dependencies

**Direct Dependencies**:
- Spec 001c: Research Curriculum Domain (provides source material)
- Spec 011: Curriculum Overview (provides context for subjects)

**Related Specifications**:
- Spec 006: Educational Philosophy (learning science behind subject delivery)
- Spec 007: Two-Hour Learning Model (context for subject timing)
- Spec 008: AI Integration (platform technology details)
- Spec 010: Daily Schedule (subject scheduling details)

### Data Sources

All facts sourced from `research/curriculum.md`:
- Primary sources: alpha.school website pages (lines 6-11)
- Secondary sources: News articles, podcast transcripts, parent reviews (lines 16-24)
- Platform details: Lines 290-293, 328-351, 395-414
- Subject list: Lines 52-67, 247-257
- Standards: Lines 286-293, 324-327

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Life Skills Workshops**: Covered in Curriculum Overview (Spec 011), not subject-specific
2. **Assessment Details**: Covered in Assessments spec (014)
3. **Grade-Level Progression**: Covered in Grade Levels spec (013)
4. **AI Platform Technical Implementation**: Covered in AI Integration (Spec 008)
5. **Daily Schedule Details**: Covered in Daily Schedule (Spec 010)
6. **Outcomes and Performance Data**: Covered in Outcomes domain (Specs 015-018)
7. **Platform Pricing or Licensing**: Not publicly available information

### Explicit Boundaries

- **Subject Description Only**: This spec documents WHAT subjects are taught, not HOW they are taught (methodology in Educational Philosophy)
- **No Tutorial Content**: This is reference documentation, not instructional material
- **No Evaluation**: This spec documents Alpha's subject offerings without comparing to traditional schools
- **Public Information Only**: Only subjects and platforms documented in public sources

---

## Success Metrics

### Phase 1.0 Completion
- [ ] All 7 subjects verified in research/curriculum.md
- [ ] All proprietary and third-party platforms verified
- [ ] Standards alignment (Common Core K-8, AP) verified
- [ ] Subject integration claim verified
- [ ] Mastery threshold discrepancy documented

### Phase 1.1 Completion
- [ ] reference/curriculum/subjects.md created
- [ ] All 9 Functional Requirements (FR1.1-FR1.9) implemented
- [ ] Document follows roadmap.md template structure
- [ ] All sections present: header, overview, properties, details, examples, related, FAQs, sources, footer
- [ ] File readable as Markdown

### Phase 1.2 Completion
- [ ] 100% of factual claims have citations in research/curriculum.md
- [ ] No inconsistencies in platform or subject names
- [ ] Template compliance verified
- [ ] Readability reviewed (concise, active voice, concrete examples)
- [ ] All internal links valid

### Documentation Quality
- [ ] LLMs can extract structured subject data from properties table
- [ ] Examples provide concrete understanding of abstract concepts
- [ ] FAQs address common questions about subjects
- [ ] Sources enable fact verification
- [ ] Document integrates seamlessly with related specs (011, 013, 014)

---

## Related Specifications

- **Spec 001c**: Research Curriculum Domain (source material)
- **Spec 011**: Curriculum Overview (parent context)
- **Spec 006**: Educational Philosophy (learning principles)
- **Spec 007**: Two-Hour Learning Model (subject delivery context)
- **Spec 008**: AI Integration (platform technology)
- **Spec 010**: Daily Schedule (subject timing)
- **Spec 013**: Grade Levels (subject progression)
- **Spec 014**: Assessments (subject mastery measurement)

---

## References

- Alpha School Website: https://alpha.school
- Research File: research/curriculum.md (lines 6-443)
- Roadmap Template: roadmap.md (lines 136-173)
- Related Specs: 001c, 006, 007, 008, 010, 011, 013, 014
