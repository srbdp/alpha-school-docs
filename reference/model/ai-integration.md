# AI Integration

> Alpha School integrates AI platforms (Timeback, Dash, Incept) to deliver personalized one-on-one instruction, adaptive learning through knowledge graphs, and real-time progress monitoring—explicitly designed as tutoring systems rather than chatbots.

## Overview

Alpha School uses three primary AI platforms for instruction: Timeback (learning platform), Dash (curriculum system), and Incept (vision monitoring). According to Alpha School, these platforms provide personalized one-on-one instruction through adaptive AI that functions as a tutor and coach—explicitly NOT chatbots like ChatGPT, which Alpha states "enable cheating." The AI generates personalized lessons and targeted feedback, maintains constant monitoring of student performance, and adjusts lessons in real-time based on individual progress.

The AI creates a "knowledge graph" of what each student knows, combining performance data with student interests to tailor content. Alpha's platforms enable mastery-based progression requiring 90%+ accuracy before advancing, apply cognitive load theory to prevent overwhelm, use spaced repetition for retention, and provide multimodal support (video, audio, written text, voice reading). The AI analyzes accuracy and speed through lessons, keeps students in optimal learning zones (zone of proximal development), and prevents topic-shopping by curating appropriate difficulty levels.

Alpha's technology approach combines an "ever-evolving mix of adaptive learning apps" that they both build and buy, integrating third-party tools (IXL, Khan Academy, Grammarly, Newsela) with custom-built platforms (Alpha Math, vision models, AI-powered curriculum recommendation systems). The platforms are owned by Trilogy Software, a division of Trilogy Enterprises headed by Joe Liemandt. According to Alpha materials, the AI platforms underwent significant improvements post-2022 when AI integration deepened—early adaptive apps allowed student circumvention, but current systems provide guardrails, with vision model analysis of student behavior now informing coaching interventions.

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| platform_names | array | Primary AI platforms used for instruction | ["Timeback", "Dash", "Incept"] |
| primary_function | string | Core AI role in student learning | "Tutor and coach providing personalized instruction" |
| instructional_approach | string | AI delivery method (explicitly NOT chatbots) | "Personalized one-on-one instruction through adaptive AI (NOT chatbots like ChatGPT)" |
| knowledge_modeling | string | How AI tracks and represents student understanding | "Creates 'knowledge graph' of what each student knows, combined with interests" |
| adaptivity_features | array | Real-time adjustment mechanisms | ["Real-time performance monitoring", "Lesson difficulty adjustment", "Zone of proximal development targeting", "Mastery-based progression (90%+)", "Gap identification and targeted practice"] |
| technology_stack | string | Platform development approach | "Ever-evolving mix of adaptive learning apps both built and bought" |
| third_party_tools | array | External platforms integrated into Alpha's AI system | ["IXL", "Khan Academy", "Grammarly", "Newsela"] |
| custom_tools | array | Alpha-built platforms and features | ["Alpha Math", "Vision models for work pattern analysis", "AI-powered curriculum recommendation", "Personalized lesson planning systems"] |
| platform_owner | string | Technology development entity | "Trilogy Software (division of Trilogy Enterprises, Joe Liemandt)" |

## Details

### Platform Architecture and Components

Alpha School's AI integration centers on three primary platforms: **Timeback** (the learning platform delivering instruction), **Dash** (the curriculum system managing content sequencing), and **Incept** (vision monitoring analyzing student work patterns). Alpha School explicitly clarifies that these platforms are NOT chatbots like ChatGPT—Alpha states that chatbots "enable cheating" and do not provide the structured learning approach required for mastery-based education.

The platforms function as a tutor and coach, generating personalized lessons and targeted feedback for each student. Students work on laptops during the two-hour morning academic block, with the AI platforms providing one-on-one instruction across all four core subjects (math, English, science, social studies). Unlike chatbot interfaces that respond to open-ended queries, Alpha's AI platforms curate specific lesson sequences, control difficulty progression, and require demonstrated mastery before advancement—creating guardrails that prevent students from circumventing the learning process.

### Personalization and Adaptive Learning

Alpha's AI platforms create a "knowledge graph" tracking what each student knows across all concepts and subjects. This knowledge graph combines performance data (what the student has mastered, what gaps exist) with student interests (topics that engage the individual student) to generate personalized content that maintains both rigor and engagement.

The AI provides constant real-time monitoring of student performance, adjusting lessons dynamically as students work through material. According to Alpha materials, the platforms keep students in their optimal learning zones—targeting the "zone of proximal development" where material is appropriately challenging without being overwhelming. The AI prevents topic-shopping (students avoiding difficult material) by curating appropriate difficulty levels based on demonstrated capability.

The platforms analyze both accuracy and speed as students progress through lessons, identifying patterns that indicate mastery, confusion, or gaps. This continuous assessment enables the AI to generate targeted practice on weak areas while allowing students to advance quickly through material they grasp readily. Alpha describes this personalization as creating individualized learning paths for each student rather than one-size-fits-all instruction.

