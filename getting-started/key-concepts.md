# Key concepts

> Workspaces, projects, prompts, engines and the metrics ChatFeatured reports.

The terms below are the ones the dashboard uses.

## Workspaces and projects

A **workspace** is your organization's account. It holds your team, your plan and billing, and one or more projects.

A **project** is one brand you track: its name, website, prompts, competitors, Brand Book, articles and analytics. Switch between projects with the project switcher in the top bar. See [Projects](../account/projects.md).

The API, MCP tools and webhooks call a project a "brand" in their field names, such as `brandId`.

## AI engines

ChatFeatured tracks eight AI engines: ChatGPT, Perplexity, Google AI, Gemini, Copilot, Claude, Grok and Muse (Meta). Starter runs ChatGPT, Perplexity and Google AI. Growth and Enterprise add Gemini and Copilot, with Claude, Grok and Muse as paid add-ons. See [Billing and plans](../account/billing.md).

## Prompts

A **prompt** is a question a buyer might ask an AI engine. ChatFeatured runs each active prompt once a day on every engine your plan includes, in every country you've set for it. Paused prompts stop running, keep their history, and don't count toward your limit.

A **tracked prompt** is one active prompt in one country. A prompt tracked in the US and the UK counts as two. See [Prompts](../using-chatfeatured/prompts.md).

## Topics and keywords

**Topics** group prompts, like "Pricing" or "Integrations", and roll Visibility and citation rate up by topic. **Keywords** are the Google search phrases behind your prompts and articles, each with its monthly search volume. See [Topics and keywords](../using-chatfeatured/topics-and-keywords.md).

## Competitors

**Competitors** are the brands you measure yourself against. ChatFeatured counts how often each is named in the same answers as you. On the Competitors page you also set which names and websites count as your own brand. See [Competitors](../using-chatfeatured/competitors.md).

## Metrics

Every metric counts answers: one prompt, asked on one engine, in one country, on one day.

### Visibility

Visibility is the main metric: the share of answers that name your brand directly, out of the answers that name any brand directly.

```text
Visibility = answers naming your brand / answers naming any brand directly
```

Answers that name no brand are left out, so a generic answer doesn't drag your number down.

### Mentions

The number of answers that name your brand directly.

### Sentiment

How favorably answers describe your brand, as a score from 1 to 100, averaged over the answers that name you.

### Citation rate

On the Prompts and Topics pages, the share of answers that cite one of your own pages (your project's website, including its subdomains), out of the answers that mention any brand, even if only in a cited page.

### Citations and sources

A **cited source** is a page an answer uses and points to. A **sourced page** is one the engine found while searching but didn't use. Citation counts count answers, not links. See [Analytics](../using-chatfeatured/analytics.md).

## Brand Book and Knowledge Base

The **Brand Book** describes your brand: its descriptions, industry, product and service categories, and customer personas. ChatFeatured drafts it from your website during setup, and the agent and the article writer read it. See [Brand Book](../using-chatfeatured/brand-book.md).

The **Knowledge Base** holds files, URLs and text you add for the agent to draw on. See [Knowledge Base](../using-chatfeatured/knowledge-base.md).

## The agent

The **agent** is the AI assistant under **Agent** in the sidebar. You chat with it about your data, and it suggests and writes articles, plans prompts and runs scheduled [Automations](../using-chatfeatured/automations.md). See [AI agent](../ai-agents/overview.md).

## Articles

**Articles** are content the agent writes for a project. Each one moves from idea, to draft, to review, to published on your CMS. See [Articles](../using-chatfeatured/articles.md).

## AI crawler analytics

**Agent Analytics** shows when AI crawlers such as GPTBot and PerplexityBot visit your site, and which pages they read. It needs a log integration like [Cloudflare](../integrations/cloudflare.md), [Vercel](../integrations/vercel.md) or [AWS Data Firehose](../integrations/aws-data-firehose.md). See [Agent Analytics](../using-chatfeatured/agent-analytics.md).

## Index submissions

**Index submissions** submit your site to AI search engines directly, so new pages get read sooner. See [Index submissions](../index-submissions/index-submissions.md).

## Integrations

Integrations connect ChatFeatured to CMSs to publish to, website analytics, AI crawler logs, and your own tools through the REST API and MCP server. See [Integrations](../integrations/overview.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/getting-started/key-concepts](https://docs.chatfeatured.com/getting-started/key-concepts).
