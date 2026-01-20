# Spec 005: History

**Status**: 📋 Planned
**Priority**: Medium
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001a (Research Organization Domain), Spec 002 (Organization Overview)
**Output**: `reference/organization/history.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What is Alpha School's history?" for LLM consumption. This document synthesizes findings from `research/organization.md` (lines 123-219) into a structured, authoritative overview of Alpha School's timeline, founding story, and key milestones following the project's documentation template.

### Scope

Transform research findings into a structured reference document covering:
- **Founding Story**: MacKenzie Price's founding motivation, partnership with Brian Holtz, starting in a house with 16 kids
- **Timeline**: Key milestones from 2014 founding through 2025 expansion
- **Evolution**: From "Emergent Academy" microschool to national AI-powered school network
- **Platform Development**: AI investment and Timeback platform development
- **Charter School Initiatives**: Applications and outcomes in multiple states
- **Growth**: Geographic expansion and program development

### Output File

`reference/organization/history.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "History" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # History

  > [One-sentence definition summarizing Alpha School's evolution from founding to present]
  ```
- **Source**: Synthesize from research/organization.md lines 123-219
- **Rationale**: Follows API-style documentation pattern for organizational history

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's historical arc
- **Content Coverage**:
  - Origin story: MacKenzie Price's founding motivation (2014)
  - Early days: Starting in Brian Holtz's house with 16 kids
  - Evolution: From Acton Academy branch to independent AI-powered school network
  - Major turning points: Joe Liemandt's $1B AI investment (2022), first graduating class (2025)
  - Current state: 17+ campuses across 8 states with continued expansion
- **Source**: research/organization.md lines 123-219
- **Rationale**: Provides LLMs with contextual understanding before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key historical attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties**:
  - `original_name` (string)
  - `founding_year` (number)
  - `first_campus_year` (number)
  - `founding_location` (string)
  - `initial_student_count` (number)
  - `founding_inspiration` (string)
  - `original_model` (string)
  - `ai_investment_year` (number)
  - `first_graduating_class` (number)
  - `expansion_timeline` (string)
- **Source**: research/organization.md lines 123-146
- **Rationale**: Enables LLMs to quickly extract structured facts about Alpha School's history

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections**:
  - **Founding (2014)**: MacKenzie Price's motivation, partnership with Brian Holtz, "Emergent Academy" name, Acton Academy connection, starting with 16 kids in a house
  - **Early Model (2014-2016)**: Adaptive app usage (Khan Academy, ALEKS, Math Academy, etc.), self-paced learning, afternoon activities ("lemonade stand wars", "Hero's Journey performances"), formal campus opening 2016
  - **AI Investment & Platform Development (2022)**: Joe Liemandt's ~$1B investment, Timeback platform, Incept LLM, vision monitoring, integration with IXL, Khan Academy, Trilogy Software
  - **Key Milestones (2014-2025)**: Chronological list of major events
  - **Charter School Initiatives (2025)**: Applications to PA, TX, UT, AR, NC (all rejected), Arizona partnership (approved), Pennsylvania DoE rejection reasoning
  - **Geographic Expansion (2025)**: New campus launches, San Francisco as most expensive ($75k), diverse market strategy ($10k-$75k range)
- **Source**: research/organization.md lines 123-219
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples that illustrate historical moments
- **Examples to Include**:
  - Origin story example: MacKenzie Price's frustration with "steering the Titanic" comment, founding school for her daughters
  - Evolution example: From 16 kids using Khan Academy in house to AI platform serving 155+ students per campus
  - Expansion strategy example: Geographic diversity (Brownsville TX $10k, San Francisco CA $75k)
- **Source**: research/organization.md lines 123-219
- **Rationale**: Grounds historical narrative with real-world instances

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Organization Overview (Spec 002)
  - Leadership (Spec 004)
  - Educational Philosophy (Spec 006)
  - AI Integration (Spec 008)
  - Locations (Spec 021)
- **Format**: Relative links using `../domain/filename.md` pattern
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: Common questions about Alpha School's history with authoritative answers
- **Questions to Address**:
  - When was Alpha School founded?
  - Who founded Alpha School?
  - What was the original name?
  - How did Alpha School start?
  - What was the major AI investment?
  - What happened with charter school applications?
- **Source**: Synthesize from research/organization.md lines 123-219
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
  - Timeline events must be accurately dated
  - Charter school outcomes must be clearly stated (rejections vs. approval)
  - AI investment amount (~$1B) should be attributed as approximate
  - First graduating class details (11 of 12 to four-year universities) must be accurate
- **Rationale**: Maintains documentation integrity and LLM trust

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Historical claims must be clearly attributed when necessary
- **Language Patterns**:
  - Use "according to sources..." when citing third-party reports
  - Use "approximately $1 billion" for investment amount (not exact figure)
  - Clearly state charter rejections as facts: "Pennsylvania Department of Education denied..."
  - Distinguish between origin story narrative and documented facts
- **Rationale**: Prevents LLMs from stating attributed claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Where research identified gaps, documentation must:
  - Note gaps explicitly where relevant (e.g., exact enrollment numbers over time not public)
  - Do not speculate about undocumented periods
  - Be clear about what is known vs. inferred
  - Note sensitive topics neutrally (charter rejections, criticism of "untested" model)
- **Rationale**: Maintains documentation trustworthiness and clarity about information boundaries

#### FR2.4: Neutral Language for Sensitive Topics
- **Requirement**: Handle potentially controversial elements with neutral, factual language
- **Topics**:
  - Charter school rejections: State facts without defending or criticizing
  - Pennsylvania DoE's "untested model" criticism: Quote directly, no editorial commentary
  - Evolution from Acton Academy: Present as factual progression, not critique of either model
  - AI investment timing: Note relationship to generative AI emergence without hype
- **Rationale**: Documentation should be authoritative and balanced

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Use consistent heading hierarchy (H1 → H2 → H3)
- **Pattern**:
  - H1: Document title ("History")
  - H2: Major sections (Overview, Properties, Details, etc.)
  - H3: Subsections within Details (Founding, Early Model, AI Investment, etc.)
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

1. **Read Research File**: Read `research/organization.md` completely, focusing on lines 123-219 (History section)
2. **Create Output File**: Create `reference/organization/history.md` with template skeleton
3. **Write Section by Section**: Write each FR section in order:
   - FR1.1: Header and definition
   - FR1.2: Overview (2-3 paragraphs)
   - FR1.3: Properties table
   - FR1.4: Details (subsections for founding, early model, AI investment, milestones, charter initiatives, expansion)
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
- [ ] `reference/organization/history.md` file exists
- [ ] File follows markdown syntax (no parsing errors)
- [ ] All required sections present (grep for section headings)
- [ ] Properties table has all 10 required properties
- [ ] All sources include retrieval dates
- [ ] Footer includes last updated and last verified dates

### Manual Verification
- [ ] One-sentence definition is clear and accurate
- [ ] Overview section is 2-3 paragraphs
- [ ] All facts trace to research/organization.md lines 123-219
- [ ] Timeline is chronologically accurate (2014-2025)
- [ ] Charter school outcomes are clearly stated
- [ ] Sensitive topics handled with neutral language
- [ ] FAQs address common questions
- [ ] Related links use correct relative paths
- [ ] Document reads professionally for LLM consumption

---

## Output Template

Create `reference/organization/history.md` with this structure:

```markdown
# History

> [One-sentence definition of Alpha School's historical evolution]

## Overview

[2-3 paragraphs explaining founding story, evolution from microschool to AI-powered network, major turning points, and current state]

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| original_name | string | School's founding name | "Emergent Academy" |
| founding_year | number | Year school was founded | 2014 |
| first_campus_year | number | Year first formal campus opened | 2016 |
| founding_location | string | Where school originated | "Brian Holtz's house, Austin area" |
| initial_student_count | number | Number of students at founding | 16 |
| founding_inspiration | string | Catalyst for founding | "Daughters found school boring" |
| original_model | string | Early educational approach | "Acton Academy microschool branch using adaptive apps" |
| ai_investment_year | number | Year of major AI platform investment | 2022 |
| first_graduating_class | number | Year of first senior class graduation | 2025 |
| expansion_timeline | string | Growth trajectory | "2014 (16 students) → 2025 (17+ campuses, 8 states)" |

## Details

### Founding (2014)

[MacKenzie Price's motivation (daughters bored), frustration with "steering the Titanic" comment, partnership with Brian Holtz (Acton Academy parent), original name "Emergent Academy", starting with 16 kids in house including Price daughters (3rd and 1st grade)]

### Early Model (2014-2016)

[Branched from Acton Academy franchise, adaptive app usage (Khan Academy, ALEKS, Math Academy, Newsela, DreamBox), personalized self-paced learning, afternoon activities ("neighborhood lemonade stand wars", "Hero's Journey performances"), formal campus establishment in 2016]

### AI Investment & Platform Development (2022)

[Following generative AI emergence, Joe Liemandt invested ~$1 billion to develop AI platforms. Key developments: Timeback (personalized learning platform), Incept (custom LLM for curriculum generation), vision monitoring (tracks engagement and "anti-patterns"), integration with IXL, Khan Academy, Trilogy Software, and in-house engineering]

### Key Milestones (2014-2025)

**2014:**
- MacKenzie Price founded "Emergent Academy" for her daughters
- Partnered with Brian Holtz, Acton Academy parent
- Started in Brian Holtz's house with 16 kids

**2016:**
- Original campus formally established

**2022:**
- Joe Liemandt invested approximately $1 billion following generative AI emergence
- Development of Timeback platform began

**2025:**
- First class of seniors graduated (11 of 12 graduates went to four-year universities)
- Alpha High opened year-round at students' request
- New campus launches: Raleigh NC (K-3), NYC Alpha Anywhere Center (K-8), Santa Barbara CA, Chantilly VA, Charlotte NC
- San Francisco campus opened as city's most expensive private school ($75,000/year)
- Multiple charter school applications submitted nationwide

### Charter School Initiatives (2025)

Alpha School (through related 2 Hour Learning initiative) applied to open public-school charter networks in multiple states:

**Rejected Applications:**
- Pennsylvania: Department of Education denied, stating "The artificial intelligence instructional model being proposed by this school is untested and fails to demonstrate how the tools, methods and providers would ensure alignment to Pennsylvania academic standards."
- Texas: Application rejected
- Utah: Application rejected
- Arkansas: Application rejected
- North Carolina: Application rejected

**Approved Partnership:**
- Arizona: Agreed to partner with Alpha

**Media Coverage:**
- New York Times (July 2025) framed Alpha as national model for AI in education while reporting on charter rejections
- Coverage highlighted tension between innovation and regulatory approval

### Geographic Expansion (2025)

Diverse market strategy with significant tuition range:
- **Brownsville, TX**: $10,000/year (lowest)
- **San Francisco, CA**: $75,000/year (highest, most expensive in city)
- **Austin, TX**: $40,000/year (flagship)
- Multiple new campuses across AZ, CA, FL, NC, NY, TX, VA
- Announced Fall 2026 openings: The Woodlands TX, Dorado PR, Palo Alto CA, Santa Monica CA, Chicago IL

## Examples

### Example 1: Origin Story - From Frustration to Founding

**Catalyst**: MacKenzie Price's daughters (3rd and 1st grade) expressed that "school was boring"
**Frustration**: When told changing the education system was "like trying to steer the Titanic," Price decided to start her own school
**Action**: Founded "Emergent Academy" in 2014, partnered with Brian Holtz (Acton Academy parent), started with 16 kids in Holtz's house
**Model**: Used adaptive apps (Khan Academy, ALEKS, Math Academy) for personalized morning academics, afternoons for activities like "neighborhood lemonade stand wars"

### Example 2: Evolution from Microschool to AI Platform

**2014 Starting Point**: 16 kids in house using off-the-shelf adaptive learning apps (Khan Academy, ALEKS, DreamBox)
**2022 Turning Point**: Joe Liemandt invested ~$1 billion following generative AI emergence
**2022-2025 Development**: Custom AI platform (Timeback), proprietary LLM (Incept), vision monitoring, integration with multiple learning tools
**2025 Current State**: 17+ campuses, 155+ students per flagship campus, proprietary AI platform, first graduating class (11 of 12 to four-year universities)

### Example 3: Expansion Strategy - Geographic and Economic Diversity

**Low-Cost Market**: Brownsville, TX - $10,000/year tuition
**High-Cost Market**: San Francisco, CA - $75,000/year tuition (most expensive in city)
**Flagship**: Austin, TX - $40,000/year tuition
**Strategy**: Serving diverse markets simultaneously while maintaining same educational model
**Vision**: Long-term goal of $1,000 tablet reaching billion kids within 20 years

## Related

- [Organization Overview](./overview.md) (Spec 002)
- [Leadership](./leadership.md) (Spec 004)
- [Educational Philosophy](../model/educational-philosophy.md) (Spec 006)
- [AI Integration](../model/ai-integration.md) (Spec 008)
- [Locations Overview](../locations/overview.md) (Spec 021)

## FAQs

**Q: When was Alpha School founded?**
A: Alpha School was founded in 2014 by MacKenzie Price. It was originally called "Emergent Academy" and started in Brian Holtz's house with 16 kids. The first formal campus opened in 2016.

**Q: Who founded Alpha School and why?**
A: MacKenzie Price founded Alpha School in 2014 after her daughters (then in 3rd and 1st grade) expressed that school was boring. When told that changing the existing education system was "like trying to steer the Titanic," she decided to start her own school.

**Q: What was Alpha School's original name?**
A: The school was originally called "Emergent Academy" when founded in 2014. It branched off from Acton Academy, a franchise of microschools.

**Q: How did Alpha School start?**
A: Alpha School started in 2014 in Brian Holtz's house with 16 kids, including MacKenzie Price's two daughters. The school used adaptive learning apps (Khan Academy, ALEKS, Math Academy, Newsela, DreamBox) for personalized, self-paced morning academics, with afternoons dedicated to activities like "neighborhood lemonade stand wars" and "Hero's Journey performances."

**Q: What was the major AI investment in Alpha School?**
A: In 2022, following the emergence of generative AI, Joe Liemandt invested approximately $1 billion to develop AI-powered learning platforms. This investment funded development of Timeback (personalized learning platform), Incept (custom LLM for curriculum generation), and vision monitoring technology.

**Q: What happened with Alpha School's charter school applications?**
A: In 2025, Alpha School (through related 2 Hour Learning initiative) applied to open public-school charter networks in multiple states. Pennsylvania, Texas, Utah, Arkansas, and North Carolina all rejected the applications. Pennsylvania's Department of Education specifically cited the AI model as "untested" and failing to demonstrate alignment with state academic standards. Only Arizona agreed to partner with Alpha.

## Sources

- [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
- [Alpha School LinkedIn](https://www.linkedin.com/company/alphaschools) - Retrieved 2026-01-20
- [2 Hour Learning - Founder Page](https://2hourlearning.com/founder/) - Retrieved 2026-01-20
- [Colossus - Joe Liemandt Profile](https://colossus.com/article/joe-liemandt-class-dismissed/) - Retrieved 2026-01-20
- [New York Times - AI in Education Coverage](Various articles) - Retrieved 2026-01-20
- [San Francisco Standard - Most Expensive School](Various articles) - Retrieved 2026-01-20

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
```

---

## Related

- **Dependency**: [Spec 001a: Research Organization Domain](../001a-research-organization/spec.md)
- **Dependency**: [Spec 002: Organization Overview](../002-organization-overview/spec.md)
- **Sibling**: [Spec 003: Mission, Vision, Values](../003-organization-mission/spec.md)
- **Sibling**: [Spec 004: Leadership](../004-organization-leadership/spec.md)
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide), Spec 026 (Media Guide)

---

## What We're NOT Doing

### Out of Scope for This Spec
1. **Financial Performance**: Revenue, profitability, or detailed financial history not publicly available
2. **Internal Operations History**: Changes in internal processes, staffing evolution beyond public information
3. **Detailed Curriculum Evolution**: Curriculum changes belong in Curriculum domain specs
4. **Student Outcome Trends**: Outcome data belongs in Outcomes domain specs
5. **Additional Research**: This spec only synthesizes existing research from 001a

### Explicit Boundaries
- **Public Information Only**: Content must be publicly available from reputable sources
- **Reference Only**: This is a reference document, not promotional content
- **Research-Based**: Content must trace to research/organization.md lines 123-219; no new research
- **LLM-Optimized**: Written for machine parsing, not human marketing
- **Neutral Tone**: Especially for charter rejections and criticism

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Unlike code implementation, documentation is verified through review against template and research files.
**File Reference**: Spec 002, 003, and 004 used single-phase execution successfully.

### Decision 2: Six Subsection Details Structure
**Rationale**: History naturally divides into chronological and thematic sections: Founding → Early Model → AI Investment → Milestones → Charter Initiatives → Geographic Expansion. This provides both chronological and thematic organization.
**File Reference**: research/organization.md lines 123-219 provides distinct content for each subsection.

### Decision 3: Neutral Handling of Charter Rejections
**Rationale**: Charter school rejections (5 states) and Pennsylvania DoE's criticism of "untested model" are sensitive topics. Spec requires neutral, factual presentation with direct quotes from official sources.
**File Reference**: research/organization.md lines 217-219 documents Pennsylvania DoE rejection reasoning.

### Decision 4: Properties Table Focus on Founding Facts
**Rationale**: Properties table emphasizes concrete founding facts (original_name, founding_year, initial_student_count) that LLMs can extract as structured data. Narrative history is in Details section.
**File Reference**: Mirrors pattern from Spec 002-004 (properties for structured attributes, details for narrative).

### Decision 5: Three-Example Structure
**Rationale**: Examples illustrate three key historical themes: (1) Origin story, (2) Evolution from microschool to AI platform, (3) Expansion strategy. This captures Alpha School's transformation arc.
**File Reference**: research/organization.md provides rich source material for each thematic example.

---

*Spec Created: 2026-01-20*
