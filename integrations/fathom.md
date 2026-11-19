# Fathom Analytics

> Connect Fathom Analytics to see website traffic, event conversions and AI referrals in ChatFeatured

The Fathom Analytics integration reads your site's traffic from Fathom's API and shows it in **Website Analytics** and the **Website traffic** widget on your dashboard. It lives under **Integrations → Website analytics → Fathom Analytics**. ChatFeatured only reads data Fathom already has, so you need a Fathom site that's already collecting data. Viewers can't manage the connection.

## Connect Fathom

**1. Create an API key in Fathom**

In Fathom, open the [API page](https://app.usefathom.com/api) and click **Create new**. Name the key and pick **Read only (all sites)** or **Site-specific**. Either is enough. Save, then copy the key. Fathom won't show it again.

**2. Open the integration in ChatFeatured**

Go to **Integrations → Website analytics → Fathom Analytics**.

**3. Enter the key and pick a site**

Paste the key into **API key** and click **Find my sites** to choose from the sites it can see.

A site-specific key can't list sites, so type the **Site** ID yourself. It's the code in your Fathom tracking snippet, such as `ABCDEFGH`.

Click **Connect Fathom Analytics**, then **View website analytics** to see the reports.

## What you see

* Visitors, pageviews and daily trends
* AI referral traffic by platform, such as ChatGPT, Perplexity, Claude, Gemini and Copilot
* Landing pages, traffic sources, bounce rate and average visit duration
* Conversions from the events you track in Fathom

Fathom doesn't measure sessions, so **Sessions** and **Users** both show Fathom's visitors. Revenue isn't read from Fathom. The AI agent and the MCP analytics tools read Google Analytics, not Fathom.

Reports are fetched from Fathom when you open them and reused for up to 30 minutes, so a number can trail Fathom's dashboard by that long. When more than one analytics provider is connected, a provider switcher appears on [Website Analytics](../using-chatfeatured/website-analytics.md).

## Test, update or disconnect

**Test connection** checks the saved key against Fathom again. To rotate the key or change sites, enter a new key, pick the site and click **Update connection**. **Disconnect** removes the key and site from ChatFeatured; your data in Fathom isn't touched.

## Troubleshooting

| Message | What to do |
| - | - |
| "Fathom rejected this API key. Check that it was copied in full and has not been deleted." | Copy the whole key again, or create a new one in Fathom. |
| "This API key cannot list sites. If this key is limited to one site, enter the site ID below." | The key is site-specific. Type the site ID instead of using **Find my sites**. |
| "This API key cannot access that site. Check the key's permissions in Fathom." | Give the key access to that site in Fathom, or use a **Read only (all sites)** key. |
| "Fathom site not found. Check the site ID." | Compare the ID with your Fathom site settings. |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/fathom](https://docs.chatfeatured.com/integrations/fathom).
