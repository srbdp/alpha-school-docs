# Spec 021: Locations Overview

**Status**: 📋 Planned
**Priority**: High
**Phase**: 2 (Reference Documentation)
**Dependencies**: Spec 001f (Research Locations Domain)
**Output**: `reference/locations/overview.md`
**Last Updated**: 2026-01-20

---

## Overview

Create API-style reference documentation that answers "Where is Alpha School located and what are the campus facilities?" for LLM consumption. This document synthesizes findings from `research/locations.md` into a structured, authoritative guide to Alpha School's 17 currently operating campuses across 8 states (Texas, Arizona, California, Florida, New York, Virginia, North Carolina), plus specialty schools (Texas Sports Academy) and expansion plans for Fall 2026—providing families, educators, and LLMs clear understanding of Alpha's geographic footprint, campus features, and growth trajectory.

### Scope

Transform research findings into a structured reference document covering:
- **Current Network**: 17 operating campuses across 8 states (6 Texas, 3 California, 3 Florida, 2 North Carolina, 1 each in Arizona, New York, Virginia)
- **Campus Details**: Specific addresses, grade levels served (varying from K-5 to K-12), tuition by location ($10,000-$75,000), contact information, facility features
- **Flagship Campus**: Austin (PreK-5) - founding location established 2016, 150+ students, Cognia accredited, Barton Hills neighborhood
- **Standard Features**: Universal campus characteristics (8:15 AM - 4:00 PM hours, AI-powered learning, 60-90 minutes outdoor play, life skills workshops)
- **Specialty Schools**: Texas Sports Academy locations (basketball, baseball, gymnastics, cheer) at $15,000 tuition with sport-specific training
- **Strategic Partnerships**: Guidepost Montessori partnership (July 2025) accelerating expansion, Higher Ground Education asset acquisition
- **Expansion Plans**: 5 announced Fall 2026 openings (The Woodlands TX, Dorado PR, Palo Alto CA, Santa Monica CA, Chicago IL) plus additional exploration targets
- **Information Gaps**: Enrollment capacity, square footage, complete facility descriptions, accreditation status for non-Austin campuses, transportation options

### Output File

`reference/locations/overview.md` - Structured Markdown following the Documentation Template (roadmap.md lines 136-173)

---

## Functional Requirements

### FR1: Document Structure

#### FR1.1: Header and Definition
- **Requirement**: Document must begin with "Locations Overview" as H1 and one-sentence definition in blockquote
- **Format**:
  ```markdown
  # Locations Overview

  > [One-sentence definition capturing Alpha School's 17 operating campuses across 8 states serving K-12 students (some PreK-12), headquartered in Austin TX with flagship campus established 2016, campus network spanning Texas (6 locations), California (3), Florida (3), North Carolina (2), plus Arizona, New York, Virginia; tuition varies by location ($10,000-$75,000/year), standard operations 8:15 AM - 4:00 PM with AI-powered learning model and 60-90 minutes daily outdoor play, specialty Texas Sports Academy schools at $15,000, expansion plans for Fall 2026 adding 5+ new campuses]
  ```
- **Source**: Synthesize from research/locations.md lines 34-405
- **Rationale**: Follows API-style documentation pattern established in Specs 002-020

#### FR1.2: Overview Section
- **Requirement**: 2-3 paragraph narrative explaining Alpha School's locations and campus network
- **Content Coverage**:
  - Paragraph 1: Alpha School operates 17 campuses across 8 states as of January 2026, headquartered in Austin, Texas under legal name Legacy of Education, Inc.; network spans Texas (6 campuses: Austin PreK-5, Austin 6-8, Austin High 9-12, Brownsville PreK-8, Fort Worth K-8, Plano K-5), Arizona (1 campus: Scottsdale K-8), California (3 campuses: Lake Forest K-5, San Francisco K-10, Santa Barbara K-12), Florida (3 campuses: Miami K-10, Palm Beach K-5, Tampa K-9), New York (1 campus: NYC K-8), Virginia (1 campus: Chantilly K-6), North Carolina (2 campuses: Charlotte K-6, Raleigh K-6); founding campus established 2016 in Austin's Barton Hills neighborhood currently serves 150+ students and holds Cognia accreditation; most recent opening Raleigh NC launched January 2026 with 25 students in inaugural class; grade levels served vary by campus from K-5 (Lake Forest, Palm Beach, Plano, Austin PreK-5) to full K-12 (Santa Barbara only location offering complete pathway); tuition ranges from $10,000/year (Brownsville, near SpaceX headquarters) to $75,000/year (San Francisco, described as city's most expensive private school); all campuses follow standardized operational model: 8:15 AM - 4:00 PM schedule, two-hour AI-powered personalized learning block, mastery-based progression, afternoon life skills workshops, minimum 60-90 minutes outdoor play daily, guides (mentors/coaches) rather than traditional teachers

  - Paragraph 2: Campus facilities and features vary by location but share core characteristics—Austin flagship campus (1201 Spyglass Dr) near MoPac and Zilker Park provides comprehensive facilities for over 150 students; Scottsdale campus (20624 N 76th St) features full basketball court, three playground structures, gaga pit, football field-sized open space near Greyhawk Park; Fort Worth location (3300 Bryant Irvin Rd) operates within CERA recreational facility accessing racquetball courts, gymnasium, expansive fields; Miami campus (8000 SW 56th St) near Tropical Park serves Palmetto Bay, Pinecrest, Coral Gables, Brickell areas; San Francisco campus (3741 Buchanan St) operates in Marina/Fort Mason area at former Guidepost Montessori facility opened August 2025; New York City campus (180 Maiden Lane) occupies prestigious Lower Manhattan building opened September 3, 2025; some campuses operate alongside or within existing facilities (Chantilly operates inside Guidepost Montessori location at 4550 Walney Road); contact information varies by campus with flagship Austin reachable at (512) 595-0801 / admissions.austin@alpha.school, Fort Worth at (817) 330-9327 / admissions.fortworth@alpha.school, Miami at (786) 864-0687 / admissions.miami@alpha.school, Scottsdale at (480) 253-9802 / admissions.scottsdale@alpha.school; Alpha also operates specialty schools under umbrella brand including GT School, Montessorium, NextGen Academy, Nova Academy, Texas Sports Academy, Waypoint Academy

  - Paragraph 3: Rapid expansion accelerated through strategic partnerships and acquisitions—July 2025 Alpha announced partnership with Guidepost Montessori opening K-3 elementary micro-schools in 9 new locations, fast-tracking 10 new K-8 campuses by December 2025 and reducing typical 1-2 year opening timeline; same month Alpha acquired key assets from Higher Ground Education (former Guidepost parent company) including proprietary elementary materials and rights to select high-value campuses from closed Guidepost schools, accelerating growth by approximately 2 years; Texas Sports Academy operates sport-specific schools at $15,000/year tuition including AIE Elite Prep basketball (Round Rock), The Bennett School baseball (Houston), with January 2026 openings for baseball (Pearland), basketball (Houston), gymnastics (San Antonio), and Fall 2026 cheer program (Lago Vista); expansion plans for Fall 2026 include The Woodlands TX ($40,000), Dorado Puerto Rico ($50,000), Palo Alto CA (TBD), Santa Monica CA (TBD), Chicago IL (TBD), with additional exploration targets in Aspen CO, Houston TX, Orlando FL, Phoenix AZ, East Bay CA; INFORMATION GAPS: specific enrollment capacity per campus not disclosed (only Austin confirms 150+), square footage/facility capacity details unavailable, accreditation status unknown for non-Austin campuses, transportation options not detailed except Fort Worth carpool coordination mention, before/after school care availability not documented, waitlist information not public, historical opening dates for older campuses beyond Austin not specified
