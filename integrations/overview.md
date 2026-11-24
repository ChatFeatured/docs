# Integrations overview

> Every integration ChatFeatured offers: publishing, Google and website analytics, AI agent analytics, and the REST API and MCP server

Integrations connect a project to the tools around it. You find them in **Integrations** in the sidebar. Each integration belongs to one project, so connect it in every project that needs it.

![The Integrations page, listing the CMS and publishing integrations with their connection status](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/integrations/integrations-page.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=097ac7f047b40cc3da7396bea571aebf)

## CMS and publishing

Publish articles to your site. A project can have more than one publishing integration, and you pick the destination when you publish.

> [card] [WordPress](./wordpress.md)
>
> Publish articles to your WordPress site with the ChatFeatured plugin. The plugin also tracks AI agent visits.

> [card] [Webflow](./webflow.md)
>
> Sync articles into a Webflow CMS collection.

> [card] [Ghost](./ghost-integration.md)
>
> Publish posts to your Ghost publication through the Admin API.

> [card] [HubSpot](./hubspot.md)
>
> Publish posts to a HubSpot-hosted blog.

> [card] [Wix](./wix.md)
>
> Publish articles to your Wix blog as drafts, live posts or scheduled posts.

> [card] [Sanity](./sanity.md)
>
> Publish articles into a Sanity dataset as drafts, live documents or scheduled posts.

> [card] [Framer](./framer-integration.md)
>
> Sync articles into a Framer CMS collection with the ChatFeatured plugin.

> [card] [Git-based CMS](./git-based-cms.md)
>
> Commit markdown articles to a Git repository for static sites. Works with CloudCannon, Hugo, Jekyll, Astro, and more.

> [card] [Shopify](./shopify.md)
>
> Publish articles to your Shopify store's blog.

> [card] [Blog CMS](./blog-cms.md)
>
> A blog hosted by ChatFeatured on your own subdomain. Set it up from **Content Hub → Blog CMS**, not from Integrations.

## Search engines

> [card] [Google Search Console](./google-search-console.md)
>
> See Google Search clicks and queries, submit sitemaps, and check whether a URL is indexed.

> [card] [Bing Webmaster Tools](./bing-webmaster-tools.md)
>
> See Bing search performance and how often Copilot and Bing's AI answers cite your pages.

## Website analytics

Measure site traffic, conversions and AI referrals. If more than one provider is connected, you choose which one to view in [Website Analytics](../using-chatfeatured/website-analytics.md).

> [card] [Google Analytics](./google-analytics.md)
>
> Bring GA4 traffic and referral data into your dashboard.

> [card] [Plausible Analytics](./plausible.md)
>
> Connect traffic, goals and AI referral reports.

> [card] [Fathom Analytics](./fathom.md)
>
> Connect traffic, event conversions and AI referral reports.

> [card] [Databuddy](./databuddy.md)
>
> Connect traffic and AI referral reports.

## Agent analytics

Log AI agent and crawler visits from your hosting or CDN. Most AI crawlers don't run JavaScript, so these server-side sources see visits that website analytics miss. See [Agent analytics](../using-chatfeatured/agent-analytics.md) for what you get.

> [card] [Cloudflare](./cloudflare.md)
>
> Capture AI agent requests at the edge with a Worker. Needs Cloudflare's Workers Paid plan.

> [card] [Vercel](./vercel.md)
>
> Forward request logs from Vercel with a log drain.

> [card] [AWS Data Firehose](./aws-data-firehose.md)
>
> Stream CloudFront logs through Amazon Data Firehose.

> [card] [Custom Log Integration](./custom-log-integration.md)
>
> Send server logs from any stack to the ChatFeatured ingestion endpoint.

If your site runs on Webflow, see [Agent analytics with Webflow](./webflow-agent-analytics.md) for how to put a Cloudflare Worker in front of it. On WordPress, the plugin tracks agent visits for you.

## API and MCP

Build your own workflows or connect an AI assistant.

> [card] [REST API](./rest-api.md)
>
> List and fetch articles, mark them published, track external content, and receive webhooks. One key per project.

> [card] [AI Agent (MCP)](./mcp.md)
>
> Let Claude, ChatGPT or Cursor work with your project data directly, across every project you can access.

## Connected elsewhere

[OpenAI Ads Manager](./openai-ads-manager.md) isn't on the Integrations page. The workspace Owner connects it from **Ads → Settings**, which only the Owner sees.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/overview](https://docs.chatfeatured.com/integrations/overview).
