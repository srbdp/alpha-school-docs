# Spec 026: Media Guide

**Status**: 📋 Planned
**Priority**: Medium
**Effort**: Small (~1 hour)
**Phase**: 3 (Guides)
**Dependencies**: 002-023 (All Phase 2 reference documentation)
**Last Updated**: 2026-01-20

---

## Overview

Create a comprehensive media-focused guide that synthesizes all Alpha School reference documentation into a concise resource designed specifically for journalists, reporters, and media professionals covering Alpha School. This guide translates the API-style reference documentation into a fact-dense, quotable resource that provides accurate context, verifiable claims, and appropriate caveats for media coverage.

### Context

The Media Guide is the third and final audience-specific guide document (alongside Parent Guide and Educator Guide) that synthesizes Phase 2 reference documentation. While reference docs are structured as API-style objects optimized for LLM parsing, the media guide is a journalistic briefing document that presents information in the format reporters expect when researching stories about educational innovation.

### Architecture Position

```
[Phase 2 Reference Docs] → [Media Guide (this spec)] → [Published: guides/for-media.md]
```

This guide draws from all 7 domains of reference documentation (Organization, Model, Curriculum, Outcomes, Enrollment, Locations, Contact) and presents them in a format optimized for accurate, contextualized media reporting.

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Executive Summary Section
- **Requirement**: Opening section with key facts for quick reference
- **Content Elements**:
  - One-sentence definition of Alpha School
  - Founded date, locations, current enrollment numbers (if public)
  - Core innovation in one sentence (AI + 2-hour model)
  - Notable founder/leadership information
  - Key differentiators from traditional K-12 education
- **Format**: Bullet points for scannability
- **Rationale**: Reporters need quick facts for context and ledes

#### FR1.2: Background & Context Section
- **Requirement**: Synthesize organization domain into media context
- **Source Documents**:
  - `reference/organization/overview.md`
  - `reference/organization/mission.md`
  - `reference/organization/leadership.md`
  - `reference/organization/history.md`
- **Content Elements**:
  - Founding story and timeline
  - Mission and organizational goals
  - Leadership backgrounds (public info only)
  - Organizational structure and governance
  - Funding and business model (if public)
- **Rationale**: Media needs organizational context for credibility assessment

#### FR1.3: The Educational Model Section
- **Requirement**: Synthesize model domain with journalistic precision
- **Source Documents**:
  - `reference/model/educational-philosophy.md`
  - `reference/model/two-hour-learning.md`
  - `reference/model/ai-integration.md`
  - `reference/model/human-instruction.md`
  - `reference/model/daily-schedule.md`
- **Content Elements**:
  - The 2-hour learning model explained concisely
  - AI integration: what technology is used and how
  - Role of human educators/guides
  - Daily schedule and structure
  - Pedagogical approach and theoretical foundations
  - What makes this different from other AI-in-education initiatives
- **Rationale**: Core innovation must be explained accurately for reporting

#### FR1.4: Curriculum & Academic Standards Section
- **Requirement**: Synthesize curriculum domain with standards context
- **Source Documents**:
  - `reference/curriculum/overview.md`
  - `reference/curriculum/subjects.md`
  - `reference/curriculum/grade-levels.md`
  - `reference/curriculum/assessments.md`
- **Content Elements**:
  - Subjects and grade levels served
  - Curriculum standards alignment (Common Core, state standards, etc.)
  - Assessment and accountability measures
  - Accreditation status (if applicable)
  - How personalized learning works in practice
- **Rationale**: Academic rigor and standards compliance are key story angles

#### FR1.5: Outcomes, Evidence, & Research Section
- **Requirement**: Synthesize outcomes domain with journalistic rigor
- **Source Documents**:
  - `reference/outcomes/claims.md`
  - `reference/outcomes/evidence.md`
  - `reference/outcomes/testimonials.md`
  - `reference/outcomes/limitations.md`
- **Content Elements**:
  - Alpha School's outcome claims (verbatim or close paraphrase)
  - Available supporting evidence and data sources
  - Peer-reviewed research (if any) vs. self-reported data
  - Important caveats and limitations
  - Sample sizes, methodological notes, selection effects
  - What's not yet proven or studied
  - Context about newness of model and data availability
