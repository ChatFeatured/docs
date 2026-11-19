# REST API

> Export your prompts, AI responses and visibility history, manage articles and tracked content, and receive webhooks when articles change status

The REST API lets your own code export a project's data (prompts, every AI response with its brand mentions and sources, and daily visibility and share of voice), read its articles, mark them published, and track external URLs for AI citation attribution. Webhooks tell your code when an article is ready for review or has been published. Set it up in **Integrations → Project REST API (v1)**.

Each API key belongs to one project. To work across all your projects, or from an AI assistant, use the [MCP server](./mcp.md). The two kinds of key aren't interchangeable.

## Create an API key

1. Go to **Integrations → Project REST API (v1)**.
2. Click **Create API Key**.
3. Copy the key shown under **Your API Key**. It won't be shown again.

Keys start with `cf_`. A project has one key at a time. **Regenerate** (the refresh icon) replaces it and the old key stops working immediately. **Remove** (the trash icon) revokes it. Viewers can't manage keys or webhooks.

Keep the key in a secret store, out of version control and client-side code.

## Authentication

Send the key in either header:

```text
Authorization: Bearer YOUR_API_KEY
```

```text
X-API-Key: YOUR_API_KEY
```

An `?api_key=YOUR_API_KEY` query parameter also works, but prefer a header.

## Base URL

```text
https://chatfeatured.com/api/v1
```

## Rate limit

Each API key allows 100 requests per minute. All of your keys and connected apps also share 300 requests a minute, across this API, the platform API and MCP. Over either limit, requests fail with `429 Too Many Requests`, a `Retry-After` header with the seconds to wait, and an `error` message saying which limit you reached.

## Endpoints

### List articles

```text
GET /articles
```

Lists the project's articles in one status, newest first.

| Parameter | Type | Description |
| - | - | - |
| `status` | string | `published` (default), `review`, `awaiting_approval`, `approved` or `scheduled`. Any other value returns `400`. |
| `limit` | number | Results per page. Default 20, maximum 100. |
| `offset` | number | Pagination offset. Default 0. |

```bash
curl "https://chatfeatured.com/api/v1/articles?status=published&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Response:

```json
{
  "data": [
    {
      "id": "abc123",
      "title": "How to Optimize for AI Search",
      "slug": "how-to-optimize-for-ai-search",
      "status": "published",
      "excerpt": "A guide to...",
      "metaDescription": "Learn how to optimize...",
      "content": "<p>Full HTML content...</p>",
      "featuredImageUrl": "https://example.com/image.jpg",
      "scheduledAt": null,
      "publishedAt": "2026-03-20T12:00:00.000Z",
      "priority": "medium",
      "wordCount": 1200,
      "readingTimeMinutes": 5,
      "createdAt": "2026-03-19T10:00:00.000Z",
      "updatedAt": "2026-03-20T12:00:00.000Z",
      "metadata": {
        "articleType": "guide",
        "description": "A guide to AI search optimization"
      }
    }
  ],
  "pagination": {
    "total": 42,
    "limit": 10,
    "offset": 0
  }
}
```

`content` is HTML. `metadata` is free-form, so don't rely on its shape.

### Get one article

```text
GET /articles/{idOrSlug}
```

Fetches one article by ID or slug, in any status.

```bash
curl https://chatfeatured.com/api/v1/articles/how-to-optimize-for-ai-search \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The response is a `data` object with the same fields as the list. It returns `404` if no article in the project matches.

### Mark an article published

```text
POST /articles/{idOrSlug}/publish
```

> [!WARNING]
>
> This marks the article published in ChatFeatured (and on a live [Blog CMS](./blog-cms.md)). It doesn't send it to a connected CMS such as WordPress or Webflow. Put the article live on your site first, then call this with the live URL.

Only articles in `review` or `approved` can be published. Any other status returns `400`, including one that's already published.

Optional JSON body:

