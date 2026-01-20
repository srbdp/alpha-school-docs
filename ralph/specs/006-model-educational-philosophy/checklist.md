# Spec 006 Implementation Checklist

**Spec**: Educational Philosophy Reference Documentation
**Status**: 📋 Planned → 🚧 In Progress → ✅ Complete
**Output**: `reference/model/educational-philosophy.md`

---

## Pre-Implementation

- [ ] **Task 0.1**: Read complete spec
  - Read ralph/specs/006-model-educational-philosophy/spec.md in full
  - Understand all 16 Functional Requirements (FR1.1-FR1.9, FR2.1-FR2.4, FR3.1-FR3.3)
  - Review success criteria (automated + manual)
  - **Files**: ralph/specs/006-model-educational-philosophy/spec.md

- [ ] **Task 0.2**: Read research source
  - Read research/model.md lines 23-50 (Educational Philosophy section)
  - Note key content: learning science foundations, core commitments, mastery approach, beliefs
  - Identify source citations and retrieval dates
  - **FR**: All FRs depend on this research
  - **Files**: research/model.md (lines 23-50)

- [ ] **Task 0.3**: Review reference documentation examples
  - Read reference/organization/overview.md for structure pattern
  - Read reference/organization/mission.md for properties table pattern
  - Read reference/organization/history.md for details section pattern
  - **FR**: FR1 (Document Structure)
  - **Files**: reference/organization/{overview,mission,history}.md

- [ ] **Task 0.4**: Review roadmap template
  - Read roadmap.md lines 136-173 for documentation template
  - Understand required sections and format
  - **FR**: FR1 (Document Structure)
  - **Files**: ralph/roadmap.md (lines 136-173)

---

## Phase 2.0: Write Documentation

### Header & Overview (FR1.1, FR1.2)

- [ ] **Task 2.0.1**: Create output directory
  - Run: `mkdir -p reference/model/`
  - **FR**: Setup for FR1.1
  - **Files**: reference/model/ (directory)