- **Tone**: Neutral, factual, emphasizing what is/isn't yet verified
- **Rationale**: Reporters must distinguish claims from verified evidence

#### FR1.6: Enrollment, Access, & Equity Section
- **Requirement**: Synthesize enrollment and location data with equity lens
- **Source Documents**:
  - `reference/enrollment/process.md`
  - `reference/enrollment/tuition.md`
  - `reference/locations/overview.md`
  - `reference/locations/expansion.md`
- **Content Elements**:
  - Enrollment process and eligibility requirements
  - Tuition costs and financial aid availability
  - Accessibility considerations (geographic, economic, special needs)
  - Current locations and expansion plans
  - Demographic information (if publicly available)
  - Waitlist status or enrollment demand (if public)
- **Rationale**: Access and equity are key journalistic angles

#### FR1.7: Media Contact & Resources Section
- **Requirement**: Clear media contact information and resources
- **Source Documents**:
  - `reference/contact/overview.md`
- **Content Elements**:
  - Media relations contact (name, email, phone if available)
  - General contact information
  - Press kit or media resources (if available)
  - Interview request process
  - B-roll, photos, or media assets availability
  - Social media handles for official channels
- **Rationale**: Reporters need clear pathways for follow-up

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy & Attribution
- **Requirement**: All factual claims must trace back to Phase 2 reference documentation
- **Implementation**:
  - Internal comments noting source document for each fact
  - Distinguish between Alpha's claims and independently verified facts
  - Use phrases like "According to Alpha School..." for self-reported claims
  - Note "not publicly available" or "not independently verified" where appropriate
- **Verification**: Cross-reference all claims against reference docs during implementation
- **Rationale**: Media guide must be defensibly accurate for journalistic use

#### FR2.2: Tone & Voice
- **Requirement**: Neutral, factual, journalistic tone throughout
- **Characteristics**:
  - Third-person perspective (not "you" or "we")
  - Objective, descriptive language
  - No promotional or marketing language
  - No editorial stance (neither advocacy nor skepticism)
  - Transparent about data sources and limitations
  - Clear distinction between claims and evidence
  - Professional, straightforward prose
- **Rationale**: Media professionals need neutral briefing material, not marketing

#### FR2.3: Reading Level & Style
- **Requirement**: Content appropriate for professional journalists
- **Guidelines**:
  - College-level reading comprehension
  - Educational and technical terms used precisely (not simplified)
  - Inverted pyramid structure where appropriate
  - Concrete facts over abstractions
  - Quotable phrases and statistics
  - Concise sentences and paragraphs
- **Rationale**: Reporters are professional readers; prioritize precision and density

#### FR2.4: Length & Format
- **Requirement**: Comprehensive yet concise for media professionals
- **Target Length**: 2,000-3,500 words
- **Format**:
  - Markdown with clear heading hierarchy (H2, H3)
  - Bullet points for lists and key facts
  - Tables for comparative or statistical information
  - Bold for key terms and notable facts
  - No decorative formatting (clean, professional)
- **Rationale**: Reporters need to scan efficiently and extract quotes

### FR3: Documentation Standards

#### FR3.1: Document Metadata
- **Requirement**: Standard documentation metadata in footer
- **Elements**:
  - Last updated date (YYYY-MM-DD format)
  - Last verified date (YYYY-MM-DD format)
  - Version number (1.0)
  - Contact information for media corrections/updates
- **Rationale**: Reporters need to assess document currency

#### FR3.2: Source Citations
- **Requirement**: Clear attribution to reference documentation
- **Implementation**:
  - "Sources" section at document end
  - List all 22 Phase 2 reference docs as sources
  - Use markdown links to reference docs
  - Note which claims are from Alpha School vs. external sources
- **Rationale**: Enable fact-checking and source verification

---

## Implementation Phases

### Phase 3.0: Test Foundation

**Objective**: Create verification checklist covering all Functional Requirements

This is a documentation spec, not a code spec, so "tests" are verification checklists rather than automated tests.

#### Verification Checklist Requirements

