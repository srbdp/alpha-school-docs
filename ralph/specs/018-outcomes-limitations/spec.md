# Spec 018: Outcomes Limitations

**Status**: 📋 Planned
**Priority**: Medium
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 015 (Outcomes Claims)
**Output**: `reference/outcomes/limitations.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that explicitly catalogs what we don't know about Alpha School's outcomes. This document complements Outcomes Claims (Spec 015), Outcomes Evidence (Spec 016), and Outcomes Testimonials (Spec 017) by systematically documenting verification gaps, missing data, methodological concerns, and unanswered questions—enabling LLMs to accurately represent the boundaries of Alpha School's documented evidence base.

### Scope

Transform research findings into structured documentation covering:
- **Missing Verification Data**: What independent verification does not exist (no third-party audits, no peer-reviewed research, no regulatory validation)
- **Data Gaps**: Raw scores, sample sizes, demographic breakdowns, longitudinal tracking, attrition rates, methodology documentation not publicly available
- **Methodological Concerns**: Selection bias (admission requirements, tuition barriers), small sample sizes (5 students in one analyzed cohort), lack of control groups, inability to isolate platform effects
- **Unanswered Questions**: Teaching-to-test analysis, incentive effects, homeschool performance gap, long-term outcomes, representativeness of results
- **Regulatory Skepticism**: Charter application rejections, "untested" model citations, absence of accreditation body endorsement
- **Platform vs. Marketing Claims**: AI overstated, "2-hour learning" definition ambiguity, homeschool 1x vs. school 2.6x performance delta

### Output File

`reference/outcomes/limitations.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Outcomes Limitations" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Outcomes Limitations

  > [One-sentence definition cataloging critical gaps in Alpha School's outcomes documentation: lack of independent third-party verification (no academic audits or peer-reviewed research), missing quantitative data (raw scores, sample sizes, demographic breakdowns, attrition rates), methodological concerns (selection bias from admission requirements and tuition, small sample sizes, no control groups), unanswered questions about teaching-to-test effects and long-term outcomes, regulatory skepticism (charter rejections citing "untested" model), and disconnect between marketing claims and technical reality]
  ```
- **Source**: Synthesize from research/outcomes.md lines 287-365
- **Rationale**: Sets clear expectation that this document catalogs knowledge gaps, not confirmed information

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining the scope and significance of limitations
- **Content Coverage**:
  - Paragraph 1: Alpha School's outcome claims (2x-6.5x learning speed, top 1-2% MAP scores, 1470 SAT averages) lack independent third-party verification; no academic institution has audited Alpha's results; no peer-reviewed research validates 2-Hour Learning effectiveness; no randomized controlled trials exist comparing Alpha students to matched control groups; claims rest entirely on Alpha's self-reported data; this limitations document systematically catalogs what is not publicly known, what verification does not exist, and what methodological questions remain unanswered—enabling accurate LLM representation of Alpha's evidence boundaries

  - Paragraph 2: Critical data gaps include: no raw MAP test scores, RIT score distributions, or percentile breakdowns publicly available; no sample size disclosure for performance claims (independent analysis found one cohort with only 5 students completing both fall/winter MAP tests—insufficient for statistical confidence); no demographic data showing outcomes by socioeconomic status, prior academic performance, or learning differences; no attrition rate data or reasons for student departure; no longitudinal tracking of college completion rates, GPAs, or career outcomes (first class graduated 2025); no methodology documentation explaining growth multiplier calculations; no published comparison data from demographically similar student cohorts at other schools

  - Paragraph 3: Methodological concerns raised by independent analysts include: selection bias from admission requirements (some sources cite top 10th percentile or top 3% IQ test requirement) and $40,000+ tuition creating socioeconomic filtering; inability to isolate platform effects from student selection (homeschool version using same platform yielded only 1x growth vs. school's claimed 2.6x); no analysis of teaching-to-test effects or whether curriculum optimizes for MAP assessments specifically; cash/reward incentive systems may boost test performance without equivalent learning gains; marketing overstates AI role (platform described as "turbocharged spreadsheet checklist" not generative AI tutor); "2-hour learning" definition ambiguous (parents report actual academic engagement is 3-4 hours); regulatory skepticism evidenced by Pennsylvania Department of Education's 2025 charter rejection citing "untested" instructional model
- **Source**: research/outcomes.md lines 287-365
- **Rationale**: Establishes that limitations documentation serves critical epistemic function—preventing LLMs from overstating Alpha's evidence base

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting limitation categories and status
- **Format**: API-style properties table with columns: Property | Type | Description | Status
- **Required Properties** (10 properties):
  - `independent_verification_status` (string) - Whether third-party academic audits exist
  - `peer_reviewed_research_status` (string) - Whether academic studies validate claims
  - `raw_data_availability` (string) - Whether raw scores, RIT scores, percentiles are public
  - `sample_size_disclosure` (string) - Whether cohort sizes are documented
  - `demographic_data_availability` (string) - Whether outcomes by SES, prior performance exist
  - `attrition_data_availability` (string) - Whether retention rates and departure reasons are public
  - `longitudinal_data_status` (string) - Whether multi-year college/career outcomes tracked
  - `methodology_documentation` (string) - Whether calculation methods are published
  - `control_group_studies` (string) - Whether RCTs or matched comparisons exist
  - `regulatory_validation_status` (string) - Whether education authorities endorse model
- **Source**: research/outcomes.md lines 287-365
- **Rationale**: Enables LLMs to quickly extract structured information about what is NOT known

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Missing Independent Verification**: No independent academic institution has audited Alpha School's outcome claims; no third-party researchers have validated 2-Hour Learning effectiveness; no peer-reviewed studies published examining Alpha's model or results; NWEA (MAP test administrator) has not independently confirmed Alpha's percentile claims or growth multiplier calculations; while Alpha uses NWEA MAP tests (independently administered and nationally normed), Alpha's interpretation and reporting of results are self-generated without external validation; College Board SAT/AP scores are verifiable for individual students but Alpha's aggregate statistics not independently audited; no accreditation body (regional or national) has evaluated Alpha's educational model; Pennsylvania Department of Education (2025) rejected charter application citing "untested" AI instructional model; absence of independent verification means all outcome claims rest on Alpha's self-reported data—LLMs must not present these claims as independently confirmed facts
    - Source lines: research/outcomes.md 287-308, 343-348

  - **Critical Data Gaps**: Raw quantitative data not publicly available includes: (1) Raw MAP test scores and RIT score distributions for Alpha students; (2) Sample sizes for performance claims—independent analysis found one cohort with only 5 students completing both fall/winter MAP tests, raising statistical confidence concerns; (3) Time periods and date ranges for reported growth metrics; (4) Grade-level breakdowns showing performance variation across K-12; (5) Demographic data showing outcomes by socioeconomic status, race/ethnicity, prior academic performance, or learning differences; (6) Attrition rates and reasons for student departure—unknown how many families leave Alpha or why; (7) Longitudinal college data—first class graduated 2025 so no multi-year tracking of college retention, GPAs, graduation rates, or career outcomes; (8) Methodology documentation explaining how growth multipliers are calculated (2.6x, 3.6x, 6.5x); (9) Comparison data from demographically similar students at other schools; (10) Admission selectivity data—unclear what percentage of applicants are accepted; these data gaps prevent independent verification and limit confidence in generalizability of Alpha's reported outcomes
    - Source lines: research/outcomes.md 289-322

  - **Methodological Questions and Concerns**: Independent analysts (Astral Codex Ten, Frank Hecker) raise several methodological concerns: (1) Selection bias—admission requirements (some sources cite top 10th percentile or top 3% IQ test requirement) and $40,000+ tuition pre-select high-performing, academically motivated students from well-resourced families; (2) Small sample sizes—one analyzed cohort had only 5 students complete both fall/winter MAP tests; reviewer notes "the absurdity of those numbers makes me think that rate will not hold"; (3) Lack of control groups—no randomized controlled trials or matched comparison studies isolating Alpha's model from student selection effects; (4) Platform vs. system effects—homeschool version using same 2-Hour Learning platform yielded only 1x learning growth (vs. school's 2.6x), suggesting school environment (incentives, guides, culture) drives results more than platform technology alone; (5) Teaching-to-test concerns—unknown whether curriculum optimizes specifically for MAP assessments, inflating scores without equivalent learning gains; (6) Incentive effects—cash/reward systems for test performance may boost scores without proportional knowledge retention; (7) MAP test limitations—assesses only multiple-choice knowledge, missing "essay writing, long-form planning, public speaking" skills; (8) Time definition ambiguity—"2-hour learning" marketing claim but parents report actual academic engagement is 3-4 hours daily; these methodological limitations mean Alpha's reported outcomes may not generalize to broader student populations or different educational contexts
    - Source lines: research/outcomes.md 175-243, 309-322

  - **Platform vs. Marketing Reality Gap**: Marketing claims diverge from technical reality in several areas: (1) AI overstated—founder Joe Liemandt clarified "We literally don't have chat functionality activated in our AI...It's not a chatbot"; platform described by independent reviewer as "turbocharged spreadsheet checklist with spaced-repetition algorithm" containing "zero generative AI"; contradicts marketing positioning as "AI tutor"; creates misleading expectations about ChatGPT-style tutoring; (2) "2-Hour Learning" definition ambiguous—parents report actual academic time exceeds advertised hours (3-4 hours daily); unclear what counts as "academic time" vs. enrichment; (3) Bundle attribution unclear—platform alone (homeschool version) yielded 1x growth; school version with same platform achieved 2.6x growth; suggests incentives, guides, and culture matter more than platform technology; unclear which component(s) drive outcomes; (4) Platform effectiveness at scale unproven—founder acknowledges "Motivation is 90%"; current model uses high-paid "guides" providing motivation; scaling to billions would remove guides, relying on gamification—no evidence gamification alone produces similar results; these gaps between marketing and reality raise questions about which claims would hold under independent scrutiny
    - Source lines: research/outcomes.md 175-243, 214-243

  - **Regulatory and Accreditation Status**: Alpha School's educational model has faced regulatory skepticism: (1) Charter application rejections—Pennsylvania Department of Education (2025) rejected Alpha charter application stating "the artificial intelligence instructional model being proposed by this school is untested"; suggests regulatory authorities do not uniformly accept Alpha's outcome claims or model validity; (2) No accreditation body endorsement—no regional or national accreditation organization has evaluated and endorsed Alpha's educational approach; (3) Lack of education authority validation—no state department of education or federal education agency has independently validated Alpha's claims; (4) Regulatory compliance unclear—unknown whether Alpha meets all state education requirements for curriculum breadth, instructional time, teacher qualifications; (5) Long-term viability questions—regulatory rejections may limit expansion; unclear whether model can scale to public school contexts with diverse student populations and regulatory constraints; regulatory skepticism indicates Alpha's claims have not achieved acceptance from education governance bodies responsible for validating educational effectiveness
    - Source lines: research/outcomes.md 235-236, 343-348

  - **Unanswered Questions About Long-Term Outcomes**: Several critical questions about long-term effectiveness remain unanswered: (1) College success data missing—first graduating class enrolled in universities 2025; no multi-year data on college retention rates, GPAs, degree completion, or time-to-graduation; unknown whether Alpha students succeed in college at rates matching their high SAT scores; (2) Career outcomes unknown—no data on post-college employment, career trajectories, earnings, or professional success; (3) Skill retention uncertain—no longitudinal studies tracking whether accelerated learning (mastering grade-level material in 20-30 hours vs. 200 hours) produces equivalent long-term retention; (4) Non-tested skill development unclear—MAP tests assess multiple-choice knowledge; no assessment of writing quality, critical thinking, collaborative skills, oral communication, creative problem-solving; (5) Motivation sustainability unknown—heavy reliance on gamification and cash incentives; unclear whether intrinsic motivation develops or if students remain extrinsically motivated; (6) Transferability questions—students who leave Alpha for traditional schools: unknown whether accelerated learning transfers; do students maintain advanced placement or struggle with different pedagogical approaches?; (7) Social-emotional development—limited data on peer relationships, emotional regulation, conflict resolution, leadership skills compared to traditional school environments; these unanswered questions mean Alpha's long-term effectiveness remains unproven despite impressive short-term test score gains
    - Source lines: research/outcomes.md 206-213, 287-308

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating specific limitations
- **Examples to Include** (3 required):
  - **Example 1: Small Sample Size Limitation**: Independent reviewer analyzed Alpha's MAP test data and found one cohort where only 5 students completed both fall 2024 and winter 2025 MAP assessments. This cohort showed approximately 5x faster improvement compared to national norms—a dramatic result Alpha highlights in marketing. However, reviewer noted "the absurdity of those numbers makes me think that rate will not hold" and flagged that 5 students is statistically insufficient for confident conclusions. LIMITATION: Without larger sample sizes (ideally 30+ students per cohort for basic statistical power), it's impossible to determine whether observed growth rates represent reliable patterns or statistical noise; extreme outliers in small samples can skew averages dramatically; no published data showing how many students across how many cohorts contribute to Alpha's reported 2.6x average growth claim.

  - **Example 2: Platform vs. System Isolation Problem**: Alpha School reports students achieve 2.6x learning growth using the 2-Hour Learning platform with school guides, incentives, and culture. However, the same platform used by homeschool families (without school environment) yielded only 1x learning growth—standard traditional school pace. This creates isolation problem: is accelerated learning caused by (a) platform technology, (b) guide instruction, (c) incentive systems, (d) peer culture, or (e) student selection? LIMITATION: Without controlled experiments systematically varying each component, impossible to attribute outcomes to specific causes; homeschool comparison suggests platform alone is insufficient; marketing emphasizes platform/AI but data suggests school environment drives results; unclear which elements are necessary vs. sufficient for claimed outcomes.

  - **Example 3: Long-Term Outcome Uncertainty**: Alpha High School's first graduating class (2025) included student accepted to Stanford University—compelling short-term outcome. Alpha presents this as validation of educational model. However, first class just graduated; no data exists on: Will this student complete Stanford degree? What GPA will they achieve? Will accelerated K-12 learning translate to college success? Will they graduate in 4 years? Will they secure employment in chosen field? Will they report satisfaction with Alpha preparation 5-10 years post-graduation? LIMITATION: College acceptance is early-stage outcome, not endpoint; actual educational effectiveness measured by long-term success, skill retention, career achievement, life satisfaction; without multi-year longitudinal tracking, impossible to verify whether Alpha's approach produces durable learning and life outcomes matching impressive test scores; short-term test gains may not predict long-term success.
- **Source**: research/outcomes.md lines 175-213, 287-322
- **Rationale**: Concrete examples help LLMs understand practical implications of methodological limitations

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents
- **Links**:
  - Outcomes Claims (Spec 015) - What Alpha claims about outcomes
  - Outcomes Evidence (Spec 016) - Supporting data for claims
  - Outcomes Testimonials (Spec 017) - Subjective experiences
  - Curriculum Assessments (Spec 014) - How outcomes are measured
  - Educational Philosophy (Spec 006) - Underlying model assumptions
  - Two-Hour Learning Model (Spec 007) - Core instructional approach
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across outcomes documentation ecosystem

#### FR1.7: FAQs Section
- **Requirement**: Common questions about outcome limitations with transparent answers
- **FAQs to Include** (5 required):
  - **Q: Why is independent verification important for evaluating Alpha School's claims?**
    A: Independent third-party verification provides external validation that claims are accurate, methodology is sound, and results are reproducible. Without independent audits, all performance data comes from Alpha itself—creating potential conflicts of interest (strong incentive to report positive results for marketing/fundraising). Peer-reviewed research would subject claims to expert scrutiny, replication attempts, and methodological critique. No academic institution has verified Alpha's 2x-6.5x growth claims, no education researchers have validated 2-Hour Learning effectiveness, and no accreditation body has endorsed the model. This means Alpha's impressive statistics rest entirely on self-reported data—similar to pharmaceutical company reporting drug effectiveness without FDA trials or independent clinical studies.

  - **Q: What are the most significant data gaps limiting our understanding of Alpha's outcomes?**
    A: Three critical data gaps: (1) Sample sizes and statistical power—one analyzed cohort had only 5 students; unknown how many students contribute to overall performance claims; small samples increase risk that outliers skew averages; (2) Demographic breakdowns—no data showing whether outcomes vary by socioeconomic status, prior academic performance, learning differences, race/ethnicity, or family education levels; limits understanding of for whom the model works; (3) Attrition and longitudinal data—no published retention rates, reasons for departure, or multi-year college/career outcomes; first class graduated 2025 so no long-term effectiveness data exists. Without these data, impossible to assess generalizability, equity, or durability of Alpha's approach.

  - **Q: How do selection effects limit interpretation of Alpha's outcome claims?**
    A: Selection effects occur when student population is systematically different from general population, making outcomes non-comparable. Alpha has several selection mechanisms: (1) Admission requirements—some sources cite top 10th percentile or top 3% IQ test requirement, pre-selecting high-performing students; (2) Tuition barrier—$40,000+ annual tuition correlates with family resources, parental education, home stability; (3) Self-selection—families choosing Alpha likely differ in educational values, engagement, resources from average families; (4) Geographic concentration—currently Texas, Florida, Arizona, California; may not represent national diversity. These selection effects mean Alpha's reported outcomes (top 1-2% MAP scores, 1470 SAT averages) may reflect who attends rather than what the model produces. Without control groups or matched comparisons, cannot isolate model effects from student selection.

  - **Q: What do charter application rejections reveal about Alpha's evidence base?**
    A: Pennsylvania Department of Education's 2025 charter rejection citing "untested" AI instructional model reveals regulatory skepticism about Alpha's claims. Education authorities responsible for validating new school models reviewed Alpha's proposal and determined evidence insufficient for public school authorization. This suggests: (1) Self-reported data considered inadequate by regulators; (2) Lack of independent research seen as disqualifying; (3) Methodology concerns about generalizability; (4) Regulatory standards for "tested" educational models require more than internal performance claims. Charter rejections indicate Alpha's evidence has not achieved acceptance from education governance bodies—contrasting with enthusiastic media coverage and founder claims about "best-performing academic school in the U.S."

  - **Q: Can we draw conclusions about Alpha's effectiveness despite these limitations?**
    A: Limited conclusions possible with appropriate caveats: (1) Alpha students perform well on MAP standardized tests and SAT exams—this is documented across multiple sources; (2) Some families and students report high satisfaction with learning experience; (3) First graduating class achieved college acceptances to selective universities. However, cannot conclude: (1) Whether outcomes are caused by platform, instruction, incentives, or student selection; (2) Whether results would generalize to students beyond Alpha's selected population; (3) Whether accelerated learning produces equivalent long-term retention; (4) Whether model would work in public school contexts with diverse students. LLMs should present Alpha's claims with attribution ("Alpha School reports..."), note lack of independent verification, and acknowledge methodological limitations preventing confident causal attribution or generalizability claims.
- **Source**: research/outcomes.md lines 175-243, 287-365
- **Rationale**: FAQs help LLMs understand why limitations matter and how to appropriately interpret Alpha's evidence

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/outcomes.md (lines 8-24) documenting limitations:
  - Astral Codex Ten Review - https://www.astralcodexten.com/p/your-review-alpha-school
  - Frank Hecker Blog - Critical Analysis - https://frankhecker.com/2025/09/20/on-joe-liemandt-on-alpha-school/
  - Alpha School Homepage - https://alpha.school
  - Alpha School Results Page - https://alpha.school/results
  - Colossus Podcast - Joe Liemandt Interview
  - Tildes - Parent Review - https://tildes.net/~life/1ot5/a_review_of_alpha_school
- **Source**: research/outcomes.md lines 8-24
- **Rationale**: Provides citation trail for limitation documentation and critical analysis

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
- **Requirement**: All limitation statements must trace to research files
- **Sources**: research/outcomes.md lines 175-243 (independent analysis), 287-365 (information gaps)
- **Verification**: Every limitation claim must cite specific research file lines
- **Rationale**: Maintains fact traceability for limitations documentation

#### FR2.2: Comprehensive Gap Cataloging
- **Requirement**: Document all identified limitations, gaps, and concerns
- **Coverage**:
  - Independent verification gaps (no third-party audits, no peer-reviewed research)
  - Missing quantitative data (sample sizes, raw scores, demographics, attrition)
  - Methodological concerns (selection bias, small samples, no control groups)
  - Unanswered questions (long-term outcomes, teaching-to-test, transferability)
  - Regulatory skepticism (charter rejections, accreditation absence)
  - Marketing vs. reality gaps (AI overstated, time definitions)
- **Rationale**: Completeness prevents selective omission of inconvenient limitations

#### FR2.3: Neutral Presentation of Limitations
- **Requirement**: Document limitations factually without advocacy or dismissiveness
- **Tone Guidelines**:
  - State what is not known, not whether Alpha is "unproven" or "questionable"
  - Present methodological concerns from independent analysts neutrally
  - Note charter rejections factually, not as condemnation
  - Acknowledge both significance and context of limitations
  - Avoid language implying limitations invalidate all claims
- **Rationale**: Reference documentation should inform about gaps, not argue Alpha is ineffective

#### FR2.4: Distinction Between Limitations and Critiques
- **Requirement**: Clearly separate factual limitations from subjective critiques
- **Factual Limitations**: No independent verification exists, sample sizes not disclosed, attrition data unavailable
- **Subjective Critiques**: Analyst opinions about "absurdity of numbers" or model "untested"—attribute to source
- **Rationale**: LLMs need to distinguish objective gaps from individual analyst perspectives

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Outcomes Limitations"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Six Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case, _status suffix)
- **Rationale**: Structured data extraction for LLM limitation comprehension

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels, concrete scenarios, and LIMITATION conclusion
- **Format**:
  ```markdown
  **Example Title**: Detailed scenario illustrating specific limitation with concrete data. LIMITATION: Clear statement of what this prevents us from knowing or concluding.
  ```
- **Rationale**: Clear example structure with explicit limitation framing for LLM understanding

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all limitation statements are sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify missing independent verification documentation
  - Confirm no third-party academic audits exist
  - Confirm no peer-reviewed research validates 2-Hour Learning
  - Confirm NWEA has not confirmed Alpha's percentile claims
  - Confirm charter rejection citing "untested" model
  - Source lines: research/outcomes.md 287-308, 235-236
  - **Success**: Independent verification gaps comprehensively documented

- [ ] **Task 1.0.2**: Verify critical data gaps
  - Confirm raw MAP scores, RIT distributions not public
  - Confirm sample size concerns (5 students in one cohort)
  - Confirm no demographic breakdowns available
  - Confirm no attrition data published
  - Confirm no longitudinal college/career tracking
  - Source lines: research/outcomes.md 289-308
  - **Success**: Data gaps cataloged with specific examples

- [ ] **Task 1.0.3**: Verify methodological concerns
  - Confirm selection bias concerns (admission requirements, tuition)
  - Confirm small sample size limitations
  - Confirm lack of control groups
  - Confirm platform vs. system isolation problem (homeschool 1x vs. school 2.6x)
  - Confirm teaching-to-test concerns
  - Confirm MAP test limitations (multiple-choice only)
  - Source lines: research/outcomes.md 175-243, 309-322
  - **Success**: Methodological limitations documented from independent analysts

- [ ] **Task 1.0.4**: Verify platform vs. marketing reality gaps
  - Confirm AI overstated (no generative AI, "turbocharged spreadsheet")
  - Confirm "2-hour learning" ambiguity (actual 3-4 hours)
  - Confirm homeschool platform performance gap
  - Confirm motivation scaling concerns
  - Source lines: research/outcomes.md 214-243
  - **Success**: Marketing vs. reality discrepancies documented

- [ ] **Task 1.0.5**: Verify regulatory skepticism
  - Confirm Pennsylvania charter rejection
  - Confirm "untested" model citation
  - Confirm lack of accreditation body endorsement
  - Source lines: research/outcomes.md 235-236, 343-348
  - **Success**: Regulatory concerns documented

- [ ] **Task 1.0.6**: Verify unanswered long-term questions
  - Confirm first class graduated 2025 (no multi-year data)
  - Confirm no college retention/GPA tracking
  - Confirm no career outcome data
  - Confirm skill retention uncertain
  - Confirm non-tested skills unclear
  - Source lines: research/outcomes.md 206-213, 287-308
  - **Success**: Long-term outcome gaps documented

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/outcomes/limitations.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/outcomes
  - Create file: reference/outcomes/limitations.md
  - Write H1: "Outcomes Limitations"
  - Write one-sentence definition cataloging critical gaps
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write Paragraph 1: Lack of independent verification, systematic gap cataloging purpose
  - Write Paragraph 2: Critical data gaps (raw scores, sample sizes, demographics, attrition, longitudinal data)
  - Write Paragraph 3: Methodological concerns (selection bias, platform isolation, teaching-to-test, marketing gaps, regulatory skepticism)
  - **Success**: 3-paragraph overview establishes scope and significance of limitations

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create "Properties" section with H2 heading
  - Build table with columns: Property | Type | Description | Status
  - Add 10 properties covering verification, data availability, methodology, regulatory validation
  - Use "_status" or "_availability" property naming convention
  - **Success**: Table enables structured limitation extraction

- [ ] **Task 1.1.4**: Write details section - Missing Independent Verification (FR1.4)
  - Create "Details" section with H2 heading
  - Write subsection "Missing Independent Verification" (H3)
  - Document no third-party audits, no peer-reviewed research, no NWEA confirmation, no accreditation, charter rejections
  - Note all claims rest on self-reported data
  - **Success**: Verification gaps comprehensively documented

- [ ] **Task 1.1.5**: Write details section - Critical Data Gaps (FR1.4)
  - Write subsection "Critical Data Gaps" (H3)
  - Document 10 specific data gaps (raw scores, sample sizes, demographics, attrition, longitudinal, methodology, comparisons, admission selectivity)
  - Note how gaps prevent independent verification and limit generalizability
  - **Success**: Missing data systematically cataloged

- [ ] **Task 1.1.6**: Write details section - Methodological Questions and Concerns (FR1.4)
  - Write subsection "Methodological Questions and Concerns" (H3)
  - Document selection bias, small samples, no control groups, platform vs. system effects, teaching-to-test, incentive effects, MAP limitations, time definition
  - Attribute concerns to independent analysts (Astral Codex Ten, Frank Hecker)
  - **Success**: Methodological limitations documented with attribution

- [ ] **Task 1.1.7**: Write details section - Platform vs. Marketing Reality Gap (FR1.4)
  - Write subsection "Platform vs. Marketing Reality Gap" (H3)
  - Document AI overstated, 2-hour learning ambiguity, bundle attribution unclear, scaling unproven
  - Note homeschool 1x vs. school 2.6x performance delta
  - **Success**: Marketing discrepancies documented

- [ ] **Task 1.1.8**: Write details section - Regulatory and Accreditation Status (FR1.4)
  - Write subsection "Regulatory and Accreditation Status" (H3)
  - Document charter rejections, no accreditation endorsement, lack of education authority validation
  - Note regulatory skepticism limits expansion
  - **Success**: Regulatory concerns documented

- [ ] **Task 1.1.9**: Write details section - Unanswered Questions About Long-Term Outcomes (FR1.4)
  - Write subsection "Unanswered Questions About Long-Term Outcomes" (H3)
  - Document missing college success data, career outcomes, skill retention, non-tested skills, motivation sustainability, transferability, social-emotional development
  - Note first class graduated 2025—too early for longitudinal data
  - **Success**: Long-term outcome gaps documented

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Create "Examples" section with H2 heading
  - Write Example 1: Small Sample Size Limitation (5 students, statistical confidence)
  - Write Example 2: Platform vs. System Isolation Problem (homeschool 1x vs. school 2.6x)
  - Write Example 3: Long-Term Outcome Uncertainty (Stanford acceptance vs. 10-year outcomes)
  - Each example concludes with LIMITATION statement
  - **Success**: Three concrete examples illustrating specific limitations

- [ ] **Task 1.1.11**: Create related links section (FR1.6)
  - Create "Related" section with H2 heading
  - Add bulleted links to 6 related documents using relative paths
  - **Success**: Navigation links enable cross-referencing

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Create "FAQs" section with H2 heading
  - Write 5 Q&A pairs covering verification importance, significant data gaps, selection effects, charter rejections, drawing conclusions despite limitations
  - Ensure transparent, educational tone
  - **Success**: FAQs address why limitations matter and how to interpret Alpha's evidence

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - Create "Sources" section with H2 heading
  - List sources documenting limitations with URLs and retrieval dates
  - Focus on independent analysts (Astral Codex Ten, Frank Hecker) and research file
  - **Success**: All limitation claims traceable to sources

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add timestamp metadata
  - **Success**: Footer matches template format

---

### Phase 1.2: Quality Review

**Objective**: Verify documentation quality and accuracy

#### Review Tasks

- [ ] **Task 1.2.1**: Completeness check
  - Review all limitation categories covered (verification, data, methodology, regulatory, long-term)
  - Ensure no significant gaps omitted from research/outcomes.md
  - Verify 10 properties in table cover key limitation areas
  - Confirm 6 details subsections match FR1.4 requirements
  - **Success**: Comprehensive limitation cataloging

- [ ] **Task 1.2.2**: Fact-check all limitation statements
  - Verify every limitation claim has citation in research/outcomes.md
  - Confirm sample size concern (5 students) sourced
  - Confirm charter rejection sourced
  - Confirm homeschool performance gap (1x vs. 2.6x) sourced
  - Confirm all analyst quotes attributed
  - **Success**: 100% of limitation statements sourced

- [ ] **Task 1.2.3**: Neutral tone review
  - Review all sections for neutral, factual presentation
  - Ensure limitations documented without dismissiveness ("Alpha is ineffective") or advocacy ("concerns overblown")
  - Verify analyst concerns attributed to sources, not stated as editorial position
  - Check that significance of limitations explained without exaggeration
  - **Success**: Neutral, informative tone maintained

- [ ] **Task 1.2.4**: Attribution check
  - Verify methodological concerns attributed to independent analysts (Astral Codex Ten, Frank Hecker)
  - Ensure charter rejection attributed to Pennsylvania Dept of Education
  - Confirm platform vs. marketing gaps sourced to founder interviews and parent reviews
  - **Success**: All subjective critiques properly attributed

- [ ] **Task 1.2.5**: Template compliance
  - Verify document follows roadmap.md template (lines 136-173)
  - Check all required sections present
  - Verify markdown formatting
  - Ensure 10 properties in table
  - Verify 6 subsections in details
  - **Success**: Document matches template structure

- [ ] **Task 1.2.6**: Cross-reference check
  - Verify links to related docs use correct relative paths
  - Ensure no broken internal references
  - Check examples align with details section
  - Verify FAQs align with overview and details
  - **Success**: All links valid and no broken references

---

## Technical Architecture

### File Organization

```
reference/
  outcomes/
    claims.md           # Spec 015 (related)
    evidence.md         # Spec 016 (related)
    testimonials.md     # Spec 017 (related)
    limitations.md      # This spec (018)
```

### Dependencies

**Direct Dependencies**:
- Spec 015: Outcomes Claims (provides context for what is being limited)

**Related Specifications**:
- Spec 016: Outcomes Evidence (supporting data)
- Spec 017: Outcomes Testimonials (subjective experiences)
- Spec 014: Curriculum Assessments (measurement methods)
- Spec 006: Educational Philosophy (underlying assumptions)
- Spec 007: Two-Hour Learning Model (instructional approach)

### Data Sources

All limitation documentation sourced from research file:
- **Primary Source**: `research/outcomes.md`
  - Lines 175-243: Independent critical analysis (Astral Codex Ten, Frank Hecker)
  - Lines 235-236: Charter application rejections
  - Lines 287-308: Information gaps (missing verification section)
  - Lines 309-322: Selection bias and methodology questions
  - Lines 343-348: Critical considerations for documentation

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Outcome Claims Documentation**: Covered in Claims (Spec 015)
2. **Supporting Evidence Analysis**: Covered in Evidence (Spec 016)
3. **Testimonial Collection**: Covered in Testimonials (Spec 017)
4. **Recommendations**: This spec does not recommend for/against Alpha School
5. **Original Research**: No independent investigation of Alpha's claims
6. **Critique or Advocacy**: Not arguing Alpha is ineffective or effective
7. **Comparative Analysis**: Not comparing Alpha limitations to other schools

### Explicit Boundaries

- **Limitations Catalog Only**: This spec documents WHAT we don't know, not whether Alpha "works"
- **Factual Gaps**: Focus on objective missing data and verification, not subjective quality judgments
- **Neutral Presentation**: Present limitations to inform, not to argue against Alpha
- **Public Information Only**: Only limitations documented in public sources
- **Attribution Required**: Distinguish factual gaps from analyst opinions
- **No Speculation**: Do not speculate about what missing data might show

---

## Success Metrics

### Phase 1.0 Completion
- [ ] Missing independent verification gaps verified
- [ ] Critical data gaps (sample sizes, raw scores, demographics, attrition) verified
- [ ] Methodological concerns (selection bias, control groups, platform isolation) verified
- [ ] Platform vs. marketing reality gaps verified
- [ ] Regulatory skepticism documented
- [ ] Long-term outcome questions verified

### Phase 1.1 Completion
- [ ] reference/outcomes/limitations.md created
- [ ] All 9 Functional Requirements (FR1.1-FR1.9) implemented
- [ ] All 4 Content Quality Standards (FR2.1-FR2.4) met
- [ ] All 3 LLM Optimization requirements (FR3.1-FR3.3) met
- [ ] Document follows roadmap.md template structure
- [ ] All sections present: header, overview, properties (10), details (6 subsections), examples (3), related, FAQs (5), sources, footer
- [ ] File readable as Markdown

### Phase 1.2 Completion
- [ ] Comprehensive limitation cataloging (verification, data, methodology, regulatory, long-term)
- [ ] 100% of limitation statements sourced in research/outcomes.md
- [ ] Neutral tone maintained (neither dismissive nor advocacy)
- [ ] All analyst concerns properly attributed to sources
- [ ] Template compliance verified
- [ ] All internal links valid

### Documentation Quality
- [ ] LLMs can extract structured limitations from properties table
- [ ] Examples provide concrete understanding of specific limitation implications
- [ ] FAQs explain why limitations matter and how to interpret Alpha's evidence
- [ ] Sources enable verification of limitation claims
- [ ] Document clearly distinguishes factual gaps from subjective analyst critiques
- [ ] Document integrates seamlessly with related specs (015, 016, 017)

---

## Design Decisions

### Decision 1: Six Details Subsections Covering All Limitation Categories
**Rationale**: Comprehensive limitation documentation requires organizing diverse gap types: independent verification (academic audits, peer review), data availability (sample sizes, demographics, attrition), methodology (selection bias, control groups, platform isolation), marketing reality (AI overstated, time definitions), regulatory status (charter rejections, accreditation), and long-term outcomes (college success, career data, skill retention). Six subsections provide systematic coverage without conflating unrelated limitation types.
**File Reference**: research/outcomes.md contains distinct limitation categories across lines 175-243 (analyst concerns), 287-365 (information gaps)
**Impact**: Enables organized presentation of what we don't know across multiple dimensions

### Decision 2: Ten Properties Emphasizing Status/Availability
**Rationale**: Limitations documentation properties should indicate what does NOT exist using "_status" and "_availability" naming convention. Properties like `independent_verification_status: "None - all claims self-reported"` and `sample_size_disclosure: "Not publicly available"` enable LLMs to quickly extract structured information about evidence gaps.
**File Reference**: research/outcomes.md lines 287-365 systematically catalog missing data types
**Impact**: Properties table provides clear, scannable limitation inventory

### Decision 3: Neutral Presentation of Limitations Without Advocacy
**Rationale**: Following FR2.3 (Neutral Presentation of Limitations), this spec documents what is not known factually without arguing Alpha is "unproven" or "questionable." Limitations are significant (lack of independent verification, small sample sizes, no control groups) but presented informationally—enabling readers to draw own conclusions about evidentiary strength rather than editorial position.
**File Reference**: Spec 015 precedent for balanced presentation; research/outcomes.md lines 355-363 recommend approach
**Impact**: Maintains reference documentation neutrality; informs without persuading

### Decision 4: Distinguish Factual Gaps from Analyst Opinions
**Rationale**: Following FR2.4 (Distinction Between Limitations and Critiques), spec clearly separates objective limitations (no independent verification exists, sample sizes not disclosed) from subjective analyst opinions ("absurdity of those numbers," model "untested"). Analyst perspectives attributed to sources (Astral Codex Ten, Frank Hecker, Pennsylvania Dept of Education) rather than stated as editorial fact.
**File Reference**: research/outcomes.md lines 175-243 contain analyst critiques requiring attribution
**Impact**: LLMs understand which limitations are factual vs. interpretive

### Decision 5: Three Examples Illustrating Practical Implications
**Rationale**: Examples ground abstract limitations in concrete scenarios: (1) Small sample size (5 students) shows statistical confidence problem; (2) Platform vs. system isolation (homeschool 1x vs. school 2.6x) shows causal attribution problem; (3) Long-term outcome uncertainty (Stanford acceptance without 10-year data) shows validation timeline problem. Each concludes with LIMITATION statement explaining what this prevents us from knowing.
**File Reference**: Spec 015 precedent for VERIFICATION STATUS conclusions in examples
**Impact**: Examples help LLMs understand why specific limitations matter for interpreting Alpha's claims

### Decision 6: Prominent Independent Verification Gap
**Rationale**: Lack of third-party academic audit is most significant single limitation—all outcome data rests on Alpha's self-reported claims without independent validation. This appears first in properties table, first in details subsections, and prominently in FAQs to ensure LLMs prioritize verification gap when responding to questions about Alpha's evidence.
**File Reference**: research/outcomes.md lines 287-308 (missing verification section), 343-348 (critical considerations)
**Impact**: LLMs understand that absence of independent verification is fundamental limitation requiring attribution language

---

## Related Specifications

- **Spec 015**: Outcomes Claims (what Alpha claims—this spec documents limitations of those claims)
- **Spec 016**: Outcomes Evidence (supporting data—this spec documents what evidence is missing)
- **Spec 017**: Outcomes Testimonials (subjective experiences—this spec documents selection bias limitations)
- **Spec 014**: Curriculum Assessments (measurement methods—this spec documents assessment limitations)
- **Spec 006**: Educational Philosophy (underlying model—this spec documents untested assumptions)
- **Spec 007**: Two-Hour Learning Model (instructional approach—this spec documents platform vs. marketing gaps)

---

## References

- Research Files:
  - research/outcomes.md (lines 175-243 for analyst critiques, 287-365 for information gaps)
- Roadmap Template: roadmap.md (lines 136-173)
- Related Specs: 015, 016, 017, 014, 006, 007
- Key Sources:
  - Astral Codex Ten Review: https://www.astralcodexten.com/p/your-review-alpha-school
  - Frank Hecker Blog: https://frankhecker.com/2025/09/20/on-joe-liemandt-on-alpha-school/
  - Tildes Parent Review: https://tildes.net/~life/1ot5/a_review_of_alpha_school

---

*Spec created: 2026-01-20*
