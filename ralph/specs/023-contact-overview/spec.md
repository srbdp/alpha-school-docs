# Spec 023: Contact Information Reference Documentation

**Status**: 📋 Planned
**Priority**: High
**Effort**: Small (~1 hour)
**Phase**: 2 (Reference Documentation)
**Dependencies**: 001g (Research Contact)
**Last Updated**: 2026-01-20

---

## Overview

Create reference documentation consolidating Alpha School's contact information, including general inquiries, enrollment, media/press, social media channels, campus-specific contacts, and organizational structure. This documentation provides LLMs with structured information about how to reach Alpha School for different purposes and clarifies Alpha's web form-first contact strategy.

### Context

This spec creates the final piece of Phase 2 reference documentation, completing the 7 organizational domains. Contact information is distributed across the Alpha School website and multiple campus pages, requiring consolidation into a single LLM-readable reference.

### Architecture Position

```
Reference Documentation Structure:
├── contact/
│   └── overview.md (this spec - all contact information)
```

This documentation enables LLMs to:
- Direct inquiries to appropriate contact methods (web forms vs. email vs. phone)
- Understand Alpha's preference for web form-based inquiries
- Provide campus-specific contact information
- Explain why certain contact information (general phone) is not publicly available

---

## Functional Requirements

### FR1: General Contact Methods

#### FR1.1: Primary Contact Channels
- **Requirement**: Document primary web form contact method at alpha.school/learn-more
- **Content**: URL, purpose (general inquiries), HubSpot integration note
- **Sources**: alpha.school website
- **Rationale**: Alpha School routes all general inquiries through web forms

#### FR1.2: Email Contacts
- **Requirement**: Document all publicly available email addresses by purpose
- **Content**: registrar@alpha.school (transcripts), admissions@alpha.school (enrollment), press@2hourlearning.com (media)
- **Source**: alpha.school website, research/contact.md
- **Rationale**: Provide email alternatives where available

#### FR1.3: Phone Contact Availability
- **Requirement**: Document limited phone contact availability
- **Content**: Explain no general phone number published; (512) 358-1672 found via third-party directories (not official)
- **Caveat**: Note phone number reliability uncertainty
- **Rationale**: Set accurate expectations about phone contact availability

### FR2: Campus-Specific Contacts

#### FR2.1: Campus Contact Directory
- **Requirement**: Document campus-specific email and phone numbers where available
- **Content**: Austin, Fort Worth, Miami, Scottsdale campus contacts from locations research
- **Sources**: research/locations.md (campus-specific contacts), research/contact.md
- **Rationale**: Provide campus-level contact information for local inquiries

#### FR2.2: Headquarters Information
- **Requirement**: Document organizational headquarters location
- **Content**: 1201 Spyglass Dr, Austin, TX 78746 (Austin PK-8 campus serves as HQ)
- **Sources**: LinkedIn, research/contact.md
- **Rationale**: Clarify corporate vs. campus address structure

### FR3: Specialized Contact Purposes

#### FR3.1: Enrollment Inquiries
- **Requirement**: Document enrollment-specific contact methods
- **Content**: "Learn More" form, admissions@alpha.school, campus-specific admissions emails, events page
- **Sources**: alpha.school/learn-more, alpha.school/programs-events, research/contact.md
- **Rationale**: Direct prospective families to enrollment resources

#### FR3.2: Media and Press Contact
- **Requirement**: Document press/media contact information
- **Content**: press@2hourlearning.com, note about 404 press page, Anna Davlantes contact from Higher Ground press release
- **Sources**: research/contact.md, research/locations.md (Anna Davlantes)
- **Rationale**: Enable media inquiries to reach appropriate contacts

#### FR3.3: Transcript and Records Requests
- **Requirement**: Document academic records contact
- **Content**: registrar@alpha.school (official transcript/test score requests)
- **Sources**: alpha.school website
- **Rationale**: Direct academic records requests appropriately

