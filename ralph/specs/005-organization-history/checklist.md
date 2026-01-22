# Spec 005 Implementation Checklist

**Spec**: 005-organization-history
**Output File**: `reference/organization/history.md`
**Status**: Not Started
**Last Updated**: 2026-01-20

---

## Pre-Implementation

- [ ] Read spec.md completely
- [ ] Read research/organization.md lines 123-219 (History section)
- [ ] Understand sensitive topics: charter rejections, "untested model" criticism
- [ ] Review Documentation Template (roadmap.md lines 136-173)
- [ ] Review Spec 002, 003, 004 implementations as reference patterns

---

## Phase 2.0: Write Documentation

### Setup
- [ ] Create output directory: `reference/organization/`
- [ ] Create file: `reference/organization/history.md`

### FR1.1: Header and Definition
- [ ] Write H1 heading: "# History"
- [ ] Write one-sentence definition in blockquote summarizing Alpha School's evolution from founding to present
- [ ] Ensure definition captures: founding (2014) → AI investment (2022) → national expansion (2025)

### FR1.2: Overview Section
- [ ] Write "## Overview" heading
- [ ] Write paragraph 1: Origin story (MacKenzie Price's founding motivation, starting in house with 16 kids)
- [ ] Write paragraph 2: Evolution (from Acton Academy branch to AI-powered network, Joe Liemandt's $1B investment)
- [ ] Write paragraph 3: Current state (17+ campuses, 8 states, charter initiatives, continued expansion)
- [ ] Verify overview is 2-3 paragraphs

### FR1.3: Properties Table
- [ ] Write "## Properties" heading
- [ ] Create markdown table with columns: Property | Type | Description | Example
- [ ] Add row: `original_name` | string | School's founding name | "Emergent Academy"
- [ ] Add row: `founding_year` | number | Year school was founded | 2014
- [ ] Add row: `first_campus_year` | number | Year first formal campus opened | 2016
- [ ] Add row: `founding_location` | string | Where school originated | "Brian Holtz's house, Austin area"
- [ ] Add row: `initial_student_count` | number | Number of students at founding | 16
- [ ] Add row: `founding_inspiration` | string | Catalyst for founding | "Daughters found school boring"
- [ ] Add row: `original_model` | string | Early educational approach | "Acton Academy microschool branch using adaptive apps"
- [ ] Add row: `ai_investment_year` | number | Year of major AI platform investment | 2022
- [ ] Add row: `first_graduating_class` | number | Year of first senior class graduation | 2025
- [ ] Add row: `expansion_timeline` | string | Growth trajectory | "2014 (16 students) → 2025 (17+ campuses, 8 states)"
- [ ] Verify all 10 properties are present
- [ ] Verify table follows GitHub Flavored Markdown format

### FR1.4: Details Section

#### Details: Heading
- [ ] Write "## Details" heading

#### Subsection: Founding (2014)
- [ ] Write "### Founding (2014)" heading
- [ ] Document MacKenzie Price's motivation (daughters bored)
- [ ] Document "steering the Titanic" frustration story
- [ ] Document partnership with Brian Holtz (Acton Academy parent)
- [ ] Document original name "Emergent Academy"
- [ ] Document starting with 16 kids in house
- [ ] Document Price daughters' grades (3rd and 1st grade)
- [ ] Trace all facts to research/organization.md lines 125-138

#### Subsection: Early Model (2014-2016)
- [ ] Write "### Early Model (2014-2016)" heading
- [ ] Document Acton Academy connection (branched from franchise)
- [ ] Document adaptive app usage (Khan Academy, ALEKS, Math Academy, Newsela, DreamBox)
- [ ] Document personalized self-paced learning approach
- [ ] Document afternoon activities ("neighborhood lemonade stand wars", "Hero's Journey performances")
- [ ] Document formal campus establishment in 2016
- [ ] Trace all facts to research/organization.md lines 137-146

#### Subsection: AI Investment & Platform Development (2022)
- [ ] Write "### AI Investment & Platform Development (2022)" heading
- [ ] Document timing: following generative AI emergence
- [ ] Document Joe Liemandt's ~$1 billion investment (note "approximately")
- [ ] Document Timeback platform (personalized learning)
- [ ] Document Incept (custom LLM for curriculum generation)
- [ ] Document vision monitoring (engagement tracking, "anti-patterns")
- [ ] Document integration partners (Khan Academy, Trilogy Software, in-house engineering)
- [ ] Trace all facts to research/organization.md lines 131, 140-146

#### Subsection: Key Milestones (2014-2025)
- [ ] Write "### Key Milestones (2014-2025)" heading
- [ ] Create chronological list organized by year
- [ ] Add 2014 milestones: founding, partnership with Holtz, 16 kids in house
- [ ] Add 2016 milestone: formal campus established
- [ ] Add 2022 milestone: $1B investment, Timeback development
- [ ] Add 2025 milestones: first graduating class (11 of 12 to universities), Alpha High year-round, new campuses (Raleigh, NYC, Santa Barbara, Chantilly, Charlotte), San Francisco $75k opening, charter applications
- [ ] Verify chronological accuracy
- [ ] Trace all facts to research/organization.md lines 125-136

#### Subsection: Charter School Initiatives (2025)
- [ ] Write "### Charter School Initiatives (2025)" heading
- [ ] Document application context (through 2 Hour Learning initiative, public-school charter networks)
- [ ] Create "Rejected Applications" section listing: Pennsylvania, Texas, Utah, Arkansas, North Carolina
- [ ] Document Pennsylvania DoE reasoning: Quote "The artificial intelligence instructional model being proposed by this school is untested and fails to demonstrate how the tools, methods and providers would ensure alignment to Pennsylvania academic standards."
- [ ] Create "Approved Partnership" section: Arizona
- [ ] Document media coverage: NYT July 2025 framing, tension between innovation and regulatory approval
- [ ] Use neutral, factual language (no defense or criticism)
- [ ] Trace all facts to research/organization.md lines 196-219

#### Subsection: Geographic Expansion (2025)
- [ ] Write "### Geographic Expansion (2025)" heading
- [ ] Document diverse market strategy concept
- [ ] Document tuition range examples: Brownsville TX ($10k lowest), San Francisco CA ($75k highest), Austin TX ($40k flagship)
- [ ] Document new campuses across AZ, CA, FL, NC, NY, TX, VA
- [ ] Document announced Fall 2026 openings: The Woodlands TX, Dorado PR, Palo Alto CA, Santa Monica CA, Chicago IL
- [ ] Trace all facts to research/organization.md lines 134-136

### FR1.5: Examples Section

#### Examples: Heading
- [ ] Write "## Examples" heading

#### Example 1: Origin Story
- [ ] Write "### Example 1: Origin Story - From Frustration to Founding" heading
- [ ] Document catalyst: daughters' boredom
- [ ] Document frustration: "steering the Titanic" comment
- [ ] Document action: founding "Emergent Academy", 16 kids in house
- [ ] Document model: adaptive apps + afternoon activities
- [ ] Use structured format (Catalyst/Frustration/Action/Model)
- [ ] Trace to research/organization.md lines 137-138

#### Example 2: Evolution
- [ ] Write "### Example 2: Evolution from Microschool to AI Platform" heading
- [ ] Document 2014 starting point: 16 kids, off-the-shelf apps
- [ ] Document 2022 turning point: $1B investment, generative AI emergence
- [ ] Document 2022-2025 development: Timeback, Incept, vision monitoring
- [ ] Document 2025 current state: 17+ campuses, proprietary AI, first graduating class
- [ ] Use structured format (Starting Point/Turning Point/Development/Current State)
- [ ] Trace to research/organization.md lines 125-146

#### Example 3: Expansion Strategy
- [ ] Write "### Example 3: Expansion Strategy - Geographic and Economic Diversity" heading
- [ ] Document low-cost market: Brownsville $10k
- [ ] Document high-cost market: San Francisco $75k (most expensive in city)
- [ ] Document flagship: Austin $40k
- [ ] Document strategy: diverse markets, same model
- [ ] Document vision: $1k tablet, billion kids within 20 years
- [ ] Use structured format (Low-Cost/High-Cost/Flagship/Strategy/Vision)

### FR1.6: Related Documentation Links
- [ ] Write "## Related" heading
- [ ] Add link: Organization Overview (./overview.md) - Spec 002
- [ ] Add link: Leadership (./leadership.md) - Spec 004
- [ ] Add link: Educational Philosophy (../model/educational-philosophy.md) - Spec 006
- [ ] Add link: AI Integration (../model/ai-integration.md) - Spec 008
- [ ] Add link: Locations Overview (../locations/overview.md) - Spec 021
- [ ] Verify all links use correct relative paths
- [ ] Use markdown link format: `- [Link Text](path)`

### FR1.7: FAQs Section
- [ ] Write "## FAQs" heading
- [ ] Add FAQ 1: "When was Alpha School founded?" → Answer: 2014 by MacKenzie Price, originally "Emergent Academy", 16 kids in house, formal campus 2016
- [ ] Add FAQ 2: "Who founded Alpha School and why?" → Answer: MacKenzie Price after daughters found school boring, "steering the Titanic" frustration
- [ ] Add FAQ 3: "What was Alpha School's original name?" → Answer: "Emergent Academy", branched from Acton Academy
- [ ] Add FAQ 4: "How did Alpha School start?" → Answer: Brian Holtz's house, 16 kids, adaptive apps, afternoon activities
- [ ] Add FAQ 5: "What was the major AI investment?" → Answer: 2022, ~$1B by Joe Liemandt, Timeback/Incept development
- [ ] Add FAQ 6: "What happened with charter school applications?" → Answer: 5 rejections (PA/TX/UT/AR/NC), 1 approval (AZ), PA cited "untested" model
- [ ] Verify each FAQ has clear question and authoritative answer
- [ ] Use format: `**Q: Question?**` followed by `A: Answer.`

### FR1.8: Sources Section
- [ ] Write "## Sources" heading
- [ ] Add source: Alpha School Homepage with URL and retrieval date
- [ ] Add source: Alpha School LinkedIn with URL and retrieval date
- [ ] Add source: 2 Hour Learning Founder Page with URL and retrieval date
- [ ] Add source: Colossus Joe Liemandt Profile with URL and retrieval date
- [ ] Add source: New York Times AI in Education Coverage with retrieval date
- [ ] Add source: San Francisco Standard coverage with retrieval date
- [ ] Verify all sources include retrieval date: "Retrieved 2026-01-20"
- [ ] Use format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`

### FR1.9: Footer Metadata
- [ ] Write horizontal rule: `---`
- [ ] Write: `*Last updated: 2026-01-20*`
- [ ] Write: `*Last verified: 2026-01-20*`

---

## Quality Checks (FR2: Content Quality Standards)

### FR2.1: Factual Accuracy
- [ ] Verify all timeline dates are accurate (2014, 2016, 2022, 2025)
- [ ] Verify charter outcomes clearly stated (5 rejections, 1 approval)
- [ ] Verify AI investment attributed as "approximately $1 billion"
- [ ] Verify first graduating class details (11 of 12 to four-year universities)
- [ ] Verify every claim traces to research/organization.md lines 123-219
- [ ] Verify no facts are stated without source backing

### FR2.2: Claims vs. Evidence Distinction
- [ ] Verify investment amount uses "approximately $1 billion" (not exact)
- [ ] Verify charter rejections stated as facts (not opinions)
- [ ] Verify Pennsylvania DoE criticism quoted directly
- [ ] Verify origin story distinguished from documented facts
- [ ] Verify proper attribution language used throughout

### FR2.3: Information Gaps Handling
- [ ] Verify gaps noted explicitly where relevant
- [ ] Verify no speculation about undocumented periods
- [ ] Verify clear distinction between known vs. inferred facts
- [ ] Verify sensitive topics handled neutrally

### FR2.4: Neutral Language for Sensitive Topics
- [ ] Verify charter rejections stated factually (no defense or criticism)
- [ ] Verify Pennsylvania DoE quote presented without editorial commentary
- [ ] Verify Acton Academy evolution presented as factual progression
- [ ] Verify AI investment timing noted without hype
- [ ] Review entire document for neutral, professional tone

---

## LLM Optimization Checks (FR3)

### FR3.1: Hierarchical Structure
- [ ] Verify H1 used only for document title ("History")
- [ ] Verify H2 used for major sections (Overview, Properties, Details, Examples, Related, FAQs, Sources)
- [ ] Verify H3 used for subsections within Details and Examples
- [ ] Verify no H4 or deeper headings used
- [ ] Verify heading hierarchy is consistent throughout

### FR3.2: Scannable Tables
- [ ] Verify Properties table uses GitHub Flavored Markdown
- [ ] Verify table has consistent column alignment
- [ ] Verify table is parseable (no broken rows or columns)
- [ ] Test table rendering in markdown preview

### FR3.3: Example Formatting
- [ ] Verify examples use H3 headings
- [ ] Verify examples use structured format (labels like "Catalyst:", "Action:", etc.)
- [ ] Verify examples are clearly delimited from other content
- [ ] Verify examples are concrete and illustrative

---

## File Operations

### File Verification
- [ ] Verify file created at correct path: `reference/organization/history.md`
- [ ] Verify file uses UTF-8 encoding
- [ ] Verify file uses Unix line endings (LF)
- [ ] Verify markdown syntax is valid (no parsing errors)
- [ ] Verify file size is reasonable (expect 8-12 KB based on similar specs)

### Content Verification
- [ ] Count sections: Should have 7 major sections (Overview, Properties, Details, Examples, Related, FAQs, Sources)
- [ ] Count Detail subsections: Should have 6 subsections (Founding, Early Model, AI Investment, Milestones, Charter Initiatives, Expansion)
- [ ] Count examples: Should have 3 examples
- [ ] Count FAQs: Should have 6 FAQs
- [ ] Count properties: Should have 10 properties in table
- [ ] Count sources: Should have at least 6 source citations
- [ ] Verify footer metadata present

---

## Documentation Updates

### Update Roadmap
- [ ] Open ralph/roadmap.md
- [ ] Find Spec 005 in Phase 2 Organization Domain section (line ~74)
- [ ] Change status from "📋 Planned" to "✅ Complete"
- [ ] Update completion stats in header (increment completed count)
- [ ] Update "Last Updated" date
- [ ] Save roadmap.md

### Update Progress Log
- [ ] Open ralph/progress.md
- [ ] Add new entry with heading: "## 2026-01-20 (Later) - Spec 005 Implemented ✅"
- [ ] Document status: Complete
- [ ] Document what was done (created history.md, followed all FRs, updated tracking)
- [ ] Document key details (single-phase workflow, API-style template)
- [ ] Document sections created (all FR1 sections)
- [ ] Document content quality (factual accuracy, neutral language for charter rejections)
- [ ] Document LLM optimization (hierarchical structure, tables, examples)
- [ ] Document key design decisions (6 subsections, neutral charter handling, founding facts in properties)
- [ ] Document next action: Implement Spec 006 (Educational Philosophy)
- [ ] Document blockers: None
- [ ] Update progress stats (Total: 32, Completed: 11, Phase 2: 4/22)
- [ ] Save progress.md

### Update Activity Log
- [ ] Open ralph/activity.log
- [ ] Add new entry with timestamp and Spec 005 heading
- [ ] Document implementation details (file created, content synthesized, all FRs followed)
- [ ] Document output quality (line count, section count, source count)
- [ ] Document updates made (roadmap, progress, activity log, checklist)
- [ ] Document next action
- [ ] Save activity.log

### Update This Checklist
- [ ] Mark this checklist as complete
- [ ] Update status at top: "Status: Complete"
- [ ] Update "Last Updated" date
- [ ] Save checklist.md

---

## Completion Criteria

### All Tasks Complete
- [ ] All pre-implementation tasks checked
- [ ] All Phase 2.0 tasks checked
- [ ] All quality check tasks checked
- [ ] All LLM optimization tasks checked
- [ ] All file operation tasks checked
- [ ] All documentation update tasks checked

### Final Verification
- [ ] reference/organization/history.md exists and is valid
- [ ] File contains all required sections per spec
- [ ] All facts trace to research/organization.md
- [ ] Charter rejections handled neutrally
- [ ] Roadmap.md updated
- [ ] Progress.md updated
- [ ] Activity.log updated
- [ ] This checklist marked complete

---

**Checklist Complete**: ☐ No ☐ Yes
**Date Completed**: _____________
**Implemented By**: _____________

---

*Checklist Created: 2026-01-20*
*Last Updated: 2026-01-20*
