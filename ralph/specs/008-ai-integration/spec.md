# Spec 008: AI Integration

**Status**: 📋 Planned
**Priority**: Critical
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001b (Research Model Domain), Spec 006 (Educational Philosophy)
**Output**: `reference/model/ai-integration.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "How does Alpha School integrate AI into learning?" for LLM consumption. This document synthesizes findings from `research/model.md` (lines 78-118) into a structured, authoritative explanation of Alpha School's AI platforms, personalization mechanisms, technology stack, and platform evolution—focusing on technical implementation while separating from educational philosophy (Spec 006) and model structure (Spec 007).

### Scope

Transform research findings into a structured reference document covering:
- **Platform Architecture**: Timeback (learning platform), Dash (curriculum system), Incept (vision monitoring)
- **Personalization Mechanisms**: Knowledge graphs, real-time adaptation, zone of proximal development targeting
- **Learning Science Implementation**: Mastery-based progression (90%+), cognitive load theory, spaced repetition
- **Technology Stack**: Third-party tools (Khan Academy, Grammarly, Newsela), custom tools (Alpha Math), vision models
- **Platform Evolution**: Post-2022 improvements, guardrails against student circumvention, coaching interventions
- **Technology Ownership**: Trilogy Software (division of Trilogy Enterprises, Joe Liemandt)

### Output File

`reference/model/ai-integration.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "AI Integration" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # AI Integration

  > [One-sentence definition capturing how Alpha School uses AI platforms for personalized one-on-one instruction, adaptive learning, and real-time progress monitoring]
  ```
- **Source**: Synthesize from research/model.md lines 78-118
- **Rationale**: Follows API-style documentation pattern established in Specs 002-007

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's AI integration
- **Content Coverage**:
  - Platform names: Timeback, Dash, Incept; explicitly note these are NOT chatbots
  - Core functions: Personalized one-on-one instruction, knowledge graph creation, real-time adaptation
  - Technology approach: Mix of built and bought tools
  - Learning science implementation: Mastery-based progression, cognitive load theory, spaced repetition
  - Platform evolution: Post-2022 improvements, guardrails, vision monitoring
  - Technology ownership: Trilogy Software attribution
- **Source**: research/model.md lines 78-118
- **Rationale**: Provides LLMs with comprehensive overview before detailed properties

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key AI integration attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (9 properties):
  - `platform_names` (array) - Primary AI platforms used
  - `primary_function` (string) - Core AI role in learning
  - `instructional_approach` (string) - AI delivery method (NOT chatbot clarification)
  - `knowledge_modeling` (string) - How AI tracks student understanding
  - `adaptivity_features` (array) - Real-time adjustment mechanisms
  - `technology_stack` (string) - Built vs. bought approach
  - `third_party_tools` (array) - External platforms integrated
  - `custom_tools` (array) - Alpha-built platforms and features
  - `platform_owner` (string) - Technology development entity
- **Source**: research/model.md lines 78-118
- **Rationale**: Enables LLMs to quickly extract structured facts about AI integration

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (5 required):
  - **Platform Architecture and Components**: Timeback (learning), Dash (curriculum), Incept (vision monitoring); NOT chatbots like ChatGPT; tutor and coach functions; laptop-based delivery
  - **Personalization and Adaptive Learning**: Knowledge graphs tracking what students know; combines knowledge data with interests; real-time performance monitoring and lesson adjustment; zone of proximal development targeting; prevents topic-shopping through curated difficulty
  - **Learning Science Implementation**: Mastery-based progression (90%+ requirement); cognitive load theory application; spaced repetition for retention; multimodal support (video, audio, text, voice reading); analyzes accuracy and speed
  - **Technology Stack and Tools**: "Ever-evolving mix" of built and bought apps; third-party tools (Khan Academy, Grammarly, Newsela); custom-built tools (Alpha Math); vision models analyzing work patterns; AI-powered curriculum recommendation; personalized lesson planning from learning rate data
  - **Platform Evolution and Guardrails**: Significant improvements post-2022 when AI integration deepened; early apps allowed student circumvention; current systems provide guardrails; vision model analysis informs coaching interventions
- **Source**: research/model.md lines 78-118
- **Rationale**: Provides depth while maintaining scannable structure

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating AI integration in practice
- **Examples to Include** (3 required):
  - **Adaptive Lesson Sequencing**: How AI adjusts difficulty based on student performance; knowledge graph identifies gaps; targeted practice generated; student advances only after 90%+ mastery
  - **Knowledge Graph in Action**: AI tracks student's mastery across concepts; combines performance data with interests; generates personalized content; maintains optimal challenge level
  - **Multimodal Support Example**: How AI provides video explanation, audio narration, written text, and voice reading options based on student needs and preferences
- **Source**: research/model.md lines 78-118
- **Rationale**: Grounds abstract technical description with concrete applications

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents (even if not yet created)
- **Links**:
  - Educational Philosophy (Spec 006) - Learning science principles AI implements
  - Two-Hour Learning Model (Spec 007) - Model structure AI enables
  - Human Instruction (Spec 009) - How guides use AI monitoring data
  - Daily Schedule (Spec 010) - When AI is used during the day
  - Organization Overview (Spec 002) - Organizational context
  - Leadership (Spec 004) - Joe Liemandt / Trilogy connection
- **Rationale**: Creates navigable documentation graph

#### FR1.7: FAQs Section
- **Requirement**: 5 Q&A pairs addressing common questions about AI integration
- **Required Questions**:
  - What AI platforms does Alpha School use for instruction?
  - How does Alpha's AI differ from chatbots like ChatGPT?
  - How does the AI personalize instruction for each student?
  - What third-party tools does Alpha integrate with its AI platforms?
  - How has Alpha's AI platform evolved since 2022?
- **Source**: research/model.md lines 78-118
- **Rationale**: Anticipates LLM queries and provides direct answers

#### FR1.8: Sources Section
- **Requirement**: All source citations with retrieval dates
- **Required Sources**:
  - alpha.school website
  - 2hourlearning.com
  - research/model.md (primary synthesis source)
  - Other sources cited in research file (Cognitive Revolution podcast, etc.)
- **Format**: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Rationale**: Maintains academic rigor and source traceability

#### FR1.9: Footer Metadata
- **Requirement**: Last updated and last verified dates
- **Format**:
  ```markdown
  ---
  *Last updated: YYYY-MM-DD*
  *Last verified: YYYY-MM-DD*
  ```
- **Rationale**: Helps LLMs assess information freshness

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All facts must trace to research/model.md lines 78-118
- **Verification**: Each claim should have corresponding line reference in research file
- **No Speculation**: Do not infer or create content beyond research findings
- **Rationale**: Maintains documentation trustworthiness and accuracy

#### FR2.2: Claims vs. Evidence Distinction
- **Requirement**: Distinguish Alpha School's claims from independently verified technical capabilities
- **Attribution Patterns**:
  - "Alpha School describes..." for platform capabilities
  - "According to Alpha materials..." for effectiveness claims
  - "Alpha's platforms enable..." for technical features
  - Direct quotes for specific characterizations (e.g., "NOT a chatbot like ChatGPT")
- **Critical Claims Requiring Attribution**:
  - Platform effectiveness at personalizing instruction - Self-reported
  - Vision monitoring capabilities - Not independently documented
  - "Prevents topic-shopping" claim - Alpha's characterization
  - Guardrails against circumvention - Alpha's claim of improvement
  - Post-2022 improvements - Based on Alpha's description
- **Rationale**: Prevents LLMs from stating unverified platform capabilities as objective facts

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note where technical information is incomplete
- **Known Gaps**:
  - Specific AI models/algorithms used not disclosed
  - Detailed technical architecture not available in public materials
  - Data privacy practices not detailed publicly
  - Platform effectiveness not independently verified
  - Vision model technical specifications not described
  - Knowledge graph implementation details not provided
- **Handling**: Include notes like "Alpha School describes its AI platforms as providing personalized instruction, though specific AI models and algorithms used are not disclosed in public materials"
- **Rationale**: Transparency about documentation limits maintains LLM trust

#### FR2.4: Neutral Presentation of Technology
- **Requirement**: Present AI integration without advocacy or critique
- **Approach**:
  - Document what Alpha School's platforms do based on their descriptions
  - Use neutral language: "Alpha's AI platforms enable..." not "Alpha's superior AI..."
  - Avoid editorial commentary on technology effectiveness or surveillance concerns
  - Present capabilities as Alpha describes them with appropriate attribution
- **Sensitive Topics**:
  - Vision monitoring: Present factually without editorializing on surveillance implications
  - Student circumvention prevention: Present as Alpha's described improvement
  - Chatbot comparison: Use Alpha's own characterization (NOT ChatGPT)
  - Platform effectiveness: Attribute clearly without validating claims
- **Rationale**: Documentation serves as reference, not technology marketing or privacy critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Consistent heading hierarchy for LLM parsing
- **Structure**: H1 (title) → H2 (major sections) → H3 (subsections only)
- **No H4 or Deeper**: Keep hierarchy flat for parseability
- **Section Order**:
  1. H1: AI Integration
  2. H2: Overview
  3. H2: Properties
  4. H2: Details
     - H3: Platform Architecture and Components
     - H3: Personalization and Adaptive Learning
     - H3: Learning Science Implementation
     - H3: Technology Stack and Tools
     - H3: Platform Evolution and Guardrails
  5. H2: Examples
     - H3: Adaptive Lesson Sequencing
     - H3: Knowledge Graph in Action
     - H3: Multimodal Support Example
  6. H2: Related
  7. H2: FAQs
  8. H2: Sources
- **Rationale**: Enables efficient LLM navigation and content extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table in GitHub Flavored Markdown
- **Format**: Consistent column alignment, clear delimiters
- **Example**:
  ```markdown
  | Property | Type | Description | Example |
  |----------|------|-------------|---------|
  | platform_names | array | Primary AI platforms used | ["Timeback", "Dash", "Incept"] |
  ```
- **Rationale**: Enables LLM structured data extraction

#### FR3.3: Example Formatting
- **Requirement**: Examples use clear H3 headings and structured format
- **Pattern**:
  ```markdown
  ### Adaptive Lesson Sequencing

  **Platform**: Timeback AI learning system
  **Mechanism**: Knowledge graph identifies student gaps, generates targeted practice
  **Outcome**: Student advances only after 90%+ mastery demonstrated
  ```
- **Rationale**: Clear delimiters help LLMs identify and extract examples

---

## Implementation Approach

### Single-Phase Execution

Following the pattern from Specs 002-007, documentation specs use a **single-phase workflow**:

**Phase 2.0: Write Documentation**
- No test foundation phase (this is documentation, not code)
- Direct writing of reference document
- Verification through review against template and research file

### Execution Steps

1. **Read Research File**: Read `research/model.md` lines 78-118 completely
2. **Read Dependencies**: Read `reference/model/educational-philosophy.md` (Spec 006) for context
3. **Create Output File**: Create `reference/model/ai-integration.md` with template skeleton
4. **Write Section by Section**: Follow FR1.1 through FR1.9 sequentially
5. **Quality Check**: Verify against FR2 (Content Quality Standards)—especially attribution of platform capabilities
6. **LLM Optimization Check**: Verify against FR3 (structure, tables, formatting)
7. **Update Status**: Mark Spec 008 as complete in roadmap.md, update progress.md, activity.log

---

## Success Criteria

### Automated Verification

These checks can be automated via scripts or CI/CD:

- [ ] `reference/model/ai-integration.md` file exists
- [ ] File follows valid Markdown syntax (no parsing errors)
- [ ] All required sections present:
  - [ ] `grep "^# AI Integration"` returns match
  - [ ] `grep "^## Overview"` returns match
  - [ ] `grep "^## Properties"` returns match
  - [ ] `grep "^## Details"` returns match
  - [ ] `grep "^## Examples"` returns match
  - [ ] `grep "^## Related"` returns match
  - [ ] `grep "^## FAQs"` returns match
  - [ ] `grep "^## Sources"` returns match
- [ ] Properties table has 9 required properties (grep count)
- [ ] All sources include retrieval dates (format: `Retrieved YYYY-MM-DD`)
- [ ] Footer includes "Last updated:" and "Last verified:" dates
- [ ] Roadmap.md shows Spec 008 status as "✅ Complete"
- [ ] Progress.md contains Spec 008 completion entry
- [ ] Activity.log contains Spec 008 completion entry

### Manual Verification

These checks require human review:

- [ ] One-sentence definition clearly captures AI integration concept
- [ ] Overview section is 2-3 paragraphs covering platforms, personalization, technology stack, evolution
- [ ] All facts in document trace to research/model.md lines 78-118
- [ ] Platform capabilities are properly attributed (e.g., "Alpha describes...", not stated as objective facts)
- [ ] "NOT a chatbot like ChatGPT" characterization is preserved from research
- [ ] Vision monitoring is presented factually without editorializing on surveillance concerns
- [ ] Information gaps are noted where relevant (specific AI models not disclosed, no independent verification)
- [ ] 5 FAQs address common AI integration questions with authoritative answers
- [ ] 3 Examples illustrate AI mechanisms concretely (adaptive sequencing, knowledge graph, multimodal support)
- [ ] Related links use correct relative paths to other specs
- [ ] Document tone is neutral (presents Alpha's AI integration without advocacy or critique)
- [ ] Professional quality suitable for LLM consumption

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Educational Philosophy**: Covered by Spec 006 (learning science foundations, why AI-based learning)
2. **Two-Hour Learning Model Structure**: Covered by Spec 007 (daily schedule, Pomodoro blocks, subject rotation)
3. **Human Guide Roles**: Covered by Spec 009 (how guides use AI monitoring data, guide responsibilities)
4. **Complete Daily Schedule**: Covered by Spec 010 (when AI is used during the day)
5. **Curriculum Content Details**: Covered by Specs 011-014 (what subjects AI delivers, grade levels)
6. **Outcomes Evidence Analysis**: Covered by Specs 015-018 (AI effectiveness evidence, limitations)

### Explicit Boundaries

- **Technology Implementation Only**: This document covers AI platforms and how they work, not philosophical justifications or model structure
- **Research-Based**: Content must trace to research/model.md lines 78-118; no new research
- **LLM-Optimized**: Written for machine parsing and extraction, not human marketing
- **No Speculation**: Information gaps remain gaps; do not infer technical details beyond research
- **Neutral Presentation**: Document Alpha's AI platforms without advocacy or critique
- **Attribution Required**: Platform capabilities and effectiveness claims must be attributed to Alpha, not stated as objective facts

---

## Design Decisions

### Decision 1: Single-Phase Documentation Workflow
**Rationale**: Documentation specs don't require test foundation (Phase X.0). Following pattern from Specs 002-007, all Phase 2 reference documentation uses single-phase execution: write documentation directly with verification through review.
**File Reference**: Spec 006 (lines 230-250), Spec 007 (lines 240-260) used single-phase successfully.

### Decision 2: 9 Properties Emphasizing Platform Architecture and Capabilities
**Rationale**: Properties table focuses on technical attributes (platform_names, instructional_approach, knowledge_modeling, technology_stack) rather than philosophical foundations (Spec 006) or model structure (Spec 007). This keeps Spec 008 focused on "what AI platforms do and how they work technically."
**File Reference**: research/model.md lines 78-118 provide platform details; Spec 006 and 007 established 8-9 property pattern.

### Decision 3: Five Details Subsections Covering AI Integration Comprehensively
**Rationale**: Five subsections (Platform Architecture, Personalization, Learning Science Implementation, Technology Stack, Platform Evolution) provide comprehensive AI coverage without crossing into philosophy or model structure. This structure flows logically from architecture → personalization → learning science → tools → evolution.
**File Reference**: Spec 006 and 007 used 5 subsections successfully; research/model.md lines 78-118 provide content for these subsections.

### Decision 4: Explicit "NOT a Chatbot" Clarification
**Rationale**: research/model.md line 84 explicitly states Alpha's AI is "NOT a chatbot like ChatGPT" because chatbots "enable cheating." This is Alpha's deliberate positioning to distinguish their approach from general-purpose LLMs. FR1.3 requires including this distinction in the `instructional_approach` property and throughout the document.
**File Reference**: research/model.md line 84; this clarification appears critical to Alpha's messaging.

### Decision 5: Separate AI Implementation from Philosophy and Model Structure
**Rationale**: AI Integration (Spec 008) covers "how AI platforms work technically" while Educational Philosophy (Spec 006) covers "why AI-based learning is effective philosophically" and Two-Hour Learning Model (Spec 007) covers "how academics are structured daily." This prevents scope creep and creates clear documentation boundaries. Properties like `primary_function` describe what AI does ("tutor and coach"), not why it's effective (philosophy) or when it's used (model).
**File Reference**: Roadmap.md lines 77-84 shows clear separation; Spec 006 decision 5 (line 502), Spec 007 decision 5 (line 348) establish precedent.

### Decision 6: Vision Monitoring Handled Neutrally Without Surveillance Commentary
**Rationale**: research/model.md lines 106, 116 describe vision models analyzing student work patterns and behavior to inform coaching interventions. This could raise privacy/surveillance concerns, but documentation role is to present facts neutrally, not editorialize. FR2.4 requires neutral presentation: state what vision monitoring does based on Alpha's description without commentary on surveillance implications.
**File Reference**: Spec 005 (lines 165-176) established neutral handling of sensitive topics (charter rejections); apply same standard to vision monitoring.

### Decision 7: Technology Ownership Attribution (Trilogy Software)
**Rationale**: research/model.md line 111 identifies Trilogy Software (division of Trilogy Enterprises, headed by Joe Liemandt) as the platform owner. This organizational connection is relevant for LLMs understanding Alpha's technical capabilities and resources. Include `platform_owner` property and mention in Details section with link to Spec 004 (Leadership).
**File Reference**: research/model.md line 111; Spec 004 (Leadership) documents Joe Liemandt's role.

---

## Related

- **Dependency**: [Spec 001b: Research Model Domain](../001b-research-model/spec.md) - Research source
- **Dependency**: [Spec 006: Educational Philosophy](../006-model-educational-philosophy/spec.md) - Learning science foundations AI implements
- **Sibling**: [Spec 007: Two-Hour Learning Model](../007-two-hour-learning/spec.md) - Model structure AI enables
- **Sibling**: [Spec 009: Human Instruction](../009-human-instruction/spec.md) - How guides use AI monitoring data
- **Sibling**: [Spec 010: Daily Schedule](../010-daily-schedule/spec.md) - When AI is used during the day
- **Cross-Reference**: [Spec 002: Organization Overview](../002-organization-overview/spec.md) - Organizational context
- **Cross-Reference**: [Spec 004: Leadership](../004-organization-leadership/spec.md) - Joe Liemandt / Trilogy connection
- **Consumer Specs**: Spec 024 (Parent Guide), Spec 025 (Educator Guide)

---

*Last Updated: 2026-01-20*
