# Spec 009: Human Instruction - Implementation Checklist

**Spec**: 009 - Human Instruction
**Status**: ✅ Complete
**Phase**: 2.0 (Write Documentation)
**Progress**: 100% (10/10 tasks complete)
**Last Updated**: 2026-01-20

---

## Phase 2.0: Write Documentation

### Task 1: Document Setup (FR1.1, FR1.9) ✅
- [x] Create file: `reference/model/human-instruction.md`
- [x] Add H1 header: `# Human Instruction`
- [x] Add blockquote definition (one sentence capturing guide role transformation: "Guides" provide zero academic instruction, focusing on motivation/mentorship)
- [x] Add footer metadata with timestamps:
  ```markdown
  ---
  *Last updated: YYYY-MM-DD*
  *Last verified: YYYY-MM-DD*
  ```
- **Verification**: File exists, has H1, blockquote, footer
- **FR Reference**: FR1.1 (Header), FR1.9 (Footer)
- **Files**: `reference/model/human-instruction.md`

---

### Task 2: Overview Section (FR1.2) ✅
- [x] Write paragraph 1: Introduce "Guides" terminology and fundamental role transformation from traditional teachers
- [x] Write paragraph 2: Explain core responsibilities (zero academic instruction, motivation/mentorship, AI monitoring, life skills)
- [x] Write paragraph 3: Cover student relationships (30 min weekly one-on-one), compensation ($100k minimum), recruitment strategy
- [ ] Ensure coverage of:
  - "Guides" not "teachers" terminology
  - Zero academic instruction, AI handles teaching
  - Focus on motivation, mentorship, emotional support
  - AI integration (monitoring, data-driven interventions)
  - 30 minutes weekly one-on-one time per student
  - Minimum $100,000 annually compensation
  - Recruitment outside traditional education
  - Life skills workshop facilitation
- **Verification**: 2-3 paragraphs covering all required elements
- **FR Reference**: FR1.2 (Overview)
- **Source**: research/model.md lines 118-141
- **Files**: `reference/model/human-instruction.md`

---

### Task 3: Properties Table (FR1.3) ✅
- [x] Create properties table with columns: Property | Type | Description | Example
- [ ] Add property 1: `role_title` (string) - Job title for Alpha School educators - "Guide"
- [ ] Add property 2: `instructional_responsibility` (string) - Academic teaching involvement - "Zero academic instruction"
- [ ] Add property 3: `primary_focus` (array) - Core responsibilities - ["Motivation", "Mentorship", "Emotional support"]
- [ ] Add property 4: `one_on_one_time` (number) - Weekly individual meeting duration per student (minutes) - 30
- [ ] Add property 5: `monitoring_role` (string) - How guides supervise AI learning - "Monitor progress, encourage students, use AI data for interventions"
- [ ] Add property 6: `life_skills_role` (string) - Afternoon workshop facilitation - "Lead afternoon life skills workshops"
- [ ] Add property 7: `compensation_minimum` (number) - Minimum annual salary (USD) - 100000
- [ ] Add property 8: `compensation_context` (string) - Comparison to traditional teacher pay - "Roughly double average teacher pay in comparable markets"
- [ ] Add property 9: `recruitment_strategy` (string) - Talent sourcing approach - "Recruit talented professionals outside traditional education"
- [ ] Verify all data traces to research/model.md lines 118-141
- **Verification**: Table has 9 properties with correct structure
- **FR Reference**: FR1.3 (Properties Table)
- **Source**: research/model.md lines 118-141
- **Files**: `reference/model/human-instruction.md`

---

### Task 4: Details Section - Subsection 1 (FR1.4) ✅
- [x] Create H2: `## Details`
- [x] Create H3: `### Role Transformation from Traditional Teacher`
- [ ] Cover:
  - "Guides" vs. "teachers" terminology and significance
  - Zero academic instruction - AI handles all teaching
  - Focus shifts to emotional support and motivation
  - Individual connections vs. classroom management
  - Relationships over pedagogy
  - Fundamentally different job from traditional teaching
- [ ] Maintain neutral tone (FR2.4)
- **Verification**: Subsection comprehensively covers role transformation
- **FR Reference**: FR1.4 (Details - Subsection 1)
- **Source**: research/model.md lines 118-132
- **Files**: `reference/model/human-instruction.md`

---

