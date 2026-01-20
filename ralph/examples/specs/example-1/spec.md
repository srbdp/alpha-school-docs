# Spec 001: Kayako Webhook Integration

**Status**: 📋 Planned
**Priority**: Critical
**Effort**: Small (~1 hour)
**Phase**: 1 (Foundation)
**Dependencies**: None
**Last Updated**: 2026-01-16

---

## Overview

Implement a secure webhook endpoint to receive real-time ticket events from Kayako CRM system. This is the first ingestion point in the PRD-01 Ingestion Gateway component, enabling automated processing of customer support tickets from Kayako.

### Context

Kayako is one of two primary CRM integrations (alongside Zendesk) that feed the ticket ingestion pipeline. This webhook will:
- Accept HTTP POST requests from Kayako webhook system
- Validate webhook signatures for security
- Parse and normalize Kayako-specific event payloads
- Forward validated events to internal processing pipeline

### Architecture Position

```
[Kayako] → [Webhook Endpoint (this spec)] → [Event Processing Pipeline] → [Unified Ticket Schema]
```

This spec focuses solely on the webhook endpoint. Event schema normalization (Spec 003) and downstream processing are out of scope.

---

## Functional Requirements

### FR1: Webhook Endpoint

#### FR1.1: HTTP Endpoint Configuration
- **Requirement**: Create HTTP POST endpoint at `/webhooks/kayako`
- **Method**: POST only (reject GET, PUT, DELETE, etc.)
- **Response Format**: JSON with status and optional error details
- **Rationale**: Standard webhook pattern with explicit method restriction

#### FR1.2: Request Validation
- **Requirement**: Validate all incoming requests using Zod schema
- **Validation Points**:
  - Content-Type header must be `application/json`
  - Request body must be valid JSON
  - Required Kayako fields must be present (event type, ticket data, timestamp)
- **Error Handling**: Return Result<ValidatedPayload, ValidationError>
- **Rationale**: Boundary validation pattern with Result types

#### FR1.3: Signature Verification
- **Requirement**: Verify Kayako webhook signature for authenticity
- **Algorithm**: HMAC-SHA256 signature validation
- **Secret**: Load from environment variable `KAYAKO_WEBHOOK_SECRET`
- **Header**: Signature provided in `X-Kayako-Signature` header
- **Error Handling**: Return Result<void, SignatureError> for invalid signatures
- **Rationale**: Prevent unauthorized webhook calls and replay attacks

### FR2: Event Processing

#### FR2.1: Payload Parsing
- **Requirement**: Parse Kayako JSON payload into typed structure
- **Schema**: Define KayakoEventSchema using Zod
- **Fields**: event_type, ticket_id, conversation_id, subject, priority, status, customer, timestamp
- **Error Handling**: Return Result<KayakoEvent, ParseError>
- **Rationale**: Type-safe parsing with clear error propagation

#### FR2.2: Event Forwarding
- **Requirement**: Forward validated events to internal event queue
- **Queue**: Amazon SQS FIFO queue (configured via environment)
- **Message Format**: JSON serialized KayakoEvent
- **Deduplication**: Use Kayako event ID for SQS deduplication
- **Error Handling**: Return Result<QueueResponse, QueueError>
- **Rationale**: Reliable asynchronous processing with at-least-once delivery

#### FR2.3: Idempotency
- **Requirement**: Handle duplicate webhook deliveries gracefully
- **Mechanism**: SQS FIFO deduplication ID based on Kayako event ID
- **Window**: 5-minute deduplication window (SQS default)
- **Response**: Return 200 OK for duplicate events (already processed)
- **Rationale**: Webhooks may be retried; system must be idempotent

### FR3: Error Handling and Observability

#### FR3.1: Structured Error Responses
- **Requirement**: Return appropriate HTTP status codes with error details
- **Status Codes**:
  - 200: Success
  - 400: Invalid payload or signature
  - 401: Missing or invalid signature
  - 500: Internal processing error (queue failure, etc.)
- **Response Body**: JSON with `{ success: boolean, error?: { code: string, message: string } }`
- **Rationale**: Clear error communication for debugging

#### FR3.2: Logging and Metrics
- **Requirement**: Log all webhook requests with key metadata
- **Log Fields**: event_id, event_type, status, processing_time_ms, error_code
- **Log Level**: INFO for success, ERROR for failures
- **Metrics**: Count successful/failed webhooks, measure processing latency
- **Rationale**: Observability for monitoring and debugging

