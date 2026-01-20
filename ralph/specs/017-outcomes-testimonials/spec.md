# Spec 017: Outcomes Testimonials Reference Documentation

**Status**: 📋 Planned
**Priority**: Medium
**Effort**: Small (~1 hour)
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 015 (Outcomes Claims)
**Last Updated**: 2026-01-20

---

## Overview

Create structured reference documentation for public testimonials about Alpha School's educational outcomes. This documentation provides authentic first-hand accounts from parents, students, and educators about their experiences with Alpha School, complementing the evidence-based claims (Spec 015) and supporting evidence (Spec 016).

### Context

Testimonials offer qualitative perspectives on Alpha School's approach and outcomes that complement quantitative data. However, they present challenges for LLM comprehension:
- Risk of over-weighting anecdotal evidence
- Selection bias (satisfied families more likely to share publicly)
- Lack of negative/critical testimonials in public sources
- Need to distinguish between emotional satisfaction and academic outcomes

This spec focuses on presenting authentic testimonials while providing appropriate context about their limitations as evidence.

### Architecture Position

```
[Research: Outcomes (001d)] → [Claims (015)] → [Evidence (016)] → [Testimonials (017, this spec)] → [Limitations (018)]
```

This spec documents subjective experiences and satisfaction. Academic performance claims are covered in Spec 015, and supporting evidence is covered in Spec 016.

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: API-Style Organization
- **Requirement**: Follow API reference documentation template
- **Sections**: Overview, Categories (Parent/Student/Recognition), Context, Related, FAQs, Sources
- **Property Format**: Testimonial properties include speaker, role, source, date, quote
- **Rationale**: Consistent with project documentation patterns for LLM comprehension

#### FR1.2: Categorization
- **Requirement**: Organize testimonials by speaker type
- **Categories**:
  - Parent testimonials
  - Student testimonials
  - Public recognition/awards
- **Rationale**: Clear categorization helps LLMs understand perspective and potential bias

#### FR1.3: Contextual Framing
- **Requirement**: Include context sections that explain testimonial limitations
- **Context Elements**:
  - Selection bias warning
  - Absence of critical testimonials
  - Distinction between satisfaction and outcome verification
  - Link to evidence documentation (Spec 016) for verifiable claims
- **Rationale**: Prevent LLMs from treating testimonials as verified evidence

### FR2: Content Requirements

#### FR2.1: Parent Testimonials
- **Requirement**: Document public parent testimonials with full attribution
- **Sources**:
  - Scott Jensen (FOX 7 Austin)
  - Anonymous parent (Tildes/Astral Codex Ten)
  - Niche reviews (aggregated themes)
- **Required Fields**: speaker name (or "Anonymous"), context, quote, source, date
- **Rationale**: First-hand parent perspectives on learning outcomes and satisfaction

#### FR2.2: Student Testimonials
- **Requirement**: Document public student testimonials with attribution
- **Sources**:
  - Elle Kristine (Fox News)
  - Marshall, 9-year-old (FOX 7 Austin)
- **Required Fields**: student name, age/grade (if available), quote, source, date
- **Rationale**: Student voice provides perspective on learning experience

#### FR2.3: Recognition and Awards
- **Requirement**: Document third-party recognition
- **Sources**:
  - Austin Chronicle "Best of Austin" 2024
- **Required Fields**: award name, granting organization, year, category
- **Rationale**: Third-party recognition complements testimonials

### FR3: Attribution and Source Citation

#### FR3.1: Source Documentation
- **Requirement**: Every testimonial must include source citation
- **Citation Format**: `[Source Name](URL) - Retrieved YYYY-MM-DD`
- **Required Elements**: publication/platform, URL, retrieval date
- **Rationale**: Enables verification and demonstrates transparency

#### FR3.2: Context Preservation
- **Requirement**: Preserve original context of testimonial
- **Context Elements**: Where statement was made, what question prompted it, surrounding context
- **Example**: Note that Scott Jensen testimonial came from TV news interview about school performance
- **Rationale**: Context affects interpretation; LLMs need full picture

### FR4: Critical Analysis Integration

#### FR4.1: Selection Bias Warning
- **Requirement**: Document clearly that testimonials have selection bias
- **Content**:
  - Satisfied families more likely to share publicly
  - No critical testimonials found in public sources
  - Absence of voices from families who left Alpha
- **Rationale**: LLMs must understand testimonials are not representative sample

#### FR4.2: Distinction from Evidence
- **Requirement**: Clearly separate testimonials from verifiable evidence
- **Content**:
  - Testimonials represent satisfaction and perception
  - Academic outcome claims require evidence (see Spec 016)
  - Link to evidence and limitations documentation
