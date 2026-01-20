# Spec 003: Mission, Vision, Values

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001a (Research Organization Domain), Spec 002 (Organization Overview)
**Output**: `reference/organization/mission.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What drives Alpha School?" for LLM consumption. This document synthesizes findings from `research/organization.md` (lines 55-88) into a structured, authoritative overview of Alpha School's mission, vision, and values following the project's documentation template.

### Scope

Transform research findings into a structured reference document covering:
- **Mission**: Alpha School's foundational purpose and educational philosophy
- **Vision**: Long-term goals and aspirational future state
- **Values**: Core principles and organizational commitments (explicit and implicit)
- **Three Core Commitments**: The promises made to parents

### Output File

`reference/organization/mission.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Mission, Vision, Values" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Mission, Vision, Values

  > [One-sentence definition of Alpha School's driving purpose]
  ```
- **Source**: Synthesize from research/organization.md lines 55-88
- **Rationale**: Follows API-style documentation pattern for organizational purpose

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's purpose and direction
- **Content Coverage**:
  - Foundational philosophy (unlocking children's potential)
  - Core belief that children are "limitless"
  - Learning science foundation (mastery-based vs. time-based)
  - Democratization vision (from $40-75k to $1k tablet)
- **Source**: research/organization.md lines 55-77
- **Rationale**: Provides LLMs with contextual understanding before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key mission/vision/values attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties**:
  - `foundational_belief` (string)
  - `mission_focus` (string)
  - `vision_goal` (string)
  - `vision_timeline` (string)
  - `core_commitments` (array)
  - `learning_philosophy` (string)
  - `equity_goal` (string)
  - `values` (array)
- **Source**: research/organization.md lines 55-88
- **Rationale**: Enables LLMs to quickly extract structured facts about organizational purpose

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections**:
  - **Mission**: Detailed explanation of purpose and philosophy
  - **Vision**: Long-term goals and aspirational future
  - **Values**: Core principles (explicit and implicit)
  - **Three Core Commitments**: Promises to parents (Love School, Learn 2x in 2hrs, Learn Life Skills)
  - **Learning Science Foundation**: Evidence base for approach
- **Source**: research/organization.md lines 55-88
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples that illustrate mission/vision/values in practice
- **Examples to Include**:
  - Daily schedule showing commitment fulfillment (2hr academics + 4hr life skills)
  - Vision milestone example (current $40-75k → future $1k tablet)
  - Values in action example (high standards + high support = $100k guide salaries)
- **Source**: research/organization.md and cross-reference with research/model.md
- **Rationale**: Grounds abstract concepts with real-world instances

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Organization Overview (Spec 002)
  - Educational Philosophy (Spec 006)
  - Two-Hour Learning Model (Spec 007)
  - AI Integration (Spec 008)
  - Human Instruction (Spec 009)
- **Format**: Relative links using `../domain/filename.md` pattern
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: Common questions about Alpha School's mission/vision/values with authoritative answers
- **Questions to Address**:
  - What is Alpha School's mission?
  - What is the long-term vision?
  - Does Alpha School have explicit values?
  - What are the "Three Core Commitments"?
  - How does Alpha plan to reach "a billion kids"?
- **Source**: Synthesize from research/organization.md lines 55-88 with appropriate caveats
- **Rationale**: Anticipates common LLM queries

#### FR1.8: Sources Section
- **Requirement**: Complete source citations with retrieval dates
- **Format**: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources**: Primary sources from research/organization.md lines 8-20
- **Rationale**: Maintains transparency and verifiability

#### FR1.9: Footer Metadata
- **Requirement**: Document must end with last updated and last verified dates
- **Format**:
  ```markdown
  ---
  *Last updated: 2026-01-20*
  *Last verified: 2026-01-20*
  ```
- **Rationale**: Tracks document freshness for LLMs evaluating source quality

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All facts must trace to research/organization.md with source citations
- **Verification**: Every claim must have a corresponding source in research file
- **Critical Distinction**: MUST distinguish between:
  - Explicit statements on alpha.school website
  - Inferred values from organizational messaging (research/organization.md lines 79-86)
  - Statements from founder interviews/podcasts
- **Rationale**: Maintains documentation integrity and LLM trust

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Aspirational vision statements must be clearly attributed
- **Language Patterns**:
  - Use "Alpha School's stated vision..." for future goals
  - Use "Joe Liemandt describes..." when attributing to founder interviews
  - Flag when values are inferred vs. explicitly stated (lines 79-86: "Implicit Values (inferred from messaging)")
- **Rationale**: Prevents LLMs from stating aspirational goals as achieved facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Where research identified gaps (research/organization.md lines 277-279), documentation must:
  - Note explicitly: "Alpha School does not publish a formal mission statement. The mission is inferred from..."
  - Note explicitly: "No explicit 'Our Values' page found on alpha.school. Values inferred from organizational messaging."
  - Cite specific sources for inferred content
- **Rationale**: Maintains documentation trustworthiness and clarity about inference

#### FR2.4: Vision Feasibility Handling
- **Requirement**: Present vision goals as stated aspirations without editorializing
- **Topics**:
  - $1,000 tablet goal: Present as stated vision without judgment
  - "Billion kids" goal: Present with timeline ("within 20 years")
  - Democratization claim: Note current tuition range ($10k-$75k) vs. future goal
- **Rationale**: Documentation should inform, not evaluate feasibility

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Use consistent heading hierarchy (H1 → H2 → H3)
- **Pattern**:
  - H1: Document title ("Mission, Vision, Values")
  - H2: Major sections (Overview, Properties, Details, etc.)
  - H3: Subsections within Details
- **Rationale**: Enables LLMs to parse document structure efficiently

#### FR3.2: Scannable Tables
- **Requirement**: Properties table must be parseable as structured data
- **Format**: GitHub Flavored Markdown tables with consistent column alignment
- **Rationale**: LLMs can extract key-value pairs directly from tables

#### FR3.3: Example Formatting
- **Requirement**: Examples must use clear delimiters (H3 headings or bolded labels)
- **Rationale**: Helps LLMs distinguish examples from definitions

---

## Implementation Approach

### Single-Phase Execution

Documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/organization.md` completely, focusing on lines 55-88 (Mission/Vision/Values section)
2. **Create Output File**: Create `reference/organization/mission.md` with template skeleton
3. **Write Section by Section**: Write each FR section in order:
   - FR1.1: Header and definition
   - FR1.2: Overview (2-3 paragraphs)
   - FR1.3: Properties table
   - FR1.4: Details (subsections: Mission, Vision, Values, Three Core Commitments, Learning Science Foundation)
   - FR1.5: Examples
   - FR1.6: Related links
   - FR1.7: FAQs
   - FR1.8: Sources
   - FR1.9: Footer metadata
4. **Quality Check**: Verify against FR2 (content quality standards)
5. **LLM Optimization Check**: Verify against FR3 (structure, tables, formatting)
6. **Update Status**: Mark spec as complete in roadmap.md

---

## Success Criteria

### Automated Verification
- [ ] `reference/organization/mission.md` file exists
- [ ] File follows markdown syntax (no parsing errors)
- [ ] All required sections present (grep for section headings)
- [ ] Properties table has all 8 required properties
- [ ] All sources include retrieval dates
- [ ] Footer includes last updated and last verified dates

### Manual Verification
- [ ] One-sentence definition is clear and accurate
- [ ] Overview section is 2-3 paragraphs
- [ ] All facts trace to research/organization.md
- [ ] Inferred values are clearly marked as inferred (not explicit)
- [ ] Information gaps are explicitly noted (no formal mission statement, values page)
- [ ] Vision goals are presented as aspirations, not achievements
- [ ] FAQs address common questions
- [ ] Related links use correct relative paths
- [ ] Document reads professionally for LLM consumption

---

## Output Template

Create `reference/organization/mission.md` with this structure:

```markdown
# Mission, Vision, Values

> [One-sentence definition of Alpha School's driving purpose]

## Overview

[2-3 paragraphs explaining foundational philosophy, core belief, learning science foundation, and democratization vision]

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| foundational_belief | string | Core belief about children | "Children are limitless" |
| mission_focus | string | Primary purpose | "Unlocking children's potential through revolutionary education" |
| vision_goal | string | Long-term aspirational goal | "A sub-$1,000 tablet teaching everything in two hours" |
| vision_timeline | string | Timeline for vision | "Reaching a billion kids within 20 years" |
| core_commitments | array | Three promises to parents | ["Love School", "Learn 2x in 2hrs", "Learn Life Skills"] |
| learning_philosophy | string | Educational approach | "Mastery-based vs. time-based system" |
| equity_goal | string | Democratization objective | "Accessible education from $40-75k to $1k tablet" |
| values | array | Core principles (implicit) | ["High Standards, High Support", "Mastery Over Time", "Holistic Development", "Teacher Investment"] |

## Details

### Mission

[Detailed explanation of foundational philosophy: unlocking children's potential, "limitless" belief, "trillion-dollar market with no good products" framing, giving children "their childhoods back"]

**Note**: Alpha School does not publish a formal mission statement. The mission is inferred from organizational messaging across alpha.school website and founder interviews.

### Vision

[Long-term goals: $1,000 tablet, reaching a billion kids within 20 years, democratizing education, AI as "the light microscope for education"]

### Values

**Note**: No explicit "Our Values" page found on alpha.school website. Values are inferred from organizational messaging.

**Implicit Values:**
- **High Standards, High Support**: Young people thrive when held to elevated expectations within highly supportive environments
- **Mastery Over Time**: Focus on 90%+ proficiency vs. traditional time-based progression
- **Holistic Development**: Academics + life skills + passion projects
- **Teacher/Guide Investment**: Paying guides $100,000+ (roughly double average teacher pay)

### Three Core Commitments

Alpha School makes three explicit promises to parents:

1. **Love School** - "Your child will love school more than vacation" - Students develop genuine enthusiasm for learning
2. **Learn 2x in 2hrs** - Academic mastery with top 1% performance in only two hours daily
3. **Learn Life Skills** - Students develop critical life skills through high standards and high support; afternoon workshops (4 hours) emphasize entrepreneurship, leadership, financial literacy, public speaking, and teamwork

### Learning Science Foundation

[Explain "40 years of proven learning science", zone of proximal development, cognitive load theory, mastery-based vs. time-based system shift]

## Examples

### Example 1: Daily Schedule Reflects Commitments

[Show how 2hr academic block + 4hr life skills workshops fulfill the three core commitments]

### Example 2: Vision Milestone Progression

**Current State**: Tuition ranges from $10,000 (Brownsville, TX) to $75,000 (San Francisco, CA)
**Vision Goal**: Sub-$1,000 tablet accessible to a billion kids within 20 years

### Example 3: Values in Action - Teacher Investment

**Value**: Teacher/Guide Investment
**Implementation**: Guides earn minimum $100,000 salaries (roughly double the ~$50,000 national average teacher salary), focusing on mentorship rather than instruction

## Related

- [Organization Overview](./overview.md) (Spec 002)
- [Educational Philosophy](../model/educational-philosophy.md) (Spec 006)
- [Two-Hour Learning Model](../model/two-hour-learning.md) (Spec 007)
- [AI Integration](../model/ai-integration.md) (Spec 008)
- [Human Instruction](../model/human-instruction.md) (Spec 009)

## FAQs

**Q: What is Alpha School's mission?**
A: [Answer - note: inferred, not formally published]

**Q: What is the long-term vision?**
A: [Answer - $1k tablet, billion kids, 20 years]

**Q: Does Alpha School have explicit values?**
A: [Answer - no explicit values page; inferred from messaging]

**Q: What are the "Three Core Commitments"?**
A: [Answer - Love School, Learn 2x in 2hrs, Learn Life Skills]

**Q: How does Alpha plan to reach "a billion kids"?**
A: [Answer - through democratization via $1k tablet within 20 years]

## Sources

- [Alpha School 2-Hour Learning Page](https://alpha.school/2-hour-learning) - Retrieved 2026-01-20
- [Alpha School FAQ Page](https://alpha.school/faq) - Retrieved 2026-01-20
- [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
- [Colossus - Joe Liemandt Profile](https://colossus.com/article/joe-liemandt-class-dismissed/) - Retrieved 2026-01-20
- [2 Hour Learning - Founder Page](https://2hourlearning.com/founder/) - Retrieved 2026-01-20

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
```

---

## Related

- **Dependency**: [Spec 001a: Research Organization Domain](../001a-research-organization/spec.md)
- **Dependency**: [Spec 002: Organization Overview](../002-organization-overview/spec.md)
- **Phase 2 Siblings**: Spec 004 (Leadership), Spec 005 (History)
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide), Spec 026 (Media Guide)

