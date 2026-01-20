# Spec 010: Daily Schedule - Implementation Checklist

**Spec**: 010-daily-schedule
**Output**: `reference/model/daily-schedule.md`
**Status**: Not Started

---

## Pre-Implementation

- [ ] Read research/model.md lines 142-178 (daily schedule details)
- [ ] Read reference/model/two-hour-learning.md (morning block context)
- [ ] Read reference/model/ai-integration.md (technology during morning)
- [ ] Read reference/model/human-instruction.md (guide roles throughout day)
- [ ] Read roadmap.md lines 136-173 (documentation template)
- [ ] Verify all dependencies complete: Spec 007 ✅, Spec 008 ✅, Spec 009 ✅

---

## Phase 2.0: Write Documentation

### Setup

- [ ] Create output file: `reference/model/daily-schedule.md`
- [ ] Verify output directory exists: `reference/model/`

### FR1.1: Header and Definition

- [ ] Write H1 header: "Daily Schedule"
- [ ] Write one-sentence blockquote definition capturing daily structure
- [ ] Definition mentions: personalized academics (morning) + life skills workshops/projects (afternoon)
- [ ] Verify blockquote formatting: `> [definition]`

### FR1.2: Overview Section

- [ ] Write H2 "Overview"
- [ ] Write Paragraph 1: Full daily structure overview
  - [ ] Mention morning academics (2 hours)
  - [ ] Mention lunch transition
  - [ ] Mention afternoon life skills/projects (2.5-4 hours)
  - [ ] Emphasize balance between academic mastery and holistic development
- [ ] Write Paragraph 2: Morning block emphasis
  - [ ] Limitless Launch goal-setting
  - [ ] AI-powered personalized academics across core subjects
  - [ ] Pomodoro technique
  - [ ] Guide monitoring role
  - [ ] Completion by lunchtime
- [ ] Write Paragraph 3: Afternoon emphasis
  - [ ] 24 life skills taught through hands-on workshops
  - [ ] Project-based learning
  - [ ] Real-world business operations (Airbnbs, food trucks)
  - [ ] Outdoor education (rock climbing, sailing)
  - [ ] Public speaking progression
- [ ] Verify overview is 2-3 paragraphs
- [ ] All facts trace to research/model.md lines 142-178

### FR1.3: Properties Table

- [ ] Write H2 "Properties"
- [ ] Create table with headers: Property | Type | Description | Example
- [ ] Add property 1: `day_structure` (string) - Overall daily organization pattern
- [ ] Add property 2: `morning_duration` (string) - Academic block length ("2 hours")
- [ ] Add property 3: `morning_start_ritual` (string) - Day-opening activity ("Limitless Launch goal-setting")
- [ ] Add property 4: `lunch_transition` (string) - Break between morning and afternoon
- [ ] Add property 5: `afternoon_duration` (string) - Life skills block length range ("2.5-4 hours")
- [ ] Add property 6: `core_subjects_timing` (string) - When academics occur ("Morning block, 8:00-10:00 AM typical")
- [ ] Add property 7: `life_skills_timing` (string) - When life skills occur ("Afternoon, post-lunch")
- [ ] Add property 8: `life_skills_count` (number) - Number of life skills taught (24)
- [ ] Add property 9: `real_world_projects` (array) - Examples of student-run projects
- [ ] Verify table has exactly 9 properties
- [ ] Verify GitHub Flavored Markdown formatting
- [ ] All examples trace to research/model.md lines 142-178

### FR1.4: Details Section

- [ ] Write H2 "Details"

#### Details Subsection 1: Morning Academic Block

- [ ] Write H3 "Morning Academic Block (8:00-10:00)"
- [ ] Describe Limitless Launch goal-setting session (research/model.md line 145)
- [ ] Describe AI-powered personalized academics across core subjects (lines 146-147)
- [ ] Describe Pomodoro 25-minute focused blocks with breaks (line 148)
- [ ] Describe guide monitoring progress without teaching (line 150)
- [ ] Describe mastery-based completion at 90%+ accuracy (line 149)
- [ ] Describe students finishing core academics by lunchtime (line 151)
- [ ] Cross-reference Spec 007 for detailed morning structure

#### Details Subsection 2: Lunch Transition

- [ ] Write H3 "Lunch Transition"
- [ ] Describe break between morning and afternoon (research/model.md line 153)
- [ ] Note if specific lunch duration not disclosed in public materials
- [ ] Describe transition from solo AI work to collaborative afternoon

#### Details Subsection 3: Afternoon Life Skills Program

