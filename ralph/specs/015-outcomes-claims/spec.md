# Spec 015: Outcomes Claims

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001d (Research Outcomes Domain)
**Output**: `reference/outcomes/claims.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "What does Alpha School claim about student outcomes?" for LLM consumption. This document synthesizes findings from `research/outcomes.md` into a structured, authoritative catalog of Alpha School's self-reported performance claims across learning speed, standardized testing, academic achievements, college outcomes, and student satisfaction—with clear attribution indicating these are Alpha's claims rather than independently verified facts.

### Scope

Transform research findings into a structured reference document covering:
- **Learning Speed Claims**: 2x-6.5x growth multipliers, grade-level completion timelines (20-30 hours vs. 200 hours)
- **Standardized Test Performance**: MAP testing claims (2.6x-6.5x growth, 99th percentile, top 1-2% nationally)
- **Academic Achievement Claims**: SAT scores (1470 average, 1535 senior median), AP exam performance (90% earn 4s/5s), National Merit recognition (50% of first class)
- **College Outcomes**: First graduating class acceptances (Stanford, Vanderbilt, USC, UT Austin), college matriculation rate (11 of 12)
- **Student Satisfaction**: Self-reported school preference (96% love school, 40-60% prefer school to vacation)
- **Remediation Claims**: Students "two to three years behind" can catch up in 40-90 hours
- **Attribution and Verification Status**: Clear indication all claims are self-reported without independent third-party verification

### Output File

`reference/outcomes/claims.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Outcomes Claims" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Outcomes Claims

  > [One-sentence definition capturing Alpha School's self-reported performance claims across learning speed (2x-6.5x growth), standardized testing (99th percentile MAP scores), academic achievements (1470 SAT average), college outcomes (11 of 12 graduates to four-year universities), and student satisfaction (96% report loving school)—noting these are Alpha's claims without independent third-party verification]
  ```
- **Source**: Synthesize from research/outcomes.md lines 28-252
- **Rationale**: Follows API-style documentation pattern established in Specs 002-014, with clear attribution framing

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's outcome claims
- **Content Coverage**:
  - Paragraph 1: Alpha School makes substantial performance claims based on internal data collection since 2014—students reportedly learn "twice as fast" as traditional school peers, with top performers achieving up to 6.5x growth on nationally normed MAP standardized tests; school reports students consistently score in "top 1-2%" nationally on MAP assessments and reach "99th percentile" school-wide; claims extend beyond test scores to include 1470 average SAT scores, 90% of students earning 4s or 5s on AP exams, and 50% of first graduating class achieving National Merit Scholar or Commended Scholar status; remediation claims suggest students "two to three years behind" can reach grade level in 40-90 hours of focused study

  - Paragraph 2: Founder Joe Liemandt describes Alpha as "the best-performing academic school in the U.S." with ability to "move students from the bottom 25% to the top 25% in two years"; first graduating class (2025) saw 11 of 12 graduates matriculate to four-year universities including Stanford, Vanderbilt, USC, and University of Texas at Austin; student satisfaction claims include 96% reporting they "love school" and 40-60% preferring school to vacation; Alpha High School runs year-round at student request; school reports "a decade of data collection and public reporting since 2014"

  - Paragraph 3: CRITICAL CONTEXT: All performance claims originate from Alpha School itself and are self-reported without independent third-party verification; no independent academic institution has audited Alpha's results; raw MAP scores, percentile distributions, sample sizes, and demographic breakdowns are not publicly available; potential selection effects exist as admission requirements may pre-select high-performing students (some sources indicate top 10th percentile or top 3% IQ test requirement); $40,000+ tuition creates socioeconomic filtering; independent analysts (Astral Codex Ten, Frank Hecker) raise methodological concerns including small sample sizes (one cohort: 5 students completed both fall/winter MAP tests), lack of control groups, absence of longitudinal data, and inability to isolate platform effects from student selection; charter application rejections (Pennsylvania Dept of Education, 2025) cited "untested" AI instructional model
- **Source**: research/outcomes.md lines 28-252, 287-365
- **Rationale**: Provides LLMs comprehensive overview of Alpha's claims balanced with critical context about verification status and methodological limitations

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key outcome claim attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (10 properties):
  - `learning_speed_claim` (string) - Alpha's reported learning velocity compared to traditional schools
  - `map_growth_claim_average` (string) - Reported MAP test growth for typical students
  - `map_growth_claim_top_performers` (string) - Reported MAP test growth for highest achievers
  - `map_percentile_claim` (string) - Reported school-level MAP percentile performance
  - `sat_score_claim_average` (string) - Reported average SAT score across students
  - `sat_score_claim_senior_median` (string) - Reported median SAT for senior class
  - `ap_exam_performance_claim` (string) - Reported percentage earning 4s or 5s on AP exams
  - `college_matriculation_claim` (string) - First graduating class four-year university enrollment
  - `student_satisfaction_claim` (string) - Self-reported student school preference
  - `verification_status` (string) - Independent validation status for all claims
- **Source**: research/outcomes.md lines 28-252
- **Rationale**: Enables LLMs to quickly extract structured facts about Alpha's outcome claims with explicit verification status

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Learning Speed and Growth Claims**: Alpha School claims students "learn twice as fast as their peers" in traditional schools; top-performing students achieve 2.6x average growth on MAP tests compared to national norms, with top two-thirds reaching 3.6x growth and highest performers up to 6.5x growth; school reports students can master "entire year's math curriculum in just 20-30 hours" compared to traditional 200 hours; remediation timeline claims suggest students "two years behind" reach grade level in "40-60 hours of focused study" while students "three years behind" require approximately 60-90 hours; full grade level reportedly requires about 20 hours to master; claims based on Alpha's internal platform tracking and MAP test comparisons; no independent verification of these growth multipliers exists; potential confounds include selection effects, teaching to test, and lack of control groups

  - **Standardized Test Performance Claims**: Alpha reports students "score in the top 1% nationally" on NWEA MAP standardized assessments; school-level MAP results claimed to be "nearly always in the 99th percentile"; Fox News coverage reports Alpha classes as "top 2% in the country"; detailed MAP data from Austin Scholar Substack (sympathetic source) claims K-2 students perform at "top 0.1% national performance" with 100% meeting projected RIT scores and growth rates exceeding 200% of projections; grades 3-6 reportedly perform "2-3 grade levels above their peers"; no raw MAP scores, RIT score distributions, or percentile breakdowns publicly available; NWEA (test administrator) has not independently confirmed Alpha's percentile claims; one cohort analyzed had only 5 students complete both fall/winter tests—insufficient sample size for statistical confidence

  - **High School Academic Achievement Claims**: Alpha High School reports average SAT score of 1470 across all students; senior class median SAT claimed at 1535 (reported as "highest in Texas" by Austin Scholar); individual student examples include 790 math scores from multiple students; AP exam performance claims include 90% of students earning scores of 4 or 5; first graduating class (2025, 12 students) saw 50% achieve National Merit Scholar or Commended Scholar status and five students earn AP Scholar with Distinction recognition; claims based on Alpha's internal reporting; College Board score reports are verifiable for individual students but aggregate data not independently published or audited; potential selection effects as admission requirements may filter for academically advanced students

  - **College Outcomes and First Graduating Class**: Alpha High School's first graduating class (2025) included 12 students; 11 of 12 graduates (91.7%) matriculated to four-year universities; college acceptances included Stanford, Vanderbilt, USC (University of Southern California), Northeastern, Texas A&M, and University of Texas at Austin; founder Joe Liemandt claims Alpha students who have been in system for "a couple of years consistently rank in the top 1% nationally"; no longitudinal outcome data available tracking college completion rates, GPAs, career outcomes, or long-term skill retention; first class graduated 2025 so multi-year college success data does not yet exist; college acceptance lists are verifiable but not independently confirmed

  - **Student Satisfaction and Engagement Claims**: Alpha School reports 96% of students say they "love school"; 40-60% of students report preferring school to vacation; Alpha High School runs year-round at student request (claimed); student testimonials include Elle Kristine (junior): "I have a lot of friends at traditional school...they're so stressed out, and they're just miserable"; parent testimonial from Scott Jensen: "It's working. It's working for all the kids at the school. There's no one that it isn't working for"; critical independent reviewer (parent who moved family to Austin specifically for Alpha) confirms "genuine progress" with kids "marching through material roughly three times faster than peers" but notes marketing claims overstated—not genuine two-hour learning (actually 3-4 hours), not AI-driven as marketed, and bundle approach (platform + incentives + culture) matters more than individual elements; no systematic satisfaction survey data published; testimonials may reflect selection bias as dissatisfied families who left are not represented

  - **Claims About School-Level Performance**: Founder Joe Liemandt describes Alpha as "the best-performing academic school in the U.S."; claims ability to "move students from the bottom 25% to the top 25% in two years"; Alpha markets "a decade of data collection and public reporting since 2014" though detailed quantitative data, raw scores, and methodological documentation are not publicly available; multiple AI systems reportedly analyzed Alpha data and concluded performance in "top 1% of districts nationally" with growth metrics surpassing elite private schools (per Austin Scholar Substack); charter school application in Pennsylvania (2025) was rejected with Pennsylvania Department of Education stating "the artificial intelligence instructional model being proposed by this school is untested"; regulatory skepticism suggests claims not universally accepted by education authorities
- **Source**: research/outcomes.md lines 28-252, 287-365
- **Rationale**: Provides comprehensive documentation of Alpha's claims organized by category with appropriate context about verification gaps and methodological concerns

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating specific outcome claims
- **Examples to Include** (3 required):
  - **Learning Speed Claim - Grade-Level Mastery**: Alpha School claims a 4th grade student working through the AI platform can complete an entire year's worth of mathematics curriculum in 20-30 hours of focused study—compared to traditional schools' approximately 200 hours over a full academic year. Student would progress through topics (multiplication, division, fractions, decimals, basic geometry) at their own pace, advancing only after demonstrating 90%+ mastery on each unit. Platform tracks daily progress, and parent dashboard shows projected completion timeline. Alpha attributes accelerated mastery to AI-powered adaptive learning, immediate feedback, and elimination of time wasted in traditional classroom management. VERIFICATION STATUS: Claim is self-reported by Alpha School based on internal platform data; no independent academic study has verified this timeline; potential confounds include student selection effects and teaching to platform assessments.

  - **Standardized Test Performance Claim - MAP Growth**: Student takes NWEA MAP Reading assessment in fall showing RIT score of 185 (50th percentile for grade level). Spring MAP test shows RIT score of 201—16-point gain. Alpha School compares this student's growth to NWEA national norms for typical one-year growth (approximately 6 RIT points for this grade) and reports student achieved 2.6x growth compared to traditional peer cohort. Mid-year parent update displays "99th percentile" ranking. Alpha attributes accelerated growth to 2-Hour Learning model efficiency. VERIFICATION STATUS: While NWEA MAP testing is independently administered and nationally normed, Alpha's growth multiplier calculations and percentile rankings are self-reported; NWEA has not independently confirmed Alpha's percentile claims; raw data, sample sizes, and statistical methodology not publicly available.

  - **College Outcome Claim - First Graduating Class**: Alpha High School's first graduating class (2025) consisted of 12 students. Of these, 11 students (91.7%) enrolled in four-year universities including one student accepted to Stanford University, another to Vanderbilt University, and multiple students to University of Texas at Austin and Texas A&M. Six students (50%) achieved National Merit Scholar or Commended Scholar recognition. Alpha School presents this as evidence of superior college preparation through 2-Hour Learning model and emphasis on standardized test performance. VERIFICATION STATUS: College acceptance letters are verifiable for individual students but aggregate data not independently audited; first class graduated 2025 so no multi-year college retention or success data available; potential selection effects as admission requirements and $40,000+ tuition may pre-select college-bound, academically advanced students.
- **Source**: research/outcomes.md lines 28-112, 129-152
- **Rationale**: Grounds abstract outcome claims with concrete examples while maintaining clear attribution and verification status for each claim

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Outcomes Evidence (Spec 016) - Supporting data and research basis for claims
  - Outcomes Testimonials (Spec 017) - Student, parent, and educator testimonials
  - Outcomes Limitations (Spec 018) - What we don't know and methodological concerns
  - Curriculum Assessments (Spec 014) - How outcomes are measured
  - Educational Philosophy (Spec 006) - Underlying learning model
  - Two-Hour Learning Model (Spec 007) - Core instructional approach claimed to drive outcomes
  - AI Integration (Spec 008) - AI role in reported outcomes
  - Curriculum Overview (Spec 011) - What students learn
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected documentation about outcomes

#### FR1.7: FAQs Section
- **Requirement**: Common questions about outcome claims with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: What are Alpha School's main performance claims?**
    A: Alpha School claims students "learn twice as fast" as traditional school peers, with top performers achieving up to 6.5x growth on nationally normed MAP standardized tests. School reports students score in "top 1-2%" nationally on MAP assessments with school-level results "nearly always in the 99th percentile." High school students report 1470 average SAT scores (1535 median for seniors), 90% earning 4s or 5s on AP exams, and 50% of first graduating class achieving National Merit recognition. Alpha claims students can master entire grade-level curriculum in 20-30 hours versus traditional 200 hours.

  - **Q: Are these outcome claims independently verified?**
    A: No. All Alpha School performance claims are self-reported without independent third-party verification. No independent academic institution has audited Alpha's results. While NWEA MAP testing is independently administered and nationally normed, Alpha's interpretation and reporting of MAP results (growth multipliers, percentile rankings) have not been externally confirmed. Raw MAP scores, percentile distributions, sample sizes, time periods, and demographic breakdowns are not publicly available. College acceptances are verifiable for individual students but aggregate data not independently audited.

  - **Q: What concerns do independent analysts raise about Alpha's claims?**
    A: Independent reviewers (Astral Codex Ten, Frank Hecker) identify several methodological concerns: (1) Small sample sizes—one analyzed cohort had only 5 students complete both fall/winter MAP tests; (2) No randomized controlled trials or matched comparison studies; (3) Potential selection effects as admission requirements (some sources cite top 10th percentile or top 3% IQ requirement) and $40,000+ tuition pre-select high-performing students; (4) Inability to isolate platform effects from student selection; (5) Marketing overstates AI role—platform described as "turbocharged spreadsheet checklist" rather than generative AI tutor; (6) No longitudinal data tracking college completion or career outcomes; (7) Charter application rejections suggest regulatory skepticism about "untested" model.

  - **Q: How does Alpha School measure the "2x faster learning" claim?**
    A: Alpha School bases learning speed claims on two data sources: (1) Internal platform tracking showing students complete grade-level material in 20-30 hours versus traditional schools' approximately 200 hours, and (2) NWEA MAP standardized test growth rates showing 2.6x average growth (up to 6.5x for top performers) compared to national norms. However, these measurements have limitations: platform completion time doesn't account for afternoon enrichment hours or potential teaching-to-test effects; MAP growth multipliers are Alpha's calculations not independently verified; homeschool version using same platform yielded only "1x learning growth" suggesting school environment (incentives, guides, culture) drives results more than platform alone.

  - **Q: What college outcomes has Alpha School achieved?**
    A: Alpha High School's first graduating class (2025) consisted of 12 students, with 11 (91.7%) enrolling in four-year universities. College acceptances included Stanford, Vanderbilt, USC, Northeastern, Texas A&M, and University of Texas at Austin. Six students (50%) achieved National Merit Scholar or Commended Scholar status. However, first class just graduated in 2025 so no multi-year data exists on college retention, GPAs, graduation rates, or career outcomes. Potential selection effects as admission requirements and high tuition may pre-select college-bound students. No comparison data from demographically similar student cohorts.
- **Source**: research/outcomes.md lines 28-252, 287-365
- **Rationale**: Addresses common questions about Alpha's outcome claims with appropriate transparency about verification status, methodological limitations, and independent analyst concerns

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/outcomes.md (lines 8-24):
  - Alpha School Homepage - https://alpha.school
  - Alpha School Results Page - https://alpha.school/results
  - Alpha School FAQ - https://alpha.school/faq
  - Fox News Article - Texas Private Schools Use AI
  - Astral Codex Ten Review - Your Review Alpha School
  - College Transitions - Alpha High School Profile
  - Austin Scholar Substack #173
  - FOX 7 Austin - Alpha School Two Hour Learning
  - Frank Hecker Blog - Critical Analysis
  - Colossus Podcast - Joe Liemandt Interview
  - Marginal Revolution Profile
  - Tildes - Parent Review
  - Austin Chronicle - Best of Austin 2024
- **Source**: research/outcomes.md lines 8-24
- **Rationale**: Provides citation trail for claim verification and enables readers to examine original sources

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
- **Sources**: research/outcomes.md lines 28-252 (claims), 287-365 (limitations and critical analysis)
- **Verification**: Every outcome claim must cite specific research file lines
- **Rationale**: Maintains fact traceability and prevents speculation

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish between Alpha School's self-reported claims and independently verified evidence
- **Attribution Patterns**:
  - Outcome claims: "Alpha School claims...", "Alpha reports...", "according to Alpha materials...", "Alpha School describes..."
  - Unverified data: "self-reported without independent third-party verification", "Alpha's claims have not been independently audited"
  - Founder statements: "Founder Joe Liemandt claims...", "according to Alpha founder..."
  - Secondary source claims: "reported by [source name]", "per Austin Scholar Substack"
- **CRITICAL**: Never state Alpha's outcome claims as objective facts—always attribute to Alpha as source
- **Rationale**: Prevents LLMs from presenting unverified claims as independently confirmed facts; maintains epistemic rigor

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is not publicly available or documented
- **Gaps to Document**:
  - No independent third-party verification of any performance claims
  - Raw MAP scores, RIT score distributions, and percentile breakdowns not public
  - Sample sizes, time periods, grade-level breakdowns not disclosed
  - No demographic data on outcomes by socioeconomic status, prior performance, or learning differences
  - No attrition rate data or reasons for departure
  - No randomized controlled trials or matched comparison studies
  - No longitudinal college completion, GPA, or career outcome data
  - Admission requirements create potential selection effects
  - Methodology for growth multiplier calculations not published
- **Rationale**: Transparency about limitations prevents LLMs from overstating Alpha's documented evidence base

#### FR2.4: Neutral Presentation
- **Requirement**: Document outcome claims without advocacy or critique
- **Tone Guidelines**:
  - Present what Alpha claims, not whether claims are "impressive" or "exaggerated"
  - State verification limitations factually, not as accusations
  - Note both positive testimonials and critical analyst concerns neutrally
  - Avoid comparative language ("better than", "superior to")
  - Document charter rejections and regulatory skepticism factually
- **Rationale**: Reference documentation should inform, not persuade or critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Outcomes Claims"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Six Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case)
- **Rationale**: Structured data extraction for LLM fact retrieval

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels and structured narrative with VERIFICATION STATUS conclusion
- **Format**:
  ```markdown
  **Example Title**: Detailed scenario with specific data points; demonstrates claim in practice; shows Alpha's interpretation. VERIFICATION STATUS: Attribution and limitations statement.
  ```
- **Rationale**: Clear example structure with explicit verification framing for LLM comprehension

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all outcome claims are sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify learning speed and growth claims
  - Confirm "2x faster learning" claim with source
  - Confirm 2.6x, 3.6x, 6.5x MAP growth multipliers
  - Confirm grade-level mastery timeline (20-30 hours vs. 200 hours)
  - Confirm remediation claims (40-90 hours for students 2-3 years behind)
  - Source lines: research/outcomes.md 28-60
  - **Success**: Learning speed claims comprehensively documented with attribution

- [ ] **Task 1.0.2**: Verify standardized test performance claims
  - Confirm "top 1-2%" national performance claim
  - Confirm "99th percentile" school-level claim
  - Confirm K-2 "top 0.1%" claim from Austin Scholar
  - Confirm grades 3-6 "2-3 grade levels above peers" claim
  - Confirm MAP testing methodology (3x yearly, RIT scores)
  - Source lines: research/outcomes.md 46-75, 129-156
  - **Success**: MAP performance claims documented with source attribution

- [ ] **Task 1.0.3**: Verify high school academic achievement claims
  - Confirm 1470 average SAT score claim
  - Confirm 1535 senior median SAT claim
  - Confirm 90% earn 4s/5s on AP exams
  - Confirm 50% National Merit recognition (first class)
  - Confirm AP Scholar with Distinction recognition
  - Source lines: research/outcomes.md 104-128
  - **Success**: High school achievement claims documented

- [ ] **Task 1.0.4**: Verify college outcomes claims
  - Confirm first graduating class size (12 students)
  - Confirm college matriculation rate (11 of 12)
  - Confirm college names (Stanford, Vanderbilt, USC, UT Austin, etc.)
  - Confirm founder's "top 1% nationally" claim
  - Source lines: research/outcomes.md 113-124, 243-252
  - **Success**: College outcomes documented

- [ ] **Task 1.0.5**: Verify student satisfaction claims
  - Confirm 96% "love school" claim
  - Confirm 40-60% prefer school to vacation
  - Confirm year-round operation claim
  - Confirm student and parent testimonials
  - Source lines: research/outcomes.md 98-102, 254-282
  - **Success**: Satisfaction claims documented

- [ ] **Task 1.0.6**: Verify verification status and critical analysis
  - Confirm lack of independent third-party verification
  - Confirm sample size concerns (5 students in one cohort)
  - Confirm selection effect concerns (admission requirements, tuition)
  - Confirm charter rejection (Pennsylvania, 2025)
  - Confirm independent analyst concerns (Astral Codex Ten, Frank Hecker)
  - Source lines: research/outcomes.md 175-243, 287-365
  - **Success**: Verification gaps and methodological concerns documented

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/outcomes/claims.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Create directory: reference/outcomes (if not exists)
  - Create file: reference/outcomes/claims.md
  - Write H1: "Outcomes Claims"
  - Write one-sentence definition in blockquote capturing key claims with verification caveat
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write Paragraph 1: Performance claims (learning speed, MAP scores, SAT/AP, remediation)
  - Write Paragraph 2: Founder statements, college outcomes, student satisfaction, data collection timeline
  - Write Paragraph 3: Critical context (no independent verification, selection effects, analyst concerns, charter rejections)
  - Ensure all claims attributed to Alpha, not stated as facts
  - **Success**: 3-paragraph overview balances claims with critical verification context

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create "Properties" section with H2 heading
  - Build table with columns: Property | Type | Description | Example
  - Add 10 properties covering learning speed, MAP growth, SAT scores, AP performance, college outcomes, satisfaction, verification status
  - Include concrete claim examples with attribution
  - **Success**: Table enables structured fact extraction with verification status

- [ ] **Task 1.1.4**: Write details section - Learning Speed and Growth Claims (FR1.4)
  - Create "Details" section with H2 heading
  - Write subsection "Learning Speed and Growth Claims" (H3)
  - Document 2x faster learning, 2.6x-6.5x MAP growth, grade-level mastery timelines, remediation claims
  - Note lack of independent verification, potential confounds
  - **Success**: Learning speed claims comprehensively documented with limitations

- [ ] **Task 1.1.5**: Write details section - Standardized Test Performance (FR1.4)
  - Write subsection "Standardized Test Performance Claims" (H3)
  - Document top 1-2% nationally, 99th percentile school-level, K-2 top 0.1%, grades 3-6 performance
  - Note no raw MAP data public, NWEA hasn't confirmed percentile claims, small sample sizes
  - **Success**: MAP performance claims documented with verification gaps

- [ ] **Task 1.1.6**: Write details section - High School Academic Achievement (FR1.4)
  - Write subsection "High School Academic Achievement Claims" (H3)
  - Document SAT scores (1470 average, 1535 senior median), AP performance (90% earn 4s/5s), National Merit recognition (50%)
  - Note claims based on Alpha's internal reporting, potential selection effects
  - **Success**: Academic achievement claims documented with context

- [ ] **Task 1.1.7**: Write details section - College Outcomes (FR1.4)
  - Write subsection "College Outcomes and First Graduating Class" (H3)
  - Document 11 of 12 to four-year universities, college names, founder claims
  - Note no longitudinal data, first class graduated 2025, college acceptances verifiable but not independently audited
  - **Success**: College outcomes documented with limitations

- [ ] **Task 1.1.8**: Write details section - Student Satisfaction (FR1.4)
  - Write subsection "Student Satisfaction and Engagement Claims" (H3)
  - Document 96% love school, 40-60% prefer to vacation, year-round operation, testimonials
  - Include critical reviewer note about overstated marketing claims
  - Note no systematic survey data, potential selection bias
  - **Success**: Satisfaction claims documented with testimonial context

- [ ] **Task 1.1.9**: Write details section - School-Level Performance Claims (FR1.4)
  - Write subsection "Claims About School-Level Performance" (H3)
  - Document founder's "best-performing" claim, bottom-to-top 25% claim, decade of data claim, AI analysis claims
  - Note charter rejection, regulatory skepticism, lack of publicly available detailed data
  - **Success**: School-level claims documented with regulatory context

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Create "Examples" section with H2 heading
  - Write Example 1: Learning Speed Claim (grade-level mastery in 20-30 hours) with VERIFICATION STATUS
  - Write Example 2: MAP Growth Claim (2.6x growth multiplier) with VERIFICATION STATUS
  - Write Example 3: College Outcome Claim (first class to Stanford, etc.) with VERIFICATION STATUS
  - **Success**: Three concrete examples with clear verification framing

- [ ] **Task 1.1.11**: Create related links section (FR1.6)
  - Create "Related" section with H2 heading
  - Add bulleted links to 8 related documents using relative paths
  - **Success**: Navigation links enable cross-referencing

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Create "FAQs" section with H2 heading
  - Write 5 Q&A pairs covering main claims, independent verification, analyst concerns, measurement methods, college outcomes
  - Ensure transparency in all answers
  - **Success**: FAQs address common questions with appropriate verification caveats

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - Create "Sources" section with H2 heading
  - List all sources from research/outcomes.md with URLs and retrieval dates
  - **Success**: All facts traceable to sources

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add timestamp metadata
  - **Success**: Footer matches template format

---

### Phase 1.2: Quality Review

**Objective**: Verify documentation quality and accuracy

#### Review Tasks

- [ ] **Task 1.2.1**: Attribution check
  - Review every outcome claim for proper attribution ("Alpha School claims...", "Alpha reports...")
  - Ensure no claims stated as objective facts
  - Verify verification status clearly indicated
  - Confirm critical context provided for all major claims
  - **Success**: 100% of claims properly attributed to Alpha as self-reported

- [ ] **Task 1.2.2**: Fact-check all claims
  - Verify every factual claim has citation in research/outcomes.md
  - Confirm learning speed claims sourced
  - Confirm MAP performance claims sourced
  - Confirm academic achievement claims sourced
  - Confirm college outcomes sourced
  - Confirm verification gaps and analyst concerns sourced
  - **Success**: 100% of facts sourced with appropriate attribution

- [ ] **Task 1.2.3**: Consistency check
  - Verify claim descriptions consistent throughout (overview, properties, details, examples, FAQs)
  - Ensure verification language consistent ("self-reported", "not independently verified")
  - Check that critical context balanced (neither advocacy nor excessive criticism)
  - **Success**: No inconsistencies in claim presentation or verification framing

- [ ] **Task 1.2.4**: Template compliance
  - Verify document follows roadmap.md template (lines 136-173)
  - Check all required sections present
  - Verify markdown formatting
  - Ensure 10 properties in table
  - Verify 6 subsections in details
  - **Success**: Document matches template structure

- [ ] **Task 1.2.5**: Neutral tone review
  - Review all sections for neutral presentation
  - Ensure claims documented without advocacy ("impressive") or excessive critique ("exaggerated")
  - Verify verification limitations stated factually
  - Check that both testimonials and analyst concerns presented neutrally
  - **Success**: Neutral, informative tone maintained throughout

- [ ] **Task 1.2.6**: Cross-reference check
  - Verify links to related docs use correct paths
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
    claims.md           # This spec (015)
    evidence.md         # Spec 016 (related)
    testimonials.md     # Spec 017 (related)
    limitations.md      # Spec 018 (related)
```

