# Implementation Checklist: Spec 019 - Enrollment Process

**Spec**: 019-enrollment-process
**Status**: ✅ Complete
**Current Phase**: Post-Implementation
**Progress**: 100% (27/27 tasks)
**Last Updated**: 2026-01-20

---

## Phase 1.0: Research Validation

**Objective**: Verify all enrollment information is sourced from research files

**Status**: ⏳ Pending
**Tasks**: 0/6 complete

- [ ] **Task 1.0.1**: Verify three-step enrollment process
  - Confirm Showcase → Application → Shadow Day sequence
  - Confirm $100 application fee (non-refundable)
  - Confirm $1,000 enrollment deposit (applied to tuition)
  - Confirm rolling admissions structure
  - **FR**: FR1.4 (Details - Three-Step Enrollment Process)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 36-66
  - **Success Criteria**: Enrollment process steps comprehensively documented from research file

- [ ] **Task 1.0.2**: Verify eligibility and placement system
  - Confirm K-12 grade levels (PreK-12 at some locations)
  - Confirm level-based vs. grade-based system
  - Confirm MAP diagnostic assessment placement
  - Confirm immunization requirements
  - **FR**: FR1.4 (Details - Eligibility and Placement System)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 68-73
  - **Success Criteria**: Eligibility criteria and placement system documented with citations

- [ ] **Task 1.0.3**: Verify tuition structure by location
  - Confirm San Francisco $75,000/year
  - Confirm Austin $40,000/year
  - Confirm GT School $25,000/year
  - Confirm Brownsville $10,000/year
  - Confirm micro-schools ~$15,000/year
  - Confirm all-inclusive model (no additional fees)
  - Confirm sibling discount (5%)
  - **FR**: FR1.4 (Details - Tuition Structure by Location)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 75-99
  - **Success Criteria**: Tuition pricing by location documented with all amounts verified

- [ ] **Task 1.0.4**: Verify financial aid and affordability
  - Confirm Clarity platform for tuition assistance
  - Confirm assistance NOT guaranteed to all applicants
  - Confirm voucher strategy (~$12,000 reducing to $300-400/month)
  - Confirm financial aid availability for 2025-2026
  - **FR**: FR1.4 (Details - Financial Aid and Affordability Strategies)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 101-110
  - **Success Criteria**: Financial aid programs and limitations documented

- [ ] **Task 1.0.5**: Verify application requirements
  - Confirm required documentation list (allergy info, records, waivers, etc.)
  - Confirm physical exam and immunization requirements
  - Confirm contact methods (registrar@alpha.school, campus-specific)
  - **FR**: FR1.4 (Details - Application Requirements and Timeline)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 36-66
  - **Success Criteria**: Application requirements comprehensively documented

- [ ] **Task 1.0.6**: Verify information gaps
  - Confirm enrollment deadlines not disclosed
  - Confirm acceptance rates not published
  - Confirm waitlist policies not detailed
  - Confirm refund policy specifics not found
  - Confirm income thresholds for aid not public
  - Confirm tuition for some locations requires campus contact
  - **FR**: FR2.3 (Information Gaps Handling)
  - **Files**: research/enrollment.md
  - **Source Lines**: research/enrollment.md 196-223
  - **Success Criteria**: Information gaps comprehensively cataloged with specific examples

---

## Phase 1.1: Documentation Writing

**Objective**: Write reference/enrollment/process.md following all Functional Requirements

