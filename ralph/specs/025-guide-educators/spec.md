# Spec 025: Educator Guide

**Status**: 📋 Planned
**Priority**: Medium
**Effort**: Small (~1 hour)
**Phase**: 3 (Guides)
**Dependencies**: 002-023 (All Phase 2 reference documentation)
**Last Updated**: 2026-01-20

---

## Overview

Create a comprehensive educator-focused guide that synthesizes all Alpha School reference documentation into a narrative overview designed specifically for education professionals researching Alpha School's pedagogical approach, curriculum design, and outcomes. This guide translates the API-style reference documentation into a professional resource that addresses the questions and concerns educators, administrators, and education researchers have when evaluating innovative education models.

### Context

The Educator Guide is one of three audience-specific guide documents (alongside Parent Guide and Media Guide) that synthesize Phase 2 reference documentation. While reference docs are structured as API-style objects optimized for LLM parsing, guides are narrative documents that present information in the flow educators expect when researching educational innovations.

### Architecture Position

```
[Phase 2 Reference Docs] → [Educator Guide (this spec)] → [Published: guides/for-educators.md]
```

This guide draws from all 7 domains of reference documentation (Organization, Model, Curriculum, Outcomes, Enrollment, Locations, Contact) and weaves them into a cohesive narrative optimized for professional educational evaluation.

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Introduction Section
- **Requirement**: Opening section that establishes professional context
- **Content Elements**:
  - Professional greeting acknowledging educator expertise
  - Brief overview of Alpha School's educational innovation (1-2 paragraphs)
  - Statement of purpose for this guide
  - Navigation guidance for the document
- **Tone**: Professional, collegial, research-informed
- **Rationale**: Educators need immediate sense of pedagogical credibility

#### FR1.2: Educational Model & Philosophy Section
- **Requirement**: Synthesize model domain reference docs with pedagogical depth
- **Source Documents**:
  - `reference/model/educational-philosophy.md`
  - `reference/model/two-hour-learning.md`
  - `reference/model/ai-integration.md`
  - `reference/model/human-instruction.md`
  - `reference/model/daily-schedule.md`
- **Content Elements**:
  - Theoretical foundations and pedagogical influences
  - 2-hour learning model with research context
  - AI integration from pedagogical perspective
  - Human instructional design and teacher role
  - Daily schedule with learning science rationale
  - Differentiation and personalization strategies
- **Rationale**: Educators evaluate models through pedagogical lens

#### FR1.3: Curriculum Design & Implementation Section
- **Requirement**: Synthesize curriculum domain with instructional design focus
- **Source Documents**:
  - `reference/curriculum/overview.md`
  - `reference/curriculum/subjects.md`
  - `reference/curriculum/grade-levels.md`
  - `reference/curriculum/assessments.md`
- **Content Elements**:
  - Curriculum philosophy and design principles
  - Subject scope, sequence, and standards alignment
  - Vertical articulation across grade levels
  - Assessment design and formative feedback systems
  - Curriculum adaptation and personalization mechanisms
- **Rationale**: Educators need to understand instructional coherence

#### FR1.4: Outcomes, Evidence & Research Section
- **Requirement**: Synthesize outcomes domain with research rigor
- **Source Documents**:
  - `reference/outcomes/claims.md`
  - `reference/outcomes/evidence.md`
  - `reference/outcomes/testimonials.md`
  - `reference/outcomes/limitations.md`
- **Content Elements**:
  - Learning outcome claims with explicit methodology
  - Evidence base with sample sizes and measurement details
  - Student and educator testimonials (qualitative data)
  - Research limitations and gaps (honest methodological caveats)
  - Comparison to traditional education where data exists
  - Areas needing further study
- **Rationale**: Educators require evidence-based evaluation framework

