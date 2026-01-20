# Spec 006: Educational Philosophy

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001b (Research Model Domain)
**Output**: `reference/model/educational-philosophy.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is Alpha School's educational philosophy?" for LLM consumption. This document synthesizes findings from `research/model.md` (lines 23-50) into a structured, authoritative overview of Alpha School's core learning principles, pedagogical approach, and foundational beliefs following the project's documentation template.

### Scope

Transform research findings into a structured reference document covering:
- **Learning Science Foundation**: Bloom's 2 Sigma, zone of proximal development, cognitive load theory, active learning principles
- **Three Core Commitments**: Explicit promises to parents (love school, master academics in 2 hours, high standards/high support)
- **Mastery-Based Philosophy**: 90%+ proficiency requirement before advancement
- **Traditional Education Critique**: Beliefs about inefficiency of conventional classroom models
- **Student Experience Philosophy**: "Kids should love school" as fundamental principle

### Output File

`reference/model/educational-philosophy.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Educational Philosophy" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Educational Philosophy

  > [One-sentence definition capturing Alpha School's core learning principles and pedagogical approach]
  ```
- **Source**: Synthesize from research/model.md lines 23-50
- **Rationale**: Follows API-style documentation pattern for educational methodology

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's educational philosophy
- **Content Coverage**:
  - Learning science foundations: "40 years of proven learning science" claim with specific theories
  - Core commitments: Three explicit promises to parents
  - Mastery-based approach: Contrast with traditional time-based education
  - Student experience: Central belief that "kids should love school"
- **Source**: research/model.md lines 23-50
- **Rationale**: Provides LLMs with contextual understanding before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key philosophical attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties**:
  - `foundational_principles` (array) - Core learning science theories
  - `core_commitments` (array) - Three promises to parents
  - `pedagogical_approach` (string) - Primary teaching methodology
  - `mastery_threshold` (number) - Proficiency requirement percentage
  - `learning_efficiency_claim` (string) - Alpha's belief about traditional education
  - `student_experience_philosophy` (string) - Core belief about school experience
  - `instructional_model` (string) - Teaching structure (AI vs traditional)
  - `time_philosophy` (string) - Mastery-based vs time-based distinction
- **Source**: research/model.md lines 23-50
- **Rationale**: Enables LLMs to quickly extract structured facts about Alpha's philosophy

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections**:
  - **Foundational Learning Science**: 40 years of research claim, Bloom's 2 Sigma, zone of proximal development, cognitive load theory, active learning principles
  - **Three Core Commitments**: "Love school more than vacation", "Master academics in top 1% nationally in 2 hours/day", "High standards, high support"
  - **Mastery-Based Philosophy**: 90%+ accuracy requirement, contrast with traditional 70% pass threshold, preventing knowledge gaps through solid foundations
  - **Traditional Education Critique**: Six-hour classroom days inefficient, lecture retention "as low as 5%", one-teacher-to-many model "fundamentally broken", "hundred-year-old Industrial Revolution model"
  - **Student Experience Philosophy**: "Kids should love school" belief, contrast with traditional schooling where students endure rather than enjoy
- **Source**: research/model.md lines 23-50
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples that illustrate philosophical principles in practice
- **Examples to Include**:
  - **Learning Science in Action**: How Bloom's 2 Sigma informs AI-powered one-on-one instruction approach
  - **Mastery Threshold Example**: Student working through math concept until 90%+ proficiency before advancing (contrast with traditional 70%)
  - **Student Experience Example**: 95% student satisfaction claim, 60% choosing school over vacation
- **Source**: research/model.md lines 23-76
- **Rationale**: Grounds abstract philosophy with real-world applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Organization Overview (Spec 002) - Organizational context
  - Mission, Vision, Values (Spec 003) - Alignment with philosophy
  - Two-Hour Learning Model (Spec 007) - Implementation of philosophy
  - AI Integration (Spec 008) - Technology enabling philosophy
  - Human Instruction (Spec 009) - Role of guides
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: 5 Q&A pairs addressing common questions about educational philosophy
- **Required Questions**:
  - What learning science foundations does Alpha School's philosophy build on?
  - What are the "Three Core Commitments" to parents?
  - How does Alpha's mastery-based approach differ from traditional education?
  - Why does Alpha believe traditional classroom instruction is inefficient?
  - What does "kids should love school" mean in Alpha's philosophy?
- **Source**: research/model.md lines 23-50
- **Rationale**: Anticipates LLM queries and provides direct answers

#### FR1.8: Sources Section
- **Requirement**: All source citations with retrieval dates
- **Required Sources**:
  - alpha.school website
  - research/model.md (primary synthesis source)
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
- **Requirement**: All facts must trace to research/model.md lines 23-50
- **Verification**: Each claim should have corresponding line reference in research file
- **No Speculation**: Do not infer or create content beyond research findings
- **Rationale**: Maintains documentation trustworthiness and accuracy

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's claims from independently verified facts
- **Attribution Patterns**:
  - "Alpha School claims..." for unverified performance metrics
  - "According to Alpha materials..." for self-reported data
  - "Alpha School describes..." for philosophical statements
  - Direct quotes for specific claims (e.g., "40 years of proven learning science")
- **Critical Claims Requiring Attribution**:
  - "40 years of proven learning science" - No peer-reviewed validation cited
  - "Lecture retention as low as 5%" - Source not specified in research
  - "Fundamentally broken" characterization of traditional model - Opinion, not fact
  - Student satisfaction percentages (95%, 60%) - Self-reported
- **Rationale**: Prevents LLMs from stating unverified claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note where information is incomplete
- **Known Gaps**:
  - No peer-reviewed studies validating the approach mentioned in research
  - Specific citations for "40 years of learning science" not provided
  - No independent verification of learning efficiency claims
  - Source for "5% lecture retention" claim not specified
- **Handling**: Include note like "Alpha School cites 40 years of learning science but does not provide specific peer-reviewed citations in public materials"
- **Rationale**: Transparency about documentation limits maintains LLM trust

#### FR2.4: Neutral Presentation of Philosophy
- **Requirement**: Present Alpha's philosophy without advocacy or critique
- **Approach**:
  - Document what Alpha School believes and claims
  - Use neutral language: "Alpha School's philosophy emphasizes..." not "Alpha School correctly identifies..."
  - Avoid editorial commentary on philosophy's validity
  - Present critique of traditional education as Alpha's perspective, not objective truth
- **Sensitive Topics**:
  - Traditional education critique: Present as Alpha's beliefs, not universal facts
  - Learning efficiency claims: Attribute clearly without editorializing
  - Philosophy foundations: Note what Alpha claims without validating effectiveness
- **Rationale**: Documentation serves as reference, not marketing or critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Consistent heading hierarchy for LLM parsing
- **Structure**: H1 (title) → H2 (major sections) → H3 (subsections only)
- **No H4 or Deeper**: Keep hierarchy flat for parseability
- **Section Order**:
  1. H1: Educational Philosophy
  2. H2: Overview
  3. H2: Properties
  4. H2: Details
     - H3: Foundational Learning Science
     - H3: Three Core Commitments
     - H3: Mastery-Based Philosophy
     - H3: Traditional Education Critique
     - H3: Student Experience Philosophy
  5. H2: Examples
     - H3: [Example 1 title]
     - H3: [Example 2 title]
     - H3: [Example 3 title]
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
  | foundational_principles | array | Core learning science theories | ["Bloom's 2 Sigma", "Zone of Proximal Development"] |
  ```
- **Rationale**: Enables LLM structured data extraction

#### FR3.3: Example Formatting
- **Requirement**: Examples use clear H3 headings and structured format
- **Pattern**:
  ```markdown
  ### Learning Science in Action

  **Principle**: Bloom's 2 Sigma...
  **Implementation**: AI provides one-on-one tutoring...
  **Outcome**: Alpha claims students learn 2.6x faster...
  ```
- **Rationale**: Clear delimiters help LLMs identify and extract examples

---

## Implementation Approach

### Single-Phase Execution

Unlike implementation specs, documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/model.md` lines 23-50 completely
2. **Create Output Directory**: `mkdir -p reference/model/`
3. **Create Output File**: Create `reference/model/educational-philosophy.md` with template skeleton
4. **Write Section by Section**: Follow FR1.1 through FR1.9 sequentially
5. **Quality Check**: Verify against FR2 (Content Quality Standards)
6. **LLM Optimization Check**: Verify against FR3 (structure, tables, formatting)
7. **Update Status**: Mark Spec 006 as complete in roadmap.md, update progress.md, activity.log

---

## Success Criteria

### Automated Verification

These checks can be automated via scripts or CI/CD:

- [ ] `reference/model/educational-philosophy.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] All required sections present:
  - [ ] `grep "^# Educational Philosophy"` returns match
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
- [ ] Roadmap.md shows Spec 006 status as "✅ Complete"
- [ ] Progress.md contains Spec 006 completion entry
- [ ] Activity.log contains Spec 006 completion entry