### Dependencies

**Direct Dependencies**:
- Spec 001d: Research Outcomes Domain (provides source material)

**Related Specifications**:
- Spec 016: Outcomes Evidence (supporting data)
- Spec 017: Outcomes Testimonials (detailed testimonials)
- Spec 018: Outcomes Limitations (methodological concerns)
- Spec 014: Curriculum Assessments (how outcomes are measured)
- Spec 006: Educational Philosophy (underlying model)
- Spec 007: Two-Hour Learning Model (instructional approach)
- Spec 008: AI Integration (AI role in outcomes)
- Spec 011: Curriculum Overview (what drives outcomes)

### Data Sources

All facts sourced from research file:
- **Primary Source**: `research/outcomes.md`
  - Lines 28-60: Learning speed and growth claims
  - Lines 46-75: MAP testing claims (homepage, results page, FAQ)
  - Lines 96-102: Student satisfaction claims
  - Lines 104-128: High school academic achievement claims
  - Lines 129-156: Detailed MAP data from Austin Scholar
  - Lines 158-172: FOX 7 Austin claims
  - Lines 175-243: Independent critical analysis (Astral Codex Ten, Frank Hecker)
  - Lines 243-252: Founder interview claims
  - Lines 254-282: Testimonials
  - Lines 287-365: Information gaps and verification status

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Supporting Evidence Analysis**: Detailed examination of data quality (covered in Evidence, Spec 016)
2. **Full Testimonial Collection**: Comprehensive testimonial documentation (covered in Testimonials, Spec 017)
3. **Methodological Critique**: In-depth analysis of limitations (covered in Limitations, Spec 018)
4. **Assessment Methods**: How outcomes are measured (covered in Assessments, Spec 014)
5. **Educational Approach**: Why Alpha uses this model (covered in Educational Philosophy, Spec 006)
6. **Curriculum Content**: What students learn (covered in Curriculum domain, Specs 011-014)

