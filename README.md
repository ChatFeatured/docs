# ChatFeatured docs

User documentation for [ChatFeatured](https://chatfeatured.com), the answer engine optimization (AEO) platform. ChatFeatured tracks how ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Copilot and Grok mention and cite your brand, shows which AI crawlers visit your site, and helps you change what the answers say.

This repo is a markdown copy of [docs.chatfeatured.com](https://docs.chatfeatured.com), synced every six hours. Each file covers one feature or integration: what it's for, how to set it up, and the errors people hit.

## Pages

### Getting started

- [Introduction](introduction.md): ChatFeatured shows how AI answer engines talk about your brand, and helps you change what they say
- [Quickstart](getting-started/quickstart.md): Sign up, set up your first project, start your trial, and what to do on day one
- [Key concepts](getting-started/key-concepts.md): Workspaces, projects, prompts, engines and the metrics ChatFeatured reports

### Using ChatFeatured

- [Prompts](using-chatfeatured/prompts.md): Track the questions your customers ask AI engines, and see how often the answers name you
- [Topics and keywords](using-chatfeatured/topics-and-keywords.md): Group prompts by theme with topics, and track the search phrases behind them with keywords
- [Data Analytics](using-chatfeatured/analytics.md): Read your Visibility, sentiment, rankings and cited sources across AI answers, filtered to the prompts, models and countries you care about
- [Competitors](using-chatfeatured/competitors.md): Choose which brands you compare yourself against, and which names and websites count as each one
- [Website analytics](using-chatfeatured/website-analytics.md): Measure website traffic and AI referrals with Google Analytics 4, Plausible Analytics, Fathom Analytics or Databuddy
- [Agent Analytics](using-chatfeatured/agent-analytics.md): See which AI crawlers and search bots request pages on your website, and how often
- [Brand Book](using-chatfeatured/brand-book.md): Your project's identity, description and customer personas, and how ChatFeatured uses them
- [Knowledge base](using-chatfeatured/knowledge-base.md): Upload documents, pages and notes about your company so the agent and the article writer get your facts right
- [Articles and the Content Calendar](using-chatfeatured/articles.md): How articles move from idea to published, article credits, featured images, and scheduling
- [Automations](using-chatfeatured/automations.md): Schedule the agent to run reports and reviews on its own and deliver the results by email or in the dashboard
- [Site audit](using-chatfeatured/site-audit.md): Find the technical, content and AEO problems that keep AI answers from reaching, reading and quoting your pages
- [Product page audit](using-chatfeatured/product-page-audit.md): Score a single product page on how well AI answers can read, trust and recommend it
- [Tasks](using-chatfeatured/tasks.md): Track the work that comes out of ChatFeatured: article reviews, site audit fixes, product page fixes and agent opportunities
- [ChatGPT Ads](using-chatfeatured/chatgpt-ads.md): See which advertisers showed up in ChatGPT for your prompts, and run your own OpenAI Ads campaigns from ChatFeatured

### Index submissions

- [Index submissions](index-submissions/index-submissions.md): Submit your site to AI search engines directly, every week and whenever you publish
- [Set up index submissions](index-submissions/setup.md): Add your website, verify ownership with a key file or a redirect, and track each submission run

### AI agent

- [The ChatFeatured agent](ai-agents/overview.md): What the agent can see and do, where to open it, who can use it, and how to configure it

### Integrations

- [Integrations overview](integrations/overview.md): Every integration ChatFeatured offers: publishing, Google and website analytics, AI agent analytics, and the REST API and MCP server
- [WordPress](integrations/wordpress.md): Install the ChatFeatured plugin to publish articles to WordPress, track AI crawler traffic and turn on index submissions
- [Webflow](integrations/webflow.md): Publish ChatFeatured articles to a Webflow CMS collection as drafts, live items or on a schedule
- [Framer](integrations/framer-integration.md): Sync ChatFeatured articles into a Framer CMS collection with the ChatFeatured CMS Sync plugin
- [Ghost integration](integrations/ghost-integration.md): Publish ChatFeatured articles to your Ghost site as drafts, live posts or scheduled posts
- [HubSpot integration](integrations/hubspot.md): Publish ChatFeatured articles to a blog hosted on HubSpot
- [Sanity integration](integrations/sanity.md): Publish ChatFeatured articles into your Sanity dataset as drafts, published documents or scheduled posts
- [Wix integration](integrations/wix.md): Publish ChatFeatured articles to your Wix blog as drafts, live posts or scheduled posts
- [Shopify integration](integrations/shopify.md): Publish ChatFeatured articles to your Shopify store's blog through a custom app you create
- [Git-based CMS integration](integrations/git-based-cms.md): Publish ChatFeatured articles as Markdown files committed to your site's GitHub repository
- [ChatFeatured Blog CMS](integrations/blog-cms.md): Host a blog on your own subdomain, served by ChatFeatured, and publish articles to it without a separate CMS
- [Google Analytics](integrations/google-analytics.md): Connect a Google Analytics 4 property to see how much traffic AI assistants send to your site, which pages they land on, and what converts
- [Google Search Console](integrations/google-search-console.md): Connect Google Search Console to see Google Search clicks and queries, submit sitemaps, and check whether a URL is indexed
- [Bing Webmaster Tools](integrations/bing-webmaster-tools.md): Bring Bing search performance and Bing AI citations into ChatFeatured
- [Plausible Analytics](integrations/plausible.md): Connect Plausible Cloud to see website traffic, goal conversions and AI referrals in ChatFeatured
- [Fathom Analytics](integrations/fathom.md): Connect Fathom Analytics to see website traffic, event conversions and AI referrals in ChatFeatured
- [Databuddy](integrations/databuddy.md): Connect Databuddy to see website traffic and AI referrals in ChatFeatured
- [Cloudflare](integrations/cloudflare.md): Send AI crawler visits to Agent Analytics with a Cloudflare Worker on your domain
- [Vercel](integrations/vercel.md): Send AI crawler visits to Agent Analytics with a Vercel log drain
- [AWS Data Firehose (CloudFront)](integrations/aws-data-firehose.md): Send AI crawler visits on a CloudFront distribution to Agent Analytics through Amazon Data Firehose
- [Agent Analytics with Webflow](integrations/webflow-agent-analytics.md): Track AI crawler visits on a Webflow site by putting your own Cloudflare zone and Worker in front of it
- [Custom log integration](integrations/custom-log-integration.md): Send request logs from any server, CDN or middleware to Agent Analytics over HTTP
- [OpenAI Ads Manager](integrations/openai-ads-manager.md): Connect an OpenAI Ads account with an Advertiser API key to run ChatGPT ad campaigns, read performance and build creative from ChatFeatured
- [REST API](integrations/rest-api.md): Export your prompts, AI responses and visibility history, manage articles and tracked content, and receive webhooks when articles change status
- [AI agent (MCP)](integrations/mcp.md): Connect Claude, ChatGPT, Cursor and other MCP clients to ChatFeatured to read your analytics and manage content
- [Webhooks](integrations/webhooks.md): Send a project's events to your own URL, such as an article being published or a site audit finishing, so your code can act on them as they happen
- [API and MCP errors](integrations/api-errors.md): What each error code from the ChatFeatured API (v2) and MCP server means, and what to do about it

### Account

- [Billing and plans](account/billing.md): Plans, prices and limits, the free trial, model add-ons, and how to change or cancel your plan
- [Team management](account/team-management.md): Roles, invitations, project access, custom permissions and auto-join for your workspace
- [Projects](account/projects.md): Add, edit and deactivate projects, and how many projects each plan includes
- [Agency workspaces](account/agency.md): Manage client projects, send white-label AEO and performance reports, and collect leads with an embeddable audit form

## Suggest a change

Open an issue, or a pull request against the page. The docs are written in ChatFeatured's main repository and this repo is generated from the live site, so we don't merge pull requests here: the next sync would overwrite them. When we take a change, we make it in the source and close the pull request, and it shows up here on the next sync.

For help with your account, email support@chatfeatured.com.

## License

The text is licensed under [CC BY 4.0](LICENSE). The ChatFeatured name and logo are not covered by the license.
