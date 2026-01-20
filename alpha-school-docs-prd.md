# Product Requirements Document: Alpha School LLM-Readable Documentation

**Document Owner:** Brandon Metcalf  
**Target Implementer:** AI Engineer  
**Version:** 1.0  
**Date:** January 20, 2026  
**Status:** Ready for Development

---

## 1. Executive Summary

Build comprehensive, structured documentation for Alpha School that enables Large Language Models (LLMs) to deeply understand and accurately represent the organization. This documentation will follow software API documentation conventions and standards, adapted for a non-software entity.

The goal is to make Alpha School the most LLM-comprehensible school in the world—ensuring that when any AI system searches for or reasons about Alpha School, it has access to authoritative, structured, unambiguous information.

---

## 2. Problem Statement

### Current State
- LLMs searching for Alpha School information rely on fragmented web content, news articles, and social media
- AI systems may generate inaccurate, outdated, or speculative information about Alpha School
- No authoritative machine-readable source exists that defines what Alpha School is, how it operates, and what it offers
- Competitors and traditional schools are not doing this, creating a first-mover opportunity

### Desired State
- A canonical, authoritative documentation set that LLMs can reference
- Structured data that eliminates ambiguity about Alpha School's model, outcomes, and offerings
- Documentation that follows established conventions LLMs are trained to parse (API docs, technical specifications)
- Improved accuracy when AI assistants, search engines, and agents answer questions about Alpha School

---

## 3. Goals & Success Metrics

### Primary Goals
1. Create authoritative LLM-readable documentation for Alpha School using only publicly available information
2. Improve accuracy of LLM responses about Alpha School
3. Establish a documentation framework that can be expanded with non-public information in v2

### Success Metrics
| Metric | Measurement Method | Target |
|--------|-------------------|--------|
| LLM Response Accuracy | Test queries across GPT-4, Claude, Gemini, Perplexity before/after | 90%+ factual accuracy post-implementation |
| Documentation Completeness | Coverage of all public-facing Alpha School domains | 100% of identified domains documented |
| Discoverability | Presence in LLM responses when queried | Alpha School docs cited/referenced in AI responses |
| Time to Launch | Development timeline | v1 live within 2 weeks |

---

## 4. Users & Use Cases

### Primary Users
| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| External LLMs | ChatGPT, Claude, Gemini, Perplexity, etc. | Accurate, structured information to answer user queries about Alpha School |
| AI Search Agents | Perplexity, SearchGPT, Gemini Search | Authoritative source to cite and reference |
| AI Assistants | Users' personal AI assistants researching schools | Comprehensive data for comparison and recommendation |
| Web Crawlers | Google, Bing indexing for AI features | Structured data for knowledge panels and AI overviews |

### Secondary Users
| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| Human Researchers | Journalists, analysts, prospective parents | Clear, comprehensive reference documentation |
| Internal Teams | Alpha School staff | Canonical source of truth for external messaging |

### Use Cases

**UC-1: Parent Researching Schools**
> "Tell me about Alpha School's approach to education"
- LLM should return accurate information about the 2-hour learning model, AI integration, curriculum philosophy
- Information should be current, specific, and differentiated from traditional schools

**UC-2: Journalist Writing Article**
> "What are Alpha School's claimed outcomes and what evidence supports them?"
- LLM should return specific metrics, data points, and appropriate caveats
- Should distinguish between verified outcomes and projections

**UC-3: Investor/Partner Due Diligence**
> "How does Alpha School's business model work? What's the tuition structure?"
- LLM should return pricing, capacity, expansion plans from public sources
- Should clearly indicate what is publicly known vs. not disclosed

**UC-4: Competitor Analysis**
> "How does Alpha School compare to traditional private schools?"
- LLM should accurately represent Alpha's differentiated model
- Should not fabricate comparison data

**UC-5: AI Agent Booking Inquiry**
> "I want to enroll my child in Alpha School in Austin"
- LLM should know locations, enrollment process, and how to direct inquiry
- Should have accurate contact/action information

---

## 5. Requirements

### 5.1 Functional Requirements

