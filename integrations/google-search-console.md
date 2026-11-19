# Google Search Console

> Connect Google Search Console to see Google Search clicks and queries, submit sitemaps, and check whether a URL is indexed.

The Google Search Console integration links a Search Console property to your project. Open it from **Integrations**, in the **Google** section, by clicking the **Google Search Console** card. The page has three tabs: **Sitemaps**, **Search Performance** and **URL Inspection**. The same connection also feeds the Site Audit and the AI agent.

## Before you start

* You need a Google account with access to the site in [Search Console](https://search.google.com/search-console). Domain properties (`sc-domain:example.com`) and URL-prefix properties (`https://example.com/`) both work.
* Owners, Admins and Members can connect and change the integration. Viewers can read the data.

Connecting doesn't change the Google account you use to log in to ChatFeatured.

## Connect

**1. Sign in with Google**

Click **Connect Google Search Console**, choose the Google account that can see your property, and allow the requested permissions.

**2. Check the property**

ChatFeatured picks the property that matches your project's domain. If it can't, choose one from the **Brand Domain** dropdown, then click **Use this property**.

The property stays fixed for this project once it's set. To use a different one, open **Manage Connection**, click **Disconnect**, then connect again.

The three tabs appear once a property is selected. If the dropdown shows **No properties found**, the Google account you connected can't see any Search Console property. Get access in Search Console, then click **Refresh**.

Data is read from Google when you open a tab, so it's available as soon as a property is selected.

## Sitemaps

**Submitted Sitemaps** lists the sitemaps Google has for the property, with when they were submitted and last read, the number of URLs, and a status.

To submit one, enter its URL under **Submit New Sitemap** and click **Submit Sitemap**. **Add another** lets you send several at once.

## Search Performance

Shows clicks, impressions, CTR and average position from Google Search.

* Switch between **Pages** and **Queries**.
* Pick a period: **24 hours**, **7 days**, **28 days** or **3 months**. Search Console data lags by about two days.
* Click a row to see the queries that sent a page traffic, or the pages that ranked for a query.
* In the **Pages** view, the search icon on a row opens that URL in URL Inspection.

## URL Inspection

Enter a full URL and click **Inspect**. The result shows Google's verdict, coverage and indexing state, whether robots.txt allows crawling, the last crawl time, and the canonical Google chose next to the one your page declares. **View in Google Search Console** opens Google's full report.

Results are cached for 24 hours; click **Refresh** for a fresh inspection.

## Where else the data shows up

* **Site Audit.** A page's detail view shows its Search Console clicks, impressions and queries, and the Site Explorer adds an **Index** column (**Indexed** or **Not indexed**). See [Site Audit](../using-chatfeatured/site-audit.md).
* **AI agent.** The agent can read your Search Console data in chat.

## Reconnect or disconnect

Both buttons are under **Manage Connection**. **Reconnect** runs the Google sign-in again. **Disconnect** removes the connection.

## Troubleshooting

> [accordion] "Google authentication expired. Please reconnect your Google account."
>
> Google stopped accepting the saved sign-in, for example because access was revoked in your Google account. Click **Reconnect** under **Manage Connection**.

> [accordion] "Google authorization is missing the Search Console scope."
>
> You unticked the Search Console permission on Google's consent screen. Click **Reconnect** and allow all requested permissions.

> [accordion] "Permission denied. The Google account may lack access to this property or URL."
>
> The connected Google account can't read that property, or the URL you inspected is outside it. A URL-prefix property only covers URLs under its exact prefix. Check the property shown next to **Brand Domain**, or get access to it in Search Console.

## Related

* [Site Audit](../using-chatfeatured/site-audit.md)
* [Google Analytics](./google-analytics.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/google-search-console](https://docs.chatfeatured.com/integrations/google-search-console).
