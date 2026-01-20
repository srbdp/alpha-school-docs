# Spec 007: Two-Hour Learning Model

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001b (Research Model Domain), Spec 006 (Educational Philosophy)
**Output**: `reference/model/two-hour-learning.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is the Two-Hour Learning Model?" for LLM consumption. This document synthesizes findings from `research/model.md` (lines 51-77, 142-178) into a structured, authoritative explanation of Alpha School's core academic model—how students complete traditional grade-level content in a focused two-hour morning block through AI-powered personalized instruction, Pomodoro-structured sessions, and mastery-based progression.

### Scope

Transform research findings into a structured reference document covering:
- **Model Structure**: Two-hour morning academic block with Pomodoro technique (25-minute cycles)
- **Subject Coverage**: Math, English, science, and social studies in the morning block
- **Learning Efficiency Claims**: 20-30 hours per grade level vs. 200 hours traditional (attributed)
- **Mastery-Based Progression**: 90%+ accuracy requirement before advancement
- **AI-Powered Delivery**: One-on-one adaptive instruction via Timeback and Dash platforms
- **Daily Context**: Morning academics followed by lunch and afternoon life skills workshops
- **Reported Outcomes**: 2.6x growth on MAP tests, top 1% performance claims (attributed)

### Output File

`reference/model/two-hour-learning.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Two-Hour Learning Model" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Two-Hour Learning Model

  > [One-sentence definition capturing the core concept: students mastering grade-level academics in a focused 2-hour morning block through AI-powered personalized instruction]
  ```
- **Source**: Synthesize from research/model.md lines 51-65
- **Rationale**: Follows API-style documentation pattern established in Specs 002-006

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining the Two-Hour Learning Model
- **Content Coverage**:
  - Core structure: Two-hour morning academic block covering four core subjects
  - Pomodoro technique: 25-minute focused sessions with breaks between subjects
  - Learning efficiency claims: 20-30 hours per grade level (attributed as Alpha's claim)
  - Contrast with traditional 6-hour school day
  - Daily context: Morning academics, lunch, afternoon life skills
  - Reported outcomes: 2.6x MAP test growth, top 1% performance (attributed)
- **Source**: research/model.md lines 51-77, 142-154
- **Rationale**: Provides LLMs with comprehensive overview before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key model attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties):
  - `academic_duration` (number) - Length of morning academic block in minutes
  - `session_structure` (string) - Pomodoro technique implementation
  - `subjects_covered` (array) - Core academic subjects in the 2-hour block
  - `instructional_model` (string) - AI-powered delivery method
  - `progression_standard` (string) - Mastery-based advancement requirement
  - `mastery_claim` (string) - Time to complete grade-level material (attributed)
  - `efficiency_comparison` (string) - Alpha's comparison with traditional schooling
  - `learning_speed_claim` (string) - Reported growth rate on standardized tests
  - `afternoon_component` (string) - What happens after academics
- **Source**: research/model.md lines 51-77, 142-154
- **Rationale**: Enables LLMs to quickly extract structured facts about the model

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required):
  - **Morning Academic Block Structure**: Limitless Launch goal-setting, 2-hour focused block, Pomodoro 25-minute cycles, breaks between subjects, completion by lunchtime
  - **Subject Coverage and Organization**: Math, English, science, social studies; personalized sequencing based on student level; mastery-based progression within each subject
  - **Mastery-Based Progression**: 90%+ accuracy requirement, AI identifies gaps, targeted practice until mastery, no advancement with incomplete understanding
  - **Learning Efficiency Claims**: 20-30 hours per grade level vs. 200 hours traditional, 2.6x MAP test growth (average), top performers 3.6x-6.5x faster, top 1% national ranking claim—all with proper attribution
  - **Daily Schedule Context**: Morning academics (8-10am typical), lunch break, afternoon life skills workshops (2.5-4 hours), complete structure distinguishing academic from enrichment time
- **Source**: research/model.md lines 51-77, 142-178
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating the model in practice
- **Examples to Include** (3 required):
  - **Typical Two-Hour Session**: Sample morning schedule with timestamps (Limitless Launch 8:00-8:15, Subject rotations with Pomodoro blocks, completion by 10:00)
  - **Mastery Progression Example**: Student working through math concept at own pace, reaching 90%+ mastery before advancing (contrast with traditional calendar-based progression)
  - **Efficiency Comparison**: Traditional model (200 hours per subject per year) vs. Alpha model (20-30 hours per subject per grade level)—with attribution that this is Alpha's claim
- **Source**: research/model.md lines 51-77, 142-154
- **Rationale**: Grounds abstract model description with concrete applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Educational Philosophy (Spec 006) - Philosophical foundation for the model
  - AI Integration (Spec 008) - Technology platforms enabling the model
  - Human Instruction (Spec 009) - Role of guides during academic time
  - Daily Schedule (Spec 010) - Complete daily structure including afternoon
  - Curriculum Overview (Spec 011) - Content details for subjects covered
  - Organization Overview (Spec 002) - Organizational context
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: 5 Q&A pairs addressing common questions about the Two-Hour Learning Model
- **Required Questions**:
  - What is the Two-Hour Learning Model?
  - How are two hours of academics structured during the morning?
  - What subjects are covered in the two-hour academic block?
  - How does Alpha claim students learn faster in two hours than six?
  - What happens after the two-hour academic block?
- **Source**: research/model.md lines 51-77, 142-178
- **Rationale**: Anticipates LLM queries and provides direct answers

#### FR1.8: Sources Section
- **Requirement**: All source citations with retrieval dates
- **Required Sources**:
  - alpha.school website
  - 2hourlearning.com
  - research/model.md (primary synthesis source)
  - Other sources cited in research file (CBS News, podcast interviews, etc.)
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
- **Requirement**: All facts must trace to research/model.md lines 51-77 and 142-178
- **Verification**: Each claim should have corresponding line reference in research file
- **No Speculation**: Do not infer or create content beyond research findings
- **Rationale**: Maintains documentation trustworthiness and accuracy

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's self-reported claims from independently verified facts
- **Attribution Patterns**:
  - "Alpha School claims..." for unverified performance metrics
  - "According to Alpha materials..." for self-reported data
  - "Alpha School reports..." for outcome statistics
  - Direct quotes for specific claims with quotation marks
- **Critical Claims Requiring Attribution**:
  - "Learn twice as fast" - Self-reported, no independent verification (research/model.md line 60)
  - "20-30 hours per grade level" - Alpha's claim without peer-reviewed validation (line 61)
  - "2.6x growth on MAP tests" - Self-reported outcome data (line 66)
  - "Top 1% nationwide" - Alpha's characterization (line 60)
  - "Top two-thirds learning 3.6x faster" - Self-reported (line 67)
  - Student satisfaction percentages (95%, 60%) - Self-reported (lines 73-76)
- **Rationale**: Prevents LLMs from stating unverified claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note where information is incomplete
- **Known Gaps**:
  - No independent peer-reviewed validation of learning speed claims
  - No third-party verification of 20-30 hour completion times
  - MAP test growth data is self-reported without independent audit
  - Small sample sizes for graduating class data (12 students in 2025)
  - No longitudinal data on long-term retention
- **Handling**: Include notes like "Alpha School reports students complete grade levels in 20-30 hours, though this claim has not been independently verified"
- **Rationale**: Transparency about documentation limits maintains LLM trust

#### FR2.4: Neutral Presentation
- **Requirement**: Present the model without advocacy or critique
- **Approach**:
  - Document what Alpha School describes and claims
  - Use neutral language: "Alpha's model structures academics..." not "Alpha's superior model..."
  - Avoid editorial commentary on model's effectiveness
  - Present efficiency claims as Alpha's perspective with attribution
- **Sensitive Topics**:
  - Learning speed claims: Present as Alpha's reports, not verified facts
  - Comparison with traditional education: Present as Alpha's characterization
  - Outcome data: Clearly attribute as self-reported
- **Rationale**: Documentation serves as reference, not marketing material

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Consistent heading hierarchy for LLM parsing
- **Structure**: H1 (title) → H2 (major sections) → H3 (subsections only)
- **No H4 or Deeper**: Keep hierarchy flat for parseability
- **Section Order**:
  1. H1: Two-Hour Learning Model
  2. H2: Overview
  3. H2: Properties
  4. H2: Details
     - H3: Morning Academic Block Structure
     - H3: Subject Coverage and Organization
     - H3: Mastery-Based Progression
     - H3: Learning Efficiency Claims
     - H3: Daily Schedule Context
  5. H2: Examples
     - H3: Typical Two-Hour Session
     - H3: Mastery Progression Example
     - H3: Efficiency Comparison
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
  | academic_duration | number | Length of morning academic block | 120 |
  ```