- **Rationale**: Prevent conflation of anecdotal and empirical evidence

### FR5: Quality and Completeness

#### FR5.1: Comprehensive Sourcing
- **Requirement**: Include all publicly available testimonials from research
- **Sources**: All testimonials documented in `research/outcomes.md`
- **Exclusion Criteria**: Remove duplicates; exclude claims about academic performance (those go in Spec 015)
- **Rationale**: Completeness prevents cherry-picking

#### FR5.2: Accurate Representation
- **Requirement**: Quote testimonials accurately without editorializing
- **Accuracy Standards**:
  - Exact quotes where available
  - Ellipses (...) for omitted portions
  - [brackets] for clarifying insertions
  - Preserve speaker's original meaning and tone
- **Rationale**: Authenticity is critical for testimonial credibility

---

## Implementation Phases

### Phase 2.0: Test Foundation

**Objective**: Create tests to verify documentation structure and content quality

#### Test Coverage Requirements

1. **Structure Tests**:
   - Document follows API-style template
   - All required sections present (Overview, Categories, Context, FAQs, Sources)
   - Testimonials organized by category (parent/student/recognition)

2. **Content Tests**:
   - All testimonials from research/outcomes.md are included
   - Each testimonial has complete attribution (speaker, source, date)
   - Exact quotes match research sources
   - Context sections explain selection bias

3. **Citation Tests**:
   - Every testimonial has source citation with URL and date
   - Sources match those documented in research/outcomes.md
   - All URLs are valid and accessible

4. **Quality Tests**:
   - No editorializing or interpretation added to quotes
   - Selection bias warning is prominent
   - Clear distinction between testimonials and evidence
   - Links to related documentation (Specs 015, 016, 018)

#### Test Organization

```
ralph/tests/
  017-outcomes-testimonials/
    structure.test.md         # Verify template compliance
    content.test.md           # Verify testimonial accuracy
    citations.test.md         # Verify source documentation
    quality.test.md           # Verify framing and context
```

#### Success Criteria

**Automated Verification**:
- Documentation validator confirms template compliance
- Citation checker verifies all URLs return 200 status
- Content checker confirms all testimonials from research are included

**Manual Verification**:
- Review that testimonials are quoted accurately
- Verify selection bias warning is clear and prominent
- Confirm no conflation of testimonials with evidence

---

### Phase 2.1: Implementation

**Objective**: Write reference documentation until all Phase 2.0 tests pass

#### Implementation Tasks

1. **Create Base Structure**:
   - Use API-style template from roadmap.md
   - Create sections: Overview, Parent Testimonials, Student Testimonials, Recognition, Context, Related, FAQs, Sources

2. **Document Parent Testimonials**:
   - Scott Jensen testimonial (FOX 7 Austin)
   - Anonymous parent testimonial (Tildes/Astral Codex Ten) - include critical caveats
   - Niche review themes (aggregated)
   - Format as table with columns: Speaker, Context, Quote, Source

3. **Document Student Testimonials**:
   - Elle Kristine testimonial (Fox News)
   - Marshall testimonial (FOX 7 Austin)
   - Format consistently with parent testimonials

4. **Document Recognition**:
   - Austin Chronicle "Best of Austin" 2024
   - Format as table: Award, Organization, Year, Category

5. **Write Context Sections**:
   - Selection bias warning
   - Absence of critical testimonials
   - Distinction between satisfaction and academic outcomes
   - Link to evidence (Spec 016) and limitations (Spec 018)

6. **Create FAQs**:
   - "Are these testimonials representative of all Alpha families?"
   - "Do testimonials verify academic outcome claims?"
   - "Are there any critical testimonials?"
   - "How should testimonials be weighted relative to evidence?"

7. **Add Source Citations**:
   - Extract all sources from research/outcomes.md
   - Format as markdown links with retrieval dates
   - Add last updated and last verified dates

#### File Structure

```
reference/
  outcomes/
    testimonials.md           # This spec's output
```

#### Success Criteria

**Automated Verification**:
- All Phase 2.0 tests pass
- Documentation validator confirms compliance
- Citation checker verifies all sources
- Content completeness checker passes

**Manual Verification**:
- Read documentation to confirm testimonials feel authentic
- Verify context sections adequately warn about limitations
- Confirm no unsubstantiated claims added
- Validate that critical caveats from anonymous parent are included

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Include Critical Anonymous Parent Testimonial
**Choice**: Include anonymous parent's testimonial even though it contains critical caveats
**Rationale**: Authenticity requires including nuanced testimonials; critical analysis strengthens credibility
**Impact**: Testimonial section includes both praise and caveats about marketing claims