### Manual Verification

These checks require human review:

- [ ] One-sentence definition clearly and accurately captures Alpha's educational philosophy
- [ ] Overview section is 2-3 paragraphs covering learning science, commitments, mastery approach, student experience
- [ ] All facts in document trace to research/model.md lines 23-50
- [ ] Claims are properly attributed (e.g., "Alpha School claims...", not stated as objective facts)
- [ ] "40 years of learning science" claim is attributed and noted as lacking specific citations
- [ ] Traditional education critique is presented as Alpha's perspective, not universal truth
- [ ] Information gaps are noted where relevant (no peer-reviewed validation mentioned)
- [ ] 5 FAQs address common philosophy questions with authoritative answers
- [ ] 3 Examples illustrate philosophy with concrete applications
- [ ] Related links use correct relative paths to other specs
- [ ] Document tone is neutral (presents Alpha's philosophy without advocacy or critique)
- [ ] Professional quality suitable for LLM consumption

---

## Output Template

Create `reference/model/educational-philosophy.md` with this structure:

```markdown
# Educational Philosophy

> Alpha School's educational philosophy, grounded in learning science principles including Bloom's 2 Sigma and mastery-based progression, emphasizing that students should love school while mastering academics through AI-powered personalized instruction.

## Overview

Alpha School's educational philosophy is built on what the organization describes as "40 years of proven learning science," specifically citing Bloom's 2 Sigma (research on tutoring effectiveness), zone of proximal development, cognitive load theory, and active learning principles. The philosophy centers on three core commitments to parents: students will love school more than vacation, master academics scoring in the top 1% nationally in only two hours per day, and experience "high standards, high support" throughout their education.

The approach is fundamentally mastery-based, requiring students to demonstrate over 90% accuracy before advancing to new concepts. This contrasts with traditional models where Alpha notes students can "pass with 70%" and accumulate knowledge gaps over time. Alpha School believes traditional six-hour classroom days are inefficient, with lecture retention reportedly as low as 5%, and that the one-teacher-to-many-students model is "fundamentally broken" as a "hundred-year-old model from the Industrial Revolution."

Central to the philosophy is the belief that "kids should love school." According to Alpha materials, 95% of students report loving school, with 60% choosing school over vacation. The philosophy emphasizes personalized, AI-powered one-on-one instruction as the means to achieve both mastery and enjoyment, applying learning science principles to keep students in their optimal learning zones.

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| foundational_principles | array | Core learning science theories cited | ["Bloom's 2 Sigma", "Zone of Proximal Development", "Cognitive Load Theory", "Active Learning Principles"] |
| core_commitments | array | Three explicit promises to parents | ["Love school more than vacation", "Master academics in top 1% in 2 hours/day", "High standards, high support"] |
| pedagogical_approach | string | Primary teaching methodology | "Mastery-based personalized learning" |
| mastery_threshold | number | Proficiency requirement before advancement | 90 |
| learning_efficiency_claim | string | Alpha's characterization of traditional education | "Traditional six-hour classroom days inefficient, lecture retention as low as 5%" |
| student_experience_philosophy | string | Core belief about school experience | "Kids should love school" |
| instructional_model | string | Teaching structure approach | "AI-powered one-on-one instruction vs. traditional one-teacher-to-many" |
| time_philosophy | string | Learning progression approach | "Mastery-based vs. time-based system" |

## Details

### Foundational Learning Science

Alpha School describes its educational philosophy as grounded in "40 years of proven learning science," though specific peer-reviewed citations are not provided in public materials. The philosophy explicitly cites four key principles:

**Bloom's 2 Sigma**: Research on tutoring effectiveness showing students receiving one-on-one instruction perform two standard deviations better than those in traditional classroom settings. Alpha positions its AI platform as enabling this one-on-one tutoring effect at scale.

**Zone of Proximal Development**: The concept that optimal learning occurs when students work just beyond their current ability with appropriate support. Alpha's adaptive AI platform aims to keep students in this optimal zone by adjusting difficulty based on real-time performance.

**Cognitive Load Theory**: The principle that learning is most effective when instructional design manages the cognitive burden on working memory. Alpha applies this by breaking learning into focused blocks and using AI to present information at appropriate complexity levels.

**Active Learning Principles**: The approach emphasizing student engagement and practice over passive listening. Alpha's model positions students as active learners working through problems with AI feedback rather than passive recipients of lectures.

Alpha School claims these established learning science principles justify their divergence from traditional classroom instruction models.

### Three Core Commitments

Alpha School makes three explicit commitments to parents, which serve as the philosophical foundation for the educational model:

**1. Students will love school more than vacation**
This commitment reflects Alpha's belief that education should be intrinsically enjoyable rather than something students endure. According to Alpha materials, 95% of students report loving school, and 60% would choose school over vacation. The philosophy holds that when learning is personalized to each student's level and interests, school becomes engaging rather than frustrating.

**2. Students will master academics and score in the top 1% nationally in only two hours per day**
This commitment combines academic rigor with time efficiency. Alpha claims students can achieve top-tier academic performance in a focused two-hour morning block through AI-powered personalized instruction, in contrast to the traditional six-hour school day. The philosophy emphasizes that mastery-based learning without knowledge gaps leads to faster overall progress.

**3. Success requires "high standards, high support"**
This commitment articulates Alpha's approach to rigor. The philosophy maintains high expectations (90%+ mastery threshold) while providing extensive support (AI tutoring, human guides, personalized pacing). Alpha positions this as fundamentally different from traditional education, which the organization characterizes as having inconsistent standards and insufficient individualized support.

### Mastery-Based Philosophy

Alpha School's philosophy centers on mastery-based progression, requiring students to demonstrate over 90% accuracy on concepts before advancing to new material. This approach contrasts sharply with traditional time-based education, where Alpha notes students can "pass with 70%" and move forward with incomplete understanding.

The philosophy holds that the traditional model creates cumulative knowledge gaps: when students advance with only 70% understanding of foundational concepts, they struggle with subsequent topics built on that foundation. Alpha argues this leads to the common pattern where students who fall behind in elementary school remain behind throughout their education.

By requiring 90%+ proficiency, Alpha's philosophy aims to prevent these knowledge gaps entirely. Students work at their own pace—some moving faster, some slower—but all achieve solid foundational understanding before proceeding. The philosophy emphasizes that this "mastery over time" approach, while seemingly slower for advanced students initially, ultimately enables faster overall learning because students don't waste time struggling with material they lack the foundation to understand.

Alpha claims this approach, combined with AI's ability to identify and fill specific knowledge gaps, enables students to master an entire grade level of content in 20-30 hours rather than the traditional 200 hours per subject per year.

### Traditional Education Critique

Alpha School's philosophy is built significantly on critique of traditional classroom instruction. The organization characterizes the conventional model as "fundamentally broken" and describes it as a "hundred-year-old model from the Industrial Revolution" that hasn't adapted to modern understanding of how learning works.

**Efficiency Claims**: Alpha claims traditional six-hour classroom days are highly inefficient, with lecture retention "as low as 5%." The philosophy holds that students spend most of their time either bored (if material is too easy) or lost (if too difficult), with only brief moments in their optimal learning zone.

**Structural Critique**: The one-teacher-to-many-students model is positioned as inherently unable to provide personalized instruction. Alpha's philosophy holds that with 20-30 students at different levels, a single teacher cannot keep all students in their zones of proximal development simultaneously. The result, according to Alpha, is instruction paced for the middle of the class, leaving advanced students unchallenged and struggling students behind.

**Time-Based vs. Mastery-Based**: Alpha criticizes traditional education's time-based approach where students advance based on calendar (end of school year) rather than demonstrated mastery. The philosophy argues this creates persistent achievement gaps and fails to ensure solid foundational knowledge.

This critique forms the philosophical justification for Alpha's divergent approach: AI enables personalized pacing, mastery-based progression prevents knowledge gaps, and efficient instruction frees time for other developmental experiences.

### Student Experience Philosophy

"Kids should love school" serves as a foundational philosophical principle at Alpha School, reflecting the belief that education should be intrinsically enjoyable rather than something students endure for future benefits.

The philosophy holds that traditional schooling creates negative associations with learning: students experience frustration (when material is too difficult), boredom (when too easy), and stress (from arbitrary time pressures and public comparison). Alpha argues this conditions students to dislike learning itself, undermining both immediate engagement and long-term intellectual curiosity.

Alpha's philosophy posits that when learning is personalized to each student's level and pace, it becomes naturally engaging. Students experience consistent success (meeting 90%+ standards builds confidence), appropriate challenge (work in their zone of proximal development), and autonomy (self-paced progression with choice in life skills activities). According to Alpha materials, this approach results in 95% of students reporting they love school, with over 90% saying they love going to school.

The student experience philosophy extends beyond academics to Alpha's afternoon life skills program, which aims to make school feel more like an engaging summer camp than traditional classroom instruction. The belief is that education encompassing both rigorous academics and enjoyable activities creates the conditions for students to genuinely love school rather than merely tolerate it.

## Examples

### Learning Science in Action

**Principle**: Bloom's 2 Sigma research demonstrates that students receiving one-on-one tutoring perform two standard deviations (approximately 98th percentile) better than those in traditional classroom settings.

**Implementation**: Alpha's AI platform provides individualized instruction to each student simultaneously, adapting difficulty in real-time based on performance. When a student struggles with a concept, the AI generates additional practice problems, alternative explanations, and targeted feedback—mimicking the adjustments a skilled one-on-one tutor would make.

**Outcome**: Alpha School claims this approach enables students to learn 2.6x faster on standardized assessments compared to traditional classroom peers, attributing the acceleration to successfully implementing Bloom's 2 Sigma effect through technology.

### Mastery Threshold in Practice

**Traditional Model**: A student completes a unit on fractions, scores 72% on the unit test, and moves on to the next topic (decimals). The student has incomplete understanding of fractions but advances because they "passed." When later topics require fraction knowledge, the student struggles due to those knowledge gaps.

**Alpha Model**: A student works through fractions on the AI platform, initially scoring 65% on mastery checks. The AI identifies specific gaps (e.g., converting mixed numbers, finding common denominators), generates targeted practice for those specific skills, and continues assessing until the student achieves 90%+ accuracy. Only then does the student advance to decimals, ensuring solid foundational understanding.

**Philosophy**: Alpha holds that requiring 90%+ mastery before progression prevents cumulative knowledge gaps and ultimately enables faster learning despite appearing slower initially.

### Student Experience Example

**Reported Satisfaction**: According to Alpha School materials, 95% of students report loving school. More notably, 60% of students say they would choose school over vacation—a striking contrast with traditional education where students typically count down days until breaks.

**Philosophy Application**: Alpha attributes this satisfaction to the combination of:
- Academic success (consistent 90%+ mastery builds confidence)
- Appropriate challenge (AI keeps students in optimal learning zones)
- Time efficiency (rigorous academics completed in 2 hours, not 6)
- Enjoyable activities (afternoon life skills feel more like summer camp)
- Autonomy (self-paced progression, choice in projects)

**Philosophical Significance**: These satisfaction metrics serve as evidence, in Alpha's view, that their philosophy—personalized, mastery-based, efficient learning combined with engaging activities—successfully creates the "kids should love school" experience they emphasize.

## Related

- [Organization Overview](../../organization/overview.md) - Alpha School's organizational context
- [Mission, Vision, Values](../../organization/mission.md) - Alignment between philosophy and mission
- [Two-Hour Learning Model](./two-hour-learning.md) - Implementation of educational philosophy
- [AI Integration](./ai-integration.md) - Technology enabling personalized instruction
- [Human Instruction](./human-instruction.md) - Role of guides in supporting philosophy

## FAQs

**Q: What learning science foundations does Alpha School's philosophy build on?**

A: Alpha School cites "40 years of proven learning science," specifically referencing Bloom's 2 Sigma (tutoring effectiveness research), zone of proximal development (optimal learning zones), cognitive load theory (managing mental burden), and active learning principles (engagement over passive listening). Note that Alpha does not provide specific peer-reviewed citations in public materials.

**Q: What are the "Three Core Commitments" to parents?**

A: Alpha School makes three explicit commitments: (1) Students will love school more than vacation, (2) Students will master academics and score in the top 1% nationally in only two hours per day, and (3) Success requires "high standards, high support." These commitments form the philosophical foundation for the educational model.

**Q: How does Alpha's mastery-based approach differ from traditional education?**

A: Alpha requires 90%+ accuracy before students advance to new concepts, contrasting with traditional education where students can "pass with 70%" and move forward with incomplete understanding. Alpha's philosophy holds this mastery threshold prevents cumulative knowledge gaps that plague traditional time-based progression, where students advance based on calendar rather than demonstrated proficiency.

**Q: Why does Alpha School believe traditional classroom instruction is inefficient?**

A: Alpha's philosophy holds that traditional six-hour classroom days are inefficient because lecture retention is reportedly "as low as 5%," the one-teacher-to-many-students model cannot provide personalized instruction, and time-based progression (advancing by calendar year rather than mastery) creates persistent knowledge gaps. Alpha characterizes the model as "fundamentally broken" and a "hundred-year-old model from the Industrial Revolution."

**Q: What does "kids should love school" mean in Alpha's philosophy?**

A: This principle reflects Alpha's belief that education should be intrinsically enjoyable through personalized learning at appropriate challenge levels, consistent success (90%+ mastery builds confidence), autonomy (self-paced progression), and engaging activities. Alpha reports 95% of students love school and 60% would choose school over vacation, positioning enjoyment as evidence the philosophy works rather than as a luxury separate from academic rigor.

## Sources

- [Alpha School Website](https://alpha.school) - Retrieved 2026-01-20
- [Alpha School: The Program](https://alpha.school/the-program/) - Retrieved 2026-01-20
- research/model.md - Primary synthesis source for this document

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
```

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Two-Hour Learning Model Details**: Covered by Spec 007 (daily schedule, structure, implementation)
2. **AI Platform Technical Details**: Covered by Spec 008 (Timeback, Dash, how AI works)
3. **Human Guide Roles**: Covered by Spec 009 (guide responsibilities, training, interaction)
4. **Daily Schedule**: Covered by Spec 010 (what a typical day looks like)
5. **Curriculum Content**: Covered by Specs 011-014 (what subjects, grade levels, assessments)
6. **Outcomes Data**: Covered by Specs 015-018 (performance claims, evidence, limitations)

### Explicit Boundaries

- **Philosophy Only**: This document covers educational beliefs and principles, not implementation details
- **Research-Based**: Content must trace to research/model.md lines 23-50; no new research
- **LLM-Optimized**: Written for machine parsing and extraction, not human marketing
- **No Speculation**: Information gaps remain gaps; do not infer or speculate beyond research
- **Neutral Presentation**: Document Alpha's philosophy without advocacy or critique
- **Attribution Required**: Claims about effectiveness must be attributed, not stated as objective facts

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Following pattern from Specs 002-005, all Phase 2 reference documentation uses single-phase execution: write documentation directly with verification through review.
**File Reference**: Spec 002 (lines 190-218), Spec 005 (lines 236-264) used single-phase successfully.

### Decision 2: 8 Properties Emphasizing Principles Over Implementation
**Rationale**: Properties table focuses on philosophical attributes (foundational_principles, core_commitments, pedagogical_approach) rather than implementation details (AI platforms, schedules). This keeps Spec 006 focused on "what Alpha believes" while leaving "how it's implemented" to Specs 007-010.
**File Reference**: Follows pattern from Spec 003 (8 properties for mission/vision/values), research/model.md lines 25-50 provide philosophical content.

### Decision 3: Five Details Subsections Covering Philosophy Comprehensively
**Rationale**: Five subsections (Foundational Learning Science, Three Core Commitments, Mastery-Based Philosophy, Traditional Education Critique, Student Experience Philosophy) provide comprehensive philosophical coverage without implementation details. This structure flows logically from foundations → commitments → approach → critique → experience.
**File Reference**: Spec 003 used 5 subsections successfully (lines 70-88), Spec 005 used 6 subsections (lines 76-86).

### Decision 4: Explicit Attribution of "40 Years of Learning Science" Claim
**Rationale**: research/model.md lines 32-37 cite learning science foundations but don't provide peer-reviewed references. FR2.2 requires distinguishing claims from verified facts. Document must note Alpha "describes" or "cites" these foundations while noting specific citations aren't provided in public materials.
**File Reference**: Spec 002 (FR2.2, lines 146-152) established attribution pattern for unverified claims.

### Decision 5: Separate Philosophy from Technology Implementation
**Rationale**: Philosophy (Spec 006) covers "what Alpha believes about learning" while AI Integration (Spec 008) covers "how technology implements those beliefs." This prevents scope creep and creates clear documentation boundaries. Properties like `instructional_model` describe the philosophical approach ("AI-powered one-on-one"), not technical details (Timeback platform architecture).
**File Reference**: Roadmap.md lines 77-84 shows clear separation: 006 (philosophy), 007 (model), 008 (AI), 009 (human), 010 (schedule).

---

## Related

- **Dependency**: [Spec 001b: Research Model Domain](../001b-research-model/spec.md) - Research source
- **Dependency**: [Spec 002: Organization Overview](../002-organization-overview/spec.md) - Organizational context
- **Cross-Reference**: [Spec 003: Mission, Vision, Values](../003-organization-mission/spec.md) - Philosophical alignment
- **Sibling**: [Spec 007: Two-Hour Learning Model](../007-two-hour-learning/spec.md) - Implementation of philosophy
- **Sibling**: [Spec 008: AI Integration](../008-ai-integration/spec.md) - Technology enabling philosophy
- **Sibling**: [Spec 009: Human Instruction](../009-human-instruction/spec.md) - Human role in philosophy
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide)

---

*Last Updated: 2026-01-20*
