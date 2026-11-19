# Webhooks

> Send a project's events to your own URL, such as an article being published or a site audit finishing, so your code can act on them as they happen

A webhook tells your own code when something happens in a project, so it can act without polling the API. ChatFeatured sends each event as a signed `POST` to the URL you choose, and retries for up to 72 hours when your URL doesn't answer.

Find them under **Integrations → Webhooks**, in the Developer section. Each project has its own endpoints, up to 20. Owners and admins can also add [organization endpoints](#organization-endpoints), which get every project's events at one URL. Viewers can see endpoints and deliveries but can't change them.

> [!NOTE]
>
> These webhooks are separate from the older ones on the [Project REST API (v1)](./rest-api.md#webhooks) page. They're signed differently, so follow this page for endpoints you add under **Integrations → Webhooks**.

## Add an endpoint

**1. Open Webhooks**

Go to **Integrations → Webhooks** and click **Add endpoint**.

**2. Enter the URL**

Your receiver's address, such as `https://example.com/webhooks/chatfeatured`. It must be a public `https` URL with a hostname, not an IP address. Add a **Description** if you'll have several endpoints.

**3. Pick the events**

Choose **All events, including new kinds we add later**, or **Only the events I pick** and tick the groups you want.

**4. Copy the signing secret**

Click **Add endpoint**. The signing secret (it starts with `whsec_`) shows once. Copy it into your receiver's settings before you click **Done**. You can't see it again, only rotate it.

**5. Send a test**

Open the endpoint and click **Send test event**. A `webhook.test` event goes out, and the delivery shows up under **Deliveries** with your receiver's response.

## Organization endpoints

An organization endpoint gets the events of every project in your organization, including projects you add later, at one URL. An agency can point one endpoint at all its clients instead of adding one per project. It also gets events that belong to the organization rather than a project, such as AEO reports.

Only owners and admins see them. On any project's **Integrations → Webhooks** page, find **Organization endpoints** and click **Add endpoint**, then follow the same steps as above. An organization can have up to 20.

Each delivery says which project it came from in `data.projectId`. To get only report events, pick **AEO reports** and **Performance reports** under **Only the events I pick**.

## Events

Each group covers every event that starts with its prefix, such as `article.` for Articles, including kinds added later.

| Group | Examples |
| - | - |
| Articles | `article.created`, `article.review`, `article.approved`, `article.published`, `article.archived` |
| Publishing | `publication.live`, `publication.failed`, `publication.removed` |
| Comments | `comment.created`, `comment.deleted` |
| Jobs | `job.succeeded`, `job.failed`, `job.canceled` |
| Prompts | `prompt.created`, `prompt.paused`, `prompt.resumed`, `prompt.deleted` |
| Suggested prompts | `suggested_prompt.accepted`, `suggested_prompt.rejected` |
| Competitors | `competitor.created`, `competitor.updated`, `competitor.merged` |
| Brand names | `brand_names.updated` |
| Keywords | `keyword.added`, `keyword.removed` |
| Brand book | `brand_book.updated` |
| Personas | `persona.created`, `persona.updated` |
| Project settings | `project.updated`, `project.settings.updated` |
| Recommendations | `recommendation.accepted`, `recommendation.dismissed` |
| Sites | `site.created`, `site.deleted` |
| Site audits | `site_audit.started` |
| Site audit issues | `issue.marked_fixed`, `issue.reopened` |
| Tracked content | `tracked_content.created`, `tracked_content.deleted` |
| Knowledge base | `knowledge_base_document.created`, `knowledge_base_document.deleted` |
| Images | `image.created`, `image.deleted` |
| Integrations | `integration.connected`, `integration.disconnected` |
| Crawler log keys | `crawler_ingest_key.created`, `crawler_ingest_key.deleted` |
| Performance reports | `performance_report.created`, `performance_report.completed`, `performance_report.failed` |
| AEO reports (organization endpoints only) | `aeo_report.created`, `aeo_report.completed`, `aeo_report.failed`, `aeo_report.shared` |
| Automations | `automation.created`, `automation.updated`, `automation.deleted` |
| Team access | `member.project_access.granted`, `member.project_access.revoked` |
| Webhook endpoints | `webhook_endpoint.disabled` |

Work that takes a while, such as writing an article or running a site audit, runs as a job. When a job ends it sends `job.succeeded`, `job.failed` or `job.canceled`, with the kind of work in `data.jobType` and what it worked on in `data.resource`. Writing an article also sends `article.generation.started` when it begins, then `article.generation.succeeded`, `article.generation.failed` or `article.generation.canceled`. A performance report or AEO report sends `.completed` or `.failed` when it finishes, whether it was started from the dashboard, the API or your AI agent.

## What a delivery looks like

Every delivery is a `POST` with a JSON body:

```json
{
  "id": "0f6c1b2e-…",
  "type": "article.published",
  "createdAt": "2026-11-16T09:30:00.000Z",
  "data": {
    "projectId": "…",
    "object": { "type": "article", "id": "…" }
  }
}
```

`data.object` names what the event is about, and `data.projectId` the project it happened in, when there is one. Some events add a few details next to it. The body stays small on purpose, so fetch the full record through the API if you need it.

Your receiver should answer with any `2xx` status within 15 seconds. Anything else, including a redirect, counts as a failure.

## Verify the signature

Each delivery carries three headers, following the [Standard Webhooks](https://www.standardwebhooks.com) spec:

| Header | What it holds |
| - | - |
| `webhook-id` | The delivery's id. It stays the same on every retry, so use it to skip duplicates. |
| `webhook-timestamp` | When this attempt was signed, in seconds since 1970. |
| `webhook-signature` | `v1,` followed by the base64 HMAC-SHA256 of `webhook-id.webhook-timestamp.body`. Right after a secret rotation it holds two signatures separated by a space. |

The HMAC key is the part of your secret after `whsec_`, decoded from base64. Check the signature over the raw body, before you parse the JSON, and reject timestamps more than 5 minutes old.

```javascript Node.js
import crypto from "node:crypto";

function verifyWebhook(rawBody, headers, secret) {
  const id = headers["webhook-id"];
  const timestamp = headers["webhook-timestamp"];
  const signatures = headers["webhook-signature"] ?? "";
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false;

  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = crypto
    .createHmac("sha256", key)
    .update(`${id}.${timestamp}.${rawBody}`)
    .digest("base64");

  return signatures.split(" ").some((candidate) => {
    const [version, signature] = candidate.split(",");
    return (
      version === "v1" &&
      signature?.length === expected.length &&
      crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
    );
  });
}
```

```python Python
import base64, hashlib, hmac, time

def verify_webhook(raw_body: bytes, headers: dict, secret: str) -> bool:
    msg_id = headers["webhook-id"]
    timestamp = headers["webhook-timestamp"]
    if abs(time.time() - int(timestamp)) > 300:
        return False

    key = base64.b64decode(secret.removeprefix("whsec_"))
    signed = f"{msg_id}.{timestamp}.".encode() + raw_body
    expected = base64.b64encode(hmac.new(key, signed, hashlib.sha256).digest()).decode()

    for candidate in headers.get("webhook-signature", "").split(" "):
        version, _, signature = candidate.partition(",")
        if version == "v1" and hmac.compare_digest(signature, expected):
            return True
    return False
```

Any Standard Webhooks library does the same check, so you can use one instead of this code.

## Retries and failing endpoints

A delivery that fails is tried again after 5 seconds, then 5 minutes, 30 minutes, 2 hours, 5 hours, 10 hours, 14 hours and twice more after 20 hours each. That's 10 attempts over about 72 hours, after which the delivery shows as **Failed**.

While deliveries keep failing, the endpoint page says since when. If an endpoint fails for 72 hours without a single success, ChatFeatured turns it off and sends a `webhook_endpoint.disabled` event to your other endpoints. Fix the receiver, click **Send test event** to check it, then click **Turn on**.

## Deliveries

The endpoint page lists its deliveries, newest first, with their status (**Pending**, **Retrying**, **Succeeded** or **Failed**), the response code, the attempts and the time. Click one to see the payload, your receiver's response, the error and when the next retry goes out. **Replay** sends the same event again as a new delivery, which helps after you've fixed a bug in your receiver.

## Rotate the signing secret

Open the endpoint, click **Rotate secret** and confirm. The new secret shows once. For the next 24 hours, deliveries carry signatures from both the old and the new secret, so you can update your receiver without missing any. After that, only the new one signs.

## Change or remove an endpoint

On the endpoint page, **Edit** changes the URL, description and events. **Turn off** pauses deliveries without deleting anything, and **Delete** removes the endpoint and its deliveries.

You can also manage endpoints through the API and the [MCP server](./mcp.md), in the `webhooks` area.

## Troubleshooting

> [accordion] The URL field says "must use https"
>
> Webhooks only go to `https` URLs. Put your receiver behind TLS, or use a tunnelling tool while you develop.

> [accordion] The URL field says "resolves to a private or internal address" or "must be on the public internet"
>
> ChatFeatured only sends to addresses on the public internet. A URL on your office network, `localhost` or a cloud-internal hostname won't work. Use a public hostname for your receiver.

> [accordion] Every delivery fails signature checks
>
> Check the signature over the raw request body, before any JSON parsing or reformatting, and decode the part of the secret after `whsec_` from base64. If you rotated the secret, update your receiver within 24 hours.

> [accordion] Deliveries show Retrying with no response code
>
> Your receiver didn't answer within 15 seconds, or the connection failed. Answer with a `2xx` straight away and do slow work afterwards.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/webhooks](https://docs.chatfeatured.com/integrations/webhooks).
