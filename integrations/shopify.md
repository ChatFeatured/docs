# Shopify integration

> Publish ChatFeatured articles to your Shopify store's blog through a custom app you create

The Shopify integration publishes ChatFeatured articles to a blog on your Shopify store. You create your own app in the Shopify Dev Dashboard, install it on your store, and paste its Client ID and Client Secret into ChatFeatured. There's no App Store listing to install.

You'll find it under **Integrations → Shopify** in your project.

## Before you start

In Shopify, sign in to the Dev Dashboard with the account that owns the store. The app and the store must belong to the same Shopify organization.

## Setup

### Step 1: Create an app in the Shopify Dev Dashboard

1. Go to [dev.shopify.com](https://dev.shopify.com) and sign in with the account that owns your store.
2. Open **Apps**, select **Create app**, then **Start from Dev Dashboard**.
3. Give it any name, for example "ChatFeatured Publisher", and select **Create**.

### Step 2: Add permissions and release

1. Open **Versions**.
2. Set the App URL to `https://chatfeatured.com`. Shopify requires one, but ChatFeatured never calls it.
3. Add the `read_content` and `write_content` scopes.
4. Uncheck **Embed app in Shopify admin** if the option is shown.
5. Select **Release** and confirm the new version.

### Step 3: Install the app on your store

1. Go back to your app's **Home** tab in the Dev Dashboard.
2. In the **Installs** section, select **Install app**.
3. Choose your store, then select **Install**.

### Step 4: Connect in ChatFeatured

1. In the Dev Dashboard, open your app's **Settings** and copy the **Client ID** and **Client secret**.
2. In ChatFeatured, go to **Integrations → Shopify**.
3. Enter your **Store domain**. Use the `.myshopify.com` domain (for example `your-store.myshopify.com`), not your storefront domain.
4. Paste the **Client ID** and **Client Secret**.
5. Click **Connect store**.

If the credentials work, you'll see "Shopify store connected! Now pick a blog to publish to." You don't need to reconnect unless you rotate the app's secret or uninstall the app.

### Step 5: Pick a blog

1. Under **Publish to blog**, choose the blog articles should go to.
2. Optionally enter a **Default author** name, for example "Jane Doe".
3. Click **Save blog selection**.

You can't publish until a blog is selected.

## Publishing articles

From the article editor, click **Publish** (or **Schedule**) and choose Shopify. You can also publish from the agent or MCP. The **Publish to Shopify** dialog has these fields:

* **Publish Status**: **Publish as Hidden**, **Publish Now** or **Schedule**.
* **Schedule Date & Time** and **Timezone**, when you pick Schedule.
* **Author**: prefilled with the connection's default author. If you leave it blank, ChatFeatured uses the default author, then your project name.
* **Tags**: type a tag and click **Add**.

**Publish as Hidden** is Shopify's version of a draft: the article is in your blog but not visible on your storefront.

### Field mapping

| ChatFeatured | Shopify | Required | Notes |
| - | - | - | - |
| Title | Title | Required | |
| Content | Body | Required | |
| Excerpt | Summary | Optional | |
| Slug | Handle (URL) | Optional | If the article has no slug, Shopify makes one from the title. |
| Author (dialog) | Author | Required by Shopify | Falls back to the default author, then the project name. |
| Featured image | Featured image | Optional | |
| Tags (dialog) | Tags | Optional | |
| Meta description | Meta description | Optional | |

## What happens when you publish, update, unpublish, schedule

| You do this in ChatFeatured | What happens in Shopify | The article in ChatFeatured |
| - | - | - |
| **Publish as Hidden** | The article is created hidden, or the existing one updated. | Keeps its current status, so you can still publish it. |
| **Publish Now** | The article is created or updated, then made visible. | Moves to Published. |
| **Schedule** | The article is created or updated, hidden, with a future publish date. Shopify makes it visible at that time. | Moves to Scheduled, then to Published at that time. |
| **Reschedule** | The Shopify article's publish date moves to the new time. | Stays Scheduled. |
| **Cancel schedule** | The schedule is cancelled in Shopify and the article stays hidden. | Returns to review. |
| **Unpublish** | The article is hidden on your storefront. It stays in your Shopify blog. | Returns to review. |
| **Publish again** | The same Shopify article is updated. A new one is created only if the article was deleted in Shopify. | Moves to Published. |

Once an article is published, the editor shows **Manage in Shopify** instead of **Publish**. To change it, open the article's menu in the Articles list and choose **Unpublish**, edit the article, then publish it again. The same Shopify article is updated.

When an article goes live, ChatFeatured records its address on your store's primary storefront domain and starts attributing AI citations of that page to the article.

## Troubleshooting

> [accordion] Shopify rejected the Client ID and Client Secret
>
> One of the two is wrong. Copy both again from your app's **Settings** page in the Dev Dashboard.

> [accordion] Shopify refused to issue a token
>
> The full message reads "Make sure the app is installed on this store, and that the store and app belong to the same Shopify organization." Install the app on the store from the app's **Home** tab (Step 3). If it's installed, check that you created the app while signed in as the store's owner.

> [accordion] The app is missing the write\_content scope
>
> The released app version doesn't include the scopes. Add `read_content` and `write_content` under **Versions**, release the new version, then connect again.

> [accordion] That store domain doesn't exist on Shopify
>
> Use the store's `.myshopify.com` domain, not your storefront's custom domain. You'll find it in the Shopify admin under **Settings → Domains**.

## Related

> [card] [All integrations](./overview.md)
>
> Every CMS and analytics integration ChatFeatured supports.

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/shopify](https://docs.chatfeatured.com/integrations/shopify).
