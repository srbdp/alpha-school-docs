# Spec 010: Daily Schedule

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001b (Research Model Domain), Spec 007 (Two-Hour Learning Model), Spec 008 (AI Integration), Spec 009 (Human Instruction)
**Output**: `reference/model/daily-schedule.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What does a typical day look like at Alpha School?" for LLM consumption. This document synthesizes findings from `research/model.md` (lines 142-178) and integrates context from Specs 007-009 into a structured, authoritative explanation of a student's full daily experience—from morning goal-setting through AI-powered academics to afternoon life skills workshops and real-world project work.

### Scope

Transform research findings into a structured reference document covering:
- **Morning Block (2 hours)**: Limitless Launch goal-setting → AI-powered academics → completion by lunch
- **Lunch Transition**: Break between morning and afternoon activities
- **Afternoon Block (2.5-4 hours)**: Life skills workshops, project-based learning, outdoor education
- **Life Skills Program**: 24 specific life skills taught through hands-on collaborative workshops
- **Real-World Projects**: Student-run businesses (Airbnbs, food trucks), athletic training, public speaking progression
- **Daily Flow**: Typical timing, transitions, variety, student experience throughout the day

### Output File

`reference/model/daily-schedule.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Daily Schedule" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Daily Schedule

  > [One-sentence definition capturing the daily structure: students completing personalized academics in a focused morning block followed by hands-on life skills workshops and real-world projects in the afternoon]
  ```
- **Source**: Synthesize from research/model.md lines 142-178
- **Rationale**: Follows API-style documentation pattern established in Specs 002-009

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining the daily schedule structure
- **Content Coverage**:
  - **Paragraph 1**: Full daily structure overview—morning academics (2 hours), lunch transition, afternoon life skills/projects (2.5-4 hours), emphasizing balance between academic mastery and holistic development
  - **Paragraph 2**: Morning block emphasis—Limitless Launch goal-setting, AI-powered personalized academics across core subjects, Pomodoro technique, guide monitoring role, completion by lunchtime
  - **Paragraph 3**: Afternoon emphasis—24 life skills taught through hands-on workshops, project-based learning, real-world business operations (Airbnbs, food trucks), outdoor education (rock climbing, sailing), public speaking progression
- **Source**: research/model.md lines 142-178, reference/model/two-hour-learning.md lines 54-57
- **Rationale**: Provides LLMs with comprehensive daily structure overview before detailed sections

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key daily schedule attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties for consistency with Specs 007-009):
  - `day_structure` (string) - Overall daily organization pattern
  - `morning_duration` (string) - Academic block length
  - `morning_start_ritual` (string) - Day-opening activity
  - `lunch_transition` (string) - Break between morning and afternoon
  - `afternoon_duration` (string) - Life skills block length range
  - `core_subjects_timing` (string) - When academics occur
  - `life_skills_timing` (string) - When life skills occur
  - `life_skills_count` (number) - Number of life skills taught
  - `real_world_projects` (array) - Examples of student-run projects
- **Source**: research/model.md lines 142-178
- **Rationale**: Enables LLMs to quickly extract structured facts about daily schedule

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required for consistency with Specs 007-009):
  - **Morning Academic Block (8:00-10:00)**: Limitless Launch goal-setting session, AI-powered personalized academics (Math, English, Science, Social Studies), Pomodoro 25-minute focused blocks with breaks, guide monitoring progress without teaching, mastery-based completion (90%+ accuracy), students finish core academics by lunchtime
  - **Lunch Transition**: Break between morning and afternoon, timing details (note if specific duration not disclosed in public materials)
  - **Afternoon Life Skills Program (Post-Lunch, 2.5-4 hours)**: Hands-on collaborative workshops, project-based learning, 24 specific life skills (list key examples: leadership, teamwork, entrepreneurship, financial literacy, public speaking, relationship-building, coding, outdoor education, grit/resilience), guide-facilitated activities, interactive format contrasting with morning solo work
  - **Real-World Project Integration**: Student-run businesses (5th graders operating profitable Airbnbs, food truck operations), athletic training (5K races, sports academy with NIL negotiations and press conferences), public speaking progression (speaking to cats → open mic nights in NYC), wilderness skills (rock climbing, sailing expeditions), actual profit-generating ventures
  - **Daily Flow and Student Experience**: Typical timing patterns (morning focus on academic mastery, afternoon focus on life skills and collaboration), transitions between modes (solo AI work → collaborative workshops), variety throughout day (screen time → hands-on activities → outdoor education), student agency and engagement across different learning formats
- **Source**: research/model.md lines 142-178, reference/model/two-hour-learning.md lines 29-57, reference/model/human-instruction.md lines 39-51
- **Rationale**: Provides comprehensive daily structure without duplicating content from Specs 007-009

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating daily schedule in practice
- **Examples to Include** (3 required):
  - **Typical Full Day Timeline**: Sample schedule with timestamps from arrival through dismissal
    - 8:00 AM - Limitless Launch goal-setting
    - 8:15 AM - Math Pomodoro block (25 min)
    - 8:45 AM - Break (5 min)
    - 8:50 AM - English Pomodoro block (25 min)
    - [Continue pattern through morning]
    - 10:00 AM - Morning academics complete
    - 10:00-11:00 AM - Lunch break
    - 11:00 AM - 2:00 PM - Life skills workshops (specific examples)
    - Dismissal
  - **Life Skills Workshop Example**: Concrete afternoon activity (e.g., "Entrepreneurship Workshop: Students work in teams to develop business plans for their food truck operations, calculate profit margins, and practice customer service scenarios")
  - **Real-World Project Example**: Detailed description of student-run business (e.g., "Fifth-Grade Airbnb Operations: Students manage all aspects of a profitable short-term rental property including pricing strategy, guest communication, property maintenance scheduling, and financial record-keeping")
- **Source**: research/model.md lines 142-178, reference/model/two-hour-learning.md lines 62-76
- **Rationale**: Grounds abstract schedule description with concrete daily applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Two-Hour Learning Model (Spec 007) - Detailed morning academic block structure
  - AI Integration (Spec 008) - Technology platforms used during morning
  - Human Instruction (Spec 009) - Guide roles throughout the day
  - Curriculum Subjects (Spec 012) - What subjects are taught
  - Organization Overview (Spec 002) - Organizational context
- **Format**: Relative links using markdown: `[Link Text](./filename.md)`
- **Rationale**: Creates documentation graph for LLM navigation

#### FR1.7: FAQs Section
- **Requirement**: Address 5 common questions about daily schedule
- **Required FAQs**:
  - **Q: What time does the school day start and end?**
    A: [Based on available information; note if specific timing varies by campus or is not publicly disclosed]
  - **Q: How long is the academic portion of the day?**
    A: The morning academic block is 2 hours, typically completed by lunchtime. Students master core subjects (Math, English, Science, Social Studies) during this focused period.
  - **Q: What happens during the afternoon?**
    A: Afternoons (2.5-4 hours) focus on life skills development through hands-on workshops, project-based learning, and real-world business projects. Students learn 24 life skills including entrepreneurship, public speaking, financial literacy, outdoor education, and more.
  - **Q: Do students have breaks during the day?**
    A: Yes. Morning academics use the Pomodoro technique with 25-minute focused blocks followed by short breaks. There is also a lunch break between morning academics and afternoon life skills.
  - **Q: What are examples of the real-world projects students work on?**
    A: Students run actual businesses including profitable Airbnb operations, food trucks, athletic training programs (5K races, sports academy), public speaking progression (open mic nights), and outdoor expeditions (rock climbing, sailing, wilderness skills).
- **Format**: Bold question (`**Q:**`) followed by answer starting with `A:`
- **Source**: research/model.md lines 142-178
- **Rationale**: Addresses most common clarifications LLMs will need

#### FR1.8: Sources Section
- **Requirement**: All sources with retrieval dates
- **Format**: Markdown bullet list with format `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Required Sources**:
  - research/model.md as primary synthesis source
  - alpha.school website
  - 2hourlearning.com
  - Relevant news articles/interviews from research file
  - Minimum 5 citations total