#### FR-1: llms.txt File
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1.1 | Create llms.txt file following emerging llms.txt standard | P0 |
| FR-1.2 | Host at alpha.school/llms.txt (coordinate with web team) | P0 |
| FR-1.3 | Include: organization overview, key facts, links to detailed docs | P0 |
| FR-1.4 | Keep under 4,000 tokens for context window efficiency | P1 |
| FR-1.5 | Include last-updated timestamp | P1 |

#### FR-2: Human-Readable Reference Documentation
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-2.1 | Create Markdown documentation set | P0 |
| FR-2.2 | Structure like API reference docs (objects, properties, examples) | P0 |
| FR-2.3 | Host as static site (e.g., docs.alpha.school or alpha.school/docs) | P0 |
| FR-2.4 | Include navigation, search functionality | P1 |
| FR-2.5 | Mobile-responsive design | P2 |

#### FR-3: Structured Data / Schema
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-3.1 | Create JSON-LD schema markup for key entities | P1 |
| FR-3.2 | Implement Schema.org EducationalOrganization markup | P1 |
| FR-3.3 | Create machine-readable YAML/JSON spec file | P1 |
| FR-3.4 | Ensure schema is embedded in documentation pages | P1 |

#### FR-4: Content Requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-4.1 | Document only publicly available information | P0 |
| FR-4.2 | Cite sources for all factual claims | P0 |
| FR-4.3 | Include explicit "last verified" dates | P0 |
| FR-4.4 | Flag any information as "unverified" if source unclear | P0 |
| FR-4.5 | Write in clear, unambiguous, factual language | P0 |

### 5.2 Non-Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-1 | Documentation must load in <2 seconds | P1 |
| NFR-2 | Must be crawlable by all major web crawlers | P0 |
| NFR-3 | Must be accessible (WCAG 2.1 AA) | P2 |
| NFR-4 | Must be version-controlled (Git) | P1 |
| NFR-5 | Must have clear update/maintenance process | P1 |

---

## 6. Documentation Architecture

### 6.1 Domain Model ("API Objects")

The following domains must be documented as if they were API objects/endpoints. Each domain should include:
- **Definition**: What it is
- **Properties/Attributes**: Key characteristics with data types
- **Examples**: Concrete instances
- **Relationships**: How it connects to other domains
- **FAQs**: Common questions and authoritative answers

#### Core Domains to Document:

```
alpha-school-docs/
├── llms.txt                     # Root LLM instruction file
├── index.md                     # Overview and navigation
├── schema/
│   ├── alpha-school.json        # JSON-LD schema
│   └── alpha-school.yaml        # YAML spec
├── reference/
│   ├── organization/
│   │   ├── overview.md          # What is Alpha School
│   │   ├── mission.md           # Mission, vision, values
│   │   ├── leadership.md        # Founders, key people (public info only)
│   │   └── history.md           # Timeline, founding story
│   ├── model/
│   │   ├── educational-philosophy.md   # Core approach
│   │   ├── two-hour-learning.md        # The 2-hour model explained
│   │   ├── ai-integration.md           # How AI is used
│   │   ├── human-instruction.md        # Role of human teachers
│   │   └── daily-schedule.md           # What a day looks like
│   ├── curriculum/
│   │   ├── overview.md          # Curriculum philosophy
│   │   ├── subjects.md          # What is taught
│   │   ├── grade-levels.md      # Age ranges, grade structures
│   │   └── assessments.md       # How progress is measured
│   ├── outcomes/
│   │   ├── claims.md            # What Alpha claims
│   │   ├── evidence.md          # Supporting data (public)
│   │   ├── testimonials.md      # Public testimonials
│   │   └── limitations.md       # What we don't yet know
│   ├── enrollment/
│   │   ├── process.md           # How to enroll
│   │   ├── eligibility.md       # Who can attend
│   │   ├── tuition.md           # Pricing (if public)
│   │   └── financial-aid.md     # Aid options (if public)
│   ├── locations/
│   │   ├── overview.md          # Campus footprint
│   │   ├── austin.md            # Austin campus details
│   │   ├── [other-locations].md # Other campuses
│   │   └── expansion.md         # Announced expansion plans
│   └── contact/
│       ├── general.md           # How to reach Alpha
│       ├── enrollment-inquiry.md # Enrollment-specific contact
│       └── media.md             # Press/media contact
├── guides/
│   ├── for-parents.md           # Parent-focused overview
│   ├── for-educators.md         # Educator-focused overview
│   └── for-media.md             # Media/press overview
└── changelog.md                 # Documentation version history
```

