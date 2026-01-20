# Curriculum Subjects

> Seven core academic subjects (Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, Foreign Language) taught through AI-powered platforms during Alpha School's 2-hour morning block, aligned to Common Core K-8 and Advanced Placement high school standards.

## Overview

Alpha School teaches seven core academic subjects during its 2-hour morning block: Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, and Foreign Language. All subjects are delivered through AI-powered platforms that provide personalized, adaptive instruction tailored to each student's level and pace. Students must demonstrate mastery—achieving 90% accuracy according to alpha.school (or 80% accuracy per secondary sources)—before the system permits advancement to new material, eliminating the cumulative knowledge gaps common in traditional education where students can pass with 70%.

The subject delivery ecosystem centers on a platform called "Dash" (part of the broader "Time Back" system), which analyzes student performance and curates personalized learning pathways through a mix of proprietary Alpha School applications (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach) and third-party platforms (IXL, Khan Academy, Grammarly, Math Academy, Synthesis Tutor). Students receive immediate feedback on every question—when they answer incorrectly, the AI provides an explanation of the correct approach before moving forward. This ensures students learn from mistakes immediately rather than repeating them.

The curriculum aligns to Common Core standards for K-8 students and Advanced Placement curriculum for high school students (including AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, and Physics). Notably, history and geography are integrated into reading passages rather than taught as standalone disciplines, allowing students to develop literacy skills while simultaneously building historical and geographic knowledge. Alpha School claims that completing an entire grade level of material in a single subject requires only 20-30 hours of focused study through their AI tutoring system, compared to approximately 200 hours in traditional schooling—a 6-10x efficiency gain attributed to personalized instruction, mastery-based progression, immediate feedback, and spaced repetition.

## Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `core_subjects` | array | Seven academic subjects taught during morning block | `["Math", "English/Language Arts", "Science", "History/Social Studies", "Reading", "Writing", "Foreign Language"]` |
| `delivery_duration` | string | Daily time allocation for all academic subjects | `"2 hours"` (morning block) |
| `delivery_method` | string | Instructional delivery approach | `"AI-powered adaptive platforms with personalized instruction"` |
| `central_platform` | string | Platform orchestrating curriculum pathway | `"Dash"` (part of Time Back system) |
| `proprietary_platforms` | array | Alpha School-developed applications | `["Alpha Math", "AlphaRead", "AlphaWrite", "Teach Tales", "Fluency Coach"]` |
| `third_party_platforms` | array | External platforms integrated into curriculum | `["IXL", "Khan Academy", "Grammarly", "Math Academy", "Synthesis Tutor", "Amira", "Lalio"]` |
| `standards_k8` | string | K-8 curriculum standards alignment | `"Common Core"` |
| `standards_high_school` | string | High school curriculum standards alignment | `"Advanced Placement (AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, Physics)"` |
| `mastery_threshold` | string | Required proficiency level before advancement | `"90%+ accuracy (alpha.school) or 80%+ (secondary sources)"` — note discrepancy between official and reported thresholds |

## Details

### Subject-by-Subject Breakdown

| Subject | Primary Platform(s) | Description | Standards Coverage |
|---------|-------------------|-------------|-------------------|
| **Math** | IXL (new concepts), "Fast Math"/proprietary (speed/accuracy drills) | Adaptive problem sets teaching new mathematical concepts through IXL, followed by "Fast Math" platform for drilling speed and fluency on mastered material; immediate feedback on each question with explanations for incorrect answers | Common Core K-8; AP Calculus and Statistics (high school) |
| **English/Language Arts** | IXL (spelling/grammar) | Integrated language arts instruction covering grammar, spelling, and language mechanics; works in tandem with reading and writing components | Common Core K-8; AP English Language and Literature (high school) |
| **Reading** | AlphaRead (older students), Amira/Lalio (younger students) | Comprehension, fluency, and vocabulary development; history and geography content integrated into reading passages rather than taught separately; adaptive text selection based on student level | Common Core K-8; AP English Literature (high school) |
| **Writing** | AlphaWrite (proprietary) | Essay composition and creative writing instruction; noted as "needs improvement" in parent reviews and identified as weaker area requiring enhancement | Common Core K-8; AP English Language (high school) |
| **Science** | IXL (primary platform) | Inquiry-based learning with simulations and interactive problem sets; covers biology, chemistry, physics, earth science, and life science concepts | Common Core K-8; AP Biology, Chemistry, Physics (high school) |
| **History/Social Studies** | IXL (primary platform); integrated into reading passages | Social studies content including civics, geography, and historical analysis; notably, history and geography are NOT taught as separate standalone subjects but are embedded within reading comprehension passages | Common Core K-8 (integrated approach) |
| **Foreign Language** | IXL (primary platform) | Language acquisition and fluency development; availability and depth varies by campus and grade level | Varies by campus and grade level |

### Platform Ecosystem and Daily Flow

