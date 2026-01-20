# Implementation Checklist: Spec 020 - Enrollment Tuition and Financial Aid

**Spec**: 020-enrollment-tuition
**Status**: 📋 Planned
**Current Phase**: Phase 1.0 (Research Validation)
**Progress**: 0% (0/34 tasks)
**Last Updated**: 2026-01-20

---

## Phase 1.0: Research Validation

**Objective**: Verify all tuition information is sourced from research files

**Status**: ⏳ Pending
**Tasks**: 0/7 complete

- [ ] **Task 1.0.1**: Verify tuition amounts by location
  - Confirm San Francisco $75,000/year (city's most expensive private school)
  - Confirm Austin $40,000/year (2024-2025)
  - Confirm GT School $25,000/year (2024-2025)
  - Confirm Brownsville $10,000/year (lowest-cost location)
  - Confirm micro-schools ~$15,000/year
  - Confirm undisclosed locations (New York, Miami, Santa Barbara, Scottsdale)
  - **FR**: FR1.4 (Details - Tuition by Location)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 75-99
  - **Success Criteria**: All location-specific pricing documented with citations

- [ ] **Task 1.0.2**: Verify all-inclusive model details
  - Confirm tuition covers ALL student activities
  - Confirm "will never EVER ask parents for additional fundraising" guarantee
  - Confirm examples: Formula 1 trips, Poland travel
  - Confirm what's potentially NOT included (meals, before/after care, transportation)
  - **FR**: FR1.4 (Details - All-Inclusive Model)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 91-95
  - **Success Criteria**: All-inclusive model scope comprehensively documented

- [ ] **Task 1.0.3**: Verify fees and deposits
  - Confirm $100 application fee (non-refundable)
  - Confirm $1,000 enrollment deposit (applies to tuition)
  - Confirm deposit refund policy gaps
  - Confirm no other mandatory fees documented
  - **FR**: FR1.4 (Details - Fees and Deposits)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 76-79
  - **Success Criteria**: Fee structure documented with refund policy gaps noted

- [ ] **Task 1.0.4**: Verify financial aid details
  - Confirm Clarity platform usage for aid applications
  - Confirm aid NOT guaranteed to all applicants
  - Confirm undisclosed: income thresholds, award ranges, approval rates
  - Confirm application process requirements (tax returns, income, assets, expenses)
  - **FR**: FR1.4 (Details - Financial Aid Process)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 101-106
  - **Success Criteria**: Financial aid process and limitations documented

- [ ] **Task 1.0.5**: Verify voucher and affordability strategies
  - Confirm ~$12,000 typical voucher amounts in eligible states
  - Confirm $300-400/month cost reduction examples (80% reduction)
  - Confirm state-specific availability (Texas, Florida, Arizona with school choice programs)
  - Confirm voucher eligibility variations (universal vs. income-restricted)
  - **FR**: FR1.4 (Details - School Vouchers)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 107-110
  - **Success Criteria**: Voucher strategies documented with state examples

- [ ] **Task 1.0.6**: Verify sibling discount
  - Confirm 5% discount for second child and beyond
  - Confirm discount applies to each additional child's tuition
  - Confirm gaps: application details, combination with financial aid
  - **FR**: FR1.4 (Details - Sibling Discounts)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 97-98
  - **Success Criteria**: Sibling discount structure documented

- [ ] **Task 1.0.7**: Verify information gaps
  - Confirm payment schedule options (monthly/semester/annual) not detailed
  - Confirm refund policies not disclosed
  - Confirm aid eligibility thresholds not public
  - Confirm meal/transportation costs not addressed
  - Confirm tuition for some locations requires campus contact
  - **FR**: FR2.3 (Information Gaps Handling)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 196-223
  - **Success Criteria**: Information gaps comprehensively cataloged

---

## Phase 1.1: Documentation Writing

**Objective**: Write reference/enrollment/tuition.md following all Functional Requirements

**Status**: ⏳ Pending
**Tasks**: 0/14 complete

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/enrollment
  - Create file: reference/enrollment/tuition.md
  - Write H1: "Tuition and Financial Aid"
  - Write one-sentence definition capturing pricing range ($10k-$75k), all-inclusive model, financial aid via Clarity, voucher strategies, fees/deposits, and key gaps
  - **FR**: FR1.1
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Header matches template format with comprehensive one-sentence definition

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write paragraph 1: Location-based pricing strategy ($10k-$75k range), specific tuition amounts (SF $75k, Austin $40k, GT $25k, Brownsville $10k, micro-schools ~$15k), undisclosed locations, fees ($100 application, $1,000 deposit)
  - Write paragraph 2: All-inclusive model (trips/supplies/enrichment included, "no additional fundraising ever"), sibling discount (5%), payment schedule gaps, refund policy gaps
  - Write paragraph 3: Financial aid via Clarity (tax returns, income, assets, expenses), CRITICAL LIMITATION (NOT guaranteed), undisclosed income thresholds/award ranges/approval rates, voucher strategies (~$12k reducing micro-school to $300-400/month), state-specific school choice programs
  - **FR**: FR1.2
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Overview provides comprehensive tuition context with transparency about information gaps

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create GitHub Flavored Markdown table with 4 columns: Property | Type | Description | Example
  - Add 10 required properties with accurate values:
    - tuition_range (string)
    - location_pricing (object)
    - all_inclusive_model (boolean)
    - application_fee (string)
    - enrollment_deposit (string)
    - sibling_discount (string)
    - financial_aid_platform (string)
    - voucher_compatibility (boolean)
    - typical_voucher_amount (string)
    - included_in_tuition (array)
  - **FR**: FR1.3
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Table enables structured tuition fact extraction with snake_case property naming

- [ ] **Task 1.1.4**: Write Details subsection - Tuition by Location (FR1.4)
  - Document all disclosed locations with pricing: San Francisco ($75k, city's most expensive), Austin ($40k flagship), GT School ($25k), Brownsville ($10k border region), micro-schools (~$15k)
  - Note undisclosed locations requiring campus contact (NY, Miami, Santa Barbara, Scottsdale)
  - Explain geographic market strategy and $65,000 variance
  - Include pricing year references (2024-2025, 2025-2026) and verification notes
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Location-based tuition structure comprehensively documented

- [ ] **Task 1.1.5**: Write Details subsection - All-Inclusive Model and What Tuition Covers (FR1.4)
  - List everything included: trips (Formula 1, Poland), supplies, enrichment, workshops, sports, arts, technology, platform access, MAP assessments
  - Include "no additional fundraising ever" guarantee
  - Provide comparison with traditional private school add-on costs (technology fees, capital improvements, giving campaigns, trip charges)
  - Note what's potentially NOT included (meals, before/after care, transportation, summer programs)
  - Explain value proposition and cost certainty
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: All-inclusive model benefits and scope clearly explained with comparisons

- [ ] **Task 1.1.6**: Write Details subsection - Fees and Deposits (FR1.4)
  - Document $100 application fee (non-refundable, per student, required at application)
  - Explain $1,000 enrollment deposit (per student, secures spot, APPLIES TOWARD tuition)
  - Provide total enrollment cost calculation examples
  - Note refund policy gaps (deposit refundability unclear)
  - Confirm no other mandatory fees (consistent with all-inclusive model)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Fee structure comprehensively documented with gaps noted

- [ ] **Task 1.1.7**: Write Details subsection - Financial Aid Process and Limitations (FR1.4)
  - Explain Clarity platform and application requirements (tax returns, income statements, asset documentation, household expenses)
  - Document aid determination process (Clarity calculation → Alpha review → final award)
  - Emphasize CRITICAL LIMITATION: tuition assistance NOT guaranteed to every applicant
  - List all undisclosed details: income thresholds not public, award ranges not disclosed, approval rates not published, eligibility formulas not documented, renewable aid not explained, application deadlines not specified, decision timelines not detailed
  - Note how sibling discount interacts with aid (not clarified)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Financial aid pathways and limitations transparently documented

- [ ] **Task 1.1.8**: Write Details subsection - School Vouchers and Affordability Strategies (FR1.4)
  - Explain voucher compatibility with Alpha School
  - Document typical voucher amounts (~$12,000 in states with robust school choice programs)
  - Provide cost reduction examples (80% reduction: $15k micro-school - $12k voucher = $3k family cost ≈ $300-400/month)
  - Document voucher eligibility variations (universal vs. income-restricted vs. prior public school enrollment vs. special needs)
  - List states with school choice programs (Texas ESAs, Florida FES/FTC, Arizona ESA, others expanding)
  - Explain strategic combinations with sibling discounts
  - Note voucher limitations (may not cover full tuition at high-tier locations, subject to legislative changes)
  - List gaps: specific programs accepted per location, special needs voucher qualification, payment schedules
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Voucher strategies comprehensively explained with state-specific details

- [ ] **Task 1.1.9**: Write Details subsection - Sibling Discounts and Family Affordability (FR1.4)
  - Document 5% discount structure (second child and all subsequent children)
  - Provide multi-child savings calculations: 2 children at Austin ($40k + $38k = $78k, saves $2k), 3 children ($116k, saves $4k)
  - Compare discount value with voucher value (5% = $2k on Austin tuition vs. ~$12k vouchers)
  - Explain combined strategies: sibling discount + vouchers = maximum affordability
  - Note application process likely automatic but not documented
  - List gaps: whether applies to fees/deposits, if percentage increases with more children, combination with financial aid, maximum eligible children
  - **FR**: FR1.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Sibling discount structure documented with combination strategies

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Write Example 1: San Francisco Full-Pay Family - $75k tuition + $100 fee + $1k deposit = $74,200 total; all-inclusive coverage (F1, international travel, everything); comparison with traditional SF private schools (~$62k with add-ons); Alpha premium ~$12k but eliminates fundraising and cost uncertainty; include INFORMATION STATUS noting payment schedule gaps
  - Write Example 2: Micro-School Family with Voucher and Sibling Discount - 2 children, Texas ESA vouchers ~$12k each, first child $15k - $12k = $3k/year ($250-300/month), second child $14.25k (5% discount) - $12k = $2.25k/year ($187.50-225/month), total family cost $5,250/year for TWO children (82% reduction from $29,250); include INFORMATION STATUS noting voucher amounts vary by state
  - Write Example 3: Austin Family with Financial Aid - $40k tuition, Clarity application (tax returns, income, assets, expenses), HYPOTHETICAL aid award $18k (45% of tuition), net family cost $22k - $1k deposit = $21,200 total; include CRITICAL LIMITATION noting aid amounts, formulas, approval rates, and eligibility criteria are HYPOTHETICAL EXAMPLES not Alpha-published data, assistance NOT guaranteed
  - Each example with bold title, detailed cost scenario, and INFORMATION STATUS or LIMITATION conclusion
  - **FR**: FR1.5
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Three concrete cost scenarios documented with appropriate information status caveats

- [ ] **Task 1.1.11**: Create related documentation links (FR1.6)
  - Link to 6 related specs:
    - Enrollment Process (Spec 019)
    - Locations Overview (Spec 021)
    - Contact Overview (Spec 023)
    - Educational Philosophy (Spec 006)
    - Daily Schedule (Spec 010)
    - Outcomes Claims (Spec 015)
  - Use relative paths for internal navigation
  - **FR**: FR1.6
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Navigation links enable LLM cross-referencing across enrollment and program documentation

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Write FAQ 1: How much does Alpha School cost? (Location-based pricing, $10k-$75k range, all-inclusive model, fees, undisclosed locations)
  - Write FAQ 2: What does Alpha tuition include? (ALL activities, trips/supplies/enrichment, "no additional fundraising ever", comparison with traditional add-on fees)
  - Write FAQ 3: Is financial aid available and how do I apply? (Clarity platform, NOT guaranteed, application requirements, undisclosed income thresholds/award ranges/approval rates)
  - Write FAQ 4: Can I use school vouchers at Alpha School? (Yes, ~$12k in eligible states, cost reduction examples, eligibility variations by state)
  - Write FAQ 5: Is there a sibling discount? (5% for second+ children, savings calculations, combination with vouchers, undisclosed details)
  - Write FAQ 6: What are the enrollment fees and deposits? ($100 application non-refundable, $1,000 deposit applies to tuition, refund policy gaps, no other fees)
  - Each Q&A addresses common financial questions with transparency
  - **FR**: FR1.7
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: 6 FAQs address primary tuition/financial aid questions families and LLMs will have

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - List all 9 sources from research/enrollment.md relevant to tuition with URLs and retrieval dates:
    - Alpha School FAQ, Admissions
    - SF Standard, Axios, Entrepreneur, AIFunLab articles
    - Alpha Austin Tuition PDF, GT School Tuition PDF
    - Wikipedia
  - Format each as: `- [Source Name](URL) - Retrieved 2026-01-20`
  - **FR**: FR1.8
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Complete citation trail with URLs and dates for all tuition information

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add horizontal rule separator (`---`)
  - Add "*Last updated: 2026-01-20*"
  - Add "*Last verified: 2026-01-20*"
  - **FR**: FR1.9
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Footer metadata included for documentation freshness tracking

---

## Phase 1.2: Quality Review

**Objective**: Ensure reference/enrollment/tuition.md meets all quality standards

**Status**: ⏳ Pending
**Tasks**: 0/6 complete

- [ ] **Task 1.2.1**: Primary quality check (FR2.1-FR2.4)
  - Verify all factual claims trace to research/enrollment.md with line references
  - Confirm Alpha published information vs. gaps distinction throughout (FR2.2)
  - Check neutral presentation—no "expensive"/"affordable" labels or value judgments (FR2.4)
  - Verify information gaps explicitly documented in Overview paragraph 2-3, Details subsections, Examples, FAQs (FR2.3)
  - **FR**: FR2.1, FR2.2, FR2.3, FR2.4
  - **Files**: reference/enrollment/tuition.md, research/enrollment.md
  - **Success Criteria**: Content meets all FR2 quality standards; no speculation or unverified claims

- [ ] **Task 1.2.2**: Fact-check tuition amounts
  - Verify all location-specific pricing accurate: SF $75k, Austin $40k, GT $25k, Brownsville $10k, micro-schools ~$15k
  - Confirm fees correct ($100 application non-refundable, $1,000 deposit applies to tuition)
  - Validate all-inclusive model details ("no additional fundraising ever", Formula 1/Poland trips)
  - Check voucher amounts (~$12,000) and discount percentages (5% sibling)
  - Verify financial aid facts (Clarity platform, NOT guaranteed)
  - **FR**: FR2.1
  - **Files**: reference/enrollment/tuition.md, research/enrollment.md
  - **Success Criteria**: 100% factual accuracy verified against research file lines 75-110

- [ ] **Task 1.2.3**: Consistency check
  - Verify tuition amounts consistent across Overview, Properties, Details, Examples, FAQs
  - Check fee structure ($100, $1,000) consistent in all mentions
  - Validate all-inclusive model scope consistent throughout document
  - Confirm property table values match Details subsections
  - Check financial aid details (Clarity, NOT guaranteed) consistent across sections
  - Verify voucher amounts and discount percentages consistent
  - **FR**: All FR1 and FR2
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: No internal contradictions; consistent facts across all sections

- [ ] **Task 1.2.4**: Template compliance check (FR1.1-FR1.9)
  - Confirm H1 → H2 → H3 hierarchy with no H4 or deeper headings
  - Verify all 9 FR1 sections present: Header with blockquote definition, Overview (3 paragraphs), Properties table (10 properties), Details (6 subsections), Examples (3), Related links (6), FAQs (6), Sources, Footer
  - Check properties table format: 4 columns (Property | Type | Description | Example), 10 rows, snake_case naming
  - Validate 3 examples with bold titles and INFORMATION STATUS or LIMITATION conclusions
  - Verify 6 FAQs present with Q&A format
  - Check footer includes "Last updated" and "Last verified" timestamps
  - **FR**: FR1.1, FR1.2, FR1.3, FR1.4, FR1.5, FR1.6, FR1.7, FR1.8, FR1.9
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Perfect template compliance matching roadmap.md lines 136-173

- [ ] **Task 1.2.5**: Neutral tone review (FR2.4)
  - Check for value judgment language removed (no "expensive", "affordable", "reasonable", "unreasonable")
  - Verify no advocacy language (no "excellent value", "great deal")
  - Confirm information gaps stated factually without implying "secretive" or "transparent"
  - Validate tuition described objectively with numbers only
  - Check all-inclusive model presented as factual differentiator, not value judgment
  - Verify cost comparisons are numbers-only without conclusions
  - **FR**: FR2.4
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Neutral, informative tone throughout; document informs without persuading or critiquing

- [ ] **Task 1.2.6**: LLM optimization check (FR3.1-FR3.3)
  - Verify clear heading hierarchy for LLM parsing (H1 title, H2 major sections, H3 Details subsections only)
  - Check properties table uses snake_case naming consistently (tuition_range, location_pricing, etc.)
  - Validate GitHub Flavored Markdown table syntax
  - Confirm example formatting with bold labels (**Example Title**:) and INFORMATION STATUS or LIMITATION conclusions
  - Check scannable structure (bulleted lists, tables, clear subsections)
  - **FR**: FR3.1, FR3.2, FR3.3
  - **Files**: reference/enrollment/tuition.md
  - **Success Criteria**: Document optimized for LLM consumption with hierarchical structure and scannable tables

---

## Post-Implementation Tasks

**Status**: ⏳ Pending
**Tasks**: 0/7 complete

- [ ] **Task 1.3.1**: Update roadmap.md
  - Change Spec 020 status from "📋 Planned" to "✅ Complete"
  - Update completion statistics: "Completed: 26 (81.25%)" (was 25/32 = 78.1%)
  - Update "Last Updated" to implementation date format: "2026-01-20 (Spec 020 Implemented)"
  - Verify Spec 020 row shows "✅ Complete" status
  - **Files**: ralph/roadmap.md
  - **Success Criteria**: Roadmap reflects Spec 020 completion; completion percentage updated

- [ ] **Task 1.3.2**: Update progress.md
  - Add new entry with implementation date as heading: "## 2026-01-20"
  - Document "Spec 020 Implemented ✅" with status
  - Include "What was done" section: Created reference/enrollment/tuition.md documenting detailed tuition structure and financial aid
  - Document "Output File" with line count
  - Include "Key Content Covered" section: Location-based pricing ($10k-$75k), all-inclusive model, fees/deposits, financial aid via Clarity (NOT guaranteed), voucher strategies, sibling discounts, information gaps
  - Note "Documentation Structure": Properties table, 6 Details subsections, 3 examples, 6 FAQs, 9 sources
  - Include "Critical Design Decisions" section: Six subsections for financial topics, all-inclusive model prominence, financial aid limitation emphasis, voucher strategy detailed documentation, hypothetical aid example, location pricing gaps documentation
  - Add "Blockers" note: None
  - Add "Next Action" noting Spec 021 (Locations Overview) is next incomplete spec
  - **Files**: ralph/progress.md
  - **Success Criteria**: Progress log comprehensively documents Spec 020 implementation

- [ ] **Task 1.3.3**: Update activity.log
  - Read current activity.log to see format
  - Add timestamped entry following existing format
  - Document Spec 020 creation and key milestones
  - **Files**: ralph/activity.log
  - **Success Criteria**: Activity logged with timestamp following established format

- [ ] **Task 1.3.4**: Update checklist.md
  - Change checklist header status from "📋 Planned" to "✅ Complete"
  - Update "Current Phase" to "Complete"
  - Update "Progress" to "100% (34/34 tasks)"
  - Update "Last Updated" to completion date
  - Check all task checkboxes as completed
  - **Files**: ralph/specs/020-enrollment-tuition/checklist.md
  - **Success Criteria**: Checklist marked complete with all tasks checked

- [ ] **Task 1.3.5**: Verify enrollment domain complete
  - Confirm Spec 019 (Enrollment Process) status: ✅ Complete
  - Confirm Spec 020 (Enrollment Tuition) status: ✅ Complete
  - Note that Enrollment Domain (2 specs) now fully documented
  - **Success Criteria**: Both Enrollment specs completed

- [ ] **Task 1.3.6**: Update errors.log if needed
  - Document any errors or issues encountered during implementation
  - Log solutions for future reference
  - Note any deviations from spec or unexpected findings
  - **Files**: ralph/errors.log
  - **Success Criteria**: Errors (if any) documented for future dev reference

- [ ] **Task 1.3.7**: Update guardrails.md if needed
  - Document any important interfaces or patterns other specs should follow
  - Note any tuition/financial aid data structures that other specs reference
  - Document any cross-spec dependencies identified
  - **Files**: ralph/guardrails.md
  - **Success Criteria**: Important interfaces logged for other specs

---

## Notes

**Key Implementation Considerations**:

1. **All-Inclusive Model Emphasis**: The all-inclusive tuition model (covering trips, supplies, enrichment with "no additional fundraising ever") is a major differentiator from traditional private schools. Dedicate entire subsection with specific examples and cost comparisons to help families understand true cost comparison beyond base tuition figures.

2. **Financial Aid Limitation Prominence**: "Tuition assistance NOT guaranteed to every applicant" must appear in Overview paragraph 3, Properties table, Details subsection, Examples (with CRITICAL LIMITATION), and FAQs to manage family expectations and prevent assumptions that aid application ensures award.

3. **Voucher Strategy Detailed Documentation**: Vouchers represent most significant affordability mechanism (~$12,000 value dwarfs 5% sibling discount ~$2,000). Provide extensive documentation with 80% cost reduction examples showing how $75k San Francisco school can have $300/month micro-school option in voucher-eligible states.

4. **Hypothetical Aid Example Transparency**: Example 3 includes financial aid award scenario but MUST clearly label amount as HYPOTHETICAL with explicit CRITICAL LIMITATION noting Alpha doesn't publish award data, formulas, or approval rates. This provides useful scenario while maintaining epistemic integrity.

5. **Location Pricing Gaps**: Multiple locations (New York, Miami, Santa Barbara, Scottsdale) don't publicly list tuition. Document these gaps explicitly in Overview, Details, and FAQs to prevent LLMs from claiming comprehensive pricing knowledge and direct families to contact specific campus.

6. **Neutral Presentation**: Avoid value judgments—no "expensive" (San Francisco $75k), "affordable" (Brownsville $10k), "great value" (all-inclusive model), or "unclear" (information gaps). Present pricing, model, aid, and gaps objectively with numbers and facts only per FR2.4.

**Source Verification**:
- All tuition facts must trace to research/enrollment.md with specific line references
- Primary lines: 75-99 (tuition/costs), 101-110 (financial aid), 76-79 (fees/deposits), 91-98 (all-inclusive model and discounts), 196-223 (information gaps)

**Template Compliance**:
- Follow roadmap.md lines 136-173 exactly
- 10 properties in table (tuition_range through included_in_tuition)
- 6 Details subsections (Tuition by Location, All-Inclusive Model, Fees and Deposits, Financial Aid Process, School Vouchers, Sibling Discounts)
- 3 examples with INFORMATION STATUS or LIMITATION conclusions
- 6 FAQs addressing common tuition/financial questions

**Cross-Spec Relationships**:
- Depends on Spec 019 (Enrollment Process) for enrollment context
- Depends on research/enrollment.md (Spec 001e) for source data
- Related to Spec 021 (Locations Overview) for campus-specific details
- Related to Spec 023 (Contact Overview) for financial aid contact information
- Will be synthesized by Specs 024-026 (Guides) for audience-specific overviews

**Next Spec**: Spec 021 (Locations Overview) will document campus locations and expansion plans.