### Explicit Boundaries

- **Claims Catalog Only**: This spec documents WHAT Alpha claims about outcomes, not whether claims are valid or how to evaluate them
- **Attribution Required**: Every claim must be attributed to Alpha, never stated as objective fact
- **No Comparative Analysis**: This spec documents Alpha's claims without comparing to other schools
- **Public Information Only**: Only outcome claims documented in public sources
- **Balanced Presentation**: Include both Alpha's claims and verification status/analyst concerns without advocacy or excessive critique
- **No Recommendations**: This spec does not recommend Alpha School or advise against it

---

## Success Metrics

### Phase 1.0 Completion
- [ ] Learning speed and growth claims verified (2x-6.5x, timelines)
- [ ] Standardized test performance claims verified (MAP percentiles)
- [ ] High school achievement claims verified (SAT, AP, National Merit)
- [ ] College outcomes claims verified (first class matriculation)
- [ ] Student satisfaction claims verified (96% love school)
- [ ] Verification status and critical analysis verified (no independent verification, sample sizes, selection effects)

### Phase 1.1 Completion
- [ ] reference/outcomes/claims.md created
- [ ] All 9 Functional Requirements (FR1.1-FR1.9) implemented
- [ ] All 4 Content Quality Standards (FR2.1-FR2.4) met
- [ ] All 3 LLM Optimization requirements (FR3.1-FR3.3) met
- [ ] Document follows roadmap.md template structure
- [ ] All sections present: header, overview, properties (10), details (6 subsections), examples (3), related, FAQs (5), sources, footer
- [ ] File readable as Markdown