| Parameter | Type | Description |
| - | - | - |
| `externalUrls` | string\[] | Live http or https URLs where the article is published. Used to attribute AI citations to the article and submitted for [indexing](../index-submissions/index-submissions.md). |

```bash
curl -X POST https://chatfeatured.com/api/v1/articles/abc123/publish \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"externalUrls": ["https://example.com/blog/my-article"]}'
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "abc123",
    "status": "published",
    "publishedAt": "2026-03-20T12:00:00.000Z"
  }
}
```

Publishing also sends the `article.published` webhook if you've turned it on.

### Track external content

```text
POST /tracked-content
```

Tracks a URL you published somewhere else, a LinkedIn post for example, so AI citations of it count toward your project. Tracked URLs appear in the **Content impact** widget on the dashboard.

| Parameter | Type | Description |
| - | - | - |
| `url` | string | Required. An http or https URL. |
| `publishedAt` | string | Optional ISO 8601 date. Overrides the date read from the page. |

```bash
curl -X POST https://chatfeatured.com/api/v1/tracked-content \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.linkedin.com/pulse/my-article"}'
```

Response (`201`):

```json
{
  "success": true,
  "data": {
    "id": "abc123",
    "url": "https://www.linkedin.com/pulse/my-article",
    "normalizedUrl": "https://linkedin.com/pulse/my-article",
    "title": "My Article",
    "description": "A post about AI search...",
    "imageUrl": "https://example.com/image.jpg",
    "publishedAt": "2026-03-20T12:00:00.000Z",
    "domain": "linkedin.com",
    "createdAt": "2026-03-20T12:00:00.000Z",
    "updatedAt": "2026-03-20T12:00:00.000Z"
  }
}
```

Returns `409` if the URL is already tracked or linked to an article.

### List tracked content

```text
GET /tracked-content
```

Lists the project's tracked URLs, most recently added first. Takes `limit` (default 20, maximum 100) and `offset`.

```bash
curl "https://chatfeatured.com/api/v1/tracked-content?limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The response is a `data` array with the same fields as above, plus the `pagination` object.

## Project data

These endpoints return the data behind your dashboard, so you can keep a copy or check our figures yourself. They need an active ChatFeatured plan; without one they return `403`.

A **response** is one AI answer: one prompt asked on one platform in one country on one collection date. Each day, ChatFeatured asks every active prompt once on each platform you track, in each country set on the prompt. The prompt is asked exactly as written, in its own language, and the platform sees the request coming from that country. Claude and Grok are asked through their APIs, which have no location, so country doesn't change their answers. Muse is asked through its API too, but its web search is told the country.

Dates are collection dates in `YYYY-MM-DD` form. Platform values are `chatgpt`, `perplexity`, `google-ai-mode`, `gemini`, `bing-copilot-search`, `grok`, `claude` and `muse`. `copilot` still returns Copilot's history, but Copilot is no longer tracked, so it has no answers after it was replaced by Bing Copilot Search. Countries are two-letter codes such as `DE`.

Like the dashboard, these endpoints leave out paused prompts. Add `includePaused=true` to include their history.

### List prompts

```text
GET /prompts
```

Lists the project's prompts, paused ones included, oldest first.

| Parameter | Type | Description |
| - | - | - |
| `status` | string | `active` or `paused`. Default: both. |
| `limit` | number | Results per page. Default 100, maximum 500. |
| `offset` | number | Pagination offset. Default 0. |

```json
{
  "data": [
    {
      "id": "37bwKu6fJVr-8_40u5ti-",
      "text": "Milk thistle vs NAC for liver support: which works better?",
      "status": "active",
      "countries": ["DE"],
      "tags": [{ "id": "x3nxUIwpBhWu75mvRQCXA", "name": "Comparisons" }],
      "createdAt": "2026-03-09T16:08:38.531Z",
      "updatedAt": "2026-03-12T01:01:34.380Z"
    }
  ],
  "pagination": { "total": 64, "limit": 100, "offset": 0 }
}
```

### List responses

```text
GET /responses
```

Lists AI responses, oldest collection date first, up to 500 per page. Pass `nextCursor` from each page as `cursor` to get the next one; it's `null` on the last page.

A day's responses keep arriving until about a day after its collection date. For a complete export, set `to` to two days ago and fetch newer dates on your next run. Within that range, paging returns each response once.

| Parameter | Type | Description |
| - | - | - |
| `from`, `to` | date | Collection dates to include, inclusive. Default: all history. |
| `platform` | string | One or more platforms, comma-separated. |
| `country` | string | One or more country codes, comma-separated. |
| `promptId` | string | One or more prompt IDs, comma-separated. |
| `includeText` | boolean | Include each response's text. Default `true`. |
| `includeMentions` | boolean | Include brand mentions. Default `false`. |
| `includeSources` | boolean | Include sources. Default `false`. |
| `includePaused` | boolean | Include paused prompts' responses. Default `false`. |
| `limit` | number | Results per page. Default 100, maximum 500. |
| `cursor` | string | `nextCursor` from the previous page. |

```bash
curl "https://chatfeatured.com/api/v1/responses?from=2026-03-01&includeMentions=true&includeSources=true&limit=500" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

