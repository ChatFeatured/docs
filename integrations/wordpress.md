# WordPress

> Install the ChatFeatured plugin to publish articles to WordPress, track AI crawler traffic and turn on index submissions.

The ChatFeatured WordPress plugin connects a WordPress site to your project. Once it's connected you can publish articles as WordPress posts, see AI crawler traffic in [Agent Analytics](../using-chatfeatured/agent-analytics.md), and turn on [Index Submissions](../index-submissions/index-submissions.md) so we submit your site to AI search engines directly. You manage it under **Integrations → WordPress**.

> [!WARNING]
>
> Install the plugin on your live site, not a staging copy. AI crawlers visit your live domain, so Agent Analytics only sees traffic there.

## Requirements

* WordPress 6.0 or later and PHP 7.4 or later
* An administrator account on the site
* Plugin 2.5.0 (the current version) for the editable slug, the SEO plugin fields, a changed slug or author reaching a post that's already published, and an article's live link updating the moment WordPress publishes it, including posts you publish yourself in WordPress. When a site runs an older one, its row in ChatFeatured says so.

## Connect a site

**1. Download the plugin**

In ChatFeatured, open **Integrations → WordPress**, expand **Download the Plugin** under Setup Instructions, and click **Download Plugin**.

**2. Install and activate it**

In WordPress admin, go to **Plugins → Add New → Upload Plugin**, choose the zip, click **Install Now**, then **Activate**. We recommend turning on auto-updates for it.

**3. Copy the site URL and token**

Open **ChatFeatured** in the WordPress admin menu. The **ChatFeatured Setup** screen shows the API token (it starts with `cf_`) and your site URL, each with a **Copy** button.

**4. Click Complete Setup**

Click **Complete Setup** on that screen. It turns on analytics, publishing and index submissions on the WordPress side. Without it, Agent Analytics shows "Disabled in WordPress".

**5. Connect in ChatFeatured**

Back on **Integrations → WordPress**, fill in **WordPress Site URL** and **API Token**, optionally a **Display Name**, and click **Connect WordPress**.

The site appears under **Connected Sites** with publishing and Agent Analytics switched on. Expand its row to switch either off or update the token. You can find the token again later under **ChatFeatured → Settings → API Key** in WordPress.

Click **Add Site** to connect more sites; each has its own token. On a multisite network, copy the URL and token from the same subsite.

## Publish an article

Open the article and click the publish button (**Publish to** and the site name if you have several). The **Publish to WordPress** dialog has:

* **Slug**: click it to edit.
* **Publish Status**: **Save as Draft**, **Publish Immediately** or **Schedule for Later**.
* **Categories**: picked from the site's existing categories.
* **Tags**: comma-separated. New tags are created.
* **Author**: pick one if your theme shows bylines. **Default author** leaves it unset.
* **Featured Image**: upload one to replace the article's own.

The plugin creates posts only, not pages or custom post types. On sites running Yoast SEO, Rank Math or All in One SEO, the meta description, SEO title and focus keyphrase go into the SEO plugin's fields. The SEO title needs plugin 2.3.2 or later, and keeps the separator and site name from your SEO plugin's title template. The site's row in ChatFeatured also has a **Use ChatFeatured article schema** switch: on, the article's JSON-LD schema replaces the SEO plugin's Article schema.

| Action | In WordPress | Article in ChatFeatured |
| - | - | - |
| Save as Draft | Draft created, or the existing one updated | Keeps its current status |
| Publish Immediately | Created or updated, then live | Published |
| Schedule for Later | Created as a scheduled post; WordPress publishes it at that time | Scheduled, then Published |
| Reschedule | The scheduled post moves to the new time | Stays Scheduled |
| Cancel schedule | The schedule is cancelled and the post stays a draft | Back to Review |
| Unpublish | The post goes back to a draft | Back to Review |
| Publish again | The same post is updated | Published |

Deleting the article in ChatFeatured doesn't delete the post.

Once published, the publish button becomes **Manage In WordPress**. To change the post, choose **Unpublish** from the article's menu in the Articles list, edit it, then publish again. The same post is updated.

## Agent Analytics and Index Submissions

**Agent Analytics** needs the site's **Agent Analytics** switch on in ChatFeatured and **Enable Analytics** on in the plugin (Complete Setup turns it on).

**Index Submissions** has its own card on the WordPress integration page. New articles are submitted when they go live, and posts you write or edit in WordPress are picked up from your sitemap each week. With several sites connected, it covers one, and the card names which.