#### FR1.5: Organizational Structure & Operations Section
- **Requirement**: Synthesize organization, locations, and enrollment information
- **Source Documents**:
  - `reference/organization/overview.md`
  - `reference/organization/mission.md`
  - `reference/organization/leadership.md`
  - `reference/organization/history.md`
  - `reference/locations/overview.md`
  - `reference/locations/expansion.md`
  - `reference/enrollment/process.md`
  - `reference/enrollment/tuition.md`
- **Content Elements**:
  - Organizational mission and founding story
  - Leadership expertise and background
  - Current locations and facilities
  - Enrollment model and accessibility
  - Growth plans and sustainability
- **Rationale**: Educators evaluate organizational viability and values alignment

#### FR1.6: Professional Questions Section
- **Requirement**: Address most common educator questions and concerns
- **Content Elements**:
  - 8-12 most common educator questions synthesized from reference docs
  - Questions should cover: pedagogy, teacher training, curriculum rigor, special education, assessment validity, research methodology, professional development
  - Answers should reference relevant sections for deeper detail
  - Honest, research-informed answers (including "We don't know yet" where appropriate)
- **Rationale**: Educators have predictable professional concerns

#### FR1.7: Professional Engagement Section
- **Requirement**: Clear pathways for educator involvement
- **Source Documents**:
  - `reference/contact/overview.md`
  - `reference/organization/overview.md`
- **Content Elements**:
  - How to visit/observe Alpha School
  - Partnership or collaboration opportunities
  - Research collaboration inquiries
  - Professional development or speaking requests
  - Contact information for professional inquiries
- **Rationale**: Enable professional dialogue and partnerships

### FR2: Content Quality Standards

#### FR2.1: Source Attribution
- **Requirement**: All factual claims must trace back to Phase 2 reference documentation
- **Implementation**: Internal comments noting source document for each section
- **Verification**: Cross-reference all claims against reference docs during Phase 3.1
- **Rationale**: Maintain accuracy and enable updates when reference docs change

#### FR2.2: Tone & Voice
- **Requirement**: Professional, collegial, and research-informed tone
- **Characteristics**:
  - Address readers as "you" (second person, professional)
  - Use appropriate educational terminology
  - Reference pedagogical research where applicable
  - Be transparent about newness and evidence limitations
  - Avoid marketing language; use academic/professional framing
  - Balance innovation enthusiasm with methodological honesty
- **Rationale**: Educators trust evidence-based, professionally framed communication

#### FR2.3: Reading Level & Style
- **Requirement**: Content appropriate for professional educators
- **Target**: College-educated professional audience
- **Guidelines**:
  - Use educational terminology appropriately
  - Reference pedagogical concepts and research
  - Maintain academic rigor while remaining accessible
  - Use concrete examples from practice
  - Structure for professional scanning (headers, bullets)
- **Rationale**: Match audience expertise level

#### FR2.4: Length & Format
- **Requirement**: Comprehensive yet well-organized professional document
- **Target Length**: 2,500-3,500 words
- **Format**:
  - Markdown with clear heading hierarchy
  - Bullet points for lists
  - Bold for key concepts and pedagogical terms
  - Blockquotes for testimonials
  - Tables for research data or comparison frameworks
- **Rationale**: Balance depth with professional readability

### FR3: Metadata & Maintenance

#### FR3.1: Document Metadata
- **Requirement**: Include standard metadata footer
- **Content**:
  - Last updated date (YYYY-MM-DD)
  - Last verified date (YYYY-MM-DD)
  - Version number (start at 1.0)
  - Link to educator inquiry form (if available)
- **Rationale**: Transparency about currency of information

#### FR3.2: Source Citations
- **Requirement**: Include sources section with all reference doc dependencies
- **Format**: Markdown links to reference documentation files
- **Content**: List all Phase 2 reference docs used as sources
- **Rationale**: Enable traceability and updates

---

## Implementation Phases

### Phase 3.0: Content Planning & Structure

**Objective**: Create document outline and plan content synthesis approach for educator audience

