# Databuddy

> Connect Databuddy to see website traffic and AI referrals in ChatFeatured

The Databuddy integration reads your website's traffic from Databuddy's API and shows it in **Website Analytics** and the **Website traffic** widget on your dashboard. It lives under **Integrations → Website analytics → Databuddy**. ChatFeatured only reads data Databuddy already has, so you need a Databuddy website with the tracking script installed. Viewers can't manage the connection.

## Connect Databuddy

**1. Create an API key in Databuddy**

In Databuddy, open **Organization settings → API keys** ([direct link](https://app.databuddy.cc/organizations/settings#api-keys)) and click **Add API key**. Name it and keep the default **Read data** permission. Under **Website access** you can limit the key to the website you're connecting. Click **Add API key** and copy the key, which starts with `dbdy_`. Databuddy shows it only once.

**2. Open the integration in ChatFeatured**

Go to **Integrations → Website analytics → Databuddy**.

**3. Enter the key and pick a website**

Paste the key into **API key** and click **Find my websites** to choose from the websites it can read. You can also paste the **Website** ID yourself. It's the `data-client-id` in your Databuddy tracking script.

Click **Connect Databuddy**, then **View website analytics** to see the reports.

## What you see

* Visitors, pageviews and daily trends
* AI referral traffic by platform, such as ChatGPT, Perplexity, Claude and Gemini
* Landing pages with the share of visitors from AI platforms
* Traffic by channel, source, UTM medium and UTM campaign

AI traffic comes from Databuddy's own AI reports. They read the full referrer, so they count Gemini visits that Databuddy's referrer list files under Google, and they count visits from AI desktop apps, such as Claude's, that arrive without a referrer.

Databuddy reports traffic sources by visitor, not by session, so **Sessions** and **Users** both show Databuddy's visitors. Conversions and revenue aren't read from Databuddy, because its API can't tie goals or events to a traffic source.

Reports are fetched from Databuddy when you open them and reused for up to 5 minutes, so a number can trail Databuddy's dashboard by that long. When more than one analytics provider is connected, a provider switcher appears on [Website Analytics](../using-chatfeatured/website-analytics.md).

## Test, update or disconnect

**Test connection** checks the saved key against Databuddy again. To rotate the key or change websites, enter a new key, pick the website and click **Update connection**. **Disconnect** removes the key and website from ChatFeatured; your data in Databuddy isn't touched.

You can also connect over the [platform API](./rest-api.md) with `POST /projects/{projectId}/databuddy`, list a key's websites with `POST /projects/{projectId}/databuddy/websites`, and disconnect with `DELETE /projects/{projectId}/databuddy`.

## Troubleshooting

| Message | What to do |
| - | - |
| "Databuddy rejected this API key. Check that it was copied in full and hasn't been revoked." | Copy the whole key again, or create a new one in Databuddy. |
| "This API key can't see that website. Check the website ID, or the key's website access in Databuddy." | Use **Find my websites** to pick the website, or add the website to the key's **Website access** in Databuddy. |
| "This API key can't read analytics for that website. Give it the Read data permission and access to the website in Databuddy." | Edit the key in Databuddy and turn on **Read data**. |
| "Databuddy's rate limit was reached. Please try again in a minute." | Databuddy allows 120 report requests a minute per key. Wait a minute and reload. |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/databuddy](https://docs.chatfeatured.com/integrations/databuddy).
