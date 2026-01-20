# Implementation Checklist: Spec 001 - Kayako Webhook Integration

**Spec**: 001-kayako-webhook
**Status**: ✅ Complete
**Current Phase**: Phase 1.1 Complete
**Progress**: 100% (30/30 tasks)
**Last Updated**: 2026-01-16

---

## Phase 1.0: Test Foundation ✅

**Status**: Complete
**Objective**: Create comprehensive failing tests covering all Functional Requirements
**Progress**: 15/15 tasks completed

### Setup & Structure

- [ ] **Task 1.0.1**: Initialize test directory structure
  - Create `tests/webhooks/kayako/` directory
  - Set up test framework configuration (Vitest recommended)
  - Install test dependencies
  - **FR**: Project Setup
  - **Files**: `tests/webhooks/kayako/`

- [ ] **Task 1.0.2**: Create test utilities and fixtures
  - Create mock Kayako payload factory
  - Create test context builder (mock SQS, config, logger)
  - Create signature generation utility for tests
  - **FR**: All FRs (shared utilities)
  - **Files**: `tests/webhooks/kayako/fixtures.ts`, `tests/webhooks/kayako/test-utils.ts`

### Endpoint Tests (FR1.1)

- [ ] **Task 1.0.3**: Create endpoint.test.ts
  - Test: POST request with valid payload returns 200
  - Test: GET request returns 405 Method Not Allowed
  - Test: PUT request returns 405 Method Not Allowed
  - Test: DELETE request returns 405 Method Not Allowed
  - Test: Missing Content-Type header returns 400
  - **FR**: FR1.1 - HTTP Endpoint Configuration
  - **Files**: `tests/webhooks/kayako/endpoint.test.ts`

### Validation Tests (FR1.2)

- [ ] **Task 1.0.4**: Create validation tests in endpoint.test.ts
  - Test: Valid Kayako payload passes validation (Result.Ok)
  - Test: Invalid JSON body returns validation error (Result.Err)
  - Test: Missing required field (event_type) returns specific error
  - Test: Missing required field (ticket_id) returns specific error
  - Test: Invalid email format in customer field returns validation error
  - Test: Extra unknown fields are ignored (permissive parsing)
  - **FR**: FR1.2 - Request Validation
  - **Files**: `tests/webhooks/kayako/endpoint.test.ts`

### Signature Tests (FR1.3)

- [ ] **Task 1.0.5**: Create signature.test.ts
  - Test: Valid HMAC-SHA256 signature passes verification (Result.Ok)
  - Test: Invalid signature returns SignatureError (Result.Err)
  - Test: Missing X-Kayako-Signature header returns 401
  - Test: Signature computed with wrong secret fails verification
  - Test: Tampered payload fails signature verification
  - **FR**: FR1.3 - Signature Verification
  - **Files**: `tests/webhooks/kayako/signature.test.ts`

### Parsing Tests (FR2.1)

- [ ] **Task 1.0.6**: Create parsing.test.ts
  - Test: Complete Kayako payload parses to typed KayakoEvent (Result.Ok)
  - Test: Malformed event_type value returns ParseError (Result.Err)
  - Test: Invalid timestamp format returns parse error
  - Test: Valid ISO 8601 timestamp parses correctly
  - Test: Optional conversation_id field parses when present
  - Test: Optional conversation_id field absent is valid
  - Test: All priority enum values parse correctly ('low', 'medium', 'high', 'urgent')
  - **FR**: FR2.1 - Payload Parsing
  - **Files**: `tests/webhooks/kayako/parsing.test.ts`

### Queue Forwarding Tests (FR2.2)

- [ ] **Task 1.0.7**: Create forwarding.test.ts - Queue basics
  - Test: Successful SQS send returns Result.Ok with message ID
  - Test: SQS client failure returns Result.Err with QueueError
  - Test: Deduplication ID matches Kayako event_id
  - Test: Message body contains correctly serialized KayakoEvent
  - Test: FIFO queue MessageGroupId is set correctly
  - **FR**: FR2.2 - Event Forwarding
  - **Files**: `tests/webhooks/kayako/forwarding.test.ts`

### Idempotency Tests (FR2.3)

- [ ] **Task 1.0.8**: Create forwarding.test.ts - Idempotency
  - Test: Duplicate event_id within deduplication window returns 200
  - Test: Same event after 5+ minutes processes normally
  - Test: Different events with same timestamp process independently
  - Test: SQS deduplication correctly prevents duplicates
  - **FR**: FR2.3 - Idempotency
  - **Files**: `tests/webhooks/kayako/forwarding.test.ts`

### Error Handling Tests (FR3.1, FR3.2)