- **Rationale**: Enables LLM structured data extraction

#### FR3.3: Example Formatting
- **Requirement**: Examples use clear H3 headings and structured format
- **Pattern**:
  ```markdown
  ### Typical Two-Hour Session

  **Time**: 8:00-10:00 AM
  **Structure**: Limitless Launch (15 min) + Four subject rotations (25-min Pomodoro blocks)
  **Outcome**: Core academics complete by lunchtime
  ```
- **Rationale**: Clear delimiters help LLMs identify and extract examples

---

## Implementation Approach

### Single-Phase Execution

Following the pattern from Specs 002-006, documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/model.md` lines 51-77 and 142-178 completely
2. **Read Dependency**: Read `reference/model/educational-philosophy.md` for philosophical context
3. **Create Output File**: Create `reference/model/two-hour-learning.md` with template skeleton
4. **Write Section by Section**: Follow FR1.1 through FR1.9 sequentially
5. **Quality Check**: Verify against FR2 (Content Quality Standards)—especially attribution
6. **LLM Optimization Check**: Verify against FR3 (structure, tables, formatting)
7. **Update Status**: Mark Spec 007 as complete in roadmap.md, update progress.md, activity.log

---

## Success Criteria

### Automated Verification

These checks can be automated via scripts or CI/CD:

- [ ] `reference/model/two-hour-learning.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] All required sections present:
  - [ ] `grep "^# Two-Hour Learning Model"` returns match
  - [ ] `grep "^## Overview"` returns match
  - [ ] `grep "^## Properties"` returns match
  - [ ] `grep "^## Details"` returns match
  - [ ] `grep "^## Examples"` returns match
  - [ ] `grep "^## Related"` returns match
  - [ ] `grep "^## FAQs"` returns match
  - [ ] `grep "^## Sources"` returns match