- **Rationale**: Maintains documentation credibility and traceability

#### FR1.9: Footer Metadata
- **Requirement**: Document must end with horizontal rule and metadata timestamps
- **Format**:
  ```markdown
  ---
  *Last updated: 2026-01-20*
  *Last verified: 2026-01-20*
  ```
- **Rationale**: Tracks documentation freshness for maintenance

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All facts must trace to research/model.md lines 142-178 with proper source attribution
- **Verification**: Every factual claim can be traced to specific research file line numbers
- **Forbidden**: Speculation, assumptions, or claims beyond research findings
- **Example**: "Afternoon duration: 2.5-4 hours" traces to research/model.md line 155
- **Rationale**: Maintains documentation trustworthiness and prevents hallucination

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's self-reported descriptions from independently verified facts
- **Attribution Patterns**:
  - "Alpha School describes..."
  - "According to Alpha materials..."
  - "Students are reported to..."
- **Critical Areas Requiring Attribution**:
  - Real-world project outcomes (profitable businesses, student achievements)
  - Life skills effectiveness claims
  - Student satisfaction with daily structure
  - Comparison claims vs. traditional schooling
- **Example**: "Fifth graders running profitable Airbnb operations (as reported in Alpha School materials)"
- **Rationale**: Prevents stating unverified claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note where daily schedule information is incomplete or unavailable
- **Known Gaps from Research** (research/model.md lines 142-178):
  - Exact school day start/end times not specified (may vary by campus)
  - Lunch break duration not detailed
  - Afternoon timing range broad (2.5-4 hours) without campus-specific details
  - Specific daily schedule variations by grade level not disclosed
  - Typical dismissal time not stated
