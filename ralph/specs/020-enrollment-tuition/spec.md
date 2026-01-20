# Spec 020: Enrollment Tuition and Financial Aid

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 019 (Enrollment Process)
**Output**: `reference/enrollment/tuition.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that provides comprehensive, detailed information about Alpha School's tuition structure, pricing by location, financial aid programs, payment options, and cost comparisons for LLM consumption. This document expands on the tuition overview from Spec 019 to provide families with complete financial details needed for enrollment decisions.

### Scope

Transform research findings into a structured reference document covering:
- **Tuition by Location**: Detailed pricing for each Alpha School location ($10,000-$75,000 range), including San Francisco ($75,000), Austin ($40,000), GT School ($25,000), Brownsville ($10,000), and micro-schools (~$15,000)
- **All-Inclusive Model**: Comprehensive breakdown of what tuition covers (trips, activities, supplies, enrichment) with "no additional fundraising ever" guarantee
- **Financial Aid Programs**: Clarity platform process, eligibility considerations, application requirements, and limitations (assistance NOT guaranteed)
- **Affordability Strategies**: School voucher usage (~$12,000 reducing costs to $300-400/month), sibling discounts (5%), payment plan options
- **Fees Structure**: Application fees ($100 non-refundable), enrollment deposits ($1,000 applied to tuition), additional costs
- **Value Proposition**: What families receive for tuition investment, comparison context with traditional private schools
- **Information Gaps**: Payment schedules not detailed, specific tuition for some locations requires campus contact, income thresholds for aid not public, refund policies not disclosed

### Output File

`reference/enrollment/tuition.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Tuition and Financial Aid" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Tuition and Financial Aid

  > [One-sentence definition capturing Alpha School's location-based tuition pricing ranging $10,000/year (Brownsville) to $75,000/year (San Francisco), all-inclusive model covering trips/activities/supplies with no additional fundraising, financial aid via Clarity platform (NOT guaranteed to all applicants), school voucher strategies reducing micro-school costs to $300-400/month, 5% sibling discounts, $100 application fee and $1,000 enrollment deposit (applied to tuition), and information gaps regarding payment schedules, specific pricing for some locations, and aid eligibility thresholds]
  ```
- **Source**: Synthesize from research/enrollment.md lines 75-110
- **Rationale**: Follows API-style documentation pattern established in Specs 002-019

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's tuition and financial aid
- **Content Coverage**:
  - Paragraph 1: Alpha School employs location-based pricing strategy with tuition ranging from $10,000/year to $75,000/year depending on campus location and local market positioning—San Francisco represents highest tier at $75,000/year (described as "city's most expensive private school," exceeding elite institutions like Convent & Stuart Hall at ~$50,000/year); Austin charges $40,000/year for 2024-2025 school year; GT School charges $25,000/year; Brownsville (near SpaceX headquarters in Texas) offers lowest-cost option at $10,000/year; micro-school model launches at approximately $15,000/year; several locations (New York, Miami, Santa Barbara, Scottsdale) do not publicly list tuition—families must contact specific campus for pricing; enrollment requires $100 non-refundable application fee per student and $1,000 enrollment deposit which applies toward tuition

  - Paragraph 2: Alpha operates all-inclusive tuition model differentiating from traditional private schools with add-on fees—tuition covers ALL student activities including field trips (examples: Formula 1 events, Poland travel), supplies, enrichment programs, and activities; Alpha explicitly states "will never EVER ask parents for additional fundraising" per FAQ; sibling discount offers 5% reduction on tuition for second child and beyond; payment schedule options (monthly, semester, annual) not detailed in public materials; INFORMATION GAPS: specific payment plan structures, late payment policies, refund policies for withdrawal, mid-year enrollment pro-rating, and financial obligations beyond stated tuition not publicly documented

  - Paragraph 3: Financial aid available through Clarity (third-party software platform) calculating tuition assistance based on family financial information including tax returns, income statements, asset documentation, and household expenses—CRITICAL LIMITATION: tuition assistance NOT guaranteed to every applicant; income thresholds, award ranges, approval rates, and eligibility formulas not publicly disclosed; school vouchers (~$12,000 in eligible states with robust school choice programs) can significantly reduce family costs when applied to lower-tier tuition locations—example: $15,000 micro-school tuition minus $12,000 voucher equals $3,000 annual family cost (approximately $300-400/month depending on payment schedule); voucher availability and amounts vary by state, student circumstances, and program requirements; voucher strategy particularly effective in states like Texas, Florida, and Arizona with established school choice infrastructure; families pursuing financial aid apply through Clarity platform though specific application deadlines and decision timelines not publicly documented
- **Source**: research/enrollment.md lines 75-110, 196-223
- **Rationale**: Provides comprehensive tuition overview with transparency about location-based pricing variance, all-inclusive model benefits, and financial aid/voucher limitations

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key tuition and financial aid attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (10 properties):
  - `tuition_range` (string) - Minimum and maximum annual tuition across all Alpha locations
  - `location_pricing` (object) - Tuition amounts by specific campus location
  - `all_inclusive_model` (boolean) - Whether tuition covers all student activities and costs
  - `application_fee` (string) - Non-refundable fee required with application
  - `enrollment_deposit` (string) - Deposit amount to secure enrollment spot
  - `sibling_discount` (string) - Tuition reduction for multiple enrolled children
  - `financial_aid_platform` (string) - Third-party system for aid applications
  - `voucher_compatibility` (boolean) - Whether school accepts state vouchers
  - `typical_voucher_amount` (string) - Common voucher value in eligible states
  - `included_in_tuition` (array) - What all-inclusive tuition covers
- **Source**: research/enrollment.md lines 75-110
- **Rationale**: Enables LLMs to quickly extract structured financial facts for enrollment planning

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Tuition by Location**: Alpha School's pricing reflects geographic market strategy with seven disclosed pricing tiers and several undisclosed locations—**San Francisco**: $75,000/year (2025-2026), positioned as "city's most expensive private school" exceeding traditional elite institutions like Convent & Stuart Hall (~$50,000/year), reflects competitive private school market and high cost of living; **Austin, Texas**: $40,000/year (2024-2025), mid-tier pricing for flagship location with 155 students (PK, K-8); **GT School**: $25,000/year (2024-2025), specific location details not extensively documented; **Brownsville, Texas**: $10,000/year, lowest-cost Alpha location positioned near SpaceX headquarters, serves families in lower-income border region; **Micro-schools**: Launching at approximately $15,000/year, smaller-format Alpha locations targeting residential communities and suburban markets; **Undisclosed Locations**: New York, Miami, Santa Barbara, Scottsdale, and potentially other locations require direct campus contact for pricing—tuition not published on public-facing materials; **Alpha High School**: Pricing not separately disclosed, may differ from K-8 model; **Pricing Updates**: Tuition amounts reflect 2024-2025 and 2025-2026 school years; future year pricing not guaranteed; families should verify current tuition with specific campus during application process; **Geographic Strategy**: $65,000 variance between lowest (Brownsville $10,000) and highest (San Francisco $75,000) reflects Alpha's approach to market-based pricing rather than uniform national tuition

  - **All-Inclusive Model and What Tuition Covers**: Alpha School differentiates from traditional private schools through comprehensive all-inclusive tuition model—**What's Included**: ALL student activities without exception including field trips (examples documented: Formula 1 race events, international travel to Poland), supplies (no supply lists or fees), enrichment programs, afternoon workshops, sports and physical activities, arts programming, technology and equipment, learning platform access, MAP diagnostic assessments; **No Additional Fundraising**: Alpha explicitly guarantees "will never EVER ask parents for additional fundraising" per FAQ—distinguishes from traditional private schools with annual giving campaigns, gala fundraisers, classroom supply requests, and activity surcharges; **No Hidden Fees**: Tuition covers complete educational experience without add-ons—families can budget precisely without unexpected mid-year costs; **Comparisons**: Traditional private schools often charge base tuition ($30,000-$50,000) plus mandatory fees (technology $500-$2,000, capital improvements $1,000-$5,000), optional trips ($500-$5,000), supplies ($200-$500), sports/activities ($500-$2,000), and annual fund expectations ($1,000-$10,000)—Alpha model consolidates all costs into single tuition figure; **What's NOT Included**: Meals/lunch (not explicitly addressed in materials), before/after-school care (if offered, costs not documented), transportation (not mentioned), optional summer programs (not detailed), specialized tutoring beyond standard instruction (not addressed); **Value Proposition**: All-inclusive model provides cost certainty and eliminates fundraising burden on families

  - **Fees and Deposits**: **Application Fee**: $100 per student, non-refundable, required at application submission, serves as initial financial commitment and administrative cost recovery; **Enrollment Deposit**: $1,000 per student, required to secure enrollment spot after acceptance, APPLIES TOWARD overall tuition (not additional cost), holds student's place while enrollment finalized; **Timing**: Application fee paid with application; enrollment deposit due after acceptance and enrollment decision; **Refundability**: Application fee explicitly non-refundable; enrollment deposit refund policy not publicly documented—unclear if refundable before school year starts, after certain date, or non-refundable entirely; **Additional Fees**: No other mandatory fees documented (registration, technology, capital, etc.)—consistent with all-inclusive model; **Total Enrollment Cost**: Application fee ($100) + Tuition (location-specific) = Total first-year cost; enrollment deposit reduces first tuition payment by $1,000; **Example**: Austin enrollment total cost = $100 application fee + $40,000 tuition - $1,000 deposit credit = $39,100 net first-year cost plus $100 fee; **INFORMATION GAPS**: Payment deadlines for deposit, refund policy conditions, late enrollment fee policies, replacement fee for lost materials

  - **Financial Aid Process and Limitations**: **Clarity Platform**: Alpha uses Clarity (third-party financial aid software) to collect family financial information and calculate possible tuition assistance amounts; **Application Requirements**: Families submit tax returns, income statements, asset documentation, household expense information, and other financial data through Clarity portal; **Aid Determination**: Clarity software analyzes financial information and generates recommended tuition assistance amount; Alpha admissions reviews Clarity recommendation and makes final aid award decisions; **CRITICAL LIMITATION**: Tuition assistance is NOT guaranteed to every applicant—award availability subject to institutional budget, applicant pool, and financial need assessment; **Undisclosed Details**: Income thresholds for eligibility not public, percentage of tuition covered by typical awards not disclosed, total percentage of families receiving aid not published, average award amounts not documented, priority criteria for aid allocation not detailed, renewable aid expectations for subsequent years not explained; **Application Timeline**: Financial aid application deadlines not specified (rolling admissions suggests continuous evaluation); decision timeline not documented; **Notification**: How and when families receive aid decisions not detailed; whether families can appeal aid decisions not addressed; **Multiple Children**: Whether sibling discount (5%) applies before or after financial aid calculation not clarified; **Gaps**: Full cost of attendance beyond tuition (if any), expected family contribution formulas, need-based vs. merit-based criteria, named scholarship opportunities

  - **School Vouchers and Affordability Strategies**: **Voucher Compatibility**: Alpha School accepts state-funded school vouchers in eligible states with school choice programs—vouchers apply directly to tuition reducing family out-of-pocket costs; **Typical Voucher Amounts**: Research indicates ~$12,000/year vouchers in states with robust school choice programs (examples: Texas, Florida, Arizona); actual amounts vary by state, grade level, student circumstances (special needs may receive higher amounts), and program year; **Cost Reduction Example**: $15,000 micro-school tuition - $12,000 voucher = $3,000 annual family cost (approximately $300-400/month depending on payment schedule)—represents 80% cost reduction; **Voucher Eligibility**: Varies by state—some programs universal (all students eligible), others income-restricted, some require prior public school enrollment, special needs vouchers have different criteria; **States with School Choice Programs**: Texas (Education Savings Accounts), Florida (multiple programs including FES, FTC), Arizona (ESA program), others expanding; **Application Process**: Families typically apply for vouchers through state programs separate from Alpha enrollment—Alpha assists with documentation but does not control eligibility; **Strategic Combination**: Vouchers can combine with sibling discounts—example: Second child at $15,000 micro-school receives 5% discount ($14,250) then applies $12,000 voucher = $2,250 family cost; **Voucher Limitations**: Amounts may not cover full tuition at higher-tier locations (San Francisco $75,000 - $12,000 voucher = $63,000 remaining); voucher programs subject to state legislative changes, funding availability, and political dynamics; **GAPS**: Specific voucher programs accepted by each Alpha location, whether Alpha qualifies for special needs vouchers, voucher payment schedules (direct to school vs. family reimbursement)

  - **Sibling Discounts and Family Affordability**: **Discount Structure**: 5% tuition reduction for second child and all subsequent children—applies to each additional child's tuition; **Calculation Example**: First child pays full tuition (e.g., $40,000 Austin), second child receives 5% discount ($40,000 × 0.95 = $38,000), third child also receives 5% discount ($38,000); **Total Family Savings**: Two children at Austin = $40,000 + $38,000 = $78,000 (saves $2,000 vs. $80,000); three children = $40,000 + $38,000 + $38,000 = $116,000 (saves $4,000 vs. $120,000); **Comparison with Vouchers**: Sibling discount (5% = $2,000 on Austin tuition) significantly smaller than voucher value (~$12,000); families using vouchers see greater cost reduction than sibling discount alone; **Combined Strategies**: Sibling discount + vouchers = maximum affordability—example: Second child micro-school tuition $15,000 × 0.95 = $14,250, minus $12,000 voucher = $2,250 family cost; **Eligibility**: Discount applies when multiple children enrolled simultaneously; unclear if discount applies when one child graduates and another still enrolled; **Application**: Likely automatic when multiple children enrolled, but application process not documented; **GAPS**: Whether discount applies to application fees, enrollment deposits, or only tuition; if discount percentage increases with more children (e.g., 5% for second, 10% for third); if discount combines with financial aid or applied before aid calculation; maximum number of children eligible for discount; specific terms and conditions

- **Source**: research/enrollment.md lines 75-110, 196-223
- **Rationale**: Provides comprehensive documentation of tuition structure, all-inclusive model benefits, fees, financial aid process, voucher strategies, and sibling discounts with appropriate transparency about information gaps

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating tuition and financial aid scenarios
- **Examples to Include** (3 required):
  - **Example 1: San Francisco Full-Pay Family**: Family enrolls one child at Alpha San Francisco for 2025-2026 school year. Tuition: $75,000/year. Application fee: $100 (non-refundable). Enrollment deposit: $1,000 (applies to tuition). Total first-year cost: $100 application fee + ($75,000 tuition - $1,000 deposit credit) = $74,100 net tuition cost plus $100 fee = $74,200 total. All-inclusive model means $74,200 covers EVERYTHING: AI-driven academics, afternoon workshops, field trips (Formula 1 events, international travel), supplies, enrichment, sports, arts, technology, MAP assessments. No additional costs throughout year—no fundraising asks, no supply fees, no trip charges, no activity surcharges. Family does not qualify for financial aid and does not pursue vouchers. COMPARISON: Traditional San Francisco private schools like Convent & Stuart Hall charge ~$50,000 tuition plus typical additional costs (technology fees $1,500, capital fund $3,000, annual giving expectation $5,000, trip/activity fees $2,000, supplies $500) = ~$62,000 total. Alpha at $74,200 represents ~$12,000 premium but eliminates fundraising participation and cost uncertainty. INFORMATION STATUS: San Francisco tuition ($75,000) documented in SF Standard article; all-inclusive model confirmed in Alpha FAQ; comparison schools' pricing from public sources; payment schedule (monthly/semester/annual options) not documented.

  - **Example 2: Micro-School Family with Voucher and Sibling Discount**: Family in Texas enrolls two children at Alpha micro-school. First child tuition: $15,000/year. Second child tuition with 5% sibling discount: $15,000 × 0.95 = $14,250/year. Family qualifies for Texas Education Savings Account vouchers: ~$12,000 per child. First child net cost: $15,000 - $12,000 voucher = $3,000/year (approximately $250-300/month depending on payment plan). Second child net cost: $14,250 - $12,000 voucher = $2,250/year (approximately $187.50-225/month). Total family cost for TWO children: $3,000 + $2,250 = $5,250/year (approximately $437.50-525/month). Enrollment costs: $100 application fee per child ($200 total) + $1,000 deposit per child ($2,000 total, both apply to tuition). First-year total: $200 fees + $5,250 net tuition = $5,450 for two children receiving full Alpha experience. Voucher strategy reduces effective tuition from $29,250 (combined before discounts/vouchers) to $5,250 (82% reduction). INFORMATION STATUS: Micro-school tuition (~$15,000) and voucher amounts (~$12,000) documented in research; sibling discount (5%) confirmed in enrollment materials; monthly cost estimates based on typical 10-month payment schedules; specific payment plan options not publicly detailed; voucher application process separate from Alpha enrollment.

  - **Example 3: Austin Family with Financial Aid**: Family enrolls one child at Alpha Austin ($40,000/year tuition). Family cannot afford full tuition and applies for financial aid through Clarity platform. Application process: (1) Submit enrollment application with $100 fee; (2) Student completes Shadow Day and receives acceptance; (3) Family applies for aid via Clarity—uploads tax returns showing household income, asset statements, expense documentation; (4) Clarity calculates recommended tuition assistance amount based on financial algorithm (formula not public); (5) Alpha admissions reviews Clarity recommendation and determines final award. HYPOTHETICAL AWARD SCENARIO: Family receives $18,000 tuition assistance award (45% of tuition). Net family cost: $40,000 - $18,000 aid = $22,000/year. Enrollment deposit: $1,000 (applies to net $22,000). Actual first-year cost: $100 application fee + ($22,000 - $1,000 deposit credit) = $21,100 net plus $100 fee = $21,200 total. Family pays $21,200 for all-inclusive Alpha experience (no additional costs). CRITICAL LIMITATION: This example uses HYPOTHETICAL aid amount ($18,000) as Alpha does not publish aid ranges, approval rates, income thresholds, or award formulas; actual awards vary significantly by family financial profile; tuition assistance NOT guaranteed—application does not ensure award; specific income limits for eligibility not disclosed; percentage of applicants receiving aid not published; whether aid renewable for subsequent years not documented. INFORMATION STATUS: Austin tuition ($40,000) documented in tuition PDF; Clarity platform confirmed for aid applications; award amount, approval likelihood, and eligibility criteria are HYPOTHETICAL EXAMPLES based on typical private school aid patterns, not Alpha-specific published data.

- **Source**: research/enrollment.md lines 75-110
- **Rationale**: Grounds abstract tuition structure with concrete cost scenarios showing full-pay, voucher strategy, and financial aid pathways while maintaining transparency about hypothetical elements and information gaps

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents
- **Links**:
  - Enrollment Process (Spec 019) - Application and enrollment pathway
  - Locations Overview (Spec 021) - Campus locations and expansion
  - Contact Overview (Spec 023) - Financial aid and enrollment contacts
  - Educational Philosophy (Spec 006) - Learning model families invest in
  - Daily Schedule (Spec 010) - What tuition provides daily
  - Outcomes Claims (Spec 015) - Academic results and value delivered
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected enrollment and program documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about tuition and financial aid with authoritative answers
- **FAQs to Include** (6 required):
  - **Q: How much does Alpha School cost?**
    A: Alpha School tuition varies significantly by location, ranging from $10,000/year (Brownsville, Texas) to $75,000/year (San Francisco). Specific pricing: San Francisco $75,000, Austin $40,000, GT School $25,000, Brownsville $10,000, and micro-schools approximately $15,000. Several locations (New York, Miami, Santa Barbara, Scottsdale) require contacting the specific campus for pricing as tuition is not publicly listed. All tuition is all-inclusive—covering trips, activities, supplies, enrichment, and everything else with no additional fundraising ever. Enrollment also requires a $100 non-refundable application fee per student and $1,000 enrollment deposit (which applies toward tuition). The significant $65,000 variance between lowest and highest locations reflects Alpha's geographic market positioning strategy.

  - **Q: What does Alpha tuition include?**
    A: Alpha operates an all-inclusive tuition model where the stated tuition covers ALL student activities without exception. This includes: field trips (examples documented include Formula 1 race events and international travel to Poland), supplies (no supply lists or fees), enrichment programs, afternoon workshops, sports and physical activities, arts programming, technology and equipment, learning platform access, and MAP diagnostic assessments. Alpha explicitly states they "will never EVER ask parents for additional fundraising" per their FAQ. This differentiates Alpha from traditional private schools which often charge base tuition plus mandatory fees (technology, capital improvements), optional trip charges, supply fees, activity surcharges, and annual giving campaign expectations. The all-inclusive model provides cost certainty—families can budget the stated tuition figure without unexpected mid-year costs.

  - **Q: Is financial aid available and how do I apply?**
    A: Yes, financial aid is available for the 2025-2026 school year and beyond, though tuition assistance is NOT guaranteed to every applicant. Alpha uses Clarity (third-party software) to process financial aid applications. To apply: submit your enrollment application, complete Shadow Day, receive acceptance, then apply through Clarity's platform by uploading tax returns, income statements, asset documentation, and household expense information. Clarity calculates a recommended tuition assistance amount which Alpha admissions reviews to make final aid award decisions. IMPORTANT LIMITATIONS: Income thresholds for eligibility are not publicly disclosed, award ranges are not published, approval rates are not documented, and specific application deadlines are not specified (rolling admissions suggests continuous evaluation). The percentage of families receiving aid and average award amounts are also not public information.

  - **Q: Can I use school vouchers at Alpha School?**
    A: Yes, Alpha School accepts state-funded school vouchers in eligible states with school choice programs. Vouchers apply directly to tuition, significantly reducing family out-of-pocket costs. Research indicates typical voucher amounts of approximately $12,000/year in states with robust school choice programs (examples: Texas, Florida, Arizona), though actual amounts vary by state, grade level, and student circumstances. For example: a family using a $12,000 voucher at a $15,000 micro-school location would pay approximately $3,000/year (about $300-400/month), representing an 80% cost reduction. Voucher eligibility varies by state—some programs are universal (all students eligible), others are income-restricted or require prior public school enrollment. Families typically apply for vouchers through state programs separate from Alpha enrollment, though Alpha can assist with documentation.

  - **Q: Is there a sibling discount?**
    A: Yes, Alpha offers a 5% tuition discount for the second child and all subsequent children enrolled simultaneously. For example: if the first child pays full tuition of $40,000 at Austin, the second child receives 5% off ($40,000 × 0.95 = $38,000), saving the family $2,000. For three children, the savings would be $4,000 total. The sibling discount can combine with school vouchers for maximum affordability—example: second child at a $15,000 micro-school receives 5% discount ($14,250), then applies a $12,000 voucher, resulting in just $2,250 family cost. However, details not publicly documented include: whether the discount applies to fees/deposits or only tuition, if the percentage increases with more children, how it combines with financial aid calculations, and maximum children eligible.

  - **Q: What are the enrollment fees and deposits?**
    A: Alpha requires two fees for enrollment: (1) $100 application fee per student—non-refundable, paid when submitting the application, covers administrative costs; (2) $1,000 enrollment deposit per student—required to secure the student's spot after acceptance, APPLIES TOWARD overall tuition (not an additional cost). For example, enrolling at Austin: $100 application fee + $40,000 tuition - $1,000 deposit credit = net first-year cost of $39,100 plus the $100 fee. The application fee is explicitly non-refundable. The enrollment deposit's refund policy is not publicly documented—it's unclear if it's refundable before the school year starts, after certain dates, or non-refundable entirely. No other mandatory fees are documented (registration, technology, capital, etc.), consistent with Alpha's all-inclusive model.

- **Source**: research/enrollment.md lines 75-110, 196-223
- **Rationale**: Addresses most common tuition and financial aid questions with transparency about pricing variance, all-inclusive model, aid limitations, and information gaps

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/enrollment.md relevant to tuition (lines 8-29):
  - [Alpha School FAQ](https://alpha.school/faq) - Retrieved 2026-01-20
  - [Alpha School Admissions](https://alpha.school/admissions) - Retrieved 2026-01-20
  - [SF Standard - Alpha School Article](https://sfstandard.com/2025/09/19/alpha-school-ai-teacher-san-francisco/) - Retrieved 2026-01-20
  - [Alpha Austin Tuition PDF](https://go.alpha.school/hubfs/Austin%20Documents/Alpha%20School%20Austin%20-%20Tuition%2024-25.pdf) - Retrieved 2026-01-20
  - [GT School Tuition PDF](https://go.alpha.school/hubfs/Alpha%20Tuition%20Documents/GT%20School%20Tuition%2024-25%20Final.pdf) - Retrieved 2026-01-20
  - [Wikipedia - Alpha School](https://en.wikipedia.org/wiki/Alpha_School) - Retrieved 2026-01-20
  - [Axios - Alpha Schools Article](https://www.axios.com/local/charlotte/2025/08/27/alpha-schools-ai-artifical-intelligence-education) - Retrieved 2026-01-20
  - [AIFunLab - Alpha School Review](https://www.aifunlab.io/learn/alpha-school-review-75k-ai-first-pros-cons-parent-guide) - Retrieved 2026-01-20
  - [Entrepreneur - Alpha School Article](https://www.entrepreneur.com/business-news/alpha-school-uses-ai-teaching-offers-staff-six-figure-pay/496429) - Retrieved 2026-01-20
- **Source**: research/enrollment.md lines 8-29
- **Rationale**: Provides citation trail for tuition information verification and enables readers to examine original sources

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
- **Sources**: research/enrollment.md lines 75-110 (tuition/costs/financial aid), 196-223 (information gaps)
- **Verification**: Every tuition claim must cite specific research file lines
- **Rationale**: Maintains fact traceability and prevents speculation

#### FR2.2: Alpha Reporting vs. Public Documentation Distinction
- **Requirement**: Distinguish between Alpha's published tuition information and undisclosed details
- **Attribution Patterns**:
  - Published tuition: "Alpha School charges...", "according to tuition PDF...", "per Alpha FAQ...", "Alpha materials state..."
  - Location-specific pricing: "San Francisco campus charges...", "Austin location pricing documented..."
  - Information gaps: "payment schedules not detailed", "refund policies not disclosed", "income thresholds not public"
  - Third-party sources: "per SF Standard article...", "according to AIFunLab review..."
- **CRITICAL**: Never state undisclosed financial details (payment plans, refund terms, aid formulas) as known facts—always note gaps explicitly
- **Rationale**: Prevents LLMs from presenting incomplete information as comprehensive; maintains transparency about what is/isn't publicly available

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is not publicly available or documented
- **Gaps to Document**:
  - Payment schedule options (monthly/semester/annual) not detailed
  - Refund policy for enrollment deposit not disclosed
  - Specific tuition for New York, Miami, Santa Barbara, Scottsdale requires campus contact
  - Income thresholds for financial aid eligibility not public
  - Financial aid award ranges and approval rates not disclosed
  - Whether aid is renewable for subsequent years not documented
  - Late payment policies not addressed
  - Mid-year enrollment tuition pro-rating not detailed
  - How sibling discount combines with financial aid not clarified
  - Meals/lunch costs not explicitly addressed
  - Before/after-school care costs (if offered) not documented
  - Transportation costs not mentioned
  - Summer program pricing not detailed
- **Rationale**: Transparency about limitations prevents LLMs from overstating what is publicly known about tuition and costs

#### FR2.4: Neutral Presentation
- **Requirement**: Document tuition structure without advocacy or critique
- **Tone Guidelines**:
  - Present pricing objectively without "expensive", "affordable", "reasonable", or "unreasonable" labels
  - Describe all-inclusive model as factual differentiator, not value judgment
  - State financial aid availability and limitations neutrally
  - Present voucher strategies as options, not recommendations
  - Note information gaps without implying Alpha is "secretive" or "transparent"
  - Avoid comparative language with judgment ("better value than", "worse than")
  - Present cost comparisons with traditional schools factually (numbers only, no conclusions)
- **Rationale**: Reference documentation should inform families about costs and options, not persuade or critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Tuition and Financial Aid"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Six Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case)
- **Rationale**: Structured data extraction for LLM fact retrieval

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels and structured narrative with INFORMATION STATUS conclusion
- **Format**:
  ```markdown
  **Example Title**: Detailed cost scenario with specific calculations; demonstrates tuition investment and affordability strategies. INFORMATION STATUS: Attribution of known facts and explicit documentation of hypothetical elements or gaps.
  ```
- **Rationale**: Clear example structure with explicit information availability framing for LLM comprehension

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all tuition information is sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify tuition amounts by location
  - Confirm San Francisco $75,000/year
  - Confirm Austin $40,000/year
  - Confirm GT School $25,000/year
  - Confirm Brownsville $10,000/year
  - Confirm micro-schools ~$15,000/year
  - Confirm undisclosed locations (NY, Miami, Santa Barbara, Scottsdale)
  - Source lines: research/enrollment.md 75-99
  - **Success**: All location-specific pricing documented

- [ ] **Task 1.0.2**: Verify all-inclusive model details
  - Confirm tuition covers ALL activities
  - Confirm "no additional fundraising ever" guarantee
  - Confirm examples (Formula 1, Poland trips)
  - Confirm what's potentially NOT included (meals, before/after care)
  - Source lines: research/enrollment.md 91-95
  - **Success**: All-inclusive model comprehensively documented

- [ ] **Task 1.0.3**: Verify fees and deposits
  - Confirm $100 application fee (non-refundable)
  - Confirm $1,000 enrollment deposit (applies to tuition)
  - Confirm deposit refund policy gaps
  - Source lines: research/enrollment.md 76-79
  - **Success**: Fee structure documented

- [ ] **Task 1.0.4**: Verify financial aid details
  - Confirm Clarity platform usage
  - Confirm aid NOT guaranteed to all applicants
  - Confirm undisclosed income thresholds and award ranges
  - Confirm application process requirements
  - Source lines: research/enrollment.md 101-106
  - **Success**: Financial aid process and limitations documented

- [ ] **Task 1.0.5**: Verify voucher and affordability strategies
  - Confirm ~$12,000 typical voucher amounts
  - Confirm $300-400/month cost reduction examples
  - Confirm state-specific availability (Texas, Florida, Arizona)
  - Confirm voucher eligibility variations
  - Source lines: research/enrollment.md 107-110
  - **Success**: Voucher strategies documented

- [ ] **Task 1.0.6**: Verify sibling discount
  - Confirm 5% discount for second child and beyond
  - Confirm discount applies to each additional child
  - Confirm gaps (application details, combination with aid)
  - Source lines: research/enrollment.md 97-98
  - **Success**: Sibling discount structure documented

- [ ] **Task 1.0.7**: Verify information gaps
  - Confirm payment schedule options not detailed
  - Confirm refund policies not disclosed
  - Confirm aid eligibility thresholds not public
  - Confirm meal/transportation costs not addressed
  - Source lines: research/enrollment.md 196-223
  - **Success**: Information gaps comprehensively cataloged

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/enrollment/tuition.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/enrollment
  - Create file: reference/enrollment/tuition.md
  - Write H1: "Tuition and Financial Aid"
  - Write one-sentence definition capturing pricing range, all-inclusive model, financial aid, and key facts
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write paragraph 1: Location-based pricing strategy, specific tuition amounts, fees/deposits
  - Write paragraph 2: All-inclusive model, sibling discount, information gaps on payment/refund policies
  - Write paragraph 3: Financial aid via Clarity, limitations (NOT guaranteed), voucher strategies
  - **Success**: Overview provides comprehensive tuition context

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create 4-column table (Property | Type | Description | Example)
  - Add 10 properties covering tuition range, location pricing, fees, discounts, aid, vouchers, inclusions
  - Populate with accurate values from research
  - **Success**: Table enables structured tuition fact extraction

- [ ] **Task 1.1.4**: Write Details subsection - Tuition by Location (FR1.4)
  - Document all disclosed locations with pricing (SF, Austin, GT, Brownsville, micro-schools)
  - Note undisclosed locations requiring campus contact
  - Explain geographic market strategy and $65,000 variance
  - Include pricing year references (2024-2025, 2025-2026)
  - **Success**: Location-based tuition structure comprehensively documented

- [ ] **Task 1.1.5**: Write Details subsection - All-Inclusive Model (FR1.4)
  - List everything covered by tuition (trips, supplies, enrichment, etc.)
  - Include "no additional fundraising ever" guarantee
  - Provide comparison with traditional private school add-on costs
  - Note what's potentially NOT included (meals, transportation, etc.)
  - **Success**: All-inclusive model benefits and scope clearly explained

- [ ] **Task 1.1.6**: Write Details subsection - Fees and Deposits (FR1.4)
  - Document $100 application fee (non-refundable)
  - Explain $1,000 enrollment deposit (applies to tuition)
  - Provide total enrollment cost calculation examples
  - Note refund policy gaps
  - **Success**: Fee structure comprehensively documented

- [ ] **Task 1.1.7**: Write Details subsection - Financial Aid Process and Limitations (FR1.4)
  - Explain Clarity platform and application requirements
  - Document aid determination process
  - Emphasize CRITICAL LIMITATION: aid NOT guaranteed
  - List all undisclosed details (income thresholds, award ranges, approval rates, etc.)
  - **Success**: Financial aid pathways and limitations documented

- [ ] **Task 1.1.8**: Write Details subsection - School Vouchers and Affordability (FR1.4)
  - Explain voucher compatibility and typical amounts (~$12,000)
  - Provide cost reduction examples (80% reduction scenarios)
  - Document state-specific eligibility variations
  - Note strategic combinations with sibling discounts
  - List voucher information gaps
  - **Success**: Voucher strategies comprehensively explained

- [ ] **Task 1.1.9**: Write Details subsection - Sibling Discounts (FR1.4)
  - Document 5% discount structure for second+ children
  - Provide multi-child savings calculations
  - Explain combination with vouchers
  - Note application process and gaps
  - **Success**: Sibling discount structure documented

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Write Example 1: San Francisco Full-Pay Family (all-inclusive value demonstration)
  - Write Example 2: Micro-School Family with Voucher and Sibling Discount (maximum affordability)
  - Write Example 3: Austin Family with Financial Aid (hypothetical aid scenario with limitations)
  - Include INFORMATION STATUS conclusions noting gaps and hypothetical elements
  - **Success**: Three concrete cost scenarios documented with appropriate caveats

- [ ] **Task 1.1.11**: Create related documentation links (FR1.6)
  - Link to 6 related specs (Process, Locations, Contact, Philosophy, Schedule, Outcomes)
  - Use relative paths for internal links
  - **Success**: Navigation links enable LLM cross-referencing

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Write 6 Q&A pairs addressing common tuition/financial aid questions
  - Cover: cost by location, what's included, financial aid, vouchers, sibling discount, fees/deposits
  - **Success**: FAQs address primary financial questions with transparency

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - List all sources from research/enrollment.md with URLs and retrieval dates
  - Format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
  - **Success**: Complete citation trail provided

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add horizontal rule separator
  - Add "Last updated: 2026-01-20"
  - Add "Last verified: 2026-01-20"
  - **Success**: Footer metadata included

---

### Phase 1.2: Quality Review

**Objective**: Ensure reference/enrollment/tuition.md meets all quality standards

#### Review Tasks

- [ ] **Task 1.2.1**: Primary quality check (FR2.1-FR2.4)
  - Verify all factual claims trace to research/enrollment.md with line references
  - Confirm Alpha reporting vs. gaps distinction throughout
  - Check neutral presentation (no "expensive"/"affordable" labels)
  - Verify information gaps explicitly documented
  - **Success**: Content meets FR2 quality standards

- [ ] **Task 1.2.2**: Fact-check tuition amounts
  - Verify all location-specific pricing accurate
  - Confirm fees correct ($100 application, $1,000 deposit)
  - Validate all-inclusive model details
  - Check voucher amounts and discount percentages
  - **Success**: 100% factual accuracy verified

- [ ] **Task 1.2.3**: Consistency check
  - Verify tuition amounts consistent across Overview, Details, Examples, FAQs
  - Check fee structure consistent throughout document
  - Validate property table matches Details subsections
  - Ensure all-inclusive model scope consistent
  - **Success**: No internal contradictions

- [ ] **Task 1.2.4**: Template compliance check (FR1.1-FR1.9)
  - Confirm H1 → H2 → H3 hierarchy (no H4)
  - Verify all 9 FR1 sections present (Header, Overview, Properties, 6 Details, Examples, Related, FAQs, Sources, Footer)
  - Check properties table format (4 columns, 10 properties)
  - Validate 3 examples with INFORMATION STATUS conclusions
  - Verify 6 FAQs present
  - **Success**: Perfect template compliance

- [ ] **Task 1.2.5**: Neutral tone review (FR2.4)
  - Check for value judgment language removed
  - Verify no comparative judgments without qualification
  - Confirm information gaps stated factually
  - Ensure cost comparisons are numbers-only without conclusions
  - **Success**: Neutral, informative tone throughout

- [ ] **Task 1.2.6**: LLM optimization check (FR3.1-FR3.3)
  - Verify clear heading hierarchy for parsing
  - Check properties table uses snake_case naming
  - Validate example formatting with bold labels and INFORMATION STATUS conclusions
  - **Success**: Document optimized for LLM consumption

---

### Post-Implementation Tasks

- [ ] **Task 1.3.1**: Update roadmap.md
  - Change Spec 020 status from "📋 Planned" to "✅ Complete"
  - Update completion percentage (26/32 = 81.25%)
  - Update "Last Updated" timestamp
  - **Success**: Roadmap reflects Spec 020 completion

- [ ] **Task 1.3.2**: Update progress.md
  - Add Spec 020 implementation entry with date
  - Document key content covered
  - Note output file created
  - Include any notable decisions or challenges
  - **Success**: Progress log updated

- [ ] **Task 1.3.3**: Update activity.log
  - Add timestamped entry for Spec 020 implementation
  - **Success**: Activity logged

- [ ] **Task 1.3.4**: Update checklist.md
  - Change checklist status to "✅ Complete"
  - Update progress percentage to 100%
  - Update "Last Updated" timestamp
  - **Success**: Checklist marked complete

---

## Success Metrics

### Phase 1.0 Success Criteria
- All 7 validation tasks completed
- All tuition facts traced to research/enrollment.md with line references
- Information gaps comprehensively cataloged
- No unverified claims in documentation plan

### Phase 1.1 Success Criteria
- File created: reference/enrollment/tuition.md
- All FR1 requirements implemented (9 sections)
- Document follows template exactly (roadmap.md lines 136-173)
- 10 properties in table, 6 Details subsections, 3 examples, 6 FAQs
- All examples include INFORMATION STATUS conclusions
- Complete source citations with URLs and retrieval dates

### Phase 1.2 Success Criteria
- 100% factual accuracy verified against research file
- No internal contradictions
- Neutral tone throughout (no value judgments)
- Perfect template compliance
- LLM-optimized structure (H1→H2→H3, scannable tables, clear examples)

### Post-Implementation Success Criteria
- Roadmap.md shows Spec 020 as "✅ Complete"
- Progress.md documents implementation
- Activity.log includes timestamped entry
- Checklist.md marked complete

---

## Technical Architecture

### File Structure
```
reference/
  enrollment/
    process.md          # Spec 019 - enrollment pathway
    tuition.md          # Spec 020 - detailed tuition and financial aid (THIS SPEC)
```

### Dependencies
- **Depends On**:
  - research/enrollment.md (Spec 001e - completed)
  - Spec 019 (Enrollment Process - completed) - provides enrollment context
- **Blocks**: None (last Enrollment domain spec)
- **Related**:
  - Spec 021 (Locations) - campus-specific details
  - Spec 023 (Contact) - financial aid contact information
  - Specs 024-026 (Guides) - will synthesize tuition information

### Data Flow
1. Research file (research/enrollment.md) → Spec 020 implementation
2. Spec 019 (process.md) + Spec 020 (tuition.md) → Complete Enrollment domain documentation
3. Enrollment documentation → Referenced by Guide documents (Specs 024-026)

---

## What We're NOT Doing

This spec explicitly excludes:
- **Enrollment Process Details**: Covered in Spec 019 (application steps, Shadow Day, etc.)
- **Location-Specific Campus Details**: Spec 021 will detail individual campus characteristics
- **Contact Information for Financial Aid**: Spec 023 will provide comprehensive contact details
- **Curriculum Content**: Covered in Curriculum domain (Specs 011-014)
- **Academic Outcomes**: Covered in Outcomes domain (Specs 015-018)
- **Payment Processing Systems**: Only document payment structure, not technical payment systems
- **Speculation About Undisclosed Pricing**: Only document publicly available tuition information

---

## Design Decisions

### 1. Six Details Subsections
**Decision**: Organize Details section into 6 logical subsections: Tuition by Location, All-Inclusive Model, Fees and Deposits, Financial Aid Process, School Vouchers, Sibling Discounts
**Rationale**: Separates pricing structure (what it costs) from affordability strategies (how to reduce costs); enables families to navigate directly to relevant financial topic; aligns with research file organization
**Alternative Considered**: 4 subsections merging related topics—rejected because each area deserves standalone focus for clarity

### 2. All-Inclusive Model Prominence
**Decision**: Dedicate entire subsection to what tuition covers with specific examples and comparison to traditional school add-on costs
**Rationale**: All-inclusive model is major differentiator from traditional private schools; families need to understand true cost comparison beyond base tuition; prevents misunderstanding that Alpha tuition might have additional fees
**Alternative Considered**: Brief mention in overview—rejected because all-inclusive value proposition deserves comprehensive documentation

### 3. Financial Aid Limitation Emphasis
**Decision**: Repeatedly emphasize "NOT guaranteed to every applicant" in multiple sections (Overview, Properties, Details, Examples, FAQs)
**Rationale**: Manages family expectations; prevents assumption that aid application ensures award; critical transparency about aid availability limitations; protects Alpha from misrepresentation claims
**Alternative Considered**: Single mention in Details—rejected because limitation is critical enough to warrant prominence

### 4. Voucher Strategy Detailed Documentation
**Decision**: Provide extensive voucher usage examples with specific calculations showing 80% cost reduction scenarios
**Rationale**: Vouchers represent most significant affordability mechanism (>$12,000 value vs. 5% sibling discount); demonstrates Alpha accessibility for middle-income families in school choice states; explains how $75,000 SF school can have $300/month micro-school option
**Alternative Considered**: Brief mention—rejected because voucher strategy transforms affordability equation and deserves comprehensive explanation

### 5. Hypothetical Financial Aid Example
**Decision**: Include Example 3 with financial aid award but clearly label amount as HYPOTHETICAL with explicit limitations
**Rationale**: Families need concrete aid scenario to understand process even though Alpha doesn't publish award data; INFORMATION STATUS framing prevents presenting hypothetical as factual; demonstrates transparency about gaps while still providing useful example
**Alternative Considered**: Omit aid example entirely—rejected because families pursuing aid need scenario illustration despite unavailable specific data

### 6. Location Pricing Gaps Documentation
**Decision**: Explicitly list locations requiring campus contact for pricing (NY, Miami, Santa Barbara, Scottsdale) in multiple sections
**Rationale**: Prevents LLMs from claiming comprehensive pricing knowledge; directs families to proper contact method; acknowledges pricing information limitations; maintains epistemic integrity
**Alternative Considered**: Only mention disclosed locations—rejected because noting gaps serves families better than silence

---

## Related Specifications

- **Spec 001e**: Research Enrollment Domain (dependency - provides source data)
- **Spec 019**: Enrollment Process (dependency - provides enrollment context)
- **Spec 021**: Locations Overview (related - campus details)
- **Spec 023**: Contact Overview (related - financial aid contact information)
- **Spec 006**: Educational Philosophy (related - learning model families invest in)
- **Spec 010**: Daily Schedule (related - what tuition provides daily)
- **Spec 015**: Outcomes Claims (related - academic results and value)
- **Spec 024**: Parent Guide (will synthesize tuition information)

---

## References

### Research Files
- **Primary Source**: research/enrollment.md (lines 1-252)
  - Lines 75-99: Tuition/costs
  - Lines 101-110: Financial aid
  - Lines 76-79: Fees and deposits
  - Lines 91-98: All-inclusive model and discounts
  - Lines 196-223: Information gaps

### Template Reference
- **Documentation Template**: roadmap.md lines 136-173

### Pattern References
- **Spec 019**: Enrollment Process (enrollment domain pattern)
- **Spec 015**: Outcomes Claims (comprehensive reference doc pattern)
- **Spec 018**: Outcomes Limitations (information gaps documentation pattern)