#### Tasks

1. **Review All Source Material with Educator Lens**:
   - Read all 22 Phase 2 reference documents
   - Identify pedagogically significant information in each
   - Note areas requiring research context or theoretical framing
   - Extract potential professional FAQ topics
   - Identify claims requiring methodological caveats

2. **Research Pedagogical Context**:
   - Identify educational theories/research relevant to Alpha's model
   - Note pedagogical terminology to use
   - Plan how to frame AI integration for educators
   - Consider evidence standards for educator audience

3. **Create Detailed Outline**:
   - Map reference doc content to guide sections
   - Plan professional narrative flow and transitions
   - Identify testimonials and examples to include
   - Plan professional FAQ questions and sourcing
   - Design evidence presentation approach

4. **Define Content Strategy**:
   - Determine appropriate detail level for each topic
   - Plan how to handle evidence limitations transparently
   - Decide on example selection criteria
   - Establish professional tone guidelines
   - Define research framing approach

#### Success Criteria

- Complete outline with section-by-section content plan
- Source mapping document showing which reference docs inform each section
- Professional FAQ question list (8-12 questions)
- Pedagogical context framework for model discussion
- Clear understanding of target length and detail level

---

### Phase 3.1: Content Writing

**Objective**: Write comprehensive educator guide following outline and FR specifications

#### Tasks

1. **Write Introduction** (FR1.1):
   - Craft professional opening
   - Set pedagogical context about Alpha School
   - Explain guide purpose and structure
   - Establish collegial tone

2. **Write Educational Model & Philosophy Section** (FR1.2):
   - Synthesize 5 model reference docs with pedagogical depth
   - Frame 2-hour learning model with learning science
   - Explain AI integration from instructional design perspective
   - Describe human teacher role and training
   - Present daily schedule with learning rationale
   - Include pedagogical examples

3. **Write Curriculum Design Section** (FR1.3):
   - Synthesize 4 curriculum reference docs
   - Present scope, sequence, standards alignment
   - Explain vertical articulation and personalization
   - Detail assessment and feedback systems
   - Address instructional coherence

4. **Write Outcomes & Research Section** (FR1.4):
   - Synthesize 4 outcomes reference docs with rigor
   - Present claims with methodological detail
   - Include evidence with sample sizes and measures
   - Be transparent about research limitations
   - Frame areas for future study

5. **Write Organizational Structure Section** (FR1.5):
   - Synthesize organization, location, and enrollment docs
   - Present mission and leadership credibility
   - Detail locations and growth model
   - Explain enrollment approach and accessibility

6. **Write Professional Questions Section** (FR1.6):
   - Address 8-12 common educator questions
   - Cross-reference to relevant sections
   - Be honest, research-informed, and transparent

7. **Write Professional Engagement Section** (FR1.7):
   - Create clear pathways for educator involvement
   - Include visit/observation process
   - Detail partnership opportunities
   - Provide professional contact information

8. **Add Metadata & Citations** (FR3.1, FR3.2):
   - Add document metadata footer
   - Create sources section with reference doc links
   - Add internal source comments

#### File Structure

```
alpha-school-docs/
  guides/
    for-educators.md          # Educator guide (this spec)
```

#### Success Criteria

**Automated Verification**:
- Markdown lints successfully
- All internal links resolve correctly
- Document length is 2,500-3,500 words

**Manual Verification**:
- All FR requirements addressed
- Tone is professional, collegial, and research-informed
- Content traces back to reference docs
- FAQs address likely educator questions
- Document flows professionally (not like API docs)
- Evidence is presented with appropriate methodological caveats
- Pedagogical framing is accurate and current
- Call-to-action is appropriate for professional audience

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Professional vs. Parent Framing
**Choice**: Use professional pedagogical framing, not simplified language
**Rationale**: Educators evaluate through professional lens; require research context and pedagogical terminology
**Impact**: More theoretical depth, evidence focus, methodological transparency than parent guide