**Status**: ⏳ Pending
**Tasks**: 0/14 complete

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/enrollment
  - Create file: reference/enrollment/process.md
  - Write H1: "Enrollment Process"
  - Write one-sentence definition in blockquote capturing three-step process, fees, tuition range, placement system, and key enrollment facts
  - **FR**: FR1.1
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Header matches template format with comprehensive one-sentence definition

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write paragraph 1: Three-step process (Showcase → Application → Shadow Day), MAP diagnostic placement, level-based system, rolling admissions with 5:1 ratio
  - Write paragraph 2: Tuition variance by location ($10k-$75k range), financial aid via Clarity, voucher strategies, sibling discounts, all-inclusive model
  - Write paragraph 3: Required documentation (before/after Shadow Day), post-enrollment onboarding (Dean of Parents, ParentSquare), information gaps (deadlines, acceptance rates, aid formulas, refund policies)
  - **FR**: FR1.2
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Overview provides comprehensive enrollment pathway context with transparency about information gaps

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create GitHub Flavored Markdown table with 4 columns: Property | Type | Description | Example
  - Add 10 required properties with accurate values:
    - enrollment_steps (array)
    - application_fee (string)
    - enrollment_deposit (string)
    - grade_levels_served (string)
    - tuition_range (string)
    - student_guide_ratio (string)
    - admissions_type (string)
    - financial_aid_availability (string)
    - diagnostic_assessment (string)
    - required_documentation (array)
  - **FR**: FR1.3
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Table enables structured enrollment fact extraction with snake_case property naming