- [ ] Write H3 "Afternoon Life Skills Program (Post-Lunch, 2.5-4 hours)"
- [ ] Describe hands-on collaborative workshops (research/model.md line 156)
- [ ] Describe project-based learning (line 157)
- [ ] List 24 life skills with key examples (lines 158-170):
  - [ ] Leadership
  - [ ] Teamwork
  - [ ] Entrepreneurship
  - [ ] Financial literacy
  - [ ] Public speaking
  - [ ] Relationship-building
  - [ ] Coding
  - [ ] Outdoor education
  - [ ] Grit and resilience
  - [ ] NIL negotiations and press conferences (sports academy)
  - [ ] Rock climbing, sailing expeditions, wilderness skills
- [ ] Describe guide-facilitated activities
- [ ] Contrast interactive afternoon format with morning solo work

#### Details Subsection 4: Real-World Project Integration

- [ ] Write H3 "Real-World Project Integration"
- [ ] Describe student-run business examples (research/model.md lines 172-178):
  - [ ] Fifth graders operating profitable Airbnb operations (line 173)
  - [ ] Food truck operations (line 174)
  - [ ] Athletic training: 5K races (line 175)
  - [ ] Sports academy: NIL negotiations and press conferences (line 169)
  - [ ] Public speaking progression: speaking to cats → open mic nights in NYC (line 177)
  - [ ] Wilderness skills: rock climbing, sailing expeditions (line 170)
  - [ ] Actual profit-generating business ventures (line 176)
- [ ] Attribute examples as "reported in Alpha School materials" (FR2.2)
- [ ] Describe hands-on, experiential nature of projects

#### Details Subsection 5: Daily Flow and Student Experience

- [ ] Write H3 "Daily Flow and Student Experience"
- [ ] Describe typical timing patterns (morning focus on academic mastery, afternoon focus on life skills/collaboration)
- [ ] Describe transitions between modes (solo AI work → collaborative workshops)
- [ ] Describe variety throughout day (screen time → hands-on activities → outdoor education)
- [ ] Describe student agency and engagement across different learning formats
- [ ] Note if campus-specific variations not disclosed publicly (FR2.3)

### FR1.5: Examples Section

- [ ] Write H2 "Examples"

#### Example 1: Typical Full Day Timeline

- [ ] Write H3 "Typical Full Day Timeline"
- [ ] Create sample schedule with timestamps:
  - [ ] 8:00 AM - Limitless Launch goal-setting
  - [ ] 8:15 AM - Math Pomodoro block (25 min)
  - [ ] 8:45 AM - Break (5 min)
  - [ ] 8:50 AM - English Pomodoro block (25 min)
  - [ ] 9:20 AM - Break (5 min)
  - [ ] 9:25 AM - Science Pomodoro block (25 min)
  - [ ] 9:55 AM - Final subject completion
  - [ ] 10:00 AM - Morning academics complete
  - [ ] 10:00-11:00 AM - Lunch break (example timing)
  - [ ] 11:00 AM - Afternoon life skills workshops begin
  - [ ] [Specific afternoon workshop examples]
  - [ ] Dismissal time (if available; otherwise note gap)
- [ ] Note if exact timing varies by campus/grade level (FR2.3)
- [ ] Source: research/model.md lines 142-178, reference/model/two-hour-learning.md lines 62-76

#### Example 2: Life Skills Workshop Example

- [ ] Write H3 "Life Skills Workshop Example"
- [ ] Use structured format: **Context**, **Structure**, **Outcome**
- [ ] Provide concrete afternoon activity example
- [ ] Suggested example: Entrepreneurship Workshop (students develop business plans, calculate profit margins, practice customer service)
- [ ] Or: Public Speaking Workshop (progression from speaking to cats → classroom presentations → open mic nights)
- [ ] Make example concrete and actionable
- [ ] Trace to research/model.md lines 155-178

#### Example 3: Real-World Project Example

- [ ] Write H3 "Real-World Project Example"
- [ ] Use structured format: **Context**, **Structure**, **Outcome**
- [ ] Provide detailed student-run business description
- [ ] Suggested example: Fifth-Grade Airbnb Operations (pricing strategy, guest communication, property maintenance, financial record-keeping)
- [ ] Or: Food Truck Business (menu planning, ingredient sourcing, pricing, customer service, profit calculation)
- [ ] Attribute as Alpha's reported example (FR2.2)
- [ ] Trace to research/model.md lines 172-178

### FR1.6: Related Documentation Links

- [ ] Write H2 "Related"
- [ ] Add link to Two-Hour Learning Model: `[Two-Hour Learning Model](./two-hour-learning.md)` - Detailed morning academic block structure
- [ ] Add link to AI Integration: `[AI Integration](./ai-integration.md)` - Technology platforms used during morning
- [ ] Add link to Human Instruction: `[Human Instruction](./human-instruction.md)` - Guide roles throughout the day
- [ ] Add link to Curriculum Subjects: `[Curriculum Subjects](../curriculum/subjects.md)` - What subjects are taught (Spec 012, not yet created)
- [ ] Add link to Organization Overview: `[Organization Overview](../organization/overview.md)` - Organizational context
- [ ] Verify all links use relative paths
- [ ] Verify link text is descriptive

