# API and MCP errors

> What each error code from the ChatFeatured API (v2) and MCP server means, and what to do about it

When a call to the ChatFeatured API or MCP server fails, the error says what went wrong and what to do next. This page lists every error code.

## What an error looks like

From the REST API (`/api/v2`), an error comes with its HTTP status and this body:

```json
{
  "error": {
    "code": "plan_required",
    "message": "This project doesn't have an active ChatFeatured plan.",
    "fix": "Start a plan or a trial: billing.changePlan with a planId from billing.get returns a checkout link for a person to open.",
    "next": {
      "operation": "billing.get",
      "method": "GET",
      "path": "/api/v2/organizations/org_123/billing",
      "input": { "organizationId": "org_123" }
    },
    "docUrl": "https://docs.chatfeatured.com/integrations/api-errors#plan-required",
    "details": { "upgradeUrl": "https://chatfeatured.com/pricing" },
    "requestId": "8f2c…"
  }
}
```

* `code` is stable. Branch on it rather than on the message.
* `fix` says what to do about it.
* `next` is there when one call fixes the problem or gets past it. `input` holds what the failed call already knew, such as ids.
* `details` carries the specifics, such as which fields failed validation.
* `requestId` identifies the request if you contact support.

From the MCP server (`/api/mcp`), the same error comes back as a tool error your AI assistant reads, with `next` naming the tool to call:

```text
plan_required: This project doesn't have an active ChatFeatured plan.
Fix: Start a plan or a trial: `organization_write` (operation `billing.changePlan`) …
Next: call organization_read with {"operation":"billing.get","input":{"organizationId":"org_123"}}
Docs: https://docs.chatfeatured.com/integrations/api-errors#plan-required
```

## Error codes

### Unauthenticated

`unauthenticated` (401). The request has no API key or OAuth token, or it isn't valid. Send an API key as `Authorization: Bearer cf_…`, or an OAuth access token. Create one under **Integrations → AI Agent (MCP)** (see [MCP server](./mcp.md#connect-with-an-api-key)).

### Forbidden

`forbidden` (403). Your role in the organization doesn't allow this, for example a Viewer changing prompts. Ask an owner or admin to do it, or to change your role.

### Plan required

`plan_required` (402). The project's organization has no active or trialing plan. Start a plan or a trial; `billing.changePlan` returns a checkout link for a person to complete. Only owners and admins can change the plan.

### Not found

`not_found` (404). Nothing exists with that id, or you can't see it. Check the id; listing the parent (for example `projects.list` for projects) shows the ids you can use.

### Method not allowed

`method_not_allowed` (405). The path exists but not with that HTTP method. The OpenAPI document at `/api/v2/openapi.json` lists the methods for each path.

### Conflict

`conflict` (409). The change clashes with what's already there, such as adding a competitor that's already tracked. Read the current state and retry against it; `details` say what it clashes with.

### Validation error

`validation_error` (422). Some input is missing or invalid. `details.issues` lists each field and what's wrong with it. Fix them and send the call again.

### Limit reached

`limit_reached` (403). The plan's allowance for this is used up, for example prompt slots or monthly articles. `billing.get` shows usage and when each allowance resets; a bigger plan raises the limit.

### Rate limited

`rate_limited` (429). Too many requests in a short time. All of your API keys and OAuth connections share 300 units a minute: a request costs 1, a change 2 and starting a job 5 (each operation's `x-chatfeatured-rate-units` in the OpenAPI document). Each key also allows 100 requests a minute. Responses carry `X-RateLimit-Limit`, `X-RateLimit-Remaining` and `X-RateLimit-Reset` for whichever limit is closer. Wait `details.retryAfterSeconds` (also in the `Retry-After` header), then retry.

### Internal

`internal` (500). Something failed on our side. Retry once. If it keeps happening, contact [support@chatfeatured.com](mailto:support@chatfeatured.com) with the `requestId`.

### Revision conflict

`revision_conflict` (409). The article changed since you read it, so your edit was made against an old version. `details.changedSections` has the sections that changed, with their current text. Re-target your edit and send `details.currentRevision`.

### Article locked

`article_locked` (409). The article's status doesn't allow edits, for example while it's published. `details.unlockedBy` names the action that makes it editable again.

### Invalid transition

`invalid_transition` (409). That action isn't allowed in the resource's current state, such as approving an article idea that hasn't been written, or verifying a site's custom domain before one is set. The message says why. Read the resource to see its status, and do what the message names first.

### Generation in progress

`generation_in_progress` (409). The article is being written. Wait for the job in `details.jobId` to finish (writing takes 2 to 5 minutes), then retry.

### Job finished

`job_finished` (409). You tried to cancel a job that already ended. Read the job for its result.

### Edit target not found

`edit_target_not_found` (422). The text your edit points at isn't in the article. Read the section's current Markdown and copy the target exactly, including punctuation and links.

### Edit target ambiguous

`edit_target_ambiguous` (422). The text your edit points at appears more than once. Include more of the surrounding text so it matches once, or target the whole section by its id.

### Idempotency key reused

`idempotency_key_reused` (422). The same `Idempotency-Key` was sent with a different request. Use a new key for a new request; reuse a key only to retry the same one.

### CMS error

`cms_error` (502). Your connected CMS refused the request, and the message is its reason. Check the integration's credentials and settings in ChatFeatured, then retry.

### Response too large

`response_too_large` (413, MCP only). The result is bigger than an AI assistant can read in one go. Ask for less: a smaller `limit` with the cursor or offset from the response, narrower filters, or fewer fields.

### Payload too large

`payload_too_large` (413). The request body is over 6 MB. Send less, or split a bulk request into several calls.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/api-errors](https://docs.chatfeatured.com/integrations/api-errors).
