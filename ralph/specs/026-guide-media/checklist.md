# Implementation Checklist: Spec 026 - Media Guide

**Spec**: 026-guide-media
**Status**: 📋 Planned
**Current Phase**: Not Started
**Progress**: 0% (0/25 tasks)
**Last Updated**: 2026-01-20

---

## Phase 3.0: Test Foundation (Verification Checklist)

**Status**: Not Started
**Objective**: Create comprehensive verification checklist covering all Functional Requirements
**Progress**: 0/10 tasks completed

### Setup

- [ ] **Task 3.0.1**: Create verification checklist structure
  - Set up this checklist document
  - Define automated verification criteria
  - Define manual verification criteria
  - **FR**: All FRs
  - **Files**: `ralph/specs/026-guide-media/checklist.md`

### Structure Verification (FR1.1-FR1.7)

- [ ] **Task 3.0.2**: Verify document structure completeness
  - Check: Executive Summary section exists (FR1.1)
  - Check: Background & Context section exists (FR1.2)
  - Check: The Educational Model section exists (FR1.3)
  - Check: Curriculum & Academic Standards section exists (FR1.4)
  - Check: Outcomes, Evidence, & Research section exists (FR1.5)
  - Check: Enrollment, Access, & Equity section exists (FR1.6)
  - Check: Media Contact & Resources section exists (FR1.7)
  - **FR**: FR1.1-FR1.7 - Document Structure
  - **Verification**: Manual inspection

- [ ] **Task 3.0.3**: Verify Executive Summary content
  - Check: One-sentence definition present
  - Check: Founding date, locations, enrollment included
  - Check: Core innovation explained in one sentence
  - Check: Leadership information present
  - Check: Key differentiators listed
  - Check: Formatted as scannable bullet points
  - **FR**: FR1.1 - Executive Summary Section
  - **Verification**: Manual inspection

- [ ] **Task 3.0.4**: Verify source document synthesis
  - Check: FR1.2 synthesizes all 4 organization docs
  - Check: FR1.3 synthesizes all 5 model docs
  - Check: FR1.4 synthesizes all 4 curriculum docs
  - Check: FR1.5 synthesizes all 4 outcomes docs
  - Check: FR1.6 synthesizes enrollment + locations docs (4 total)
  - Check: FR1.7 synthesizes contact doc (1)
  - **FR**: FR1.2-FR1.7 - Source Documents
  - **Verification**: Cross-reference against reference docs

### Content Verification (FR2.1)

- [ ] **Task 3.0.5**: Verify factual accuracy and attribution
  - Check: All factual claims trace to reference docs
  - Check: Alpha's claims clearly attributed ("According to Alpha School...")
  - Check: Independent verification status noted where applicable
  - Check: "Not publicly available" noted where appropriate
  - Check: "Not independently verified" noted for self-reported data
  - Check: No unsourced claims present
  - **FR**: FR2.1 - Factual Accuracy & Attribution
  - **Verification**: Manual fact-checking against reference docs

- [ ] **Task 3.0.6**: Verify claims vs. evidence distinction
  - Check: Alpha's outcome claims clearly identified as claims
  - Check: Supporting evidence presented separately from claims
  - Check: Research methodology noted for evidence
  - Check: Sample sizes and limitations mentioned
  - Check: Peer-reviewed vs. self-reported data distinguished
  - Check: "What's not yet proven" explicitly stated
  - **FR**: FR2.1 (Outcomes Section) - Claims vs. Evidence
  - **Verification**: Manual inspection of outcomes section

### Tone Verification (FR2.2)

- [ ] **Task 3.0.7**: Verify journalistic tone and voice
  - Check: Third-person perspective throughout (no "you" or "we")
  - Check: Objective, descriptive language used
  - Check: No promotional or marketing language
  - Check: No editorial stance (neither advocacy nor skepticism)
  - Check: Transparent about data sources and limitations
  - Check: Professional, straightforward prose
  - Check: Quotable phrases and concrete facts prioritized
  - **FR**: FR2.2 - Tone & Voice
  - **Verification**: Manual reading for tone

### Quality Verification (FR2.3, FR2.4)

- [ ] **Task 3.0.8**: Verify reading level and style
  - Check: College-level reading comprehension
  - Check: Technical terms used precisely (not oversimplified)
  - Check: Inverted pyramid structure where appropriate
  - Check: Concrete facts prioritized over abstractions
  - Check: Sentences and paragraphs are concise
  - Check: Content is quotable for journalists
  - **FR**: FR2.3 - Reading Level & Style
  - **Verification**: Manual reading assessment