1. **Structure Verification** (FR1.1-FR1.7):
   - Verify all 7 required sections are present
   - Verify executive summary contains all key facts
   - Verify each section synthesizes correct source documents
   - Verify media contact section is complete and accurate

2. **Content Verification** (FR2.1):
   - Verify all factual claims trace to reference docs
   - Verify distinction between claims and verified evidence
   - Verify "not independently verified" noted where appropriate
   - Verify no unsourced claims present

3. **Tone Verification** (FR2.2):
   - Verify third-person perspective throughout
   - Verify neutral, non-promotional language
   - Verify no editorial stance (positive or negative)
   - Verify transparent about limitations

4. **Quality Verification** (FR2.3, FR2.4):
   - Verify appropriate reading level for journalists
   - Verify length within target range (2,000-3,500 words)
   - Verify markdown formatting is clean and professional
   - Verify facts are quotable and specific

5. **Metadata Verification** (FR3.1, FR3.2):
   - Verify footer includes last updated and last verified dates
   - Verify sources section lists all Phase 2 reference docs
   - Verify media contact information is accurate

#### Success Criteria

**Automated Verification**:
- Markdown syntax validation passes
- Internal links to reference docs are valid
- Word count within target range

**Manual Verification**:
- All FR requirements addressed in checklist
- Checklist items map clearly to FR numbers
- Verification steps are specific and actionable

---

### Phase 3.1: Implementation

**Objective**: Write the complete Media Guide document

#### Implementation Tasks

1. **Document Setup**:
   - Create `guides/for-media.md`
   - Set up document structure with all FR1 sections
   - Add metadata footer

2. **Executive Summary** (FR1.1):
   - Extract key facts from organization reference docs
   - Write one-sentence definition
   - List core differentiators as bullet points
   - Include founding date, locations, leadership

3. **Background & Context** (FR1.2):
   - Synthesize organization domain documents
   - Write founding story concisely
   - Present leadership information (public only)
   - Describe organizational structure

4. **Educational Model** (FR1.3):
   - Synthesize model domain documents
   - Explain 2-hour learning model precisely
   - Describe AI integration with technical accuracy
   - Clarify role of human educators
   - Include typical daily schedule

5. **Curriculum & Standards** (FR1.4):
   - Synthesize curriculum domain documents
   - List subjects and grade levels
   - Note standards alignment
   - Describe assessment approach
   - Note accreditation status

6. **Outcomes & Evidence** (FR1.5):
   - Synthesize outcomes domain documents with extreme care
   - Present Alpha's claims (attributed)
   - Present available evidence (with methodology notes)
   - Explicitly note limitations and caveats
   - Distinguish self-reported from independent data
   - Provide research context

7. **Enrollment & Access** (FR1.6):
   - Synthesize enrollment and locations documents
   - Present tuition and financial aid information
   - Describe enrollment process
   - Note current locations and expansion plans
   - Address accessibility and equity considerations

8. **Media Contact** (FR1.7):
   - Extract contact information from contact reference docs
   - Format for media professional use
   - Include all relevant pathways for follow-up

9. **FAQ Section** (Optional):
   - Consider including 5-8 media FAQs if space permits
   - Address common journalistic questions

10. **Sources & Metadata** (FR3.1, FR3.2):
    - Add sources section with all reference doc links
    - Add footer with dates and version
    - Add media contact for corrections

#### File Structure

```
guides/
  for-media.md           # Media guide (this spec)
```

#### Success Criteria

**Automated Verification**:
- `npm run check:markdown` (or markdown linter) passes
- All internal links resolve correctly
- Word count is 2,000-3,500 words
- Document structure matches FR1 requirements

**Manual Verification**:
- All Phase 3.0 verification checklist items pass
- Tone is neutral and journalistic throughout
- Facts are precise, quotable, and sourced
- Caveats and limitations are transparent
- No promotional language present
- Media contact information is accurate

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Third-Person Perspective
**Choice**: Use third-person perspective throughout (not "you" or "we")
**Rationale**: Aligns with journalistic conventions; maintains objectivity; suitable for media briefing format
**Impact**: Different from parent/educator guides which use second person

