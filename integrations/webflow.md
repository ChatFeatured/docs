# Webflow

> Publish ChatFeatured articles to a Webflow CMS collection as drafts, live items or on a schedule.

The Webflow integration creates items in one CMS collection on your Webflow site. You'll find it under **Integrations → Webflow**. Connect it with a Webflow site API token, pick the collection, then publish each article from its page in ChatFeatured.

## Prepare your collection

ChatFeatured reads your collection's fields when you connect, so set the collection up first.

**Required.** Save & Connect stays disabled until these three are mapped:

| ChatFeatured value | Webflow field type | Default pick |
| - | - | - |
| Title | Plain text | The built-in **Name** field |
| Slug | Slug | The built-in **Slug** field |
| Body | Rich text | The first Rich text field |

**Optional, matched by field slug.** ChatFeatured fills these if it finds a field of the right type whose slug (shown in the field's settings in Webflow) matches:

| ChatFeatured value | Webflow field type | Field slug |
| - | - | - |
| Excerpt | Plain text | `excerpt` or `summary` |
| Meta description | Plain text | `meta-description` or `seo-description` |
| Featured image | Image | Any slug containing `feature`, `hero`, `thumbnail` or `cover`, or `main-image` / `post-image` |
| Author | Reference or Plain text | Any slug containing `author` |
| Publish date | Date/Time | The first Date/Time field |

**Everything else is set per article.** Once you're connected, every field in the collection is listed under **Fields** on the integration page. A field ChatFeatured didn't match shows **Set per article**: it appears on every article under **Additional Metadata**, where you fill in its value, and the default you give it on the Fields card is used when an article leaves it empty. Most Webflow field types are supported (text, rich text, image, date, link, color, switch, number, option, reference and multi-reference). For Reference and Multi-reference fields, such as Tags, the items must already exist in the referenced collection; ChatFeatured matches them by name.

Fields that are required in Webflow are required here too. While one is empty, the publish button is disabled and its tooltip lists the missing fields.

To change where a field gets its value, pick another option under **Value comes from**: one of the article's own fields, such as **Excerpt**, or **Set per article**. If no field takes the title, slug or body, the card warns you, for example "Webflow needs a field for the title".

If you add or remove fields in Webflow later, click **Sync fields from Webflow** on the Fields card. Fields are named in Webflow, so you add, rename and remove them there.

## Connect Webflow

**1. Create a site API token in Webflow**

In Webflow, open the site's settings, go to **Apps & integrations**, and scroll to **API access**. Click **Generate API token** and give it these scopes:

* Sites: read (`sites:read`)
* CMS: read and write (`cms:read`, `cms:write`)

Only site administrators can create tokens. Copy it; Webflow shows it only once.

**2. Test the token**

In ChatFeatured, open **Integrations → Webflow**, paste the token into **Webflow API Token**, and click **Test Connection**.

**3. Pick the site and collection**

Choose the site under **Select Site**, then the collection under **Select CMS Collection**.

**4. Map the required fields**

Under **Map Fields**, check **Title Field**, **Slug Field** and **Body Field**, then click **Save & Connect**.

To switch to a different collection or site, disconnect and connect again. Disconnecting deletes the connection's fields and the values you entered for them on articles. Items already in Webflow stay.

## Publish an article

Open the article and click the publish button (**Publish to Webflow** if you have more than one destination). In the dialog, pick a **Publish Status**:

* **Save as Draft** creates the item in Webflow as a draft. Tick **Mark as published in ChatFeatured** if you also want the article marked Published here.
* **Publish Now** publishes the item to your live site straight away.
* **Schedule** publishes it at the date, time and timezone you pick. You get an email when it goes live, or with the error if it fails.

The **Author** box appears when your collection has an author field. The featured image is sent by URL, so it must be publicly reachable.

| Action | In Webflow | Article in ChatFeatured |
| - | - | - |
| Save as Draft | Draft created, or the existing one updated | Keeps its current status unless you ticked **Mark as published** |
| Publish Now | Created or updated, then live | Published |
| Schedule | Created and published at the scheduled time | Scheduled, then Published |
| Reschedule | The one scheduled publish moves to the new time | Stays Scheduled |
| Cancel Schedule | The scheduled publish is cancelled | Back to Review |
| Unpublish | The item goes back to a draft, off your live site | Back to Review |
| Publish again | The same item is updated | Published |

Deleting an article in ChatFeatured doesn't touch the Webflow item.

To change a published article, choose **Unpublish** from its menu in the Articles list, edit it, then publish again. The same Webflow item is updated.

ChatFeatured doesn't send an SEO title. Bind your collection template's SEO title and meta description to Name and your meta description field in Webflow's page settings.

## Troubleshooting

The latest publishing error also shows on the Webflow integration page as "Last error".

> [accordion] … is N characters; Webflow allows at most N
>
> The text is longer than the field's limit in Webflow. Shorten it in ChatFeatured, or raise the limit on the field in Webflow.

> [accordion] Validation Error: …
>
> Webflow rejected the item, and the message names the field. Often it's a required field ChatFeatured doesn't fill, such as a required excerpt on an article with no excerpt. Fix the field, then publish again.

> [accordion] The connection test fails
>
> Check that you copied the whole token, that it comes from the site you want to publish to, and that it has `sites:read`, `cms:read` and `cms:write`.

## Related

* [Articles](../using-chatfeatured/articles.md): the article lifecycle and the Content Calendar
* [Framer](./framer-integration.md): a plugin-based alternative


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/webflow](https://docs.chatfeatured.com/integrations/webflow).