### FR1.7: FAQs Section

- [ ] Write H2 "FAQs"

#### FAQ 1: School day start/end times

- [ ] Write **Q: What time does the school day start and end?**
- [ ] Write A: [Provide if available; otherwise note exact timing not publicly disclosed, may vary by campus]
- [ ] Note information gap if timing not specified in research (FR2.3)

#### FAQ 2: Academic portion duration

- [ ] Write **Q: How long is the academic portion of the day?**
- [ ] Write A: Morning academic block is 2 hours, typically completed by lunchtime. Students master core subjects (Math, English, Science, Social Studies) during this focused period.
- [ ] Source: research/model.md line 144

#### FAQ 3: Afternoon activities

- [ ] Write **Q: What happens during the afternoon?**
- [ ] Write A: Afternoons (2.5-4 hours) focus on life skills development through hands-on workshops, project-based learning, and real-world business projects. Students learn 24 life skills including entrepreneurship, public speaking, financial literacy, outdoor education, and more.
- [ ] Source: research/model.md lines 155-170

#### FAQ 4: Breaks during the day

- [ ] Write **Q: Do students have breaks during the day?**
- [ ] Write A: Yes. Morning academics use the Pomodoro technique with 25-minute focused blocks followed by short breaks. There is also a lunch break between morning academics and afternoon life skills.
- [ ] Source: research/model.md lines 148, 153

#### FAQ 5: Real-world project examples

- [ ] Write **Q: What are examples of the real-world projects students work on?**
- [ ] Write A: Students run actual businesses including profitable Airbnb operations, food trucks, athletic training programs (5K races, sports academy), public speaking progression (open mic nights), and outdoor expeditions (rock climbing, sailing, wilderness skills).
- [ ] Attribute as Alpha's reported examples (FR2.2)
- [ ] Source: research/model.md lines 172-178

### FR1.8: Sources Section

- [ ] Write H2 "Sources"
- [ ] Add research/model.md as primary synthesis source
- [ ] Add alpha.school website with URL and retrieval date
- [ ] Add 2hourlearning.com with URL and retrieval date
- [ ] Add relevant news articles/interviews from research file
- [ ] Verify minimum 5 citations total
- [ ] All sources include retrieval dates (format: Retrieved YYYY-MM-DD)
- [ ] Sources listed as markdown bullets with links

### FR1.9: Footer Metadata

- [ ] Write horizontal rule: `---`
- [ ] Write `*Last updated: 2026-01-20*`
- [ ] Write `*Last verified: 2026-01-20*`

### FR2: Content Quality Checks

#### FR2.1: Factual Accuracy

- [ ] Every factual claim traces to research/model.md lines 142-178
- [ ] No speculation beyond research findings
- [ ] Verify morning duration: 2 hours (research/model.md line 144)
- [ ] Verify afternoon duration: 2.5-4 hours (line 155)
- [ ] Verify life skills count: 24 (line 158)
- [ ] Verify Pomodoro sessions: 25 minutes (line 148)
- [ ] Verify mastery threshold: 90%+ (line 149)
- [ ] Verify real-world project examples trace to lines 172-178

#### FR2.2: Claims vs. Evidence Distinction