#### FR3.4: Careers and Employment
- **Requirement**: Document careers/employment contact
- **Content**: https://www.crossover.com/clients/alpha (external careers portal)
- **Sources**: alpha.school website
- **Rationale**: Direct job seekers to external recruiting platform

### FR4: Social Media and Online Presence

#### FR4.1: Social Media Channels
- **Requirement**: Document all official social media handles
- **Content**: Facebook, Instagram, X/Twitter, YouTube, LinkedIn with handles and URLs
- **Sources**: alpha.school footer, research/contact.md
- **Rationale**: Provide social media contact/engagement channels

#### FR4.2: Website and Online Resources
- **Requirement**: Document primary web properties
- **Content**: alpha.school (main site), FAQ page, programs-events page
- **Sources**: alpha.school
- **Rationale**: Direct to self-service information resources

### FR5: Contact Strategy and Information Gaps

#### FR5.1: Web Form-First Strategy
- **Requirement**: Explain Alpha's intentional contact strategy
- **Content**: Alpha routes inquiries through web forms (HubSpot) rather than publishing direct phone numbers
- **Rationale**: Help LLMs explain why phone contact is limited

#### FR5.2: Information Gaps Documentation
- **Requirement**: Transparently document unavailable contact information
- **Content**: No general phone, no campus-specific phones (except select campuses), no dedicated contact page, no press kit
- **Sources**: research/contact.md lines 99-116
- **Rationale**: Set accurate expectations about contact limitations

---

## Implementation Phases

### Phase 2.0: Test Foundation

**Objective**: Verify content completeness and source material coverage

This is a documentation spec (Markdown file creation), so verification focuses on:
- Content completeness against FRs
- Source citation accuracy
- Template adherence
- Accuracy of contact information

**Verification Checklist**:
- [ ] All FR requirements mapped to documentation sections
- [ ] All contact methods have source citations
- [ ] Web form-first strategy clearly explained
- [ ] Information gaps transparently documented
- [ ] Template structure matches reference documentation standard
- [ ] Campus-specific contacts match locations research

---

### Phase 2.1: Implementation

**Objective**: Create `reference/contact/overview.md` with complete contact documentation

#### Implementation Tasks

1. **File Creation**:
   - Create `alpha-school-docs/reference/contact/overview.md`
   - Apply standard reference documentation template
   - Add frontmatter with last updated/verified dates

