# Spec 009: Human Instruction

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001b (Research Model Domain), Spec 006 (Educational Philosophy)
**Output**: `reference/model/human-instruction.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is the role of human guides in Alpha School's learning model?" for LLM consumption. This document synthesizes findings from `research/model.md` (lines 118-141) into a structured, authoritative explanation of how Alpha School transforms the traditional teacher role—focusing on guides' responsibilities, compensation, and relationship with students while separating from AI technical details (Spec 008) and educational philosophy (Spec 006).

### Scope

Transform research findings into a structured reference document covering:
- **Role Transformation**: How "guides" differ from traditional teachers
- **Guide Responsibilities**: Zero academic instruction, focus on motivation/mentorship, monitoring, life skills facilitation
- **Student Relationships**: 30 minutes weekly one-on-one time, individual connections, passion identification
- **Compensation Model**: Minimum $100,000 annually, recruitment outside traditional education
- **Integration with AI**: How guides use AI monitoring data to support students
- **High Standards, High Support Philosophy**: How guides balance expectations with emotional support

### Output File

`reference/model/human-instruction.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Human Instruction" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Human Instruction

  > [One-sentence definition capturing how Alpha School uses human "guides" for motivation, mentorship, and emotional support rather than academic instruction]
  ```
- **Source**: Synthesize from research/model.md lines 118-141
- **Rationale**: Follows API-style documentation pattern established in Specs 002-008

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining the transformed teacher role at Alpha School
- **Content Coverage**:
  - Terminology: "Guides" not "teachers"—fundamental role transformation
  - Core responsibilities: Zero academic instruction, focus on motivation/mentorship/emotional support
  - AI integration: Guides monitor AI-powered learning sessions, use monitoring data for interventions
  - Student relationships: 30 minutes weekly one-on-one time, individual connections
  - Compensation: Minimum $100,000 annually enables recruitment outside traditional education
  - Life skills facilitation: Guides lead afternoon workshops
- **Source**: research/model.md lines 118-141
- **Rationale**: Provides LLMs with comprehensive overview before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key guide role attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties):
  - `role_title` (string) - Job title for Alpha School educators
  - `instructional_responsibility` (string) - Academic teaching involvement
  - `primary_focus` (array) - Core responsibilities (motivation, mentorship, emotional support)
  - `one_on_one_time` (number) - Weekly individual meeting duration per student
  - `monitoring_role` (string) - How guides supervise AI learning sessions
  - `life_skills_role` (string) - Afternoon workshop facilitation
  - `compensation_minimum` (number) - Minimum annual salary
  - `compensation_context` (string) - Comparison to traditional teacher pay
  - `recruitment_strategy` (string) - Talent sourcing approach
- **Source**: research/model.md lines 118-141
- **Rationale**: Enables LLMs to quickly extract structured facts about guide role

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required):
  - **Role Transformation from Traditional Teacher**: Guides vs. teachers terminology; zero academic instruction; AI handles all teaching; focus shifts to emotional support and motivation; individual connections vs. classroom management; relationships over pedagogy
  - **Core Responsibilities**: Monitor student progress during two-hour AI learning block; encourage and motivate students; help identify passions and strengths; hold students to high standards while offering support; facilitate afternoon life skills workshops; use AI monitoring data to identify when students need intervention
  - **Student Relationships and Individualization**: Each student receives 30 minutes weekly one-on-one time; guides connect with students individually rather than managing large groups; build deep relationships focused on understanding each student's motivations; high standards, high support philosophy
  - **Compensation and Recruitment Model**: Guides earn minimum $100,000 annually; described as roughly double the average teacher pay in comparable markets; enables recruitment of talented professionals outside traditional education; attracts individuals focused on mentorship rather than instruction
  - **Integration with AI Platforms**: Guides use AI monitoring data to identify struggling or disengaged students; vision model analysis informs coaching interventions; guides ensure students stay engaged during AI sessions; do not override AI instruction—support students in working through challenges
- **Source**: research/model.md lines 118-141, reference/model/ai-integration.md line 63
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating guide role in practice
- **Examples to Include** (3 required):
  - **Morning Monitoring Example**: Guide circulates during two-hour AI learning block; notices student struggling with math concept via AI dashboard; approaches student to offer encouragement and motivational support; does not teach the concept—AI handles instruction
  - **Weekly One-on-One Meeting**: Guide meets with student for 30 minutes; discusses progress, identifies student's growing interest in marine biology; shares excitement and encourages exploration; helps student see connection between current learning and future passions
  - **High Standards, High Support in Action**: AI data shows student attempting to circumvent learning by topic-shopping; guide intervenes with supportive conversation; holds student accountable to mastery standards while offering emotional encouragement; helps student understand why struggle leads to growth
- **Source**: research/model.md lines 118-141
- **Rationale**: Grounds abstract role description with concrete applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Educational Philosophy (Spec 006) - High standards, high support philosophy
  - Two-Hour Learning Model (Spec 007) - Morning structure guides monitor
  - AI Integration (Spec 008) - AI monitoring data guides use
  - Daily Schedule (Spec 010) - Full daily structure including guide-led activities
  - Organization Overview (Spec 002) - Alpha School context
- **Rationale**: Creates documentation graph for LLM navigation

#### FR1.7: FAQs Section
- **Requirement**: 5 common questions with authoritative answers
- **Questions to Address**:
  1. **Q: Do guides provide any academic instruction?** A: No. Guides provide zero academic instruction—AI platforms handle all teaching. Guides focus entirely on motivation, mentorship, and emotional support.
  2. **Q: How much one-on-one time does each student receive?** A: Each student receives 30 minutes of weekly one-on-one time with guides to discuss progress, identify passions, and build individual connections.
  3. **Q: What do guides do during the two-hour morning academic block?** A: Guides monitor student progress, encourage and motivate students, and use AI monitoring data to identify when students need support—but do not teach academic content.
  4. **Q: How are guides compensated differently from traditional teachers?** A: Guides earn a minimum of $100,000 annually, roughly double the average teacher pay in comparable markets, enabling recruitment outside traditional education.
  5. **Q: What role do guides play in afternoon activities?** A: Guides facilitate afternoon life skills workshops, helping students develop skills beyond academics while maintaining the mentorship focus.
- **Source**: research/model.md lines 118-141
- **Rationale**: Addresses common misconceptions about guide role

#### FR1.8: Sources Section
- **Requirement**: All sources cited with retrieval dates
- **Format**: Markdown list with `[Source Name](URL) - Retrieved YYYY-MM-DD`
- **Required Sources** (minimum 5):
  - research/model.md lines 118-141
  - alpha.school website (homepage, learn-more)
  - 2hourlearning.com (model explanation)
  - CBS News coverage mentioning six-figure guide salaries
  - News articles or interviews discussing guide role
- **Rationale**: Provides transparency on information sources for LLM trust

#### FR1.9: Footer Metadata
- **Requirement**: Include standard footer with update timestamps
- **Format**:
  ```markdown
  ---
  *Last updated: YYYY-MM-DD*
  *Last verified: YYYY-MM-DD*
  ```
- **Rationale**: Signals documentation freshness to LLMs

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy and Traceability
- **Requirement**: All facts must trace to research/model.md lines 118-141 or other cited sources
- **Verification Method**: Each claim must have corresponding line reference in research file
- **Examples**:
  - "Zero academic instruction" → research/model.md line 124
  - "30 minutes weekly one-on-one" → research/model.md line 135
  - "$100,000 minimum annually" → research/model.md line 138
- **Rationale**: Ensures documentation is grounded in verified research

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's claims from verified facts
- **Attribution Patterns**:
  - Self-reported outcomes: "According to Alpha School materials..."
  - Unverified claims: "Alpha describes guides as..."
  - Direct quotes: Use quotation marks for exact wording
- **Critical Claims Requiring Attribution**:
  - "$100,000 minimum" is Alpha's stated policy (verify if possible)
  - "Double average teacher pay" is Alpha's characterization
  - Guide effectiveness claims (if any) must be attributed
- **Rationale**: Maintains documentation trustworthiness by clarifying verification status

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is NOT publicly known about guides
- **Known Information Gaps** (from research/model.md lines 367-371):
  - Guide training program details
  - Required qualifications
  - Ongoing professional development
  - Turnover rates
  - Total number of guides across all campuses
- **Handling**: Omit unverified information rather than speculating; add note if relevant
- **Example**: "Guide training requirements are not detailed in publicly available materials."
- **Rationale**: Prevents LLMs from hallucinating details

#### FR2.4: Neutral Presentation
- **Requirement**: Present guide role factually without advocacy or critique
- **Tone Guidelines**:
  - Describe Alpha's model without endorsing or criticizing
  - Present "zero academic instruction" as design choice, not evaluated as positive/negative
  - Note compensation model without judgment on adequacy or excess
  - Maintain objectivity when describing role transformation
- **Avoid**:
  - Promotional language ("revolutionary," "superior")
  - Critical language ("concerning," "inadequate")
  - Comparative judgments ("better than traditional teachers")
- **Rationale**: Documentation should inform, not persuade

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Use only H1, H2, H3 headings (no H4-H6) for LLM parseability
- **Structure**:
  - H1: Document title ("Human Instruction")
  - H2: Major sections (Overview, Properties, Details, Examples, Related, FAQs, Sources)
  - H3: Subsections within Details and Examples
- **Rationale**: Clear heading hierarchy enables LLMs to navigate and extract information

#### FR3.2: Scannable Tables
- **Requirement**: Properties table must use GitHub Flavored Markdown table syntax
- **Format**:
  ```markdown
  | Property | Type | Description | Example |
  |----------|------|-------------|---------|
  | role_title | string | ... | ... |
  ```
- **Rationale**: Structured tables enable LLMs to extract key-value pairs

#### FR3.3: Example Formatting
- **Requirement**: Examples must have clear H3 delimiters and structured format
- **Format**:
  ```markdown
  ### Example Name
  **Context**: [Setting description]
  **Action**: [What guide does]
  **Outcome**: [Result]
  ```
- **Rationale**: Consistent example structure aids LLM pattern recognition

---

## Implementation Phases

### Phase 2.0: Write Documentation

**Objective**: Create complete `reference/model/human-instruction.md` following all Functional Requirements

**Tasks**:

1. **Document Setup** (FR1.1, FR1.9)
   - Create file: `reference/model/human-instruction.md`
   - Add H1 header: "# Human Instruction"
   - Add blockquote definition (one sentence capturing guide role transformation)
   - Add footer metadata (last updated, last verified timestamps)

2. **Overview Section** (FR1.2)
   - Write 2-3 paragraph overview covering:
     - "Guides" terminology and role transformation
     - Zero academic instruction, focus on motivation/mentorship
     - AI integration (monitoring, data-driven interventions)
     - Student relationships (30 min weekly one-on-one)
     - Compensation ($100k minimum) and recruitment strategy
     - Life skills facilitation

3. **Properties Table** (FR1.3)
   - Create 9-property table with columns: Property | Type | Description | Example
   - Include all required properties: role_title, instructional_responsibility, primary_focus, one_on_one_time, monitoring_role, life_skills_role, compensation_minimum, compensation_context, recruitment_strategy
   - Verify all data traces to research/model.md lines 118-141

4. **Details Section** (FR1.4)
   - Create 5 subsections (H3):
     - Role Transformation from Traditional Teacher
     - Core Responsibilities
     - Student Relationships and Individualization
     - Compensation and Recruitment Model
     - Integration with AI Platforms
   - Ensure comprehensive coverage of research/model.md lines 118-141
   - Maintain neutral tone (FR2.4)

5. **Examples Section** (FR1.5)
   - Create 3 concrete examples (H3):
     - Morning Monitoring Example
     - Weekly One-on-One Meeting
     - High Standards, High Support in Action
   - Use structured format: Context, Action, Outcome (FR3.3)

6. **Related Links Section** (FR1.6)
   - Add relative links to 5 related specs:
     - `[Educational Philosophy](../organization/mission.md)` (Spec 006)
     - `[Two-Hour Learning Model](./two-hour-learning.md)` (Spec 007)
     - `[AI Integration](./ai-integration.md)` (Spec 008)
     - `[Daily Schedule](./daily-schedule.md)` (Spec 010)
     - `[Organization Overview](../organization/overview.md)` (Spec 002)

7. **FAQs Section** (FR1.7)
   - Create 5 Q&A pairs addressing:
     - Academic instruction involvement
     - One-on-one time duration
     - Morning monitoring role
     - Compensation comparison
     - Afternoon activities role

8. **Sources Section** (FR1.8)
   - List minimum 5 sources with retrieval dates
   - Include research/model.md lines 118-141
   - Include alpha.school, 2hourlearning.com
   - Include news coverage (CBS News, etc.)

9. **Content Quality Review** (FR2.1-FR2.4)
   - Verify all facts trace to research/model.md lines 118-141
   - Add attribution for self-reported claims (FR2.2)
   - Note information gaps where relevant (FR2.3)
   - Confirm neutral tone throughout (FR2.4)

10. **LLM Optimization Review** (FR3.1-FR3.3)
    - Verify heading hierarchy: H1 → H2 → H3 only
    - Confirm properties table uses GFM syntax
    - Ensure examples follow structured format

**Success Criteria**:
- `reference/model/human-instruction.md` file created
- All 9 Functional Requirements (FR1-FR3) satisfied
- All facts trace to research/model.md lines 118-141
- Neutral tone maintained throughout
- Related documentation links included (even for unwritten specs)

---

## Technical Architecture

### Design Decisions

**Decision 1: Single-Phase Documentation Workflow**
- **Choice**: Use Phase 2.0 (Write Documentation) only—no Phase X.0 test foundation
- **Rationale**: Documentation specs (002-008) use direct writing approach; tests not applicable to Markdown content
- **Precedent**: Specs 006, 007, 008 all use single-phase workflow

**Decision 2: 9 Properties Emphasizing Role Transformation**
- **Choice**: Properties focus on guide role attributes (title, responsibilities, compensation) rather than philosophical rationale (Spec 006) or AI technical integration (Spec 008)
- **Rationale**: Keeps Spec 009 focused on "who guides are and what they do" while deferring "why this approach works" to Spec 006 and "how AI monitoring works" to Spec 008
- **Precedent**: Specs 006-008 each use 8-9 properties table structure

**Decision 3: Five Details Subsections**
- **Choice**: Role Transformation → Core Responsibilities → Student Relationships → Compensation Model → AI Integration
- **Rationale**: Logical progression from "what changed" to "what guides do" to "how they connect" to "how they're paid" to "how they use technology"
- **Precedent**: Specs 006-008 all use 5 Details subsections

**Decision 4: Explicit "Zero Academic Instruction" Clarification**
- **Choice**: Emphasize throughout document that guides provide ZERO academic instruction
- **Rationale**: research/model.md line 124 explicitly states this; fundamental to understanding role transformation; prevents LLM confusion with traditional teacher roles
- **Precedent**: Spec 008 preserved "NOT a chatbot" clarification throughout (lines 343-344)

**Decision 5: Information Gaps Noted (Training, Qualifications, Turnover)**
- **Choice**: Note that guide training program, qualifications, professional development, and turnover rates are not publicly documented
- **Rationale**: research/model.md lines 367-371 identify these as known information gaps; transparency builds LLM trust
- **Precedent**: Spec 006 noted lack of peer-reviewed citations (lines 155-163)

**Decision 6: Separate Guide Role from Philosophy and AI Technical Details**
- **Choice**: Human Instruction (Spec 009) covers "what guides do and how they're structured" while Educational Philosophy (Spec 006) covers "why this model works philosophically" and AI Integration (Spec 008) covers "how AI monitoring technology works"
- **Rationale**: Clear separation of concerns prevents overlap and enables targeted LLM queries
- **Precedent**: Specs 006-008 maintain clear boundaries (philosophy vs. model structure vs. AI technology)

---

## Current State Analysis

### Research Sources

**Primary Research**: `research/model.md` lines 118-141
- Role transformation (lines 120-121)
- Guide responsibilities (lines 123-132)
- One-on-one time (lines 134-135)
- Compensation (lines 137-140)

**Secondary Research**:
- `research/organization.md` line 35: Guide compensation context
- `research/curriculum.md` lines 223-224: One-on-one time confirmation
- `reference/model/two-hour-learning.md` line 33: Guide monitoring during morning block
- `reference/model/ai-integration.md` line 63: Vision model data informing guide interventions

### Dependencies

**Required**:
- ✅ Spec 001b (Research Model Domain) - Complete
- ✅ Spec 006 (Educational Philosophy) - Complete (provides context for high standards/high support)

**Related**:
- ✅ Spec 007 (Two-Hour Learning Model) - Complete (provides morning structure context)
- ✅ Spec 008 (AI Integration) - Complete (provides AI monitoring data context)
- ⏳ Spec 010 (Daily Schedule) - Planned (will reference guide-led activities)

### Information Gaps

From research/model.md lines 367-371:
- Guide training program details unknown
- Required qualifications not specified
- Ongoing professional development not described
- Turnover rates not reported
- Total number of guides across all campuses not disclosed

---

## What We're NOT Doing

**Out of Scope for Spec 009**:

1. **Educational Philosophy Rationale** - Deferred to Spec 006 (Educational Philosophy)
   - Why high standards/high support works philosophically
   - Learning science justification for reduced academic instruction
   - Bloom's 2 Sigma and zone of proximal development theory

2. **AI Technical Implementation** - Deferred to Spec 008 (AI Integration)
   - How vision models analyze student behavior
   - Knowledge graph construction for student monitoring
   - AI platform technical architecture

3. **Complete Daily Schedule** - Deferred to Spec 010 (Daily Schedule)
   - Detailed timeline of guide-led activities
   - Afternoon life skills workshop structure
   - Full day flow from arrival to dismissal

4. **Curriculum Content** - Deferred to Curriculum Domain (Specs 011-014)
   - What life skills are taught
   - How afternoon workshops are structured
   - Assessment of student-guide relationships

5. **Outcomes and Effectiveness** - Deferred to Outcomes Domain (Specs 015-018)
   - Guide effectiveness metrics
   - Student satisfaction with guide relationships
   - Comparison to traditional teacher models

---

## Success Metrics

### Phase 2.0 Completion Criteria

**Automated Verification** (script/grep-based):
- [ ] `reference/model/human-instruction.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] `grep "^# Human Instruction"` returns match (H1 header present)
- [ ] Properties table has 9 required properties (grep count):
  - role_title, instructional_responsibility, primary_focus, one_on_one_time, monitoring_role, life_skills_role, compensation_minimum, compensation_context, recruitment_strategy
