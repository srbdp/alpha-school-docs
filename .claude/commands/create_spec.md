# Create Specification

You are tasked with creating comprehensive technical specifications autonomously. You research the codebase thoroughly and make design decisions based on discovered patterns, best practices, and the provided requirements. You deliver a complete, production-ready spec without interrupting the user for approval at each step.

## Usage

```
/create_spec {feature-name} [description]
```

**Examples:**
- `/create_spec user-authentication "Add JWT-based user authentication"`
- `/create_spec data-export "Implement CSV and JSON data export functionality"`
- `/create_spec real-time-notifications "Add WebSocket-based real-time notifications"`

## Initial Response

When this command is invoked:

1. **Check if parameters were provided**:
   - If a feature name or description was provided as a parameter, begin research immediately
   - Use provided feature name for spec directory creation

2. **If no parameters provided**, respond with:
```
I'll create a detailed technical specification for the spec-driven workflow.

Please provide:
1. The feature name (will become the directory name in specs/)
2. Feature description or requirements

I'll research the codebase, make design decisions based on existing patterns, and deliver a complete spec.
```

Then wait for the user's input.

## Process Steps

### Step 1: Deep Research & Context Gathering

1. **Spawn comprehensive research tasks in parallel**:

   - Use the **codebase-locator** agent to find all files related to the feature/task
   - Use the **codebase-analyzer** agent to understand current implementation patterns
   - Use the **spec-locator** agent to find existing specs and patterns to follow
   - Use the **test-pattern-finder** agent to research testing approaches for Phase X.0

   These agents will:
   - Find relevant source files, configs, and tests
   - Identify project-specific patterns (Result types, neverthrow, validation)
   - Trace data flow and key functions with file:line references
   - Discover existing spec templates and successful patterns

2. **Read all files identified by research tasks**:
   - After research tasks complete, read ALL files they identified as relevant
   - Focus on existing specs in specs/ folder for pattern consistency
   - Read template files: `specs/templates/spec-template.md` and `specs/templates/checklist-template.md`

3. **Build complete understanding**:
   - Cross-reference requirements with actual codebase patterns
   - Identify existing similar implementations to build upon
   - Note project-specific constraints and patterns
   - Determine true scope based on codebase reality

### Step 2: Autonomous Decision Making

Based on research findings, make definitive decisions on:

1. **Design Approach**:
   - Select the implementation approach that best fits existing codebase patterns
   - Choose the option that minimizes complexity while meeting requirements
   - Prioritize consistency with established conventions over novel solutions
   - When multiple valid approaches exist, choose the one with precedent in the codebase

2. **Architecture Decisions**:
   - Follow existing patterns for similar features (find them via research)
   - Use established abstractions rather than creating new ones
   - Mirror file structure and naming conventions from related features
   - Apply the same error handling, validation, and type patterns already in use

3. **Phase Structure**:
   - Determine appropriate phase breakdown based on feature complexity
   - Always use Phase X.0 (Test Foundation) → Phase X.1 (Implementation) methodology
   - Scope phases to be independently testable and deployable
   - Order phases by dependency and risk

4. **Decision Documentation**:
   - Record each decision with rationale based on research findings
   - Reference specific file:line examples that informed the choice
   - Note any trade-offs considered and why the chosen approach was selected

### Step 3: Complete Spec Generation

Write the full specification without waiting for intermediate approval:

1. **Create the spec directory**: `mkdir -p specs/{feature-name}`

2. **Generate and write the complete spec** to `specs/{feature-name}/spec.md`:
   - Full overview and context
   - Complete Functional Requirements hierarchy (FR1.1, FR1.2, etc.)
   - Detailed implementation phases with success criteria
   - Technical architecture with specific file paths and patterns
   - All decisions documented with rationale

3. **Write the checklist** to `specs/{feature-name}/checklist.md`:
   - All tasks derived from FRs
   - Phase-organized structure
   - Clear completion criteria for each item

### Step 4: Delivery

Present the completed spec:

```
I've created the technical specification based on codebase research:

**Spec Location:**
- `specs/{feature-name}/spec.md` - Complete technical specification
- `specs/{feature-name}/checklist.md` - Implementation progress tracking

**Key Decisions Made:**
1. [Decision] - [Rationale based on {file:line} pattern]
2. [Decision] - [Rationale based on existing implementation]
3. [Decision] - [Rationale based on codebase convention]

**Phase Structure:**
- Phase 1.0: [Test foundation scope]
- Phase 1.1: [Implementation scope]
- [Additional phases if needed]

The spec is ready for implementation. Let me know if you want me to adjust any decisions or scope.
```

## Decision-Making Principles

When research reveals multiple valid approaches, apply these principles in order:

1. **Consistency First**: Choose the approach already used elsewhere in the codebase
2. **Simplicity Over Flexibility**: Prefer simpler solutions that meet requirements
3. **Convention Over Configuration**: Follow established patterns rather than introducing new ones
4. **Minimize New Abstractions**: Use existing utilities, types, and patterns
5. **Match Adjacent Code**: New code should look like it belongs with existing code

## When to Escalate to User

Only interrupt the user if:

1. **Conflicting Requirements**: The description contains contradictions that cannot be resolved through code investigation
2. **Missing Critical Context**: A business decision is required that has no precedent in the codebase (e.g., pricing logic, user permissions scope)
3. **Breaking Changes Required**: The feature would require significant changes to existing patterns with no clear migration path
4. **External Dependencies**: Integration with external systems where credentials, endpoints, or contracts are unknown

If escalation is needed, be specific:
```
I need one clarification before completing the spec:

[Specific question with context about what research revealed and why this requires human input]

Options I'm considering:
- Option A: [description] - would require [trade-off]
- Option B: [description] - would require [trade-off]
```

Do NOT escalate for:
- Design preferences (use codebase patterns)
- Technical approach (use existing precedent)
- File structure (mirror similar features)
- Naming conventions (follow established patterns)

## Important Guidelines

1. **Be Autonomous**:
   - Make decisions based on research, not user polling
   - Deliver complete specs, not incremental drafts
   - Only escalate for genuine blockers
   - Trust codebase patterns as the source of truth

2. **Be Thorough**:
   - Research exhaustively before making decisions
   - Include specific file paths and line numbers
   - Write measurable success criteria with clear automated vs manual distinction
   - Use hierarchical FR numbering (FR1.1, FR1.2, etc.)

3. **Be Decisive**:
   - Choose one approach and commit to it
   - Document the rationale for each decision
   - Don't present options—present solutions
   - Make the spec actionable without further clarification

4. **Be Test-Driven**:
   - Always structure as Phase X.0 (Test Foundation) → Phase X.1 (Implementation)
   - Phase X.0 must create comprehensive failing tests
   - Phase X.1 implements until all Phase X.0 tests pass
   - Success criteria must be verifiable

5. **No Open Questions in Final Spec**:
   - Resolve all technical uncertainties through research
   - Every FR must be clear and actionable
   - Success criteria must be measurable
   - Technical architecture must be specific

## Success Criteria Guidelines

**Always separate success criteria into two categories:**

1. **Automated Verification** (can be run by CI/CD):
   - `npm run test`, `npm run typecheck`, `npm run lint`
   - Specific files that should exist
   - API endpoints that should respond correctly

2. **Manual Verification** (requires human testing):
   - Feature functionality in browser/UI
   - Performance under realistic conditions
   - Edge cases and error handling
   - User experience validation