- [ ] **Task 1.0.9**: Create errors.test.ts - HTTP responses
  - Test: 400 response for validation failure includes error code in JSON
  - Test: 401 response for signature failure includes error message
  - Test: 500 response for queue failure returns generic error (no leak)
  - Test: All error responses match { success: false, error: { code, message } } schema
  - Test: Success response matches { success: true } schema
  - **FR**: FR3.1 - Structured Error Responses
  - **Files**: `tests/webhooks/kayako/errors.test.ts`

- [ ] **Task 1.0.10**: Create errors.test.ts - Logging
  - Test: Successful webhook logs INFO with event_id, event_type, processing_time_ms
  - Test: Failed webhook logs ERROR with error_code and stack trace
  - Test: All logs include request_id for tracing
  - **FR**: FR3.2 - Logging and Metrics
  - **Files**: `tests/webhooks/kayako/errors.test.ts`

- [ ] **Task 1.0.11**: Create errors.test.ts - Timeout
  - Test: Processing exceeding 5 seconds returns 500 error
  - Test: Timeout triggers before webhook response
  - Test: Timeout error logged with duration
  - **FR**: FR3.3 - Timeout Protection
  - **Files**: `tests/webhooks/kayako/errors.test.ts`

### Configuration Tests (FR4.1)

- [ ] **Task 1.0.12**: Create config.test.ts
  - Test: Valid environment variables load successfully (Result.Ok)
  - Test: Missing KAYAKO_WEBHOOK_SECRET returns ConfigError (Result.Err)
  - Test: Missing KAYAKO_EVENT_QUEUE_URL returns ConfigError
  - Test: Invalid queue URL format returns validation error with message
  - Test: AWS_REGION defaults to 'us-east-1' when not provided
  - Test: WEBHOOK_TIMEOUT_MS defaults to 5000 when not provided
  - Test: Invalid WEBHOOK_TIMEOUT_MS (negative) returns validation error
  - **FR**: FR4.1 - Environment Configuration
  - **Files**: `tests/webhooks/kayako/config.test.ts`

### Integration Tests

- [ ] **Task 1.0.13**: Create integration.test.ts - End-to-end flow
  - Test: Valid webhook request flows through validation → parsing → queue
  - Test: Invalid signature short-circuits before parsing
  - Test: Parse error short-circuits before queue
  - Test: Queue error returns 500 but logs full context
  - **FR**: All FRs (integration)
  - **Files**: `tests/webhooks/kayako/integration.test.ts`

### Verification & Documentation

- [ ] **Task 1.0.14**: Run Phase 1.0 verification
  - Run `npm run test` and verify ALL tests fail appropriately (RED phase)
  - Verify TypeScript compilation succeeds with strict mode
  - Verify test file structure matches spec organization
  - Verify all Result type assertions compile correctly
  - **Success Criteria**: Automated Verification

- [ ] **Task 1.0.15**: Manual review of test coverage
  - Review all test cases to ensure every FR has coverage
  - Verify test descriptions clearly map to FR numbers
  - Confirm error path testing is comprehensive
  - Document any missing edge cases in notes section below
  - **Success Criteria**: Manual Verification

---

## Phase 1.1: Implementation ✅

**Status**: Complete
**Objective**: Implement webhook functionality until all Phase 1.0 tests pass (GREEN phase)
**Progress**: 15/15 tasks completed

### Project Setup

- [ ] **Task 1.1.1**: Initialize TypeScript project
  - Create `package.json` with project metadata
  - Install runtime dependencies: neverthrow, zod, @aws-sdk/client-sqs, express/fastify
  - Install dev dependencies: vitest, typescript, @biomejs/biome
  - Configure `tsconfig.json` with strict mode enabled
  - **FR**: Project Setup
  - **Files**: `package.json`, `tsconfig.json`

- [ ] **Task 1.1.2**: Configure build and test scripts
  - Add npm scripts: test, test:watch, typecheck, lint, check, fix, dev
  - Configure Vitest for TypeScript support
  - Set up Biome linting rules
  - **FR**: Project Setup
  - **Files**: `package.json`, `vitest.config.ts`, `biome.json`

### Core Types and Schemas (FR2.1, FR4.1)

- [ ] **Task 1.1.3**: Implement types.ts
  - Define KayakoEventSchema with Zod
  - Export KayakoEvent type inferred from schema
  - Define error types: ValidationError, SignatureError, ParseError, QueueError, ConfigError
  - Add TSDoc comments for all exported types
  - **FR**: FR2.1 - Payload Parsing
  - **Files**: `src/webhooks/kayako/types.ts`

### Configuration Module (FR4.1)