```json
{
  "data": [
    {
      "id": "Xc1vR8mKq2LwZp0aTn4sB",
      "runId": "kP3dW9sQe1YbN7uHf2LmA",
      "promptId": "37bwKu6fJVr-8_40u5ti-",
      "platform": "chatgpt",
      "country": "DE",
      "collectionDate": "2026-10-22",
      "provider": "cloro",
      "text": "Mariendistel und NAC unterstützen die Leber auf unterschiedliche Weise…",
      "mentions": [
        {
          "brand": { "id": "ohRz7YoYmtAOibM1rv0Yb", "name": "Legalon", "role": "own" },
          "nameInAnswer": "Legalon",
          "type": "direct",
          "rank": 1,
          "sentiment": 72,
          "sentimentExplanation": "Recommended as a well-studied milk thistle product."
        }
      ],
      "sources": [
        {
          "url": "https://uni-graz.at/de/neuigkeiten/ran-ans-fett",
          "domain": "uni-graz.at",
          "title": "Ran ans Fett: Forscher:innen entschlüsseln Stoff aus Mariendistel",
          "type": "Academic",
          "role": "cited",
          "position": 1
        }
      ]
    }
  ],
  "pagination": { "limit": 500, "nextCursor": "WyIyMDI2LTEwLTIyIiwi…" }
}
```

* `text` is the response as the platform displayed it, in Markdown when the platform sent it.
* `provider` is the service that asked the platform for us.
* `mentions[].brand` is the brand the mention counts toward on your dashboard. `role` is `own` (your project), `competitor` or `other`. A brand you've grouped counts toward its group, as it does on the dashboard, so regrouping changes it for past responses too.
* `mentions[].type` is `direct` when the response names the brand, or `citation` when the brand only appears in a cited page's title or URL. Only direct mentions count toward visibility and share of voice.
* `mentions[].rank` is where the brand comes among the brands named directly, 1 being first. `sentiment` runs from 1 to 100; both are `null` when there's no value.
* `sources[].role` is `cited` when the response cites the page, or `sourced` when the platform's search found it but the response didn't use it. Only cited pages count in citation figures. `position` is the page's place in the platform's source list.

Brand mentions are extracted from the text by ChatFeatured, and we re-run that extraction when we improve it, so a later export can differ from an earlier one.

### Get one response

```text
GET /responses/{id}
```

Fetches one response with its text, mentions and sources, paused prompts' responses included. It returns `404` if the project has no response with that ID.

### Daily metrics

```text
GET /metrics/daily
```

Visibility and share of voice for your project and its competitors, per collection date and platform, with the counts behind them. Add up the counts over any days or platforms and divide to get the dashboard's figure for that range.

