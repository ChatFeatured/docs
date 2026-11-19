# Website analytics

> Measure website traffic and AI referrals with Google Analytics 4, Plausible Analytics, or Fathom Analytics

Website Analytics shows the visitors that AI platforms send to your website, along with traffic sources, landing pages, conversions and revenue when your provider reports them. Open it from **Website > Website Analytics** in the sidebar. The dashboard's **Website traffic** widget shows a compact view of the same data for the last 28 days.

Website Analytics needs an active or trialing plan.

## Connect an analytics provider

Open **Integrations → Website analytics** for your project and choose a provider:

| Provider | How to connect |
| - | - |
| Google Analytics 4 | Open **Google Analytics**, click **Connect Google Analytics**, authorize a Google account with access to your GA4 property, then select that property. The first import covers the last 90 days and can take a few minutes. |
| Plausible Analytics | Open **Plausible Analytics** and enter the site's exact ID and a Stats API key. Follow the [Plausible setup guide](../integrations/plausible.md). |
| Fathom Analytics | Open **Fathom Analytics**, paste a read-only API key, and pick the site. Follow the [Fathom setup guide](../integrations/fathom.md). |

You can also start from **Connect your analytics** in Website Analytics or the Website traffic widget. Once a provider is connected, **Manage connection** in the page header opens its integration page.

If you connect more than one provider, an **Analytics provider** dropdown picks which one the reports show. Reports show one provider's data at a time and never combine totals.

## Read your reports

Choose **7 days**, **28 days** or **3 months** for the reporting period. The page shows:

* **Total Sessions**, **AI Sessions** (with their share of all traffic), **Conversions** and **Revenue** (each with the part from AI platforms).
* **Visitors and Pageviews**, for Plausible and Fathom only.
* **Sessions Over Time**, broken down by **Channel**, **Source**, **Medium** or **Campaign**. Turn on **AI traffic only** to split it by AI platform instead.
* **AI Platform Referrals**: sessions, average duration, conversions and revenue per AI platform.
* **AI Visitors vs Other Channels**: how AI visitors compare with your other channels.
* **Top Landing Pages**: sessions, AI sessions and AI share per page.
* **Conversions by Source**.

## Which visits count as AI traffic

A visit counts as AI traffic when its source or referrer matches a known AI platform, such as ChatGPT, Perplexity, Claude, Gemini, Copilot, Grok, DeepSeek and others.

Visits from Google's AI Overviews and AI Mode arrive with Google as the source, so they count as search traffic, not AI traffic.

## Differences between providers

GA4, Plausible and Fathom measure traffic differently, so their numbers can differ for the same site and dates. Compare trends within one provider rather than expecting matching totals.

| | Google Analytics 4 | Plausible | Fathom |
| - | - | - | - |
| Sessions | GA4 sessions | Visits | Visits |
| Conversions | GA4 key events | Configured goal completions | Completions of your Fathom events |
| Revenue | GA4 total revenue | Revenue goals | Not available |
| Freshness | Daily sync | Live, cached up to 5 minutes | Live, cached up to 30 minutes |

In the Revenue card, **—** means no revenue total is available, not zero. For Plausible, follow **Check revenue tracking** under Revenue to set up revenue goals.

GA4 syncs once a day and re-pulls the last few days, because GA4 data takes 24 to 48 hours to settle, so expect yesterday's numbers to move a little. **Sync now** on the Google Analytics integration page re-pulls the full 90 days.

> [!NOTE]
>
> For AI crawlers requesting pages on your site, use [Agent Analytics](./agent-analytics.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/website-analytics](https://docs.chatfeatured.com/using-chatfeatured/website-analytics).