### Learning Science Implementation

Alpha's AI platforms implement mastery-based progression requiring students to demonstrate 90%+ accuracy before advancing to new material—significantly higher than traditional schooling's 70% passing threshold. When students score below the mastery threshold, the AI identifies specific knowledge gaps and provides targeted practice until solid understanding is achieved, preventing the cumulative deficits that Alpha characterizes as common in traditional calendar-based progression.

The platforms apply cognitive load theory to manage instructional complexity, avoiding overwhelming students while maintaining productive challenge. According to Alpha materials, the AI adjusts the number and difficulty of concepts presented based on individual student capacity, ensuring foundational understanding before introducing additional complexity.

The AI uses spaced repetition for retention, revisiting previously mastered concepts at strategic intervals to reinforce long-term memory. Alpha's platforms provide multimodal support—offering video explanations, audio narration, written text, and voice reading options—to accommodate diverse learning preferences and accessibility needs. This multimodal approach enables students to access content through their preferred modality while the AI maintains consistent mastery standards across all presentation formats.

### Technology Stack and Tools

Alpha School describes its technology approach as an "ever-evolving mix of adaptive learning apps" that combine both built and bought platforms. The school integrates established third-party educational tools—including IXL (adaptive practice), Khan Academy (instructional videos and exercises), Grammarly (writing feedback), and Newsela (reading comprehension)—into its AI-powered curriculum delivery system.

Alpha has also developed custom-built tools specific to its educational model. These include **Alpha Math** (a proprietary mathematics platform), **vision models** that analyze student work patterns and behavior to inform coaching interventions, **AI-powered curriculum recommendation systems** that suggest optimal content sequencing, and **personalized lesson planning systems** that generate individualized daily schedules based on each student's learning rate data.

The technology platforms are owned by **Trilogy Software**, a division of Trilogy Enterprises. Trilogy Enterprises is headed by Joe Liemandt, who also serves as Principal and Founder of Alpha School. This organizational structure positions Alpha School's AI development within a broader enterprise software context, with significant technical resources available for platform evolution. Though specific AI models, algorithms, and detailed technical architecture are not disclosed in public materials, Alpha characterizes its platforms as representing substantial investment in educational technology infrastructure.

### Platform Evolution and Guardrails

According to Alpha School, the AI platforms underwent significant improvements post-2022 when the organization deepened its AI integration. Alpha describes early versions of its adaptive learning apps as allowing student circumvention—students could find ways to work around the system or game the platform to advance without genuine mastery. Current platforms, Alpha reports, provide guardrails that prevent such circumvention strategies and maintain the integrity of mastery-based progression.

Vision model technology now plays a role in Alpha's AI integration, analyzing student behavior and work patterns during learning sessions. According to Alpha materials, this vision analysis informs coaching interventions—enabling human guides to identify when students are struggling, disengaged, or attempting to circumvent the learning process. While specific technical specifications of the vision models are not described in public materials, Alpha positions this monitoring capability as enhancing both personalization and accountability within the learning environment.

## Examples

### Adaptive Lesson Sequencing

**Platform**: Timeback AI learning system

**Initial Assessment**: Student attempts a new math concept (e.g., multiplying fractions) and scores 65% on initial practice problems

**Knowledge Graph Analysis**: AI identifies specific gaps in prerequisite knowledge (student struggles with finding common denominators but understands numerator multiplication)

**Targeted Practice**: AI generates personalized practice problems focusing specifically on common denominators, providing immediate feedback on each attempt

**Real-Time Adjustment**: As student demonstrates improved understanding (accuracy rising from 65% to 75% to 85%), AI gradually increases problem complexity

**Mastery Requirement**: Student must demonstrate 90%+ accuracy on multiplying fractions before the AI allows advancement to dividing fractions

**Outcome**: Student achieves solid foundational understanding of multiplication before moving forward, preventing knowledge gaps that would compound in subsequent topics (division, complex fractions, algebraic fractions)

### Knowledge Graph in Action

**Platform**: Dash curriculum system

**Data Collection**: AI tracks student's mastery status across all math concepts—student has mastered addition, subtraction, basic multiplication, but shows gaps in division and fractions

**Interest Integration**: Student profile indicates strong interest in soccer (parent-provided interest data or student-selected topics)

**Content Generation**: When teaching percentages, AI generates word problems using soccer scenarios: "If a soccer team wins 65% of their games and plays 20 matches, how many games did they win?"

**Zone of Proximal Development**: AI ensures percentage problems are appropriately challenging—building on mastered multiplication while avoiding unmastered fraction concepts that would cause frustration

**Prevents Topic-Shopping**: AI curates difficulty levels based on demonstrated capability, preventing student from skipping to easier topics or avoiding challenging material

