# Spec 001g: Research Contact Domain

**Status**: 📋 Planned
**Priority**: High
**Phase**: 1 (Research)
**Dependencies**: None
**Output**: `research/contact.md`
**Last Updated**: 2026-01-20

---

## Overview

Research and document all publicly available **Contact** information for Alpha School. This includes general contact info, enrollment inquiries, media contacts, and social media handles.

### Scope

Information to research for this domain:
- **General Contact**: Email, phone, contact form
- **Enrollment Contact**: How to inquire about enrollment
- **Media Contact**: Press/media inquiries
- **Physical Address**: Location addresses
- **Social Media**: Official account handles

### Output File

Create `research/contact.md` following the template below.

---

## Research Sources

### Primary Sources (Research These First)
1. **alpha.school "Contact" page** - Contact information
2. **alpha.school footer** - Email, phone, address
3. **alpha.school "Press" or "Media" page** - Media contacts
4. **Official social media profiles** - Account handles

### Secondary Sources
1. **Crunchbase** - Company contact info
2. **LinkedIn company page** - Website, contact links
3. **Google Business listing** - Verified contact info

---

## Incremental Writing Pattern

**CRITICAL**: Write findings to file immediately after each source. Do not batch.

### Execution Steps

1. **Create output file** with template skeleton
2. **Research alpha.school website**
   - Visit Contact page, check footer
   - **IMMEDIATELY write findings to `research/contact.md`**
3. **Collect social media handles**
   - Verify official accounts
   - **IMMEDIATELY append findings to file**
4. **Research press/media contacts**
   - Check for media-specific contact info
   - **IMMEDIATELY append findings to file**
5. **Verify with external sources**
   - Check Crunchbase, LinkedIn, Google
   - **IMMEDIATELY append findings to file**
6. **Final pass**
   - Add Information Gaps section
   - Add Notes section
   - Update status to Complete

---

## Output Template

Create `research/contact.md` with this structure:

```markdown
# Contact Research

**Last Updated**: YYYY-MM-DD
**Status**: In Progress

## Sources Consulted

| Source | URL | Retrieved | Type |
|--------|-----|-----------|------|
<!-- Add each source as you research it -->

## Key Facts

### From alpha.school

#### General Contact
<!-- Email, phone, contact form -->

#### Enrollment Inquiries
<!-- How to contact about enrollment -->

#### Media/Press Contact
<!-- Press inquiry information -->

#### Physical Address
<!-- Campus/office addresses -->

### Social Media Handles

| Platform | Handle | URL | Verified |
|----------|--------|-----|----------|
<!-- Official social accounts -->

### From Other Sources
<!-- Crunchbase, LinkedIn, Google verification -->

## Information Gaps

<!-- List what contact info was NOT found -->

## Notes

<!-- Conflicts, caveats -->

---
*Research completed: YYYY-MM-DD*
```

---

## Success Criteria

- [ ] `research/contact.md` file exists
- [ ] All primary sources researched
- [ ] Social media handles verified as official
- [ ] All facts have source citations with retrieval dates
- [ ] Information gaps documented
- [ ] Status updated to Complete

---

## Related

- **Parent Spec**: [001 Research Overview](../001-research-sources/spec.md)
- **Phase 2 Dependents**: Spec 023 (Contact Overview)

---

*End of Specification*