- **Source**: research/locations.md lines 34-405
- **Rationale**: Provides LLMs comprehensive overview of campus network with geographic distribution, facility characteristics, and transparency about growth strategy and information limitations

#### FR1.3: Properties Table
- **Requirement**: Structured table presenting key location network attributes
- **Format**: API-style properties table with columns: Property | Type | Description | Example
- **Required Properties** (10 properties):
  - `total_campuses_operating` (number) - Currently operating Alpha School locations
  - `states_served` (number) - Number of U.S. states with Alpha campuses
  - `headquarters_location` (string) - Corporate headquarters city and state
  - `founding_campus_year` (number) - Year original Alpha School established
  - `grade_levels_range` (string) - Span of grade levels across network
  - `tuition_range` (string) - Minimum and maximum annual tuition across locations
  - `standard_operating_hours` (string) - Universal campus daily schedule
  - `outdoor_play_minimum` (string) - Required daily outdoor time
  - `student_guide_ratio` (string) - Staffing ratio across network
  - `expansion_campuses_planned` (number) - Announced Fall 2026 new locations
- **Source**: research/locations.md lines 34-270
- **Rationale**: Enables LLMs to quickly extract structured facts about Alpha's geographic footprint and operational standards

#### FR1.4: Details Section
- **Requirement**: Expanded explanation organized by subsections
- **Subsections** (6 required):
  - **Current Campus Network by State**: **Texas (6 campuses)**: Austin PreK-5 flagship (1201 Spyglass Dr, Austin 78746, $40,000/year, PreK-5, contact: 512-595-0801 / admissions.austin@alpha.school, 150+ students, Year 11 operation, Cognia accredited, Barton Hills near MoPac/Zilker); Austin 6-8 (201 Colorado St, Austin 78701, $40,000/year, grades 6-8, downtown location); Austin High 9-12 (201 Colorado St, Austin 78701, $40,000/year, grades 9-12, high school program); Brownsville (591 N. Central Ave, Brownsville 78521, $10,000/year, PreK-8, lowest tuition in network); Fort Worth (3300 Bryant Irvin Rd, Fort Worth 76109, $40,000/year, K-8, contact: 817-330-9327 / admissions.fortworth@alpha.school, within CERA facility, opened Fall 2025, serves Aledo/Tanglewood/Ridglea/Arlington/Keller/Southlake/Colleyville/Richardson/DFW metroplex); Plano (7220 Independence Pkwy, Plano 75025, $50,000/year, K-5, Dallas area); **Arizona (1 campus)**: Scottsdale (20624 N 76th St, Scottsdale 85255, $40,000/year, K-8, contact: 480-253-9802 / admissions.scottsdale@alpha.school, near Greyhawk Park, full basketball court, 3 playgrounds, gaga pit, serves North Scottsdale ZIPs 85255/85260/85262/85254); **California (3 campuses)**: Lake Forest Orange County (26462 Towne Centre Dr, Lake Forest 92610, $50,000/year, K-5, from Guidepost partnership); San Francisco (3741 Buchanan St, San Francisco 94123, $75,000/year, K-10, opened Aug 2025, former Guidepost Fort Mason facility, 14th campus, highest tuition, "most expensive private school in city"); Santa Barbara (27 East Cota St, Santa Barbara 93101, $50,000/year, K-12, only campus with full K-12); **Florida (3 campuses)**: Miami (8000 SW 56th St, Miami 33155, $50,000/year, K-10, contact: 786-864-0687 / admissions.miami@alpha.school, opened Fall 2024, near Tropical Park, GPS: 25.716909, -80.325357, serves Palmetto Bay/Pinecrest/Coral Gables/Brickell, leadership: Joshua Lezmi Head Guide, Allyson Dudich Dean of Parents); Palm Beach (353 Hiatt Dr, Palm Beach Gardens 33418, $50,000/year, K-5, from Guidepost partnership); Tampa (5252 Ehrlich Road, Tampa 33624, $40,000/year, K-9); **New York (1 campus)**: New York City (180 Maiden Lane, New York 10038, $65,000/year, K-8, Lower Manhattan, opened Sept 3, 2025); **Virginia (1 campus)**: Chantilly DC area (4550 Walney Road, Chantilly 20151, $65,000/year, K-6, operates alongside Guidepost Montessori, rolling admission); **North Carolina (2 campuses)**: Charlotte (4801 Prosperity Church Rd, Charlotte 28269, $45,000/year, K-6, from Guidepost partnership); Raleigh (12600 Spruce Tree Way, Raleigh 27614, $45,000/year, K-6 planned though K-5 at launch, opened Jan 2026, North Raleigh, 25 students initial class, annual expansion with 1-2 additional grades)

  - **Standard Campus Features and Operations**: All Alpha School campuses follow consistent operational model regardless of location—**Operating Hours**: 8:15 AM - 4:00 PM daily; **Drop-off Window**: 8:15-8:30 AM; **Pick-up Window**: 3:30-4:00 PM; **Academic Model**: Two-hour AI-powered personalized learning block using mastery-based progression where students advance upon demonstrating 90%+ competency; **Afternoon Programming**: Life skills workshops including leadership, teamwork, entrepreneurship, financial literacy, public speaking, coding, science labs; **Outdoor Play**: Minimum 60-90 minutes daily (weather permitting) emphasizing physical activity and unstructured play; **Staffing Model**: "Guides" who act as mentors/coaches rather than traditional lecture-based teachers, maintaining 5:1 student-guide ratio; **Pedagogical Approach**: No homework, no traditional letter/number grades, capability-based levels rather than grade-based classes; **All-Inclusive Tuition**: Covers trips (examples: Formula 1 events, Poland travel), supplies, enrichment activities with "no additional fundraising ever" policy distinguishing from traditional schools with add-on fees; **Remote Option**: Alpha Anywhere provides online/remote learning for families not near physical campus; campus-specific leadership typically includes Head Guide and Dean of Parents roles managing student instruction and family community integration respectively

  - **Flagship Austin Campus Details**: Original Alpha School campus established 2016 at 1201 Spyglass Drive, Austin TX 78746 serving PreK-5 students represents founding location and organizational prototype—**Enrollment**: Over 150 students currently enrolled; **Operational History**: Year 11 (2026 marking 10 years since 2016 establishment, though MacKenzie Price started concept 2014); **Accreditation**: Cognia accredited (only campus with confirmed accreditation status in public materials); **Location Context**: Barton Hills neighborhood near MoPac highway and Zilker Park providing access to Austin outdoor recreation; **Contact**: (512) 595-0801 primary, admissions.austin@alpha.school for enrollment inquiries; **Hours**: 8:15 AM - 4:00 PM (drop-off 8:15-8:30 AM, pick-up 3:30-4:00 PM); **Academic Features**: Two-hour AI-powered personalized learning block, mastery-based progression system, ranked in "top 1% nationally" for academic performance (per Alpha materials); **Afternoon Programming**: Life skills workshops covering leadership, teamwork, entrepreneurship, financial literacy; **Physical Activity**: Minimum 1 hour 15 minutes outdoor play daily; **Tuition**: $40,000/year (2024-2025); **Additional Austin Locations**: Alpha operates three Austin campuses—PreK-5 flagship (Spyglass), 6-8 middle school (201 Colorado St downtown), 9-12 Alpha High (same downtown address); downtown campuses share 201 Colorado St address suggesting vertical grade-level separation within facility; Austin market positioning reflects mid-range tuition ($40,000) between Brownsville low-cost model ($10,000) and San Francisco premium positioning ($75,000)

  - **Specialty Schools and Programs**: Alpha School operates multiple specialty schools under umbrella organizational structure—**Texas Sports Academy**: Sport-specific schools combining Alpha's two-hour learning model with intensive athletic training at $15,000/year tuition; **Currently Open**: AIE Elite Prep basketball in Round Rock TX (2400 Chisholm Trail Road, grades 5-8), The Bennett School baseball in Houston TX (2626 W. Sam Houston Parkway N., grades 7-10); **Opened January 2026**: Baseball in Pearland TX (18500 Pearland Sites Road Bldg. D, grades 4-8), Basketball in Houston TX (11275 S. Sam Houston Parkway W., grades 4-8), Gymnastics in San Antonio TX (14242 Cross Canyon, grades 4-8); **Opening Fall 2026**: Cheer in Lago Vista TX (grades 5-8, specific address pending); **Financial Context**: Texas ESA (Education Savings Account) program may provide approximately $10,300 per student toward $15,000 tuition, reducing family cost to ~$4,700/year; **Other Specialty Schools**: GT School ($25,000/year tuition documented for 2024-2025), Montessorium, NextGen Academy, Nova Academy, Waypoint Academy—specific details, locations, and grade levels for these programs not documented in public materials; **Program Philosophy**: Specialty schools maintain Alpha's core two-hour AI learning block while tailoring afternoon programming to sport or focus area; Texas Sports Academy model enables student-athletes to accelerate academics in morning block while dedicating afternoon hours to elite-level sport training

  - **Strategic Growth and Partnerships**: Alpha School's rapid 2025-2026 expansion enabled through strategic partnerships and acquisitions rather than organic campus-by-campus development—**Guidepost Montessori Partnership (July 2025)**: Strategic partnership accelerating expansion by opening K-3 elementary micro-schools in 9 new locations, dramatically increasing Alpha's reach while reducing typical 1-2 year new school opening timeline; partnership targeted 10 new K-8 campuses by December 2025; locations from partnership: Charlotte NC, Raleigh NC, Folsom CA, Palm Beach FL, Chantilly VA, Lake Forest CA, Austin TX, Plano TX; partnership enables Alpha to leverage existing Guidepost facilities and communities for faster market entry; **Higher Ground Education Asset Acquisition (July 2025)**: Alpha agreed to acquire key assets from Higher Ground Education (former parent company of Guidepost Montessori) including proprietary elementary educational materials and rights to select high-value campuses from closed Guidepost schools; acquisition accelerates growth timeline by approximately 2 years per Alpha; first campus from acquisition: San Francisco Marina location opened August 2025; **Media Contact**: Anna Davlantes, Director of Communications (anna@alpha.school, 312-488-3472) for press inquiries; **Growth Impact**: Dual July 2025 announcements transformed Alpha from slower organic growth to rapid multi-state expansion, adding 8+ campuses in 6-month period (August 2025-January 2026); strategy leverages distressed Guidepost assets during Higher Ground Education difficulties, positioning Alpha as consolidator in premium private education space

  - **Expansion Plans and Future Locations**: Alpha School announced aggressive expansion targets for 2026 and beyond—**Confirmed Fall 2026 Openings**: The Woodlands TX ($40,000 tuition, Houston area); Dorado Puerto Rico ($50,000 tuition); Palo Alto CA (tuition TBD, Bay Area expansion due to demand); Santa Monica CA (tuition TBD); Chicago IL (tuition TBD); **Additional Exploration Targets**: Aspen CO, Houston TX (additional to The Woodlands), Orlando FL, Phoenix AZ, East Bay CA (in addition to Palo Alto, suggesting dual Bay Area expansion); **Bay Area Context**: ABC7 San Francisco reported Alpha "looking to expand" in Palo Alto and East Bay due to "growing demand" following San Francisco August 2025 opening; **Expansion Strategy**: Geographic diversification across high-income markets (Palo Alto, Santa Monica, Chicago, Aspen) and newer markets (Puerto Rico, Orlando, Phoenix); tuition positioning likely to follow local market strategy: premium markets command $50,000-$75,000 (San Francisco model), mid-tier markets $40,000-$45,000 (Austin/Charlotte model), strategic low-cost entries $10,000-$15,000 (Brownsville/Texas Sports Academy model); **Timeline Variability**: "Exploring" targets (Aspen, Houston, Orlando, Phoenix, East Bay) lack confirmed opening dates or tuition—likely in planning/site selection phase vs. confirmed Fall 2026 openings; **Campus Count Trajectory**: 17 operating campuses (January 2026) → 22+ campuses (Fall 2026) → unknown 2027 targets; growth rate suggests doubling network size annually through partnership model; **Community-Driven Expansion**: Website mentions "Bring Alpha To Your City" suggesting interest-driven expansion beyond announced targets; INFORMATION GAPS: specific opening dates within "Fall 2026" timeframe, exact addresses for announced campuses, leadership/staffing plans for new locations, enrollment capacity targets, facility specifications
