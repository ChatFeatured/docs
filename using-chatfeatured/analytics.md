# Data Analytics

> Read your Visibility, sentiment, rankings and cited sources across AI answers, filtered to the prompts, models and countries you care about.

Data Analytics is where you read the answers ChatFeatured collects for your tracked prompts: how often AI answers name you and your competitors, how they talk about you, and which pages they cite. Open it from **Data Analytics** in the product rail on the left. It needs an active or trialing plan, and every role can read it.

![Data Analytics with the filter bar, the Visibility Trend chart, Industry Ranking, Source Type Distribution, Top Cited URLs and Top Cited Domains](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/data-analytics/overview.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=a881481f73a63c11532d88ac32d1c856)

## What gets counted

Every number is built from runs. A run is one prompt asked on one AI model in one country on one day, and it produces one answer. Paused prompts are left out of every number; resume a prompt and its history comes back. Your brand and each competitor are counted by all their names, so an answer that uses two of a competitor's names is one mention. See [Competitors](./competitors.md).

## Metrics

### Visibility

Visibility is the share of answers that name you, out of answers that name any brand at all.

```text
Visibility = answers that name your brand ÷ answers that name at least one brand
```

Answers that name no brand are left out, so a how-to answer that recommends no product doesn't count against you. Any brand counts in the denominator, tracked or not, so adding or removing competitors doesn't change your Visibility. Only direct mentions count: appearing in a cited page's title or URL isn't enough.

### Mentions

The number of answers that name the brand. A brand named five times in one answer counts once.

### Sentiment

A score from 1 to 100 for how an answer talks about a brand, averaged over the brand's mentions in the filtered answers. Green is 70 and above, amber 51 to 69, red 50 and below.

### Citations

The number of answers that cite a page, counted once per answer. Pages the model's web search found but the answer didn't use are listed as sources, not citations.

## Filters

The filter bar at the top always has three chips:

* **Brand:** which brands the charts show. Switch between **All brands** and **Competitors**, or pick specific brands.
* **Period:** **Last 7 days** (the default), **Last 14 days**, **Last 30 days** or **Custom range**.
* **Model:** one or more AI models, or **All models**.

Click **Filter** to add **Topic**, **Country**, **Prompt**, **Domain** or **URL** (answers citing those sources), **Sentiment** (answers where a brand scores at or under a threshold), or **Includes** (answers that showed **Shopping results** or a **Sponsored ad**). **Clear all** resets the bar. Filters live in the page URL, so you can bookmark or share a filtered view.

The Brand and Sentiment filters narrow the answer and source lists, not the Visibility calculation, which always runs over all matching answers.

## Saved views

The **Saved views** menu on the right of the filter bar stores a set of filters under a name. Set your filters, open **Saved views** and click **Save current as new view…**. Saved views are shared with everyone in the project. From a view's menu you can **Set as my default**, which loads it when you open Data Analytics, **Overwrite with current filters**, **Rename…** or **Delete**.

## Widgets

* **Visibility Trend:** a line chart of the top five brands, plus yours if it isn't among them. Switch the metric between Visibility, Sentiment and Mentions, and group by **Day**, **Week** or **Month**.
* **Industry Ranking:** the five brands with the highest Visibility. If yours isn't in the top five, it's pinned below with its real rank.
* **Source Type Distribution:** a pie chart of citations. Toggle between domain ownership (your pages, competitors' pages, **3rd Party**) and source type (News, Blog, Social, Reviews and so on).
* **Top Cited URLs** and **Top Cited Domains:** the seven pages and domains cited in the most answers.

## Results tabs

Below the widgets, three tabs list the detail.

![The Prompts tab, listing model responses with the model, prompt, topics, whether your brand was mentioned, and the country](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/data-analytics/model-responses.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=716b7ae43af08666d60bd448b7426cfd)

### Prompts

The **Model Responses** table lists every answer in the filters, newest first, including answers that name no brand. Click a row to expand it and see the full answer, its **Sources** (with cited pages marked), the **Web Search Query** the model ran, and **Brands Mentioned**. Click a brand to highlight it in the text and see its sentiment and the passage behind it. Answers that showed products or places have **View shopping results** and **View map results** buttons.

For one prompt's trend, countries and history, open it in [Prompts](./prompts.md).

### Brand mentions

**Brand Analysis** lists every brand named in the filtered answers, with Mentions, Visibility, Sentiment and the models that named it. Expand a brand to see the prompts it was named in, and click a prompt to jump to its answers. This is the quickest way to find prompts where a competitor shows up and you don't.

### Sources

**Source Analysis** lists the cited sources, switchable between **Domains** and **URLs**. In URL mode you can filter by whether the cited page mentions your brand (**Brand Mentioned** or **Not Mentioned**). Each source has **View source text**, **Add as filter** and **Visit**. Expand a domain and click **Export all sources as CSV** to download its cited pages for the current filters.

## When a widget is empty

When nothing matches, each widget says so and names the filters in play, for example "No data available in the last 7 days from ChatGPT". Widen the period, remove a filter, or check that your prompts aren't paused.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/analytics](https://docs.chatfeatured.com/using-chatfeatured/analytics).
