# Spec 002: Organization Overview

**Status**: ✅ Complete
**Priority**: Critical
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001a (Research Organization Domain)
**Output**: `reference/organization/overview.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is Alpha School?" for LLM consumption. This document synthesizes findings from `research/organization.md` into a structured, authoritative overview following the project's documentation template.

### Scope

Transform research findings into a structured reference document covering:
- **Organization Name and Type**: What Alpha School is (legal entity, structure)
- **Core Educational Model**: The "2 Hour Learning" model at a high level
- **Geographic Presence**: Locations, scale, reach
- **Founding and Background**: Essential history and context
- **Key Messaging**: Taglines, claims, positioning

### Output File

`reference/organization/overview.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with organization name as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Alpha School

  > [One-sentence definition capturing essence]
  ```
- **Source**: Synthesize from research/organization.md lines 26-46
- **Rationale**: Follows API-style documentation pattern where each "object" has a clear definition

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining what Alpha School is
- **Content Coverage**:
  - What type of organization (private K-12 school)
  - Core educational model (2 Hour Learning)
  - Key differentiators (AI-powered, mastery-based)
  - Geographic presence and scale
- **Source**: research/organization.md lines 26-146
- **Rationale**: Provides LLMs with contextual understanding before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key organizational attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties**:
  - `name` (string)
  - `type` (string)
  - `founded` (number)
  - `headquarters` (string)
  - `educational_model` (string)
  - `grade_levels` (string)
  - `locations` (number)
  - `tuition_range` (string)
  - `key_people` (array)
- **Source**: research/organization.md (various sections)
- **Rationale**: Enables LLMs to quickly extract structured facts

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections**:
  - **Educational Model**: Explain 2 Hour Learning in detail
  - **Leadership**: Founders and key people with backgrounds
  - **History**: Founding story, milestones, evolution
  - **Geographic Presence**: Current campuses, expansion plans
  - **Affiliations**: Related entities (Trilogy, ESW Capital, 2 Hour Learning)
- **Source**: research/organization.md sections for each topic
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples that illustrate the organization
- **Examples to Include**:
  - Daily student schedule example
  - Campus location example (with tuition)
  - Leadership team example (brief profiles)
- **Source**: research/organization.md and cross-reference with research/model.md
- **Rationale**: Grounds abstract concepts with real-world instances

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Mission, Vision, Values (Spec 003)
  - Leadership (Spec 004)
  - History (Spec 005)
  - Educational Philosophy (Spec 006)
  - Two-Hour Learning Model (Spec 007)
- **Format**: Relative links using `../domain/filename.md` pattern
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: Common questions about Alpha School with authoritative answers
- **Questions to Address**:
  - What is Alpha School?
  - What is the "2 Hour Learning" model?
  - Where are Alpha School campuses located?
  - Who founded Alpha School?
  - Is Alpha School a public or private school?
- **Source**: Synthesize from research/organization.md with appropriate caveats
- **Rationale**: Anticipates common LLM queries

#### FR1.8: Sources Section
- **Requirement**: Complete source citations with retrieval dates
- **Format**: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources**: All sources from research/organization.md lines 8-20
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
- **Error Handling**: If research file conflicts exist (research/organization.md lines 290-320), document must:
  - Present the most authoritative version
  - Note conflicts in FAQ or footnote
  - Cite specific sources for each version
- **Rationale**: Maintains documentation integrity and LLM trust

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Self-reported claims must be clearly attributed to Alpha School
- **Language Patterns**:
  - Use "Alpha School reports..." or "According to Alpha School..." for unverified claims
  - Use "Independent testing shows..." only if third-party verification exists
  - Flag unverified performance claims (research/organization.md lines 38-43, 248-256)
- **Rationale**: Prevents LLMs from stating unverified claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Where research identified gaps (research/organization.md lines 273-287), documentation must:
  - Omit the topic entirely (preferred), OR
  - State "Information not publicly available" if contextually necessary
  - NOT invent, infer, or speculate
- **Rationale**: Maintains documentation trustworthiness

#### FR2.4: Sensitive Topics Handling
- **Requirement**: Handle sensitive topics (research/organization.md lines 312-318) with neutral, factual language
- **Topics**:
  - Charter school rejections: State facts without editorializing
  - Tuition costs: Present as factual data
  - Unverified claims: Attribute clearly to source
  - Monitoring technology: Describe without judgment
- **Rationale**: Documentation should inform, not advocate

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Use consistent heading hierarchy (H1 → H2 → H3)
- **Pattern**:
  - H1: Document title (organization name)
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

Unlike implementation specs, documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/organization.md` completely
2. **Create Output File**: Create `reference/organization/overview.md` with template skeleton
3. **Write Section by Section**: Write each FR section in order:
   - FR1.1: Header and definition
   - FR1.2: Overview (2-3 paragraphs)
   - FR1.3: Properties table
   - FR1.4: Details (subsections)
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
- [ ] `reference/organization/overview.md` file exists
- [ ] File follows markdown syntax (no parsing errors)
- [ ] All required sections present (grep for section headings)
- [ ] Properties table has all 9 required properties
- [ ] All sources include retrieval dates
- [ ] Footer includes last updated and last verified dates

### Manual Verification
- [ ] One-sentence definition is clear and accurate
- [ ] Overview section is 2-3 paragraphs
- [ ] All facts trace to research/organization.md
- [ ] Claims are properly attributed to Alpha School (not stated as objective facts)
- [ ] Sensitive topics use neutral language
- [ ] Information gaps are handled appropriately (omitted or noted)
- [ ] FAQs address common questions
- [ ] Related links use correct relative paths
- [ ] Document reads professionally for LLM consumption