| Parameter | Type | Description |
| - | - | - |
| `from`, `to` | date | Inclusive. Default: the last 30 days. At most 92 days per request. |
| `platform` | string | One or more platforms, comma-separated. |
| `country` | string | One or more country codes, comma-separated. |
| `promptId` | string | One or more prompt IDs, comma-separated. |
| `includePaused` | boolean | Include paused prompts. Default `false`. |

```json
{
  "data": [
    {
      "date": "2026-10-16",
      "platform": "chatgpt",
      "responses": 32,
      "runsInScope": 13,
      "brands": [
        {
          "id": "ohRz7YoYmtAOibM1rv0Yb",
          "runs": 4,
          "visibility": 0.3076923076923077,
          "shareOfVoice": 0.4,
          "sentiment": 70.5,
          "sentimentSum": 282,
          "sentimentCount": 4
        }
      ]
    }
  ],
  "trackedBrands": [{ "id": "ohRz7YoYmtAOibM1rv0Yb", "name": "Legalon", "role": "own" }],
  "range": { "from": "2026-10-16", "to": "2026-10-22" }
}
```

* `responses` counts every response collected.
* The other counts are of runs, not responses: a run is one `runId`. Almost every run has one response, but some runs on 2026-10-01 have two, so count distinct `runId` values when you recompute these from responses.
* `runsInScope` counts runs whose response names at least one brand directly. It's the visibility denominator.
* `runs` counts runs whose response names the brand directly. `visibility` is `runs ÷ runsInScope`.
* `shareOfVoice` is the brand's `runs` divided by the sum of `runs` over your project and its competitors.
* `sentiment` is the mean over the brand's scored direct mentions: `sentimentSum ÷ sentimentCount`.
* A value is `null` when its denominator is 0.

### Coverage

```text
GET /coverage
```

What was collected per platform and country: how many responses, over how many prompts and days, and which providers asked. Use it to check the sampling above against what actually ran.

| Parameter | Type | Description |
| - | - | - |
| `from`, `to` | date | Inclusive. Default: the last 30 days. |
| `platform` | string | One or more platforms, comma-separated. |
| `country` | string | One or more country codes, comma-separated. |
| `includePaused` | boolean | Include paused prompts. Default `false`. |

```json
{
  "data": [
    {
      "platform": "chatgpt",
      "country": "DE",
      "responses": 7184,
      "prompts": 64,
      "days": 226,
      "firstDate": "2026-03-09",
      "lastDate": "2026-10-22",
      "providers": [
        { "provider": "cloro", "responses": 4573 },
        { "provider": "brightdata", "responses": 2611 }
      ]
    }
  ],
  "range": { "from": "2026-03-01", "to": "2026-10-22" }
}
```

## Webhooks

ChatFeatured sends a `POST` to your URL when an article is ready for review or has been published.

This section covers the webhook on this page's **Webhooks** card. For endpoints that take any of a project's events, added under **Integrations → Webhooks**, see [Webhooks](./webhooks.md).

### Set up a webhook

Create an API key first; the **Webhooks** card appears after.

1. Go to **Integrations → Project REST API (v1)**.
2. In **Webhooks**, enter your **Webhook URL**.
3. Optionally enter a **Signing Secret (optional)**. ChatFeatured uses it to sign each request.
4. Under **Events**, turn on **Article ready for review**, **Article published**, or both.
5. Click **Save Webhook Settings**.

Once a URL is saved, **Send Test** sends a sample `article.published` payload with placeholder content.

### When each event fires

`article.review` fires when ChatFeatured finishes writing an article and it moves to review.

`article.published` fires every time an article moves to published, however it got there: a CMS or Blog CMS publish from the dashboard or MCP, marking it published by hand, the REST API's publish endpoint, or a scheduled publish reaching its time.

### Payload

Both events send the same shape, with the full article. `content` is HTML.