## Sites behind Cloudflare

Cloudflare's bot protection can treat ChatFeatured's requests to your site as bots and answer them with its "Just a moment..." challenge, so they never reach WordPress. Connecting, publishing and Agent Analytics all stop working, and ChatFeatured shows "Cloudflare's bot protection is blocking ChatFeatured". One custom rule fixes it. Whoever manages your Cloudflare account can add it:

**1. Open your domain in Cloudflare**

Log in to Cloudflare and open the domain your WordPress site runs on.

**2. Create a custom rule**

Go to **Security → Security rules** (on older dashboards, **Security → WAF → Custom rules**) and click **Create rule → Custom rule**. Name it `Allow ChatFeatured plugin`.

**3. Match only the plugin's requests**

Click **Edit expression** and paste:

```txt
(http.request.uri.query contains "rest_route=/chatfeatured/v1/")
```

**4. Skip the bot checks**

Set **Action** to **Skip**, then tick:

* **All remaining custom rules**
* **All rate limiting rules**
* **All managed rules**
* **All Super Bot Fight Mode rules**
* Under **More components to skip**: **Browser Integrity Check**, **Security Level**, **User Agent Blocking** and **Zone Lockdown**

Turn on **Log matching requests** so you can confirm the rule is working later.

**5. Save it at the top**

Click **Deploy**, then drag the rule to the top of the list so it runs before your other custom rules.

To check it, click **Send queued logs now** on the WordPress integration page in ChatFeatured. The "Last error" on the site's row clears the next time you publish to that site.

> [!WARNING]
>
> On Cloudflare's Free plan, **Bot Fight Mode** (under **Security → Bots**) can't be skipped by any rule. If it's on, turn it off. Super Bot Fight Mode on paid plans is covered by the rule above.

The rule only exempts the ChatFeatured plugin's endpoints. The rest of your site keeps its protection, and the plugin still checks your API token on every request.

## Troubleshooting

The latest error also shows as "Last error" on the site's row.

> [accordion] Invalid API token
>
> The token was regenerated or copied wrong. Copy it again from **ChatFeatured → Settings → API Key** in WordPress and paste it into **Update API Token** in the site's row.

> [accordion] ChatFeatured plugin not found. Make sure the plugin is installed and activated.
>
> Check that the plugin is active and that the URL is the site (or subsite) it's installed on.

> [accordion] This server strips the Authorization header before WordPress sees it
>
> Your web server removes the header that carries the token, so every token fails until the server is fixed. A security plugin can also strip it, so rule that out first. On Apache, your host can add this above the `# BEGIN WordPress` block in `.htaccess`:
>
> ```apache
> <IfModule mod_rewrite.c>
> RewriteEngine On
> RewriteCond %{HTTP:Authorization} ^(.+)$
> RewriteRule ^ - [E=HTTP_AUTHORIZATION:%1]
> </IfModule>
> ```
>
> Some managed hosts strip the header themselves and need a support ticket.

> [accordion] Cloudflare's bot protection is blocking ChatFeatured before it reaches WordPress
>
> Cloudflare is answering ChatFeatured's requests with a bot challenge. Add the custom rule under [Sites behind Cloudflare](#sites-behind-cloudflare).

> [accordion] SiteGround's Anti-Bot AI is challenging this request
>
> You can't turn this off from your SiteGround account. Ask SiteGround support to whitelist the ChatFeatured outbound IPs for your hosting account, including write (POST) requests.

> [accordion] Your host's bot verification (LiteSpeed reCAPTCHA) is challenging ChatFeatured
>
> Hosts running LiteSpeed, CyberPanel or Imunify360 can answer requests with a "Bot Verification" page before WordPress sees them. Updating the plugin won't help. Ask your host to exempt `/?rest_route=/chatfeatured/v1/` from bot verification, or to allowlist the `ChatFeatured/1.0` user agent.

> [accordion] Something in front of WordPress answered with a web page
>
> A firewall, security plugin or your host's bot protection answered instead of the ChatFeatured plugin. Ask your host to let requests to `/?rest_route=/chatfeatured/v1/` through.

## Related

* [Agent Analytics](../using-chatfeatured/agent-analytics.md)
* [Index Submissions](../index-submissions/index-submissions.md)
* [Articles](../using-chatfeatured/articles.md): the article lifecycle and the Content Calendar


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/wordpress](https://docs.chatfeatured.com/integrations/wordpress).
