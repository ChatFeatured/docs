# Google Analytics

> Connect a Google Analytics 4 property to see how much traffic AI assistants send to your site, which pages they land on, and what converts.

The Google Analytics integration imports reports from one GA4 property into your project. ChatFeatured uses them to show traffic sources, AI referrals, landing pages, key events and revenue in [Website Analytics](../using-chatfeatured/website-analytics.md) and the dashboard's Website Traffic widget. The AI agent can also answer questions about your GA4 traffic in chat.

Open it from **Integrations**, in the **Website analytics** section, by clicking the **Google Analytics** card.

## Before you start

* You need a Google account that can see the GA4 property. Viewer access in GA4 is enough, because ChatFeatured only reads.
* Owners, Admins and Members can connect and manage the integration.

## Connect

**1. Sign in with Google**

Click **Connect Google Analytics**, choose the Google account that can see your property, and allow read-only access to your Analytics data.

**2. Choose the property**

Pick a property from the **GA4 property** dropdown, then click **Use this property**. If a property you just created is missing, click the refresh button next to the dropdown. No data comes in until you choose one.

The property stays fixed for this project once it's chosen, so other people in your workspace can't switch it or browse the other properties your Google account can see.

**3. Wait for the first import**

Choosing a property imports the last 90 days. Progress shows under **Report sync**. Once it finishes, click **View analytics** to open Website Analytics.

## What gets imported

* **Traffic** by source, medium, campaign and channel: sessions, users, engagement, key events and revenue.
* **Landing pages**, split into AI and other traffic: sessions, users, key events and revenue.

A session counts as AI traffic when its GA4 session source names an AI assistant, such as ChatGPT, Perplexity, Claude, Gemini, Copilot or Grok. Campaign links count too, so a link tagged `utm_source=chatgpt` is counted as ChatGPT.

## Syncing

Each connected property syncs once a day. **Sync now** re-imports the last 90 days, and **Report sync** shows when the last import completed. Website Analytics shows imported data, so it's as fresh as the last sync.

## Change the property or disconnect

To use a different property, click **Disconnect**, then connect again and choose the new one. **Disconnect** removes the connection and every stored GA4 report.

**Reconnect** runs the Google sign-in again and keeps your property.

## Troubleshooting

> [accordion] "No accessible GA4 properties found."
>
> The Google account you connected can't see any GA4 property. Give it at least Viewer access in GA4's Admin settings, then click the refresh button next to the dropdown. Or click **Reconnect** and pick a different Google account.

> [accordion] "Permission denied. Please reconnect your Google account."
>
> Google rejected ChatFeatured's access, for example because access was revoked or the account lost access to the property. The badge changes to **Reconnect required**. Click **Reconnect**, then **Sync now**.

> [accordion] "Sync timed out. Retry to refresh your reports."
>
> The sync took too long. Click **Retry** or **Sync now**.

## Related

* [Website Analytics](../using-chatfeatured/website-analytics.md)
* [Google Search Console](./google-search-console.md)
* [Agent Analytics](../using-chatfeatured/agent-analytics.md), for AI crawler visits rather than human referrals


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/google-analytics](https://docs.chatfeatured.com/integrations/google-analytics).