#### FR3.3: Timeout Protection
- **Requirement**: Enforce maximum request processing time
- **Timeout**: 5 seconds maximum (Kayako expects fast response)
- **Behavior**: Return 500 error if processing exceeds timeout
- **Rationale**: Prevent resource exhaustion and meet Kayako SLA

### FR4: Configuration and Security

#### FR4.1: Environment Configuration
- **Requirement**: Load all configuration from environment variables
- **Variables**:
  - `KAYAKO_WEBHOOK_SECRET`: HMAC secret for signature verification (required)
  - `KAYAKO_EVENT_QUEUE_URL`: SQS FIFO queue URL (required)
  - `AWS_REGION`: AWS region for SQS (default: us-east-1)
  - `WEBHOOK_TIMEOUT_MS`: Processing timeout (default: 5000)
- **Validation**: Validate environment on startup using Zod, return Result<Config, ConfigError>
- **Rationale**: 12-factor app configuration pattern

#### FR4.2: Rate Limiting (Out of Scope for Phase 1)
- **Decision**: Rate limiting deferred to API gateway layer
- **Rationale**: Focus on core webhook functionality first; infrastructure-level rate limiting is more appropriate

#### FR4.3: HTTPS Enforcement
- **Requirement**: Webhook endpoint must be served over HTTPS
- **Implementation**: Enforced at infrastructure/reverse proxy level
- **Rationale**: Protect signature and payload in transit

---

## Implementation Phases

### Phase 1.0: Test Foundation

**Objective**: Create comprehensive failing tests covering all Functional Requirements

#### Test Coverage Requirements

1. **Endpoint Tests** (FR1.1):
   - POST request returns 200 for valid payload
   - GET/PUT/DELETE requests return 405 Method Not Allowed
   - Missing Content-Type header returns 400

2. **Validation Tests** (FR1.2):
   - Valid Kayako payload passes validation (Result.Ok)
   - Invalid JSON returns validation error (Result.Err)
   - Missing required fields return specific error codes
   - Extra fields are ignored (permissive parsing)

3. **Signature Tests** (FR1.3):
   - Valid HMAC-SHA256 signature passes verification
   - Invalid signature returns 401 error
   - Missing signature header returns 401 error
   - Signature with wrong secret fails verification

4. **Parsing Tests** (FR2.1):
   - Complete Kayako payload parses to typed KayakoEvent
   - Malformed event_type returns parse error
   - Timestamp parsing handles ISO 8601 format
   - Optional fields (e.g., tags) parse correctly

5. **Queue Forwarding Tests** (FR2.2):
   - Successful SQS send returns Result.Ok with message ID
   - SQS failure returns Result.Err with queue error
   - Deduplication ID matches Kayako event ID
   - Message body contains serialized event

6. **Idempotency Tests** (FR2.3):
   - Duplicate event ID within 5 minutes returns 200
   - Same event after 5 minutes processes normally
   - Different events with same timestamp process independently

7. **Error Handling Tests** (FR3.1, FR3.2):
   - 400 response for validation failure includes error code
   - 500 response for queue failure logs error details
   - Timeout triggers 500 response within 5 seconds
   - All error responses match JSON schema

8. **Configuration Tests** (FR4.1):
   - Valid environment variables load successfully
   - Missing required variable returns ConfigError
   - Invalid queue URL format returns validation error

#### Test Organization

```
tests/
  webhooks/
    kayako/
      endpoint.test.ts        # FR1 - Endpoint and validation
      signature.test.ts       # FR1.3 - Signature verification
      parsing.test.ts         # FR2.1 - Payload parsing
      forwarding.test.ts      # FR2.2, FR2.3 - Queue and idempotency
      errors.test.ts          # FR3 - Error handling
      config.test.ts          # FR4.1 - Configuration
```

#### Success Criteria

**Automated Verification**:
- `npm run test` shows all tests failing appropriately (RED phase)
- TypeScript compilation succeeds with strict mode
- Test file structure matches organization above
- All Result type assertions compile correctly

**Manual Verification**:
- Review test cases to ensure all FRs have coverage
- Verify test descriptions clearly map to FR numbers
- Confirm error path testing is comprehensive

---

### Phase 1.1: Implementation

**Objective**: Implement webhook functionality until all Phase 1.0 tests pass (GREEN phase)

#### Implementation Tasks

