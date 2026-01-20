# Spec 001d: Research Outcomes Domain

**Status**: ✅ Complete
**Priority**: High
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/outcomes.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available information about Alpha School's **Outcomes** domain. This includes claims about student outcomes, supporting evidence, testimonials, and limitations of what is publicly known.

### Scope

Information to research for this domain:
- **Claims**: What does Alpha School claim about student outcomes?
- **Evidence**: What data or evidence supports these claims?
- **Testimonials**: Public testimonials from parents, students
- **Limitations**: What don't we know? What requires verification?

### Special Considerations

**This domain requires careful handling:**
- Clearly distinguish between claims and verified evidence
- Note the source and date of any statistics
- Flag outcomes that cannot be independently verified
- Be explicit about limitations

### Output File

Create `research/outcomes.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school "Results" or "Outcomes" page** - Official claims
2. **alpha.school testimonials page** - Parent/student stories
3. **alpha.school homepage** - Key outcome claims
4. **Official social media** - Success stories, statistics

### Secondary Sources
1. **News articles** - Coverage of Alpha School results
2. **Press releases** - Official announcements with data
3. **Founder interviews** - Claims about effectiveness
4. **Independent reviews** - Third-party assessments (if any)

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit Results, Outcomes, Testimonials pages
   - **IMMEDIATELY write findings to `research/outcomes.md`**
   - **Flag claims vs evidence as you write**
3. **Research social media**
   - Check for success stories, statistics
   - **IMMEDIATELY append findings to file**
4. **Research news/press**
   - Search for articles about Alpha School effectiveness
   - **IMMEDIATELY append findings to file**
5. **Research testimonials**
   - Gather public testimonials
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section (critical for this domain)
   - Add Notes section with caveats
   - Update status to Complete

---

## Output Template

Create `research/outcomes.md` with this structure:

```markdown
# Outcomes Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### Claims
<!-- What Alpha School claims about outcomes -->
<!-- CLEARLY LABEL: "Claimed by Alpha School" -->

#### Evidence Cited
<!-- Any data or statistics they provide -->
<!-- Note source and date of data -->

#### Testimonials (Official)
<!-- Testimonials from their website -->

### From Social Media
<!-- Success stories, statistics shared -->

### From News/Press
<!-- How press covers outcomes/effectiveness -->

### From Independent Sources
<!-- Third-party assessments, reviews -->

## Public Testimonials

### Parent Testimonials
<!-- Public statements from parents -->

### Student Testimonials
<!-- Public statements from students -->

## Information Gaps

**IMPORTANT: What we don't know:**
<!-- List what outcome information is NOT publicly available -->
<!-- Be explicit about unverifiable claims -->

## Notes

**Caveats and Limitations:**
<!-- Conflicts, things that require careful handling -->
<!-- Claims that cannot be independently verified -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [ ] `research/outcomes.md` file exists
- [ ] All primary sources researched
- [ ] Claims clearly distinguished from evidence
- [ ] All facts have source citations with retrieval dates
- [ ] Limitations explicitly documented
- [ ] Information gaps documented
- [ ] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 015 (Claims), Spec 016 (Evidence), Spec 017 (Testimonials), Spec 018 (Limitations)

---

*End of Specification*
