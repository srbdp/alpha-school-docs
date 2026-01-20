# Spec 001: Research & Source Documentation

**Status**: 📋 Planned
**Priority**: Critical
**Effort**: Medium (~2 hours)
**Phase**: 1 (Research)
**Dependencies**: None
**Last Updated**: 2026-01-20

---

## Overview

Conduct comprehensive research to gather all publicly available information about Alpha School and create a centralized source documentation file with citations. This spec establishes the factual foundation for all subsequent documentation work in Phase 2 and Phase 3.

### Context

Before creating any reference documentation or guides, we must first gather, verify, and cite all publicly available information about Alpha School. This ensures:
- All facts in subsequent documentation have authoritative sources
- No fabricated or speculative information enters the documentation
- Clear audit trail for verification and updates
- Compliance with the "public information only" requirement from the PRD

### Architecture Position

```
[Research & Sources (this spec)] → [Reference Documentation (Phase 2)] → [Guides (Phase 3)]
```

This spec is the foundation for all subsequent work. Without verified sources, we cannot proceed with writing documentation.

---

## Functional Requirements

### FR1: Source Identification and Collection

#### FR1.1: Primary Source Research
- **Requirement**: Collect information from all official Alpha School sources
- **Sources to Research**:
  - Alpha School website (alpha.school) - all pages
  - Official social media accounts (Twitter/X, LinkedIn, YouTube, Instagram)
  - Official press releases
  - Founder interviews (public, published)
  - Official blog posts or articles
- **Output Format**: Markdown file with categorized sources
- **Rationale**: Official sources are most authoritative and lowest risk

#### FR1.2: Secondary Source Research
- **Requirement**: Collect supplementary information from reputable third parties
- **Sources to Research**:
  - News articles from reputable outlets (TechCrunch, EdSurge, local news)
  - Published reviews and testimonials
  - Public data aggregators (Crunchbase, LinkedIn company page)
  - Podcast interviews with founders/staff
  - Conference presentations (if publicly available)
- **Output Format**: Categorized by source type with credibility assessment
- **Rationale**: Provides context and independent verification

#### FR1.3: Source Metadata Collection
- **Requirement**: For each source, capture complete metadata
- **Required Fields**:
  - Source title/name
  - URL (if web-based)
  - Date published (if available)
  - Date retrieved/accessed
  - Source type (official/news/social/data aggregator)
  - Credibility level (verified/likely/requires verification)
  - Key topics covered
- **Error Handling**: Flag sources with missing metadata for manual review
- **Rationale**: Enables verification and future updates

### FR2: Information Categorization

#### FR2.1: Domain-Based Organization
- **Requirement**: Organize collected information by documentation domain
- **Categories (from roadmap)**:
  1. Organization (overview, mission, leadership, history)
  2. Model (philosophy, two-hour learning, AI integration, human instruction, daily schedule)
  3. Curriculum (overview, subjects, grade levels, assessments)
  4. Outcomes (claims, evidence, testimonials, limitations)
  5. Enrollment (process, tuition/financial aid)
  6. Locations (overview, expansion plans)
  7. Contact (contact information)
- **Output**: Organized sections in sources.md file
- **Rationale**: Aligns research with documentation structure

#### FR2.2: Fact Extraction and Attribution
- **Requirement**: Extract key facts with direct source attribution
- **Format**: Each fact includes:
  - The fact statement (clear, unambiguous)
  - Source reference (linked)
  - Date retrieved
  - Confidence level (verified/likely/unverified)
  - Direct quote or paraphrase indicator
- **Example**:
  ```markdown
  - **Fact**: Alpha School uses a "2-hour learning" model
    - **Source**: [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
    - **Confidence**: Verified (official source)
    - **Quote**: "Students complete their academic work in just 2 hours per day"
  ```
- **Rationale**: Enables fact-checking and prevents fabrication

#### FR2.3: Conflicting Information Handling
- **Requirement**: Identify and document conflicts between sources
- **Process**:
  - Flag contradictory information
  - Prioritize official sources over secondary sources
  - Note discrepancies with date context
  - Mark for stakeholder clarification if needed
- **Output**: "Conflicts to Resolve" section in sources.md
- **Rationale**: Ensures accuracy and identifies areas needing clarification

### FR3: Gap Identification

#### FR3.1: Coverage Assessment
- **Requirement**: Identify gaps in publicly available information
- **Process**: Map research findings to required documentation domains
- **Output**: "Information Gaps" section listing:
  - Topics with no public information
  - Topics with insufficient detail
  - Topics requiring stakeholder input
- **Rationale**: Clarifies scope boundaries and informs stakeholder communication