1. **Project Setup**:
   - Initialize TypeScript project with strict mode
   - Install dependencies: `neverthrow`, `zod`, `@aws-sdk/client-sqs`, web framework (Express/Fastify)
   - Configure test framework (Vitest recommended)

2. **Core Types and Schemas** (`src/webhooks/kayako/types.ts`):
   ```typescript
   import { z } from 'zod';

   // Zod schema for Kayako webhook payload
   export const KayakoEventSchema = z.object({
     event_type: z.enum(['ticket.created', 'ticket.updated', 'ticket.closed']),
     ticket_id: z.string().min(1),
     conversation_id: z.string().optional(),
     subject: z.string(),
     priority: z.enum(['low', 'medium', 'high', 'urgent']),
     status: z.string(),
     customer: z.object({
       id: z.string(),
       email: z.string().email(),
       name: z.string()
     }),
     timestamp: z.string().datetime(),
     event_id: z.string().min(1)
   });

   export type KayakoEvent = z.infer<typeof KayakoEventSchema>;
   ```

3. **Configuration Module** (`src/webhooks/kayako/config.ts`):
   ```typescript
   import { z } from 'zod';
   import { Result, ok, err } from 'neverthrow';

   const ConfigSchema = z.object({
     kayakoWebhookSecret: z.string().min(1),
     kayakoEventQueueUrl: z.string().url(),
     awsRegion: z.string().default('us-east-1'),
     webhookTimeoutMs: z.number().default(5000)
   });

   export type Config = z.infer<typeof ConfigSchema>;

   export function loadConfig(): Result<Config, ConfigError> {
     // Implementation: read from process.env and validate
   }
   ```

4. **Signature Verification** (`src/webhooks/kayako/signature.ts`):
   ```typescript
   import { Result } from 'neverthrow';
   import { createHmac } from 'crypto';

   export function verifyKayakoSignature(
     payload: string,
     signature: string,
     secret: string
   ): Result<void, SignatureError> {
     // Implementation: HMAC-SHA256 verification
   }
   ```

5. **Queue Client** (`src/webhooks/kayako/queue.ts`):
   ```typescript
   import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
   import { Result } from 'neverthrow';

   export async function sendToQueue(
     event: KayakoEvent,
     queueUrl: string,
     sqsClient: SQSClient
   ): Promise<Result<string, QueueError>> {
     // Implementation: SQS FIFO send with deduplication
   }
   ```

6. **Webhook Handler** (`src/webhooks/kayako/handler.ts`):
   ```typescript
   import { Result } from 'neverthrow';

   export async function handleKayakoWebhook(
     request: WebhookRequest,
     context: WebhookContext
   ): Promise<Result<WebhookResponse, WebhookError>> {
     // Implementation: orchestrate validation → parsing → forwarding
     return validateSignature(request, context.config)
       .andThen(() => parsePayload(request.body))
       .asyncAndThen((event) => sendToQueue(event, context))
       .map(() => ({ success: true }))
       .mapErr(transformError);
   }
   ```

7. **HTTP Endpoint** (`src/webhooks/kayako/endpoint.ts`):
   - Wire up Express/Fastify route
   - Apply timeout middleware
   - Map Result types to HTTP responses
   - Add logging and metrics

#### File Structure

```
src/
  webhooks/
    kayako/
      types.ts           # Zod schemas and types
      config.ts          # Environment configuration
      signature.ts       # HMAC signature verification
      queue.ts           # SQS client wrapper
      handler.ts         # Core webhook logic
      endpoint.ts        # HTTP route handler
      errors.ts          # Error types and transformations
```

#### Success Criteria

**Automated Verification**:
- `npm run test` - All Phase 1.0 tests pass (GREEN phase)
- `npm run typecheck` - Strict TypeScript validation passes
- `npm run lint` - Code quality checks pass
- `npm run check` - Complete validation pipeline passes

**Manual Verification**:
- Send test webhook to endpoint using curl
- Verify event appears in SQS queue
- Test signature rejection with invalid secret
- Confirm logs contain expected fields (event_id, processing_time_ms)
- Validate timeout triggers after 5 seconds

---

## Technical Architecture

### Decisions and Rationale

#### Decision 1: Result Types with neverthrow
**Choice**: Use Result<T, E> for all error-prone operations
**Rationale**: Project standard for functional error handling; eliminates exceptions; enables composition via `.andThen()`
**Impact**: All validation, parsing, and I/O operations return Results

