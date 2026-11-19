# Bing Webmaster Tools

> Bring Bing search performance and Bing AI citations into ChatFeatured

The Bing Webmaster Tools integration brings in two kinds of data, and you can set up either one without the other:

* **Search performance**: Bing clicks, impressions and the queries people search to reach your site, read with an API key.
* **AI Performance**: how often Microsoft Copilot and Bing's AI answers cite your site, which pages they cite, and the grounding queries they searched to find them. Bing doesn't offer this report through its API yet, so you import its CSV exports.

It lives under **Integrations → Search engines → Bing Webmaster Tools**. ChatFeatured only reads from Bing. Viewers can see the data but can't manage the connection.

## Connect search performance

**1. Generate an API key in Bing**

In [Bing Webmaster Tools](https://www.bing.com/webmasters), open **Settings**, then **API Access**, and generate an **API key**. Copy it.

The key reaches every site your Bing account manages, so you pick the site for this project in the next step.

**2. Paste the key in ChatFeatured**

Go to **Integrations → Bing Webmaster Tools**, paste the key into **API key** and click **Connect**.

**3. Pick your site**

When one of your Bing sites matches your project's domain, ChatFeatured picks it for you. Otherwise choose it under **Site**.

## Import AI Performance

**1. Export from Bing**

In Bing Webmaster Tools, open **AI Performance** and choose a date range. Export the grounding queries, the pages and the chart, each as **CSV**.

**2. Upload the files**

On **Integrations → Bing Webmaster Tools**, click **Upload CSV files** and pick the exports. You can upload all three at once.

Each export replaces the previous file of the same view, so re-export and upload whenever you want fresher numbers. To remove an import, click the bin icon next to it.

## Where the data shows up

* **[Website Analytics](../using-chatfeatured/website-analytics.md)** gets a **Bing search and AI** section: Bing AI citations and cited pages, Bing clicks and impressions, the top grounding queries and Bing queries. With Google Analytics, Plausible or Fathom connected, it also shows the visits Copilot sent.
* **[Generating prompts](../using-chatfeatured/prompts.md)** uses your Bing queries and the grounding queries next to your Search Console queries. A prompt written from one has a search icon; hover it to see the query it came from.

Bing's AI Performance report counts Copilot, Bing's AI answers and Microsoft's partner experiences together, so ChatFeatured labels its numbers **Bing AI**.

Bing publishes query and page data weekly, so new numbers can take a few days to appear.

## Troubleshooting

| Message | What to do |
| - | - |
| "Bing rejected this API key. Generate a new one in Bing Webmaster Tools under Settings > API Access." | The key was mistyped or revoked. Generate a new key and click **Replace key**. |
| "This API key's account can't access this site in Bing Webmaster Tools." | Pick a site your Bing account manages, or ask the site's owner to add you in Bing Webmaster Tools. |
| "This file has no Citations column. Export it from the AI Performance report in Bing Webmaster Tools." | The file isn't an AI Performance export. Search performance exports can't be imported; connect an API key for those instead. |
| "Export the report as CSV rather than Excel and upload that." | Choose CSV when you export from Bing. |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/bing-webmaster-tools](https://docs.chatfeatured.com/integrations/bing-webmaster-tools).
