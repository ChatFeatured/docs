# Plausible Analytics

> Connect Plausible Cloud to see website traffic, goal conversions and AI referrals in ChatFeatured

The Plausible Analytics integration reads your site's traffic from Plausible's Stats API and shows it in **Website Analytics** and the **Website traffic** widget on your dashboard. It lives under **Integrations → Website analytics → Plausible Analytics**. ChatFeatured only reads data Plausible already has. Viewers can't manage the connection.

## Before you start

* The site must be on Plausible Cloud. Self-hosted Plausible isn't supported.
* Your Plausible plan needs Stats API access, which Plausible includes on its Business plan.

## Connect Plausible

**1. Create a Stats API key in Plausible**

In Plausible, switch to the team that owns the site. Open your account settings, go to **API Keys**, click **New API Key** and choose the **Stats API** type. Copy the key. Plausible shows it only once.

A key can't read a site where you're only a guest.

**2. Open the integration in ChatFeatured**

Go to **Integrations → Website analytics → Plausible Analytics**.

**3. Enter the site ID and key**

Enter the **Site ID** exactly as Plausible shows it, for example `example.com`, and paste the key into **Stats API key**. Click **Connect Plausible Analytics**, then **View website analytics** to see the reports.

## What you see

* Visitors, visits, pageviews and daily trends
* AI referral traffic by platform, such as ChatGPT, Perplexity, Claude, Gemini and Copilot
* Landing pages, traffic sources, bounce rate and visit duration
* Conversions from the goals you set up in Plausible, and revenue when Plausible has it

**Users** shows Plausible's visitors and **Sessions** shows its visits. Revenue needs a goal with [revenue tracking](https://plausible.io/docs/ecommerce-revenue-tracking) in Plausible. The AI agent and the MCP analytics tools read Google Analytics, not Plausible.

Reports are fetched from Plausible when you open them and reused for up to five minutes, so a number can trail Plausible's dashboard by that long. When more than one analytics provider is connected, a provider switcher appears on [Website Analytics](../using-chatfeatured/website-analytics.md).

## Update or disconnect

To change the site or rotate the key, enter the site ID and a new key, then click **Update connection**. **Disconnect** removes the connection from ChatFeatured; your data in Plausible isn't touched.

## Troubleshooting

| Message | What to do |
| - | - |
| "Plausible rejected this API key. Reconnect with a valid Stats API key." | Check that you copied a Stats API key (not a Sites API key) and that it hasn't been revoked. |
| "This key cannot access the site's stats. Check the Plausible team and Stats API plan access." | Create the key under the team that owns the site, and confirm your Plausible plan includes the Stats API. |
| "Plausible site not found. Check the site ID." | Enter the site ID exactly as Plausible shows it, with no `https://` or spaces. |
| "This Plausible report is too large. Select a shorter period." | Pick a shorter date range. |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/plausible](https://docs.chatfeatured.com/integrations/plausible).