- **Source**: research/locations.md lines 34-405
- **Rationale**: Provides comprehensive documentation of campus network organized by geographic distribution and operational categories with appropriate transparency about expansion plans and information gaps

#### FR1.5: Examples Section
- **Requirement**: Concrete examples illustrating location scenarios
- **Examples to Include** (3 required):
  - **Example 1: Austin Flagship Campus Experience**: Family lives in South Austin near Barton Springs area and explores Alpha School for their 3rd grade child. They visit Austin flagship campus at 1201 Spyglass Drive—10 minute drive from their home via MoPac. Campus located in Barton Hills neighborhood near Zilker Park provides familiar Austin environment. Family observes 150+ students engaged in two-hour morning AI learning block with guides circulating to provide support. Campus features outdoor play areas where students spend minimum 1 hour 15 minutes daily. Family learns campus established 2016 (Year 11 of operation) and holds Cognia accreditation. Tuition quoted at $40,000/year for 2024-2025 academic year—all-inclusive covering field trips, supplies, enrichment with no additional fundraising requests. Hours align with family's work schedule: drop-off 8:15-8:30 AM, pick-up 3:30-4:00 PM. Family contacts admissions at (512) 595-0801 or admissions.austin@alpha.school to schedule Shadow Day. INFORMATION STATUS: Austin flagship details documented from alpha.school/austin page and research sources; 150+ enrollment confirmed in public materials; Cognia accreditation verified; tuition from published PDF; campus count (3 Austin locations: PreK-5, 6-8, 9-12) indicates vertical progression pathway within Austin market enabling students to remain in Alpha network through high school graduation.

  - **Example 2: Geographic Expansion Comparison - Brownsville vs. San Francisco**: Alpha School operates campuses in Brownsville TX and San Francisco CA illustrating extreme tuition variance and market positioning strategy. **Brownsville Campus**: 591 N. Central Ave, Brownsville TX 78521, serves PreK-8 students at $10,000/year tuition (lowest in network); located near SpaceX headquarters in border region with lower cost of living; $10,000 tuition positions Alpha competitively against local private schools while remaining accessible to families with ESA vouchers or financial aid; campus demonstrates Alpha's willingness to serve lower-income markets with adjusted pricing. **San Francisco Campus**: 3741 Buchanan St, San Francisco CA 94123 (Marina/Fort Mason area), serves K-10 students at $75,000/year tuition (highest in network); opened August 2025 as 14th Alpha campus in former Guidepost Montessori Fort Mason facility acquired through Higher Ground Education asset deal; SF Standard described as "most expensive private school in city" exceeding elite institutions like Convent & Stuart Hall (~$50,000/year); $75,000 tuition reflects San Francisco premium market positioning and high operational costs; both campuses follow identical operational model (8:15 AM - 4:00 PM, two-hour AI learning, 60-90 minutes outdoor play, life skills workshops, guides vs. teachers, no homework) despite $65,000 tuition difference; tuition variance reflects local market conditions and family willingness-to-pay rather than differentiated educational product. INFORMATION STATUS: Tuition figures from research sources; Brownsville near SpaceX detail from research/locations.md; San Francisco opening date and facility history from PR Newswire and news sources; SF Standard comparison to Convent & Stuart Hall documented; identical operational model across network confirmed in standard features documentation.

  - **Example 3: Texas Sports Academy Multi-Location Model**: Family in Houston area has 6th grade child excelling in competitive baseball seeking academic program compatible with intensive training schedule. Family explores The Bennett School (Texas Sports Academy baseball campus) at 2626 W. Sam Houston Parkway N., Houston TX 77043 serving grades 7-10. School combines Alpha's two-hour AI-powered learning block with afternoon baseball-specific training enabling student-athletes to accelerate academics while dedicating significant time to sport development. Tuition quoted at $15,000/year—significantly lower than standard Alpha campuses ($40,000-$75,000) reflecting targeted market and specialized focus. Family learns Texas ESA program may provide approximately $10,300 per student reducing family cost to ~$4,700/year. Child currently 6th grade so family plans enrollment for following year when entering 7th grade (minimum grade for Bennett School). Family also considers newly opened January 2026 baseball campus in Pearland TX (18500 Pearland Sites Road, grades 4-8) offering earlier entry point. Model enables child to complete core academics in morning two-hour block (reading, math, language, science, social studies via AI platform with mastery-based progression) then transition to baseball training, strength/conditioning, game strategy in afternoon hours. If child later decides to pursue different path or reduce sport intensity, can transfer to standard Alpha campus (Houston area has multiple Alpha/specialty locations). Texas Sports Academy network includes basketball (Round Rock, Houston locations), gymnastics (San Antonio), cheer (Lago Vista Fall 2026) providing sport-specific pathways across Texas markets. INFORMATION STATUS: The Bennett School details from research/locations.md citing Community Impact article; $15,000 tuition and grade levels documented; Texas ESA ~$10,300 figure from research sources; January 2026 Pearland opening from research; two-hour learning block + sport training model inferred from Alpha's standard academic structure applied to specialty school context; transfer flexibility between Alpha campuses represents logical operational capability though not explicitly documented in public materials.