### Task 5: Details Section - Subsection 2 (FR1.4) ✅
- [x] Create H3: `### Core Responsibilities`
- [ ] Cover:
  - Monitor student progress during two-hour AI learning block
  - Encourage and motivate students
  - Help identify each student's passions and strengths
  - Hold students to high standards while offering support
  - Facilitate afternoon life skills workshops
  - Use AI monitoring data to identify when students need intervention
  - Do NOT provide academic instruction
- [ ] Maintain neutral tone (FR2.4)
- **Verification**: All core responsibilities listed from research
- **FR Reference**: FR1.4 (Details - Subsection 2)
- **Source**: research/model.md lines 123-132
- **Files**: `reference/model/human-instruction.md`

---

### Task 6: Details Section - Subsections 3, 4, 5 (FR1.4) ✅
- [x] Create H3: `### Student Relationships and Individualization`
  - Each student receives 30 minutes weekly one-on-one time
  - Guides connect individually rather than managing large groups
  - Build deep relationships focused on understanding motivations
  - High standards, high support philosophy
- [ ] Create H3: `### Compensation and Recruitment Model`
  - Guides earn minimum $100,000 annually
  - Roughly double average teacher pay in comparable markets
  - Enables recruitment outside traditional education
  - Attracts professionals focused on mentorship over instruction
- [ ] Create H3: `### Integration with AI Platforms`
  - Guides use AI monitoring data to identify struggling/disengaged students
  - Vision model analysis informs coaching interventions
  - Guides ensure students stay engaged during AI sessions
  - Do not override AI instruction—support students through challenges
- [ ] Maintain neutral tone throughout (FR2.4)
- **Verification**: Three subsections comprehensively cover relationships, compensation, AI integration
- **FR Reference**: FR1.4 (Details - Subsections 3, 4, 5)
- **Source**: research/model.md lines 118-141, reference/model/ai-integration.md line 63
- **Files**: `reference/model/human-instruction.md`

---

### Task 7: Examples Section (FR1.5, FR3.3) ✅
- [x] Create H2: `## Examples`
- [x] Create H3: `### Morning Monitoring Example`
  - **Context**: Two-hour AI learning block in progress
  - **Action**: Guide circulates, notices student struggling via AI dashboard, offers encouragement without teaching
  - **Outcome**: Student feels supported, continues working through challenge with AI
- [ ] Create H3: `### Weekly One-on-One Meeting`
  - **Context**: Guide meets student for 30-minute individual session
  - **Action**: Discusses progress, identifies growing interest in marine biology, encourages exploration
  - **Outcome**: Student sees connection between current learning and future passions
- [ ] Create H3: `### High Standards, High Support in Action`
  - **Context**: AI data shows student attempting to circumvent learning
  - **Action**: Guide intervenes with supportive conversation, holds student accountable while encouraging
  - **Outcome**: Student understands why struggle leads to growth, re-engages authentically
- [ ] Use structured format: Context, Action, Outcome (FR3.3)
- **Verification**: Three concrete examples with structured format
- **FR Reference**: FR1.5 (Examples), FR3.3 (Example Formatting)
- **Source**: research/model.md lines 118-141
- **Files**: `reference/model/human-instruction.md`

---

### Task 8: Related Links and FAQs (FR1.6, FR1.7) ✅
- [x] Create H2: `## Related`
- [ ] Add relative links to 5 related specs:
  - `[Educational Philosophy](./educational-philosophy.md)` - High standards, high support philosophy
  - `[Two-Hour Learning Model](./two-hour-learning.md)` - Morning structure guides monitor
  - `[AI Integration](./ai-integration.md)` - AI monitoring data guides use
  - `[Daily Schedule](./daily-schedule.md)` - Full daily structure including guide-led activities
  - `[Organization Overview](../organization/overview.md)` - Alpha School context
- [ ] Create H2: `## FAQs`
- [ ] Add FAQ 1: **Q: Do guides provide any academic instruction?** A: No, zero academic instruction—AI handles all teaching
- [ ] Add FAQ 2: **Q: How much one-on-one time does each student receive?** A: 30 minutes weekly
- [ ] Add FAQ 3: **Q: What do guides do during the two-hour morning academic block?** A: Monitor progress, encourage students, use AI data for interventions
- [ ] Add FAQ 4: **Q: How are guides compensated differently from traditional teachers?** A: Minimum $100,000 annually, roughly double average teacher pay
- [ ] Add FAQ 5: **Q: What role do guides play in afternoon activities?** A: Facilitate life skills workshops
- **Verification**: 5 related links, 5 FAQ Q&A pairs
- **FR Reference**: FR1.6 (Related Links), FR1.7 (FAQs)
- **Files**: `reference/model/human-instruction.md`

