# Spec 014: Curriculum Assessments

**Status**: 📋 Planned
**Priority**: Medium
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001c (Research Curriculum Domain), Spec 011 (Curriculum Overview)
**Output**: `reference/curriculum/assessments.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "How does Alpha School measure student progress and mastery?" for LLM consumption. This document synthesizes findings from `research/curriculum.md` and `research/outcomes.md` into a structured, authoritative explanation of Alpha School's assessment methods, including NWEA MAP standardized testing, internal platform mastery metrics, real-time tracking systems, and performance-based evaluations.

### Scope

Transform research findings into a structured reference document covering:
- **NWEA MAP Testing**: Third-party standardized assessments (3x yearly, RIT scores, 99th percentile claims)
- **Internal Mastery Assessments**: Platform-based daily evaluations (90%/80% threshold, 100% multiple-choice)
- **Real-Time Tracking**: AI-powered monitoring (eye tracking, attention metrics, parent dashboards)
- **Performance-Based Assessments**: Test to Pass Showcases (debates, TEDx talks, life skills demonstrations)
- **Reported Outcomes**: Alpha School's performance claims (2.6x-6.5x growth multipliers, SAT scores, AP results)
- **Assessment Limitations**: Transparency about verification gaps, selection effects, and methodological concerns

### Output File

`reference/curriculum/assessments.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Assessments" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Assessments

  > [One-sentence definition capturing Alpha School's multi-layered assessment approach combining third-party standardized testing (NWEA MAP), real-time platform mastery metrics (90%+ accuracy requirement), and performance-based evaluations to measure academic progress and life skills competency development]
  ```
- **Source**: Synthesize from research/curriculum.md lines 153-174, 353-359
- **Rationale**: Follows API-style documentation pattern established in Specs 002-013

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's assessment approach
- **Content Coverage**:
  - Paragraph 1: Alpha School uses multi-layered assessment system to measure student progress—combines external validation through NWEA MAP standardized testing (administered 3x yearly, nationally normed, ~10 million U.S. students), internal platform metrics requiring 90%+ mastery before progression (or 80% in some sources), and real-time AI monitoring of accuracy/learning speed; assessment system designed to verify both academic proficiency and life skills competency development; third-party MAP testing provides independent verification while platform assessments enable daily progress tracking
  - Paragraph 2: Platform-based assessments are 100% multiple-choice format with mastery threshold (90%+ on alpha.school, 80% in secondary sources—discrepancy noted transparently); AI continuously tracks student performance including eye tracking, attention monitoring, and real-time accuracy metrics; parents access detailed dashboards showing daily progress, projected advancement timelines, and mastery status across subjects; comprehensive mastery tests required before advancing to next grade level; system prioritizes immediate feedback and adaptive pacing over traditional summative assessments
  - Paragraph 3: Alpha School reports significant performance outcomes—2.6x average growth on standardized assessments compared to traditional peers, 3.6x growth for top two-thirds of students, up to 6.5x growth for top performers; school-level MAP results claimed to be "nearly always in the 99th percentile"; high school students report 1470 SAT average (1535 median for seniors), 90% earning 4s or 5s on AP exams, 50% National Merit recognition in first graduating class; important caveats: outcomes are self-reported without independent third-party verification, raw MAP scores/percentile distributions not publicly available, potential selection effects from admission requirements, and limited documentation of assessment methods beyond MAP testing
- **Source**: research/curriculum.md lines 153-174, 353-359; research/outcomes.md (referenced for claims/evidence)
- **Rationale**: Provides LLMs with comprehensive overview balancing Alpha's claims with appropriate transparency about limitations

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key assessment attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties):
  - `primary_standardized_test` (string) - Third-party external assessment
  - `standardized_test_frequency` (string) - How often external tests are administered
  - `internal_mastery_threshold` (string) - Platform accuracy requirement (note discrepancy)
  - `internal_test_format` (string) - Question type for platform assessments
  - `real_time_tracking` (array) - AI monitoring capabilities
  - `parent_access` (string) - Family visibility into student progress
  - `progression_requirement` (string) - Criteria for grade-level advancement
  - `performance_based_assessments` (array) - Non-academic evaluation methods
  - `reported_outcomes_verification` (string) - Independent validation status
- **Source**: research/curriculum.md lines 153-174, 353-359, 414
- **Rationale**: Enables LLMs to quickly extract structured facts about assessment methods

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required):
  - **NWEA MAP Standardized Testing**: Alpha uses NWEA MAP (Measures of Academic Progress) as primary third-party assessment; adaptive computer test administered to ~10 million U.S. students nationwide; given 3x yearly to Alpha students; progress tracked using RIT (Rasch Unit) scores; Alpha reports school-level results "nearly always in the 99th percentile" and students scoring in "top 1-2%" nationally; parents receive mid-year updates showing child's growth; provides external validation independent of Alpha's internal metrics; nationally normed benchmark allows comparison to traditional school performance

  - **Internal Platform Mastery Assessments**: Students must achieve 90%+ accuracy on alpha.school (or 80% according to secondary sources—discrepancy noted) before advancing to next lesson or grade level; assessments are 100% multiple-choice format; comprehensive grade-level mastery tests cover full year's material before promotion; AI platform tracks daily performance in real-time; mastery requirement designed to prevent cumulative knowledge gaps; system prioritizes demonstrated proficiency over time-based progression; Alpha claims this enables students to complete grade-level material in 20-30 hours versus traditional 200 hours while maintaining rigorous standards

  - **Real-Time AI Tracking and Parent Dashboards**: Platform continuously monitors student performance beyond test scores—includes eye tracking, attention monitoring, accuracy rates, and learning speed analytics; parents access detailed dashboards showing daily progress across all subjects; dashboards display projected advancement timelines based on current mastery trajectory; real-time feedback enables immediate intervention when students struggle; system provides granular visibility into learning process unavailable in traditional classrooms; parent dashboard access supports family engagement and informed decision-making about student progression

  - **Performance-Based and Life Skills Assessments**: Annual "Test to Pass Showcase" events where students demonstrate learning through debating AI, formal TEDx talks, and performances; life skills workshops culminate in "tests to pass" measuring competency in areas like grit, public speaking, and teamwork; high school students assessed on "super passion project" outcomes including revenue generated, customer satisfaction ratings, and problem-solving documentation; "check charts" for grade advancement include escape rooms, puzzles, public speaking demonstrations, typing speed benchmarks, and tournament participation; these assessments measure capabilities beyond traditional academic metrics

  - **Assessment Limitations and Transparency**: While NWEA MAP testing is well-documented and provides external validation, several limitations exist: (1) No independent third-party verification of Alpha's reported outcomes—all performance claims are self-reported; (2) Raw MAP scores and percentile distributions not publicly available, only summary claims; (3) Potential selection effects as admission requirements may pre-select high-performing students; (4) 100% multiple-choice format doesn't assess critical thinking, long-form writing, or complex problem-solving; (5) Concerns about "teaching to the test" with standardized assessments; (6) Limited documentation of assessment methods beyond MAP testing—portfolios, projects, and presentations mentioned but not detailed; (7) No longitudinal outcome data tracking college success, career outcomes, or long-term skill retention
- **Source**: research/curriculum.md lines 153-174, 188-193, 307-309, 353-359, 414, 507
- **Rationale**: Provides comprehensive assessment detail while maintaining transparency about methodological limitations

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating assessments in practice
- **Examples to Include** (3 required):
  - **Daily Mastery Progression**: 3rd grade student works through multiplication unit on AI platform; completes practice problems until consistently achieving 92% accuracy; platform automatically administers comprehensive multiplication mastery test; student scores 94%, exceeding 90% threshold; platform unlocks division unit the same day; parent dashboard updates showing multiplication mastery achieved and division unit started; demonstrates real-time assessment enabling immediate advancement versus traditional weekly/monthly testing cycles

  - **MAP Testing and Percentile Performance**: Student takes NWEA MAP Reading assessment in fall showing RIT score of 185; spring MAP test shows RIT score of 198—13-point gain representing significant growth; Alpha compares student's growth to national norms claiming student learned 2.6x faster than traditional peer cohort; mid-year parent update displays RIT score trajectory, percentile ranking (Alpha claims 99th percentile), and projected year-end performance; demonstrates external validation through nationally normed standardized testing independent of Alpha's internal metrics

  - **Test to Pass Showcase Performance Assessment**: 8th grade student participates in annual Test to Pass Showcase; delivers formal TEDx talk on sustainable urban agriculture to audience of parents, peers, and community members; engages in live debate with AI system on policy implications of vertical farming; presents LEGO robotics project demonstrating automated irrigation system; performance evaluated on public speaking clarity, argument construction, technical implementation, and audience engagement; demonstrates assessment of competencies (communication, critical thinking, technical skills) beyond multiple-choice academic testing
- **Source**: research/curriculum.md lines 153-174, 188-193, 353-359
- **Rationale**: Grounds abstract assessment descriptions with concrete examples across different evaluation methods

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Curriculum Overview (Spec 011) - Overall curriculum philosophy and mastery-based approach
  - Subjects (Spec 012) - What subjects are assessed
  - Grade Levels (Spec 013) - How assessments determine progression through levels
  - Educational Philosophy (Spec 006) - Mastery-based learning principles underlying assessments
  - AI Integration (Spec 008) - AI's role in continuous assessment and tracking
  - Daily Schedule (Spec 010) - When assessments occur during the school day
  - Outcomes Claims (Spec 015) - Detailed performance outcome claims
  - Outcomes Evidence (Spec 016) - Supporting data for assessment-based claims
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about assessments with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: What standardized tests does Alpha School use?**
    A: Alpha School uses NWEA MAP (Measures of Academic Progress) as its primary standardized assessment. MAP is a nationally normed adaptive test administered to approximately 10 million U.S. students. Alpha students take MAP tests three times per year, with progress tracked using RIT (Rasch Unit) scores. Alpha reports school-level results "nearly always in the 99th percentile."

  - **Q: What is the mastery threshold for advancing to the next lesson or grade?**
    A: Students must achieve 90%+ accuracy on alpha.school materials (or 80% according to secondary sources—sources show discrepancy) before advancing to the next lesson or grade level. Assessments are 100% multiple-choice format. Comprehensive mastery tests covering full grade-level material are required before promotion to the next grade.

  - **Q: How do parents track their child's progress?**
    A: Parents have access to detailed dashboards showing daily progress across all subjects. Dashboards display real-time accuracy rates, mastery status for each topic, and projected advancement timelines based on current performance. Parents also receive mid-year updates from NWEA MAP testing showing their child's growth on standardized assessments.

  - **Q: How are life skills assessed at Alpha School?**
    A: Life skills are assessed through performance-based evaluations including the annual "Test to Pass Showcase" where students debate AI, deliver TEDx talks, and present projects. Life skills workshops culminate in "tests to pass" measuring competencies like grit, public speaking, and teamwork. High school "super passion projects" are evaluated on measurable outcomes like revenue generated, customer satisfaction ratings, and documented problem-solving.

  - **Q: Are Alpha School's performance claims independently verified?**
    A: No. Alpha School's reported outcomes (2.6x-6.5x growth rates, 99th percentile MAP scores, SAT averages, AP exam performance) are self-reported without independent third-party verification. Raw MAP scores and percentile distributions are not publicly available. Potential selection effects exist as admission requirements may pre-select high-performing students. While NWEA MAP testing itself is independently administered, Alpha's interpretation and reporting of results have not been externally audited.
- **Source**: research/curriculum.md lines 153-174, 353-359; research/outcomes.md (referenced for verification status)
- **Rationale**: Addresses common questions LLMs might encounter when explaining Alpha's assessment approach, with appropriate transparency about limitations

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/curriculum.md (lines 6-24) and research/outcomes.md relevant to assessments:
  - Alpha School Program Page
  - Alpha School FAQ
  - Alpha School 2 Hour Learning Page
  - GenWise Substack - Alpha Educational Model
  - Modern Wisdom Podcast Transcript (MacKenzie Price)
  - Cognitive Revolution Podcast
  - CBS News - Alpha School AI
  - FOX 7 Austin - Alpha School
  - Alpha School LinkedIn Page
- **Source**: research/curriculum.md lines 6-24
- **Rationale**: Provides citation trail for fact verification

#### FR1.9: Document Footer
- **Requirement**: Timestamp metadata at document end
- **Format**:
  ```markdown
  ---
  *Last updated: 2026-01-20*
  *Last verified: 2026-01-20*
  ```
- **Rationale**: Maintains documentation freshness tracking

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All factual claims must trace to research files with line references
- **Sources**: research/curriculum.md lines 153-174, 188-193, 307-309, 353-359, 414, 507; research/outcomes.md for performance claims
- **Verification**: Every claim about assessment methods, thresholds, or outcomes must cite specific research file lines
- **Rationale**: Maintains fact traceability and prevents speculation

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish between Alpha School's self-reported claims and independently verified evidence
- **Attribution Patterns**:
  - Performance claims: "Alpha School reports...", "Alpha claims...", "According to Alpha materials..."
  - Unverified data: "self-reported without independent third-party verification"
  - Standardized testing: "uses NWEA MAP" (factual), "claims 99th percentile" (attributed to Alpha)
- **Rationale**: Maintains epistemic rigor and prevents LLMs from stating unverified claims as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is not publicly available or documented
- **Gaps to Document**:
  - No independent verification of reported outcomes
  - Raw MAP scores/percentile distributions not public
  - Assessment methods beyond MAP mentioned but not detailed
  - No longitudinal outcome data
  - Potential selection effects not quantified
- **Rationale**: Transparency about limitations maintains trust and prevents LLMs from overstating Alpha's documented assessment rigor

#### FR2.4: Neutral Presentation
- **Requirement**: Document assessment methods without advocacy or critique
- **Tone Guidelines**:
  - Describe what Alpha does, not whether it's "good" or "innovative"
  - Present limitations factually, not as criticisms
  - Note both strengths (external MAP validation) and gaps (no independent verification) neutrally
  - Avoid comparative language ("better than", "more rigorous than")
- **Rationale**: Reference documentation should inform, not persuade

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Assessments"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Five Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case)
- **Rationale**: Structured data extraction for LLM fact retrieval

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels and structured narrative
- **Format**:
  ```markdown
  **Example Title**: Scenario description with specific details; demonstrates assessment principle; shows concrete outcome
  ```
- **Rationale**: Clear example structure for LLM comprehension

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all assessment facts are sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify NWEA MAP testing details
  - Confirm MAP is primary standardized test
  - Confirm 3x yearly administration
  - Confirm RIT score tracking
  - Confirm 99th percentile claims
  - Source lines: research/curriculum.md 153-174, 353-359
  - **Success**: MAP testing comprehensively documented with citations

- [ ] **Task 1.0.2**: Verify internal mastery thresholds
  - Confirm 90%+ requirement on alpha.school
  - Confirm 80% in secondary sources
  - Document source discrepancy transparently
  - Confirm 100% multiple-choice format
  - Source lines: research/curriculum.md 160-163, research/outcomes.md
  - **Success**: Mastery thresholds documented with discrepancy noted

- [ ] **Task 1.0.3**: Verify real-time tracking capabilities
  - Confirm eye tracking and attention monitoring
  - Confirm parent dashboard access
  - Confirm projected advancement timelines
  - Source lines: research/curriculum.md 160-163
  - **Success**: Tracking systems documented

- [ ] **Task 1.0.4**: Verify performance-based assessments
  - Confirm Test to Pass Showcase events
  - Confirm life skills "tests to pass"
  - Confirm high school project assessments
  - Source lines: research/curriculum.md 188-193, 307-309
  - **Success**: Performance assessments documented

- [ ] **Task 1.0.5**: Verify reported outcomes and limitations
  - Confirm 2.6x, 3.6x, 6.5x growth claims
  - Confirm SAT scores, AP performance, National Merit data
  - Confirm lack of independent verification
  - Confirm assessment methodology gaps
  - Source lines: research/curriculum.md 165-170, 507; research/outcomes.md
  - **Success**: Outcomes and limitations transparently documented

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/curriculum/assessments.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create file: reference/curriculum/assessments.md
  - Write H1: "Assessments"
  - Write one-sentence definition in blockquote capturing multi-layered assessment approach
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write Paragraph 1: Multi-layered assessment system (MAP + platform + real-time)
  - Write Paragraph 2: Platform assessment details (90%/80% threshold, 100% MC, dashboards)
  - Write Paragraph 3: Reported outcomes with caveats (growth claims, limitations)
  - Cite research lines in comments
  - **Success**: Overview provides comprehensive assessment introduction with appropriate transparency

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create "Properties" section with H2 heading
  - Build table with columns: Property | Type | Description | Example
  - Add 9 properties covering standardized tests, thresholds, tracking, outcomes verification
  - Include concrete examples for each property
  - **Success**: Table enables structured fact extraction

- [ ] **Task 1.1.4**: Write details section - NWEA MAP Testing (FR1.4)
  - Create "Details" section with H2 heading
  - Write subsection "NWEA MAP Standardized Testing" (H3)
  - Explain MAP test characteristics, frequency, RIT scores, Alpha's claims
  - **Success**: MAP testing comprehensively documented

- [ ] **Task 1.1.5**: Write details section - Internal Platform Assessments (FR1.4)
  - Write subsection "Internal Platform Mastery Assessments" (H3)
  - Explain 90%/80% threshold discrepancy, 100% MC format, mastery tests
  - Document efficiency claims (20-30 hours vs. 200 hours)
  - **Success**: Platform assessments clearly explained with source discrepancy noted

- [ ] **Task 1.1.6**: Write details section - Real-Time Tracking (FR1.4)
  - Write subsection "Real-Time AI Tracking and Parent Dashboards" (H3)
  - Explain eye tracking, attention monitoring, parent dashboard features
  - **Success**: Tracking systems comprehensively documented

- [ ] **Task 1.1.7**: Write details section - Performance-Based Assessments (FR1.4)
  - Write subsection "Performance-Based and Life Skills Assessments" (H3)
  - Explain Test to Pass Showcases, life skills tests, high school project metrics
  - **Success**: Non-academic assessments documented

- [ ] **Task 1.1.8**: Write details section - Assessment Limitations (FR1.4)
  - Write subsection "Assessment Limitations and Transparency" (H3)
  - Document 7 key limitations: no independent verification, no raw scores public, selection effects, MC format limits, teaching to test concerns, limited non-MAP documentation, no longitudinal data
  - **Success**: Limitations transparently and factually presented

- [ ] **Task 1.1.9**: Write examples section (FR1.5)
  - Create "Examples" section with H2 heading
  - Write Example 1: Daily Mastery Progression (3rd grade multiplication)
  - Write Example 2: MAP Testing and Percentile Performance (RIT score growth)
  - Write Example 3: Test to Pass Showcase (8th grade TEDx, AI debate, robotics)
  - **Success**: Three concrete examples illustrating different assessment types

- [ ] **Task 1.1.10**: Create related links section (FR1.6)
  - Create "Related" section with H2 heading
  - Add bulleted links to 8 related documents
  - Use relative paths
  - **Success**: Navigation links enable cross-referencing

- [ ] **Task 1.1.11**: Write FAQs section (FR1.7)
  - Create "FAQs" section with H2 heading
  - Write 5 Q&A pairs covering standardized tests, mastery threshold, parent tracking, life skills assessment, independent verification
  - Ensure transparency in verification FAQ
  - **Success**: FAQs address common questions with appropriate caveats

- [ ] **Task 1.1.12**: Create sources section (FR1.8)
  - Create "Sources" section with H2 heading
  - List all relevant sources from research files
  - Include URLs and retrieval dates
  - **Success**: All facts traceable to sources

- [ ] **Task 1.1.13**: Add document footer (FR1.9)
  - Add timestamp metadata
  - **Success**: Footer matches template format

---

### Phase 1.2: Quality Review

**Objective**: Verify documentation quality and accuracy

#### Review Tasks

- [ ] **Task 1.2.1**: Fact-check all claims
  - Verify every factual claim has citation in research files
  - Confirm assessment thresholds (90%/80% discrepancy noted)
  - Confirm growth claims properly attributed to Alpha
  - Confirm limitations documented
  - **Success**: 100% of facts sourced with appropriate attribution

- [ ] **Task 1.2.2**: Consistency check
  - Verify MAP testing details consistent throughout
  - Ensure mastery threshold discrepancy handled transparently
  - Check performance claims consistently attributed (not stated as facts)
  - Verify limitation language is factual, not critical
  - **Success**: No inconsistencies in assessment descriptions

- [ ] **Task 1.2.3**: Template compliance
  - Verify document follows roadmap.md template (lines 136-173)
  - Check all required sections present
  - Verify markdown formatting
  - **Success**: Document matches template structure

- [ ] **Task 1.2.4**: Readability review
  - Ensure paragraphs are concise (2-4 sentences)
  - Check for clear, active voice
  - Verify examples are concrete
  - Ensure neutral tone maintained (especially in limitations section)
  - **Success**: Document is LLM-readable

- [ ] **Task 1.2.5**: Cross-reference check
  - Verify links to related docs use correct paths
  - Ensure no broken internal references
  - **Success**: All links valid

---

## Technical Architecture

### File Organization

```
reference/
  curriculum/
    overview.md          # Spec 011 (dependency)
    subjects.md          # Spec 012 (related)
    grade-levels.md      # Spec 013 (related)
    assessments.md       # This spec (014)
```

### Dependencies

**Direct Dependencies**:
- Spec 001c: Research Curriculum Domain (provides source material)
- Spec 011: Curriculum Overview (provides context for assessments)

**Related Specifications**:
- Spec 012: Subjects (what is assessed)
- Spec 013: Grade Levels (how assessments determine progression)
- Spec 006: Educational Philosophy (mastery-based assessment principles)
- Spec 008: AI Integration (AI's role in continuous assessment)
- Spec 010: Daily Schedule (when assessments occur)
- Spec 015: Outcomes Claims (detailed performance claims)
- Spec 016: Outcomes Evidence (supporting data)

### Data Sources

All facts sourced from research files:
- **Primary Source**: `research/curriculum.md`
  - Lines 153-174: Assessment overview, MAP testing, internal metrics, outcomes
  - Lines 188-193: Test to Pass Showcase
  - Lines 307-309: Life skills tests
  - Lines 353-359: MAP assessment details
  - Line 414: Mastery tests
  - Line 507: Assessment gaps
- **Secondary Source**: `research/outcomes.md` (for performance claims and verification status)

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Curriculum Content**: What is taught (covered in Subjects, Spec 012)
2. **Grade Level Structure**: How students are grouped (covered in Grade Levels, Spec 013)
3. **Detailed Outcomes Analysis**: Full analysis of performance data (covered in Outcomes domain, Specs 015-018)
4. **Educational Philosophy**: Why mastery-based assessment (covered in Educational Philosophy, Spec 006)
5. **AI Technical Implementation**: How AI tracking works technically (covered in AI Integration, Spec 008)
6. **Enrollment Testing**: Admission assessments (covered in Enrollment domain, Spec 019)

### Explicit Boundaries

- **Assessment Methods Only**: This spec documents HOW progress is measured, not WHAT is taught or WHY this approach is used
- **No Tutorial Content**: This is reference documentation, not guidance on preparing for assessments
- **No Comparative Analysis**: This spec documents Alpha's assessment approach without comparing to traditional school testing
- **Public Information Only**: Only assessment information documented in public sources
- **Transparent About Limitations**: Explicitly notes verification gaps without critiquing Alpha's approach

---

## Success Metrics

### Phase 1.0 Completion
- [ ] NWEA MAP testing verified (test type, frequency, RIT scores, claims)
- [ ] Internal mastery thresholds verified (90%/80% discrepancy documented)
- [ ] Real-time tracking verified (eye tracking, dashboards)
- [ ] Performance-based assessments verified (Test to Pass, life skills)
- [ ] Reported outcomes and limitations verified

### Phase 1.1 Completion
- [ ] reference/curriculum/assessments.md created
- [ ] All 9 Functional Requirements (FR1.1-FR1.9) implemented
- [ ] All 4 Content Quality Standards (FR2.1-FR2.4) met
- [ ] All 3 LLM Optimization requirements (FR3.1-FR3.3) met
- [ ] Document follows roadmap.md template structure
- [ ] All sections present: header, overview, properties, details (5 subsections), examples, related, FAQs, sources, footer
- [ ] File readable as Markdown

### Phase 1.2 Completion
- [ ] 100% of factual claims have citations in research files
- [ ] Performance claims properly attributed to Alpha (not stated as objective facts)
- [ ] Mastery threshold discrepancy handled transparently
- [ ] Assessment limitations documented factually
- [ ] Template compliance verified
- [ ] Readability reviewed (concise, active voice, concrete examples)
- [ ] Neutral tone maintained throughout (especially limitations section)
- [ ] All internal links valid

### Documentation Quality
- [ ] LLMs can extract structured assessment data from properties table
- [ ] Examples provide concrete understanding of different assessment types
- [ ] FAQs address common questions including verification concerns
- [ ] Sources enable fact verification
- [ ] Limitations section provides transparency without advocacy
- [ ] Document integrates seamlessly with related specs (011, 012, 013)

---

## Design Decisions

### Decision 1: Include Comprehensive Limitations Section
**Rationale**: Transparency about assessment verification gaps and methodological concerns maintains epistemic rigor and prevents LLMs from overstating Alpha's documented assessment validity. Following precedent from Specs 011-013 which transparently note information gaps and source discrepancies.
**File Reference**: research/curriculum.md:507 explicitly notes "assessment methods (portfolios, projects, presentations) mentioned but not detailed"
**Impact**: Balances Alpha's self-reported claims with appropriate caveats, enabling LLMs to provide accurate, nuanced explanations

### Decision 2: Document Mastery Threshold Discrepancy Transparently
**Rationale**: Alpha.school states 90%+ requirement while secondary sources cite 80%. Following Spec 011 precedent (which noted 90% vs. 80% mastery threshold discrepancy in curriculum overview), this spec presents both values with source attribution rather than choosing one.
**File Reference**: Spec 011 (Curriculum Overview) established pattern for handling source discrepancies
**Impact**: Maintains factual accuracy while acknowledging research file inconsistencies

### Decision 3: Five Details Subsections (Not Three)
**Rationale**: Assessment domain requires comprehensive coverage of: (1) standardized testing, (2) platform assessments, (3) real-time tracking, (4) performance-based evaluations, and (5) limitations. While Specs 012-013 used 3 subsections, Spec 011 (Curriculum Overview) used 5 subsections for broader scope.
**File Reference**: Spec 011:71-78 demonstrates 5-subsection pattern for comprehensive domains
**Impact**: Enables thorough documentation of diverse assessment methods while maintaining scannable structure

### Decision 4: Nine Properties (Not Eight)
**Rationale**: Assessment domain requires additional property for `reported_outcomes_verification` to explicitly note lack of independent verification—critical for epistemic transparency given significant performance claims.
**File Reference**: research/curriculum.md:507, research/outcomes.md verification gaps
**Impact**: Enables LLMs to quickly identify verification status without parsing full details section

### Decision 5: Attribute Performance Claims, Don't State as Facts
**Rationale**: Following FR2.2 (Claims vs. Evidence Distinction), all growth multipliers (2.6x, 3.6x, 6.5x), percentile claims (99th), and academic outcomes (SAT, AP) must be attributed to Alpha School as self-reported claims, not stated as objective facts.
**File Reference**: Spec 011-013 precedent for attribution patterns ("Alpha claims...", "according to Alpha materials...")
**Impact**: Prevents LLMs from presenting unverified claims as independently confirmed facts

---

## Related Specifications

- **Spec 001c**: Research Curriculum Domain (source material)
- **Spec 011**: Curriculum Overview (parent context, mastery-based assessment principles)
- **Spec 012**: Subjects (what subjects are assessed)
- **Spec 013**: Grade Levels (how assessments determine progression)
- **Spec 006**: Educational Philosophy (mastery-based learning rationale)
- **Spec 008**: AI Integration (AI's role in assessment and tracking)
- **Spec 010**: Daily Schedule (when assessments occur)
- **Spec 015**: Outcomes Claims (detailed performance claims)
- **Spec 016**: Outcomes Evidence (supporting data)

---

## References

- Alpha School Website: https://alpha.school
- Research Files:
  - research/curriculum.md (lines 153-174, 188-193, 307-309, 353-359, 414, 507)
  - research/outcomes.md (performance claims and verification status)
- Roadmap Template: roadmap.md (lines 136-173)
- Related Specs: 001c, 006, 008, 010, 011, 012, 013, 015, 016