- [ ] Properties table has 9 required properties (grep count)
- [ ] All sources include retrieval dates (format: `Retrieved YYYY-MM-DD`)
- [ ] Footer includes "Last updated:" and "Last verified:" dates
- [ ] Roadmap.md shows Spec 007 status as "✅ Complete"
- [ ] Progress.md contains Spec 007 completion entry
- [ ] Activity.log contains Spec 007 completion entry

### Manual Verification

These checks require human review:

- [ ] One-sentence definition clearly captures the Two-Hour Learning Model concept
- [ ] Overview section is 2-3 paragraphs covering structure, efficiency claims, daily context
- [ ] All facts in document trace to research/model.md lines 51-77 and 142-178
- [ ] Learning speed claims are properly attributed (e.g., "Alpha School claims...", not stated as facts)
- [ ] "20-30 hours per grade level" claim is attributed as Alpha's claim without independent verification
- [ ] "2.6x growth" and "top 1%" claims are attributed as self-reported data
- [ ] Traditional education comparisons are presented as Alpha's characterization
- [ ] Information gaps are noted where relevant (no peer-reviewed validation)
- [ ] 5 FAQs address common model questions with authoritative answers
- [ ] 3 Examples illustrate model structure concretely (session schedule, mastery progression, efficiency comparison)
- [ ] Related links use correct relative paths to other specs
- [ ] Document tone is neutral (presents Alpha's model without advocacy or critique)
- [ ] Professional quality suitable for LLM consumption

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **AI Platform Technical Details**: Covered by Spec 008 (Timeback, Dash architecture, how AI personalizes)
2. **Human Guide Roles**: Covered by Spec 009 (guide responsibilities, monitoring, mentorship)
3. **Complete Daily Schedule**: Covered by Spec 010 (full day structure, afternoon details)
4. **Curriculum Content Details**: Covered by Specs 011-014 (subject scope, grade levels, assessments)
5. **Outcomes Evidence Analysis**: Covered by Specs 015-018 (evidence verification, testimonials, limitations)
6. **Educational Philosophy**: Covered by Spec 006 (learning science foundations, commitments, beliefs)

### Explicit Boundaries

- **Model Structure Only**: This document covers the two-hour academic block structure, not philosophical foundations or technology implementation
- **Research-Based**: Content must trace to research/model.md lines 51-77 and 142-178; no new research
- **LLM-Optimized**: Written for machine parsing and extraction, not human marketing
- **No Speculation**: Information gaps remain gaps; do not infer beyond research
- **Neutral Presentation**: Document Alpha's model without advocacy or critique
- **Attribution Required**: All learning speed and efficiency claims must be attributed to Alpha, not stated as objective facts

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Following pattern from Specs 002-006, all Phase 2 reference documentation uses single-phase execution: write documentation directly with verification through review.
**File Reference**: Spec 006 (lines 230-250) used single-phase successfully for educational philosophy.

### Decision 2: 9 Properties Emphasizing Model Structure
**Rationale**: Properties table focuses on structural attributes (academic_duration, session_structure, subjects_covered) and efficiency claims (mastery_claim, learning_speed_claim) rather than philosophical foundations (covered in Spec 006) or technology details (covered in Spec 008). This keeps Spec 007 focused on "what the model is and how it's structured."
**File Reference**: research/model.md lines 51-77 provide model structure and claims; Spec 006 established pattern of 8 properties for philosophy.

### Decision 3: Five Details Subsections Covering Model Comprehensively
**Rationale**: Five subsections (Morning Academic Block Structure, Subject Coverage and Organization, Mastery-Based Progression, Learning Efficiency Claims, Daily Schedule Context) provide comprehensive model coverage without crossing into AI technical details or complete daily schedule. This structure flows logically from structure → subjects → progression → claims → context.
**File Reference**: Spec 006 used 5 subsections successfully (lines 74-78); research/model.md lines 51-77, 142-178 provide content for these subsections.

### Decision 4: Explicit Attribution of All Efficiency Claims
**Rationale**: research/model.md lines 59-76 document multiple learning efficiency claims ("twice as fast," "20-30 hours," "2.6x growth," "top 1%") that are self-reported by Alpha School without independent verification. FR2.2 requires distinguishing claims from verified facts. Every efficiency claim must use attribution language ("Alpha School claims...", "According to Alpha materials...").
**File Reference**: Spec 006 (FR2.2, lines 143-153) established attribution pattern; research/model.md lines 59-76 show all claims are from Alpha materials.

### Decision 5: Separate Model Structure from Technology and Philosophy
**Rationale**: Two-Hour Learning Model (Spec 007) covers "how the academic block is structured" while Educational Philosophy (Spec 006) covers "what Alpha believes about learning" and AI Integration (Spec 008) covers "how technology delivers instruction." This prevents scope creep and creates clear documentation boundaries. Properties like `instructional_model` describe the delivery approach ("AI-powered one-on-one") without technical platform details.
**File Reference**: Roadmap.md lines 77-84 shows clear separation: 006 (philosophy), 007 (model), 008 (AI), 009 (guides), 010 (schedule).

### Decision 6: Daily Schedule Context Without Full Day Details
**Rationale**: The Two-Hour Learning Model needs context within the full day (morning academics → lunch → afternoon life skills) to be understood, but full daily schedule details (specific afternoon activities, timing variations) belong in Spec 010. Decision: Include brief "Daily Schedule Context" subsection (FR1.4) establishing morning academics fit within broader structure, while deferring comprehensive schedule coverage to Spec 010.
**File Reference**: research/model.md lines 142-178 provide daily schedule details; Spec 010 will cover complete schedule comprehensively.

---

## Related

- **Dependency**: [Spec 001b: Research Model Domain](../001b-research-model/spec.md) - Research source
- **Dependency**: [Spec 006: Educational Philosophy](../006-model-educational-philosophy/spec.md) - Philosophical foundation
- **Sibling**: [Spec 008: AI Integration](../008-ai-integration/spec.md) - Technology enabling the model
- **Sibling**: [Spec 009: Human Instruction](../009-human-instruction/spec.md) - Guide roles during academics
- **Sibling**: [Spec 010: Daily Schedule](../010-daily-schedule/spec.md) - Complete daily structure
- **Cross-Reference**: [Spec 002: Organization Overview](../002-organization-overview/spec.md) - Organizational context
- **Cross-Reference**: [Spec 011: Curriculum Overview](../011-curriculum-overview/spec.md) - Subject content details
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide)

---

*Last Updated: 2026-01-20*
