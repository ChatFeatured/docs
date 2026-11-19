# Set up index submissions

> Add your website, verify ownership with a key file or a redirect, and track each submission run

Setting up a site takes two steps: add it, then prove you own it. Once it's verified, ChatFeatured submits its pages straight away and then every Sunday. See [Index submissions](./index-submissions.md) for what gets submitted and when.

## Step 1: Add your website

**1. Open Index Submissions**

In the sidebar, go to **Website → Index Submissions**.

**2. Click Add Website**

Enter a **Website Name** (any label, such as "Marketing site") and the **Website URL** (`example.com`).

**3. Click Add Website again**

The site appears with a **Pending verification** badge, and the setup dialog opens. If you close it, click **Start verification** on the site card to come back.

Add subdomains such as `blog.example.com` as their own site. You can have 2 sites per project.

## Step 2: Verify ownership

The setup dialog asks **What platform is your site built on?** and gives you the steps for that platform. There are two ways to verify, and both put a key file at your site's root.

| Method | Use it when | Platforms in the picker |
| - | - | - |
| Set up a redirect | Your site builder can't serve a raw `.txt` file at the root | Framer, Webflow, Squarespace, Wix, Ghost, Shopify, Other (redirect) |
| Upload file | You control your site's files | Custom / Developer, WordPress |

> [tab] Set up a redirect
>
> You add a 301 (permanent) redirect from a path on your site to a key file ChatFeatured hosts. The dialog shows a **Redirect rule** with a **From** path (`/<key>.txt`) and a full **To** URL, each with a copy button.
>
> Where to add the redirect:
>
> * **Framer:** Site Settings → Redirects → **Add redirect**, then publish your site.
> * **Webflow:** Site Settings → Publishing → 301 redirects, then publish your site.
> * **Squarespace:** Settings → Developer Tools → URL Mappings. Add a line in the format `/source -> destination 301`.
> * **Wix:** Marketing & SEO → SEO Tools → URL Redirect Manager.
> * **Ghost:** Settings → Advanced → Redirects. Download the redirects file, add a 301 entry, and upload it again.
> * **Shopify:** Content → Menus → **View URL Redirects** → **Create URL redirect**. Paste the From path into **Redirect from** (keep the leading `/` and the `.txt`) and the To URL into **Redirect to**, then **Save redirect**.
> * **Other (redirect):** use the redirects or rules section of your host, CDN or DNS provider.
>
> When the redirect is live, click **Submit for verification**.

> [tab] Upload file
>
> The dialog shows the file name (`<key>.txt`) with a **Download** button, and the URL where the file should be reachable (`https://example.com/<key>.txt`).
>
> 1. Download the file.
> 2. Put it in your web root so it loads at the URL shown. For Next.js that's `/public/`; for a static site it sits next to `index.html`; most hosts use `/public_html/` or `/htdocs/`. On WordPress, put it next to `wp-config.php`, not in `/wp-content/`.
> 3. Deploy, then open the URL in a browser to check that it shows the key as plain text.
> 4. Click **Verify website**.

On success you see "Website verified!", the badge changes to **Active**, and the first submission starts.

> [!NOTE]
>
> Leave the file or redirect in place. Every Sunday's run checks it again before submitting, and fails if it's gone.

If you connect the [WordPress integration](../integrations/wordpress.md), ChatFeatured adds the site here and verifies it through the plugin, so you can skip these steps.

## Track submissions

Each verified site has a card showing the verification method, when the last submission ran, how many URLs it sent, the countdown to the next one, and the key file URL.

Click **Submission history** to see the last 5 runs with their status and URL counts. Runs triggered by publishing an article are marked **on publish**. **View submitted URLs** lists every URL in a run, with any error in red under it.

The badge next to the site name shows **Pending verification**, **Active**, **Submitting…**, **Error** (open Submission history for the reason) or **Inactive** (submissions are turned off).

The **⋯** menu on an active site has **Resubmit now** (submit the whole site again now), **Edit verification** (reopen the setup dialog, for example to switch methods) and **Delete**.

## Troubleshooting

> [accordion] Key file not accessible (HTTP 404)
>
> The file isn't at your site root, or the redirect isn't live. Open the key location URL in a browser. With a redirect, it should land on ChatFeatured and show the key as plain text. Check that the From path and To URL match the dialog exactly and that the redirect is saved or published. On Shopify, make sure the From path isn't an existing page.

> [accordion] Your site's firewall blocked our check
>
> Bot protection, such as a Cloudflare challenge, is stopping automated requests from reading the file, even though it opens in your browser. Allow requests to the key file's path through without a challenge, then verify again.

> [accordion] We're still verifying your site with search engines
>
> This is normal right after verification. ChatFeatured retries on its own and submits your URLs once it clears.

Still stuck? The setup dialog has **Book setup call** and **Contact support** ([support@chatfeatured.com](mailto:support@chatfeatured.com)).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/index-submissions/setup](https://docs.chatfeatured.com/index-submissions/setup).