- [ ] **Task 1.1.4**: Implement config.ts
  - Define ConfigSchema with Zod (kayakoWebhookSecret, kayakoEventQueueUrl, awsRegion, webhookTimeoutMs)
  - Implement loadConfig(): Result<Config, ConfigError>
  - Read values from process.env
  - Validate using ConfigSchema.safeParse()
  - Return Result with detailed error messages
  - Add TSDoc comments
  - **FR**: FR4.1 - Environment Configuration
  - **Files**: `src/webhooks/kayako/config.ts`
  - **Tests Pass**: Task 1.0.12 tests should now pass

### Signature Verification (FR1.3)

- [ ] **Task 1.1.5**: Implement signature.ts
  - Implement verifyKayakoSignature(payload, signature, secret): Result<void, SignatureError>
  - Use crypto.createHmac('sha256', secret) for HMAC computation
  - Compare computed signature with provided signature (constant-time comparison)
  - Return Result.Ok for valid signatures
  - Return Result.Err with SignatureError for invalid signatures
  - Add TSDoc comments with examples
  - **FR**: FR1.3 - Signature Verification
  - **Files**: `src/webhooks/kayako/signature.ts`
  - **Tests Pass**: Task 1.0.5 tests should now pass

### Queue Client (FR2.2)

- [ ] **Task 1.1.6**: Implement queue.ts
  - Create SQS client wrapper
  - Implement sendToQueue(event, queueUrl, sqsClient): Promise<Result<string, QueueError>>
  - Use SendMessageCommand with MessageBody, MessageDeduplicationId (event.event_id), MessageGroupId
  - Wrap SQS errors in QueueError type
  - Return message ID on success
  - Add TSDoc comments
  - **FR**: FR2.2 - Event Forwarding
  - **Files**: `src/webhooks/kayako/queue.ts`
  - **Tests Pass**: Task 1.0.7 tests should now pass

### Core Handler Logic (FR2.1, FR2.2, FR2.3)

- [ ] **Task 1.1.7**: Implement handler.ts - Core orchestration
  - Define WebhookContext type (config, sqsClient, logger)
  - Implement parsePayload(body): Result<KayakoEvent, ParseError>
  - Implement handleKayakoWebhook(request, context): Promise<Result<WebhookResponse, WebhookError>>
  - Compose validation → parsing → forwarding using .andThen()
  - Map errors to WebhookError union type
  - Add TSDoc comments for all public functions
  - **FR**: FR2.1, FR2.2 - Payload Parsing, Event Forwarding
  - **Files**: `src/webhooks/kayako/handler.ts`
  - **Tests Pass**: Task 1.0.6, 1.0.7, 1.0.13 tests should now pass

### Error Transformation (FR3.1)

- [ ] **Task 1.1.8**: Implement errors.ts
  - Define error type hierarchy (ValidationError, SignatureError, QueueError, etc.)
  - Implement transformError(error): WebhookError with HTTP status codes
  - Map ValidationError → 400, SignatureError → 401, QueueError → 500
  - Ensure error messages are actionable but don't leak internals
  - Add TSDoc comments
  - **FR**: FR3.1 - Structured Error Responses
  - **Files**: `src/webhooks/kayako/errors.ts`
  - **Tests Pass**: Task 1.0.9 tests should now pass

### HTTP Endpoint (FR1.1, FR3.2, FR3.3)

- [ ] **Task 1.1.9**: Implement endpoint.ts - Express/Fastify route
  - Set up POST /webhooks/kayako route
  - Add method validation (reject non-POST)
  - Add Content-Type validation middleware
  - Extract signature from X-Kayako-Signature header
  - Read raw request body as string
  - Call handleKayakoWebhook with proper context
  - Map Result to HTTP response (200/400/401/500)
  - **FR**: FR1.1 - HTTP Endpoint Configuration
  - **Files**: `src/webhooks/kayako/endpoint.ts`
  - **Tests Pass**: Task 1.0.3, 1.0.4 tests should now pass

### Logging and Metrics (FR3.2)

- [ ] **Task 1.1.10**: Implement logging in endpoint.ts
  - Log INFO for successful webhook: { event_id, event_type, status: 'success', processing_time_ms }
  - Log ERROR for failed webhook: { event_id, error_code, message, status: 'failed', processing_time_ms }
  - Add request_id to all logs (generate or extract from header)
  - Integrate with structured logger (Winston, Pino, or console for MVP)
  - **FR**: FR3.2 - Logging and Metrics
  - **Files**: `src/webhooks/kayako/endpoint.ts`
  - **Tests Pass**: Task 1.0.10 tests should now pass

### Timeout Protection (FR3.3)