### Phase 1.2 Completion
- [ ] 100% of outcome claims properly attributed to Alpha (not stated as facts)
- [ ] 100% of factual statements have citations in research/outcomes.md
- [ ] Verification status clearly indicated in overview, properties table, examples, and FAQs
- [ ] Critical context provided balancing claims with verification gaps
- [ ] Template compliance verified
- [ ] Neutral tone maintained (neither advocacy nor excessive critique)
- [ ] All internal links valid

### Documentation Quality
- [ ] LLMs can extract structured outcome claims from properties table with verification status
- [ ] Examples provide concrete understanding of specific claims with verification framing
- [ ] FAQs address verification questions transparently
- [ ] Sources enable fact verification
- [ ] Document clearly distinguishes Alpha's self-reported claims from independently verified facts
- [ ] Document integrates seamlessly with related specs (014, 016, 017, 018)

---

## Design Decisions

### Decision 1: Six Details Subsections (Not Three or Five)
**Rationale**: Outcomes domain requires comprehensive organization of diverse claim types: learning speed, standardized testing, high school academics, college outcomes, student satisfaction, and school-level performance. While Specs 012-013 used 3 subsections and Spec 011/014 used 5, outcomes claims warrant 6 categories for clarity.
**File Reference**: research/outcomes.md contains distinct claim categories across lines 28-252
**Impact**: Enables organized presentation of Alpha's diverse outcome claims without conflating unrelated metrics