```json
{
  "event": "article.published",
  "timestamp": "2026-03-20T12:00:00.000Z",
  "data": {
    "id": "abc123",
    "title": "Your Article Title",
    "slug": "your-article-title",
    "status": "published",
    "excerpt": "A brief excerpt...",
    "metaDescription": "Meta description...",
    "content": "<p>Full HTML content...</p>",
    "featuredImageUrl": "https://example.com/image.jpg",
    "scheduledAt": null,
    "publishedAt": "2026-03-20T12:00:00.000Z",
    "priority": "medium",
    "wordCount": 1200,
    "readingTimeMinutes": 5,
    "createdAt": "2026-03-19T10:00:00.000Z",
    "updatedAt": "2026-03-20T12:00:00.000Z",
    "metadata": {
      "articleType": "guide",
      "description": "A brief excerpt..."
    }
  }
}
```

### Delivery

Each event is sent once. Your endpoint has 10 seconds to answer with a 2xx; otherwise the event is dropped, not retried. Answer quickly and do the work in the background.

### Verify the signature

With a signing secret, each request carries an `X-Webhook-Signature` header: the hex-encoded HMAC-SHA256 of the raw request body, keyed with your secret. Compute it over the raw bytes, before JSON parsing.

```python
import hmac
import hashlib

def verify_webhook(payload: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature or "")
```

```javascript
const crypto = require("crypto");

function verifyWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  if (typeof signature !== "string" || signature.length !== expected.length) {
    return false;
  }
  return crypto.timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(signature, "hex")
  );
}
```

## Errors

Errors return JSON with an `error` field:

```json
{
  "error": "Article not found"
}
```

| Status | When |
| - | - |
| `400` | Invalid parameter, or publishing an article that isn't in `review` or `approved` |
| `401` | Missing, invalid or removed key. Check the header format and that the key wasn't regenerated. |
| `403` | Not this project's REST API key, for example an MCP key (`"This API key is not authorized for the REST API"`), or a project data endpoint called without an active plan |
| `404` | No article or response in the project matches the ID |
| `409` | The URL is already tracked or already linked to an article |
| `429` | The key went over 100 requests per minute, or your account over 300 |
| `500` | Server error |

## Example: export all your responses

Page through every response for a project and write them to a file, one JSON object per line.

```python
import json
import os
import requests

API = "https://chatfeatured.com/api/v1"
HEADERS = {"Authorization": f"Bearer {os.environ['CHATFEATURED_API_KEY']}"}

params = {
    "includeMentions": "true",
    "includeSources": "true",
    "includePaused": "true",
    "limit": 500,
}
with open("responses.jsonl", "w") as out:
    while True:
        page = requests.get(f"{API}/responses", params=params, headers=HEADERS)
        page.raise_for_status()
        body = page.json()
        for response in body["data"]:
            out.write(json.dumps(response, ensure_ascii=False) + "\n")
        if not body["pagination"]["nextCursor"]:
            break
        params["cursor"] = body["pagination"]["nextCursor"]
```

At 500 responses a page, 100 requests a minute covers 50,000 responses a minute.

## Example: publish on your own site

Publish approved articles to your own site, then record each one in ChatFeatured so the live URL is tracked for citations.

```python
import os
import requests

API = "https://chatfeatured.com/api/v1"
HEADERS = {"Authorization": f"Bearer {os.environ['CHATFEATURED_API_KEY']}"}

def publish_on_my_site(article) -> str:
    # Your own publishing code. Return the live URL.
    raise NotImplementedError

response = requests.get(
    f"{API}/articles",
    params={"status": "approved", "limit": 100},
    headers=HEADERS,
)
response.raise_for_status()

for article in response.json()["data"]:
    live_url = publish_on_my_site(article)
    requests.post(
        f"{API}/articles/{article['id']}/publish",
        json={"externalUrls": [live_url]},
        headers=HEADERS,
    ).raise_for_status()
```

## Troubleshooting

> [accordion] Webhook never arrives
>
> Check the event is on and you clicked **Save Webhook Settings**, and that the URL is public and answers with a 2xx within 10 seconds. **Send Test** shows the status code your endpoint returned.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/rest-api](https://docs.chatfeatured.com/integrations/rest-api).