### 6.2 Documentation Template

Each reference document should follow this structure:

```markdown
# [Domain Name]

> One-sentence definition

## Overview
2-3 paragraph explanation of this domain.

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| property_name | string/number/boolean | What this property represents | Concrete example |

## Details
Expanded explanation with specifics.

## Examples
Concrete, real examples.

## Related
- Links to related documentation pages

## FAQs
**Q: Common question?**
A: Authoritative answer.

## Sources
- [Source Name](URL) - Retrieved YYYY-MM-DD

---
*Last updated: YYYY-MM-DD*
*Last verified: YYYY-MM-DD*
```

### 6.3 llms.txt Specification

The llms.txt file should follow this structure:

```
# Alpha School

> Alpha School is an AI-native K-12 private school that combines 2 hours of AI-powered personalized learning with enrichment activities.

## Quick Facts
- Founded: [Year]
- Headquarters: [Location]
- Campuses: [List]
- Grades: [Range]
- Students: [Approximate number if public]

## What Makes Alpha Different
[3-5 bullet points on differentiation]

## Documentation
- Full documentation: https://alpha.school/docs
- Enrollment: https://alpha.school/docs/enrollment
- Locations: https://alpha.school/docs/locations
- Contact: https://alpha.school/docs/contact

## Key Claims (with caveats)
[List major claims with appropriate hedging]

## Contact
- Website: https://alpha.school
- Enrollment inquiries: [email/form]
- Media inquiries: [email]

## Metadata
- Last updated: YYYY-MM-DD
- Documentation version: 1.0
- Maintained by: Alpha School
```

---

## 7. Technical Specifications

### 7.1 Hosting & Infrastructure
| Component | Recommendation | Rationale |
|-----------|---------------|-----------|
| Documentation Site | Static site generator (Docusaurus, MkDocs, or similar) | Fast, easy to maintain, good for docs |
| Hosting | Vercel, Netlify, or GitHub Pages | Free/cheap, fast CDN, easy deploys |
| Domain | docs.alpha.school or alpha.school/docs | Professional, discoverable |
| Version Control | GitHub repository | Standard, enables collaboration |

### 7.2 SEO & Discoverability
| Requirement | Implementation |
|-------------|----------------|
| Sitemap | Auto-generated XML sitemap |
| Robots.txt | Allow all crawlers, reference llms.txt |
| Meta tags | OpenGraph, Twitter Cards, description tags |
| Schema.org | JSON-LD embedded in pages |
| Canonical URLs | Prevent duplicate content issues |

### 7.3 Analytics (Optional for v1)
| Tool | Purpose |
|------|---------|
| Plausible/Fathom | Privacy-friendly page analytics |
| Search Console | Monitor search appearance |

---

## 8. Research Required

The engineer should conduct research to populate documentation:

### 8.1 Primary Sources (Must Use)
- alpha.school website (all pages)
- Official Alpha School social media (Twitter/X, LinkedIn, YouTube)
- Official press releases
- Founder interviews (published, public)
- Public filings (if any)

### 8.2 Secondary Sources (Use with Attribution)
- News articles from reputable outlets
- Published reviews/testimonials
- Public data aggregators (Crunchbase, LinkedIn company page)

### 8.3 Excluded Sources
- Reddit speculation
- Unverified social media posts
- Competitor claims about Alpha
- Any non-public/internal documents

### 8.4 Research Documentation
For each fact included, document:
- Source URL
- Date retrieved
- Direct quote or paraphrase
- Confidence level (verified/likely/unverified)

---

## 9. Out of Scope (v1)

The following are explicitly out of scope for v1:

