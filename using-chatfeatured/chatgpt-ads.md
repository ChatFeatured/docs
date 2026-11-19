# ChatGPT Ads

> See which advertisers showed up in ChatGPT for your prompts, and run your own OpenAI Ads campaigns from ChatFeatured

ChatGPT Ads has two halves. The competitor side shows the advertisers ChatFeatured has seen in ChatGPT answers to your project's prompts. The campaign side connects your [OpenAI Ads Manager](../integrations/openai-ads-manager.md) account so you can create campaigns, check their numbers and generate ad creative without leaving the dashboard.

Open **Ads** in the sidebar. Everyone sees **Overview** and **Competitor ads**. **Campaigns**, **Creative studio**, **Insights** and **Settings** are for workspace Owners only (Admins don't qualify).

> [!WARNING]
>
> Competitor ad collection is paused. Ads collected before the pause are still shown, but no new ones will appear.

## Overview

Four tiles across the top:

| Tile | What it counts |
| - | - |
| Advertisers tracked | Companies whose ads appeared in ChatGPT answers to this project's prompts |
| Distinct ads | Unique ad creatives across all advertisers |
| Impressions captured | Every time an ad appeared in an answer ChatFeatured recorded |
| Prompts with ads | How many of your active prompts triggered at least one ad |

Below the tiles, **Recently spotted advertisers** lists the five newest advertisers, and **Who is spending the most?** ranks the top five by captured impressions over **7d** or **30d**. ChatFeatured can't see what competitors actually spend, so this is an impression ranking, not a spend ranking.

## Competitor ads

**By advertiser** lists every advertiser with their ads, prompts, impressions and first and last seen dates. Expand a row to see the advertiser's ads and the prompts where they appeared.

**By prompt** starts from your prompts, with an advertiser filter. Expand a prompt to see the ads that showed up for it.

## Running your own campaigns

Connect your OpenAI Ads account first. In **Settings**, paste your **Advertiser API key**, click **Test key**, then **Connect**. The [OpenAI Ads Manager](../integrations/openai-ads-manager.md) guide covers where to get the key.

### Campaigns

**Campaigns** has three views: Campaigns, Ad Groups and Ads. Each list can pause and resume its items and has its own create button.

**New Campaign** creates the campaign, its first ad group and its first ad together:

**1. Create Campaign**

Campaign name, objective (Clicks, Conversions or Impressions), locations, budget type (Daily budget or Total budget), budget in USD, start date and an optional end date. Budget type can't be changed after the campaign is created.

**2. Create Ad Group & Ads**

Ad group name, maximum CPM bid in USD and optional context hints. Then the ad: an internal name, title (up to 50 characters), description (up to 100 characters), link and image.

**3. Review**

Check everything and click **Create**. The campaign is created in your OpenAI Ads account.

OpenAI Ads accepts four locations: United States, Canada, Australia and New Zealand. Each ad shows OpenAI's review status: In review, Approved or Rejected.

### Creative studio

Creative studio writes ad copy and an image, then creates the ad in your account.

1. Fill in **Campaign goal**, **Target audience**, **Landing URL** and, if you want, **Brand voice**. Click **Generate copy** and pick one of the variants.
2. For the image, choose **Generate with AI** or **Upload your own** (JPEG, PNG, GIF or WebP, up to 10 MB).
3. Choose a campaign and ad group, then click **Create ad in account**.

### Insights

Insights pulls performance from your OpenAI Ads account. Choose a scope (Account, Campaign, Ad group or Ad) and a date range. Cards show **Impressions**, **Clicks**, **CTR** and **Spend**; click one to plot it by day. OpenAI Ads doesn't report today's numbers, so the range ends yesterday at the latest.

### Settings

Once connected, Settings shows the ad account, a **Disconnect** button, and **Recent API calls** from the last 7 days, with an **Errors only** filter.

## Related

* [OpenAI Ads Manager](../integrations/openai-ads-manager.md): connect your account
* [Prompts](./prompts.md): the prompts competitor ads were collected from
* [Data Analytics](./analytics.md): your Visibility in AI answers


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/chatgpt-ads](https://docs.chatfeatured.com/using-chatfeatured/chatgpt-ads).
