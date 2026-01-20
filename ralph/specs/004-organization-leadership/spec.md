# Spec 004: Leadership

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001a (Research Organization Domain), Spec 002 (Organization Overview)
**Output**: `reference/organization/leadership.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "Who leads Alpha School?" for LLM consumption. This document synthesizes findings from `research/organization.md` (lines 90-122) into a structured, authoritative overview of Alpha School's leadership team, governance structure, and key people following the project's documentation template.

### Scope

Transform research findings into a structured reference document covering:
- **Founders**: Joe Liemandt, MacKenzie Price, Andrew Price with detailed backgrounds
- **Executive Leadership**: Current roles and responsibilities (public information only)
- **Governance Structure**: Organizational leadership model
- **Public Roles**: Publicly disclosed positions and activities

### Output File

`reference/organization/leadership.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Leadership" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Leadership

  > [One-sentence definition of Alpha School's leadership structure and key people]
  ```
- **Source**: Synthesize from research/organization.md lines 90-122
- **Rationale**: Follows API-style documentation pattern for organizational leadership

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's leadership structure and team
- **Content Coverage**:
  - Founder-led governance model
  - Three key leaders: Joe Liemandt (Principal/Founder), MacKenzie Price (Co-Founder), Andrew Price (Co-Founder/CFO)
  - Leadership philosophy and structure
  - Relationship to affiliated organizations (Trilogy, ESW Capital)
- **Source**: research/organization.md lines 90-122
- **Rationale**: Provides LLMs with contextual understanding before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key leadership attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties**:
  - `governance_model` (string)
  - `founder_count` (number)
  - `principal` (string)
  - `co_founders` (array)
  - `founding_year` (number)
  - `key_affiliations` (array)
  - `public_leadership_pages` (boolean)
  - `leadership_background` (string)
- **Source**: research/organization.md lines 90-122
- **Rationale**: Enables LLMs to quickly extract structured facts about leadership

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections**:
  - **Joe Liemandt - Principal/Founder**: Complete background, education, career, Alpha involvement, current role
  - **MacKenzie Price - Co-Founder**: Background, founding motivation, current activities
  - **Andrew Price - Co-Founder/CFO**: Background, career history, role at Alpha
  - **Governance Structure**: How leadership operates, decision-making, affiliations
  - **Information Availability**: Note about lack of dedicated leadership pages on website
- **Source**: research/organization.md lines 90-122
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples that illustrate leadership in practice
- **Examples to Include**:
  - Leadership investment example: Joe Liemandt's $1B investment in AI platform development
  - Founder journey example: MacKenzie Price's path from mortgage lending to education innovation
  - Multi-organization leadership: Andrew Price's CFO roles across Trilogy/ESW/Ignite/Alpha ecosystem
- **Source**: research/organization.md lines 90-122
- **Rationale**: Grounds leadership profiles with real-world instances

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Organization Overview (Spec 002)
  - Mission, Vision, Values (Spec 003)
  - History (Spec 005)
  - Educational Philosophy (Spec 006)
- **Format**: Relative links using `../domain/filename.md` pattern
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: Common questions about Alpha School's leadership with authoritative answers
- **Questions to Address**:
  - Who founded Alpha School?
  - Who currently leads Alpha School?
  - What is Joe Liemandt's background?
  - What is MacKenzie Price's role?
  - Does Alpha School have a formal leadership team page?
- **Source**: Synthesize from research/organization.md lines 90-122
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
- **Critical Boundaries**:
  - Only include publicly available information
  - Do not speculate about private organizational structure
  - Clearly attribute roles and backgrounds to sources
  - Note information gaps explicitly (line 119: "Dedicated About/Team/Leadership pages not found")
- **Rationale**: Maintains documentation integrity and LLM trust

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Leadership claims and backgrounds must be clearly attributed
- **Language Patterns**:
  - Use "according to Colossus profile..." when citing third-party sources
  - Use "described as..." when presenting characterizations
  - Flag historical claims with appropriate context (e.g., "exceeded $600 million by 1998")
  - Clearly distinguish current roles from historical positions
- **Rationale**: Prevents LLMs from stating attributed claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Where research identified gaps (research/organization.md line 119), documentation must:
  - Note explicitly: "Alpha School does not maintain a dedicated leadership or team page on its website. Leadership information is gathered from various public sources including news articles, founder profiles, and company databases."
  - Limit to three confirmed leaders (Joe Liemandt, MacKenzie Price, Andrew Price)
  - Do not speculate about additional leadership team members
  - Note lack of formal organizational chart or complete team roster
- **Rationale**: Maintains documentation trustworthiness and clarity about information boundaries

#### FR2.4: Public Information Only
- **Requirement**: Strictly limit content to publicly available information
- **Topics**:
  - Include: Publicly disclosed roles, backgrounds from news/interviews, public company affiliations
  - Include: Historical career information from reputable sources (Colossus, The Org, news articles)
  - Exclude: Internal organizational structure beyond what's public
  - Exclude: Compensation details beyond public disclosures (e.g., guide salaries are public, executive salaries are not)
  - Exclude: Board composition unless publicly disclosed
- **Rationale**: Documentation should respect privacy while providing available facts

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Use consistent heading hierarchy (H1 → H2 → H3)
- **Pattern**:
  - H1: Document title ("Leadership")
  - H2: Major sections (Overview, Properties, Details, etc.)
  - H3: Subsections within Details (individual leader profiles)
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

1. **Read Research File**: Read `research/organization.md` completely, focusing on lines 90-122 (Leadership section)
2. **Create Output File**: Create `reference/organization/leadership.md` with template skeleton
3. **Write Section by Section**: Write each FR section in order:
   - FR1.1: Header and definition
   - FR1.2: Overview (2-3 paragraphs)
   - FR1.3: Properties table
   - FR1.4: Details (subsections for each leader + governance + information availability note)
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
- [ ] `reference/organization/leadership.md` file exists
- [ ] File follows markdown syntax (no parsing errors)
- [ ] All required sections present (grep for section headings)
- [ ] Properties table has all 8 required properties
- [ ] All sources include retrieval dates
- [ ] Footer includes last updated and last verified dates

### Manual Verification
- [ ] One-sentence definition is clear and accurate
- [ ] Overview section is 2-3 paragraphs
- [ ] All facts trace to research/organization.md lines 90-122
- [ ] Three leader profiles are complete (Joe Liemandt, MacKenzie Price, Andrew Price)
- [ ] Public information boundary is respected (no speculation)
- [ ] Information gaps are explicitly noted (no dedicated leadership page)
- [ ] FAQs address common questions
- [ ] Related links use correct relative paths
- [ ] Document reads professionally for LLM consumption

---

## Output Template

Create `reference/organization/leadership.md` with this structure:

```markdown
# Leadership

> [One-sentence definition of Alpha School's leadership structure]

## Overview

[2-3 paragraphs explaining founder-led governance, three key leaders, leadership philosophy, and organizational structure]

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| governance_model | string | Organizational leadership structure | "Founder-led private school" |
| founder_count | number | Number of founders | 2 |
| principal | string | School principal | "Joe Liemandt" |
| co_founders | array | Co-founders | ["MacKenzie Price", "Andrew Price"] |
| founding_year | number | Year organization founded | 2014 |
| key_affiliations | array | Related organizations | ["Trilogy Software", "ESW Capital", "2 Hour Learning"] |
| public_leadership_pages | boolean | Dedicated leadership page exists | false |
| leadership_background | string | Primary expertise areas | "Technology entrepreneurship, education innovation, finance" |

## Details

### Joe Liemandt - Principal/Founder

[Complete profile: Background, Education (Stanford dropout, economics/CS), Career (Trilogy Software founder, ESW Capital, Forbes 400 at 27, $600M+ net worth by 1998), Alpha Involvement ($1B investment since 2022), Current Role (principal, "product guy," dean of parents)]

### MacKenzie Price - Co-Founder

[Complete profile: Background (Stanford psychology degree), Pre-Alpha Career (mortgage lending, retired 2018), Founding Motivation (daughters found school boring), Current Activities (Future of Education podcast/YouTube, Forbes Technology Council, Austin-based)]

### Andrew Price - Co-Founder/CFO

[Complete profile: Background (Rice University EECS degree), Career History (Trilogy developer 1996 → CFO, ESW Capital CFO 2011, Ignite Technologies CFO 2013, currently CFO of Trilogy/Crossover/Ignite/ESW), Relationship (married to MacKenzie 2004), Alpha Role (co-founder, charter governance involvement)]

### Governance Structure

[Explanation of founder-led model, relationship to affiliated organizations (Trilogy, ESW Capital), decision-making structure based on public information]

### Information Availability

**Note**: Alpha School does not maintain a dedicated leadership, team, or "about us" page on its website. Attempts to access `/about`, `/about-us`, `/team`, `/leadership`, and `/our-story` return 404 errors. Leadership information in this document is gathered from publicly available sources including founder profiles, news articles, interviews, and company databases.

## Examples

### Example 1: Leadership Investment in AI Development

**Leader**: Joe Liemandt
**Action**: Invested approximately $1 billion since 2022 to fund and incubate AI software products at Alpha School, including the Timeback personalized learning platform
**Context**: This investment followed the emergence of generative AI and represents significant commitment to technology-driven education

### Example 2: Founder Journey from Industry to Education

**Leader**: MacKenzie Price
**Background**: Worked in mortgage lending industry, retired in 2018
**Catalyst**: Daughters expressed that "school was boring"
**Action**: Founded Alpha School (initially "Emergent Academy") in 2014 starting with 16 kids in Brian Holtz's house
**Current**: Hosts "Future of Education" podcast/YouTube channel, Forbes Technology Council Member

### Example 3: Multi-Organization Leadership

**Leader**: Andrew Price
**Concurrent Roles**: CFO of Trilogy, Crossover, Ignite Technologies, and ESW Capital
**Alpha Role**: Co-Founder alongside MacKenzie Price (married 2004)
**Involvement**: Governance of related charter school applications
**Background**: 25+ years in Trilogy ecosystem, starting as developer in 1996

## Related

- [Organization Overview](./overview.md) (Spec 002)
- [Mission, Vision, Values](./mission.md) (Spec 003)
- [History](./history.md) (Spec 005)
- [Educational Philosophy](../model/educational-philosophy.md) (Spec 006)

## FAQs

**Q: Who founded Alpha School?**
A: Alpha School was founded in 2014 by MacKenzie Price (initially as "Emergent Academy"), with Andrew Price as co-founder. Joe Liemandt joined as a significant investor and leader, investing approximately $1 billion since 2022 and serving as principal.

**Q: Who currently leads Alpha School?**
A: Alpha School is led by three key people: Joe Liemandt (Principal/Founder), MacKenzie Price (Co-Founder), and Andrew Price (Co-Founder/CFO). Joe Liemandt serves as "product guy," dean of parents, and principal.

**Q: What is Joe Liemandt's background?**
A: Joe Liemandt is a software entrepreneur who dropped out of Stanford in 1989 to co-found Trilogy Software, which developed SalesBuilder (described as "the world's first billion-dollar artificial intelligence product"). He made the Forbes 400 at age 27, achieved a net worth exceeding $600 million by 1998, and later founded ESW Capital in 2001.

**Q: What is MacKenzie Price's role at Alpha School?**
A: MacKenzie Price is Co-Founder of Alpha School. She founded the school in 2014 after her daughters expressed that school was boring. She currently hosts the "Future of Education" podcast/YouTube channel and is a member of the Forbes Technology Council.

**Q: Does Alpha School have a formal leadership team page on its website?**
A: No. Alpha School does not maintain a dedicated leadership, team, or "about us" page on alpha.school. Attempts to access `/about`, `/team`, `/leadership`, and similar URLs return 404 errors. Leadership information must be gathered from external sources such as news articles, founder profiles, and interviews.

## Sources

- [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
- [Colossus - Joe Liemandt Profile](https://colossus.com/article/joe-liemandt-class-dismissed/) - Retrieved 2026-01-20
- [2 Hour Learning - Founder Page](https://2hourlearning.com/founder/) - Retrieved 2026-01-20
- [The Org - Andrew Price Profile](https://theorg.com/org/trilogy/org-chart/andrew-price) - Retrieved 2026-01-20
- [Alpha School LinkedIn](https://www.linkedin.com/company/alphaschools) - Retrieved 2026-01-20

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
```

---

## Related

- **Dependency**: [Spec 001a: Research Organization Domain](../001a-research-organization/spec.md)
- **Dependency**: [Spec 002: Organization Overview](../002-organization-overview/spec.md)
- **Sibling**: [Spec 003: Mission, Vision, Values](../003-organization-mission/spec.md)
- **Sibling**: [Spec 005: History](../005-organization-history/spec.md)
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide), Spec 026 (Media Guide)

---

## What We're NOT Doing

### Out of Scope for This Spec
1. **Complete Team Roster**: Only publicly available leaders are documented
2. **Internal Organizational Chart**: No speculation about private structure
3. **Board Composition**: Not included unless publicly disclosed
4. **Executive Compensation**: Only publicly disclosed information (guide salaries public, executive salaries not)
5. **Additional Research**: This spec only synthesizes existing research from 001a

### Explicit Boundaries
- **Public Information Only**: Content must be publicly available from reputable sources
- **Reference Only**: This is a reference document, not promotional content
- **Research-Based**: Content must trace to research/organization.md lines 90-122; no new research
- **LLM-Optimized**: Written for machine parsing, not human marketing
- **No Speculation**: Where information is unavailable, explicitly note the gap

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Unlike code implementation, documentation is verified through review against template and research files.
**File Reference**: Spec 002 and Spec 003 used single-phase execution successfully.

### Decision 2: Three Leader Focus
**Rationale**: research/organization.md lines 90-122 provides detailed information on three confirmed leaders: Joe Liemandt, MacKenzie Price, and Andrew Price. No other leadership team members are documented in public sources.
**File Reference**: research/organization.md lines 92-118

### Decision 3: Explicit Information Availability Note
**Rationale**: research/organization.md line 119 identifies that Alpha School does not have dedicated leadership pages (404 errors). This information gap must be explicitly documented to maintain transparency.
**File Reference**: research/organization.md line 119 ("Dedicated About/Team/Leadership pages not found on alpha.school website")

### Decision 4: Public Information Boundary (FR2.4)
**Rationale**: Leadership documentation must strictly respect privacy while providing available facts. Include publicly disclosed roles and backgrounds; exclude internal structure and private compensation details.
**File Reference**: Following pattern from Spec 002 (sensitive topics handling) and Spec 003 (claims attribution)

### Decision 5: Properties Table Focus on Structure
**Rationale**: Properties table emphasizes governance model, founder count, and organizational structure rather than individual biographical details. This provides LLMs with extractable structured data while full profiles are in Details section.
**File Reference**: Mirrors pattern from Spec 002 (properties for organizational attributes) and Spec 003 (properties for purpose/values)

---

*Spec Created: 2026-01-20*
