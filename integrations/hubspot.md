# HubSpot integration

> Publish ChatFeatured articles to a blog hosted on HubSpot

The HubSpot integration publishes ChatFeatured articles to a blog hosted on HubSpot. You connect with a private app token, choose a blog and a default author, and then publish, save drafts or schedule from the article editor, the agent or MCP. Set it up under **Integrations → HubSpot**.

## Before you start

* Your blog has to be hosted on HubSpot. If you use HubSpot as your CRM but run your blog on WordPress, Webflow or Framer, connect that platform instead. Landing pages and site pages aren't supported.
* The blog needs to exist and have at least one author. On a new portal, go to **Content → Blog** and start a post to create the blog, then add an author under **Content → Blog → Configure → Authors → Add new author**.
* Creating a private app takes a HubSpot Super Admin.

## Setup

### Step 1: Create a legacy private app in HubSpot

1. In HubSpot, click the **settings** gear icon in the top navigation.
2. Go to **Integrations → Private Apps**.
3. On the **Your private apps have moved** screen, click **Go to Legacy Apps**.
4. Click **Create legacy app → Private**.
5. Acknowledge HubSpot's legacy-app notice and click **Continue with legacy private app**.
6. On the **Basic Info** tab, give it a name you'll recognise, such as "ChatFeatured".

### Step 2: Select the scope

1. Open the **Scopes** tab.
2. Click **Add new scope**, search for and select `content`, then click **Update**.
3. Click **Create app**, then **Continue creating**.

`content` is the only scope you need.

### Step 3: Copy the access token

1. Open the **Auth** tab of the app.
2. Click **Show token**, then **Copy**. The token starts with `pat-`.

### Step 4: Connect in ChatFeatured

1. Go to **Integrations → HubSpot**.
2. Paste the token into **Private app token** and click **Connect**.
3. Pick the **Blog** you want to publish to.
4. Pick a **Default author**. HubSpot won't publish a post without one.
5. Click **Connect blog**.

If your portal has several blogs, repeat Step 4 with the same token and pick a different blog each time. You choose the blog when you publish.

## Publishing an article

In the article editor, click **Publish** or **Schedule** and choose your HubSpot blog. The **Publish to HubSpot** dialog has:

| Setting | What it does |
| - | - |
| **Publish Status** | **Save as Draft**, **Publish Now** or **Schedule**. |
| **Schedule Date & Time** and **Timezone** | Shown for Schedule. |
| **Author** | Starts on the connection's default author. |
| **Tags** | The post's blog tags. |

Publish Now and Schedule need an author and a meta description (or an excerpt to fall back on). Save as Draft needs neither.

### What gets sent

| ChatFeatured | HubSpot | Required | Notes |
| - | - | - | - |
| Title | Post title | Yes | |
| Content | Post body | Yes | |
| Slug | URL slug | Yes | |
| Author | Blog author | To publish or schedule | |
| Meta description | Meta description | To publish or schedule | Falls back to the excerpt. |
| Excerpt | Post summary | No | |
| Featured image | Featured image | No | |
| Tags | Blog tags | No | |

## What happens when you publish, update, unpublish, schedule

| Action in ChatFeatured | What happens in HubSpot | The article in ChatFeatured |
| - | - | - |
| **Save as Draft** | A draft post is created, or the existing one updated. | Keeps its current status. |
| **Publish Now** | The post is created or updated, then published. | Moves to Published. |
| **Schedule** | The post is created or updated, then HubSpot's scheduler publishes it at that time. | Moves to Scheduled, then to Published at that time. |
| **Reschedule** | The same post is rescheduled for the new time. | Stays Scheduled. |
| **Cancel schedule** | The post goes back to a draft in HubSpot. | Returns to review. |
| **Unpublish** | The post goes back to a draft. | Returns to review. |
| **Publish again** | The same HubSpot post is updated. If it was deleted in HubSpot, a new one is created. | Moves to Published. |

Once an article is published, the editor shows **View In HubSpot** instead of **Publish**. To change the post, open the article's menu in the Articles list and choose **Unpublish**, edit the article, then publish it again. The same HubSpot post is updated.

Once a post is live, ChatFeatured records its HubSpot URL and starts attributing AI citations of that page to the article.

## Troubleshooting

> [accordion] HubSpot denied access to the blog API
>
> The private app may be missing the `content` scope, or your HubSpot subscription may not include the Blog API. To check the scope, in HubSpot go to **Settings → Integrations → Private Apps → Go to Legacy Apps**, open your app, and confirm `content` is selected on the **Scopes** tab.

> [accordion] HubSpot rejected the private app token
>
> The token was rotated or the app was deleted in HubSpot. Create a new token, or a new private app, following the setup steps above, then connect again with it.

> [accordion] HubSpot requires a meta description to publish
>
> The article has neither a meta description nor an excerpt. Add one in ChatFeatured and publish again.

## Related

> [card] [All integrations](./overview.md)
>
> Every CMS and analytics integration ChatFeatured supports.

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/hubspot](https://docs.chatfeatured.com/integrations/hubspot).