- [ ] **Task 3.0.9**: Verify length and formatting
  - Check: Word count is 2,000-3,500 words
  - Check: Markdown heading hierarchy is clear (H2, H3)
  - Check: Bullet points used for lists and key facts
  - Check: Tables used for comparative/statistical info (if applicable)
  - Check: Bold used for key terms and notable facts
  - Check: No decorative formatting (clean, professional)
  - **FR**: FR2.4 - Length & Format
  - **Verification**: Automated word count + manual formatting check

### Metadata Verification (FR3.1, FR3.2)

- [ ] **Task 3.0.10**: Verify documentation standards
  - Check: Footer includes last updated date (YYYY-MM-DD)
  - Check: Footer includes last verified date (YYYY-MM-DD)
  - Check: Footer includes version number (1.0)
  - Check: Footer includes media contact for corrections/updates
  - Check: Sources section lists all 22 Phase 2 reference docs
  - Check: Sources use markdown links to reference docs
  - Check: Sources distinguish Alpha claims from external sources
  - **FR**: FR3.1, FR3.2 - Document Metadata & Source Citations
  - **Verification**: Manual inspection of footer and sources

---

## Phase 3.1: Implementation

**Status**: Not Started
**Objective**: Write the complete Media Guide document
**Progress**: 0/15 tasks completed

### Document Setup

- [ ] **Task 3.1.1**: Create file and structure
  - Create `guides/for-media.md`
  - Set up H1 title: "# Media Guide: Alpha School"
  - Create all 7 main sections with H2 headings (FR1.1-FR1.7)
  - Add metadata footer template
  - **FR**: Project Setup
  - **Files**: `guides/for-media.md`

### Executive Summary (FR1.1)

- [ ] **Task 3.1.2**: Write Executive Summary section
  - Extract and synthesize key facts from `reference/organization/overview.md`
  - Write one-sentence definition of Alpha School
  - List founding date, locations, enrollment (from `reference/organization/history.md`, `reference/locations/overview.md`)
  - Summarize core innovation in one sentence (from `reference/model/two-hour-learning.md`, `reference/model/ai-integration.md`)
  - Include notable leadership information (from `reference/organization/leadership.md`)
  - List key differentiators as bullet points
  - Format for quick scanning
  - **FR**: FR1.1 - Executive Summary Section
  - **Files**: `guides/for-media.md`

### Background & Context (FR1.2)

- [ ] **Task 3.1.3**: Write Background & Context section
  - Synthesize `reference/organization/overview.md` for organizational context
  - Synthesize `reference/organization/mission.md` for mission and goals
  - Synthesize `reference/organization/leadership.md` for founder/leadership backgrounds (public info only)
  - Synthesize `reference/organization/history.md` for founding story and timeline
  - Include organizational structure and governance (if public)
  - Note funding and business model (if public)
  - Use neutral, journalistic tone
  - **FR**: FR1.2 - Background & Context Section
  - **Files**: `guides/for-media.md`

### The Educational Model (FR1.3)

- [ ] **Task 3.1.4**: Write The Educational Model section
  - Synthesize `reference/model/educational-philosophy.md` for pedagogical approach
  - Synthesize `reference/model/two-hour-learning.md` for core model explanation
  - Synthesize `reference/model/ai-integration.md` for AI technology and usage
  - Synthesize `reference/model/human-instruction.md` for educator roles
  - Synthesize `reference/model/daily-schedule.md` for typical day structure
  - Explain what differentiates this from other AI-in-education initiatives
  - Use precise, technical language suitable for journalists
  - **FR**: FR1.3 - The Educational Model Section
  - **Files**: `guides/for-media.md`

### Curriculum & Academic Standards (FR1.4)

- [ ] **Task 3.1.5**: Write Curriculum & Academic Standards section
  - Synthesize `reference/curriculum/overview.md` for curriculum approach
  - Synthesize `reference/curriculum/subjects.md` for subjects and grade levels served
  - Synthesize `reference/curriculum/grade-levels.md` for grade structure
  - Synthesize `reference/curriculum/assessments.md` for assessment approach
  - Note standards alignment (Common Core, state standards, etc.)
  - Note accreditation status (if applicable)
  - Describe personalized learning in practice
  - **FR**: FR1.4 - Curriculum & Academic Standards Section
  - **Files**: `guides/for-media.md`

### Outcomes, Evidence, & Research (FR1.5)

- [ ] **Task 3.1.6**: Write Outcomes, Evidence, & Research section - CRITICAL
  - Synthesize `reference/outcomes/claims.md` for Alpha's outcome claims (clearly attributed)
  - Synthesize `reference/outcomes/evidence.md` for available supporting evidence
  - Synthesize `reference/outcomes/testimonials.md` for testimonial data (if included)
  - Synthesize `reference/outcomes/limitations.md` for research caveats
  - **CRITICAL**: Distinguish Alpha's claims from verified evidence
  - Note whether evidence is peer-reviewed or self-reported
  - Include sample sizes, methodological notes, selection effects
  - Explicitly state what's not yet proven or studied
  - Use phrases like "According to Alpha School..." for self-reported claims
  - Use neutral, factual tone (no promotional language)
  - Provide research context about newness of model
  - **FR**: FR1.5 - Outcomes, Evidence, & Research Section
  - **Files**: `guides/for-media.md`

