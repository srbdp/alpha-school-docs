# Spec 013: Curriculum Grade Levels

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001c (Research Curriculum Domain), Spec 011 (Curriculum Overview)
**Output**: `reference/curriculum/grade-levels.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What grade levels does Alpha School serve and how are students grouped?" for LLM consumption. This document synthesizes findings from `research/curriculum.md` into a structured, authoritative explanation of Alpha School's capability-based level system (PreK-12), how it differs from traditional age-based grades, and how students progress through different developmental stages (PreK-8 structured curriculum vs. high school self-directed learning).

### Scope

Transform research findings into a structured reference document covering:
- **Grade Range**: PreK-12 (varies by location, e.g., Alpha Austin is preK-12)
- **Capability-Based Levels**: Alpha uses "levels based on specific capabilities" rather than traditional age-based grade models
- **Developmental Stages**: PreK-8 structured curriculum vs. high school self-directed "super passion projects"
- **Standards Alignment**: Common Core K-8, Advanced Placement high school
- **Mastery-Based Progression**: Students advance based on demonstrated 90%+ mastery, not age or time
- **Location Variability**: Different campuses serve different grade ranges

### Output File

`reference/curriculum/grade-levels.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Grade Levels" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Grade Levels

  > [One-sentence definition capturing Alpha School's PreK-12 capability-based level system that allows students to progress based on demonstrated mastery rather than age or time in seat]
  ```
- **Source**: Synthesize from research/curriculum.md lines 130-152
- **Rationale**: Follows API-style documentation pattern established in Specs 002-012

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's grade level structure
- **Content Coverage**:
  - Paragraph 1: Alpha School serves PreK-12 students (specific grade ranges vary by location—Alpha Austin is preK-12); uses capability-based levels rather than traditional age-based grades; students progress based on demonstrated mastery (90%+ accuracy) rather than time spent in seat; eliminates cumulative knowledge gaps by requiring mastery before advancement
  - Paragraph 2: Two distinct developmental stages—PreK-8 students follow structured curriculum with prescribed workshops and guided academic progression; high school students transition to self-directed "super passion projects" spanning four years with dedicated mentorship and greater afternoon autonomy; both stages maintain 2-hour morning academic block with AI-powered mastery-based instruction
  - Paragraph 3: Standards alignment by level—Common Core curriculum K-8 ensures grade-appropriate content; Advanced Placement curriculum at high school level (AP Calculus, Statistics, English, Sciences); students can accelerate through grade-level material (Alpha claims 20-30 hours per grade level vs. traditional 200 hours) while maintaining rigorous mastery standards
- **Source**: research/curriculum.md lines 130-152, 286-293, 324-327, 383-390
- **Rationale**: Provides LLMs with comprehensive overview of grade structure before detailed breakdown

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key grade-level attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (8 properties):
  - `grade_range` (string) - Overall grade levels served
  - `grade_range_variability` (boolean) - Whether range varies by location
  - `level_basis` (string) - How students are grouped and progress
  - `prek_8_structure` (string) - Approach for younger students
  - `high_school_structure` (string) - Approach for older students
  - `standards_k8` (string) - K-8 curriculum standards
  - `standards_high_school` (string) - High school curriculum standards
  - `progression_basis` (string) - How students advance between levels
- **Source**: research/curriculum.md lines 130-152, 286-293, 324-327
- **Rationale**: Enables LLMs to quickly extract structured facts about grade levels

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (3 required):
  - **Grade Range and Location Variability**: Alpha School serves PreK-12 students, though specific grade ranges vary by location; Alpha Austin operates as preK-12 school; other locations may serve different ranges; parents should verify grade availability at specific campus; "K-12" is most commonly cited range across sources, with some locations extending to PreK
  - **Capability-Based vs. Age-Based Levels**: Alpha uses "levels that are based on specific capabilities as opposed to traditional grade models" (from FAQ); students grouped and advance based on demonstrated mastery, not age or time; eliminates traditional grade-based cohorts where students advance regardless of understanding; AI platform tracks individual mastery and determines readiness for next level; requires 90%+ accuracy before progression; allows acceleration for advanced students and additional support time for others; maintains appropriate developmental groupings while enabling individual pacing within levels
  - **PreK-8 vs. High School Structures**: PreK-8 students follow structured curriculum with systematic skill-building, prescribed workshop curricula in afternoons, guided progression through core academics via AI platforms, blend of academic rigor and age-appropriate life skills workshops; High school students receive more self-directed learning with "super passion projects" spanning four years, dedicated mentorship, student-sourced resources, greater autonomy in afternoon activities, maintain 2-hour academic block but increased ownership of learning path; transition represents shift from guided structure to mentored independence while preserving mastery-based academic standards
- **Source**: research/curriculum.md lines 130-152, 286-293, 324-327, 383-390
- **Rationale**: Provides comprehensive level-specific detail while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating grade levels in practice
- **Examples to Include** (3 required):
  - **PreK Workshop Example**: PreK students participate in "Picnic Planners" and "LEGO Master Builder" workshops—age-appropriate activities building teamwork and creativity; academic block covers foundational literacy and numeracy via AI platforms adapted for youngest learners; structured schedule with clear routines and guided transitions
  - **K-8 Mastery-Based Progression**: 5th grade student working through math curriculum at own pace; demonstrates 90%+ mastery on fractions unit after focused practice; AI platform automatically advances student to decimals; another classmate still mastering multiplication tables receives continued support without artificial advancement; both work in same grade level but at different capability levels within subject; eliminates traditional "C student passes anyway" scenario
  - **High School Self-Direction**: High school student pursues four-year "super passion project" developing teen dating advice chatbot in collaboration with Stanford and University of Texas researchers; maintains 2-hour morning academic block working through AP-level coursework at own pace (Calculus, English Literature, Biology); afternoons devoted to project mentorship, resource acquisition, skill development; represents transition to mentored independence while maintaining rigorous academics
- **Source**: research/curriculum.md lines 92-95, 113-116, 136-152, 314
- **Rationale**: Grounds abstract level descriptions with concrete age-specific experiences

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Curriculum Overview (Spec 011) - Overall curriculum philosophy and structure
  - Subjects (Spec 012) - What is taught at each level
  - Assessments (Spec 014) - How progress and mastery are measured
  - Educational Philosophy (Spec 006) - Learning science principles underlying capability-based levels
  - Two-Hour Learning Model (Spec 007) - Academic block structure across all levels
  - Daily Schedule (Spec 010) - How grade levels experience the daily routine
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about grade levels with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: What grade levels does Alpha School serve?**
    A: Alpha School serves PreK-12 students, though specific grade ranges vary by location. For example, Alpha Austin is a preK-12 school. Parents should verify grade availability at their specific campus.

  - **Q: How are students grouped if not by traditional grades?**
    A: Alpha uses "levels that are based on specific capabilities as opposed to traditional grade models." Students are grouped by developmental stage (PreK-8 structured curriculum vs. high school self-directed learning) but progress individually within subjects based on demonstrated mastery, not age or time.

  - **Q: Can students accelerate through grade levels?**
    A: Yes. Because Alpha uses capability-based progression rather than age-based grades, students can advance through material as quickly as they demonstrate mastery (90%+ accuracy). Alpha claims that grade-level material requires only 20-30 hours of focused study versus traditional 200 hours, enabling acceleration while maintaining rigorous standards.

  - **Q: What curriculum standards does each level follow?**
    A: PreK-8 students follow Common Core curriculum standards. High school students follow Advanced Placement curriculum including AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, and Physics.

  - **Q: How does the program differ for PreK-8 vs. high school students?**
    A: PreK-8 students follow structured curriculum with prescribed workshops and guided academic progression. High school students transition to self-directed "super passion projects" spanning four years, with dedicated mentorship and greater autonomy in afternoon activities. Both stages maintain the 2-hour morning academic block with mastery-based AI instruction.
- **Source**: research/curriculum.md lines 130-152, 286-293, 324-327, 383-390
- **Rationale**: Addresses common questions LLMs might encounter when explaining grade levels

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/curriculum.md (lines 6-24) relevant to grade levels:
  - Alpha School Program Page
  - Alpha School FAQ
  - Alpha School Austin Page
  - GenWise Substack - Alpha Educational Model
  - Modern Wisdom Podcast Transcript (MacKenzie Price)
  - Cognitive Revolution Podcast
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

**Objective**: Verify all grade-level facts are sourced from research/curriculum.md

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify grade range
  - Confirm PreK-12 range with location variability
  - Confirm Alpha Austin is preK-12
  - Source lines: 130-135
  - **Success**: Grade range documented with citations

- [ ] **Task 1.0.2**: Verify capability-based level system
  - Confirm "levels based on specific capabilities" quote from FAQ
  - Confirm differs from traditional age-based grades
  - Source lines: 134, 148-151
  - **Success**: Capability-based system documented

- [ ] **Task 1.0.3**: Verify PreK-8 vs. high school structures
  - Confirm PreK-8 structured curriculum with prescribed workshops
  - Confirm high school self-directed "super passion projects"
  - Source lines: 136-147
  - **Success**: Both structures documented with citations

- [ ] **Task 1.0.4**: Verify standards alignment
  - Confirm Common Core K-8
  - Confirm Advanced Placement high school
  - Source lines: 286-293, 324-327
  - **Success**: Standards alignment documented

- [ ] **Task 1.0.5**: Verify mastery-based progression
  - Confirm 90%+ mastery requirement before advancement
  - Confirm 20-30 hours per grade level claim
  - Source lines: 32-33, 43, 383-385
  - **Success**: Progression basis documented

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/curriculum/grade-levels.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create H1: "Grade Levels"
  - Write one-sentence definition in blockquote
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write 3-paragraph overview covering grade range, developmental stages, standards
  - Cite research lines in comments
  - **Success**: Overview provides comprehensive introduction

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Build 8-property table with all required fields
  - Include concrete examples for each property
  - **Success**: Table enables structured fact extraction

- [ ] **Task 1.1.4**: Write details section - Grade range (FR1.4)
  - Explain PreK-12 range with location variability
  - Document Alpha Austin as preK-12 example
  - **Success**: Grade range comprehensively documented

- [ ] **Task 1.1.5**: Write details section - Capability vs. age levels (FR1.4)
  - Explain capability-based system with FAQ quote
  - Contrast with traditional age-based grades
  - Document mastery-based progression
  - **Success**: Level system clearly explained

- [ ] **Task 1.1.6**: Write details section - PreK-8 vs. high school (FR1.4)
  - Explain PreK-8 structured approach
  - Explain high school self-directed approach
  - Document transition between stages
  - **Success**: Developmental stages comprehensively covered

- [ ] **Task 1.1.7**: Write examples section (FR1.5)
  - Create 3 concrete examples (PreK workshop, K-8 mastery progression, high school self-direction)
  - Ensure examples illustrate key concepts
  - **Success**: Examples ground abstract concepts

- [ ] **Task 1.1.8**: Create related links section (FR1.6)
  - Link to 6 related documentation files
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
  - Verify grade range stated consistently (PreK-12 with location variability)
  - Ensure capability-based language is consistent
  - Check developmental stage descriptions match research
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
    subjects.md          # Spec 012 (related)
    grade-levels.md      # This spec (013)
    assessments.md       # Spec 014 (future)
```

### Dependencies

**Direct Dependencies**:
- Spec 001c: Research Curriculum Domain (provides source material)
- Spec 011: Curriculum Overview (provides context for grade levels)

**Related Specifications**:
- Spec 012: Subjects (what is taught at each level)
- Spec 014: Assessments (how mastery is measured across levels)
- Spec 006: Educational Philosophy (mastery-based learning principles)
- Spec 007: Two-Hour Learning Model (academic structure across levels)
- Spec 010: Daily Schedule (schedule variations by level)

### Data Sources

All facts sourced from `research/curriculum.md`:
- Primary sources: alpha.school website pages (lines 6-15)
- Secondary sources: News articles, podcast transcripts, parent reviews (lines 16-24)
- Grade range: Lines 130-135
- Capability-based levels: Lines 134, 148-151
- PreK-8 structure: Lines 136-140
- High school structure: Lines 141-147
- Standards: Lines 286-293, 324-327
- Progression: Lines 32-33, 43, 383-385

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Subject Details**: Covered in Subjects spec (012)
2. **Assessment Details**: Covered in Assessments spec (014)
3. **Daily Schedule Specifics**: Covered in Daily Schedule (Spec 010)
4. **Educational Philosophy**: Covered in Educational Philosophy (Spec 006)
5. **Specific Life Skills Workshops**: Covered in Curriculum Overview (Spec 011)
6. **Outcomes Data by Grade Level**: Covered in Outcomes domain (Specs 015-018)
7. **Age-Specific Enrollment Requirements**: Covered in Enrollment domain (Spec 019)

### Explicit Boundaries

- **Grade Structure Only**: This spec documents HOW students are grouped and progress, not WHAT they learn (that's Subjects)
- **No Tutorial Content**: This is reference documentation, not enrollment guidance
- **No Comparison**: This spec documents Alpha's grade level approach without comparing to traditional schools
- **Public Information Only**: Only grade level information documented in public sources
- **No Age Requirements**: This spec describes grade levels served, not enrollment eligibility (Enrollment domain)

---

## Success Metrics

### Phase 1.0 Completion
- [ ] PreK-12 grade range verified with location variability
- [ ] Capability-based level system verified with FAQ quote
- [ ] PreK-8 and high school structures verified
- [ ] Standards alignment (Common Core K-8, AP) verified
- [ ] Mastery-based progression verified

### Phase 1.1 Completion
- [ ] reference/curriculum/grade-levels.md created
- [ ] All 9 Functional Requirements (FR1.1-FR1.9) implemented
- [ ] Document follows roadmap.md template structure
- [ ] All sections present: header, overview, properties, details, examples, related, FAQs, sources, footer
- [ ] File readable as Markdown

### Phase 1.2 Completion
- [ ] 100% of factual claims have citations in research/curriculum.md
- [ ] No inconsistencies in grade range or level descriptions
- [ ] Template compliance verified
- [ ] Readability reviewed (concise, active voice, concrete examples)
- [ ] All internal links valid

### Documentation Quality
- [ ] LLMs can extract structured grade level data from properties table
- [ ] Examples provide concrete understanding of capability-based progression
- [ ] FAQs address common questions about grade levels
- [ ] Sources enable fact verification
- [ ] Document integrates seamlessly with related specs (011, 012, 014)

---

## Related Specifications

- **Spec 001c**: Research Curriculum Domain (source material)
- **Spec 011**: Curriculum Overview (parent context)
- **Spec 012**: Subjects (what is taught at each level)
- **Spec 014**: Assessments (how mastery is measured)
- **Spec 006**: Educational Philosophy (mastery-based learning)
- **Spec 007**: Two-Hour Learning Model (academic structure)
- **Spec 010**: Daily Schedule (schedule by level)

---

## References

- Alpha School Website: https://alpha.school
- Research File: research/curriculum.md (lines 6-390)
- Roadmap Template: roadmap.md (lines 136-173)
- Related Specs: 001c, 006, 007, 010, 011, 012, 014