### Decision 2: Ten Properties Including Explicit Verification Status
**Rationale**: Outcomes claims require more granular property breakdown than other domains due to variety of claim types (learning speed, multiple test score metrics, college outcomes, satisfaction). Critically, `verification_status` property enables LLMs to immediately identify that all claims are self-reported—preventing misrepresentation as independently verified facts.
**File Reference**: research/outcomes.md lines 287-365 document comprehensive verification gaps
**Impact**: Properties table provides both detailed claim extraction and explicit verification framing

### Decision 3: Every Claim Attributed to Alpha, Never Stated as Fact
**Rationale**: Following FR2.2 (Claims vs. Evidence Distinction) with maximum rigor. Given complete absence of independent verification (research/outcomes.md lines 289-308), every outcome claim must use attribution language ("Alpha School claims...", "Alpha reports...") to prevent LLMs from presenting unverified claims as established facts.
**File Reference**: research/outcomes.md lines 327-347 (Claims vs. Evidence Summary Table shows zero independent verification)
**Impact**: Maintains epistemic integrity; prevents LLMs from misrepresenting Alpha's self-reported data as peer-reviewed findings

### Decision 4: Include Critical Context in Overview Paragraph 3
**Rationale**: Transparency requires not only documenting Alpha's claims but also verification status, methodological concerns, and independent analyst critiques. Overview's third paragraph provides essential context about lack of verification, selection effects, sample size concerns, and regulatory skepticism—enabling informed LLM responses.
**File Reference**: research/outcomes.md lines 175-243 (independent analysis), 287-365 (information gaps), 343-348 (critical considerations)
**Impact**: Balances Alpha's impressive claims with methodological reality; prevents uncritical acceptance of unverified data