The central "Dash" dashboard serves as the curriculum orchestrator, analyzing each student's performance data and directing them to the appropriate application based on subject area, mastery level, and individual learning needs. At the start of each morning, students log into Dash, which presents their personalized daily lesson plan—typically 8-12 lessons called "minimums" that span multiple subjects. Dash determines which platform to use for each lesson based on real-time performance analytics and spaced repetition algorithms that bring back topics at calculated intervals to reinforce long-term retention.

Students work through 25-minute Pomodoro sessions with "Q breaks" (quick physical activity breaks) scheduled every 20-30 minutes to maintain focus and prevent cognitive fatigue. When a student completes a lesson with sufficient mastery, the interface "goes green" to provide immediate positive reinforcement. The system tracks accuracy, completion speed, and overall progress in real-time, allowing guides (human instructors) to monitor student performance and provide encouragement when needed. Parent dashboards provide detailed performance insights, including completion rates, problem accuracy, time spent per subject, and projected advancement timelines.

Each lesson follows a consistent structure: curated instructional videos introduce new concepts, followed by adaptive problem sets that provide immediate feedback. When students answer a question incorrectly, the AI doesn't simply mark it wrong—it provides an explanation of the correct approach and why the student's answer was incorrect, ensuring that learning happens at the point of error rather than allowing misconceptions to persist. Students must achieve the mastery threshold (90%+ or 80%+ depending on source) before the system allows progression to new material, and comprehensive grade-level mastery tests must be passed before advancing to the next grade.

### Standards Alignment and Subject Integration

Alpha School's curriculum for K-8 students follows Common Core standards across all subject areas, ensuring that content is grade-appropriate and aligned with national educational benchmarks. High school students follow Advanced Placement (AP) curriculum in preparation for college-level work, with AP courses available in Calculus, Statistics, English Language, English Literature, Biology, Chemistry, and Physics. This alignment allows students to take AP exams and earn college credit while still in high school.

A distinctive curricular choice is the integration of history and geography into reading passages rather than teaching these subjects as separate standalone disciplines. This approach has several pedagogical benefits: students simultaneously develop reading comprehension skills and build historical/geographic knowledge, reducing redundancy and increasing efficiency. Rather than spending separate time on history class and reading class, students encounter historical narratives, primary source documents, and geographic information within their reading comprehension exercises, allowing them to master multiple competencies simultaneously.

Foreign language availability and depth varies by campus and grade level, with some locations offering more robust language programs than others. The specific languages offered and the grade levels at which they're introduced depend on campus-specific resources and student demand.

## Examples

### Math Mastery Progression

A 4th-grade student working on fractions logs into Dash, which directs them to IXL for their morning math lesson. The student watches a short instructional video explaining how to add fractions with unlike denominators, then begins an adaptive problem set. On the third question, the student enters an incorrect answer. Instead of moving forward, the AI immediately provides a step-by-step explanation: "To add 1/3 + 1/4, we need a common denominator. The least common multiple of 3 and 4 is 12. So we convert 1/3 to 4/12 and 1/4 to 3/12, giving us 7/12." The student attempts similar problems, receiving immediate feedback on each, until they achieve 90%+ accuracy on the problem set. The interface "goes green" signaling mastery. Dash then directs the student to the "Fast Math" proprietary platform, which drills speed and fluency on the now-mastered fraction concepts. Only after demonstrating both accuracy and speed does the student advance to decimal operations—ensuring no knowledge gaps accumulate.

### Integrated History/Reading

A 5th-grade student receives their morning reading assignment through AlphaRead. Instead of a fictional story, the passage is a primary source document: an excerpt from the Declaration of Independence with age-appropriate explanatory context. After reading, the student answers comprehension questions that assess both reading skills ("What is the main argument presented in this passage?") and historical understanding ("Why did the colonists believe they had the right to separate from Britain?"). This dual-purpose approach eliminates the need for a separate history class while building both literacy competencies and historical knowledge. Throughout the year, the student encounters reading passages about the American Revolution, westward expansion, the Civil War, and other historical topics—building a comprehensive understanding of U.S. history entirely through the reading curriculum. History and geography content is embedded throughout, making learning more efficient by developing multiple competencies simultaneously.

### Platform Orchestration

A 7th-grade student logs into the "Dash" central platform at 8:00 AM to begin their 2-hour academic morning block. Dash analyzes the student's performance from the previous day and consults its spaced repetition schedule to determine what topics need reinforcement. The dashboard displays today's "minimums": 10 lessons across multiple subjects. The student clicks the first button labeled "Math Academy - Algebra Concepts" and is seamlessly taken to the Math Academy platform to learn about solving linear equations. After 25 minutes, a Q break notification appears—the student takes a 5-minute physical activity break. Returning to Dash, the next button directs them to IXL for a science lesson on photosynthesis. Then AlphaRead for a comprehension exercise featuring a passage about the water cycle (integrating both science and reading skills). All progress is tracked centrally by Dash, which adjusts tomorrow's lesson plan based on today's performance. By 10:00 AM, the student has moved seamlessly through six different applications—Math Academy, IXL (science), AlphaRead, IXL (grammar), Grammarly (writing), and IXL (foreign language)—without needing to manually track their own progress. Dash orchestrates the entire experience, ensuring optimal learning pathways and spaced repetition.

