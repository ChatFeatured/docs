# Wix integration

> Publish ChatFeatured articles to your Wix blog as drafts, live posts or scheduled posts.

The Wix integration publishes ChatFeatured articles to the blog on a Wix site. You connect with a Wix API key and the site's ID, pick a default author, and then save drafts, publish or schedule posts from the article editor, the agent or MCP. You'll find it under **Integrations → Wix** in your project.

## Before you start

* Only the Wix **account owner or a co-owner** can create an API key.
* The site needs **at least one site member**. Wix records a member as the author of every post, so a site with no members can't be connected.
* The site has to be **published** in Wix before its posts get a public address.

## Setup

### Step 1: Create the API key in Wix

1. Sign in to Wix as the account owner or a co-owner.
2. Go to **Account Settings → [API Keys](https://manage.wix.com/account/api-keys)** and click **Generate API Key**.
3. Name the key "ChatFeatured". Under **Sites**, choose **Specific sites** and pick the site with your blog.
4. Under **Permissions**, open **All site permissions → See all** and tick these four: **Wix Blog**, **Manage Site Members**, **Manage Site Media**, **Ricos Documents**.
5. Click **Generate Key**. Wix emails you a 6-digit code. Enter it, then copy the key. Wix shows it only once.

### Step 2: Find the site ID

Open your site's dashboard in Wix. The site ID is the long code in the address bar after `/dashboard/`, in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

### Step 3: Connect in ChatFeatured

1. In ChatFeatured, go to **Integrations → Wix**.
2. Under **Connect a blog**, paste the key into **API key** (it starts with `IST.`) and the site ID into **Site ID**.
3. Click **Connect**. ChatFeatured checks the key and loads the site's members.
4. Pick a **Default author** from the site members.
5. Click **Connect blog**.

The site now appears under **Connected blogs** and as a publish destination on your articles. To connect another site, repeat Step 3; you choose the site at publish time. To change the key or default author, disconnect the site and connect it again. Posts you've already published stay linked to their articles.

## Publishing articles

From the article editor, click **Publish** (or **Schedule**) and choose your Wix site. The **Publish to Wix** dialog has:

* **Publish Status**: **Save as Draft**, **Publish Now** or **Schedule**.
* **Schedule Date & Time** and **Timezone**, when you schedule.
* **Author**: any site member. It starts on the connection's default author.
* **Tags**: tags Wix doesn't have are created.

### What gets sent

| ChatFeatured | Wix | Required | Notes |
| - | - | - | - |
| Title | Post title and SEO title | Yes | |
| Content | Post body | Yes | Headings, lists, links, tables and code blocks carry over. |
| Images in the body | Post images | No | Copied into your Wix Media Manager. |
| Featured image | Cover image | No | Copied into your Wix Media Manager. |
| Excerpt | Excerpt | No | |
| Slug | Post URL slug | Yes | |
| Meta description | SEO meta description | No | Falls back to the excerpt. |
| Author | Post author | Yes | A site member. |
| Tags | Tags | No | |

## What happens when you publish, update, unpublish, schedule

| You do this in ChatFeatured | What happens in Wix | The article in ChatFeatured |
| - | - | - |
| **Save as Draft** | The post is created, or updated, as a draft. | Stays in its current status, so you can still publish it. |
| **Publish Now** | The post goes live immediately. | Moves to Published. |
| **Schedule** | Wix's own scheduler publishes the post at the time you set. | Moves to Scheduled, then to Published at that time. |
| **Reschedule** | The Wix schedule moves to the new time. | Stays Scheduled. |
| **Cancel Schedule** | The Wix schedule is cancelled and the post stays a draft. | Returns to review. |
| **Unpublish** | The post is taken offline. It stays in Wix as a draft. | Returns to review. |
| **Publish again** | The same post is updated. A new one is created only if the post was deleted in Wix. | Moves to Published. |

To change a live post, open the article's menu in the Articles list and click **Unpublish**, edit the article, then publish it to the same Wix site again. ChatFeatured updates the same post.

When a post goes live, ChatFeatured records its Wix URL and starts attributing AI citations of that page to the article.

## Troubleshooting

> [accordion] Wix rejected the API key
>
> The key was deleted or regenerated in Wix. Create a new key (Step 1), disconnect the site, and connect it again with the new key.

> [accordion] Wix denied this API key access
>
> The key is missing one of the four permissions. Edit the key in Wix and tick **Wix Blog**, **Manage Site Members**, **Manage Site Media** and **Ricos Documents**, or generate a new key with all four.

> [accordion] This Wix site has no members
>
> Wix needs a site member to record as the post author. Add a member to the site in Wix, then click **Connect** again.

> [accordion] The post was published, but this Wix site is unpublished, so it has no public URL.
>
> Publish the site from the Wix editor. ChatFeatured then records the URLs of posts already published to it.

If a publish fails, the error also appears as **Last error** on the site's card under **Connected blogs**.

## Related

> [card] [All integrations](./overview.md)
>
> Every CMS and analytics integration ChatFeatured supports.

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/wix](https://docs.chatfeatured.com/integrations/wix).