- [ ] Details section has 5 required H3 subsections (grep count):
  - Role Transformation, Core Responsibilities, Student Relationships, Compensation Model, AI Integration
- [ ] Examples section has 3 examples (grep count of H3 under Examples)
- [ ] Related links section includes 5 spec links (grep count)
- [ ] FAQs section has 5 Q&A pairs (grep count of "**Q:")
- [ ] Sources section present with retrieval dates (grep for "Retrieved YYYY-MM-DD")
- [ ] Footer metadata present (grep for "Last updated:" and "Last verified:")

**Manual Verification** (human review):
- [ ] One-sentence definition clearly and accurately captures guide role transformation
- [ ] Overview provides comprehensive 2-3 paragraph explanation
- [ ] All facts trace to research/model.md lines 118-141 or other cited sources
- [ ] "Zero academic instruction" emphasized appropriately throughout
- [ ] Self-reported claims properly attributed (e.g., "$100,000 minimum" attributed to Alpha's stated policy)
- [ ] Information gaps noted where relevant (training, qualifications, turnover)
- [ ] Document tone is neutral (presents guide model without advocacy or critique)
- [ ] Properties table accurately represents guide role attributes
- [ ] Details subsections comprehensively cover all aspects of guide role
- [ ] Examples are concrete and illustrative (morning monitoring, one-on-one, high standards/support)
- [ ] Related links correctly point to related specs (even unwritten ones)
- [ ] FAQs address common questions and misconceptions
- [ ] Sources include research/model.md and minimum 4 other citations with retrieval dates

### Integration Assessment

**Documentation Graph Completeness**:
- [ ] Links from Spec 009 to related specs (002, 006, 007, 008, 010) are correct
- [ ] Existing specs (007, 008) now link to completed Spec 009
- [ ] No broken internal links

**Content Boundaries Respected**:
- [ ] Spec 009 focuses on guide role/responsibilities, not philosophy (Spec 006)
- [ ] Spec 009 references AI monitoring without duplicating technical details (Spec 008)
- [ ] Spec 009 mentions daily structure without providing full schedule (Spec 010)

---

## Related Specifications

- **Spec 001b** (Research Model Domain) - Research source for guide role
- **Spec 006** (Educational Philosophy) - High standards/high support philosophy context
- **Spec 007** (Two-Hour Learning Model) - Morning structure guides monitor
- **Spec 008** (AI Integration) - AI monitoring data guides use for interventions
- **Spec 010** (Daily Schedule) - Full daily structure including guide-led activities
- **Spec 002** (Organization Overview) - Alpha School organizational context

---

## References

- Alpha School Documentation Template: `roadmap.md` lines 136-173
- Spec Pattern Examples: Specs 006, 007, 008 (Model domain documentation specs)
- Research Source: `research/model.md` lines 118-141
- Existing Reference Docs: `reference/model/two-hour-learning.md`, `reference/model/ai-integration.md`
