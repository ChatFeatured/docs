# Cloudflare

> Send AI crawler visits to Agent Analytics with a Cloudflare Worker on your domain

The Cloudflare integration logs AI crawler and search bot visits to your site through a Cloudflare Worker. The Worker passes every request through to your site unchanged and sends a log line for each HTML page to ChatFeatured. The visits show up in [Agent Analytics](../using-chatfeatured/agent-analytics.md).

In ChatFeatured, open **Integrations** and click **Cloudflare** under **Agent analytics**. The page has your API keys, the Worker code and a **Copy Instructions** button.

## Before you start

* Your site's DNS must run through Cloudflare.
* **Buy the Cloudflare Workers Paid plan first** (\$5 a month), under **Compute > Workers Plans** in Cloudflare. The Worker runs on every request on its route, assets included, and the free plan stops at 100,000 requests a day, after which a busy site can stop logging or fail with Cloudflare error 1027. See [Cloudflare's Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/).
* Creating an API key needs an Owner or Admin by default.

## Set it up

**1. Create an API key**

On the Cloudflare integration page, click **New API Key**, enter a name and click **Create API Key**. Copy the key from the dialog. Keys start with `aa_`.

Any Agent Analytics key works for every log source, so you can reuse one from **Website > Agent Analytics > Settings**. A new key can take up to a minute to start working.

**2. Create the Worker**

1. In the [Cloudflare dashboard](https://dash.cloudflare.com), click **Workers & Pages** in the sidebar.
2. Click **Create Application**, select **Start with Hello World!** and click **Deploy**.
3. Click **Edit Code**, clear the editor, paste the code below and click **Deploy**.

```javascript
/**
 * Cloudflare Worker – stream HTML page views to ChatFeatured
 *
 * Excludes common static-asset extensions.
 * It runs as a middleware and doesn't interfere with the actual request handling.
 */

const IGNORE_EXT =
  /\.(?:png|jpe?g|gif|svg|webp|ico|mp4|webm|mp3|wav|ogg|css|js|mjs|json|map|txt|xml|pdf|docx?|xlsx?|pptx?|zip|rar|7z|tar|gz|woff2?|ttf|eot)$/i;

export default {
  async fetch(request, env, ctx) {
    // Get the original response
    const response = await fetch(request);

    // Clone the response for processing
    const responseClone = response.clone();

    // NOTE: Does NOT block / wait
    ctx.waitUntil(handleRequest(request, responseClone, env));
    return response;
  },
};

async function handleRequest(request, response, env) {
  const requestUrl = new URL(request.url);

  // Skip obvious static assets early
  if (IGNORE_EXT.test(requestUrl.pathname)) {
    return;
  }

  // Only log HTML pages (and OPTIONAL: status < 500)
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("text/html") || response.status >= 500) {
    return;
  }

  const logData = {
    timestamp: new Date().toISOString(),
    host: requestUrl.hostname,
    method: request.method,
    pathname: requestUrl.pathname,
    query_params: requestUrl.search.startsWith("?")
      ? requestUrl.search.slice(1)
      : "",
    ip: request.headers.get("cf-connecting-ip") || "",
    userAgent: request.headers.get("user-agent") || "",
    referer: request.headers.get("referer") || "",
    status: response.status,
  };

  await fetch(env.ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": env.ANALYTICS_KEY,
    },
    body: JSON.stringify(logData),
  }).catch((error) => console.error("Failed to send logs:", error));
}
```

**3. Add the endpoint and key**

In the Worker's settings, open **Variables and Secrets** and add two entries:

| Name | Value |
| - | - |
| `ANALYTICS_ENDPOINT` | `https://ingest.chatfeatured.com/v1/logs` |
| `ANALYTICS_KEY` | Your `aa_` key |

Add `ANALYTICS_KEY` as a **Secret**. Click **Deploy** after adding them.

**4. Route your domain through the Worker**

1. Open your domain in Cloudflare and click **Workers Routes** in the sidebar.
2. Click **Add Route**.
3. Enter a pattern scoped to your site, such as `example.com/*`. Use `*example.com/*` if you also want subdomains like `www.example.com` and `blog.example.com`.
4. Select your Worker and click **Save**.

To leave a section out, add a more specific route, such as `example.com/admin/*`, with its Worker set to **None**.

## Check that it works

A browser visit won't show anything, because ChatFeatured keeps only requests from recognized bots. Send a request with a crawler user agent instead:

```bash
curl -A "GPTBot/1.0" https://example.com/
```

The visit should appear in **Website > Agent Analytics** within a few minutes, as a GPTBot request. If it doesn't, test the key on its own:

```bash
curl -X POST https://ingest.chatfeatured.com/v1/logs \
  -H "Content-Type: application/json" \
  -H "X-API-Key: aa_your_key" \
  -d '{"host":"example.com","method":"GET","pathname":"/","userAgent":"GPTBot/1.0","status":200}'
```

A working key returns `{"status":"accepted","accepted":1,"filtered":0}`. If that works but the first test doesn't, check the route, the Worker's variables, and any Cloudflare security setting that might block the test request.

## What gets recorded

ChatFeatured keeps requests from AI crawlers and search engine bots (see [what gets counted](../using-chatfeatured/agent-analytics.md#what-gets-counted)) and discards everything else.

### What the Worker skips

The Worker only reports `text/html` responses with a status below 500, and skips static files by extension. So crawler fetches of `robots.txt`, `llms.txt` and `sitemap.xml` don't appear. To track them, remove `txt|xml` from `IGNORE_EXT` and loosen the `!contentType.startsWith("text/html")` check.

## Troubleshooting

> [accordion] The test POST returns 401 Missing API key or Invalid API key
>
> `Missing API key` means the `X-API-Key` header didn't arrive. `Invalid API key` means the key is mistyped, deactivated, deleted, or less than a minute old.

> [accordion] The test POST returns accepted 0 and filtered 1
>
> The key works, but the `userAgent` in the body didn't match a known bot. Use a crawler string such as `GPTBot/1.0`.

> [accordion] Crawler visits stopped partway through the day
>
> You're probably on the Workers free plan and went past 100,000 requests. Upgrade to Workers Paid under **Compute > Workers Plans**.

## Related

* [Agent Analytics](../using-chatfeatured/agent-analytics.md): reading the data
* [Agent Analytics with Webflow](./webflow-agent-analytics.md): running this Worker in front of a Webflow site
* [Custom log integration](./custom-log-integration.md): the endpoint and payload this Worker uses


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/cloudflare](https://docs.chatfeatured.com/integrations/cloudflare).