### Enrollment, Access, & Equity (FR1.6)

- [ ] **Task 3.1.7**: Write Enrollment, Access, & Equity section
  - Synthesize `reference/enrollment/process.md` for enrollment process and eligibility
  - Synthesize `reference/enrollment/tuition.md` for tuition costs and financial aid
  - Synthesize `reference/locations/overview.md` for current locations
  - Synthesize `reference/locations/expansion.md` for expansion plans
  - Address accessibility considerations (geographic, economic, special needs)
  - Include demographic information (if publicly available)
  - Note waitlist status or enrollment demand (if public)
  - Consider equity angles relevant to journalists
  - **FR**: FR1.6 - Enrollment, Access, & Equity Section
  - **Files**: `guides/for-media.md`

### Media Contact & Resources (FR1.7)

- [ ] **Task 3.1.8**: Write Media Contact & Resources section
  - Synthesize `reference/contact/overview.md` for contact information
  - List media relations contact (name, email, phone if available)
  - List general contact information
  - Note press kit or media resources availability (if applicable)
  - Describe interview request process
  - Note B-roll, photos, or media assets availability (if applicable)
  - Include official social media handles
  - Format for easy scanning by reporters
  - **FR**: FR1.7 - Media Contact & Resources Section
  - **Files**: `guides/for-media.md`

### Optional FAQ Section

- [ ] **Task 3.1.9**: Consider adding media FAQ section (optional)
  - Decide if FAQ section would be valuable (5-8 questions)
  - If yes, draft common journalistic questions:
    - How does Alpha School define "learning outcomes"?
    - What research methodologies are used to measure outcomes?
    - How does Alpha School address concerns about screen time?
    - What happens if the AI model makes an error?
    - How are teachers trained to work with AI?
    - What data privacy protections are in place?
  - Keep answers brief, factual, and sourced from reference docs
  - **FR**: Optional enhancement
  - **Files**: `guides/for-media.md`

### Sources & Metadata (FR3.1, FR3.2)

- [ ] **Task 3.1.10**: Add Sources section
  - Create "Sources" section at document end
  - List all 22 Phase 2 reference docs as sources:
    - 4 organization docs
    - 5 model docs
    - 4 curriculum docs
    - 4 outcomes docs
    - 2 enrollment docs
    - 2 locations docs
    - 1 contact doc
  - Use markdown links: `- [Document Title](relative/path/to/doc.md)`
  - Note which claims are from Alpha School vs. external sources (if applicable)
  - **FR**: FR3.2 - Source Citations
  - **Files**: `guides/for-media.md`

- [ ] **Task 3.1.11**: Add metadata footer
  - Add horizontal rule before footer
  - Add last updated date: `*Last updated: 2026-01-20*`
  - Add last verified date: `*Last verified: 2026-01-20*`
  - Add version number: `*Version: 1.0*`
  - Add media contact for corrections: `*For corrections or updates: [contact info]*`
  - **FR**: FR3.1 - Document Metadata
  - **Files**: `guides/for-media.md`

### Quality Assurance

- [ ] **Task 3.1.12**: Review for tone and accuracy
  - Read entire document for tone consistency
  - Verify third-person perspective throughout
  - Check for any promotional language (remove if found)
  - Check for any editorial stance (remove if found)
  - Verify all facts are attributed to sources
  - Verify claims vs. evidence distinction is clear
  - **FR**: FR2.1, FR2.2 - Factual Accuracy & Tone
  - **Files**: `guides/for-media.md`

- [ ] **Task 3.1.13**: Check formatting and length
  - Run word count (target: 2,000-3,500 words)
  - Verify markdown heading hierarchy (H2, H3)
  - Verify bullet points used appropriately
  - Verify bold used for key terms
  - Check that formatting is clean and professional
  - Validate all internal links
  - **FR**: FR2.4 - Length & Format
  - **Files**: `guides/for-media.md`

### Verification

- [ ] **Task 3.1.14**: Run Phase 3.0 verification checklist
  - Complete all Phase 3.0 verification tasks (3.0.1-3.0.10)
  - Document any issues found
  - Fix issues before proceeding
  - **Success Criteria**: All Phase 3.0 checks pass
  - **Files**: `ralph/specs/026-guide-media/checklist.md`

- [ ] **Task 3.1.15**: Final review and approval
  - Read document as a journalist would
  - Verify it's suitable for media briefing use
  - Verify no promotional language present
  - Verify transparency about limitations
  - Verify media contact information is accurate
  - Mark spec as complete
  - **Success Criteria**: Document ready for production
  - **Files**: `guides/for-media.md`

