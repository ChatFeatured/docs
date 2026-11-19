# OpenAI Ads Manager

> Connect an OpenAI Ads account with an Advertiser API key to run ChatGPT ad campaigns, read performance and build creative from ChatFeatured

The OpenAI Ads Manager integration connects one OpenAI Ads ad account to a ChatFeatured project through an Advertiser API key. Once it's connected you can create campaigns, ad groups and ads, check their performance, and generate ad copy and images, all from the **Ads** section of the sidebar.

## Who can use it

**Overview** and **Competitor ads** are visible to everyone with access to the project (see [ChatGPT Ads](../using-chatfeatured/chatgpt-ads.md)). **Campaigns**, **Creative studio**, **Insights** and **Settings** sit under **Owner** and appear only for the workspace Owner, who is also the only one who can connect or disconnect a key.

## Connect your ad account

**1. Get an OpenAI Ads account**

If you don't have one yet, open **Campaigns**, **Insights** or **Creative studio** and click **Create an OpenAI Ads account**, which opens [ads.openai.com](https://ads.openai.com).

**2. Create an Advertiser API key**

Generate the key in your OpenAI Ads account. OpenAI's [authentication guide](https://developers.openai.com/ads/api-overview#authentication) has the current steps. Each key belongs to a single ad account.

**3. Paste the key in Settings**

In the sidebar, open **Ads → Settings** (under **Owner**). Paste the key into **Advertiser API key** and click **Connect**. **Test key** checks the key without saving it.

Once connected, the Settings card shows a **Connected** badge with the ad account name and ID. The key is stored for this project only; another project needs its own connection.

To rotate the key, click **Disconnect**, then connect with the new key. Disconnecting deletes the stored key right away. Your campaigns and ads stay in OpenAI Ads.

## What you can do once connected

### Campaigns

**Campaigns** has three views: **Campaigns**, **Ad Groups** and **Ads**. **New Campaign** opens a three-step wizard (**Create Campaign**, **Create Ad Group & Ads**, **Review**). **New Ad Group** and **New Ad** add to an existing campaign. You can pause and resume campaigns, ad groups and ads. Ads show their OpenAI review status: **In review**, **Approved** or **Rejected**.

The limits the forms enforce:

| Setting | Limit |
| - | - |
| Locations | United States, Canada, Australia and New Zealand. At least one is required. |
| Currency | Budgets and the maximum CPM bid are in USD. |
| Objective | Clicks, Conversions or Impressions |
| Budget type | Daily budget or Total budget. It's locked once the campaign is created. |
| Ad title | Up to 50 characters |
| Ad description | Up to 100 characters |
| Ad image | Required. JPEG, PNG, GIF or WebP, up to 10 MB. |

### Insights

**Insights** shows four totals, **Impressions**, **Clicks**, **CTR** and **Spend** (in USD), and a **Daily performance** chart. Click a total to chart that metric. Scope it to the whole account or to one campaign, ad group or ad. The date range defaults to the last 30 days and ends yesterday, because OpenAI doesn't report the current day.

### Creative studio

Fill in **Campaign goal**, **Target audience** and **Landing URL** (plus an optional **Brand voice**) and click **Generate copy** to get four title and description variants. For the image, choose **Generate with AI** or **Upload your own**.

To send a creative to OpenAI Ads, pick a variant and an image, choose an existing **Campaign** and **Ad group**, and click **Create ad in account**. Create the campaign and ad group in **Campaigns** first.

### Recent API calls

Below the key, Settings lists the last 7 days of requests ChatFeatured made to OpenAI Ads. Click **Errors only** to see failures, and expand an entry for its details.

## Troubleshooting

> [accordion] The key is rejected, or actions start failing after it worked
>
> OpenAI rejected the key, usually because it was revoked or rotated in OpenAI Ads. Check **Recent API calls** for the failing request, then disconnect and connect with a new key.

> [accordion] I can't see Campaigns, Insights, Creative studio or Settings
>
> These are for the workspace Owner only. Ask the Owner to connect the account and run campaigns.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/openai-ads-manager](https://docs.chatfeatured.com/integrations/openai-ads-manager).