#### Decision 2: Zod for Schema Validation
**Choice**: Zod for runtime validation with TypeScript inference
**Rationale**: Project standard for boundary validation; type-safe parsing; clear error messages
**Impact**: KayakoEventSchema and ConfigSchema defined with Zod

#### Decision 3: SQS FIFO for Event Queue
**Choice**: Amazon SQS FIFO queue for event forwarding
**Rationale**: Provides ordering, deduplication, and durability; AWS-native integration; matches Zendesk webhook pattern (Spec 002)
**Impact**: Requires AWS SDK dependency; environment configuration for queue URL

#### Decision 4: HMAC-SHA256 Signature Verification
**Choice**: Standard HMAC-SHA256 webhook signature pattern
**Rationale**: Industry-standard approach used by Kayako; prevents unauthorized webhook calls
**Impact**: Requires shared secret configuration; signature validation before processing

#### Decision 5: Context Injection Pattern
**Choice**: Pass dependencies via context object (config, SQS client, logger)
**Rationale**: Project standard for testability; enables dependency injection; simplifies mocking
**Impact**: All functions receive context parameter

#### Decision 6: Deferred Rate Limiting
**Choice**: No application-level rate limiting in Phase 1
**Rationale**: Should be handled at API gateway/infrastructure level; keeps webhook logic focused
**Impact**: Rate limiting spec added to Phase 2 if needed

---

## Current State Analysis

### Existing Codebase Patterns

**Status**: Greenfield project - no existing implementation

Based on research:
- No TypeScript source code exists yet
- Project standard patterns documented in `.claude/commands/` and `.claude/agents/`
- Established patterns: Result types, Zod validation, context injection, TSDoc comments
- Test-first methodology: Phase X.0 (tests) → Phase X.1 (implementation)

### Dependencies

**Runtime Dependencies**:
- `neverthrow` - Result type library
- `zod` - Schema validation
- `@aws-sdk/client-sqs` - SQS integration
- Express or Fastify - Web framework (TBD)

**Development Dependencies**:
- `vitest` - Test framework (recommended)
- `typescript` - Type checking
- `@biomejs/biome` - Linting/formatting

---

## What We're NOT Doing

### Out of Scope for This Spec

1. **Unified Ticket Schema Normalization**: Handled by Spec 003
2. **Zendesk Webhook Integration**: Separate spec (002)
3. **Downstream Event Processing**: Handled by Phase 2 specs
4. **Rate Limiting**: Deferred to infrastructure layer
5. **Multi-tenant Isolation**: Covered in Phase 3 specs
6. **Event Replay/Audit**: Covered in Phase 5 specs
7. **Attachment Processing**: Covered in Spec 004

### Explicit Boundaries

- **Webhook Endpoint Only**: This spec ends when event is successfully queued to SQS
- **No Business Logic**: Zero ticket processing; purely ingestion and forwarding
- **Kayako-Specific**: Zendesk has separate webhook spec with EventBridge integration
- **Signature Validation Only**: No OAuth, API keys, or other auth mechanisms

---

## Success Metrics

### Phase 1.0 Completion
- [ ] All test files created and organized by FR
- [ ] All tests fail appropriately (RED phase)
- [ ] TypeScript compilation succeeds
- [ ] Test coverage includes success and error paths

### Phase 1.1 Completion
- [ ] All Phase 1.0 tests pass (GREEN phase)
- [ ] TypeScript strict mode validation passes
- [ ] Manual webhook test succeeds with real Kayako payload
- [ ] Signature verification rejects invalid signatures
- [ ] Events appear in SQS queue with correct deduplication ID
- [ ] Timeout protection triggers at 5 seconds
- [ ] Logs contain all required fields

### Production Readiness
- [ ] TSDoc comments on all public functions
- [ ] Error messages are actionable
- [ ] Configuration validation provides clear guidance
- [ ] Integration with monitoring system (CloudWatch/Datadog)

---

## Related Specifications

- **Spec 002**: Zendesk Webhook Integration (parallel Phase 1 work)
- **Spec 003**: Unified Ticket Event Schema (depends on 001 + 002)
- **Spec 004**: Attachment Fetcher (parallel Phase 1 work)

---

## References

- Kayako Webhook Documentation: (to be added when implementing)
- AWS SQS FIFO Documentation: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html
- neverthrow Library: https://github.com/supermacro/neverthrow
- Zod Documentation: https://zod.dev