- [ ] **Task 1.1.4**: Write Details subsection - Three-Step Enrollment Process (FR1.4)
  - Document Step 1 (Attend a Showcase), Step 2 (Submit Application with $100 fee), Step 3 (Shadow Day with MAP diagnostics)
  - Include "Is Alpha a Fit?" assessment tool (https://match.app.alpha.school/)
  - Detail post-Shadow Day coordinator meetings and MAP results review
  - Explain enrollment finalization (forms, tuition agreement, $1,000 deposit)
  - Note rolling admissions and contact methods (registrar@alpha.school, campus-specific)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Enrollment process flow comprehensively documented with all steps detailed

- [ ] **Task 1.1.5**: Write Details subsection - Eligibility and Placement System (FR1.4)
  - Document K-12 grade levels (PreK-12 at some locations like Austin)
  - Explain level-based system vs. traditional grade models
  - Detail MAP diagnostic assessment placement approach (students work at different levels per subject)
  - Include immunization requirements for states with locations
  - Note Alpha Raleigh launching Fall 2025 (K-3)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Eligibility and capability-based placement clearly explained with concrete examples

- [ ] **Task 1.1.6**: Write Details subsection - Tuition Structure by Location (FR1.4)
  - Document tuition for each location: San Francisco ($75,000), Austin ($40,000), GT School ($25,000), Brownsville ($10,000), micro-schools (~$15,000)
  - Explain all-inclusive model (trips, activities, supplies included; "no additional fundraising ever")
  - Include sibling discount details (5% for second child and beyond)
  - Note locations requiring campus contact for pricing (New York, Miami, Santa Barbara, Scottsdale)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Tuition structure comprehensively documented with all location-specific pricing

- [ ] **Task 1.1.7**: Write Details subsection - Financial Aid and Affordability Strategies (FR1.4)
  - Document Clarity platform process for tuition assistance applications
  - Note tuition assistance NOT guaranteed to all applicants
  - Explain voucher strategy with cost reduction examples (~$12,000 vouchers reducing micro-school to $300-400/month)
  - Document information gaps: income thresholds not public, award ranges not disclosed, approval rates not published
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Financial aid pathways and limitations transparently documented

- [ ] **Task 1.1.8**: Write Details subsection - Application Requirements and Timeline (FR1.4)
  - List required documentation before Shadow Day (allergy/medication info, emergency contacts, school records, waivers, consent forms, data collection forms)
  - Include additional requirements (physical exam form, immunization certification)
  - Document fees ($100 application fee non-refundable, $1,000 enrollment deposit applies to tuition)
  - Note timeline gaps (acceptance decision timing not specified, Shadow Day scheduling lead time not disclosed, mid-year enrollment policies not detailed)
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Application requirements comprehensively listed with transparency about timeline gaps

- [ ] **Task 1.1.9**: Write Details subsection - Post-Enrollment Onboarding (FR1.4)
  - Document Dean of Parents connection and support role
  - Explain ParentSquare platform setup for communication
  - Include MAP results review and academic goal setting with coordinators
  - Note parent community integration
  - **FR**: FR1.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Onboarding process documented with family support resources

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Write Example 1: Austin Campus Enrollment Journey - Full walkthrough from Showcase to enrollment with MAP diagnostic results (Math 5th grade level, Reading 4th grade, Language 3rd grade), $40,000 tuition, Clarity financial aid application, $1,000 deposit, ParentSquare setup; include INFORMATION STATUS noting decision timeline gaps
  - Write Example 2: Micro-School Enrollment with Voucher Strategy - $15,000 tuition - $12,000 voucher = $3,000 family cost (~$250/month), sibling discount calculation, all-inclusive model benefits; include INFORMATION STATUS noting voucher amounts are examples and vary by state
  - Write Example 3: Financial Aid Application Process - San Francisco $75,000 tuition, Clarity platform upload (tax returns, income, assets, expenses), hypothetical aid award ($30,000 reducing to $45,000 family responsibility); include LIMITATION noting aid formulas/ranges not published, assistance not guaranteed
  - Each example with bold title, detailed scenario, and INFORMATION STATUS or LIMITATION conclusion
  - **FR**: FR1.5
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Three concrete enrollment scenarios documented with appropriate information status caveats

- [ ] **Task 1.1.11**: Create related documentation links (FR1.6)
  - Link to 8 related specs:
    - Enrollment Tuition (Spec 020)
    - Locations Overview (Spec 021)
    - Contact Overview (Spec 023)
    - Curriculum Overview (Spec 011)
    - Curriculum Grade Levels (Spec 013)
    - Curriculum Assessments (Spec 014)
    - Daily Schedule (Spec 010)
    - Educational Philosophy (Spec 006)
  - Use relative paths for internal navigation
  - **FR**: FR1.6
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Navigation links enable LLM cross-referencing across enrollment and program documentation

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Write FAQ 1: What are the steps to enroll? (Three-step process detail)
  - Write FAQ 2: How much does Alpha cost and is financial aid available? (Tuition range, Clarity, vouchers, sibling discounts)
  - Write FAQ 3: What are the eligibility requirements? (K-12, level-based placement, MAP diagnostics, immunizations)
  - Write FAQ 4: What documentation do I need? (Before Shadow Day, additional requirements, fees)
  - Write FAQ 5: How does level-based placement work? (MAP diagnostics, capability vs. chronological grade, multi-level example)
  - Each Q&A addresses common enrollment questions with transparency
  - **FR**: FR1.7
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: 5 FAQs address primary enrollment questions families and LLMs will have

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - List all 13 sources from research/enrollment.md with URLs and retrieval dates:
    - Alpha School Admissions, FAQ, Homepage
    - SF Standard, Axios, Entrepreneur, AIFunLab articles
    - Alpha Austin and GT School Tuition PDFs
    - Wikipedia, Niche, Alpha High School Admissions
  - Format each as: `- [Source Name](URL) - Retrieved 2026-01-20`
  - **FR**: FR1.8
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Complete citation trail with URLs and dates for all enrollment information

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add horizontal rule separator (`---`)
  - Add "*Last updated: 2026-01-20*"
  - Add "*Last verified: 2026-01-20*"
  - **FR**: FR1.9
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Footer metadata included for documentation freshness tracking

---

## Phase 1.2: Quality Review

**Objective**: Ensure reference/enrollment/process.md meets all quality standards

**Status**: ⏳ Pending
**Tasks**: 0/6 complete

- [ ] **Task 1.2.1**: Primary quality check (FR2.1-FR2.4)
  - Verify all factual claims trace to research/enrollment.md with line references
  - Confirm Alpha published information vs. gaps distinction throughout (FR2.2)
  - Check neutral presentation—no advocacy ("affordable") or critique ("secretive") language (FR2.4)
  - Verify information gaps explicitly documented in Overview paragraph 3, Details subsections, Examples, FAQs (FR2.3)
  - **FR**: FR2.1, FR2.2, FR2.3, FR2.4
  - **Files**: reference/enrollment/process.md, research/enrollment.md
  - **Success Criteria**: Content meets all FR2 quality standards; no speculation or unverified claims

- [ ] **Task 1.2.2**: Fact-check enrollment details
  - Verify three-step process accuracy (Showcase → Application → Shadow Day)
  - Confirm all fees correct ($100 application non-refundable, $1,000 deposit applies to tuition)
  - Validate tuition amounts: SF $75k, Austin $40k, GT $25k, Brownsville $10k, micro-schools ~$15k
  - Check MAP diagnostic assessment details (placement regardless of chronological grade)
  - Verify financial aid facts (Clarity platform, NOT guaranteed, voucher ~$12k, sibling 5% discount)
  - **FR**: FR2.1
  - **Files**: reference/enrollment/process.md, research/enrollment.md
  - **Success Criteria**: 100% factual accuracy verified against research file lines 36-125

- [ ] **Task 1.2.3**: Consistency check
  - Verify tuition amounts consistent across Overview, Properties, Details, Examples, FAQs
  - Check enrollment steps consistent throughout document
  - Validate fees ($100, $1,000) consistent in all mentions
  - Confirm property table values match Details subsections
  - Check financial aid details (Clarity, NOT guaranteed) consistent across sections
  - **FR**: All FR1 and FR2
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: No internal contradictions; consistent facts across all sections

- [ ] **Task 1.2.4**: Template compliance check (FR1.1-FR1.9)
  - Confirm H1 → H2 → H3 hierarchy with no H4 or deeper headings
  - Verify all 9 FR1 sections present: Header with blockquote definition, Overview (3 paragraphs), Properties table (10 properties), Details (6 subsections), Examples (3), Related links (8), FAQs (5), Sources, Footer
  - Check properties table format: 4 columns (Property | Type | Description | Example), 10 rows, snake_case naming
  - Validate 3 examples with bold titles and INFORMATION STATUS or LIMITATION conclusions
  - Verify 5 FAQs present with Q&A format
  - Check footer includes "Last updated" and "Last verified" timestamps
  - **FR**: FR1.1, FR1.2, FR1.3, FR1.4, FR1.5, FR1.6, FR1.7, FR1.8, FR1.9
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Perfect template compliance matching roadmap.md lines 136-173

- [ ] **Task 1.2.5**: Neutral tone review (FR2.4)
  - Check for advocacy language removed (no "affordable", "reasonable", "excellent value")
  - Verify no critique language (no "expensive", "unclear", "secretive", "opaque")
  - Confirm information gaps stated factually without implying criticism
  - Validate tuition described objectively without value judgments
  - Check financial aid presented neutrally (assistance available but NOT guaranteed)
  - **FR**: FR2.4
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Neutral, informative tone throughout; document informs without persuading or critiquing

- [ ] **Task 1.2.6**: LLM optimization check (FR3.1-FR3.3)
  - Verify clear heading hierarchy for LLM parsing (H1 title, H2 major sections, H3 Details subsections only)
  - Check properties table uses snake_case naming consistently (enrollment_steps, application_fee, etc.)
  - Validate GitHub Flavored Markdown table syntax
  - Confirm example formatting with bold labels (**Example Title**:) and INFORMATION STATUS conclusions
  - Check scannable structure (bulleted lists, tables, clear subsections)
  - **FR**: FR3.1, FR3.2, FR3.3
  - **Files**: reference/enrollment/process.md
  - **Success Criteria**: Document optimized for LLM consumption with hierarchical structure and scannable tables

---

## Post-Implementation Tasks

**Status**: ⏳ Pending
**Tasks**: 0/4 complete

- [ ] **Task 1.3.1**: Update roadmap.md
  - Change Spec 019 status from "📋 Planned" to "✅ Complete"
  - Update completion statistics: "Completed: 25 (78.1%)" (was 24/32 = 75%)
  - Update "Last Updated" to implementation date
  - Verify Spec 019 row shows "✅ Complete" status
  - **Files**: ralph/roadmap.md
  - **Success Criteria**: Roadmap reflects Spec 019 completion; completion percentage updated

- [ ] **Task 1.3.2**: Update progress.md
  - Add new entry with implementation date as heading
  - Document "Spec 019 Implemented ✅" with status
  - Include "What was done" section: Created reference/enrollment/process.md documenting three-step enrollment pathway
  - Document "Output File" with line count
  - Include "Key Content Covered" section: Three-step process, eligibility/placement, tuition structure ($10k-$75k), financial aid via Clarity, application requirements, information gaps
  - Note "Documentation Structure": Properties table, 6 Details subsections, 3 examples, 5 FAQs, 13 sources
  - Include "Critical Design Decisions" section: Six subsections for enrollment stages, tuition range emphasis, information gaps transparency, three example scenarios, rolling admissions prominence, level-based placement explanation
  - Add "Next Action" noting Spec 020 (Enrollment Tuition) is next
  - **Files**: ralph/progress.md
  - **Success Criteria**: Progress log comprehensively documents Spec 019 implementation

- [ ] **Task 1.3.3**: Update activity.log
  - Add timestamped entry: "2026-01-20 HH:MM - Spec 019 (Enrollment Process) implemented - Created reference/enrollment/process.md"
  - **Files**: ralph/activity.log
  - **Success Criteria**: Activity logged with timestamp

- [ ] **Task 1.3.4**: Update checklist.md
  - Change checklist header status from "📋 Planned" to "✅ Complete"
  - Update "Current Phase" to "Complete"
  - Update "Progress" to "100% (27/27 tasks)"
  - Update "Last Updated" to completion date
  - Check all task checkboxes as completed
  - **Files**: ralph/specs/019-enrollment-process/checklist.md
  - **Success Criteria**: Checklist marked complete with all tasks checked

---

## Notes

**Key Implementation Considerations**:

1. **Tuition Variance**: The $10,000-$75,000 range is significant ($65,000 spread) and must be prominently featured in Overview, Properties, Details, Examples, and FAQs—families need to understand location-specific pricing before investing in enrollment process.

2. **Information Gaps Transparency**: Multiple critical details are not publicly disclosed (acceptance rates, aid formulas, waitlist policies, refund details, specific deadlines). These gaps must be documented explicitly per FR2.3 to prevent LLMs from presenting incomplete information as comprehensive.

3. **Level-Based Placement**: The capability-based level system (vs. traditional grades) is fundamental departure requiring clear explanation—families expect "4th grade class" but Alpha assigns different levels per subject based on MAP diagnostics. Dedicate subsection and FAQ to this concept.

4. **Financial Aid Limitations**: "Tuition assistance NOT guaranteed to every applicant" must be stated clearly in multiple sections to manage family expectations—Clarity platform calculates potential aid but actual awards discretionary.

5. **Rolling Admissions Context**: No fixed deadlines differentiates Alpha from traditional private schools but capacity still limited by 5:1 student-guide ratio—document this balance between flexibility and capacity constraints.

6. **Neutral Presentation**: Avoid advocacy ("affordable", "reasonable tuition") or critique ("expensive", "unclear policies")—document tuition range, aid availability, and information gaps factually per FR2.4.

**Source Verification**:
- All enrollment facts must trace to research/enrollment.md with specific line references
- Primary lines: 36-66 (process), 68-73 (eligibility), 75-99 (tuition), 101-110 (financial aid), 196-223 (gaps)

**Template Compliance**:
- Follow roadmap.md lines 136-173 exactly
- 10 properties in table (enrollment_steps through required_documentation)
- 6 Details subsections (Three-Step Process, Eligibility, Tuition, Financial Aid, Requirements, Onboarding)
- 3 examples with INFORMATION STATUS or LIMITATION conclusions
- 5 FAQs addressing common enrollment questions

**Next Spec**: Spec 020 (Enrollment Tuition) will provide detailed tuition and financial aid documentation building on this foundation.
