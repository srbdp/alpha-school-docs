# Spec 019: Enrollment Process

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001e (Research Enrollment Domain)
**Output**: `reference/enrollment/process.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "How do families enroll students at Alpha School?" for LLM consumption. This document synthesizes findings from `research/enrollment.md` into a structured, authoritative guide to Alpha School's three-step enrollment process (Showcase → Application → Shadow Day), eligibility requirements, tuition structure by location ($10,000-$75,000 range), financial aid programs, application requirements, and post-enrollment onboarding—providing families and LLMs clear understanding of how to access Alpha School.

### Scope

Transform research findings into a structured reference document covering:
- **Enrollment Process**: Three-step admissions flow (Showcase, Application, Shadow Day) with detailed requirements at each stage
- **Eligibility and Placement**: K-12 grade levels (PreK-12 at some locations), capability-based level system, MAP diagnostic assessments determining placement
- **Tuition Structure**: Location-specific pricing ranging from $10,000/year (Brownsville) to $75,000/year (San Francisco), all-inclusive model, sibling discounts
- **Financial Aid**: Tuition assistance via Clarity software, voucher strategies reducing costs to $300-400/month, availability and application process
- **Application Requirements**: Required documentation (immunizations, school records, waivers), fees ($100 application + $1,000 enrollment deposit), timeline expectations
- **Rolling Admissions**: No fixed deadlines, 5:1 student-guide ratio, capacity varies by location
- **Post-Enrollment Onboarding**: Dean of Parents support, ParentSquare platform, community integration
- **Information Gaps**: Specific enrollment deadlines, acceptance rates, waitlist policies, refund details not publicly disclosed

### Output File

`reference/enrollment/process.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Enrollment Process" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Enrollment Process

  > [One-sentence definition capturing Alpha School's three-step enrollment pathway (Showcase → Application with $100 fee → Shadow Day diagnostic assessment), level-based placement system using MAP exams, tuition ranging $10,000-$75,000/year by location with financial aid via Clarity software, rolling admissions with 5:1 student-guide ratio, required documentation (immunizations, records, waivers), and post-enrollment onboarding through Dean of Parents and ParentSquare platform]
  ```
- **Source**: Synthesize from research/enrollment.md lines 36-125
- **Rationale**: Follows API-style documentation pattern established in Specs 002-018

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's enrollment process
- **Content Coverage**:
  - Paragraph 1: Alpha School uses a three-step enrollment process designed to match families with school's learning model before commitment—families attend Showcase events to explore the learning approach and environment; interested families submit applications with $100 non-refundable fee per student; admitted students participate in Shadow Day experiencing full day of AI-driven academics and afternoon workshops; diagnostic assessments during Shadow Day (MAP/Measures of Academic Progress exams) determine level placement regardless of chronological grade; Alpha uses capability-based levels rather than traditional grade structure, meaning 4th grade student might work at different levels across subjects based on mastery; enrollment finalized through enrollment forms, tuition agreements, and $1,000 deposit (applied toward tuition); rolling admissions means no fixed deadlines though capacity limited to 5:1 student-guide ratio

  - Paragraph 2: Tuition varies significantly by location reflecting Alpha's geographic market strategy—San Francisco charges $75,000/year (city's most expensive private school), Austin charges $40,000/year, while Brownsville (near SpaceX headquarters) charges $10,000/year; micro-school model launches at approximately $15,000/year; all tuition is all-inclusive covering trips, activities, and supplies with "no additional fundraising ever" (per FAQ); financial aid available through Clarity (third-party software) calculating tuition assistance based on family financial information—though assistance not guaranteed to every applicant; school vouchers (~$12,000 in eligible states) can reduce micro-school costs to approximately $300-400/month; sibling discount offers 5% reduction for second child and beyond; tuition information for several locations (New York, Miami, Santa Barbara, Scottsdale) not publicly listed—families must contact specific campuses

  - Paragraph 3: Required documentation before Shadow Day includes allergy/medication information, emergency contacts, current school records (grades 2-8), signed liability waivers, photo/video consent forms, and data collection forms; post-Shadow Day, families meet with admissions coordinators to review MAP exam results and academic goals before finalizing enrollment; additional requirements include physical exam forms and immunization certification per state mandates (Texas, Florida, Arizona, California, New York, North Carolina, Virginia); post-enrollment onboarding connects families with Dean of Parents and ParentSquare communication platform; INFORMATION GAPS: specific enrollment deadlines not disclosed (rolling admissions but capacity limits unknown), acceptance rates not published, waitlist policies not detailed, refund policy specifics not found, mid-year enrollment policies not public, income thresholds for financial aid eligibility not disclosed, exact tuition for multiple locations requires direct campus contact
- **Source**: research/enrollment.md lines 36-125, 196-223
- **Rationale**: Provides LLMs comprehensive overview of enrollment pathway with transparency about location-specific tuition variance and information limitations

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key enrollment process attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (10 properties):
  - `enrollment_steps` (array) - Three-step admissions process sequence
  - `application_fee` (string) - Non-refundable fee per student for application
  - `enrollment_deposit` (string) - Deposit amount required to secure enrollment
  - `grade_levels_served` (string) - Age/grade range across Alpha locations
  - `tuition_range` (string) - Minimum and maximum annual tuition by location
  - `student_guide_ratio` (string) - Student-to-guide staffing ratio
  - `admissions_type` (string) - Enrollment timeline and deadline structure
  - `financial_aid_availability` (string) - Tuition assistance program and mechanism
  - `diagnostic_assessment` (string) - Placement test used for level determination
  - `required_documentation` (array) - Key documents needed for enrollment
- **Source**: research/enrollment.md lines 36-110
- **Rationale**: Enables LLMs to quickly extract structured facts about enrollment requirements and process flow

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Three-Step Enrollment Process**: Alpha School's admissions follows sequential pathway—**Step 1: Attend a Showcase** where families explore learning approach and environment, typically at campus location; **Step 2: Submit Application** including completed application form and $100 non-refundable fee per student (serves as initial commitment and screening); **Step 3: Shadow Day** where admitted students experience full day engaging with AI academics and afternoon workshops while taking MAP (Measures of Academic Progress) diagnostic exams; homepage directs interested families to "Is Alpha a Fit?" assessment tool (https://match.app.alpha.school/) as recommended first step before formal application; post-Shadow Day, families meet with admissions coordinators to review MAP exam results and set academic goals; enrollment finalized by completing enrollment forms, tuition agreements, and submitting $1,000 enrollment deposit; deposit applies toward overall tuition; rolling admissions means families can apply throughout the year rather than fixed application windows—notable contrast to traditional private schools with set deadline periods; capacity managed through 5:1 student-guide ratio though total enrollment capacity per campus not publicly disclosed; contact methods include general email (registrar@alpha.school) or campus-specific contacts (e.g., Austin admissions: admissions@alpha.school, 512-358-1672)

  - **Eligibility and Placement System**: Alpha serves K-12 students with some locations offering PreK-12 (such as Alpha Austin); eligibility not based on admissions testing for minimum performance but diagnostic assessments determine placement; Alpha uses **level-based system founded on specific capabilities rather than traditional grade models**—student's chronological grade does not dictate instructional level; incoming students take MAP (Measures of Academic Progress) exams during Shadow Day; placement based on MAP assessment results regardless of current grade placement; 4th grade student might work at 5th grade math level, 3rd grade reading level, and 4th grade science level depending on demonstrated mastery; system allows students "two to three years behind" to catch up through accelerated learning (per outcomes research); conversely, advanced students can progress beyond chronological grade level; immunization requirements mandate all students comply with state-mandated immunizations or approved exemptions before enrollment (states with locations: Texas, Florida, Arizona, California, New York, North Carolina, Virginia); PreK 4 programs available at select locations; Alpha Raleigh launching Fall 2025 enrolling K-3 initially

  - **Tuition Structure by Location**: Alpha employs location-specific pricing strategy reflecting local market positioning—**San Francisco**: $75,000/year (described as "city's most expensive private school," exceeding elite institutions like Convent & Stuart Hall at ~$50,000/year); **Austin**: $40,000/year (2024-2025); **GT School**: $25,000/year (2024-2025); **Brownsville (Texas)**: $10,000/year (lowest-cost location, near SpaceX headquarters); **Micro-schools**: launching at approximately $15,000/year; **Total Range**: $10,000-$75,000 depending on location; tuition for additional locations (New York, Miami, Santa Barbara, Scottsdale) not publicly listed—families must contact specific campus for pricing; **All-Inclusive Model**: Alpha tuition covers ALL student activities including trips (examples: Formula 1 events, Poland travel), supplies, and enrichment; Alpha explicitly states "will never EVER ask parents for additional fundraising" (per FAQ)—differentiator from traditional private schools with add-on fees; **Sibling Discount**: 5% discount on tuition for second child and beyond; tuition schedules (monthly/semester/annual payment options) not detailed in public materials

  - **Financial Aid and Affordability Strategies**: **Tuition Assistance Program**: available for 2025-2026 school year and beyond; Alpha uses **Clarity** (third-party software) to collect family financial information and calculate possible tuition assistance amounts; **Important Limitation**: tuition assistance NOT guaranteed to every applicant—award amounts and eligibility criteria not publicly disclosed; **Income Thresholds**: specific income limits or percentage-of-income formulas for aid eligibility not public; **Voucher Strategy**: school vouchers (in eligible states) can significantly reduce family costs—example: ~$12,000 vouchers applied to $15,000 micro-school tuition reduces family cost to approximately $300-400/month ($3,600-$4,800/year); strategy particularly effective in states with robust school choice programs; **Application Process**: financial aid applications processed through Clarity platform; specific deadlines for aid applications not disclosed; amount/percentage of families receiving aid not published; **Named Scholarships**: no specific scholarship programs named in public materials; **Gaps**: Income thresholds, award ranges, aid approval rates, and waitlist priority for aid recipients not publicly documented

  - **Application Requirements and Timeline**: **Required Documentation Before Shadow Day**: (1) Allergy and medication information; (2) Emergency contact details; (3) Current school records for grades 2-8 students; (4) Signed liability waivers; (5) Photo and video consent forms; (6) Data collection forms; **Additional Requirements**: (1) Physical exam form; (2) Immunization certification per state requirements; **Fees**: (1) $100 application fee per student (non-refundable)—due with application submission; (2) $1,000 enrollment deposit—required to secure student's spot after acceptance, applies toward tuition; **Timeline Expectations**: Rolling admissions with no fixed deadlines; Shadow Day scheduling lead times not specified; acceptance decision timeline not disclosed; mid-year enrollment policies not detailed; **Process Flow**: Application submission → Admissions review → Shadow Day invitation → Diagnostic testing → Coordinator meeting → Acceptance decision → Enrollment forms + deposit → Final documentation → Enrollment confirmed; **Information Not Public**: Specific application deadlines, acceptance rates, average time from application to decision, waitlist information, transfer student specific requirements, refund policy details

  - **Post-Enrollment Onboarding and Community Integration**: **Dean of Parents Support**: Enrolled families connect with Dean of Parents—role focused on parent community integration, addressing family questions, and supporting successful transition; **ParentSquare Platform**: All families set up ParentSquare communication platform—used for school announcements, teacher communication, event coordination, and community building; **Parent Community**: Emphasis on joining parent community network for mutual support and engagement; **Academic Goals Setting**: Post-Shadow Day coordinator meetings establish initial academic goals based on MAP results—provides roadmap for student's learning trajectory; **MAP Results Review**: Families receive detailed breakdown of student's diagnostic assessment results, projected growth targets, and level placements across subjects; **First-Day Preparation**: Specific first-day preparation activities not detailed in public materials; **Ongoing Communication**: Regular communication expectations between guides and families not specified; **Parent Involvement**: Level of expected parent involvement (volunteering, events, conferences) not detailed; **Additional Onboarding**: Whether orientation sessions, parent training, or student buddy systems exist not documented
- **Source**: research/enrollment.md lines 36-125, 196-223
- **Rationale**: Provides comprehensive documentation of enrollment pathway organized by logical process stages with appropriate transparency about information gaps

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating enrollment scenarios
- **Examples to Include** (3 required):
  - **Example 1: Austin Campus Enrollment Journey**: Parents of 4th grade student attend Alpha Austin showcase event learning about 2-Hour Learning model and viewing campus facilities. Family decides to proceed and submits online application with $100 application fee. Student scheduled for Shadow Day two weeks later. During Shadow Day, student participates in morning AI-driven academics (completing sample lessons on platform) and afternoon workshops (robotics, art). Student takes MAP Reading, Math, and Language Usage assessments. Results show: Math at 5th grade level (RIT 220), Reading at 4th grade level (RIT 198), Language at 3rd grade level (RIT 190). Family meets with admissions coordinator who explains level-based placement—student will work at different levels per subject based on mastery rather than single "4th grade" classification. Family reviews $40,000/year tuition for Austin campus and applies for tuition assistance through Clarity software. After acceptance and aid determination (specific amount not disclosed), family submits $1,000 enrollment deposit (applied to tuition), completes immunization requirements, signs enrollment agreement. Family connects with Dean of Parents and joins ParentSquare platform. Student begins at assigned levels with projected growth targets. INFORMATION STATUS: Process documented from public admissions page; specific timeline for acceptance decision not publicly disclosed; financial aid approval criteria and award amounts not detailed; Shadow Day scheduling lead time is example estimate.

  - **Example 2: Micro-School Enrollment with Voucher Strategy**: Family in voucher-eligible state explores Alpha micro-school option launching at $15,000/year tuition. Family qualifies for state school voucher program providing approximately $12,000/year educational funding. Family attends local showcase event and submits application with $100 fee. Student participates in Shadow Day and completes MAP diagnostic assessments. Upon acceptance, family applies voucher to Alpha tuition: $15,000 annual tuition - $12,000 voucher = $3,000 family responsibility ($250/month or $333/month depending on payment schedule). Family also receives 5% sibling discount for second child: Second child tuition $15,000 × 0.95 = $14,250 - $12,000 voucher = $2,250 family responsibility ($187.50/month). Total family cost for two children: approximately $437.50/month. All-inclusive model means no additional costs for field trips, supplies, or activities. Family submits enrollment deposit and completes required documentation. INFORMATION STATUS: Voucher amounts are examples from research citing "~$12,000 vouchers"; actual voucher amounts vary by state and program; micro-school tuition documented at "approximately $15,000/year"; specific payment schedule options not publicly detailed.

  - **Example 3: Financial Aid Application Process**: Family interested in Alpha San Francisco ($75,000/year) but unable to afford full tuition. Family submits enrollment application with $100 fee. Student completes Shadow Day and receives acceptance. Family applies for tuition assistance through Alpha's Clarity platform—uploads tax returns, income statements, asset information, and household expense documentation. Clarity software calculates estimated family contribution based on financial data. Alpha admissions reviews Clarity recommendation and determines aid award (specific formula and criteria not public). Family receives notification of tuition assistance offer—hypothetical example: $75,000 tuition - $30,000 aid = $45,000 family responsibility. Family must decide whether to accept offer and submit $1,000 enrollment deposit or decline. LIMITATION: This example uses hypothetical aid amount as Alpha does not publish aid ranges, approval rates, income thresholds, or award formulas; actual process confirmed through research but specific outcomes vary by family; tuition assistance "NOT guaranteed to every applicant" per Alpha materials; no published data on percentage of families receiving aid or average award amounts.
- **Source**: research/enrollment.md lines 36-110
- **Rationale**: Grounds abstract enrollment process with concrete examples showing different enrollment pathways (standard, voucher, financial aid) while maintaining transparency about information gaps

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents
- **Links**:
  - Enrollment Tuition (Spec 020) - Detailed tuition and financial aid information
  - Locations Overview (Spec 021) - Campus locations and expansion plans
  - Contact Overview (Spec 023) - Enrollment contact information
  - Curriculum Overview (Spec 011) - What students learn after enrollment
  - Curriculum Grade Levels (Spec 013) - Level-based system details
  - Curriculum Assessments (Spec 014) - MAP testing and progress tracking
  - Daily Schedule (Spec 010) - What enrolled student's day looks like
  - Educational Philosophy (Spec 006) - Learning approach families will experience
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected enrollment and program documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about enrollment with authoritative answers
- **FAQs to Include** (5 required):
  - **Q: What are the steps to enroll my child at Alpha School?**
    A: Alpha uses a three-step process: (1) Attend a Showcase event to explore the learning model and campus environment; (2) Submit an application online with $100 non-refundable application fee per student; (3) Participate in Shadow Day where your child experiences a full day of AI academics and afternoon workshops while taking MAP diagnostic assessments. After Shadow Day, you'll meet with admissions coordinators to review MAP results and academic goals. If accepted and you decide to enroll, complete enrollment forms and tuition agreement, then submit $1,000 enrollment deposit (applies toward tuition). Final steps include immunization documentation and connecting with the Dean of Parents and ParentSquare platform. Alpha operates rolling admissions so families can apply throughout the year, though capacity is limited by the 5:1 student-guide ratio.

  - **Q: How much does Alpha School cost and is financial aid available?**
    A: Tuition varies significantly by location: San Francisco charges $75,000/year, Austin charges $40,000/year, GT School charges $25,000/year, and Brownsville charges $10,000/year. Micro-schools launch at approximately $15,000/year. All tuition is all-inclusive—covering trips, activities, and supplies with no additional fundraising requests. Financial aid is available through Clarity (third-party software) that calculates tuition assistance based on family financial information, though assistance is NOT guaranteed to every applicant. Families can also use school vouchers (~$12,000 in eligible states) to reduce costs—potentially bringing micro-school tuition to $300-400/month. Sibling discount offers 5% reduction for second child and beyond. Specific tuition for some locations (New York, Miami, Santa Barbara, Scottsdale) requires contacting the campus directly as pricing is not publicly listed.

  - **Q: What are the eligibility requirements for Alpha School?**
    A: Alpha serves K-12 students (PreK-12 at some locations like Austin). There are no publicly disclosed admissions testing minimums for acceptance. However, Alpha uses a level-based system based on specific capabilities rather than traditional grade models. During Shadow Day, students take MAP (Measures of Academic Progress) diagnostic assessments which determine placement levels across subjects. A 4th grade student might work at different levels for math, reading, and science based on demonstrated mastery rather than chronological grade. All students must comply with state-mandated immunization requirements or approved exemptions. Rolling admissions means families can apply anytime, though acceptance rates and waitlist policies are not publicly disclosed.

  - **Q: What documentation do I need to enroll my child?**
    A: Before Shadow Day, you'll need: allergy/medication information, emergency contacts, current school records (for grades 2-8), signed liability waivers, photo/video consent forms, and data collection forms. Additionally, you'll need a physical exam form and immunization certification per state requirements (Texas, Florida, Arizona, California, New York, North Carolina, Virginia). Financial documents are needed if applying for tuition assistance through Clarity. After acceptance, you'll complete enrollment forms, tuition agreement, and submit the $1,000 enrollment deposit. The application itself requires a $100 non-refundable fee per student.

  - **Q: How does Alpha's level-based placement work?**
    A: Alpha does not use traditional grade-based instruction. Instead, students work at different "levels" based on demonstrated capability in each subject. During Shadow Day, incoming students take MAP (Measures of Academic Progress) exams in reading, math, and language usage. Results determine starting levels regardless of chronological grade—a 6th grade student might work at 7th grade math, 5th grade reading, and 6th grade science simultaneously. Students progress by demonstrating 90%+ mastery on assessments before advancing to next level. This approach allows students who are behind to catch up through accelerated learning and advanced students to progress beyond grade level. After Shadow Day, families meet with admissions coordinators to review MAP results and understand specific level placements and projected growth targets.
- **Source**: research/enrollment.md lines 36-125, 196-223
- **Rationale**: Addresses most common enrollment questions with transparency about process, costs, requirements, and information gaps

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/enrollment.md (lines 8-29):
  - [Alpha School Admissions](https://alpha.school/admissions) - Retrieved 2026-01-20
  - [Alpha School FAQ](https://alpha.school/faq) - Retrieved 2026-01-20
  - [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
  - [SF Standard - Alpha School Article](https://sfstandard.com/2025/09/19/alpha-school-ai-teacher-san-francisco/) - Retrieved 2026-01-20
  - [Alpha Austin Tuition PDF](https://go.alpha.school/hubfs/Austin%20Documents/Alpha%20School%20Austin%20-%20Tuition%2024-25.pdf) - Retrieved 2026-01-20
  - [Wikipedia - Alpha School](https://en.wikipedia.org/wiki/Alpha_School) - Retrieved 2026-01-20
  - [Axios - Alpha Schools Article](https://www.axios.com/local/charlotte/2025/08/27/alpha-schools-ai-artifical-intelligence-education) - Retrieved 2026-01-20
  - [Niche - Alpha School Austin](https://www.niche.com/k12/alpha-school-austin-austin-tx/) - Retrieved 2026-01-20
  - [Entrepreneur - Alpha School Article](https://www.entrepreneur.com/business-news/alpha-school-uses-ai-teaching-offers-staff-six-figure-pay/496429) - Retrieved 2026-01-20
  - [AIFunLab - Alpha School Review](https://www.aifunlab.io/learn/alpha-school-review-75k-ai-first-pros-cons-parent-guide) - Retrieved 2026-01-20
  - [GT School Tuition PDF](https://go.alpha.school/hubfs/Alpha%20Tuition%20Documents/GT%20School%20Tuition%2024-25%20Final.pdf) - Retrieved 2026-01-20
  - [Alpha High School Admissions](https://alphahigh.school/admissions/) - Retrieved 2026-01-20
  - [Alpha School Admission Page](https://alpha.school/admission/) - Retrieved 2026-01-20
- **Source**: research/enrollment.md lines 8-29
- **Rationale**: Provides citation trail for enrollment information verification and enables readers to examine original sources

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
- **Sources**: research/enrollment.md lines 36-125 (enrollment facts), 196-223 (information gaps)
- **Verification**: Every enrollment claim must cite specific research file lines
- **Rationale**: Maintains fact traceability and prevents speculation

#### FR2.2: Alpha Reporting vs. Public Documentation Distinction
- **Requirement**: Distinguish between Alpha's published enrollment information and undisclosed details
- **Attribution Patterns**:
  - Published enrollment information: "Alpha School requires...", "according to Alpha admissions page...", "per Alpha FAQ...", "Alpha materials state..."
  - Location-specific information: "Austin campus charges...", "San Francisco location pricing..."
  - Information gaps: "acceptance rates not publicly disclosed", "specific deadlines not published", "income thresholds for aid not public"
  - Third-party sources: "per SF Standard article...", "according to Axios reporting..."
- **CRITICAL**: Never state undisclosed enrollment details (acceptance rates, aid formulas, waitlist policies) as known facts—always note gaps explicitly
- **Rationale**: Prevents LLMs from presenting incomplete information as comprehensive; maintains transparency about what is/isn't publicly available

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is not publicly available or documented
- **Gaps to Document**:
  - Specific enrollment deadlines (rolling admissions but capacity limits unknown)
  - Acceptance rates and application-to-acceptance ratios not disclosed
  - Waitlist policies and procedures not detailed
  - Refund policy specifics not found
  - Mid-year enrollment policies not public
  - Income thresholds for financial aid eligibility not published
  - Financial aid award ranges and approval rates not disclosed
  - Exact tuition for New York, Miami, Santa Barbara, Scottsdale requires campus contact
  - Shadow Day scheduling lead times not specified
  - Maximum enrollment capacity per campus not disclosed
  - Tuition payment schedule options (monthly/semester/annual) not detailed
- **Rationale**: Transparency about limitations prevents LLMs from overstating what is publicly known about enrollment process

#### FR2.4: Neutral Presentation
- **Requirement**: Document enrollment process without advocacy or critique
- **Tone Guidelines**:
  - Present enrollment requirements and process steps factually
  - Describe tuition pricing objectively without "expensive" or "affordable" labels
  - Note all-inclusive model as factual differentiator, not value judgment
  - State financial aid availability and limitations neutrally
  - Document information gaps without implying Alpha is "secretive" or "opaque"
  - Avoid comparative language ("easier than", "more rigorous than")
- **Rationale**: Reference documentation should inform families about enrollment pathway, not persuade or critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Enrollment Process"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Six Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case)
- **Rationale**: Structured data extraction for LLM fact retrieval

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels and structured narrative with INFORMATION STATUS or LIMITATION conclusion
- **Format**:
  ```markdown
  **Example Title**: Detailed scenario with specific process steps, costs, and timeline; demonstrates enrollment pathway in practice. INFORMATION STATUS: Attribution of known facts and explicit documentation of gaps or limitations.
  ```
- **Rationale**: Clear example structure with explicit information availability framing for LLM comprehension

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all enrollment information is sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify three-step enrollment process
  - Confirm Showcase → Application → Shadow Day sequence
  - Confirm $100 application fee (non-refundable)
  - Confirm $1,000 enrollment deposit (applied to tuition)
  - Confirm rolling admissions structure
  - Source lines: research/enrollment.md 36-66
  - **Success**: Enrollment process steps comprehensively documented

- [ ] **Task 1.0.2**: Verify eligibility and placement system
  - Confirm K-12 grade levels (PreK-12 at some locations)
  - Confirm level-based vs. grade-based system
  - Confirm MAP diagnostic assessment placement
  - Confirm immunization requirements
  - Source lines: research/enrollment.md 68-73
  - **Success**: Eligibility criteria and placement documented

- [ ] **Task 1.0.3**: Verify tuition structure by location
  - Confirm San Francisco $75,000/year
  - Confirm Austin $40,000/year
  - Confirm GT School $25,000/year
  - Confirm Brownsville $10,000/year
  - Confirm micro-schools ~$15,000/year
  - Confirm all-inclusive model (no additional fees)
  - Confirm sibling discount (5%)
  - Source lines: research/enrollment.md 75-99
  - **Success**: Tuition pricing by location documented

- [ ] **Task 1.0.4**: Verify financial aid and affordability
  - Confirm Clarity platform for tuition assistance
  - Confirm assistance NOT guaranteed to all applicants
  - Confirm voucher strategy (~$12,000 reducing to $300-400/month)
  - Confirm financial aid availability for 2025-2026
  - Source lines: research/enrollment.md 101-110
  - **Success**: Financial aid programs documented

- [ ] **Task 1.0.5**: Verify application requirements
  - Confirm required documentation list (allergy info, records, waivers, etc.)
  - Confirm physical exam and immunization requirements
  - Confirm contact methods (registrar@alpha.school, campus-specific)
  - Source lines: research/enrollment.md 36-66
  - **Success**: Application requirements documented

- [ ] **Task 1.0.6**: Verify information gaps
  - Confirm enrollment deadlines not disclosed
  - Confirm acceptance rates not published
  - Confirm waitlist policies not detailed
  - Confirm refund policy specifics not found
  - Confirm income thresholds for aid not public
  - Confirm tuition for some locations requires campus contact
  - Source lines: research/enrollment.md 196-223
  - **Success**: Information gaps comprehensively cataloged

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/enrollment/process.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/enrollment
  - Create file: reference/enrollment/process.md
  - Write H1: "Enrollment Process"
  - Write one-sentence definition capturing three-step process and key facts
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write paragraph 1: Three-step process, level-based placement, rolling admissions
  - Write paragraph 2: Tuition variance by location, financial aid via Clarity, voucher strategies
  - Write paragraph 3: Required documentation, post-enrollment onboarding, information gaps
  - **Success**: Overview provides comprehensive enrollment pathway context

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create 4-column table (Property | Type | Description | Example)
  - Add 10 properties: enrollment_steps, application_fee, enrollment_deposit, grade_levels_served, tuition_range, student_guide_ratio, admissions_type, financial_aid_availability, diagnostic_assessment, required_documentation
  - Populate with accurate values from research
  - **Success**: Table enables structured enrollment fact extraction

- [ ] **Task 1.1.4**: Write Details subsection - Three-Step Enrollment Process (FR1.4)
  - Document Showcase, Application, Shadow Day sequence
  - Include "Is Alpha a Fit?" tool, MAP diagnostics, coordinator meetings
  - Note rolling admissions and contact methods
  - **Success**: Enrollment process flow comprehensively documented

- [ ] **Task 1.1.5**: Write Details subsection - Eligibility and Placement System (FR1.4)
  - Document K-12 (PreK-12) grade levels
  - Explain level-based vs. grade-based system
  - Detail MAP assessment placement approach
  - Include immunization requirements
  - **Success**: Eligibility and placement clearly explained

- [ ] **Task 1.1.6**: Write Details subsection - Tuition Structure by Location (FR1.4)
  - Document tuition for each location (SF, Austin, GT, Brownsville, micro-schools)
  - Explain all-inclusive model (no additional fundraising)
  - Include sibling discount details
  - Note locations requiring campus contact for pricing
  - **Success**: Tuition structure comprehensively documented

- [ ] **Task 1.1.7**: Write Details subsection - Financial Aid and Affordability Strategies (FR1.4)
  - Document Clarity platform process
  - Note aid NOT guaranteed to all applicants
  - Explain voucher strategy with cost reduction examples
  - Document information gaps (income thresholds, award ranges)
  - **Success**: Financial aid pathways and limitations documented

- [ ] **Task 1.1.8**: Write Details subsection - Application Requirements and Timeline (FR1.4)
  - List required documentation before Shadow Day
  - Include additional requirements (physical exam, immunizations)
  - Document fees ($100 application, $1,000 deposit)
  - Note timeline gaps (acceptance decision timing, etc.)
  - **Success**: Application requirements comprehensively listed

- [ ] **Task 1.1.9**: Write Details subsection - Post-Enrollment Onboarding (FR1.4)
  - Document Dean of Parents connection
  - Explain ParentSquare platform setup
  - Include MAP results review and goal setting
  - **Success**: Onboarding process documented

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Write Example 1: Austin Campus Enrollment Journey (full process walkthrough)
  - Write Example 2: Micro-School Enrollment with Voucher Strategy (cost reduction scenario)
  - Write Example 3: Financial Aid Application Process (Clarity platform usage)
  - Include INFORMATION STATUS or LIMITATION conclusions
  - **Success**: Three concrete enrollment scenarios documented with appropriate caveats

- [ ] **Task 1.1.11**: Create related documentation links (FR1.6)
  - Link to 8 related specs (Tuition, Locations, Contact, Curriculum, etc.)
  - Use relative paths for internal links
  - **Success**: Navigation links enable LLM cross-referencing

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Write 5 Q&A pairs addressing common enrollment questions
  - Cover: enrollment steps, costs/financial aid, eligibility, documentation, level-based placement
  - **Success**: FAQs address primary enrollment questions with transparency

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

**Objective**: Ensure reference/enrollment/process.md meets all quality standards

#### Review Tasks

- [ ] **Task 1.2.1**: Primary quality check (FR2.1-FR2.4)
  - Verify all factual claims trace to research/enrollment.md with line references
  - Confirm Alpha reporting vs. gaps distinction throughout
  - Check neutral presentation (no advocacy or critique)
  - Verify information gaps explicitly documented
  - **Success**: Content meets FR2 quality standards

- [ ] **Task 1.2.2**: Fact-check enrollment process details
  - Verify three-step process accuracy (Showcase → Application → Shadow Day)
  - Confirm all fees correct ($100 application, $1,000 deposit)
  - Validate tuition amounts by location
  - Check MAP diagnostic assessment details
  - **Success**: 100% factual accuracy verified

- [ ] **Task 1.2.3**: Consistency check
  - Verify tuition amounts consistent across Overview, Details, Examples, FAQs
  - Check enrollment steps consistent throughout document
  - Validate property table matches Details subsections
  - **Success**: No internal contradictions

- [ ] **Task 1.2.4**: Template compliance check (FR1.1-FR1.9)
  - Confirm H1 → H2 → H3 hierarchy (no H4)
  - Verify all 9 FR1 sections present (Header, Overview, Properties, 6 Details, Examples, Related, FAQs, Sources, Footer)
  - Check properties table format (4 columns, 10 properties)
  - Validate 3 examples with INFORMATION STATUS conclusions
  - Verify 5 FAQs present
  - **Success**: Perfect template compliance

- [ ] **Task 1.2.5**: Neutral tone review (FR2.4)
  - Check for advocacy language removed
  - Verify no comparative judgments ("better than", "expensive")
  - Confirm information gaps stated factually without implying criticism
  - **Success**: Neutral, informative tone throughout

- [ ] **Task 1.2.6**: LLM optimization check (FR3.1-FR3.3)
  - Verify clear heading hierarchy for parsing
  - Check properties table uses snake_case naming
  - Validate example formatting with bold labels and INFORMATION STATUS conclusions
  - **Success**: Document optimized for LLM consumption

---

### Post-Implementation Tasks

- [ ] **Task 1.3.1**: Update roadmap.md
  - Change Spec 019 status from "📋 Planned" to "✅ Complete"
  - Update completion percentage (25/32 = 78.1%)
  - Update "Last Updated" timestamp
  - **Success**: Roadmap reflects Spec 019 completion

- [ ] **Task 1.3.2**: Update progress.md
  - Add Spec 019 implementation entry with date
  - Document key content covered
  - Note output file created
  - Include any notable decisions or challenges
  - **Success**: Progress log updated

- [ ] **Task 1.3.3**: Update activity.log
  - Add timestamped entry for Spec 019 implementation
  - **Success**: Activity logged

- [ ] **Task 1.3.4**: Update checklist.md
  - Change checklist status to "✅ Complete"
  - Update progress percentage to 100%
  - Update "Last Updated" timestamp
  - **Success**: Checklist marked complete

---

## Success Metrics

### Phase 1.0 Success Criteria
- All 6 validation tasks completed
- All enrollment facts traced to research/enrollment.md with line references
- Information gaps comprehensively cataloged
- No unverified claims in documentation plan

### Phase 1.1 Success Criteria
- File created: reference/enrollment/process.md
- All FR1 requirements implemented (9 sections)
- Document follows template exactly (roadmap.md lines 136-173)
- 10 properties in table, 6 Details subsections, 3 examples, 5 FAQs
- All examples include INFORMATION STATUS or LIMITATION conclusions
- Complete source citations with URLs and retrieval dates

### Phase 1.2 Success Criteria
- 100% factual accuracy verified against research file
- No internal contradictions
- Neutral tone throughout (no advocacy or critique)
- Perfect template compliance
- LLM-optimized structure (H1→H2→H3, scannable tables, clear examples)

### Post-Implementation Success Criteria
- Roadmap.md shows Spec 019 as "✅ Complete"
- Progress.md documents implementation
- Activity.log includes timestamped entry
- Checklist.md marked complete

---

## Technical Architecture

### File Structure
```
reference/
  enrollment/
    process.md          # Output file for Spec 019
    (tuition.md)        # Future Spec 020
```

### Dependencies
- **Depends On**: research/enrollment.md (Spec 001e - completed)
- **Blocks**: Spec 020 (Enrollment Tuition) - provides foundation for detailed tuition documentation
- **Related**: Specs 011, 013, 014 (Curriculum) - level-based system and assessments
- **Related**: Spec 021 (Locations) - campus-specific enrollment details

### Data Flow
1. Research file (research/enrollment.md) → Spec 019 implementation
2. Spec 019 (process.md) → Foundation for Spec 020 (tuition.md)
3. Enrollment documentation → Referenced by Guide documents (Specs 024-026)

---

## What We're NOT Doing

This spec explicitly excludes:
- **Detailed Financial Aid Analysis**: Spec 020 will cover tuition and financial aid in depth
- **Location-Specific Enrollment Variations**: Spec 021 will detail campus-specific processes
- **Enrollment Contact Information**: Spec 023 will provide comprehensive contact details
- **Curriculum Content After Enrollment**: Covered in Curriculum domain (Specs 011-014)
- **Student Outcomes Post-Enrollment**: Covered in Outcomes domain (Specs 015-018)
- **Speculation About Undisclosed Policies**: Only document publicly available enrollment information

---

## Design Decisions

### 1. Six Details Subsections
**Decision**: Organize Details section into 6 logical subsections: Three-Step Process, Eligibility and Placement, Tuition Structure, Financial Aid, Application Requirements, Post-Enrollment Onboarding
**Rationale**: Matches enrollment journey chronology (exploration → application → acceptance → enrollment → onboarding); enables families to navigate to specific stage relevant to them; aligns with research file organization (lines 36-125)
**Alternative Considered**: 5 subsections merging Application Requirements into Three-Step Process—rejected because requirements deserve standalone documentation

### 2. Tuition Range Emphasis
**Decision**: Prominently feature $10,000-$75,000 tuition range in multiple sections (Overview, Properties, Details, Examples, FAQs)
**Rationale**: Significant variance ($65,000 spread) is critical enrollment factor families need to understand; prevents sticker shock; enables families to self-select appropriate location based on budget; reflects Alpha's geographic market positioning strategy
**Alternative Considered**: Minimize tuition discussion to avoid deterring applicants—rejected because transparency serves families better than surprise

### 3. Information Gaps Documentation
**Decision**: Explicitly document undisclosed enrollment details (acceptance rates, aid formulas, waitlist policies) in Overview paragraph 3, Details subsections, and Examples
**Rationale**: Prevents LLMs from presenting incomplete information as comprehensive; manages family expectations about what Alpha publishes vs. what requires direct campus contact; maintains epistemic integrity per FR2.3
**Alternative Considered**: Only mention gaps in dedicated subsection—rejected because gaps affect multiple enrollment stages and deserve context-specific documentation

### 4. Three Example Scenarios
**Decision**: Examples illustrate (1) Standard Austin enrollment journey, (2) Voucher strategy cost reduction, (3) Financial aid application process
**Rationale**: Covers three most common enrollment pathways; demonstrates tuition variance and affordability strategies; includes INFORMATION STATUS conclusions noting gaps; balances aspirational (Stanford acceptance context from outcomes) with practical (monthly cost calculations)
**Alternative Considered**: Single comprehensive example—rejected because families need to see multiple pathways matching their situation

### 5. Rolling Admissions Prominence
**Decision**: Highlight rolling admissions (no fixed deadlines) in Overview, Details, Properties, Examples, and FAQs
**Rationale**: Differentiates Alpha from traditional private schools with set application windows; reduces enrollment stress for families; enables mid-year enrollment (though policies not detailed); critical operational fact for LLM understanding
**Alternative Considered**: Mention only in Details subsection—rejected because rolling admissions affects when families can apply and deserves prominence

### 6. Level-Based Placement Explanation
**Decision**: Dedicate entire Details subsection and FAQ to capability-based levels vs. traditional grades; include multiple examples of students working at different levels per subject
**Rationale**: Fundamental departure from traditional schooling requiring clear explanation; affects family expectations about "grade placement"; explains why 4th grade student might not be in "4th grade class"; connects to MAP diagnostic importance
**Alternative Considered**: Brief mention in Eligibility section—rejected because concept is too important and potentially confusing to treat superficially

---

## Related Specifications

- **Spec 001e**: Research Enrollment Domain (dependency - provides source data)
- **Spec 020**: Enrollment Tuition (blocked by this spec - will detail tuition and financial aid)
- **Spec 021**: Locations Overview (related - campus details for enrollment)
- **Spec 023**: Contact Overview (related - enrollment contact information)
- **Spec 011**: Curriculum Overview (related - what students learn after enrollment)
- **Spec 013**: Curriculum Grade Levels (related - level-based system details)
- **Spec 014**: Curriculum Assessments (related - MAP testing and progress tracking)
- **Spec 010**: Daily Schedule (related - enrolled student experience)
- **Spec 024**: Parent Guide (will synthesize enrollment information)

---

## References

### Research Files
- **Primary Source**: research/enrollment.md (lines 1-252)
  - Lines 36-66: Enrollment process
  - Lines 68-73: Eligibility requirements
  - Lines 75-99: Tuition/costs
  - Lines 101-110: Financial aid
  - Lines 112-125: Capacity and rolling admissions
  - Lines 196-223: Information gaps

### Template Reference
- **Documentation Template**: roadmap.md lines 136-173

### Pattern References
- **Spec 015**: Outcomes Claims (comprehensive reference doc pattern)
- **Spec 018**: Outcomes Limitations (information gaps documentation pattern)
- **Spec 010**: Daily Schedule (Model domain reference pattern)
