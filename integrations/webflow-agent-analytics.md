# Agent Analytics with Webflow

> Track AI crawler visits on a Webflow site by putting your own Cloudflare zone and Worker in front of it

You can't add a log drain or a Worker to a Webflow site directly. To get [Agent Analytics](../using-chatfeatured/agent-analytics.md) on one, put your own Cloudflare zone in front of Webflow and run the ChatFeatured [Cloudflare Worker](./cloudflare.md) there. The Worker passes requests to Webflow unchanged and logs each HTML page in the background.

Because Webflow already serves sites through Cloudflare, this needs Cloudflare's **Orange-to-Orange (O2O)** setup. Webflow's guide: [Using Cloudflare Orange-to-Orange (O2O) with Webflow](https://help.webflow.com/hc/en-us/articles/45039458051347-Using-Cloudflare-Orange-to-Orange-O2O-with-Webflow).

## Before you start

* A custom domain on a paid Webflow site plan.
* A [Cloudflare account](https://dash.cloudflare.com).
* **The Cloudflare Workers Paid plan** (\$5 a month). See [Before you start](./cloudflare.md#before-you-start) on the Cloudflare page.
* Access to your domain registrar to change nameservers.

> [!WARNING]
>
> Changing nameservers moves DNS for your whole domain. Copy existing records (email, verification) into Cloudflare before you switch. The change can take up to 48 hours to propagate.

## Step 1: Move your DNS to Cloudflare

1. In the Cloudflare dashboard, add your root domain (for example `example.com`) and follow the setup steps.
2. At your registrar, replace the nameservers with the two Cloudflare gives you.
3. Wait until the change has propagated.

## Step 2: Point the domain at Webflow through O2O

In your zone's **DNS** settings, create a **proxied** (orange cloud) `CNAME` record for each hostname your site uses:

| Type | Name | Target | Proxy status |
| - | - | - | - |
| CNAME | `@` | `cdn.webflow.com` | Proxied |
| CNAME | `www` | `cdn.webflow.com` | Proxied |

Add one for any other subdomain Webflow serves. The records must be proxied; on "DNS only" the Worker never runs.

Then, in Webflow's site settings, add and verify your custom domain and publish the site.

## Step 3: Add the ChatFeatured Worker

Follow the [Cloudflare integration](./cloudflare.md#set-it-up) setup on this zone. In short:

1. In ChatFeatured, open **Integrations > Cloudflare** and click **New API Key**, or reuse an existing Agent Analytics key.
2. Create a Worker with the ChatFeatured code.
3. Add `ANALYTICS_ENDPOINT` (`https://ingest.chatfeatured.com/v1/logs`) and `ANALYTICS_KEY` (your key, as a Secret) under **Variables and Secrets**.
4. Add a route such as `example.com/*`, plus `www.example.com/*` if you use `www`, pointing at the Worker.

## Check that it works

1. Open your site in a browser and confirm it still loads.

2. Request a page with a crawler user agent (browser visits aren't recorded):

   ```bash
   curl -A "GPTBot/1.0" https://example.com/
   ```

3. Within a few minutes the visit appears in **Website > Agent Analytics** as a GPTBot request.

The Worker records only HTML pages, so crawler fetches of `robots.txt`, `llms.txt` and `sitemap.xml` don't appear. See [What the Worker skips](./cloudflare.md#what-the-worker-skips).

## Troubleshooting

> [accordion] 525 SSL handshake error
>
> The records are proxied but O2O isn't finished. Check that the `CNAME` records target `cdn.webflow.com` and that the domain is connected and verified in Webflow. Don't fix it by switching the records to DNS only, because the Worker then stops running.

> [accordion] Webflow can't verify the domain
>
> If the domain was set up on another platform that also runs on Cloudflare (Shopify, WP Engine and others), remove it there first, then verify again in Webflow.

> [accordion] The site works but no visits show up
>
> Check that the DNS records are **Proxied**, a Worker route covers the hostname you tested (including `www`), `ANALYTICS_ENDPOINT` and `ANALYTICS_KEY` are set and the Worker was redeployed, and you tested with a crawler user agent.

## Related

* [Cloudflare integration](./cloudflare.md): the Worker code and full setup
* [Agent Analytics](../using-chatfeatured/agent-analytics.md): reading the data
* [Webflow](./webflow.md): publishing articles to your Webflow CMS


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/webflow-agent-analytics](https://docs.chatfeatured.com/integrations/webflow-agent-analytics).
