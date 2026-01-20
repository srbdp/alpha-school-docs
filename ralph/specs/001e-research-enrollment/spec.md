# Spec 001e: Research Enrollment Domain

**Status**: ✅ Complete
**Priority**: High
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/enrollment.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available information about Alpha School's **Enrollment** domain. This includes the enrollment process, eligibility requirements, tuition/costs, and financial aid options.

### Scope

Information to research for this domain:
- **Process**: How to apply/enroll
- **Eligibility**: Requirements, age ranges, prerequisites
- **Tuition**: Cost information (if publicly available)
- **Financial Aid**: Scholarships, aid options (if mentioned)
- **Capacity**: Class sizes, waitlists (if mentioned)

### Output File

Create `research/enrollment.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school "Enroll" or "Apply" page** - Application process
2. **alpha.school "Tuition" or "Pricing" page** - Cost information
3. **alpha.school "Admissions" page** - Requirements, eligibility
4. **alpha.school FAQ** - Common enrollment questions

### Secondary Sources
1. **News articles** - Coverage mentioning tuition or enrollment
2. **Parent testimonials** - Mentions of enrollment experience
3. **Social media** - Enrollment announcements, deadlines

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit Enroll, Apply, Admissions, Tuition pages
   - **IMMEDIATELY write findings to `research/enrollment.md`**
3. **Research FAQ**
   - Check for enrollment-related questions
   - **IMMEDIATELY append findings to file**
4. **Research news/press**
   - Search for articles mentioning enrollment, tuition
   - **IMMEDIATELY append findings to file**
5. **Research social media**
   - Check for enrollment announcements
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section
   - Add Notes section
   - Update status to Complete

---

## Output Template

Create `research/enrollment.md` with this structure:

```markdown
# Enrollment Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### Enrollment Process
<!-- How to apply, steps involved -->

#### Eligibility Requirements
<!-- Age ranges, prerequisites, requirements -->

#### Tuition/Costs
<!-- Pricing if publicly available -->
<!-- Note: May be "Contact for pricing" -->

#### Financial Aid
<!-- Scholarships, aid options if mentioned -->

#### Capacity
<!-- Class sizes, waitlists if mentioned -->

### From FAQ
<!-- Enrollment-related Q&As -->

### From News/Press
<!-- Articles mentioning enrollment -->

### From Social Media
<!-- Enrollment announcements, deadlines -->

## Information Gaps

<!-- List what enrollment info was NOT found -->
<!-- Note if pricing requires inquiry -->

## Notes

<!-- Conflicts, caveats -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [ ] `research/enrollment.md` file exists
- [ ] All primary sources researched
- [ ] All facts have source citations with retrieval dates
- [ ] Pricing status documented (public or inquiry-based)
- [ ] Information gaps documented
- [ ] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 019 (Enrollment Process), Spec 020 (Tuition)

---

*End of Specification*
