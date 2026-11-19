# Custom log integration

> Send request logs from any server, CDN or middleware to Agent Analytics over HTTP

The custom log integration is for sites that don't run on Cloudflare, Vercel or CloudFront. Your server, CDN or middleware posts its HTTP request logs to a ChatFeatured endpoint. ChatFeatured keeps the requests made by AI crawlers and search bots and shows them in [Agent Analytics](../using-chatfeatured/agent-analytics.md).

In ChatFeatured, open **Integrations** and click **Custom Log Integration** under **Agent analytics**.

## Create an API key

On the Custom Log Integration page, click **New API Key**, enter a name and click **Create API Key**. Copy the key from the dialog. Keys start with `aa_`. Creating a key needs an Owner or Admin by default.

Any Agent Analytics key works for every log source, so you can reuse one from **Website > Agent Analytics > Settings**. A new key can take up to a minute to start working. Keep it on your server.

## Send logs

```http
POST https://ingest.chatfeatured.com/v1/logs
Content-Type: application/json
X-API-Key: aa_your_key
```

`Authorization: Bearer aa_your_key` works in place of `X-API-Key`.

The body is one JSON object per request, or an array of them to send a batch:

```json
[
  {
    "host": "example.com",
    "method": "GET",
    "pathname": "/blog/ai-trends",
    "query_params": "utm_source=chatgpt.com",
    "status": 200,
    "ip": "203.0.113.10",
    "userAgent": "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.1; +https://openai.com/gptbot",
    "referer": "",
    "timestamp": 1792540800000,
    "response_time_ms": 42
  }
]
```

| Field | Type | Notes |
| - | - | - |
| `userAgent` | string | **Required in practice.** The visitor's full, raw User-Agent header. |
| `host` | string | The hostname that was requested. |
| `pathname` | string | The path, without the query string. |
| `method` | string | `GET`, `HEAD` and so on. |
| `status` | number | The status code you returned. |
| `ip` | string | Optional. The original visitor's IP, not a proxy's. ChatFeatured uses it to filter out scanners that fake crawler user agents. |
| `query_params` | string | The query string without the leading `?`. Optional. |
| `referer` | string | Optional. |
| `timestamp` | number or string | Optional. Unix milliseconds, Unix seconds or an ISO 8601 string. Defaults to the time ChatFeatured received the log. |
| `response_time_ms` | number | Optional. Also accepted as `responseTimeMs` or `duration`. |

Any other field is ignored. Send logs in the background so they don't slow down your responses, and batch them where you can.

## Which requests are kept

ChatFeatured stores only requests whose `userAgent` matches an AI crawler or search engine bot (see [what gets counted](../using-chatfeatured/agent-analytics.md#what-gets-counted)). Pass the header through unchanged. Everything else, including human visits, is counted as filtered and discarded.

You can send all your traffic or filter on your side first. If you skip static assets, keep `robots.txt`, `llms.txt` and sitemaps: crawlers fetch them often.

## Responses

| Status | Body | Meaning |
| - | - | - |
| 200 | `{"status":"accepted","accepted":1,"filtered":0}` | `accepted` entries matched a bot and were stored. `filtered` entries didn't. |
| 400 | `{"error":"Invalid JSON body"}` | The body isn't valid JSON. Nothing was stored. |
| 401 | `{"error":"Missing API key"}` | No `X-API-Key` or `Authorization: Bearer` header. |
| 401 | `{"error":"Invalid API key"}` | The key is mistyped, deactivated or deleted, or less than a minute old. |
| 503 | `{"error":"Service overloaded","accepted":N}` | ChatFeatured was briefly at capacity. The first `N` entries were stored. Retry the rest. |

A 200 with `"accepted":0` isn't an error. None of the entries matched a known bot.

## Check that it works

Post a test entry with a crawler user agent in the body:

```bash
curl -X POST https://ingest.chatfeatured.com/v1/logs \
  -H "Content-Type: application/json" \
  -H "X-API-Key: aa_your_key" \
  -d '{"host":"example.com","method":"GET","pathname":"/","userAgent":"GPTBot/1.1","status":200}'
```

It should return `"accepted":1`, and the visit appears in **Website > Agent Analytics** within a few minutes. A browser user agent returns `"filtered":1` and never shows up.

## Related

* [Agent Analytics](../using-chatfeatured/agent-analytics.md): reading the data
* [Cloudflare](./cloudflare.md), [Vercel](./vercel.md) and [AWS Data Firehose](./aws-data-firehose.md): ready-made log sources


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/custom-log-integration](https://docs.chatfeatured.com/integrations/custom-log-integration).
