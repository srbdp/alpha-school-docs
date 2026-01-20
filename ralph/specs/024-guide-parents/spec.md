# Spec 024: Parent Guide

**Status**: 📋 Planned
**Priority**: High
**Effort**: Small (~1 hour)
**Phase**: 3 (Guides)
**Dependencies**: 002-023 (All Phase 2 reference documentation)
**Last Updated**: 2026-01-20

---

## Overview

Create a comprehensive parent-focused guide that synthesizes all Alpha School reference documentation into a narrative overview designed specifically for parents researching Alpha School for their children. This guide translates the API-style reference documentation into a welcoming, informative resource that answers the key questions parents have when evaluating educational options.

### Context

The Parent Guide is one of three audience-specific guide documents (alongside Educator Guide and Media Guide) that synthesize Phase 2 reference documentation. While reference docs are structured as API-style objects optimized for LLM parsing, guides are narrative documents that present information in the natural flow parents expect when researching schools.

### Architecture Position

```
[Phase 2 Reference Docs] → [Parent Guide (this spec)] → [Published: guides/for-parents.md]
```

This guide draws from all 7 domains of reference documentation (Organization, Model, Curriculum, Outcomes, Enrollment, Locations, Contact) and weaves them into a cohesive narrative optimized for parent decision-making.

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Introduction Section
- **Requirement**: Opening section that welcomes parents and sets context
- **Content Elements**:
  - Warm, professional welcome addressing parent concerns
  - Brief overview of what Alpha School is (1-2 paragraphs)
  - Statement of purpose for this guide
  - Navigation guidance for the document
- **Tone**: Professional yet warm, acknowledging the weight of educational decisions
- **Rationale**: Parents need context before diving into details

#### FR1.2: Educational Philosophy & Model Section
- **Requirement**: Synthesize model domain reference docs into parent-friendly narrative
- **Source Documents**:
  - `reference/model/educational-philosophy.md`
  - `reference/model/two-hour-learning.md`
  - `reference/model/ai-integration.md`
  - `reference/model/human-instruction.md`
  - `reference/model/daily-schedule.md`
- **Content Elements**:
  - What makes Alpha School different from traditional schools
  - Explanation of the 2-hour learning model in practical terms
  - How AI is used (with parent-appropriate detail level)
  - Role of human teachers/guides
  - What a typical day looks like for students
- **Rationale**: Parents' first question is "What is this school's approach?"

#### FR1.3: Curriculum & Grade Levels Section
- **Requirement**: Synthesize curriculum domain into parent-friendly overview
- **Source Documents**:
  - `reference/curriculum/overview.md`
  - `reference/curriculum/subjects.md`
  - `reference/curriculum/grade-levels.md`
  - `reference/curriculum/assessments.md`
- **Content Elements**:
  - What subjects are taught
  - How content is structured by grade/age
  - How learning is personalized
  - How progress is measured and reported
  - Alignment with standards (if applicable)
- **Rationale**: Parents need to understand academic rigor and scope

#### FR1.4: Outcomes & Evidence Section
- **Requirement**: Synthesize outcomes domain with appropriate caveats for parents
- **Source Documents**:
  - `reference/outcomes/claims.md`
  - `reference/outcomes/evidence.md`
  - `reference/outcomes/testimonials.md`
  - `reference/outcomes/limitations.md`
- **Content Elements**:
  - What Alpha School claims about student outcomes
  - Supporting evidence and data (with honest caveats)
  - Parent and student testimonials
  - Transparent discussion of what's not yet proven
  - Appropriate context about newness of model
- **Rationale**: Parents need realistic expectations grounded in evidence

#### FR1.5: Practical Information Section
- **Requirement**: Synthesize enrollment and location information for action
- **Source Documents**:
  - `reference/enrollment/process.md`
  - `reference/enrollment/tuition.md`
  - `reference/locations/overview.md`
  - `reference/locations/expansion.md`
- **Content Elements**:
  - How to enroll (step-by-step process)
  - Tuition, fees, and financial aid information
  - Current locations and campus details
  - Announced expansion plans
  - Eligibility requirements
- **Rationale**: Parents need actionable next steps

#### FR1.6: FAQ Section
- **Requirement**: Address most common parent questions directly
- **Content Elements**:
  - 8-12 most common parent questions synthesized from reference docs
  - Questions should cover: model, safety, socialization, college prep, special needs, technology concerns
  - Answers should reference relevant sections for deeper detail
  - Honest, direct answers (including "We don't know yet" where appropriate)
- **Rationale**: Parents have predictable questions; FAQs improve scannability

#### FR1.7: Next Steps Section
- **Requirement**: Clear call-to-action for interested parents
- **Source Documents**:
  - `reference/contact/overview.md`
  - `reference/enrollment/process.md`