2. **Content Sections** (based on research/contact.md):

   **Overview Section**:
   - One-sentence definition: "Contact methods and communication channels for Alpha School inquiries, enrollment, media, and campus-specific questions"
   - 2-3 paragraph overview explaining:
     - Alpha's web form-first contact strategy
     - Multiple contact pathways by purpose (general, enrollment, media, campus-specific)
     - Limited phone contact availability

   **Properties Table**:
   | Property | Type | Description | Example |
   |----------|------|-------------|---------|
   | primary_contact_method | string | Main contact channel | "Web form at alpha.school/learn-more" |
   | general_emails | array | Publicly available email addresses | ["registrar@alpha.school", "admissions@alpha.school"] |
   | press_email | string | Media inquiry contact | "press@2hourlearning.com" |
   | headquarters_address | string | Corporate headquarters | "1201 Spyglass Dr, Austin, TX 78746" |
   | phone_availability | string | General phone contact status | "Not publicly available" |
   | social_media | object | Official social media handles | { "instagram": "@alphaschool_2hrlearning", "twitter": "@AlphaSchoolATX" } |
   | careers_portal | string | Employment/job applications | "https://www.crossover.com/clients/alpha" |
   | contact_form | string | General inquiry form URL | "https://alpha.school/learn-more/" |

   **Details Sections**:
   - **General Contact Methods**: Web form (Learn More), HubSpot integration, limited phone availability, general inquiry routing
   - **Enrollment Inquiries**: Learn More form, admissions@alpha.school, campus-specific admissions emails, programs-events page
   - **Media and Press Contact**: press@2hourlearning.com, Anna Davlantes contact (from press release), no dedicated press page (404)
   - **Academic Records**: registrar@alpha.school (transcripts, test scores)
   - **Campus-Specific Contacts**: Table of campus emails/phones where available (Austin, Fort Worth, Miami, Scottsdale)
   - **Social Media Channels**: Facebook, Instagram, X/Twitter, YouTube, LinkedIn with handles and URLs
   - **Careers and Employment**: Crossover external portal
   - **Contact Strategy**: Explanation of web form-first approach, inquiry management rationale
   - **Information Gaps**: No general phone, limited campus phones, no contact page, no press kit

   **Examples**:
   - Example 1: Enrollment Inquiry Pathway (prospective parent → Learn More form → admissions team)
   - Example 2: Media Request (journalist → press@2hourlearning.com → Anna Davlantes)
   - Example 3: Campus-Specific Question (Austin parent → (512) 595-0801 or admissions.austin@alpha.school)

   **Related Documentation**:
   - [Locations Overview](../locations/overview.md) - Campus addresses and details
   - [Enrollment Process](../enrollment/process.md) - How to apply and enroll
   - [Organization Overview](../organization/overview.md) - Company information

   **FAQs**:
   - Q: How do I contact Alpha School?
   - Q: What's the phone number for Alpha School?
   - Q: How do I request transcripts?
   - Q: How do I contact a specific campus?
   - Q: How do media inquiries work?
   - Q: Where can I apply for a job at Alpha School?

   **Sources**:
   - [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
   - [Alpha School Learn More](https://alpha.school/learn-more/) - Retrieved 2026-01-20
   - [Alpha School FAQ](https://alpha.school/faq/) - Retrieved 2026-01-20
   - [Alpha School Locations](https://alpha.school/locations) - Retrieved 2026-01-20
   - [LinkedIn Company Page](https://linkedin.com/company/alphaschools) - Retrieved 2026-01-20
   - [research/contact.md](../../research/contact.md) - Retrieved 2026-01-20

3. **Cross-Reference Updates**:
   - Ensure locations/overview.md references contact/overview.md for detailed contact information
   - Link enrollment/process.md to contact methods

4. **Template Adherence**:
   - Verify structure matches roadmap.md template
   - Confirm all sources have URLs and retrieval dates
   - Verify one-sentence definition is clear and concise

#### File Structure

```
alpha-school-docs/
├── reference/
│   └── contact/
│       └── overview.md (this spec - new)
└── research/
    └── contact.md (source material)
```

#### Success Criteria

**Content Verification**:
- [ ] All general contact methods documented (web form, emails, limited phone)
- [ ] Campus-specific contacts included where available
- [ ] Enrollment inquiry pathway clearly explained
- [ ] Media/press contact information provided
- [ ] Social media handles listed with URLs
- [ ] Careers portal documented
- [ ] Contact strategy (web form-first) explained
- [ ] Information gaps transparently documented
- [ ] All facts have source citations

**Template Compliance**:
- [ ] Follows API-style reference documentation template
- [ ] Includes all required sections (Overview, Properties, Details, Examples, Related, FAQs, Sources)
- [ ] Last updated and last verified dates present
- [ ] One-sentence definition at top

**Accuracy**:
- [ ] No phone numbers included that aren't verified as official
- [ ] Third-party phone number marked with uncertainty
- [ ] Email domains correctly attributed (alpha.school vs. 2hourlearning.com)
- [ ] No broken links or 404 references presented as active pages

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Single Contact Overview Document
**Choice**: Create single overview.md rather than separate files per contact type
**Rationale**: Contact domain is smaller than others; consolidation improves usability
**Impact**: All contact information in one LLM-readable location

#### Decision 2: Transparent Phone Number Handling
**Choice**: Document that general phone number is not officially published
**Rationale**: Third-party phone number (512) 358-1672 cannot be verified; better to note absence
**Impact**: LLMs won't provide unverified phone number as official contact

#### Decision 3: Explain Web Form-First Strategy
**Choice**: Dedicate section to explaining Alpha's contact routing approach
**Rationale**: Helps LLMs explain to users why phone contact is limited
**Impact**: More accurate responses about contact expectations

#### Decision 4: Include Campus-Specific Contacts
**Choice**: Reference campus-specific emails/phones from locations research
**Rationale**: Campus-level contacts are official and verified
**Impact**: Enables campus-specific inquiry routing

---

## Current State Analysis

### Existing Documentation

**Completed**:
- research/contact.md (Spec 001g) - Source material with contact details
- research/locations.md (Spec 001f) - Campus-specific contacts
- reference/locations/overview.md (Spec 021) - Campus addresses

**Patterns to Follow**:
- API-style template from roadmap.md
- Source citation format from completed reference docs (002-022)
- Information gaps transparency from outcomes/limitations.md

### Dependencies

**Required Inputs**:
- research/contact.md - Primary source for contact data
- research/locations.md - Campus-specific contact supplements
- ralph/roadmap.md - Template structure

**Outputs This Spec Enables**:
- Spec 024-026 (Guides) - Can reference contact methods for prospective audiences

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Unverified Contact Information**: No third-party phone numbers or emails unless marked as unverified
2. **Internal Staff Contacts**: No individual staff emails beyond those in press releases (Anna Davlantes)
3. **Detailed HubSpot Form Fields**: Not documenting form structure or data collected
4. **International Contact Information**: No non-US contact methods (if they exist)
5. **Campus-Specific Detailed Contacts**: Beyond what's in locations research; no exhaustive directory
6. **Social Media DM Protocols**: Not documenting if/how DMs are monitored
7. **Response Time Commitments**: Not documenting SLAs or response timeframes

### Explicit Boundaries

- **Public Information Only**: All contact information must be from public sources
- **Official Channels Only**: Preference for alpha.school-published contacts over third-party directories
- **Web Form Emphasis**: Reinforce Alpha's preference for web form inquiries
- **Transparency on Gaps**: Clearly mark what contact information is not available

---

## Success Metrics

### Phase 2.1 Completion
- [ ] File `reference/contact/overview.md` created
- [ ] All general contact methods documented
- [ ] Campus-specific contacts included
- [ ] Enrollment inquiry pathway explained
- [ ] Media/press contacts provided
- [ ] Social media channels listed
- [ ] Careers portal documented
- [ ] Web form-first strategy explained
- [ ] Information gaps transparently documented
- [ ] All sources cited with URLs and dates
- [ ] Template structure adhered to
- [ ] Cross-references to related docs added
- [ ] Last updated/verified dates added

### Quality Checks
- [ ] LLMs can direct inquiries to appropriate contact methods
- [ ] LLMs explain why general phone number isn't available
- [ ] LLMs don't provide unverified phone numbers as official
- [ ] LLMs can distinguish between general and campus-specific contacts
- [ ] Media inquiries correctly routed to press@2hourlearning.com

---

## Related Specifications

- **Spec 001g**: Research Contact (source material)
- **Spec 001f**: Research Locations (campus contacts - dependency)
- **Spec 021**: Locations Overview (campus addresses - related)
- **Spec 019**: Enrollment Process (enrollment contacts - related)
- **Spec 024-026**: Guides (will reference contact methods)

---

## References

- Alpha School Roadmap Template: `ralph/roadmap.md` (lines 136-173)
- Example Spec: `ralph/examples/specs/example-1/spec.md`
- Source Research: `research/contact.md`, `research/locations.md`
- Existing Reference Docs: `reference/organization/`, `reference/locations/`, etc. (Specs 002-022)