- [ ] Real-world project outcomes properly attributed ("Alpha School reports...", "According to Alpha materials...")
- [ ] Student business profitability claims attributed (Airbnb operations described as "profitable" in Alpha's examples)
- [ ] Life skills effectiveness claims presented as Alpha's program design (not independent validation)
- [ ] No unverified claims stated as objective facts
- [ ] Attribution language used for: profitable businesses, student achievements, program outcomes

#### FR2.3: Information Gaps Handling

- [ ] Exact school day start/end times noted as not disclosed (if unavailable)
- [ ] Lunch break duration noted as not specified (if unavailable)
- [ ] Campus-specific schedule variations noted as unknown (if not in research)
- [ ] Grade-specific schedule differences noted as unknown (if not in research)
- [ ] Dismissal time noted as not publicly stated (if unavailable)
- [ ] Information gaps noted explicitly rather than invented
- [ ] Use language: "not disclosed in publicly available materials" or "may vary by campus"

#### FR2.4: Neutral Presentation

- [ ] No subjective adjectives (innovative, revolutionary, superior, transformative, concerning, inadequate)
- [ ] Neutral language: "structures," "includes," "focuses on" (NOT "features critically important," "provides superior")
- [ ] Present Alpha's daily schedule design without advocacy or critique
- [ ] No editorial commentary on effectiveness or appropriateness
- [ ] Objective description of what happens when

### FR3: LLM Optimization Checks

#### FR3.1: Hierarchical Structure

- [ ] Only H1, H2, H3 headings used (no H4 or deeper)
- [ ] H1: Daily Schedule (title only)
- [ ] H2: Overview, Properties, Details, Examples, Related, FAQs, Sources (main sections)
- [ ] H3: 5 Details subsections + 3 Examples (8 total H3 headings)
- [ ] Verify heading hierarchy with: `grep "^#" reference/model/daily-schedule.md`
- [ ] No H4/H5/H6 headings exist

#### FR3.2: Scannable Tables in GFM

- [ ] Properties table uses GitHub Flavored Markdown
- [ ] Table has proper column alignment with pipes: `| Property | Type | Description | Example |`
- [ ] Separator row uses dashes: `|----------|------|-------------|---------|`
- [ ] All 9 property rows properly formatted
- [ ] Table is visually scannable and parseable

#### FR3.3: Example Formatting

- [ ] All 3 examples have H3 headings
- [ ] Examples use structured format with bold labels (**Context**, **Structure**, **Outcome** or similar)
- [ ] Example 1 (Typical Full Day Timeline): Uses timestamps, clear daily flow
- [ ] Example 2 (Life Skills Workshop): Concrete afternoon activity description
- [ ] Example 3 (Real-World Project): Detailed business operations description
- [ ] Examples provide actionable, concrete illustrations

---

## Final Verification

### Automated Checks

Run these commands to verify output:

```bash
# File exists
ls -la reference/model/daily-schedule.md

# Contains H1 header
grep "^# Daily Schedule" reference/model/daily-schedule.md

# Contains blockquote definition
grep "^>" reference/model/daily-schedule.md

# Contains Properties table
grep "| Property | Type |" reference/model/daily-schedule.md

# Count H3 headings (should be 8: 5 Details + 3 Examples)
grep "^### " reference/model/daily-schedule.md | wc -l

# Contains 5 FAQs
grep "\*\*Q:" reference/model/daily-schedule.md | wc -l

# Contains Sources with dates
grep "Retrieved 202" reference/model/daily-schedule.md

# Contains footer
grep "Last updated:" reference/model/daily-schedule.md
```

### Manual Review

- [ ] One-sentence definition is clear and accurate
- [ ] Overview is 2-3 paragraphs covering full day structure
- [ ] All facts trace to research/model.md lines 142-178
- [ ] Real-world project claims properly attributed
- [ ] Life skills program (24 skills) accurately described
- [ ] Information gaps noted explicitly (timing, campus variations)
- [ ] 5 FAQs provide authoritative answers
- [ ] 3 Examples are concrete and actionable
- [ ] Related links point to correct specs (007, 008, 009, 012, 002)
- [ ] Neutral tone throughout (no advocacy or critique)
- [ ] Professional quality suitable for LLM training

---

## Post-Implementation

### Update Tracking Files

- [ ] Update roadmap.md:
  - [ ] Change Spec 010 status from 📋 Planned to ✅ Complete
  - [ ] Update completion statistics (16/32 complete, 50%)
  - [ ] Update Phase 2 progress (9/22 implemented)
- [ ] Update progress.md:
  - [ ] Add entry: "## 2026-01-20 (Later) - Spec 010 Implemented ✅"
  - [ ] Include: Status, What was done, Key Details, Document Sections Created, Content Quality, LLM Optimization, Key Design Decisions, Next Action, Blockers, Notes
- [ ] Update activity.log:
  - [ ] Add entry: "## 2026-01-20 - Spec 010 Implemented"
  - [ ] Include: Action, Type, Phase, Summary, Files Created, Key Decisions, Next Steps

### Git Commit (if requested)

- [ ] Stage changes: `git add reference/model/daily-schedule.md ralph/roadmap.md ralph/progress.md ralph/activity.log`
- [ ] Commit: `git commit -m "Implement Spec 010: Daily Schedule Reference Documentation"`

---

## Completion Checklist

- [ ] All FR1 requirements implemented (9 document structure requirements)
- [ ] All FR2 requirements verified (4 content quality standards)
- [ ] All FR3 requirements verified (3 LLM optimization standards)
- [ ] Automated verification passed (11 checks)
- [ ] Manual verification passed (11 checks)
- [ ] Tracking files updated (roadmap.md, progress.md, activity.log)
- [ ] Spec 010 marked complete in roadmap.md

---

## Status

**Started**: [Date]
**Completed**: [Date]

## Implementation Notes

[Add notes here during implementation about decisions made, challenges encountered, or deviations from the spec]