- **Content Elements**:
  - How to schedule a tour/visit
  - Enrollment inquiry process
  - Contact information for questions
  - Links to additional resources
  - Timeline expectations
- **Rationale**: Convert interest into action with clear next steps

### FR2: Content Quality Standards

#### FR2.1: Source Attribution
- **Requirement**: All factual claims must trace back to Phase 2 reference documentation
- **Implementation**: Internal comments noting source document for each section
- **Verification**: Cross-reference all claims against reference docs during Phase 3.1
- **Rationale**: Maintain accuracy and enable updates when reference docs change

#### FR2.2: Tone & Voice
- **Requirement**: Professional, warm, and honest tone throughout
- **Characteristics**:
  - Address readers as "you" (second person)
  - Use clear, jargon-free language
  - Acknowledge parent concerns directly
  - Be honest about what's new/unproven
  - Avoid marketing hyperbole
  - Balance enthusiasm with realistic expectations
- **Rationale**: Parents trust authentic, honest communication

#### FR2.3: Reading Level
- **Requirement**: Content should be accessible to general audience
- **Target**: 8th-10th grade reading level
- **Guidelines**:
  - Define educational jargon when first used
  - Use concrete examples
  - Break up long paragraphs
  - Use headers and bullet points for scannability
- **Rationale**: Accessibility and inclusivity

#### FR2.4: Length & Format
- **Requirement**: Comprehensive yet scannable document
- **Target Length**: 2,000-3,000 words
- **Format**:
  - Markdown with clear heading hierarchy
  - Bullet points for lists
  - Bold for key terms and concepts
  - Blockquotes for testimonials
  - Tables for comparison data (if applicable)
- **Rationale**: Balance depth with readability

### FR3: Metadata & Maintenance

#### FR3.1: Document Metadata
- **Requirement**: Include standard metadata footer
- **Content**:
  - Last updated date (YYYY-MM-DD)
  - Last verified date (YYYY-MM-DD)
  - Version number (start at 1.0)
  - Link to parent feedback form (if available)
- **Rationale**: Transparency about currency of information

#### FR3.2: Source Citations
- **Requirement**: Include sources section with all reference doc dependencies
- **Format**: Markdown links to reference documentation files
- **Content**: List all Phase 2 reference docs used as sources
- **Rationale**: Enable traceability and updates

---

## Implementation Phases

### Phase 3.0: Content Planning & Structure

**Objective**: Create document outline and plan content synthesis approach

#### Tasks

1. **Review All Source Material**:
   - Read all 22 Phase 2 reference documents
   - Identify key parent-relevant information in each
   - Note gaps or areas needing clarification
   - Extract potential FAQ topics

2. **Create Detailed Outline**:
   - Map reference doc content to guide sections
   - Plan narrative flow and transitions
   - Identify testimonials and examples to include
   - Plan FAQ questions and sourcing

3. **Define Content Strategy**:
   - Determine appropriate detail level for each topic
   - Plan how to handle caveats and limitations
   - Decide on example selection criteria
   - Establish tone guidelines

#### Success Criteria

- Complete outline with section-by-section content plan
- Source mapping document showing which reference docs inform each section
- FAQ question list (8-12 questions)
- Clear understanding of target length and detail level

---

### Phase 3.1: Content Writing

**Objective**: Write comprehensive parent guide following outline and FR specifications

#### Tasks

1. **Write Introduction** (FR1.1):
   - Craft welcoming opening
   - Set context about Alpha School
   - Explain guide purpose and structure

2. **Write Educational Model Section** (FR1.2):
   - Synthesize 5 model reference docs
   - Explain 2-hour learning model for parents
   - Describe AI integration in accessible terms
   - Present daily schedule narrative
   - Include concrete examples

3. **Write Curriculum Section** (FR1.3):
   - Synthesize 4 curriculum reference docs
   - Present subjects and grade levels
   - Explain personalization and assessments
   - Address standards alignment

4. **Write Outcomes Section** (FR1.4):
   - Synthesize 4 outcomes reference docs
   - Present claims with appropriate caveats
   - Include testimonials
   - Be transparent about limitations

5. **Write Practical Information Section** (FR1.5):
   - Synthesize enrollment and location docs
   - Present enrollment process step-by-step
   - Include tuition and financial aid info
   - Detail locations and expansion

6. **Write FAQ Section** (FR1.6):
   - Address 8-12 common parent questions
   - Cross-reference to relevant sections
   - Be honest and direct

7. **Write Next Steps Section** (FR1.7):
   - Create clear call-to-action
   - Include contact information
   - Set timeline expectations

8. **Add Metadata & Citations** (FR3.1, FR3.2):
   - Add document metadata footer
   - Create sources section with reference doc links
   - Add internal source comments

#### File Structure

