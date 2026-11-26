# ChatFeatured Blog CMS

> Host a blog on your own subdomain, served by ChatFeatured, and publish articles to it without a separate CMS.

The Blog CMS is a blog that ChatFeatured hosts for you on a subdomain such as `blog.example.com`. Your articles are stored in ChatFeatured and the blog renders them from there, so there's nothing to connect or sync. Use it if you don't have a CMS, or don't want to wire one up.

You'll find it under **Content Hub → Configure → Blog CMS**.

## Set up the blog

**1. Create the blog**

Open **Blog CMS**. Enter a **Blog Title** and a **Description** (shown in the blog header and used for SEO), then click **Create Blog**.

**2. Configure it**

The settings are split into tabs. Click **Save Changes** in the page header after editing any of them.

* **General**: blog title, description, logo, favicon and footer text.
* **Theme & Layout**: visual style, hub layout, article layout, colors and font.
* **Navigation**: a button linking to your main website, header links, and social profiles shown in the footer.
* **Authors**: the author profiles you can assign to articles, and the meta description and introduction of your blog's `/authors` page.
* **Lead Capture**: an optional form that collects leads from blog visitors, plus the list of submissions.
* **Domain**: connect your subdomain (next step).
* **Verification**: upload ownership files for Bing Webmaster Tools, Google Search Console and similar services (see [Verification files](#verification-files)).
* **Preview**: see how the blog looks before it goes live.

**3. Connect a custom domain**

Open the **Domain** tab and work through its four steps: **Website**, **Feed URL**, **DNS Setup**, **Verify**. Details below.

**4. Go live**

Turn on the **Activate** switch next to the tabs (it changes to **Blog Live**), then click **Save Changes**. A **View Live** button appears in the header. The switch only turns on once the domain is verified.

## Connect a custom domain

The blog needs a subdomain of a domain you own. A root domain like `example.com` doesn't work.

1. **Website**: enter your website domain, for example `example.com`, and click **Continue**.
2. **Feed URL**: the wizard suggests `blog.example.com`. Change it to any subdomain you like and click **Continue**.
3. **DNS Setup**: at your domain registrar or DNS provider, add the record the wizard shows:

   | Type | Name | Value |
   | - | - | - |
   | CNAME | the first label of your subdomain, for example `blog` | `customers.chatfeatured.com` |

   The **Quick guides** in this step walk through Cloudflare, Namecheap and GoDaddy.
4. **Verify**: click **Verify DNS**. When the record is found and the SSL certificate is issued, you'll see "Domain verified successfully!".

> [!WARNING]
>
> On Cloudflare, set the record's **Proxy status** to **DNS only** (grey cloud) until verification succeeds. You can turn the proxy back on afterwards.

DNS changes can take up to 48 hours to reach everyone. If verification fails, check the record and click **Try Again**.

Once the domain is verified, the blog is added to **Website → Index Submissions**, where we submit it to AI search engines directly.

## Publishing articles to the blog

Once the blog is live, it appears as a publish destination in the article editor next to any CMS integrations you've connected.

1. Open an article and click **Publish**.
2. Pick **Publish to ChatFeatured CMS**.
3. In the **Publish to CMS** dialog, optionally pick authors and add **Live URLs** (other places the article lives, such as a LinkedIn post; they count toward citation tracking too).
4. Click **Publish**.

The article goes live at `https://<your-domain>/<article-slug>` and shows up on the blog's home page, newest first. ChatFeatured attributes AI citations of that page to the article.

### What an article puts on its page

| ChatFeatured field | On the blog | Required | Notes |
| - | - | - | - |
| Title | Page heading, browser and social title | Yes | |
| Slug | The page URL, `/<slug>` | Yes | |
| Content | Article body | Yes | |
| Excerpt | Under the title and on article cards | Optional | |
| Meta description | Meta and social description | Optional | Falls back to the excerpt. |
| Featured image | Hero and social image | Optional | |
| Authors | Byline, linked to each author's page | Optional | With no authors, the project is credited. |

## What happens when you publish, update, unpublish, schedule

| Action | What happens on the blog |
| - | - |
| **Publish** | The page goes live at once and is added to the home page, `sitemap.xml` and `rss.xml`. |
| **Schedule** | Choose **Schedule to ChatFeatured CMS**. The article goes live at the scheduled time. |
| **Unpublish** | From the article's menu in the Articles list, choose **Unpublish**. The article returns to review and its page disappears from the blog. |
| **Update** | Change the article's status from its badge back to **Review**, edit it, and publish it again. The page stays up with the published version until you do. |

## Verification files

Search engines verify site ownership by fetching a file from the site root. On the **Verification** tab, drop in the file they gave you and the blog serves it at `https://<your-domain>/<file-name>`. The blog also serves `/sitemap.xml`, which you can submit in Google Search Console.

## Troubleshooting

> [accordion] Connect a custom domain before publishing your blog.
>
> The Activate switch only turns on once the domain is verified. Finish the Domain tab's steps, then turn it on and click **Save Changes**.

> [accordion] Waiting for DNS. Add a CNAME record pointing to customers.chatfeatured.com
>
> The CNAME record isn't visible yet. Check the name and value against the DNS Setup step, then wait and click **Try Again**. On Cloudflare, make sure the record is set to **DNS only**.

> [accordion] Publish to ChatFeatured CMS isn't in the Publish menu
>
> The option only appears once the blog is live. Check that **Blog Live** shows next to the tabs and that you saved the change.

## Related

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published, and the Content Calendar.

> [card] [All integrations](./overview.md)
>
> Connect an external CMS instead.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/blog-cms](https://docs.chatfeatured.com/integrations/blog-cms).
