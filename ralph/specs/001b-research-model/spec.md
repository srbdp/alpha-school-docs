# Spec 001b: Research Model Domain

**Status**: ✅ Complete
**Priority**: Critical
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/model.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available information about Alpha School's **Model** domain. This includes their educational philosophy, the "2-hour learning" model, AI integration, role of human instruction, and daily schedule.

### Scope

Information to research for this domain:
- **Educational Philosophy**: Core pedagogical approach and beliefs
- **2-Hour Learning Model**: How it works, what it means, key claims
- **AI Integration**: How AI/technology is used in learning
- **Human Instruction**: Role of teachers, guides, and mentors
- **Daily Schedule**: What a typical day looks like for students

### Output File

Create `research/model.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school "How It Works" page** - Core model explanation
2. **alpha.school "Our Model" or "Approach" page** - Philosophy details
3. **alpha.school homepage** - Key claims about the model
4. **Official YouTube videos** - Explainer videos about the model
5. **Official blog posts** - Deep dives into methodology

### Secondary Sources
1. **Founder interviews** - Detailed explanations of philosophy
2. **News articles** - Coverage of the 2-hour learning concept
3. **Education publications** - EdSurge, TechCrunch coverage
4. **Podcast episodes** - Founder discussions about the model

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit How It Works, Our Model, homepage
   - **IMMEDIATELY write findings to `research/model.md`**
3. **Research official videos**
   - Check YouTube for explainer content
   - **IMMEDIATELY append findings to file**
4. **Research news/press**
   - Search for articles about the 2-hour learning model
   - **IMMEDIATELY append findings to file**
5. **Research interviews**
   - Find founder explanations of the approach
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section
   - Add Notes section (conflicts, caveats)
   - Update status to Complete

---

## Output Template

Create `research/model.md` with this structure:

```markdown
# Model Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### Educational Philosophy
<!-- Core approach and beliefs -->

#### 2-Hour Learning Model
<!-- How it works, key claims -->

#### AI Integration
<!-- How AI/technology is used -->

#### Human Instruction
<!-- Role of teachers/guides -->

#### Daily Schedule
<!-- What a day looks like -->

### From Official Videos
<!-- YouTube explainers, demos -->

### From News/Press
<!-- Articles about the model -->

### From Founder Interviews
<!-- Direct quotes about philosophy -->

### From Other Sources
<!-- Podcasts, conferences, etc. -->

## Information Gaps

<!-- List what information was NOT found -->

## Notes

<!-- Conflicts between sources, caveats, claims vs verified -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [x] `research/model.md` file exists
- [x] All primary sources researched
- [x] All facts have source citations with retrieval dates
- [x] Claims clearly distinguished from verified facts
- [x] Information gaps documented
- [x] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 006 (Educational Philosophy), Spec 007 (Two-Hour Learning), Spec 008 (AI Integration), Spec 009 (Human Instruction), Spec 010 (Daily Schedule)

---

*End of Specification*
