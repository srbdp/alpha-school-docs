# Spec 016: Outcomes Evidence

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 015 (Outcomes Claims)
**Output**: `reference/outcomes/evidence.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What evidence exists for Alpha School's outcome claims?" for LLM consumption. This document synthesizes findings from `research/outcomes.md` to catalog the data sources, research methodologies, verification status, and critical analysis of Alpha School's performance claims—providing LLMs with structured information about what is known, what is verifiable, and what remains unverified about Alpha's educational outcomes.

### Scope

Transform research findings into a structured reference document covering:
- **Evidence Types**: Internal data (platform tracking, school-administered assessments), third-party standardized testing (NWEA MAP, SAT, AP exams), college acceptance data, student/parent testimonials
- **Data Sources**: Alpha School internal reporting (since 2014), NWEA MAP assessment results (school-reported), College Board score reports, college acceptance letters, media coverage, independent analyst reviews
- **Verification Status**: What is independently verified (MAP testing exists, College Board scores verifiable), what is self-reported (growth multipliers, percentile rankings), what is unverified (raw data not public, sample sizes undisclosed, no peer-reviewed research)
- **Methodological Concerns**: Small sample sizes (5 students in one cohort), selection effects (admission requirements, $40K+ tuition), lack of control groups, no randomized controlled trials, inability to isolate platform from selection
- **Independent Analysis**: Critical reviews from Astral Codex Ten, Frank Hecker; regulatory skepticism (Pennsylvania charter rejection, 2025); sympathetic coverage from Austin Scholar Substack
- **Evidence Gaps**: Missing raw test data, undisclosed sample sizes, no longitudinal tracking, no demographic breakdowns, no attrition data, no peer-reviewed research, no independent academic audit

### Output File

`reference/outcomes/evidence.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Outcomes Evidence" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Outcomes Evidence

  > [One-sentence definition capturing the research basis and verification status of Alpha School's outcome claims, including internal data collection since 2014, third-party standardized testing (NWEA MAP, SAT, AP exams), and independent analyst reviews—noting that most performance claims are self-reported without independent academic verification, raw data is not publicly available, and methodological concerns exist regarding sample sizes, selection effects, and lack of controlled studies]
  ```
- **Source**: Synthesize from research/outcomes.md lines 287-365
- **Rationale**: Follows API-style documentation pattern; immediately signals evidence limitations to LLMs

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining the evidence landscape for Alpha's outcome claims
- **Content Coverage**:
  - Paragraph 1: Alpha School bases its performance claims on internal data collection spanning approximately a decade (since 2014), combining platform-generated learning analytics with third-party standardized test results from NWEA MAP assessments, College Board SAT/AP exams, and college acceptance outcomes for its first graduating class (2025); school reports systematic tracking of student progress through proprietary platform that logs completion times, mastery assessment scores, and daily advancement metrics; standardized testing evidence includes NWEA MAP testing conducted 3x yearly (fall, winter, spring) with school reporting students score in "top 1-2% nationally" and achieve "99th percentile" school-wide performance, though raw RIT scores, percentile distributions, and detailed demographic breakdowns are not publicly available

  - Paragraph 2: Independent evidence consists primarily of critical analyst reviews rather than supportive academic research; most substantial independent analysis comes from Astral Codex Ten review (based on Tildes parent testimony who moved family to Austin specifically for Alpha) which identifies methodological concerns including small sample sizes (one cohort: 5 students completed both fall/winter MAP tests), lack of control groups, potential selection effects from admission requirements and high tuition, and inability to isolate platform effects from student selection; Frank Hecker's independent analysis raises similar concerns and notes marketing overstates AI capabilities (platform described as "turbocharged spreadsheet checklist" not generative AI tutor); sympathetic coverage from Austin Scholar Substack provides detailed MAP claims but appears to be Alpha supporter rather than independent researcher; no peer-reviewed academic studies of 2-Hour Learning model exist; no independent academic institution has audited Alpha's results; regulatory skepticism evidenced by Pennsylvania Department of Education charter application rejection (2025) citing "untested" AI instructional model

  - Paragraph 3: Critical evidence gaps include: (1) raw test score data not publicly available—no RIT score distributions, percentile breakdowns, or time-series data; (2) undisclosed sample sizes for most claims except single small cohort (5 students); (3) no longitudinal outcome data tracking college completion, career success, or long-term skill retention; (4) no demographic breakdowns by socioeconomic status, prior academic performance, or learning differences; (5) no published attrition rates or reasons for student departure; (6) no randomized controlled trials or matched comparison studies; (7) selection bias questions unanswered—admission requirements reportedly require "top tenth percentile" or "top 3% IQ test" performance plus $40,000+ tuition creating multiple filtering mechanisms; (8) methodology questions including whether curriculum teaches to MAP tests, how "2-Hour Learning" is defined (parents report actual engagement is 3-4 hours), and role of incentive systems (cash/rewards) versus genuine learning gains
- **Source**: research/outcomes.md lines 287-365
- **Rationale**: Provides LLMs comprehensive overview of evidence types, verification status, independent analysis, and critical gaps in evidentiary basis for Alpha's claims

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key evidence attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (10 properties):
  - `primary_data_source` (string) - Main source of performance evidence
  - `data_collection_timeframe` (string) - Period over which Alpha has collected data
  - `third_party_assessments` (array) - Independently administered standardized tests used
  - `independent_verification_status` (string) - Whether claims have external academic audit
  - `peer_reviewed_research` (string) - Published academic studies on 2-Hour Learning effectiveness
  - `sample_size_disclosure` (string) - Whether Alpha publishes student counts for claims
  - `raw_data_availability` (string) - Public access to underlying test scores and metrics
  - `control_group_studies` (string) - Existence of randomized controlled trials or matched comparisons
  - `independent_analyst_reviews` (array) - Critical assessments from external researchers
  - `regulatory_evaluation` (string) - Government/education authority assessments of model
- **Source**: research/outcomes.md lines 287-365
- **Rationale**: Enables LLMs to quickly extract structured facts about evidence quality, verification status, and methodological rigor

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Internal Data Collection and Platform Analytics**: Alpha School reports "a decade of data collection and public reporting since 2014" though detailed quantitative data, raw scores, and methodological documentation are not publicly available; proprietary learning platform tracks student progress including lesson completion times, mastery assessment scores (claimed 90%+ accuracy requirement for advancement, though 80% cited in some sources), daily advancement metrics, and projected grade-level completion timelines; parent dashboards display real-time progress updates and projected mastery dates; platform data forms basis for "2x faster learning" claims by comparing internal completion times (20-30 hours per grade level) to traditional school annual hours (approximately 200 hours); however, methodology questions exist: (1) completion time calculations may not account for afternoon enrichment hours, (2) potential teaching-to-test effects if platform optimizes for assessment performance, (3) homeschool version using same platform reportedly showed only "1x learning growth" versus school environment's "2.6x growth" suggesting school-specific factors (incentives, peer culture, guides) drive results more than platform alone, (4) no independent audit of platform data collection methods or accuracy

  - **Third-Party Standardized Testing Evidence**: Alpha School uses NWEA MAP (Measures of Academic Progress) testing as primary standardized assessment, administered 3x yearly (fall, winter, spring) to all students K-12; NWEA MAP is independently administered, nationally normed assessment measuring student achievement in reading, language usage, math, and science using RIT (Rasch unIT) scale; Alpha reports students "score in top 1-2% nationally" on MAP assessments with school-level results "nearly always in 99th percentile"; Austin Scholar Substack (sympathetic source) reports detailed claims: K-2 students at "top 0.1% national performance" with 100% meeting projected RIT scores and growth rates exceeding 200% of projections, grades 3-6 performing "2-3 grade levels above peers"; CRITICAL LIMITATIONS: (1) NWEA has not independently confirmed Alpha's percentile claims or growth multiplier calculations, (2) raw RIT scores not publicly available, (3) percentile distributions not disclosed, (4) sample sizes mostly undisclosed (one cohort: only 5 students completed both fall/winter tests—insufficient for statistical confidence), (5) time periods for claims not always specified, (6) demographic breakdowns absent, (7) potential teaching-to-test effects unknown; high school uses College Board SAT and AP exams—independently administered and scored by College Board; Alpha reports 1470 average SAT, 1535 senior median SAT, and 90% earning 4s or 5s on AP exams; College Board score reports verifiable for individual students but aggregate data not independently published or audited by College Board

  - **College Outcomes Evidence**: First graduating class (2025) provides initial college outcome data—12 students total with 11 (91.7%) matriculating to four-year universities; college acceptances included Stanford, Vanderbilt, USC, Northeastern, Texas A&M, University of Texas at Austin; college acceptance letters verifiable for individual students but aggregate data not independently audited; six students (50%) achieved National Merit Scholar or Commended Scholar status (National Merit Scholarship Corporation confirmation possible but not publicly verified for Alpha students); five students earned AP Scholar with Distinction recognition from College Board; CRITICAL LIMITATIONS: (1) first class just graduated 2025 so no multi-year college retention data, college GPA data, graduation rate data, or career outcome data exists, (2) potential selection effects as admission requirements (some sources: "top tenth percentile" or "top 3% IQ test") and $40,000+ tuition pre-select academically advanced, college-bound students, (3) no comparison data from demographically similar student cohorts who did not attend Alpha, (4) sample size very small (12 students) for statistical conclusions

  - **Independent Analyst Reviews and Critical Assessments**: Most substantial independent analysis from Astral Codex Ten blog review (based on Tildes.net parent testimony) of parent who moved family to Austin specifically to test Alpha School; reviewer confirms kids "marching through material roughly three times faster than peers" and calls result "genuine progress" but identifies critical methodological concerns: (1) sample sizes too small for statistical confidence—one cohort analyzed had only 5 students complete both fall/winter MAP tests, (2) no control groups or matched comparison studies to isolate Alpha's effect, (3) admission requirements and high tuition create selection bias pre-selecting high-performing students, (4) marketing overstates AI role—platform described as "turbocharged spreadsheet checklist" not generative AI tutor as advertised, (5) not genuine "two-hour learning"—actual academic engagement is 3-4 hours, (6) bundle approach (platform + incentives + peer culture + guides) matters more than any single element making it difficult to identify active ingredients; Frank Hecker independent analysis reaches similar conclusions emphasizing inability to isolate platform effects from student selection and noting homeschool version's inferior results (1x vs 2.6x growth) suggests school environment factors crucial; Austin Scholar Substack provides most detailed MAP data claims but appears to be Alpha supporter rather than independent critic; no peer-reviewed academic research on 2-Hour Learning model published in education journals; no independent academic institution (university education department, think tank, research institute) has conducted audit of Alpha's results

  - **Regulatory and Institutional Evaluation**: Pennsylvania Department of Education rejected Alpha School charter application (2025) citing "the artificial intelligence instructional model being proposed by this school is untested"—indicating regulatory skepticism about evidence base for Alpha's approach; charter rejection suggests education authorities not convinced by Alpha's self-reported outcome claims; Austin Chronicle awarded Alpha "Most School of the Future School" recognition (2024) in "Best of Austin" Kids and Family category—local media recognition but not academic/regulatory validation; no accreditation body evaluations publicly available; no government education agency endorsements of 2-Hour Learning model; no third-party education research organizations (e.g., RAND, Brookings, Education Trust) have published studies on Alpha School outcomes

  - **Evidence Gaps and Missing Data**: Critical information not publicly available includes: (1) Raw test score data—no RIT score distributions, percentile breakdowns, individual student trajectories, or time-series data published; (2) Sample sizes—undisclosed for most claims except single small cohort (5 students); (3) Longitudinal data—no tracking of students over multiple years, college completion rates, career outcomes, or long-term skill retention; (4) Demographic breakdowns—no outcome data by socioeconomic status, prior academic performance, race/ethnicity, learning differences, or special education needs; (5) Attrition rates—no public data on student retention, reasons for departure, or outcomes for students who left Alpha; (6) Comparison groups—no randomized controlled trials, matched control studies, or demographically similar non-Alpha cohorts; (7) Methodology documentation—platform data collection methods, assessment validation, growth calculation formulas not published; (8) Selection bias data—admission requirements vary by source ("top tenth percentile" or "top 3% IQ test") and not clearly documented; (9) Teaching-to-test analysis—no published examination of whether curriculum optimizes specifically for MAP assessments; (10) Incentive effects—cash/reward systems may boost test performance without equivalent learning gains but no research isolating this factor
- **Source**: research/outcomes.md lines 287-365, lines 28-252 (original claims), lines 253-286 (testimonials)
- **Rationale**: Provides comprehensive documentation of evidence types, verification status, independent analysis, and critical gaps organized by category

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating evidence quality and limitations
- **Examples to Include** (3 required):
  - **MAP Testing Evidence - Small Sample Size Concern**: Austin Scholar Substack reports detailed MAP growth data for one Alpha School cohort claiming exceptional performance with growth rates exceeding 200% of NWEA projections. However, independent analyst review reveals this cohort consisted of only 5 students who completed both fall and winter MAP tests. Statistical reliability requires larger sample sizes—with n=5, a single high-performing student can dramatically skew average results and percentile rankings. NWEA itself has not independently confirmed Alpha's percentile claims or growth multiplier calculations (2.6x average, up to 6.5x for top performers). This illustrates critical limitation: while MAP testing is independently administered and nationally normed (strong evidence), Alpha's interpretation and reporting of MAP results lacks independent verification and suffers from insufficient sample sizes for statistical confidence.

  - **College Outcomes Evidence - Verification and Selection Effects**: Alpha High School's first graduating class (2025) achieved 11 of 12 students (91.7%) matriculating to four-year universities including Stanford, Vanderbilt, USC, and UT Austin. College acceptance letters are verifiable artifacts providing stronger evidence than self-reported test scores. However, critical context limits inferential value: (1) sample size extremely small (n=12) preventing statistical generalization, (2) admission requirements reportedly require "top tenth percentile" or "top 3% IQ test" performance plus $40,000+ annual tuition creating multiple selection filters that pre-select academically advanced, college-bound students, (3) no comparison cohort of demographically similar students who attended traditional schools rather than Alpha, (4) first class just graduated so no data on college retention, GPAs, graduation rates, or career outcomes, (5) selection effects may explain college outcomes as much or more than Alpha's instructional model. This illustrates challenge of inferring causality from outcomes without randomized assignment or matched controls.

  - **Independent Analyst Review - Critical Assessment with Partial Confirmation**: Parent who moved family to Austin specifically to test Alpha School provides most detailed independent review (via Tildes.net, amplified by Astral Codex Ten). Reviewer confirms "genuine progress" with kids "marching through material roughly three times faster than age-matched peers"—partial empirical confirmation of learning speed claims. However, same reviewer identifies multiple concerns: (1) not genuine two-hour learning (actually 3-4 hours academic engagement), (2) not AI-driven as marketed (platform is "turbocharged spreadsheet checklist" not generative AI tutor), (3) bundle approach (platform + incentives + culture + guides) makes it impossible to isolate platform effectiveness, (4) small sample sizes undermine statistical confidence, (5) selection effects from admission requirements and high tuition, (6) estimates approach would benefit only 30-70% of children not universal population. This illustrates pattern where independent reviewers confirm some subjective improvements while raising serious methodological concerns about quantitative claims and generalizability.
- **Source**: research/outcomes.md lines 287-365, lines 28-252, lines 253-286
- **Rationale**: Grounds abstract discussion of evidence quality with concrete examples illustrating verification challenges, sample size limitations, and selection effects

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Outcomes Claims (Spec 015) - Alpha's self-reported performance claims
  - Outcomes Testimonials (Spec 017) - Student, parent, and educator testimonials
  - Outcomes Limitations (Spec 018) - What we don't know and methodological concerns
  - Curriculum Assessments (Spec 014) - How outcomes are measured
  - Educational Philosophy (Spec 006) - Underlying learning model
  - Two-Hour Learning Model (Spec 007) - Core instructional approach
  - AI Integration (Spec 008) - AI role in learning outcomes
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected documentation about outcomes

#### FR1.7: FAQs Section
- **Requirement**: Common questions about evidence quality with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: What evidence supports Alpha School's performance claims?**
    A: Alpha School's evidence consists of: (1) Internal platform analytics tracking student progress since 2014 (not independently audited, raw data not public), (2) NWEA MAP standardized test results administered 3x yearly (independently administered tests but Alpha's interpretation/reporting not externally verified, raw scores not public), (3) College Board SAT/AP exam scores (independently administered, individual scores verifiable but aggregate data not independently audited), (4) College acceptance letters from first graduating class (verifiable artifacts for individual students but n=12 too small for statistical conclusions), (5) Student/parent testimonials (subjective reports subject to selection bias). No peer-reviewed academic research on 2-Hour Learning model exists. No independent academic institution has audited Alpha's results.

  - **Q: Have independent researchers studied Alpha School's outcomes?**
    A: No peer-reviewed academic studies of Alpha School or 2-Hour Learning model have been published. Most substantial independent analysis comes from blog reviews (Astral Codex Ten, Frank Hecker) rather than academic researchers. These independent analysts confirm some subjective improvements (parent testimony of "genuine progress" with kids learning "roughly three times faster") but raise serious methodological concerns: small sample sizes (one cohort: 5 students), lack of control groups, selection effects from admission requirements and $40K+ tuition, inability to isolate platform from school environment factors, marketing overstatements (not genuine AI tutor, not two-hour learning). No university education departments, think tanks, or education research organizations have conducted studies on Alpha. Pennsylvania Department of Education (2025) rejected charter application citing "untested" instructional model.

  - **Q: Are Alpha's MAP test results independently verified?**
    A: Partially. NWEA MAP testing is independently administered and nationally normed standardized assessment—this provides stronger evidence base than internal assessments. However, Alpha's interpretation and reporting of MAP results are not independently verified: (1) NWEA has not confirmed Alpha's claims of "top 1-2% nationally" or "99th percentile school-wide" performance, (2) Alpha's growth multiplier calculations (2.6x average, up to 6.5x for top performers) are Alpha's own calculations not NWEA-verified metrics, (3) raw RIT scores not publicly available, (4) percentile distributions not disclosed, (5) sample sizes mostly undisclosed except one small cohort (5 students), (6) no independent analysis of whether curriculum teaches specifically to MAP tests. Individual MAP scores exist and are real, but aggregate claims and interpretations lack external validation.

  - **Q: What are the main evidence gaps in Alpha's outcome claims?**
    A: Critical evidence gaps include: (1) Raw data not public—no RIT score distributions, percentile breakdowns, individual student trajectories, or detailed metrics; (2) Sample sizes undisclosed for most claims (one disclosed cohort: only 5 students—too small for statistical confidence); (3) No longitudinal data—first class just graduated 2025 so no college retention, career outcome, or long-term skill retention data; (4) No demographic breakdowns by socioeconomic status, prior achievement, race/ethnicity, or learning differences; (5) No attrition data—student retention rates and departure reasons not published; (6) No control groups—no randomized controlled trials or matched comparison studies to isolate Alpha's effect; (7) Selection bias undocumented—admission requirements vary by source and not clearly specified; (8) No peer-reviewed research or independent academic audit; (9) Methodology not published—growth calculation formulas, platform validation, data collection methods not documented.

  - **Q: Why do independent analysts express concerns about Alpha's evidence?**
    A: Independent analysts (Astral Codex Ten, Frank Hecker) identify several methodological issues: (1) Sample sizes too small—one analyzed cohort had only 5 students complete both MAP tests, insufficient for statistical reliability; (2) Selection effects—admission requirements ("top tenth percentile" or "top 3% IQ test") plus $40,000+ tuition pre-select high-performing students making it unclear whether outcomes result from Alpha's methods or student selection; (3) No control groups—without randomized assignment or matched comparisons, cannot isolate Alpha's effect from confounding factors; (4) Platform vs. environment confusion—homeschool version using same platform showed only 1x growth versus school's 2.6x suggesting school factors (incentives, culture, guides) matter more than platform; (5) Marketing overstatements—platform described as "turbocharged spreadsheet checklist" not generative AI tutor, actual academic time 3-4 hours not two hours; (6) No longitudinal data or peer-reviewed research; (7) Regulatory skepticism evidenced by charter rejection citing "untested" model.
- **Source**: research/outcomes.md lines 287-365
- **Rationale**: Addresses common questions about evidence quality with transparency about verification status, methodological limitations, and independent analyst concerns

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/outcomes.md (lines 8-24) plus emphasis on independent analyst sources:
  - Alpha School Homepage - https://alpha.school
  - Alpha School Results Page - https://alpha.school/results
  - Alpha School FAQ - https://alpha.school/faq
  - Fox News Article - Texas Private Schools Use AI
  - Astral Codex Ten Review - Your Review Alpha School (primary independent analysis)
  - Frank Hecker Blog - Critical Analysis (independent analysis)
  - College Transitions - Alpha High School Profile
  - Austin Scholar Substack #173 (sympathetic coverage with detailed MAP claims)
  - FOX 7 Austin - Alpha School Two Hour Learning
  - Niche Reviews - Parent Testimonials
  - NWEA MAP Testing Information
  - Pennsylvania Department of Education - Charter Application Decision (2025)
  - Austin Chronicle Best of Austin 2024
- **Source**: research/outcomes.md lines 8-24
- **Rationale**: Enables LLMs to understand source provenance and distinguish between Alpha-originated claims, sympathetic coverage, and independent critical analysis

#### FR1.9: Metadata Footer
- **Requirement**: Include last updated and last verified dates
- **Format**:
  ```markdown
  ---
  *Last updated: YYYY-MM-DD*
  *Last verified: YYYY-MM-DD*
  ```
- **Rationale**: Enables LLMs to assess documentation currency

---

## Functional Requirements: Quality Standards

### FR2: Content Quality

#### FR2.1: Factual Accuracy
- **Requirement**: All evidence descriptions must be traceable to research/outcomes.md
- **Standard**: Every factual claim must reference research file line numbers
- **Rationale**: Ensures verifiability and prevents fabrication

#### FR2.2: Evidence Quality Assessment
- **Requirement**: CRITICAL - Every evidence source must be characterized by verification status
- **Examples**:
  - "independently administered and nationally normed (NWEA MAP testing)" vs. "self-reported without independent verification (growth multipliers)"
  - "verifiable artifacts (college acceptance letters)" vs. "undisclosed raw data"
  - "independent analyst review (Astral Codex Ten)" vs. "sympathetic coverage (Austin Scholar)"
- **Rationale**: LLMs must understand evidence quality gradations to avoid misrepresenting unverified claims as verified facts

#### FR2.3: Methodological Concerns Integration
- **Requirement**: Document must prominently integrate methodological limitations alongside evidence descriptions
- **Standard**: Every evidence type section must include CRITICAL LIMITATIONS subsection addressing sample sizes, verification status, selection effects, and missing data
- **Rationale**: Prevents LLMs from presenting weak evidence as strong by providing balanced context

#### FR2.4: Neutral Presentation
- **Requirement**: Document both what evidence exists AND what evidence is missing without advocacy
- **Standard**: Avoid language that dismisses Alpha's approach or overstates concerns; focus on factual description of evidence quality
- **Rationale**: LLMs should present balanced, objective assessment of evidence landscape

---

## Implementation Phases

### Phase 2.0: Documentation Writing

**Objective**: Write `reference/outcomes/evidence.md` following this specification

See `checklist.md` for detailed implementation tasks.

---

## Technical Decisions

### Decision 1: Evidence Quality Taxonomy
**Choice**: Categorize evidence by verification status (independently verified, partially verified, self-reported, unverified)
**Rationale**: Enables LLMs to distinguish evidence quality levels rather than treating all claims equally
**Impact**: Properties table includes verification status; details subsections include CRITICAL LIMITATIONS

### Decision 2: Prominent Integration of Methodological Concerns
**Choice**: Integrate limitations within each evidence type section rather than segregating to separate "Concerns" section
**Rationale**: Prevents LLMs from missing critical context when extracting information about specific evidence types
**Impact**: Details subsections include CRITICAL LIMITATIONS inline with evidence descriptions

### Decision 3: Independent Analyst Review Emphasis
**Choice**: Dedicate subsection to independent analyst reviews (Astral Codex Ten, Frank Hecker) despite no peer-reviewed research
**Rationale**: These represent best available independent assessments of Alpha's claims; blog format doesn't diminish methodological sophistication of analysis
**Impact**: Details section includes "Independent Analyst Reviews and Critical Assessments" subsection

### Decision 4: Evidence Gaps as Separate Subsection
**Choice**: Create dedicated "Evidence Gaps and Missing Data" subsection cataloging what is not known
**Rationale**: Explicitly documenting absent evidence is as important as documenting present evidence for LLM comprehension
**Impact**: Details section includes comprehensive catalog of missing data, undisclosed sample sizes, and absent research

---

## Current State Analysis

### Existing Documentation

**Research Foundation**: `research/outcomes.md` (lines 287-365) provides comprehensive evidence quality analysis including:
- Claims vs. Evidence Summary Table (lines 327-337)
- Critical Considerations for Documentation (lines 339-348)
- Missing Quantitative Data catalog (lines 291-299)
- Missing Verification catalog (lines 301-308)
- Selection Bias Questions (lines 309-315)
- Methodology Questions (lines 317-322)

**Related Specs**:
- Spec 015 (Outcomes Claims) - documents what Alpha claims
- Spec 016 (this spec) - documents evidence quality for claims
- Spec 017 (Outcomes Testimonials) - will document subjective testimonials
- Spec 018 (Outcomes Limitations) - will synthesize evidence gaps and knowledge boundaries

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Original Research**: Not conducting new analysis of Alpha's outcomes; synthesizing existing research only
2. **Advocacy or Critique**: Not arguing Alpha's model works or doesn't work; documenting evidence quality objectively
3. **Testimonials**: Student/parent testimonials covered in Spec 017
4. **Comprehensive Limitations Synthesis**: Full discussion of knowledge boundaries in Spec 018
5. **Assessment Methodology**: How Alpha measures outcomes covered in Spec 014
6. **Predictive Claims**: Not making judgments about Alpha's future outcomes or scalability

### Explicit Boundaries

- **Evidence Documentation Only**: This spec catalogs what evidence exists, what its quality is, and what is missing
- **No New Claims**: Not introducing performance claims beyond those in research/outcomes.md
- **No Conclusions About Effectiveness**: Not determining whether Alpha's model is effective; documenting evidence base only
- **Verification Status Over Judgment**: Focus on whether claims are verified, not whether claims are credible

---

## Success Metrics

### Documentation Completeness
- [ ] All 10 properties documented in structured table
- [ ] All 6 details subsections written with CRITICAL LIMITATIONS
- [ ] All 3 examples illustrate evidence quality and limitations
- [ ] All 5 FAQs address common evidence questions
- [ ] All sources from research/outcomes.md cited with retrieval dates

### Quality Standards
- [ ] Every evidence type characterized by verification status (FR2.2)
- [ ] Methodological concerns integrated within evidence descriptions (FR2.3)
- [ ] Neutral presentation balances what is known and unknown (FR2.4)
- [ ] All factual claims traceable to research/outcomes.md line numbers (FR2.1)

### LLM Usability
- [ ] LLMs can distinguish independently verified evidence from self-reported claims
- [ ] LLMs can extract structured evidence quality attributes from properties table
- [ ] LLMs understand critical gaps in evidentiary basis (sample sizes, raw data, peer review)
- [ ] LLMs can navigate to related outcomes documentation via Related links

---

## Related Specifications

- **Spec 001d**: Research Outcomes Domain (provides research foundation)
- **Spec 015**: Outcomes Claims (documents what Alpha claims)
- **Spec 017**: Outcomes Testimonials (will document subjective testimonials)
- **Spec 018**: Outcomes Limitations (will synthesize evidence gaps and knowledge boundaries)
- **Spec 014**: Curriculum Assessments (how outcomes are measured)
- **Spec 006**: Educational Philosophy (theoretical foundation)
- **Spec 007**: Two-Hour Learning Model (instructional approach)
- **Spec 008**: AI Integration (role of AI in outcomes)

---

## References

- NWEA MAP Testing Information: https://www.nwea.org/map-growth/
- Astral Codex Ten - Your Review Alpha School: https://www.astralcodexten.com/p/your-review-alpha-school
- Frank Hecker Blog - Critical Analysis: (URL from research/outcomes.md)
- Pennsylvania Department of Education - Charter School Application Process
- Research Methodology Standards in Education Research

---

*Spec last updated: 2026-01-20*