#### FR3.2: Sensitive Topic Flagging
- **Requirement**: Identify information that is public but potentially sensitive
- **Topics to Flag**:
  - Student outcomes data (verify what's appropriate to publish)
  - Pricing/tuition specifics
  - Competitive comparisons
  - Any criticism or challenges mentioned in press
- **Output**: "Sensitive Topics" section for stakeholder review
- **Rationale**: Risk management before publishing

### FR4: Documentation Output

#### FR4.1: sources.md Creation
- **Requirement**: Create comprehensive sources.md file in research/ directory
- **Structure**:
  ```markdown
  # Alpha School Research & Sources

  > Comprehensive source documentation for Alpha School LLM-readable documentation project

  **Last Updated**: YYYY-MM-DD
  **Research Completed**: YYYY-MM-DD
  **Total Sources**: [count]

  ## Overview
  [Summary of research scope and methodology]

  ## Source Categories

  ### Primary Sources (Official)
  [List all official Alpha School sources]

  ### Secondary Sources (Third-Party)
  [List reputable third-party sources]

  ## Information by Domain

  ### 1. Organization
  #### Overview
  [Facts about what Alpha School is, with citations]

  #### Mission/Vision/Values
  [Facts about mission, vision, values, with citations]

  [... continue for all domains ...]

  ## Information Gaps
  [List of domains/topics with missing information]

  ## Conflicts to Resolve
  [Any contradictory information found]

  ## Sensitive Topics
  [Topics requiring careful handling]

  ## Excluded Sources
  [Sources explicitly not used and why]

  ## Research Methodology
  [How research was conducted, tools used]

  ---
  *Research conducted: YYYY-MM-DD*
  *Researcher: [AI Agent/Human]*
  ```
- **Rationale**: Central reference for all subsequent documentation work

#### FR4.2: Source List Export
- **Requirement**: Create machine-readable source list
- **Format**: YAML file with structured source metadata
- **Location**: research/sources.yaml
- **Use Case**: Enables automated verification and update checks
- **Rationale**: Makes sources programmatically accessible

---

## Implementation Phases

### Phase 1.0: Research Execution

**Objective**: Conduct all research and gather sources

#### Task Breakdown

1. **Setup** (10 minutes):
   - Create ralph/specs/001-research-sources directory
   - Create research/ output directory structure
   - Set up sources.md template

2. **Primary Source Research** (45 minutes):
   - Research alpha.school website (all pages)
   - Review official social media (Twitter/X, LinkedIn, YouTube)
   - Search for official press releases
   - Find published founder interviews
   - Document each source with full metadata

3. **Secondary Source Research** (30 minutes):
   - Search news databases (TechCrunch, EdSurge, local Austin news)
   - Review Crunchbase and LinkedIn company page
   - Search for podcast appearances
   - Find public testimonials/reviews
   - Document each source with credibility assessment

4. **Information Extraction** (20 minutes):
   - Extract key facts for each domain category
   - Attribute each fact to specific source
   - Mark confidence levels
   - Flag any conflicts or gaps

5. **Gap Analysis** (10 minutes):
   - Map findings to documentation requirements
   - Identify missing information
   - Flag sensitive topics
   - Note excluded sources

6. **Documentation** (15 minutes):
   - Complete sources.md file
   - Create sources.yaml export
   - Add research methodology notes
   - Final review and verification

#### Tools and Resources

**Research Tools**:
- Web browser for website exploration
- WebSearch tool for finding news articles and sources
- WebFetch tool for retrieving specific pages
- Manual review for quality assurance

**Organization Tools**:
- Markdown editor for sources.md
- YAML formatter for sources.yaml

#### Success Criteria

**Automated Verification**:
- sources.md file exists in research/ directory
- All sources include required metadata (URL, date, type)
- All 7 documentation domains have at least some information
- sources.yaml is valid YAML format

**Manual Verification**:
- All official Alpha School sources are documented
- Each fact has a source citation
- Conflicts and gaps are clearly identified
- Sensitive topics are flagged for review
- Research methodology is documented

---

### Phase 1.1: Source Documentation Review

**Objective**: Review and validate source documentation for completeness

#### Review Tasks

1. **Completeness Check**:
   - Verify all 7 domains have source coverage
   - Confirm all required metadata is present
   - Check for obvious missing sources (e.g., main website)

2. **Quality Check**:
   - Verify source URLs are accessible
   - Check that dates are in correct format
   - Ensure facts are clearly stated and attributed

3. **Risk Assessment**:
   - Review sensitive topics flagging
   - Verify no excluded sources were used
   - Check for potential legal/reputation issues

4. **Stakeholder Preparation**:
   - Prepare summary of findings
   - List questions for Alpha School team
   - Note any approval needed before proceeding

#### Success Criteria

**Automated Verification**:
- All URLs in sources.md return 200 OK (or are archived)
- Date formats are consistent (YYYY-MM-DD)
- YAML structure validates

**Manual Verification**:
- Research covers all required domains
- No obvious sources are missing
- Sensitive topics are appropriately flagged
- Ready to proceed to Phase 2 documentation writing

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Markdown for Source Documentation
**Choice**: Use Markdown format for sources.md
**Rationale**: Human-readable, version-controllable, easily converts to other formats, LLM-friendly
**Impact**: All source documentation in .md format with structured headings

#### Decision 2: Domain-Based Organization
**Choice**: Organize research by the 7 documentation domains
**Rationale**: Direct alignment with Phase 2 documentation structure; easy to map research to writing
**Impact**: sources.md has sections matching reference/ directory structure

#### Decision 3: Multi-Tier Source Credibility
**Choice**: Categorize sources as verified/likely/unverified
**Rationale**: Allows inclusion of less certain information while maintaining transparency
**Impact**: All facts tagged with confidence level

#### Decision 4: Comprehensive Metadata Collection
**Choice**: Capture extensive metadata for every source
**Rationale**: Enables future verification, updates, and audit trail
**Impact**: More upfront work, but easier maintenance long-term

#### Decision 5: Web Research Agent
**Choice**: Use web-research-doc-creator agent for automated research
**Rationale**: Agent is specifically designed for web research and structured documentation
**Impact**: Faster research execution with consistent formatting

---

## Current State Analysis

### Existing Codebase Patterns

**Status**: New research phase - no existing research documentation

Based on project setup:
- Output directory: research/ (to be created)
- Documentation follows roadmap template structure
- All subsequent specs depend on this research
- Quality bar: all facts must have citations

### Dependencies

**Research Tools**:
- WebSearch - for finding Alpha School sources
- WebFetch - for retrieving specific pages
- web-research-doc-creator agent - for automated research and documentation synthesis

**Output Dependencies**:
- All Phase 2 specs (002-023) depend on completion of this spec
- Phase 3 specs (024-026) indirectly depend on this research

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Writing Documentation**: This spec only gathers sources; actual documentation writing is Phase 2
2. **Internal/Non-Public Information**: v1 is strictly public information only
3. **Competitive Analysis**: We document Alpha School, not comparisons to competitors
4. **Stakeholder Interviews**: This phase uses only published, public sources
5. **Verification Calls**: We do not contact Alpha School for verification in v1
6. **Legal Review**: Source gathering only; legal review (if needed) comes before publishing
7. **SEO Optimization**: That's part of implementation (Phase 3+)
8. **Schema Creation**: Structured data comes after documentation is written

### Explicit Boundaries

- **Research Only**: This spec ends when sources.md is complete and verified
- **No Content Creation**: We collect and cite, but don't write final documentation yet
- **Public Sources Only**: No proprietary or confidential information
- **No Speculation**: If not found in sources, mark as information gap

---

## Success Metrics

### Phase 1.0 Completion
- [ ] research/ directory created
- [ ] sources.md file created following template
- [ ] All 7 documentation domains have source coverage
- [ ] Primary sources (official) fully documented
- [ ] Secondary sources researched and categorized
- [ ] All sources include complete metadata
- [ ] Information gaps identified and documented
- [ ] Conflicts flagged for resolution
- [ ] Sensitive topics flagged for stakeholder review
- [ ] sources.yaml export created

### Phase 1.1 Completion
- [ ] All source URLs verified as accessible
- [ ] Completeness review passed
- [ ] Quality review passed
- [ ] Risk assessment complete
- [ ] No excluded sources were used
- [ ] Ready to proceed to Phase 2 (documentation writing)

### Quality Standards
- [ ] Every fact has a source citation
- [ ] Every source has retrieval date
- [ ] Source credibility levels assigned
- [ ] Research methodology documented
- [ ] Stakeholder questions prepared (if needed)

---

## Related Specifications

This spec is a dependency for all subsequent specs:

**Phase 2 Dependencies (all depend on 001)**:
- **Spec 002**: Organization overview
- **Spec 003**: Mission, vision, values
- **Spec 004**: Leadership
- **Spec 005**: History
- **Spec 006**: Educational philosophy
- ... (all Phase 2 specs)

**Phase 3 Dependencies (indirect)**:
- **Spec 024**: Parent guide
- **Spec 025**: Educator guide
- **Spec 026**: Media guide

---

## References

- **PRD Section 8**: Research Required (source types, methodology)
- **PRD Section 6.2**: Documentation Template (structure for sources.md)
- **Roadmap Phase 1**: Research & source documentation
- **llms.txt Standard**: https://llmstxt.org/
- **Schema.org EducationalOrganization**: https://schema.org/EducationalOrganization

---

## Appendix: Example Source Entry

```markdown
### Example Source: Alpha School Homepage

**Title**: Alpha School - Home
**URL**: https://alpha.school
**Type**: Primary (Official)
**Date Published**: Unknown (website)
**Date Retrieved**: 2026-01-20
**Credibility**: Verified (official source)

**Key Information**:
- **2-Hour Learning Model**: "Students complete their academic work in just 2 hours per day using AI-powered personalized learning"
  - Domain: Model
  - Confidence: Verified
  - Quote: Yes

- **Locations**: "Campuses in Austin, TX"
  - Domain: Locations
  - Confidence: Verified
  - Quote: Paraphrased

- **Grades Served**: K-8
  - Domain: Curriculum
  - Confidence: Verified
  - Quote: Yes
```

---

*End of Specification*
