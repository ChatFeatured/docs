# Agency workspaces

> Manage client projects, send white-label AEO and performance reports, and collect leads with an embeddable audit form.

An agency workspace is a ChatFeatured workspace for agencies that run AEO for several clients. Each client is a project. It adds an **Agency** section to the sidebar with four pages:

* **Client projects**: every client on one screen.
* **AEO reports**: white-label visibility reports for prospects and clients.
* **Performance reports**: white-label reports on a client's results over a date range.
* **Leads**: an audit form for your own website that turns visitors into leads.

## Getting an agency workspace

ChatFeatured sets up agency workspaces; you can't switch one on yourself. Choose **I'm an Agency** when you sign up, or use **Become an AEO partner** on the pricing page. Agency plans are priced on the allowances you need (tracked prompts, AI articles and page audits) rather than per client.

## Who can use it

| | Owner | Admin | Member | Viewer |
| - | - | - | - | - |
| See the Agency section | Yes | Yes | If granted | No |
| Create, share and delete reports, set up the audit form | Yes | Yes | If granted | No |
| Agency branding and report domain | Yes | Yes | No | No |
| Buy capacity | Yes | No | No | No |

Owners can give a Member access to the agency dashboard with [custom permissions](./team-management.md#custom-permissions).

## Client projects

**Client projects** is the agency dashboard's home. Tiles at the top show your shared allowances: Client projects, Tracked prompts, Articles this month and Page audits this month. All client projects draw on the same allowance.

Each client project has a tile with its Visibility, prompt usage, Agent Analytics and Site Audit scores. Star projects to pin them under **Favourites**, and use the switch on a tile to [deactivate](./projects.md#deactivate-a-project) one. **Add Project** opens the usual [add a project](./projects.md#add-a-project) dialog.

### Per-project prompt limits

To stop one client using more than its share of tracked prompts, click **Set limit** on its tile, enter a number and click **Save**. Prompts it doesn't use stay available to your other projects. **Remove limit** takes the cap off.

## AEO reports

An AEO report shows how a brand appears in AI answers: its visibility, how it ranks in its industry, the sources AI engines cite, and opportunities to improve. Use one to pitch a prospect. The brand doesn't need to be one of your projects.

1. Go to **Agency** > **AEO reports** and click **New Report**.
2. Enter the **Brand Name** and **Website**.
3. Under **Search Location**, pick the **Country**. City and Region / State are optional.
4. Click **Generate Report**.

The report opens straight away and fills in as it runs.

### Sharing a report

Open the report, click **Share Report**, and turn on **Enable Public Sharing**. Copy the **Shareable Link** and send it. Anyone with the link can view the report until you turn sharing off.

Shared reports carry your agency's logo, name, contact details and booking link instead of ChatFeatured's. Set these up under [Agency branding](#agency-branding) before you create reports. The reports list shows each report's views and visitors.

## Performance reports

A performance report covers one client project over a date range, compared with the period just before it: Visibility by AI engine, citation highlights, top-improving prompts, content impact and growth opportunities.

1. Go to **Agency** > **Performance reports** and click **New Report**.
2. Choose the **Project**.
3. Choose a **Date range**: Last week, Last 2 weeks, Last month, or Custom.
4. Click **Generate**.

On a finished report you can edit the **AI Summary**, use **Customize** to choose which sections the client sees, and **Copy share link** or **Save as PDF**. Anyone with the share link can view the report. To stop a link working, delete the report.

## Leads

**Leads** gives you a free AI visibility audit form for your own website. A visitor enters their business name, website and email. ChatFeatured saves them as a lead, runs an AEO report on their site under your account, and emails your team. ChatFeatured doesn't email the visitor, so you share the report yourself.

### Set up the audit form

1. Go to **Agency** > **Leads** and click **Set up audit form**.
2. Turn on **Accept submissions**.
3. Set **Report country** to the market your prospects are in. Each lead's report checks the AI answers people in that country get. It's the United States until you change it. If your prospects are spread across markets, turn on **Ask prospects where they are**. The form then asks for their country, state or region, and city, and runs each report there. The country starts on your report country. The form gets taller, so copy the embed code again after you save.
4. Under **Notify**, choose the workspace members to email about each new lead. At least one is required.
5. Optionally change the **Heading**, **Description**, **Button label** and **Button color**. Your logo and name come from [Agency branding](#agency-branding).
6. Save, then click **Copy code** and paste the embed code into your website. **Preview** shows the form.

Each lead shows the business, where its report ran, the email, when it was requested and the report's status. **Open report** takes you to the AEO report. The form runs up to 100 reports a month. Past that, leads are still saved and your team is still emailed, but no report runs for them.

## Agency branding

**Settings** > **Agency branding** holds what your reports and audit form show in place of ChatFeatured. Under **Agency Information**, set the **Agency Logo**, **Agency Name**, **Contact Name**, **Contact Email**, **Phone** and **Booking Calendar** (a link to your booking page), then click **Save Changes**.

The logo and name appear on reports and the audit form. The contact details and booking link power the "get in touch" buttons on shared AEO reports.

### Report domain

To share reports from your own domain, like `reports.youragency.com`:

1. Under **Report Domain**, enter a subdomain and click **Connect**. A root domain like `youragency.com` won't work.
2. At your DNS provider, add a `CNAME` record with the name you entered and the value `customers.chatfeatured.com`. If your provider adds your domain to the name for you, enter only the part before it. On Cloudflare, set the proxy status to DNS only.
3. Wait for the status to show **Active**, or click **Check status**. DNS changes can take up to an hour, and the certificate a few minutes more.

If the status shows **Needs attention**, check the record matches exactly, then check again. The audit form is served from your report domain too.

## Adding capacity

An Owner can raise the workspace's allowances from **Settings** > **Billing** > **Add capacity**. Capacity comes in packages of 50 tracked prompts, 5 AI articles or 100 monthly page audits, each with its monthly price shown. Click **Add**, choose how many packages, and click **Add capacity**. The new limit applies straight away, and you're charged the prorated difference today.

Adding capacity isn't available during a trial, while a payment is failing, or on plans with a negotiated rate. To lower a limit, contact us.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/account/agency](https://docs.chatfeatured.com/account/agency).