- [ ] **Task 1.1.11**: Implement timeout middleware
  - Create timeout middleware enforcing WEBHOOK_TIMEOUT_MS (default 5000ms)
  - Apply to /webhooks/kayako route
  - Return 500 error if handler exceeds timeout
  - Log timeout event with duration
  - **FR**: FR3.3 - Timeout Protection
  - **Files**: `src/webhooks/kayako/endpoint.ts` or `src/middlewares/timeout.ts`
  - **Tests Pass**: Task 1.0.11 tests should now pass

### Idempotency (FR2.3)

- [ ] **Task 1.1.12**: Verify SQS FIFO idempotency
  - Confirm MessageDeduplicationId is set to event.event_id in queue.ts
  - Test duplicate event handling manually
  - Verify SQS rejects duplicate within 5-minute window
  - Document idempotency behavior in TSDoc
  - **FR**: FR2.3 - Idempotency
  - **Files**: `src/webhooks/kayako/queue.ts`
  - **Tests Pass**: Task 1.0.8 tests should now pass

### Integration & Refinement

- [ ] **Task 1.1.13**: Wire up application entry point
  - Create `src/index.ts` or `src/server.ts`
  - Load config on startup with loadConfig()
  - Initialize SQS client
  - Register /webhooks/kayako route
  - Start HTTP server
  - Handle startup errors gracefully
  - **FR**: All FRs (application entry)
  - **Files**: `src/index.ts`

- [ ] **Task 1.1.14**: Refactor and optimize (GREEN → REFACTOR)
  - Review code for clarity and simplicity
  - Extract common utilities if needed
  - Ensure all functions are under 20 lines (personal preference)
  - Verify one concept per file
  - Add missing TSDoc comments
  - Run `npm run lint` and fix issues
  - **Success Criteria**: Code quality

- [ ] **Task 1.1.15**: Run Phase 1.1 verification
  - Run `npm run test` and verify ALL tests pass (GREEN phase)
  - Run `npm run typecheck` and verify strict TypeScript passes
  - Run `npm run lint` and verify no linting errors
  - Run `npm run check` and verify complete validation passes
  - **Success Criteria**: Automated Verification

---

## Manual Verification Checklist

**Status**: Not Started

After Phase 1.1 implementation, perform manual testing:

### Functional Testing

- [ ] **Manual Test 1**: Send valid webhook with curl
  ```bash
  curl -X POST http://localhost:3000/webhooks/kayako \
    -H "Content-Type: application/json" \
    -H "X-Kayako-Signature: <computed-signature>" \
    -d @test-payload.json
  ```
  - Expected: 200 response with { success: true }
  - Verify event appears in SQS queue

- [ ] **Manual Test 2**: Send webhook with invalid signature
  - Expected: 401 response with error message
  - Verify no event in SQS queue

- [ ] **Manual Test 3**: Send malformed JSON payload
  - Expected: 400 response with validation error details

- [ ] **Manual Test 4**: Send webhook with missing required field
  - Expected: 400 response with specific field error

- [ ] **Manual Test 5**: Verify logging output
  - Check logs contain: event_id, event_type, processing_time_ms
  - Verify ERROR logs for failures include error_code

- [ ] **Manual Test 6**: Timeout protection
  - Mock slow SQS client (5+ seconds)
  - Expected: 500 response within 5 seconds, timeout logged

### Performance Testing

- [ ] **Manual Test 7**: Measure end-to-end latency
  - Send 100 webhooks
  - Verify P95 latency < 1 second
  - Verify timeout never triggers for valid requests

### Security Testing

- [ ] **Manual Test 8**: Signature tampering
  - Modify payload after signature computation
  - Expected: 401 signature verification failure

- [ ] **Manual Test 9**: Replay attack
  - Send same signed webhook multiple times
  - Expected: First succeeds, subsequent deduplicated (return 200 but no duplicate in queue)

---

## Current Status Summary

**Phase**: Not Started
**Progress**: 0% complete (0/30 tasks)
**Blockers**: None
**Next Task**: Task 1.0.1 - Initialize test directory structure

---

## Session Recovery Context

**Last Working On**: N/A (not started)
**File Paths**: N/A
**Next Steps**:
1. Begin Phase 1.0 by initializing test structure
2. Create test fixtures and utilities
3. Write comprehensive failing tests for all FRs

---

## Notes and Decisions

### Implementation Decisions Made
- **Framework Choice**: Deferred to implementation phase (Express vs Fastify)
- **Logger Choice**: Deferred to implementation phase (Winston vs Pino vs console)
- **Test Framework**: Vitest recommended (fast, TypeScript-first)

### Discovered Issues
- None yet (not started)

### Future Enhancements (Out of Scope)
- Rate limiting at application level (deferred to API gateway)
- Webhook replay functionality for debugging
- Multi-tenant isolation (Phase 3 work)
- Attachment URL extraction (handled by Spec 004)

---

**Checklist last updated**: 2026-01-16
**Spec version**: 1.0
