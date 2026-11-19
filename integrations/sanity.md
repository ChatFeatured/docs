# Sanity integration

> Publish ChatFeatured articles into your Sanity dataset as drafts, published documents or scheduled posts

The Sanity integration writes ChatFeatured articles into a Sanity dataset as documents of the type you choose, usually `post`. You connect with a project ID, dataset and API token, confirm which fields an article fills in, and then publish from the article editor. Set it up under **Integrations → Sanity**.

Your site renders what's in Sanity, so a published document shows on your site only when your site picks it up. Check that your site rebuilds or revalidates when a document is published in Sanity.

## Setup

### Step 1: Find your project ID and dataset

Go to [sanity.io/manage](https://www.sanity.io/manage) and open your project. The **project ID** is shown under the project name. Under **Datasets**, note the one your site reads from, usually `production`.

### Step 2: Create an API token

1. In the same project, go to **API → Tokens** and click **Add API token**.
2. Name it "ChatFeatured" and, under **Permissions**, choose **Editor**. Viewer tokens can't create documents.
3. Click **Save** and copy the token. Sanity shows it only once.

Only project administrators can create tokens.

### Step 3: Connect in ChatFeatured

1. Go to **Integrations → Sanity**, enter your **Project ID** and **Dataset**, paste the **API token**, and click **Check connection**.
2. Pick the **document type** articles should be created as.
3. Check the **field mapping**. ChatFeatured suggests one from your newest document of that type. Title and Body are required; clear any other row to skip that field.
4. Pick the **body format**: Portable Text if your body field is block content (the Sanity default), or HTML or Markdown if it's a string field.
5. For Portable Text, tick **what your body field allows** (see [below](#matching-your-body-field)).
6. If your schema has an author reference, pick a **default author**.
7. Add your **Site URL (optional)** and **Post URL pattern**, for example `https://www.example.com` and `/blog/{slug}`, so ChatFeatured can track each post's live page.
8. Optionally add your **Studio URL (optional)** so published articles link straight to the document.
9. Click **Connect dataset**.

| ChatFeatured | Sanity field | Required |
| - | - | - |
| Title | Your title field | Yes |
| Content | Your body field | Yes |
| Slug | Your slug field | No, but needed to track the live URL |
| Excerpt | Your excerpt field | No |
| Meta description | Your meta description field (nested paths like `seo.description` work) | No |
| Publish date | Your publish date field | No |
| Featured image | Your image field, uploaded to your Sanity media | No |
| Author | A reference to an author document | No |

Fields ChatFeatured doesn't map, such as categories your team set in Studio, are kept.

To change the fields after you connect, click **Edit this connection**. The **Fields on** card below the form lists each Sanity field and where its value comes from. Change a field's name in its box, or pick another source under **Value comes from**. Click **Add field** to write another field: point it at one of the article's own fields, choose **Set per article** to fill it in on each article under **Additional Metadata**, or choose **Same value every time** to send a fixed value. Changes save as you make them. If no field takes the title or body, the card warns you.

To connect another dataset, repeat Step 3. Each connection is a separate destination you pick at publish time. Use **Edit this connection** on its card to change it later.

### Matching your body field

Studio shows "Invalid Portable Text value" in place of the whole body if it contains anything its schema doesn't declare. So tick only what your body field allows: numbered lists, H5 and H6 headings, inline code/underline/strikethrough, images, code blocks (`@sanity/code-input`) and tables (`@sanity/table`). Anything unticked is sent in a simpler form, such as bulleted lists or H4 headings, or left out (images).

ChatFeatured pre-ticks what your newest document already uses. Sanity's blog template allows images and none of the others. If you're unsure, leave an item off: the article still publishes, just with that formatting simplified.

## Publish an article

In the article editor, click **Publish** or **Schedule** and choose your Sanity connection. The **Publish to Sanity** dialog has a status (**Save as draft**, **Publish now** or **Schedule**), a date, time and timezone for Schedule, and an **Author** picker if the connection maps an author field.

| Action | In Sanity | Article in ChatFeatured |
| - | - | - |
| Save as draft | A draft is saved. An already published version stays live. | Keeps its current status |
| Publish now | The document is published | Published |
| Schedule | A draft is saved, and ChatFeatured publishes it at the time you set | Scheduled, then Published |
| Reschedule | The publish moves to the new time | Stays Scheduled |
| Cancel schedule | Not published. The draft stays in Sanity. | Back to Review |
| Unpublish | The document goes back to a draft, content kept | Back to Review |
| Publish again | The same document is updated | Published |

To change a published article, choose **Unpublish** from its menu in the Articles list, edit it, then publish again. The same document is updated.

## Troubleshooting

> [accordion] The Sanity API token can't write to this dataset
>
> The token has Viewer permissions. Create one with **Editor** permissions and use that.

> [accordion] Studio shows "Invalid Portable Text value" on the body
>
> The connection sends something your body field doesn't declare, such as a numbered list or a table. Edit the connection, untick it under **What your body field allows**, and publish again.

> [accordion] The live URL is wrong or missing
>
> Edit the connection and check the site URL and post URL pattern. The pattern must contain `{slug}`. Publish the article again to record the corrected URL.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/sanity](https://docs.chatfeatured.com/integrations/sanity).
