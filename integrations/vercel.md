# Vercel

> Send AI crawler visits to Agent Analytics with a Vercel log drain

The Vercel integration uses a Vercel log drain to forward your site's request logs to ChatFeatured. ChatFeatured keeps the requests made by AI crawlers and search bots and shows them in [Agent Analytics](../using-chatfeatured/agent-analytics.md). Nothing changes in your code or deployments.

In ChatFeatured, open **Integrations** and click **Vercel** under **Agent analytics**.

> [!WARNING]
>
> Vercel offers drains only on the **Pro** and **Enterprise** plans, billed by usage. On the Hobby plan, use the [Cloudflare integration](./cloudflare.md) instead.

## Set it up

**1. Create an API key**

On the Vercel integration page, click **New API Key**, enter a name and click **Create API Key**. Copy the key from the dialog. Keys start with `aa_`. Creating a key needs an Owner or Admin by default.

Any Agent Analytics key works for every log source, so you can reuse one from **Website > Agent Analytics > Settings**. A new key can take up to a minute to start working.

**2. Add a drain in Vercel**

1. In the [Vercel dashboard](https://vercel.com/dashboard), open **Team Settings > Drains** and click **Add Drain**.
2. Choose **Logs** as the data type.
3. Name the drain (for example "Agent Analytics") and select the projects to send.
4. Under **Additional configuration for logs**, check the **Static Files**, **Edge Functions** and **Functions** sources and the **Production** environment. Don't add sampling rules, so 100% of logs are sent.

**3. Point it at ChatFeatured**

Select **Custom Endpoint** and enter:

| Setting | Value |
| - | - |
| Endpoint URL | `https://ingest.chatfeatured.com/v1/logs/vercel` |
| Format | **NDJSON** |
| Custom Headers | `X-API-Key: aa_your_key` |

The format must be NDJSON. With JSON, the drain passes Vercel's test but nothing is recorded.

**4. Test and create**

Click **Test**, confirm it returns a 200 response, then click **Create Drain**. **Test** only checks the URL and API key.

## Check that it works

A browser visit won't show anything, because ChatFeatured keeps only requests from recognized bots. Request a page with a crawler user agent instead:

```bash
curl -A "GPTBot/1.0" https://example.com/
```

Vercel batches drain deliveries, so allow a minute or two. The visit then appears in **Website > Agent Analytics** as a GPTBot request.

## What gets recorded

ChatFeatured reads the request log lines from the Static Files, Edge Functions and Functions sources and keeps requests from AI crawlers and search engine bots (see [what gets counted](../using-chatfeatured/agent-analytics.md#what-gets-counted)). Build logs and console output are skipped. Unlike the Cloudflare Worker, the drain records every path and content type, including `robots.txt`, `llms.txt` and sitemaps.

Drain Production only. Preview requests aren't labelled by environment, so they'd mix in with production.

## Troubleshooting

> [accordion] Test returns 401
>
> `Missing API key` means the header didn't arrive. `Invalid API key` means the key is mistyped, deleted, or less than a minute old. Check the header is exactly `X-API-Key: aa_...`.

> [accordion] Test passes but no data arrives
>
> Check that the drain format is **NDJSON**, the Static Files, Edge Functions and Functions sources are checked, and the project you tested is selected on the drain.

## Related

* [Agent Analytics](../using-chatfeatured/agent-analytics.md): reading the data
* [Vercel's drain documentation](https://vercel.com/docs/drains/using-drains)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/vercel](https://docs.chatfeatured.com/integrations/vercel).