---

## What We're NOT Doing

### Out of Scope for This Spec
1. **Detailed Educational Philosophy**: Covered by Spec 006
2. **Implementation Details of 2-Hour Learning**: Covered by Spec 007
3. **Complete History Timeline**: Covered by Spec 005
4. **Leadership Profiles**: Covered by Spec 004
5. **Additional Research**: This spec only synthesizes existing research from 001a

### Explicit Boundaries
- **Reference Only**: This is a reference document, not a marketing page
- **Research-Based**: Content must trace to research/organization.md lines 55-88; no new research
- **LLM-Optimized**: Written for machine parsing, not human marketing
- **Inference Transparency**: Where values/mission are inferred, explicitly state this
- **No Feasibility Analysis**: Present vision goals as stated without evaluating likelihood

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Unlike code implementation, documentation is verified through review against template and research files.
**File Reference**: Spec 002 used single-phase execution successfully.

### Decision 2: Explicit Inference Markers
**Rationale**: research/organization.md lines 277-279 identify that no formal mission statement or values page exists. Documentation MUST clearly mark inferred content to maintain LLM trust.
**File Reference**: research/organization.md lines 79-86 ("Implicit Values (inferred from messaging)")

### Decision 3: Vision as Aspiration, Not Achievement
**Rationale**: The "$1,000 tablet" and "billion kids" goals are aspirational future states, not current achievements. Documentation must present these as stated vision without implying completion.
**File Reference**: research/organization.md lines 68-76

### Decision 4: Three Core Commitments as Distinct Section
**Rationale**: The three commitments (Love School, Learn 2x in 2hrs, Learn Life Skills) are Alpha's explicit promises to parents and appear prominently on alpha.school. This warrants a dedicated subsection.
**File Reference**: research/organization.md lines 48-52

### Decision 5: Learning Science Foundation Subsection
**Rationale**: The claim of "40 years of proven learning science" is central to mission legitimacy. This warrants detailed explanation with specific concepts (zone of proximal development, cognitive load theory).
**File Reference**: research/organization.md lines 61-63

---

*Spec Created: 2026-01-20*