```
alpha-school-docs/
  guides/
    for-parents.md          # Parent guide (this spec)
```

#### Success Criteria

**Automated Verification**:
- Markdown lints successfully
- All internal links resolve correctly
- Document length is 2,000-3,000 words
- Reading level check passes (8th-10th grade)

**Manual Verification**:
- All FR requirements addressed
- Tone is professional, warm, and honest
- Content traces back to reference docs
- FAQs address likely parent questions
- Document flows narratively (not like API docs)
- Caveats are appropriate and honest
- Call-to-action is clear and actionable

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Narrative vs. Reference Structure
**Choice**: Use narrative guide structure, not API-style reference format
**Rationale**: Parents expect story-like flow when researching schools; guides synthesize rather than document
**Impact**: Different structure than Phase 2 docs, optimized for human readability first

#### Decision 2: Parent-Specific Perspective
**Choice**: Write explicitly for parent audience with their concerns in mind
**Rationale**: Distinct needs from educators or media; parents care about day-to-day experience, safety, outcomes for their child
**Impact**: Content selection and framing differs from other guides

#### Decision 3: Honest Caveats
**Choice**: Include transparent discussion of what's unproven or unknown
**Rationale**: Builds trust; Alpha School is new and evidence is limited; parents appreciate honesty
**Impact**: Outcomes section includes limitations subsection; tone is enthusiastic but realistic

#### Decision 4: Action-Oriented Conclusion
**Choice**: End with clear next steps and contact information
**Rationale**: Convert interested readers into enrolling families
**Impact**: Practical information and next steps are prominent

---

## Current State Analysis

### Existing Codebase Patterns

**Status**: Reference documentation complete (Phase 2)

Available source material:
- 4 Organization domain reference docs (002-005)
- 5 Model domain reference docs (006-010)
- 4 Curriculum domain reference docs (011-014)
- 4 Outcomes domain reference docs (015-018)
- 2 Enrollment domain reference docs (019-020)
- 2 Locations domain reference docs (021-022)
- 1 Contact domain reference doc (023)

All reference docs follow API-style template with Properties, Details, Examples, FAQs, and Sources sections.

### Dependencies

**Completion Dependencies**:
- All Phase 2 reference documentation must be complete and accurate
- Research phase (Phase 1) must be complete for source citations

**No Runtime Dependencies**: This is a documentation task, not code implementation

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Educator Guide**: Separate spec (025)
2. **Media Guide**: Separate spec (026)
3. **Interactive Content**: No forms, calculators, or dynamic elements
4. **Non-Public Information**: Only synthesize from public sources documented in Phase 2
5. **Marketing Copy**: This is informational documentation, not marketing collateral
6. **Comparison Tables**: No competitive comparisons (insufficient public data)
7. **Multi-Language Versions**: English only for v1
8. **Enrollment Application**: Link to process, don't recreate it

### Explicit Boundaries

- **Parent Audience Only**: Content and framing optimized for parents, not students or educators
- **Synthesis Only**: All content must trace to existing reference docs; no new research
- **Informational Purpose**: Goal is understanding, not persuasion (though honest information may be persuasive)
- **Public Information Only**: Respect scope established in Phase 1 research

---

## Success Metrics

### Phase 3.0 Completion
- [ ] All 22 Phase 2 reference docs reviewed
- [ ] Detailed outline created with source mapping
- [ ] FAQ questions identified (8-12)
- [ ] Content strategy documented

### Phase 3.1 Completion
- [ ] Complete parent guide written (2,000-3,000 words)
- [ ] All 7 sections (FR1.1-FR1.7) included
- [ ] Tone is professional, warm, and honest
- [ ] Reading level is accessible (8th-10th grade)
- [ ] All content traces to reference docs
- [ ] Metadata and sources included
- [ ] Markdown validation passes
- [ ] Manual review confirms quality

### Production Readiness
- [ ] Parent feedback survey mechanism identified (optional)
- [ ] Document published to `alpha-school-docs/guides/for-parents.md`
- [ ] Internal review by Alpha School stakeholder (if applicable)
- [ ] Accessible via standard LLM crawlers

---

## Related Specifications

- **Spec 001a-001g**: Research phase (all domains) - provides source material
- **Spec 002-023**: Phase 2 reference documentation - direct content sources
- **Spec 025**: Educator Guide (parallel Phase 3 work)
- **Spec 026**: Media Guide (parallel Phase 3 work)

---

## References

- Alpha School website: https://alpha.school
- All Phase 2 reference documentation (see Sources section when implemented)
- PRD Section 4 (Users & Use Cases) - Parent use cases UC-1, UC-5
- Plain language guidelines: https://www.plainlanguage.gov/guidelines/

---

*Spec version: 1.0*
*Created: 2026-01-20*