---

## Output Template

Create `reference/organization/overview.md` with this structure:

```markdown
# Alpha School

> [One-sentence definition]

## Overview

[2-3 paragraphs]

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| name | string | Official organization name | "Alpha School" |
| type | string | Organization type | "Private K-12 School" |
| founded | number | Year founded | 2014 |
| headquarters | string | Primary location | "Austin, Texas" |
| educational_model | string | Core educational approach | "2 Hour Learning (AI-powered mastery-based)" |
| grade_levels | string | Grades served | "PreK-12" |
| locations | number | Number of campuses | 17 |
| tuition_range | string | Annual tuition range | "$10,000 - $75,000" |
| key_people | array | Founders and leadership | ["Joe Liemandt", "MacKenzie Price", "Andrew Price"] |

## Details

### Educational Model

[Explain 2 Hour Learning model]

### Leadership

[Founders and key people with backgrounds]

### History

[Founding story, milestones, evolution]

### Geographic Presence

[Current campuses, expansion plans]

### Affiliations

[Related entities: Trilogy, ESW Capital, 2 Hour Learning]

## Examples

### Example 1: Daily Student Schedule
[Concrete schedule example]

### Example 2: Campus and Tuition
[Specific campus with tuition]

### Example 3: Leadership
[Brief founder profiles]

## Related

- [Mission, Vision, Values](./mission.md) (Spec 003)
- [Leadership](./leadership.md) (Spec 004)
- [History](./history.md) (Spec 005)
- [Educational Philosophy](../model/educational-philosophy.md) (Spec 006)
- [Two-Hour Learning Model](../model/two-hour-learning.md) (Spec 007)

## FAQs

**Q: What is Alpha School?**
A: [Answer]

**Q: What is the "2 Hour Learning" model?**
A: [Answer]

**Q: Where are Alpha School campuses located?**
A: [Answer]

**Q: Who founded Alpha School?**
A: [Answer]

**Q: Is Alpha School a public or private school?**
A: [Answer]

## Sources

- [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
- [Alpha School 2-Hour Learning Page](https://alpha.school/2-hour-learning) - Retrieved 2026-01-20
- [Alpha School FAQ Page](https://alpha.school/faq) - Retrieved 2026-01-20
- [Alpha School LinkedIn](https://www.linkedin.com/company/alphaschools) - Retrieved 2026-01-20
- [Alpha School Twitter/X](https://x.com/alphaschoolatx) - Retrieved 2026-01-20
- [2 Hour Learning - Founder Page](https://2hourlearning.com/founder/) - Retrieved 2026-01-20
- [Colossus - Joe Liemandt Profile](https://colossus.com/article/joe-liemandt-class-dismissed/) - Retrieved 2026-01-20
- [Newsweek - Alpha School Article](https://www.newsweek.com/alpha-school-brownsville-ai-expanding-2063669) - Retrieved 2026-01-20
- [SF Standard - Alpha School SF](https://sfstandard.com/2025/09/19/alpha-school-ai-teacher-san-francisco/) - Retrieved 2026-01-20
- [Jacobin - AI Education Article](https://jacobin.com/2025/06/ai-education-mackenzie-price-tech) - Retrieved 2026-01-20
- [The Org - Andrew Price Profile](https://theorg.com/org/trilogy/org-chart/andrew-price) - Retrieved 2026-01-20

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
```

---

## Related

- **Dependency**: [Spec 001a: Research Organization Domain](../001a-research-organization/spec.md)
- **Phase 2 Siblings**: Spec 003 (Mission), Spec 004 (Leadership), Spec 005 (History)
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide), Spec 026 (Media Guide)

---

## What We're NOT Doing

### Out of Scope for This Spec
1. **Mission/Vision/Values Documentation**: Covered by Spec 003
2. **Detailed Leadership Profiles**: Covered by Spec 004
3. **Complete History Timeline**: Covered by Spec 005
4. **Educational Model Deep Dive**: Covered by Specs 006-010
5. **Additional Research**: This spec only synthesizes existing research from 001a

### Explicit Boundaries
- **Reference Only**: This is a reference document, not a marketing page
- **Research-Based**: Content must trace to research/organization.md; no new research
- **LLM-Optimized**: Written for machine parsing, not human marketing
- **No Speculation**: Information gaps remain gaps; do not infer or speculate

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Unlike code implementation, documentation is verified through review against template and research files.
**File Reference**: Spec 001a-001g all used single-phase execution successfully.

### Decision 2: API-Style Template Over Prose
**Rationale**: Roadmap.md (lines 136-173) explicitly defines API-style structure with Properties table. This makes documentation more LLM-parseable than narrative prose.
**File Reference**: roadmap.md lines 136-173

### Decision 3: Synthesize, Don't Duplicate
**Rationale**: Reference docs should be more concise and structured than research files. Research files are comprehensive source documentation; reference docs are curated, LLM-optimized distillations.
**File Reference**: Existing research files (320+ lines) vs. reference doc target (~150-250 lines).

### Decision 4: Handle Claims with Attribution
**Rationale**: research/organization.md lines 290-320 document sensitive topics and unverified claims. Reference docs must present these with clear attribution to avoid LLMs stating claims as facts.
**File Reference**: research/organization.md lines 312-318 (Sensitive Topics), research/outcomes.md findings on unverified claims.

### Decision 5: Link to Future Specs
**Rationale**: Even though Specs 003-005 aren't created yet, linking to them creates a documentation graph structure that LLMs can understand and navigate.
**File Reference**: roadmap.md shows all Phase 2 dependencies.

---

*Spec Created: 2026-01-20*