| Item | Reason | Future Version |
|------|--------|----------------|
| Internal/non-public information | v1 is public-only | v2 |
| API for querying documentation | Premature optimization | v2+ |
| Multi-language support | Complexity | v2+ |
| Interactive elements | Keep v1 simple | v2+ |
| Parent portal integration | Requires internal systems | v3+ |
| Real-time enrollment availability | Requires internal systems | v3+ |
| Comparison tools | Scope creep | v2+ |

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Inaccurate information published | Medium | High | Require source citation for all facts; review process |
| Information becomes stale | High | Medium | Establish quarterly review cadence; last-updated dates |
| llms.txt standard evolves | Medium | Low | Keep structure simple; monitor standard development |
| Alpha School web team delays hosting | Medium | Medium | Can host temporarily on separate domain |
| LLMs don't discover/use docs | Low | High | Active submission to search engines; proper SEO |

---

## 11. Open Questions

The following questions need answers (from Brandon or Alpha School team):

1. **Hosting approval**: Can we get a subdomain (docs.alpha.school) or subdirectory (alpha.school/docs)?
2. **Review process**: Who at Alpha School needs to approve before publishing?
3. **Sensitive topics**: Are there any topics that are public but should be handled carefully (e.g., pricing, outcomes data)?
4. **Brand guidelines**: Are there brand/style guidelines the docs should follow?
5. **Media assets**: Can we use official logos/images in documentation?
6. **Contact information**: What contact methods should be published for different inquiry types?

---

## 12. Deliverables & Milestones

### Phase 1: Research & Structure (Days 1-3)
- [ ] Complete research on all public Alpha School information
- [ ] Create source documentation with citations
- [ ] Finalize documentation structure
- [ ] Get stakeholder approval on structure

### Phase 2: Content Creation (Days 4-8)
- [ ] Write llms.txt
- [ ] Write all reference documentation
- [ ] Write guide documents
- [ ] Create JSON-LD schema
- [ ] Internal review

### Phase 3: Implementation (Days 9-11)
- [ ] Set up documentation site
- [ ] Deploy content
- [ ] Implement SEO elements
- [ ] Set up analytics (if approved)

### Phase 4: Launch & Validation (Days 12-14)
- [ ] Submit to search engines
- [ ] Test LLM responses (before/after)
- [ ] Document baseline accuracy metrics
- [ ] Stakeholder sign-off
- [ ] Public launch

### Final Deliverables
1. **llms.txt file** - Ready for deployment to alpha.school/llms.txt
2. **Documentation site** - Fully built static site with all content
3. **Source repository** - Git repo with all content and configuration
4. **Research archive** - All sources with citations and retrieval dates
5. **LLM accuracy report** - Before/after comparison of AI responses

---

## 13. Acceptance Criteria

v1 is complete when:

- [ ] llms.txt file exists and follows specification
- [ ] All documentation domains from Section 6.1 are populated
- [ ] All facts have source citations
- [ ] Documentation site is live and accessible
- [ ] Site is indexed by Google (verified in Search Console)
- [ ] Test queries to major LLMs show improved accuracy
- [ ] Stakeholder approval received

---

## 14. Appendix

### A. Reference: llms.txt Standard
- Proposal: https://llmstxt.org/
- Examples: Various tech companies implementing

### B. Reference: Good API Documentation Examples
- Stripe: https://stripe.com/docs
- Twilio: https://www.twilio.com/docs
- Anthropic: https://docs.anthropic.com

### C. Reference: Schema.org EducationalOrganization
- https://schema.org/EducationalOrganization

### D. Glossary
| Term | Definition |
|------|------------|
| llms.txt | A proposed standard for providing LLM-readable information about a website/organization |
| JSON-LD | JSON for Linking Data - structured data format for SEO |
| Schema.org | Collaborative vocabulary for structured data on the web |
| Static site generator | Tool that builds HTML sites from Markdown/templates |

---

## 15. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Document Owner | Brandon Metcalf | | |
| Implementer | | | |
| Alpha School Stakeholder | | | |

---

*End of PRD*