---

### Task 9: Sources Section (FR1.8) ✅
- [x] Create H2: `## Sources`
- [ ] Add source 1: research/model.md lines 118-141 (internal reference)
- [ ] Add source 2: [Alpha School Homepage](https://alpha.school) - Retrieved YYYY-MM-DD
- [ ] Add source 3: [2 Hour Learning Model](https://www.2hourlearning.com) - Retrieved YYYY-MM-DD
- [ ] Add source 4: CBS News coverage mentioning six-figure guide salaries - Retrieved YYYY-MM-DD
- [ ] Add source 5: Additional news article or interview discussing guide role - Retrieved YYYY-MM-DD
- [ ] Verify all sources include retrieval dates in format: `Retrieved YYYY-MM-DD`
- **Verification**: Minimum 5 sources with retrieval dates
- **FR Reference**: FR1.8 (Sources)
- **Files**: `reference/model/human-instruction.md`

---

### Task 10: Content Quality and LLM Optimization Review (FR2, FR3) ✅
- [x] **Factual Accuracy Review (FR2.1)**:
  - Verify all facts trace to research/model.md lines 118-141 or other cited sources
  - Confirm "zero academic instruction" sourced to line 124
  - Confirm "30 minutes weekly" sourced to line 135
  - Confirm "$100,000 minimum" sourced to line 138
- [ ] **Claims Attribution Review (FR2.2)**:
  - Verify "$100,000 minimum" attributed as Alpha's stated policy
  - Verify "double average teacher pay" attributed as Alpha's characterization
  - Add "According to Alpha School materials..." where appropriate
- [ ] **Information Gaps Review (FR2.3)**:
  - Note training program details unknown (if relevant to content)
  - Note qualifications not specified (if relevant to content)
  - Do not speculate beyond documented facts
- [ ] **Neutral Tone Review (FR2.4)**:
  - Confirm no promotional language ("revolutionary," "superior")
  - Confirm no critical language ("concerning," "inadequate")
  - Confirm zero academic instruction presented as design choice, not evaluated
- [ ] **Hierarchical Structure Review (FR3.1)**:
  - Verify only H1, H2, H3 headings used (no H4-H6)
  - Count headings: 1 H1, ~7 H2, ~10-12 H3
- [ ] **Table Formatting Review (FR3.2)**:
  - Verify properties table uses GitHub Flavored Markdown syntax
  - Verify table has 4 columns: Property | Type | Description | Example
- [ ] **Example Formatting Review (FR3.3)**:
  - Verify all 3 examples use structured format: Context, Action, Outcome
  - Verify H3 delimiters for each example
- **Verification**: All quality and optimization checks pass
- **FR Reference**: FR2.1-FR2.4 (Content Quality), FR3.1-FR3.3 (LLM Optimization)
- **Files**: `reference/model/human-instruction.md`

---

## Automated Verification Checklist

Run these checks after completing all tasks:

- [ ] `reference/model/human-instruction.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] `grep "^# Human Instruction"` returns match
- [ ] Properties table has 9 required properties: `grep -c "| role_title\|instructional_responsibility\|primary_focus\|one_on_one_time\|monitoring_role\|life_skills_role\|compensation_minimum\|compensation_context\|recruitment_strategy" reference/model/human-instruction.md` returns 9
- [ ] Details section has 5 H3 subsections: `grep -c "^### Role Transformation\|^### Core Responsibilities\|^### Student Relationships\|^### Compensation and Recruitment\|^### Integration with AI" reference/model/human-instruction.md` returns 5
- [ ] Examples section has 3 examples: Count H3 headings under Examples section
- [ ] Related section includes 5 links: `grep -c "\[.*\](.*\.md)" reference/model/human-instruction.md` (under Related section)
- [ ] FAQs section has 5 Q&A pairs: `grep -c "^\*\*Q:" reference/model/human-instruction.md` returns 5
- [ ] Sources include retrieval dates: `grep -c "Retrieved [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}" reference/model/human-instruction.md` ≥ 4
- [ ] Footer metadata present: `grep "Last updated:" reference/model/human-instruction.md && grep "Last verified:" reference/model/human-instruction.md`

---

## Manual Verification Checklist

Complete these after automated checks pass:

### Content Accuracy
- [ ] One-sentence definition clearly captures guide role transformation
- [ ] Overview provides comprehensive 2-3 paragraph explanation
- [ ] All facts trace to research/model.md lines 118-141 or other cited sources
- [ ] "Zero academic instruction" emphasized appropriately throughout

### Content Quality
- [ ] Self-reported claims properly attributed (e.g., "$100,000 minimum")
- [ ] Information gaps noted where relevant (training, qualifications, turnover)
- [ ] Document tone is neutral (no advocacy or critique)
- [ ] No promotional language ("revolutionary," "superior")
- [ ] No critical language ("concerning," "inadequate")

### Structure and Detail
- [ ] Properties table accurately represents guide role attributes with 9 properties
- [ ] Details subsections comprehensively cover:
  - Role Transformation from Traditional Teacher
  - Core Responsibilities
  - Student Relationships and Individualization
  - Compensation and Recruitment Model
  - Integration with AI Platforms
- [ ] Examples are concrete and illustrative:
  - Morning Monitoring Example (guide monitors, encourages, doesn't teach)
  - Weekly One-on-One Meeting (personal connection, passion identification)
  - High Standards, High Support in Action (accountability + encouragement)

### Documentation Graph
- [ ] Related links correctly point to 5 related specs (002, 006, 007, 008, 010)
- [ ] FAQs address common questions and misconceptions
- [ ] Sources include research/model.md and minimum 4 other citations with retrieval dates
- [ ] No broken internal links

### Integration with Existing Specs
- [ ] Spec 009 focuses on guide role/responsibilities, not philosophy (deferred to Spec 006)
- [ ] Spec 009 references AI monitoring without duplicating technical details (deferred to Spec 008)
- [ ] Spec 009 mentions daily structure without providing full schedule (deferred to Spec 010)

---

## Current Status Summary

**Phase**: 2.0 (Write Documentation)
**Progress**: 0% (0/10 tasks complete)
**Blockers**: None (all dependencies satisfied)
**Next Task**: Task 1 (Document Setup)

---

## Session Recovery Context

**Last Working On**: Not started
**File Paths**:
- Output: `reference/model/human-instruction.md`
- Research: `research/model.md` lines 118-141
- Spec: `ralph/specs/009-model-human-instruction/spec.md`
- Checklist: `ralph/specs/009-model-human-instruction/checklist.md`

**Next Steps**:
1. Create `reference/model/human-instruction.md`
2. Add H1 header, blockquote definition, footer metadata
3. Write 2-3 paragraph overview
4. Build 9-property table
5. Write 5 Details subsections
6. Create 3 structured examples
7. Add Related links and FAQs
8. Add Sources with retrieval dates
9. Review content quality (attribution, gaps, tone)
10. Review LLM optimization (hierarchy, tables, examples)

---

## Notes and Decisions

### Implementation Decisions Made
- Using single-phase documentation workflow (no test foundation) following Specs 006-008 pattern
- 9 properties focusing on guide role attributes (title, responsibilities, compensation)
- 5 Details subsections: Role Transformation → Core Responsibilities → Student Relationships → Compensation → AI Integration
- Emphasizing "zero academic instruction" throughout to clarify fundamental role difference
- Noting information gaps: training program, qualifications, professional development, turnover rates

### Key Content Boundaries
- **Philosophy rationale** → Deferred to Spec 006 (why high standards/high support works)
- **AI technical details** → Deferred to Spec 008 (how vision models work)
- **Complete daily schedule** → Deferred to Spec 010 (full day timeline)
- **Curriculum content** → Deferred to Specs 011-014 (what life skills are taught)
- **Effectiveness metrics** → Deferred to Specs 015-018 (outcomes and evidence)

### Attribution Requirements
- "$100,000 minimum" - Alpha's stated policy (verify if possible)
- "Double average teacher pay" - Alpha's characterization
- Guide effectiveness claims (if any) - Must be attributed to Alpha

### Information Gaps to Note
From research/model.md lines 367-371:
- Guide training program details
- Required qualifications
- Ongoing professional development
- Turnover rates
- Total number of guides across all campuses

---

*Last Updated: 2026-01-20*
