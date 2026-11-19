# Framer

> Sync ChatFeatured articles into a Framer CMS collection with the ChatFeatured CMS Sync plugin.

The Framer integration puts your ChatFeatured articles into a Framer CMS collection. ChatFeatured doesn't push anything to Framer. Instead, the **ChatFeatured CMS Sync** plugin, running in your Framer project, pulls articles in whenever you sync. You set it up under **Integrations → Framer**.

> [!WARNING]
>
> The plugin's collection mirrors ChatFeatured. Every sync replaces the collection's contents with what ChatFeatured has right now:
>
> * Edits you make to these items in Framer are overwritten on the next sync. Edit in ChatFeatured.
> * An article you delete, unpublish or move back to Review in ChatFeatured is removed from Framer on the next sync.
> * Each sync pulls **every** Published article in the project, not only the ones you sent to Framer.

## Set it up

**1. Create the integration in ChatFeatured**

Open **Integrations → Framer** and click **Create Integration**. ChatFeatured shows an API key that starts with `cf_framer_`. Copy it now; it's only shown once. If you lose it, use the regenerate button next to the key.

**2. Add the plugin in Framer**

In your Framer project, find the **ChatFeatured CMS Sync** plugin (**Plugins → Browse**) and use it to create a new CMS collection. The plugin sets up the collection's fields and manages its items.

**3. Connect the plugin**

Paste the API key into the plugin's **API Key** field and click **Connect**. Back in ChatFeatured, the status changes from "Waiting for Framer Connection" to "Integration Active" within a few seconds.

The **Email notifications** switch emails you when articles are ready to sync. It starts switched on.

## Publish and sync

Open the article and choose the publish button (**Publish to Framer** if you have more than one destination). The **Publish to Framer** dialog has one choice, **Publish Mode**:

* **Publish Now** marks the article ready for the next sync.
* **Schedule for Later** lets you pick a date, time and timezone. The article joins the sync once that time arrives, and, with **Email notifications** on, ChatFeatured emails you a reminder to sync.

Then sync in Framer: run the collection's **Sync** in the Framer CMS, or open the plugin and click **Sync Articles**.

While an article waits for a sync, its button in ChatFeatured reads **Awaiting Sync** and offers **Cancel Schedule**, which moves it back to Review. After a sync, ChatFeatured marks the synced articles Published and the button reads **Published to Framer**.

| You do this in ChatFeatured | Next sync in Framer |
| - | - |
| Publish or schedule (once its time arrives) | The item is added |
| Edit an article that's in the collection | The item is updated |
| **Unpublish from Framer** (on a Published article) | The article goes back to Review and the item is removed |
| Delete the article | The item is removed |

## What the collection contains

The plugin defines the fields itself, so there's nothing to map: **Title**, **Slug**, **Content** (formatted text), **Excerpt**, **Meta Description**, **Article Type**, **Article Description**, **Why This Article**, **Status** and **Published At**.

No featured image is synced. To carry extra data, click **Add field** on the **Fields** card on the Framer integration page, type the field's name, and pick its type (text, formatted text, number, yes or no, date, link or color). You can give it a default and turn on **Required**. You fill in its value on each article under **Additional Metadata**, and it syncs as an extra collection field. A Link field holding an image URL is one way to bring an image across.

## Troubleshooting

> [accordion] Invalid API key
>
> The key was regenerated or the integration was removed. Regenerate the key in ChatFeatured (or create the integration again), then **Disconnect** in the plugin and connect with the new key.

> [accordion] Failed to fetch articles from ChatFeatured
>
> The sync couldn't reach ChatFeatured with the saved key, usually because the key was regenerated or the integration removed. Reconnect the plugin with a current key.

> [accordion] An article isn't in Framer
>
> Only Published articles, and articles scheduled for Framer whose time has arrived, sync. Check the article's status and scheduled time, then sync again in Framer.

## Related

* [Articles](../using-chatfeatured/articles.md): the article lifecycle and the Content Calendar
* [Webflow](./webflow.md): publishes directly to a collection without a plugin


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/framer-integration](https://docs.chatfeatured.com/integrations/framer-integration).