## Related

- [Curriculum Overview](./overview.md) - Overall curriculum philosophy and structure (Spec 011)
- [Educational Philosophy](../model/educational-philosophy.md) - Learning science principles underlying subject delivery (Spec 006)
- [Two-Hour Learning Model](../model/two-hour-learning.md) - Morning academic block structure (Spec 007)
- [AI Integration](../model/ai-integration.md) - How AI delivers subject instruction (Spec 008)
- [Daily Schedule](../model/daily-schedule.md) - When subjects are taught during the day (Spec 010)
- [Grade Levels](./grade-levels.md) - Subject progression across grade levels (Spec 013)
- [Assessments](./assessments.md) - How subject mastery is measured (Spec 014)

## FAQs

**Q: How many subjects are taught at Alpha School?**

A: Seven core academic subjects are taught during the 2-hour morning block: Math, English/Language Arts, Science, History/Social Studies, Reading, Writing, and Foreign Language. Notably, history and geography are integrated into reading passages rather than taught as standalone subjects, making the instruction more efficient by developing literacy skills and content knowledge simultaneously.

**Q: What platforms deliver each subject?**

A: Alpha uses a mix of proprietary platforms (Alpha Math, AlphaRead, AlphaWrite, Teach Tales, Fluency Coach) and third-party platforms (IXL, Khan Academy, Grammarly, Math Academy, Synthesis Tutor, Amira, Lalio). The central "Dash" platform orchestrates the student's pathway through these applications based on real-time performance analysis and learning needs. IXL is the primary platform for most subjects, while proprietary Alpha tools handle specific areas like reading and writing.

**Q: What curriculum standards does Alpha School follow?**

A: Alpha School follows Common Core curriculum for K-8 students across all subject areas, ensuring alignment with national educational benchmarks. High school students follow Advanced Placement (AP) curriculum, including AP Calculus, Statistics, English Language, English Literature, Biology, Chemistry, and Physics. This allows high school students to earn college credit through AP exams while still in school.

**Q: Why isn't history taught as a separate subject?**

A: History and geography content is integrated into reading passages rather than taught as standalone disciplines. This curricular design allows students to develop reading comprehension skills while simultaneously building historical and geographic knowledge, making learning more efficient. Instead of spending separate time on history class and reading class, students encounter historical narratives, primary sources, and geographic information within their reading comprehension exercises—mastering multiple competencies at once and eliminating redundancy.

**Q: How long does it take to complete a grade level in each subject?**

A: Alpha School claims that an entire grade level of material in one subject requires only 20-30 hours of focused study through their AI tutoring system, compared to approximately 200 hours in traditional schooling. This represents a 6-10x efficiency gain, which Alpha attributes to several factors: personalized instruction adapted to each student's exact level, immediate corrective feedback on every question, mastery-based progression that eliminates knowledge gaps, and spaced repetition algorithms that reinforce material at optimal intervals to maximize long-term retention.

## Sources

- [Alpha School Program Page](https://alpha.school/the-program/) - Retrieved 2026-01-20
- [Alpha School FAQ](https://alpha.school/faq/) - Retrieved 2026-01-20
- [Alpha School 2 Hour Learning Page](https://alpha.school/2-hour-learning/) - Retrieved 2026-01-20
- [CBS News - Alpha School Artificial Intelligence](https://www.cbsnews.com/news/alpha-school-artificial-intelligence/) - Retrieved 2026-01-20
- [FOX 7 Austin - Alpha School](https://www.fox7austin.com/news/alpha-school-two-hour-learning-ai-tutor-austin-texas) - Retrieved 2026-01-20
- [GenWise Substack - Alpha Educational Model](https://genwise.substack.com/p/the-alpha-school-educational-model) - Retrieved 2026-01-20
- [Modern Wisdom Podcast Transcript (MacKenzie Price)](https://singjupost.com/alpha-school-a-new-approach-to-education-mackenzie-price-transcript/) - Retrieved 2026-01-20
- [Cognitive Revolution Podcast](https://www.cognitiverevolution.ai/2-sigma-in-2-hours-how-alpha-schools-are-using-ai-to-revolutionize-education/) - Retrieved 2026-01-20
- [Astral Codex Ten - Alpha School Review](https://www.astralcodexten.com/p/your-review-alpha-school) - Retrieved 2026-01-20

---
*Last updated: 2026-01-20*
*Last verified: 2026-01-20*