---

## Automated Verification Criteria

### Markdown Validation
- [ ] Markdown syntax is valid (no parsing errors)
- [ ] All internal links resolve correctly
- [ ] Heading hierarchy is logical (no skipped levels)

### Content Validation
- [ ] Word count is between 2,000 and 3,500 words
- [ ] All 7 required sections (FR1.1-FR1.7) are present
- [ ] Sources section lists all 22 Phase 2 reference docs
- [ ] Footer includes last updated, last verified, version, contact

---

## Manual Verification Criteria

### Factual Accuracy (FR2.1)
- [ ] All factual claims trace back to Phase 2 reference documentation
- [ ] Alpha's claims are clearly attributed ("According to Alpha School...")
- [ ] Independent verification status is noted where applicable
- [ ] "Not publicly available" or "not independently verified" noted where appropriate
- [ ] No unsourced claims present

### Tone & Voice (FR2.2)
- [ ] Third-person perspective used throughout (no "you" or "we")
- [ ] Objective, descriptive language (no promotional or marketing language)
- [ ] No editorial stance (neither advocacy nor skepticism)
- [ ] Transparent about data sources and limitations
- [ ] Professional, straightforward prose

### Outcomes Section (FR1.5) - CRITICAL
- [ ] Alpha's outcome claims clearly identified as claims (not stated as fact)
- [ ] Supporting evidence presented separately from claims
- [ ] Research methodology noted for evidence
- [ ] Sample sizes and limitations mentioned
- [ ] Peer-reviewed vs. self-reported data distinguished
- [ ] "What's not yet proven" explicitly stated
- [ ] Neutral, factual tone maintained

### Reading Level & Style (FR2.3)
- [ ] Appropriate for college-educated professional journalists
- [ ] Technical terms used precisely (not oversimplified)
- [ ] Inverted pyramid structure where appropriate
- [ ] Concrete facts prioritized over abstractions
- [ ] Sentences and paragraphs are concise
- [ ] Content is quotable for journalists

### Format (FR2.4)
- [ ] Markdown heading hierarchy is clear (H2, H3)
- [ ] Bullet points used for lists and key facts
- [ ] Tables used for comparative/statistical info (if applicable)
- [ ] Bold used for key terms and notable facts
- [ ] Clean, professional formatting (no decorative elements)

---

## Current Status Summary

**Phase**: Not Started
**Progress**: 0% complete (0/25 tasks)
**Blockers**: None (all Phase 2 reference docs complete)
**Next Task**: Task 3.0.1 - Create verification checklist structure (this document completes that task)

---

## Session Recovery Context

**Last Working On**: Creating this checklist (Spec 026 planning)
**File Paths**:
- Spec file: `ralph/specs/026-guide-media/spec.md`
- Checklist file: `ralph/specs/026-guide-media/checklist.md`
- Output file: `guides/for-media.md` (not yet created)

**Next Steps**:
1. Update roadmap.md to reflect Spec 026 status
2. Log activity in activity.log
3. Update progress.md
4. Commit spec creation
5. Begin Phase 3.1 implementation (create guides/for-media.md)

---

## Notes and Decisions

### Key Implementation Decisions

**Decision 1: Third-Person Perspective**
- Use third-person throughout (different from parent/educator guides)
- Rationale: Aligns with journalistic conventions and maintains objectivity

**Decision 2: Claims vs. Evidence Distinction**
- Explicitly distinguish Alpha's claims from independently verified evidence
- Use phrases like "According to Alpha School..." for self-reported data
- Rationale: Critical for journalistic accuracy

**Decision 3: Emphasis on Limitations**
- Prominently note what's not yet proven or studied
- Include explicit "Limitations" discussion in outcomes section
- Rationale: Transparency about evidence gaps is crucial for responsible reporting

**Decision 4: No Editorial Stance**
- Neither promote nor critique Alpha School
- Present facts neutrally
- Rationale: Media guide should be usable by reporters with any editorial angle

**Decision 5: Optional FAQ Section**
- Consider including 5-8 media FAQs if space permits and it adds value
- Defer decision to implementation phase (Task 3.1.9)

### Success Criteria Summary

**This spec is complete when:**
- [ ] All 25 tasks completed (10 verification + 15 implementation)
- [ ] Document length is 2,000-3,500 words
- [ ] All Phase 3.0 verification checks pass
- [ ] Tone is neutral and journalistic throughout
- [ ] All facts trace to reference documentation
- [ ] Claims clearly distinguished from evidence
- [ ] Limitations and caveats are transparent
- [ ] Markdown formatting is professional
- [ ] Media contact information is accurate

---

**Checklist last updated**: 2026-01-20
**Spec version**: 1.0