- **Source**: research/locations.md lines 34-405
- **Rationale**: Grounds abstract location network with concrete examples showing flagship campus experience, geographic/tuition variance strategy, and specialty school model while maintaining transparency about information sources and gaps

#### FR1.6: Related Documentation Links
- **Requirement**: Links to related reference documents
- **Links**:
  - Enrollment Process (Spec 019) - How to enroll at specific campus locations
  - Enrollment Tuition (Spec 020) - Detailed tuition by location
  - Contact Overview (Spec 023) - Campus-specific contact information
  - Organization Overview (Spec 002) - Alpha School founding and organizational context
  - Organization History (Spec 005) - Timeline of campus openings and expansion
  - Educational Philosophy (Spec 006) - Learning model implemented across all campuses
  - Two-Hour Learning Model (Spec 007) - Core academic approach used at every location
  - Daily Schedule (Spec 010) - Standard daily routine across campus network
  - Expansion Plans (Spec 022) - Detailed expansion roadmap and future locations
- **Source**: Spec dependencies and related documentation
- **Rationale**: Enables LLM navigation across interconnected location and organizational documentation

#### FR1.7: FAQs Section
- **Requirement**: Common questions about locations with authoritative answers
- **FAQs to Include** (6 required):
  - **Q: How many Alpha School campuses are currently operating and where are they located?**
    A: As of January 2026, Alpha School operates 17 campuses across 8 states. Texas has 6 campuses (Austin PreK-5, Austin 6-8, Austin High 9-12, Brownsville PreK-8, Fort Worth K-8, Plano K-5). California has 3 campuses (Lake Forest K-5, San Francisco K-10, Santa Barbara K-12). Florida has 3 campuses (Miami K-10, Palm Beach K-5, Tampa K-9). North Carolina has 2 campuses (Charlotte K-6, Raleigh K-6). Arizona, New York, and Virginia each have 1 campus (Scottsdale K-8, NYC K-8, Chantilly K-6 respectively). Additionally, Texas Sports Academy operates 6 sport-specific schools across Texas focusing on basketball, baseball, gymnastics, and cheer.

  - **Q: What is the difference between Alpha School campuses in different cities?**
    A: All Alpha School campuses follow the same educational model—two-hour AI-powered personalized learning block, mastery-based progression, afternoon life skills workshops, 60-90 minutes outdoor play, 5:1 student-guide ratio, 8:15 AM - 4:00 PM schedule. The primary differences are: (1) Tuition varies by location from $10,000/year (Brownsville TX) to $75,000/year (San Francisco CA) reflecting local market positioning; (2) Grade levels served differ—Santa Barbara is the only K-12 campus, while others range from K-5 to K-10; (3) Facility features vary based on location (Scottsdale has full basketball court and three playgrounds, Fort Worth operates within CERA recreational facility); (4) Campus size and enrollment capacity differ though only Austin flagship confirms 150+ students publicly.

  - **Q: Where is Alpha School's flagship campus and what makes it unique?**
    A: Alpha School's flagship campus is located at 1201 Spyglass Drive, Austin, TX 78746 in the Barton Hills neighborhood. Established in 2016, it represents the founding location (Year 11 of operation as of 2026, though MacKenzie Price started the concept in 2014). The campus serves PreK-5 students with over 150 currently enrolled, holds Cognia accreditation (the only campus with confirmed accreditation in public materials), and charges $40,000/year tuition. It's considered the organizational prototype that established the two-hour learning model, mastery-based progression system, and guide-based staffing approach now used across all Alpha locations. Austin also serves as corporate headquarters for Legacy of Education, Inc. (Alpha's legal name).

  - **Q: What are the Texas Sports Academy locations and how are they different from regular Alpha School campuses?**
    A: Texas Sports Academy operates sport-specific schools that combine Alpha's two-hour AI-powered learning block with intensive athletic training at $15,000/year tuition (lower than standard Alpha campuses). Currently operating: AIE Elite Prep basketball in Round Rock (grades 5-8), The Bennett School baseball in Houston (grades 7-10). Opened January 2026: baseball in Pearland (grades 4-8), basketball in Houston (grades 4-8), gymnastics in San Antonio (grades 4-8). Opening Fall 2026: cheer in Lago Vista (grades 5-8). Students complete core academics in the morning two-hour block then transition to sport-specific training in afternoon hours. Texas ESA program may provide approximately $10,300 per student toward $15,000 tuition, potentially reducing family cost to ~$4,700/year.

  - **Q: What are Alpha School's expansion plans?**
    A: Alpha School has announced 5 new campuses opening Fall 2026: The Woodlands TX ($40,000 tuition), Dorado Puerto Rico ($50,000), Palo Alto CA (tuition TBD), Santa Monica CA (tuition TBD), and Chicago IL (tuition TBD). Additionally, Alpha is exploring expansion in Aspen CO, Houston TX, Orlando FL, Phoenix AZ, and East Bay CA, though these lack confirmed opening dates. The rapid expansion is enabled by Alpha's July 2025 strategic partnership with Guidepost Montessori and acquisition of Higher Ground Education assets, which accelerated growth timeline by approximately 2 years. Alpha's website also mentions "Bring Alpha To Your City" suggesting community-driven expansion interest beyond announced targets.

  - **Q: Can my family choose any Alpha School location or do we have to attend the closest campus?**
    A: Families can apply to any Alpha School campus regardless of proximity, as there are no publicly disclosed geographic enrollment restrictions. However, practical considerations apply: (1) Campus hours are 8:15 AM - 4:00 PM with drop-off 8:15-8:30 AM and pick-up 3:30-4:00 PM, requiring families to handle daily transportation; (2) Tuition varies significantly by location ($10,000-$75,000/year) so families may prefer campuses with pricing matching their budget even if farther away; (3) Some campuses explicitly note service areas (Fort Worth serves "Aledo, Tanglewood, Ridglea, Arlington, Keller, Southlake, Colleyville" suggesting broader geographic draw); (4) Transportation options like busing or carpool coordination are not detailed in public materials except Fort Worth carpool mention, suggesting families primarily responsible for daily transport; (5) Rolling admissions and 5:1 student-guide ratio mean capacity limits may affect availability at desired campus.
- **Source**: research/locations.md lines 34-405
- **Rationale**: Addresses most common location questions with transparency about campus network, tuition variance, flagship campus, specialty schools, expansion, and enrollment flexibility

#### FR1.8: Sources Section
- **Requirement**: Cited sources with URLs and retrieval dates
- **Format**: Bulleted list of sources in format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
- **Sources to Include**: All sources from research/locations.md (lines 8-28):
  - [Alpha School Homepage](https://alpha.school) - Retrieved 2026-01-20
  - [Alpha School Locations Page](https://alpha.school/locations) - Retrieved 2026-01-20
  - [Alpha School Austin Page](https://alpha.school/austin) - Retrieved 2026-01-20
  - [Alpha School Fort Worth Page](https://alpha.school/fort-worth) - Retrieved 2026-01-20
  - [Alpha School Miami Page](https://alpha.school/miami) - Retrieved 2026-01-20
  - [Alpha School Scottsdale Page](https://alpha.school/scottsdale) - Retrieved 2026-01-20
  - [2 Hour Learning Founder Page](https://2hourlearning.com/founder/) - Retrieved 2026-01-20
  - [PR Newswire - Higher Ground Acquisition](https://www.prnewswire.com/news-releases/alpha-school-accelerates-expansion-with-acquisition-of-key-assets-from-higher-ground-education-302504263.html) - Retrieved 2026-01-20
  - [PR Newswire - Manhattan Opening](https://www.prnewswire.com/news-releases/alpha-school-opens-in-manhattan-revolutionizing-education-with-accelerated-learning-and-essential-life-skills-to-prepare-students-for-real-world-success-302477703.html) - Retrieved 2026-01-20
  - [ABC7 San Francisco](https://abc7news.com/post/alpha-school-ai-powered-private-expanding-bay-area-footprint-due-growing-demand/18299187/) - Retrieved 2026-01-20
  - [SF Standard](https://sfstandard.com/2025/09/19/alpha-school-ai-teacher-san-francisco/) - Retrieved 2026-01-20
  - [NBC Bay Area](https://www.nbcbayarea.com/news/local/ai-powered-private-school-opens-san-francisco-campus/3922556/) - Retrieved 2026-01-20
  - [Yahoo Finance - Manhattan Opening](https://finance.yahoo.com/news/alpha-school-opens-manhattan-revolutionizing-123100000.html) - Retrieved 2026-01-20
  - [Raleigh Magazine](https://raleighmag.com/2025/12/alpha-school-raleigh/) - Retrieved 2026-01-20
  - [Community Impact - Texas Sports Academy](https://communityimpact.com/austin/lake-travis-westlake/education/2025/12/23/ai-driven-alpha-schools-to-open-new-texas-sports-academy-locations-across-texas/) - Retrieved 2026-01-20
  - [Webull News - Guidepost Partnership](https://www.webull.com/news/13119454002308096) - Retrieved 2026-01-20
  - [Crunchbase - Alpha](https://www.crunchbase.com/organization/alpha-7521) - Retrieved 2026-01-20
- **Source**: research/locations.md lines 8-28
- **Rationale**: Provides citation trail for location information verification and enables readers to examine original sources

#### FR1.9: Document Footer
- **Requirement**: Timestamp metadata at document end
- **Format**:
  ```markdown
  ---
  *Last updated: 2026-01-20*
  *Last verified: 2026-01-20*
  ```
- **Rationale**: Maintains documentation freshness tracking

---

### FR2: Content Quality Standards

#### FR2.1: Factual Accuracy
- **Requirement**: All factual claims must trace to research files with line references
- **Sources**: research/locations.md lines 34-405
- **Verification**: Every location claim must cite specific research file lines
- **Rationale**: Maintains fact traceability and prevents speculation

#### FR2.2: Alpha Reporting vs. Public Documentation Distinction
- **Requirement**: Distinguish between Alpha's published location information and undisclosed details
- **Attribution Patterns**:
  - Published location information: "Alpha School operates...", "according to Alpha locations page...", "per campus-specific page...", "Alpha materials state..."
  - Campus-specific information: "Austin flagship campus...", "San Francisco location...", "Scottsdale campus features..."
  - Information gaps: "enrollment capacity not publicly disclosed", "accreditation status unknown for non-Austin campuses", "square footage details unavailable"
  - Third-party sources: "per SF Standard article...", "according to PR Newswire...", "ABC7 San Francisco reported..."
- **CRITICAL**: Never state undisclosed campus details (enrollment capacity, square footage, facility specs) as known facts—always note gaps explicitly
- **Rationale**: Prevents LLMs from presenting incomplete information as comprehensive; maintains transparency about what is/isn't publicly available

#### FR2.3: Information Gaps Handling
- **Requirement**: Explicitly note what is not publicly available or documented
- **Gaps to Document**:
  - Specific enrollment capacity per campus (only Austin confirms 150+)
  - Square footage or facility capacity details
  - Accreditation status for campuses other than Austin
  - Complete facility descriptions for most non-Austin campuses
  - Transportation options (only Fort Worth mentions carpool coordination)
  - Before/after school care availability
  - Waitlist information and typical enrollment timelines
  - Historical opening dates for older campuses beyond Austin
  - Folsom CA campus mentioned in Guidepost partnership but not on current locations page
  - Exact opening dates within "Fall 2026" for announced expansions
  - Specific addresses for some announced Fall 2026 campuses
- **Rationale**: Transparency about limitations prevents LLMs from overstating what is publicly known about campus network

#### FR2.4: Neutral Presentation
- **Requirement**: Document campus locations without advocacy or critique
- **Tone Guidelines**:
  - Present campus details factually without promotional language
  - Describe tuition variance objectively noting market positioning strategy
  - Note facility features without "amazing" or "basic" value judgments
  - State expansion plans neutrally without "aggressive" or "cautious" characterizations
  - Document information gaps without implying Alpha is "secretive" or "transparent"
  - Avoid comparative language ("better than", "inferior to", "more expensive than traditional schools")
- **Rationale**: Reference documentation should inform families about campus options, not persuade or critique

---

### FR3: LLM Optimization

#### FR3.1: Hierarchical Structure
- **Requirement**: Clear H1 → H2 → H3 heading hierarchy (no H4 or deeper)
- **Structure**:
  - H1: "Locations Overview"
  - H2: "Overview", "Properties", "Details", "Examples", "Related", "FAQs", "Sources"
  - H3: Six Details subsections
- **Rationale**: Enables LLM parsing and section extraction

#### FR3.2: Scannable Tables
- **Requirement**: Properties table uses GitHub Flavored Markdown
- **Format**: 4-column table with consistent property naming (snake_case)
- **Rationale**: Structured data extraction for LLM fact retrieval

#### FR3.3: Example Formatting
- **Requirement**: Examples use bold labels and structured narrative with INFORMATION STATUS conclusion
- **Format**:
  ```markdown
  **Example Title**: Detailed scenario with specific campus details, addresses, tuition, and operational features; demonstrates location selection or campus characteristics in practice. INFORMATION STATUS: Attribution of known facts and explicit documentation of sources and limitations.
  ```
- **Rationale**: Clear example structure with explicit information availability framing for LLM comprehension

---

## Implementation Phases

### Phase 1.0: Research Validation

**Objective**: Verify all location information is sourced from research files

#### Validation Tasks

- [ ] **Task 1.0.1**: Verify current campus network by state
  - Confirm 17 operating campuses across 8 states
  - Validate Texas (6), California (3), Florida (3), North Carolina (2), Arizona (1), New York (1), Virginia (1)
  - Confirm addresses, grade levels, tuition for each campus
  - Source lines: research/locations.md 51-105
  - **Success**: Campus network comprehensively documented

- [ ] **Task 1.0.2**: Verify flagship Austin campus details
  - Confirm 1201 Spyglass Dr address, PreK-5 grades, $40,000 tuition
  - Confirm 150+ students, Year 11 operation, Cognia accreditation
  - Confirm (512) 595-0801 contact, admissions.austin@alpha.school
  - Source lines: research/locations.md 109-125
  - **Success**: Flagship campus details documented

- [ ] **Task 1.0.3**: Verify standard campus features
  - Confirm 8:15 AM - 4:00 PM hours universal across network
  - Confirm two-hour AI learning block, mastery-based progression
  - Confirm 60-90 minutes outdoor play minimum
  - Confirm guides vs. teachers staffing model
  - Source lines: research/locations.md 198-208
  - **Success**: Standard operational features documented

- [ ] **Task 1.0.4**: Verify specialty schools (Texas Sports Academy)
  - Confirm 6 sport-specific locations (basketball, baseball, gymnastics, cheer)
  - Confirm $15,000 tuition and grade levels
  - Confirm Texas ESA ~$10,300 potential funding
  - Source lines: research/locations.md 224-248
  - **Success**: Specialty school network documented

- [ ] **Task 1.0.5**: Verify strategic partnerships and expansion
  - Confirm Guidepost Montessori partnership July 2025
  - Confirm Higher Ground Education asset acquisition
  - Confirm Fall 2026 expansion plans (5 confirmed locations)
  - Source lines: research/locations.md 252-270, 278-320
  - **Success**: Growth strategy documented

- [ ] **Task 1.0.6**: Verify information gaps
  - Confirm enrollment capacity gaps (only Austin disclosed)
  - Confirm accreditation status gaps (only Austin confirmed)
  - Confirm facility detail gaps for most campuses
  - Confirm transportation/care availability gaps
  - Source lines: research/locations.md 375-401
  - **Success**: Information gaps comprehensively cataloged

---

### Phase 1.1: Documentation Writing

**Objective**: Write reference/locations/overview.md following all Functional Requirements

#### Writing Tasks

- [ ] **Task 1.1.1**: Write header and definition (FR1.1)
  - Ensure directory exists: reference/locations
  - Create file: reference/locations/overview.md
  - Write H1: "Locations Overview"
  - Write one-sentence definition capturing network scope and key facts
  - **Success**: Header matches template format

- [ ] **Task 1.1.2**: Write overview section (FR1.2)
  - Write paragraph 1: Campus network overview (17 campuses, 8 states, founding history, grade level variance, tuition range, operational model)
  - Write paragraph 2: Campus facilities and features by location (Austin flagship, Scottsdale, Fort Worth, Miami, San Francisco, NYC, contact information, specialty schools)
  - Write paragraph 3: Strategic growth partnerships, expansion plans, information gaps
  - **Success**: Overview provides comprehensive campus network context

- [ ] **Task 1.1.3**: Create properties table (FR1.3)
  - Create 4-column table (Property | Type | Description | Example)
  - Add 10 properties covering network size, geographic reach, operational standards
  - Populate with accurate values from research
  - **Success**: Table enables structured location fact extraction

- [ ] **Task 1.1.4**: Write Details subsection - Current Campus Network by State (FR1.4)
  - Document all 17 campuses organized by state (Texas, Arizona, California, Florida, New York, Virginia, North Carolina)
  - Include address, grades, tuition, contact, notes for each
  - **Success**: Complete campus directory documented

- [ ] **Task 1.1.5**: Write Details subsection - Standard Campus Features and Operations (FR1.4)
  - Document universal operational characteristics (hours, academic model, outdoor play, staffing, no homework)
  - Include all-inclusive tuition policy and Alpha Anywhere remote option
  - **Success**: Standard features clearly documented

- [ ] **Task 1.1.6**: Write Details subsection - Flagship Austin Campus Details (FR1.4)
  - Document Austin flagship as founding location and organizational prototype
  - Include enrollment (150+), accreditation (Cognia), operational history (Year 11)
  - **Success**: Flagship campus comprehensively documented

- [ ] **Task 1.1.7**: Write Details subsection - Specialty Schools and Programs (FR1.4)
  - Document Texas Sports Academy locations and sports offered
  - Explain $15,000 tuition and Texas ESA funding potential
  - List other specialty schools (GT School, Montessorium, etc.)
  - **Success**: Specialty school network documented

- [ ] **Task 1.1.8**: Write Details subsection - Strategic Growth and Partnerships (FR1.4)
  - Document Guidepost Montessori partnership July 2025
  - Document Higher Ground Education asset acquisition
  - Include media contact information (Anna Davlantes)
  - **Success**: Growth strategy comprehensively documented

- [ ] **Task 1.1.9**: Write Details subsection - Expansion Plans and Future Locations (FR1.4)
  - Document confirmed Fall 2026 openings (5 locations with tuition where known)
  - List exploration targets (Aspen, Houston, Orlando, Phoenix, East Bay)
  - Note information gaps for expansion details
  - **Success**: Expansion roadmap documented

- [ ] **Task 1.1.10**: Write examples section (FR1.5)
  - Write Example 1: Austin Flagship Campus Experience
  - Write Example 2: Geographic Expansion Comparison (Brownsville vs. San Francisco)
  - Write Example 3: Texas Sports Academy Multi-Location Model
  - Include INFORMATION STATUS conclusions
  - **Success**: Three concrete location scenarios documented with appropriate caveats

- [ ] **Task 1.1.11**: Create related documentation links (FR1.6)
  - Link to 9 related specs (Enrollment, Tuition, Contact, Organization, History, Philosophy, Learning Model, Schedule, Expansion)
  - Use relative paths for internal links
  - **Success**: Navigation links enable LLM cross-referencing

- [ ] **Task 1.1.12**: Write FAQs section (FR1.7)
  - Write 6 Q&A pairs addressing common location questions
  - Cover: campus count/locations, campus differences, flagship campus, Texas Sports Academy, expansion plans, campus choice flexibility
  - **Success**: FAQs address primary location questions with transparency

- [ ] **Task 1.1.13**: Create sources section (FR1.8)
  - List all sources from research/locations.md with URLs and retrieval dates
  - Format: `- [Source Name](URL) - Retrieved YYYY-MM-DD`
  - **Success**: Complete citation trail provided

- [ ] **Task 1.1.14**: Add document footer (FR1.9)
  - Add horizontal rule separator
  - Add "Last updated: 2026-01-20"
  - Add "Last verified: 2026-01-20"
  - **Success**: Footer metadata included

---

### Phase 1.2: Quality Review

**Objective**: Ensure reference/locations/overview.md meets all quality standards

#### Review Tasks

- [ ] **Task 1.2.1**: Primary quality check (FR2.1-FR2.4)
  - Verify all factual claims trace to research/locations.md with line references
  - Confirm Alpha reporting vs. gaps distinction throughout
  - Check neutral presentation (no advocacy or critique)
  - Verify information gaps explicitly documented
  - **Success**: Content meets FR2 quality standards

- [ ] **Task 1.2.2**: Fact-check campus details
  - Verify all 17 campus addresses, grades, tuition correct
  - Confirm flagship Austin details (150+, Cognia, Year 11)
  - Validate specialty school details
  - Check expansion plans accuracy
  - **Success**: 100% factual accuracy verified

- [ ] **Task 1.2.3**: Consistency check
  - Verify campus counts consistent across Overview, Details, Examples, FAQs
  - Check tuition amounts consistent throughout document
  - Validate property table matches Details subsections
  - **Success**: No internal contradictions

- [ ] **Task 1.2.4**: Template compliance check (FR1.1-FR1.9)
  - Confirm H1 → H2 → H3 hierarchy (no H4)
  - Verify all 9 FR1 sections present
  - Check properties table format (4 columns, 10 properties)
  - Validate 3 examples with INFORMATION STATUS conclusions
  - Verify 6 FAQs present
  - **Success**: Perfect template compliance

- [ ] **Task 1.2.5**: Neutral tone review (FR2.4)
  - Check for promotional language removed
  - Verify no comparative judgments
  - Confirm information gaps stated factually
  - **Success**: Neutral, informative tone throughout

- [ ] **Task 1.2.6**: LLM optimization check (FR3.1-FR3.3)
  - Verify clear heading hierarchy for parsing
  - Check properties table uses snake_case naming
  - Validate example formatting with INFORMATION STATUS conclusions
  - **Success**: Document optimized for LLM consumption

---

### Post-Implementation Tasks

- [ ] **Task 1.3.1**: Update roadmap.md
  - Change Spec 021 status from "📋 Planned" to "✅ Complete"
  - Update completion percentage (27/32 = 84.4%)
  - Update "Last Updated" timestamp
  - **Success**: Roadmap reflects Spec 021 completion

- [ ] **Task 1.3.2**: Update progress.md
  - Add Spec 021 implementation entry with date
  - Document key content covered
  - Note output file created
  - Include any notable decisions or challenges
  - **Success**: Progress log updated

- [ ] **Task 1.3.3**: Update activity.log
  - Add timestamped entry for Spec 021 creation and implementation readiness
  - **Success**: Activity logged

- [ ] **Task 1.3.4**: Create checklist.md
  - Create ralph/specs/021-locations-overview/checklist.md
  - Mark initial status as "📋 Planned"
  - **Success**: Checklist created

---

## Success Metrics

### Phase 1.0 Success Criteria
- All 6 validation tasks completed
- All location facts traced to research/locations.md with line references
- Information gaps comprehensively cataloged
- No unverified claims in documentation plan

### Phase 1.1 Success Criteria
- File created: reference/locations/overview.md
- All FR1 requirements implemented (9 sections)
- Document follows template exactly (roadmap.md lines 136-173)
- 10 properties in table, 6 Details subsections, 3 examples, 6 FAQs
- All examples include INFORMATION STATUS conclusions
- Complete source citations with URLs and retrieval dates

### Phase 1.2 Success Criteria
- 100% factual accuracy verified against research file
- No internal contradictions
- Neutral tone throughout (no advocacy or critique)
- Perfect template compliance
- LLM-optimized structure (H1→H2→H3, scannable tables, clear examples)

### Post-Implementation Success Criteria
- Roadmap.md shows Spec 021 as "✅ Complete" (after implementation)
- Progress.md documents spec creation
- Activity.log includes timestamped entry
- Checklist.md created for implementation tracking

---

## Technical Architecture

### File Structure
```
reference/
  locations/
    overview.md         # Output file for Spec 021
    (expansion.md)      # Future Spec 022
```

### Dependencies
- **Depends On**: research/locations.md (Spec 001f - completed)
- **Blocks**: Spec 022 (Locations Expansion) - provides foundation for detailed expansion documentation
- **Related**: Specs 019, 020 (Enrollment) - campus-specific enrollment and tuition
- **Related**: Spec 023 (Contact) - campus contact information
- **Related**: Spec 002, 005 (Organization) - headquarters and growth history

### Data Flow
1. Research file (research/locations.md) → Spec 021 implementation
2. Spec 021 (overview.md) → Foundation for Spec 022 (expansion.md)
3. Location documentation → Referenced by Guide documents (Specs 024-026)

---

## What We're NOT Doing

This spec explicitly excludes:
- **Detailed Expansion Analysis**: Spec 022 will cover expansion plans and strategy in depth
- **Comprehensive Contact Directory**: Spec 023 will provide complete contact information
- **Enrollment Process by Campus**: Covered in Enrollment domain (Specs 019-020)
- **Facility Architectural Details**: Only publicly available facility features documented
- **Speculation About Future Locations**: Only document announced/confirmed expansion plans

---

## Design Decisions

### 1. Six Details Subsections
**Decision**: Organize Details section into 6 logical subsections: Current Campus Network by State, Standard Campus Features, Flagship Austin Campus, Specialty Schools, Strategic Growth and Partnerships, Expansion Plans
**Rationale**: Matches information architecture of research file; enables families to navigate to geographic region or school type relevant to them; separates current operations from future growth; highlights flagship campus as organizational prototype
**Alternative Considered**: Organize by campus type (standard vs. specialty)—rejected because geographic organization more intuitive for families searching by location

### 2. State-by-State Campus Listing
**Decision**: List all 17 campuses organized by state with complete details (address, grades, tuition, contact, notes) in single comprehensive subsection
**Rationale**: Creates authoritative campus directory for LLM reference; enables families to find relevant campus quickly; maintains consistent data structure across all locations; prevents information from being scattered across multiple sections
**Alternative Considered**: Dedicate separate subsection to each state—rejected because would create 8 subsections violating 6 subsection standard and making document harder to navigate

### 3. Tuition Range Emphasis ($10,000-$75,000)
**Decision**: Prominently feature $65,000 tuition variance across multiple sections as core characteristic of campus network
**Rationale**: Demonstrates Alpha's market segmentation strategy (premium San Francisco, mid-tier Austin, low-cost Brownsville); prevents family sticker shock by setting expectations; reflects geographic market positioning approach; enables families to identify campuses matching budget
**Alternative Considered**: Downplay tuition variance to focus on educational consistency—rejected because tuition is critical family decision factor

### 4. Flagship Austin Campus Dedicated Subsection
**Decision**: Dedicate entire Details subsection to Austin flagship campus despite being one of 17 locations
**Rationale**: Austin represents organizational prototype and founding location; only campus with confirmed accreditation (Cognia); only campus with disclosed enrollment (150+); serves as reference point for understanding Alpha's model before geographic expansion; Year 11 operational history provides longest track record
**Alternative Considered**: Treat Austin like other campuses in state-by-state listing—rejected because historical and operational significance warrants detailed documentation

### 5. Strategic Partnerships Prominence
**Decision**: Dedicate entire subsection to Guidepost Montessori partnership and Higher Ground Education acquisition
**Rationale**: July 2025 partnerships fundamentally transformed Alpha's growth trajectory from organic expansion to rapid multi-state consolidation; explains sudden 2025-2026 expansion acceleration; provides context for campus network doubling; critical for LLMs understanding Alpha's current phase
**Alternative Considered**: Brief mention in expansion subsection—rejected because partnerships are strategic inflection point deserving comprehensive documentation

### 6. Texas Sports Academy as Specialty School Category
**Decision**: Document Texas Sports Academy within Specialty Schools subsection rather than integrating into campus network listing
**Rationale**: $15,000 tuition differentiation from standard campuses; sport-specific focus represents distinct model; enables clear explanation of two-hour academics + afternoon sport training structure; Texas ESA funding (~$10,300) creates unique affordability context
**Alternative Considered**: List in Texas campus section—rejected because specialty schools serve different market segment and deserve separate treatment

---

## Related Specifications

- **Spec 001f**: Research Locations Domain (dependency - provides source data)
- **Spec 022**: Locations Expansion (blocked by this spec - will detail expansion strategy)
- **Spec 019**: Enrollment Process (related - campus-specific enrollment)
- **Spec 020**: Enrollment Tuition (related - tuition by location)
- **Spec 023**: Contact Overview (related - campus contact information)
- **Spec 002**: Organization Overview (related - headquarters and founding)
- **Spec 005**: Organization History (related - timeline of campus openings)
- **Spec 006**: Educational Philosophy (related - model implemented across campuses)
- **Spec 007**: Two-Hour Learning Model (related - core academic approach)
- **Spec 010**: Daily Schedule (related - standard daily operations)
- **Spec 024**: Parent Guide (will synthesize location information)

---

## References

### Research Files
- **Primary Source**: research/locations.md (lines 1-405)
  - Lines 34-48: Headquarters and founding history
  - Lines 51-105: Current campus network by state
  - Lines 109-196: Campus details (Austin, Fort Worth, Miami, Scottsdale, San Francisco, NYC, Raleigh, Chantilly)
  - Lines 198-208: Standard campus features
  - Lines 210-222: Specialty schools
  - Lines 224-248: Texas Sports Academy locations
  - Lines 252-270: Expansion plans
  - Lines 278-320: Strategic partnerships (Guidepost, Higher Ground)
  - Lines 342-362: Crunchbase and Wikipedia data
  - Lines 375-401: Information gaps

### Template Reference
- **Documentation Template**: roadmap.md lines 136-173

### Pattern References
- **Spec 019**: Enrollment Process (enrollment domain reference pattern)
- **Spec 020**: Enrollment Tuition (location-specific pricing documentation)
- **Spec 015**: Outcomes Claims (comprehensive reference doc pattern with information gaps)