- [ ] **Task 2.0.2**: Create output file with skeleton
  - Create reference/model/educational-philosophy.md
  - Add all required H2 section headers (## Overview, ## Properties, etc.)
  - **FR**: FR1 (Document Structure foundation)
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.3**: Write H1 title
  - Write: `# Educational Philosophy`
  - **FR**: FR1.1 - Header and Definition
  - **Files**: reference/model/educational-philosophy.md (line 1)

- [ ] **Task 2.0.4**: Write one-sentence definition
  - Write blockquote definition capturing philosophy essence
  - Cover: learning science principles, mastery-based, student experience
  - Format: `> [One-sentence definition]`
  - **FR**: FR1.1 - Header and Definition
  - **Source**: research/model.md lines 25-50
  - **Files**: reference/model/educational-philosophy.md (lines 3-4)

- [ ] **Task 2.0.5**: Write Overview paragraph 1 (Learning science foundations)
  - Cover: "40 years of proven learning science" claim
  - List specific theories: Bloom's 2 Sigma, zone of proximal development, cognitive load theory, active learning
  - Use attribution language: "Alpha School describes..." or "Alpha cites..."
  - **FR**: FR1.2 - Overview Section, FR2.2 - Claims vs Evidence
  - **Source**: research/model.md lines 32-37
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.6**: Write Overview paragraph 2 (Core commitments & mastery approach)
  - Cover: Three core commitments to parents
  - Explain mastery-based approach (90%+ threshold)
  - Contrast with traditional model (70% pass threshold)
  - **FR**: FR1.2 - Overview Section
  - **Source**: research/model.md lines 27-42
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.7**: Write Overview paragraph 3 (Student experience & critique)
  - Cover: "Kids should love school" principle
  - Reference student satisfaction claims (95%, 60%)
  - Note traditional education critique (inefficiency, "fundamentally broken")
  - Use attribution for claims
  - **FR**: FR1.2 - Overview Section, FR2.2 - Claims vs Evidence
  - **Source**: research/model.md lines 44-49, 73-76
  - **Files**: reference/model/educational-philosophy.md

### Properties Table (FR1.3)

- [ ] **Task 2.0.8**: Create properties table structure
  - Create table with columns: Property | Type | Description | Example
  - Use GitHub Flavored Markdown format
  - **FR**: FR1.3 - Properties Table, FR3.2 - Scannable Tables
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.9**: Add foundational_principles property
  - Type: array
  - Description: "Core learning science theories cited"
  - Example: ["Bloom's 2 Sigma", "Zone of Proximal Development", "Cognitive Load Theory", "Active Learning Principles"]
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 32-37
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.10**: Add core_commitments property
  - Type: array
  - Description: "Three explicit promises to parents"
  - Example: ["Love school more than vacation", "Master academics in top 1% in 2 hours/day", "High standards, high support"]
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 27-30
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.11**: Add pedagogical_approach property
  - Type: string
  - Description: "Primary teaching methodology"
  - Example: "Mastery-based personalized learning"
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 39-42
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.12**: Add mastery_threshold property
  - Type: number
  - Description: "Proficiency requirement before advancement"
  - Example: 90
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md line 40
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.13**: Add learning_efficiency_claim property
  - Type: string
  - Description: "Alpha's characterization of traditional education"
  - Example: "Traditional six-hour classroom days inefficient, lecture retention as low as 5%"
  - **FR**: FR1.3 - Properties Table, FR2.2 - Claims attribution
  - **Source**: research/model.md line 44
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.14**: Add student_experience_philosophy property
  - Type: string
  - Description: "Core belief about school experience"
  - Example: "Kids should love school"
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 46-47
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.15**: Add instructional_model property
  - Type: string
  - Description: "Teaching structure approach"
  - Example: "AI-powered one-on-one instruction vs. traditional one-teacher-to-many"
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 48-49
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.16**: Add time_philosophy property
  - Type: string
  - Description: "Learning progression approach"
  - Example: "Mastery-based vs. time-based system"
  - **FR**: FR1.3 - Properties Table
  - **Source**: research/model.md lines 39-42
  - **Files**: reference/model/educational-philosophy.md

### Details Section (FR1.4)

- [ ] **Task 2.0.17**: Write Foundational Learning Science subsection
  - Write H3: `### Foundational Learning Science`
  - Introduce "40 years of proven learning science" claim with attribution
  - Note: "though specific peer-reviewed citations are not provided in public materials"
  - Explain Bloom's 2 Sigma (one-on-one tutoring effectiveness, 2 standard deviations)
  - Explain Zone of Proximal Development (optimal learning zones with support)
  - Explain Cognitive Load Theory (managing cognitive burden)
  - Explain Active Learning Principles (engagement over passive listening)
  - **FR**: FR1.4 - Details Section, FR2.2 - Claims attribution, FR2.3 - Information gaps
  - **Source**: research/model.md lines 32-37
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.18**: Write Three Core Commitments subsection
  - Write H3: `### Three Core Commitments`
  - Introduce as "explicit commitments to parents"
  - Explain Commitment 1: "Love school more than vacation" with 95%/60% satisfaction data
  - Explain Commitment 2: "Master academics in top 1% in 2 hours/day" with efficiency claim
  - Explain Commitment 3: "High standards, high support" with 90%+ mastery threshold
  - Use attribution for satisfaction percentages
  - **FR**: FR1.4 - Details Section, FR2.2 - Claims attribution
  - **Source**: research/model.md lines 27-30, 73-76
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.19**: Write Mastery-Based Philosophy subsection
  - Write H3: `### Mastery-Based Philosophy`
  - Explain 90%+ accuracy requirement before advancement
  - Contrast with traditional 70% pass threshold
  - Explain cumulative knowledge gap prevention philosophy
  - Cover "mastery over time" approach (pace varies, understanding constant)
  - Include 20-30 hours vs 200 hours per grade level claim with attribution
  - **FR**: FR1.4 - Details Section, FR2.2 - Claims attribution
  - **Source**: research/model.md lines 39-42, 61-62
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.20**: Write Traditional Education Critique subsection
  - Write H3: `### Traditional Education Critique`
  - Introduce as Alpha's philosophical foundation
  - Cover "fundamentally broken" and "Industrial Revolution model" characterizations
  - Explain efficiency claims: "lecture retention as low as 5%"
  - Explain structural critique: one-teacher-to-many cannot personalize
  - Explain time-based vs mastery-based critique
  - Use neutral language: "Alpha characterizes..." "Alpha's philosophy holds..."
  - **FR**: FR1.4 - Details Section, FR2.2 - Claims attribution, FR2.4 - Neutral presentation
  - **Source**: research/model.md lines 44-49
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.21**: Write Student Experience Philosophy subsection
  - Write H3: `### Student Experience Philosophy`
  - Explain "kids should love school" as foundational principle
  - Contrast traditional schooling (frustration, boredom, stress) with Alpha approach
  - Explain how personalization creates engagement
  - Reference 95% love school, 90%+ love going to school, 60% choose over vacation
  - Cover life skills program contribution to experience
  - Use attribution for satisfaction metrics
  - **FR**: FR1.4 - Details Section, FR2.2 - Claims attribution
  - **Source**: research/model.md lines 46-49, 73-76
  - **Files**: reference/model/educational-philosophy.md

### Examples Section (FR1.5)

- [ ] **Task 2.0.22**: Write Example 1 - Learning Science in Action
  - Write H3: `### Learning Science in Action`
  - Structure: Principle → Implementation → Outcome
  - Principle: Bloom's 2 Sigma (2 standard deviations, 98th percentile)
  - Implementation: AI provides one-on-one tutoring at scale
  - Outcome: 2.6x faster learning claim with attribution
  - **FR**: FR1.5 - Examples Section, FR3.3 - Example formatting
  - **Source**: research/model.md lines 34, 66
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.23**: Write Example 2 - Mastery Threshold in Practice
  - Write H3: `### Mastery Threshold in Practice`
  - Structure: Traditional Model → Alpha Model → Philosophy
  - Traditional: Student scores 72% on fractions, moves to decimals with gaps
  - Alpha: Student scores 65%, AI targets gaps, continues until 90%+, then advances
  - Philosophy: Preventing cumulative gaps enables faster learning ultimately
  - **FR**: FR1.5 - Examples Section, FR3.3 - Example formatting
  - **Source**: research/model.md lines 39-42
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.24**: Write Example 3 - Student Experience Example
  - Write H3: `### Student Experience Example`
  - Structure: Reported Satisfaction → Philosophy Application → Philosophical Significance
  - Satisfaction: 95% love school, 60% choose over vacation (with attribution)
  - Application: Success + challenge + efficiency + activities + autonomy
  - Significance: Evidence philosophy creates enjoyable learning
  - **FR**: FR1.5 - Examples Section, FR2.2 - Claims attribution, FR3.3 - Example formatting
  - **Source**: research/model.md lines 73-76
  - **Files**: reference/model/educational-philosophy.md

### Related Documentation (FR1.6)

- [ ] **Task 2.0.25**: Add Related section with links
  - Write H2: `## Related`
  - Add link to Organization Overview (../../organization/overview.md)
  - Add link to Mission, Vision, Values (../../organization/mission.md)
  - Add link to Two-Hour Learning Model (./two-hour-learning.md)
  - Add link to AI Integration (./ai-integration.md)
  - Add link to Human Instruction (./human-instruction.md)
  - Use relative paths, include descriptive text
  - **FR**: FR1.6 - Related Documentation Links
  - **Files**: reference/model/educational-philosophy.md

### FAQs Section (FR1.7)

- [ ] **Task 2.0.26**: Add FAQ 1 - Learning science foundations
  - Question: "What learning science foundations does Alpha School's philosophy build on?"
  - Answer: Cover 40 years claim, four specific theories, note lack of specific citations
  - **FR**: FR1.7 - FAQs Section, FR2.3 - Information gaps
  - **Source**: research/model.md lines 32-37
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.27**: Add FAQ 2 - Three Core Commitments
  - Question: "What are the 'Three Core Commitments' to parents?"
  - Answer: List all three commitments verbatim
  - **FR**: FR1.7 - FAQs Section
  - **Source**: research/model.md lines 27-30
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.28**: Add FAQ 3 - Mastery-based approach
  - Question: "How does Alpha's mastery-based approach differ from traditional education?"
  - Answer: 90%+ vs 70%, mastery vs time-based, knowledge gap prevention
  - **FR**: FR1.7 - FAQs Section
  - **Source**: research/model.md lines 39-42
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.29**: Add FAQ 4 - Traditional education critique
  - Question: "Why does Alpha School believe traditional classroom instruction is inefficient?"
  - Answer: Cover 5% lecture retention, one-teacher-to-many limitations, time-based progression issues
  - **FR**: FR1.7 - FAQs Section, FR2.4 - Neutral presentation
  - **Source**: research/model.md lines 44-49
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.30**: Add FAQ 5 - Student experience philosophy
  - Question: "What does 'kids should love school' mean in Alpha's philosophy?"
  - Answer: Cover personalization, success, autonomy, engagement, satisfaction metrics
  - **FR**: FR1.7 - FAQs Section, FR2.2 - Claims attribution
  - **Source**: research/model.md lines 46-49, 73-76
  - **Files**: reference/model/educational-philosophy.md

### Sources & Footer (FR1.8, FR1.9)

- [ ] **Task 2.0.31**: Add Sources section
  - Write H2: `## Sources`
  - Add alpha.school website with retrieval date
  - Add alpha.school/the-program/ with retrieval date
  - Add research/model.md as synthesis source
  - Format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
  - **FR**: FR1.8 - Sources Section
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 2.0.32**: Add footer metadata
  - Add horizontal rule: `---`
  - Add: `*Last updated: 2026-01-20*`
  - Add: `*Last verified: 2026-01-20*`
  - **FR**: FR1.9 - Footer Metadata
  - **Files**: reference/model/educational-philosophy.md

---

## Quality Checks (FR2: Content Quality Standards)

- [ ] **Task 3.1**: Verify factual accuracy (FR2.1)
  - Confirm all facts trace to research/model.md lines 23-50
  - Verify no speculation or content beyond research findings
  - Check that each claim has corresponding research file line reference
  - **FR**: FR2.1 - Factual Accuracy
  - **Files**: reference/model/educational-philosophy.md, research/model.md

- [ ] **Task 3.2**: Verify claims attribution (FR2.2)
  - Confirm "40 years of learning science" is attributed, not stated as fact
  - Verify "5% lecture retention" claim uses attribution language
  - Check "fundamentally broken" presented as Alpha's perspective
  - Confirm student satisfaction percentages (95%, 60%) attributed to Alpha materials
  - Ensure 2.6x faster learning claim has attribution
  - **FR**: FR2.2 - Claims vs Evidence Distinction
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 3.3**: Verify information gaps noted (FR2.3)
  - Confirm document notes lack of peer-reviewed citations for learning science
  - Verify "5% lecture retention" source gap mentioned
  - Check that speculation is avoided where information is incomplete
  - **FR**: FR2.3 - Information Gaps Handling
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 3.4**: Verify neutral presentation (FR2.4)
  - Confirm traditional education critique presented as Alpha's view, not universal truth
  - Verify document doesn't advocate for or against philosophy
  - Check that language is neutral: "Alpha believes..." not "Alpha correctly identifies..."
  - Ensure document serves as reference, not marketing
  - **FR**: FR2.4 - Neutral Presentation of Philosophy
  - **Files**: reference/model/educational-philosophy.md

---

## LLM Optimization Checks (FR3)

- [ ] **Task 4.1**: Verify hierarchical structure (FR3.1)
  - Check H1 (title) → H2 (major sections) → H3 (subsections) hierarchy
  - Verify no H4 or deeper nesting
  - Confirm section order: Overview → Properties → Details → Examples → Related → FAQs → Sources
  - Count headings: Should have ~18-22 total (1 H1, 7-8 H2, 10-13 H3)
  - **FR**: FR3.1 - Hierarchical Structure
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 4.2**: Verify scannable tables (FR3.2)
  - Check properties table uses GitHub Flavored Markdown format
  - Verify consistent column alignment
  - Confirm all 8 required properties present
  - Test table renders correctly in Markdown preview
  - **FR**: FR3.2 - Scannable Tables
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 4.3**: Verify example formatting (FR3.3)
  - Check all 3 examples have clear H3 headings
  - Verify examples use structured format (labels, clear organization)
  - Confirm clear delimiters separate examples from other content
  - **FR**: FR3.3 - Example Formatting
  - **Files**: reference/model/educational-philosophy.md

---

## Final Verification

### Automated Checks

- [ ] **Task 5.1**: File existence check
  - Confirm reference/model/educational-philosophy.md exists
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 5.2**: Markdown syntax validation
  - Run markdown linter or parser
  - Verify no parsing errors
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 5.3**: Required sections check
  - Run: `grep "^# Educational Philosophy" reference/model/educational-philosophy.md`
  - Run: `grep "^## Overview" reference/model/educational-philosophy.md`
  - Run: `grep "^## Properties" reference/model/educational-philosophy.md`
  - Run: `grep "^## Details" reference/model/educational-philosophy.md`
  - Run: `grep "^## Examples" reference/model/educational-philosophy.md`
  - Run: `grep "^## Related" reference/model/educational-philosophy.md`
  - Run: `grep "^## FAQs" reference/model/educational-philosophy.md`
  - Run: `grep "^## Sources" reference/model/educational-philosophy.md`
  - Verify all 8 sections present
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 5.4**: Properties count check
  - Count properties in table: Should be 8
  - Verify: foundational_principles, core_commitments, pedagogical_approach, mastery_threshold, learning_efficiency_claim, student_experience_philosophy, instructional_model, time_philosophy
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 5.5**: Source dates check
  - Verify all sources include "Retrieved YYYY-MM-DD" format
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 5.6**: Footer metadata check
  - Verify "Last updated:" present
  - Verify "Last verified:" present
  - **Success Criteria**: Automated Verification
  - **Files**: reference/model/educational-philosophy.md

### Manual Review

- [ ] **Task 6.1**: Definition quality check
  - Verify one-sentence definition clearly captures educational philosophy
  - Confirm definition is accurate based on research
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.2**: Overview completeness check
  - Verify overview is 2-3 paragraphs
  - Confirm covers: learning science, commitments, mastery approach, student experience
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.3**: Research traceability check
  - Verify all facts can be traced to research/model.md lines 23-50
  - Confirm no content created beyond research findings
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md, research/model.md

- [ ] **Task 6.4**: Attribution quality check
  - Verify unverified claims use attribution language
  - Check "40 years of learning science" properly attributed
  - Confirm satisfaction metrics attributed to Alpha materials
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.5**: Information gap handling check
  - Verify gaps noted where relevant (peer-reviewed citations, lecture retention source)
  - Confirm no speculation to fill gaps
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.6**: Neutral tone check
  - Verify traditional education critique presented as Alpha's view
  - Confirm no advocacy for or against philosophy
  - Check professional, balanced tone throughout
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.7**: FAQ quality check
  - Verify 5 FAQs address common philosophy questions
  - Confirm answers are authoritative and trace to research
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.8**: Example quality check
  - Verify 3 examples illustrate philosophy with concrete applications
  - Confirm examples use structured format
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.9**: Related links check
  - Verify all related links use correct relative paths
  - Confirm links point to appropriate related specs
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

- [ ] **Task 6.10**: Professional quality check
  - Read document as LLM would consume it
  - Verify professional quality suitable for reference documentation
  - Confirm document achieves goal: "What is Alpha's educational philosophy?"
  - **Success Criteria**: Manual Verification
  - **Files**: reference/model/educational-philosophy.md

---

## Post-Implementation

- [ ] **Task 7.1**: Update roadmap.md
  - Change Spec 006 status from 📋 Planned to ✅ Complete
  - Update completion stats (Total complete: 12/32 = 37.5%)
  - Update Phase 2 progress (5/22 = 22.7%)
  - **Files**: ralph/roadmap.md

- [ ] **Task 7.2**: Update progress.md
  - Append comprehensive Spec 006 completion entry
  - Include: Status, What was done, Files created, Document sections, Content quality notes, LLM optimization, Updates made, Next action, Blockers, Progress tracking, Notes
  - **Files**: ralph/progress.md

- [ ] **Task 7.3**: Update activity.log
  - Create detailed activity log entry for Spec 006
  - Include: Timestamp, Action, Type, Phase, Summary, Files created, Key findings, Updates made, Next steps, Progress tracking
  - **Files**: ralph/activity.log

- [ ] **Task 7.4**: Update this checklist status
  - Mark all completed tasks with [x]
  - Update checklist status to ✅ Complete
  - **Files**: ralph/specs/006-model-educational-philosophy/checklist.md

---

## Completion Criteria

Spec 006 is complete when:

✅ All 32 tasks in Phase 2.0 (Write Documentation) are complete
✅ All 4 quality checks (FR2) pass
✅ All 3 LLM optimization checks (FR3) pass
✅ All 6 automated verification checks pass
✅ All 10 manual verification checks pass
✅ All 4 post-implementation documentation updates complete

**Total Tasks**: 59
**Estimated Time**: ~1 hour for experienced implementer

---

*Last Updated: 2026-01-20*
