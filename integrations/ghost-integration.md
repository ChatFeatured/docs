# Ghost integration

> Publish ChatFeatured articles to your Ghost site as drafts, live posts or scheduled posts

The Ghost integration creates posts on your Ghost site. You connect with the Admin API key of a custom integration, then publish from the article editor. Set it up under **Integrations → Ghost**. Each project connects one Ghost site.

## Setup

**1. Create a custom integration in Ghost**

In Ghost Admin (for example `https://yourblog.ghost.io/ghost/`), go to **Settings → Integrations**, click **Add custom integration**, name it "ChatFeatured" and click **Create**.

**2. Copy the Admin API key**

In the integration's details, reveal and copy the whole **Admin API Key**. It looks like `{id}:{secret}`, with a colon in the middle. A key without a colon is the Content API key, which can't publish.

**3. Connect in ChatFeatured**

Go to **Integrations → Ghost**, enter your **Ghost Site URL** (for example `https://yourblog.ghost.io`), paste the key into **Admin API Key**, and click **Connect Ghost**. Use the address where Ghost Admin answers; a custom domain works if Ghost Admin is reachable on it.

To replace the key later, paste it into **New Admin API Key** on the connection card and click **Update API Key**. If a publish fails, its error appears on the card as **Last error**.

## Publish an article

In the article editor, click **Publish** or **Schedule** and choose Ghost. The **Publish to Ghost** dialog has:

* **Publish Status**: **Save as Draft**, **Publish Now** or **Schedule**, with a date, time and timezone for Schedule.
* **Author**: **Default author** or any staff user on your Ghost site.
* **Tags**: type a tag and click **Add**, or pick an existing Ghost tag. New tags are created in Ghost.

The title, body, excerpt, meta description and featured image are sent with the post. Ghost generates the slug from the title. Posts aren't emailed to your members; send a newsletter from Ghost if you want one.

| Action | In Ghost | Article in ChatFeatured |
| - | - | - |
| Save as Draft | Draft created, or the existing one updated | Keeps its current status |
| Publish Now | Created or updated, then live | Published |
| Schedule | Created as a scheduled post; Ghost publishes it at that time | Scheduled, then Published |
| Reschedule | Ghost's schedule moves to the new time | Stays Scheduled |
| Cancel schedule | Ghost's schedule is cancelled and the post stays a draft | Back to Review |
| Unpublish | The post goes back to a draft | Back to Review |
| Publish again | The same post is updated | Published |

Deleting an article in ChatFeatured doesn't touch the Ghost post.

Once published, the editor shows **View In Ghost** instead of **Publish**. To change the post, choose **Unpublish** from the article's menu in the Articles list, edit it, then publish again. The same Ghost post is updated.

## Troubleshooting

> [accordion] Invalid API key format. Expected \{id}:\{secret} format.
>
> You probably copied the Content API key, or only part of the key. Go back to the custom integration in Ghost and copy the whole **Admin API Key**, which has a colon between its two parts.

> [accordion] Invalid Admin API Key. Please check that you copied the correct key from Ghost Admin → Settings → Integrations.
>
> Ghost doesn't recognise the key. The integration may have been deleted, or its key regenerated, in Ghost. Copy the current key and paste it into **New Admin API Key**.

## Related

> [card] [All integrations](./overview.md)
>
> Every CMS and analytics integration ChatFeatured supports.

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/ghost-integration](https://docs.chatfeatured.com/integrations/ghost-integration).