#### Decision 2: Educator-Specific Perspective
**Choice**: Write explicitly for education professionals with their concerns in mind
**Rationale**: Distinct needs from parents or media; educators care about pedagogy, research, instructional design, professional rigor
**Impact**: Content selection and framing differs significantly from parent guide

#### Decision 3: Research Rigor Emphasis
**Choice**: Emphasize evidence quality, methodology, and limitations
**Rationale**: Educators trained to evaluate research; credibility requires methodological transparency
**Impact**: Outcomes section includes detailed methodology discussion; honest about evidence gaps

#### Decision 4: Professional Engagement Focus
**Choice**: End with professional collaboration opportunities
**Rationale**: Enable partnerships, research collaboration, professional dialogue
**Impact**: Conclusion focuses on professional engagement, not enrollment

#### Decision 5: Pedagogical Context Integration
**Choice**: Frame Alpha's model within broader educational research context
**Rationale**: Educators understand innovations relative to existing research
**Impact**: Includes references to pedagogical theories and learning science

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
- Spec 024 (Parent Guide) provides template structure

**No Runtime Dependencies**: This is a documentation task, not code implementation

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Parent Guide**: Separate spec (024) - already complete
2. **Media Guide**: Separate spec (026)
3. **Detailed Curriculum Documents**: Curriculum maps, lesson plans, pacing guides
4. **Professional Development Materials**: Training resources for Alpha School teachers
5. **Research Publications**: Peer-reviewed papers or formal research reports
6. **Competitive Analysis**: Detailed comparison to other innovative schools
7. **Recruitment Materials**: Materials for hiring educators
8. **Multi-Language Versions**: English only for v1
9. **Interactive Content**: No forms, calculators, or dynamic elements

### Explicit Boundaries

- **Educator Audience Only**: Content and framing optimized for education professionals
- **Synthesis Only**: All content must trace to existing reference docs; no new research
- **Informational Purpose**: Goal is professional understanding and evaluation
- **Public Information Only**: Respect scope established in Phase 1 research
- **Pedagogical Framing**: Professional/academic lens, not marketing or persuasion

---

## Success Metrics

### Phase 3.0 Completion
- [ ] All 22 Phase 2 reference docs reviewed with educator lens
- [ ] Pedagogical context framework established
- [ ] Detailed outline created with source mapping
- [ ] Professional FAQ questions identified (8-12)
- [ ] Content strategy documented

### Phase 3.1 Completion
- [ ] Complete educator guide written (2,500-3,500 words)
- [ ] All 7 sections (FR1.1-FR1.7) included
- [ ] Tone is professional, collegial, and research-informed
- [ ] Pedagogical framing is accurate and appropriate
- [ ] All content traces to reference docs
- [ ] Evidence presented with methodological transparency
- [ ] Metadata and sources included
- [ ] Markdown validation passes
- [ ] Manual review confirms professional quality

### Production Readiness
- [ ] Document published to `alpha-school-docs/guides/for-educators.md`
- [ ] Professional review by education expert (if applicable)
- [ ] Accessible via standard LLM crawlers
- [ ] Professional inquiry mechanism identified (optional)

---

## Related Specifications

- **Spec 001a-001g**: Research phase (all domains) - provides source material
- **Spec 002-023**: Phase 2 reference documentation - direct content sources
- **Spec 024**: Parent Guide - provides structural template
- **Spec 026**: Media Guide (parallel Phase 3 work)

---

## References

- Alpha School website: https://alpha.school
- All Phase 2 reference documentation (see Sources section when implemented)
- PRD Section 4 (Users & Use Cases) - Educator use cases UC-2, UC-6
- Educational research framing: Bloom's taxonomy, constructivism, personalized learning research
- Evidence standards: What Works Clearinghouse, ESSA evidence tiers

---

*Spec version: 1.0*
*Created: 2026-01-20*