#### Decision 2: Claims vs. Evidence Distinction
**Choice**: Explicitly distinguish Alpha's claims from independently verified evidence
**Rationale**: Critical for journalistic accuracy; prevents misrepresentation of self-reported data as verified fact
**Impact**: Requires careful language like "Alpha School reports..." vs. "Studies show..."

#### Decision 3: No Editorial Stance
**Choice**: Neither promote nor critique Alpha School; present facts neutrally
**Rationale**: Media guide should be usable by reporters with any editorial angle
**Impact**: Avoid phrases like "innovative breakthrough" or "unproven claims"

#### Decision 4: Inverted Pyramid Structure
**Choice**: Present most important facts first in each section
**Rationale**: Matches journalistic reading patterns; supports efficient scanning
**Impact**: Each section leads with summary, then elaborates

#### Decision 5: Emphasis on Research Limitations
**Choice**: Prominently note what's not yet proven or studied
**Rationale**: Transparency about evidence gaps is crucial for responsible reporting
**Impact**: Includes explicit "Limitations" subsection in outcomes section

---

## Current State Analysis

### Existing Codebase Patterns

**Status**: All Phase 2 reference documentation (Specs 002-023) is complete

Available source documents:
- Organization domain: 4 files (overview, mission, leadership, history)
- Model domain: 5 files (philosophy, two-hour learning, AI integration, human instruction, daily schedule)
- Curriculum domain: 4 files (overview, subjects, grade levels, assessments)
- Outcomes domain: 4 files (claims, evidence, testimonials, limitations)
- Enrollment domain: 2 files (process, tuition)
- Locations domain: 2 files (overview, expansion)
- Contact domain: 1 file (overview)

**Total**: 22 reference documents available for synthesis

### Dependencies

**Prerequisites**:
- All Phase 2 reference documentation must be complete ✅
- Parent Guide (Spec 024) complete ✅
- Educator Guide (Spec 025) complete ✅

**No Runtime Dependencies**: This is a documentation spec

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Press Release Writing**: This is a backgrounder, not promotional material
2. **Interview Quotes**: No fabricated quotes; only facts from reference docs
3. **Media Training Materials**: Not about how to talk to press; just the facts
4. **Crisis Communication**: Not a PR strategy document
5. **Social Media Content**: Focused on traditional journalism
6. **Video/Multimedia Assets**: Text-only document
7. **Comparison to Other Schools**: Not a competitive analysis
8. **Editorial Opinion**: No stance on whether Alpha's approach is good/bad

### Explicit Boundaries

- **Journalist Briefing Only**: Not for parents, educators, or internal use
- **Factual Briefing**: Not marketing, not criticism—purely informational
- **Public Information Only**: No confidential or embargoed information
- **Current State**: Not speculative about future plans beyond announced expansion

---

## Success Metrics

### Phase 3.0 Completion
- [ ] Verification checklist created covering all FRs
- [ ] Checklist items map to FR numbers
- [ ] Automated verification criteria defined
- [ ] Manual verification criteria defined

### Phase 3.1 Completion
- [ ] All verification checklist items pass
- [ ] Document length is 2,000-3,500 words
- [ ] Tone is neutral and journalistic throughout
- [ ] All facts trace to reference documentation
- [ ] Claims clearly distinguished from evidence
- [ ] Limitations and caveats are transparent
- [ ] Markdown formatting is professional
- [ ] Media contact information is accurate

### Production Readiness
- [ ] Document reviewed for factual accuracy
- [ ] All internal links resolve correctly
- [ ] No promotional language present
- [ ] No unsourced claims present
- [ ] Appropriate for professional journalistic use

---

## Related Specifications

- **Spec 024**: Parent Guide (parallel Phase 3 work)
- **Spec 025**: Educator Guide (parallel Phase 3 work)
- **Specs 002-023**: All Phase 2 reference documentation (prerequisites)

---

## References

- Project Roadmap: `ralph/roadmap.md`
- Spec 024: Parent Guide (similar guide structure)
- Spec 025: Educator Guide (similar guide structure)
- All Phase 2 Reference Documentation (sources for synthesis)

---

*Last Updated: 2026-01-20*
*Spec Version: 1.0*