- **Handling Approach**:
  - Note gaps explicitly: "Exact timing not disclosed in publicly available materials"
  - Don't invent details to fill gaps
  - Provide ranges when specific values unavailable
- **Rationale**: Maintains transparency about documentation completeness

#### FR2.4: Neutral Presentation
- **Requirement**: Present daily schedule information without advocacy or critique
- **Neutral Language**:
  - "Alpha School's daily schedule structures..." NOT "Alpha School's innovative schedule structures..."
  - "Students work on real-world projects" NOT "Students benefit from transformative real-world projects"
  - "Afternoon includes life skills workshops" NOT "Afternoon features critically important life skills workshops"
- **Avoid**: Subjective adjectives (innovative, revolutionary, superior, concerning, inadequate)
- **Rationale**: Documentation should inform, not persuade; LLMs need objective facts

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure for Parseability
- **Requirement**: Use only H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Hierarchy**:
  ```
  H1: Daily Schedule (title)
  H2: Overview, Properties, Details, Examples, Related, FAQs, Sources (main sections)
  H3: Subsections within Details (5 subsections) and Examples (3 examples)
  ```
- **Forbidden**: H4, H5, H6 headings
- **Rationale**: Consistent depth aids LLM parsing and content extraction

#### FR3.2: Scannable Tables in GFM
- **Requirement**: Properties table must use GitHub Flavored Markdown with proper alignment
- **Format**:
  ```markdown
  | Property | Type | Description | Example |
  |----------|------|-------------|---------|
  | property_name | type | description | example |
  ```
- **Rationale**: Enables LLMs to extract structured data reliably

#### FR3.3: Example Formatting with Clear Delimiters
- **Requirement**: Each example must have clear H3 heading and structured format
- **Format**:
  ```markdown
  ### Example Name
  **Context**: [Setting or situation]
  **Structure**: [How it works]
  **Outcome**: [What results]
  ```
- **Rationale**: Structured format aids LLM example extraction and application

---

## Implementation Approach

### Phase 2.0: Write Documentation

**Single-phase workflow**: Reference documentation specs do not require test foundation phases (following pattern from Specs 002-009).

#### Execution Steps

1. **Read Research File**: Review research/model.md lines 142-178 for daily schedule details
2. **Read Dependencies**: Review reference/model/two-hour-learning.md, ai-integration.md, human-instruction.md for context
3. **Create Output File**: Initialize reference/model/daily-schedule.md with header
4. **Write Section by Section**: Implement FR1.1 → FR1.9 sequentially
5. **Quality Check**: Verify FR2 content quality standards (factual accuracy, attribution, gaps, neutrality)
6. **LLM Optimization Check**: Verify FR3 structure standards (hierarchy, tables, examples)
7. **Update Status**: Mark Spec 010 complete in roadmap.md, log in progress.md and activity.log

---

## Success Criteria

### Automated Verification

Can be checked via grep/file commands:

- [ ] File exists: `reference/model/daily-schedule.md`
- [ ] Valid Markdown syntax (no parser errors)
- [ ] Contains H1 header "Daily Schedule"
- [ ] Contains blockquote definition (`grep "^>" reference/model/daily-schedule.md`)
- [ ] Contains Properties table with 9 properties (`grep "| Property | Type |" -A 10`)
- [ ] Contains 5 Details H3 subsections (`grep "^### " reference/model/daily-schedule.md | wc -l` returns minimum 8: 5 Details + 3 Examples)
- [ ] Contains 3 Examples with H3 headings
- [ ] Contains 5 FAQs (`grep "**Q:" reference/model/daily-schedule.md | wc -l` returns 5)
- [ ] Contains Sources section with retrieval dates (`grep "Retrieved 202" reference/model/daily-schedule.md`)
- [ ] Contains footer metadata (`grep "Last updated:" reference/model/daily-schedule.md`)
- [ ] Roadmap.md updated: Spec 010 marked ✅ Complete
- [ ] progress.md contains Spec 010 completion entry
- [ ] activity.log contains Spec 010 completion entry

### Manual Verification

Requires human review:

