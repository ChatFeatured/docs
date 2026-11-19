# Agent Analytics

> See which AI crawlers and search bots request pages on your website, and how often

Agent Analytics logs the requests that AI crawlers and search-engine bots make to your own website: which bot, which page, when, and what status code your server returned. It reads your server or CDN logs, so it shows bot traffic, not what AI answers say. To see which pages AI answers cite, use [Data Analytics](./analytics.md).

Find it under **Website > Agent Analytics** in the sidebar. It needs an active plan or trial.

## Set it up

Agent Analytics has data once your site sends its request logs to ChatFeatured. Pick the option that matches where your site runs. Every option except WordPress uses an API key you create in **Agent Analytics > Settings**.

| Where your site runs | How logs reach ChatFeatured | Guide |
| - | - | - |
| Cloudflare | A Cloudflare Worker on your domain | [Cloudflare](../integrations/cloudflare.md) |
| Vercel | A Vercel log drain | [Vercel](../integrations/vercel.md) |
| AWS (CloudFront or ALB) | Logs streamed through Amazon Data Firehose | [AWS Data Firehose](../integrations/aws-data-firehose.md) |
| Anything else | Your server posts its logs to the ingestion endpoint | [Custom log integration](../integrations/custom-log-integration.md) |
| WordPress | The ChatFeatured WordPress plugin | [WordPress](../integrations/wordpress.md) |

For WordPress, generate a token in WordPress under **ChatFeatured > Publishing**, paste it with your site URL into **Integrations > WordPress** in ChatFeatured, then turn on **Agent Analytics** for that site. In WordPress, also tick **Enable Analytics** under **ChatFeatured > Settings > Analytics**. If it's off, the WordPress integration page shows "Disabled in WordPress" and no traffic is recorded.

> [!TIP]
>
> Hosting on Webflow? Webflow sites need an extra Cloudflare step. See [Agent Analytics with Webflow](../integrations/webflow-agent-analytics.md).

## What gets counted

Only requests from recognized bots are stored. Visits from people and unrecognized user agents are dropped. The main bots:

* OpenAI: GPTBot (training), OAI-SearchBot (ChatGPT search), ChatGPT-User (fetches on behalf of a user)
* Anthropic: ClaudeBot (training), Claude-SearchBot (search), Claude-User (user fetches)
* Perplexity: PerplexityBot (index), Perplexity-User (user fetches)
* Google: Googlebot (Google Search), Google-Agent (Google's browsing agent), Google-GeminiNotebook (NotebookLM sources) and Google-CloudVertexBot
* xAI: GrokBot and GrokAgent
* Amazon: Amazonbot, Amzn-SearchBot (Alexa and Rufus search) and Amzn-User (user fetches)
* Meta: Meta-ExternalAgent, Meta-ExternalFetcher and Meta-WebIndexer (Meta AI search)
* Others including BingBot, Applebot, MistralAI-User, CCBot, Bytespider, DuckAssistBot and DuckDuckBot

AI browser agents that identify themselves with a standard Chrome user agent, such as ChatGPT agent, look like ordinary visitors and aren't counted.

Training crawlers collect content for model training, search bots build the index an AI search feature answers from, and user-triggered agents fetch a page because someone asked the assistant about it.

## Reading the Analytics tab

The **ChatGPT Citations**, **Claude Citations** and **Perplexity Citations** cards count each company's bot requests to your site (training crawls included), not citations in AI answers. Each shows the change against the previous period of the same length.

* **Citations Over Time** charts bot requests over the selected period, by crawler.
* **Top Pages** lists the pages bots requested most. **Top Crawlers** lists bots by request count. Click a page or crawler to filter the whole tab to it.
* **Latest Crawls** logs individual requests. Check the Status column for 4xx and 5xx responses: those are pages bots tried to read and couldn't.

Filter by date range (Last 7 days by default), crawler, page, domain, status code, query params and referer.

Until the first logs arrive, the panels say "Waiting for data" and a **Book setup call** button appears in the page header.

## Settings tab

**API Keys** is where you create, enable, disable and delete the keys your log integrations use. Managing keys needs the Owner or Admin role.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/agent-analytics](https://docs.chatfeatured.com/using-chatfeatured/agent-analytics).