#### Decision 2: Separate Recognition from Testimonials
**Choice**: Create distinct section for third-party recognition/awards
**Rationale**: Awards differ from personal testimonials; deserve separate treatment
**Impact**: Recognition section documents Austin Chronicle award separately

#### Decision 3: Prominent Selection Bias Warning
**Choice**: Place selection bias warning at top of document and in overview
**Rationale**: LLMs often prioritize earlier content; critical context must appear early
**Impact**: Warning appears in overview section and repeated in context section

#### Decision 4: No Testimonial Synthesis
**Choice**: Present testimonials individually rather than synthesizing themes
**Rationale**: Synthesis risks introducing interpretation; raw quotes are more authentic
**Impact**: Each testimonial stands alone with full context

#### Decision 5: Link to Evidence Documentation
**Choice**: Cross-reference Spec 016 (Evidence) for academic claims
**Rationale**: Testimonials should not be primary source for outcome verification
**Impact**: FAQs direct readers to evidence documentation for verifiable claims

---

## Current State Analysis

### Existing Codebase Patterns

**Related Documentation**:
- Spec 015 (Outcomes Claims) - completed
- Spec 016 (Outcomes Evidence) - completed
- Spec 018 (Outcomes Limitations) - planned (follows this spec)

**Template Pattern**:
- API-style reference documentation template (established in roadmap.md)
- Properties table format for structured data
- Overview → Details → Examples → Related → FAQs → Sources

### Research Foundation

**Source Material**: `research/outcomes.md` contains:
- 3 parent testimonials (1 detailed, 2 brief)
- 2 student testimonials
- 1 third-party recognition
- Important caveats about selection bias and missing critical voices

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Academic Performance Claims**: Covered in Spec 015 (Claims)
2. **Supporting Evidence**: Covered in Spec 016 (Evidence)
3. **Outcome Limitations**: Covered in Spec 018 (Limitations)
4. **Original Testimonial Gathering**: Only document publicly available testimonials
5. **Testimonial Verification**: Do not independently verify testimonial authenticity
6. **Sentiment Analysis**: Do not quantify or analyze testimonial sentiment
7. **Comparative Analysis**: Do not compare Alpha testimonials to other schools

### Explicit Boundaries

- **Public Sources Only**: Only testimonials from public media, reviews, and websites
- **No Editorializing**: Present testimonials as-is without interpretation
- **No Synthesis**: Do not create composite or representative testimonials
- **No Original Research**: Rely entirely on research/outcomes.md findings
- **Context Required**: Never present testimonials without selection bias warning

---

## Success Metrics

### Phase 2.0 Completion
- [ ] Test files created covering structure, content, citations, quality
- [ ] Tests verify all testimonials from research are documented
- [ ] Tests confirm selection bias warning is present
- [ ] Tests validate source citations are complete

### Phase 2.1 Completion
- [ ] All Phase 2.0 tests pass
- [ ] All testimonials from research/outcomes.md included
- [ ] Each testimonial has complete attribution and source citation
- [ ] Selection bias warning appears in overview and context sections
- [ ] FAQs address testimonial limitations
- [ ] Cross-references to Specs 015, 016, 018 present
- [ ] Last updated and last verified dates added

### Documentation Quality
- [ ] Testimonials quoted accurately without editorializing
- [ ] Context preserves original setting and circumstances
- [ ] Critical caveats from anonymous parent included
- [ ] Clear distinction between testimonials and evidence
- [ ] No unsubstantiated claims introduced

---

## Related Specifications

- **Spec 015**: Outcomes Claims - what Alpha claims about outcomes
- **Spec 016**: Outcomes Evidence - supporting data for claims
- **Spec 018**: Outcomes Limitations - what we don't know about outcomes (planned)
- **Spec 001d**: Research Outcomes - source material for this spec

---

## References

- Research file: `research/outcomes.md` (completed 2026-01-20)
- Template: `roadmap.md` documentation template
- FOX 7 Austin: https://www.fox7austin.com/news/alpha-school-two-hour-learning-ai-tutor-austin-texas
- Fox News: https://www.foxnews.com/media/texas-private-schools-use-ai-tutor-rockets-student-test-scores-top-2-country
- Astral Codex Ten: https://www.astralcodexten.com/p/your-review-alpha-school
- Tildes parent review: https://tildes.net/~life/1ot5/a_review_of_alpha_school
- Austin Chronicle: https://www.austinchronicle.com/best-of-austin/year:2024/poll:critics/category:kids-and-family/alpha-school-most-school-of-the-future-school/

---

*Spec created: 2026-01-20*