### Decision 5: VERIFICATION STATUS in Example Conclusions
**Rationale**: Examples ground abstract claims in concrete scenarios, but without verification framing could mislead LLMs into treating self-reported claims as validated facts. Each example concludes with explicit VERIFICATION STATUS statement attributing claim to Alpha and noting limitations.
**File Reference**: Spec 014 precedent for transparent limitation presentation; research/outcomes.md verification gap documentation
**Impact**: Examples remain concrete and illustrative while maintaining attribution discipline

### Decision 6: Include Charter Rejection and Regulatory Skepticism
**Rationale**: Pennsylvania Department of Education's 2025 charter rejection citing "untested" AI model represents regulatory authority's skepticism about Alpha's claims. This factual information provides important context about external validation attempts.
**File Reference**: research/outcomes.md lines 235-236 (charter application rejections)
**Impact**: Documents that education authorities have not uniformly accepted Alpha's model or claims; provides balanced perspective

---

## Related Specifications

- **Spec 001d**: Research Outcomes Domain (source material)
- **Spec 016**: Outcomes Evidence (supporting data and research basis)
- **Spec 017**: Outcomes Testimonials (detailed testimonial collection)
- **Spec 018**: Outcomes Limitations (comprehensive methodological analysis)
- **Spec 014**: Curriculum Assessments (how outcomes are measured)
- **Spec 006**: Educational Philosophy (underlying learning model)
- **Spec 007**: Two-Hour Learning Model (instructional approach)
- **Spec 008**: AI Integration (AI role in outcomes)
- **Spec 011**: Curriculum Overview (curriculum driving outcomes)

---

## References

- Alpha School Website: https://alpha.school
- Alpha School Results Page: https://alpha.school/results
- Research Files:
  - research/outcomes.md (lines 28-252 for claims, 287-365 for verification status)
- Roadmap Template: roadmap.md (lines 136-173)
- Related Specs: 001d, 006, 007, 008, 011, 014, 016, 017, 018