**Outcome**: Personalized content maintains optimal challenge (engaging through soccer context) while ensuring rigorous mastery (90%+ accuracy requirement maintained regardless of content theme)

### Multimodal Support Example

**Platform**: Timeback learning platform

**Student Need**: Student with dyslexia struggles with reading comprehension but demonstrates strong auditory processing and verbal reasoning

**Multimodal Options**: For a science lesson on photosynthesis, AI provides: video animation showing the process, audio narration explaining each step, written text describing the concept, and voice reading option for all text content

**Adaptation**: Student selects audio narration + video animation combination, accessing content through preferred modalities

**Accessibility**: Accommodates learning differences and accessibility needs while maintaining identical learning objectives and mastery standards

**Learning Science**: Cognitive load theory informs presentation—video + audio reduces reading burden while maintaining conceptual rigor

**Outcome**: Student comprehends photosynthesis concept and demonstrates 90%+ mastery on assessments, achieving standard through accessible presentation format

## Related

- [Educational Philosophy](./educational-philosophy.md) - Learning science principles AI implements
- [Two-Hour Learning Model](./two-hour-learning.md) - Model structure AI enables
- [Human Instruction](./human-instruction.md) - How guides use AI monitoring data
- [Daily Schedule](./daily-schedule.md) - When AI is used during the day
- [Organization Overview](../organization/overview.md) - Organizational context
- [Leadership](../organization/leadership.md) - Joe Liemandt / Trilogy connection

## FAQs

**Q: What AI platforms does Alpha School use for instruction?**

A: Alpha School uses three primary AI platforms: Timeback (the learning platform delivering personalized instruction), Dash (the curriculum system managing content sequencing), and Incept (vision monitoring analyzing student work patterns). These platforms are owned by Trilogy Software, a division of Trilogy Enterprises headed by Joe Liemandt. The platforms function as tutors and coaches, providing one-on-one adaptive instruction across all core academic subjects during the two-hour morning academic block.

**Q: How does Alpha's AI differ from chatbots like ChatGPT?**

A: Alpha School explicitly states its AI platforms are NOT chatbots like ChatGPT, characterizing chatbots as tools that "enable cheating" and provide open-ended responses rather than structured learning. Unlike chatbots that respond to any query, Alpha's AI platforms curate specific lesson sequences, control difficulty progression based on demonstrated mastery, and require 90%+ accuracy before allowing advancement. The platforms create guardrails preventing students from circumventing the learning process—students cannot skip material, avoid challenging topics, or advance without genuine understanding. Alpha positions its AI as structured tutoring systems rather than conversational interfaces.

**Q: How does the AI personalize instruction for each student?**

A: Alpha's AI creates a "knowledge graph" tracking what each student knows across all concepts and subjects, combining performance data with student interests to generate personalized content. The platforms provide constant real-time monitoring of student performance, adjusting lesson difficulty dynamically. According to Alpha materials, the AI keeps students in their optimal learning zones (zone of proximal development)—where material is appropriately challenging without being overwhelming. The AI analyzes both accuracy and speed, identifies knowledge gaps, generates targeted practice on weak areas, and prevents topic-shopping by curating appropriate difficulty levels based on demonstrated capability.

**Q: What third-party tools does Alpha integrate with its AI platforms?**

A: Alpha School integrates established third-party educational tools into its AI-powered curriculum delivery system, including IXL (adaptive practice), Khan Academy (instructional videos and exercises), Grammarly (writing feedback), and Newsela (reading comprehension). Alpha describes this as an "ever-evolving mix of adaptive learning apps" that combines both built and bought platforms—leveraging existing proven tools while developing proprietary systems (Alpha Math, vision models, AI-powered curriculum recommendation, personalized lesson planning) specific to its educational model.

**Q: How has Alpha's AI platform evolved since 2022?**

A: According to Alpha School, the AI platforms underwent significant improvements post-2022 when the organization deepened its AI integration. Alpha describes early versions of its adaptive learning apps as allowing student circumvention—students could find ways to work around the system or game the platform. Current platforms, Alpha reports, provide guardrails that prevent such circumvention strategies. Vision model technology now analyzes student behavior and work patterns during learning sessions, with this analysis informing coaching interventions by human guides. While specific technical specifications are not disclosed in public materials, Alpha characterizes the post-2022 evolution as substantially enhancing both personalization capabilities and system integrity.

## Sources

- [Alpha School Website](https://alpha.school) - Retrieved 2026-01-20
- [2 Hour Learning](https://2hourlearning.com) - Retrieved 2026-01-20
- [Cognitive Revolution Podcast: Alpha School Deep Dive](https://www.cognitiverevolution.ai) - Retrieved 2026-01-20
- [CBS News: AI in the Classroom - Alpha School Report](https://www.cbsnews.com/texas/news/ai-in-the-classroom-alpha-school-changes-the-way-students-learn/) - Retrieved 2026-01-20
- research/model.md - Primary synthesis source for this document (lines 78-118)

---

*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