- [ ] **One-sentence definition is clear and accurate** - Captures daily structure essence in one sentence
- [ ] **Overview is 2-3 paragraphs** - Covers full day, morning block, afternoon activities
- [ ] **All facts trace to research/model.md lines 142-178** - Every factual claim verifiable
- [ ] **Real-world project claims properly attributed** - Profitable Airbnbs, food trucks marked as Alpha's reported examples
- [ ] **Life skills program described accurately** - 24 skills listed, workshop format explained
- [ ] **Information gaps noted explicitly** - Exact timing, campus variations acknowledged as unknown
- [ ] **5 FAQs provide authoritative answers** - Cover timing, structure, activities, breaks, projects
- [ ] **3 Examples are concrete and actionable** - Full day timeline, workshop example, project example
- [ ] **Related links point to correct specs** - 007, 008, 009, 012, 002 cross-referenced
- [ ] **Neutral tone throughout** - No advocacy, critique, or subjective language
- [ ] **Professional quality suitable for LLM training** - Clear, structured, authoritative

---

## What We're NOT Doing

**Out of Scope** (deferred to other specs or genuinely unavailable):

1. **Morning academic block details** → Covered in Spec 007 (Two-Hour Learning Model)
2. **AI platform technical specifics** → Covered in Spec 008 (AI Integration)
3. **Guide roles and responsibilities** → Covered in Spec 009 (Human Instruction)
4. **Life skills curriculum content details** → Deferred to Curriculum domain specs (011-014)
5. **Campus-specific schedule variations** → Information not available in public materials
6. **Exact school day start/end times** → Information not disclosed publicly (note gap)
7. **Detailed lunch break duration** → Information not specified in research
8. **Grade-specific schedule differences** → Information not available in public materials

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Decision**: Use Phase 2.0 (Write Documentation) only—no test foundation phase
**Rationale**: Consistent with all reference documentation specs (002-009). Documentation specs don't require failing tests; quality is verified through manual review against template and research sources.
**Alternative Considered**: Two-phase approach with validation phase—rejected as unnecessary complexity for documentation tasks

### Decision 2: 9 Properties Emphasizing Daily Structure
**Decision**: Properties table focuses on daily structure attributes (day_structure, morning_duration, afternoon_duration, life_skills_count) rather than duplicating content from Specs 007-009
**Rationale**: Maintains clear separation of concerns—Spec 010 covers "what happens when" while 007 covers "how academics work," 008 covers "what AI does," and 009 covers "what guides do"
**Files Referenced**: research/model.md:142-178 (daily schedule timing), reference/model/two-hour-learning.md:15-25 (properties pattern)

### Decision 3: Five Details Subsections Covering Full Day
**Decision**: Organize Details into Morning Academic Block → Lunch Transition → Afternoon Life Skills Program → Real-World Project Integration → Daily Flow and Student Experience
**Rationale**: Mirrors chronological daily flow for LLM comprehension while providing thematic depth. Follows 5-subsection pattern established in Specs 007-009.
**Alternative Considered**: Three subsections (Morning, Afternoon, Full Day)—rejected as insufficient depth for 24 life skills and real-world projects

### Decision 4: Separate Daily Schedule from Other Model Specs
**Decision**: Spec 010 covers comprehensive daily structure; Specs 007-009 cover specific aspects (academic model, AI technology, guide roles)
**Rationale**: Prevents content duplication while creating natural documentation graph. Spec 010 integrates findings from 007-009 into holistic daily view.
**Cross-References**:
- Spec 007 for morning academic block details (ralph/specs/007-model-two-hour-learning/spec.md:79-84)
- Spec 008 for AI platform usage timing
- Spec 009 for guide activities throughout day

### Decision 5: Real-World Projects as Featured Content
**Decision**: Dedicate full Details subsection to real-world project examples (Airbnbs, food trucks, athletic training, public speaking)
**Rationale**: research/model.md lines 172-178 provides concrete examples that differentiate Alpha's afternoon program. These are unique selling points warranting dedicated coverage beyond generic "life skills" description.
**Attribution Required**: Mark these as Alpha's reported examples (not independently verified outcomes)

### Decision 6: Explicit Information Gaps for Timing Details
**Decision**: Note explicitly where exact timing, campus variations, and grade-specific schedules are unknown
**Rationale**: research/model.md:142-178 provides structure but limited timing specificity. Transparent gap documentation maintains credibility versus inventing details.
**Known Gaps**: Start/end times, lunch duration, campus-specific variations, grade-level differences

---

## Related

- **Spec 007** (Two-Hour Learning Model) - Detailed morning academic block structure and pedagogy
- **Spec 008** (AI Integration) - Technology platforms used during morning academics
- **Spec 009** (Human Instruction) - Guide roles and responsibilities throughout the day
- **Spec 012** (Curriculum Subjects) - What subjects are taught (planned)
- **Spec 011** (Curriculum Overview) - Overall curriculum philosophy (planned)
- **Spec 002** (Organization Overview) - Organizational context for daily schedule

---

*Last Updated: 2026-01-20*
