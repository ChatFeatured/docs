# Competitors

> Choose which brands you compare yourself against, and which names and websites count as each one

The Competitors page sets which brands ChatFeatured compares your project against. Open it from **Brand > Competitors** in the sidebar. It needs an active or trialing plan. Viewers see it read-only.

A competitor is a group: one or more brand names plus the websites that belong to it. When an answer names any of those names, the mention counts for the competitor. When an answer cites a page on one of its websites, that page counts as the competitor's. Your own brand works the same way.

Spellings that differ only in case, accents, spacing or most punctuation are already the same brand, so "HubSpot" and "Hub Spot" need no setup. An abbreviation or product name ("AWS" and "Amazon Web Services") is a different name, and you decide whether it counts by adding it to the competitor.

## The table

Visibility, Rank and **vs you** cover the last 7 days, the same window as your dashboard. Mentions cover the last 90 days. Both count every AI engine, and each column's header names its window. Your brand is always the first row, marked **You**, so each competitor reads against it, and it stays in view as you scroll.

Two tabs next to the page title choose what the table lists:

* **Tracked**: your competitors, with their **Rank**, Visibility, how many points they lead or trail you by (**vs you**) and their mentions. Your row's rank shows where you'd place among them. A competitor answers seldom name is marked **Rarely named**, a sign it may not be worth tracking.
* **Suggested**: up to 50 brands your answers named most often that you don't track yet, with their mentions next to yours.

Above the table:

* **Search brands** matches a brand's name, any of its names, or any of its websites.
* **Sort** orders the rows. Your row stays first whatever the order.
* **Needs review** appears in **Tracked** when names might belong to a competitor. Click it to list only those competitors, most to review first. Click it again to see them all.

Click a row to open that brand in a panel on the right.

## See where answers name a brand

Every brand's panel, suggested ones included, shows how answers talk about it over the last 90 days. **By model** and **By topic** give the share of each AI engine's answers, and of each topic's, that named the brand.

For your brand and your competitors, **View in Data Analytics** at the top of the panel opens [Data Analytics](./analytics.md) filtered to that brand, to read every answer.

## Add a competitor

**1. Open the search**

Click **Add competitor** and type a name or website.

**2. Pick a result**

Click a result and ChatFeatured starts tracking it right away, with that website attached. It opens in the panel so you can add its other names and websites.

**3. Or add it by hand**

If the brand isn't listed, type its website and choose **Add example.com by hand**. Enter the **Brand name** the answers use and click **Add competitor**.

You can also click **Track** on a row in **Suggested**. There's no limit on how many competitors a project tracks.

## Edit a competitor

Click a competitor's row to open it in the panel.

![An open competitor, listing the names that count as that brand and the websites that belong to it](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/competitors/competitor-detail.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=312453af2f63f55d103d30a1e35e0b70)

* **Needs review:** names that look like the same brand show first, in their own section. The first name is open, with recent answers that use it, one per prompt. Click an answer to read the passage with that name highlighted, and where it came among the brands that answer named, such as **Named 2nd of 6 brands**. Click **Yes** to count the name as the competitor, or the X to stop suggesting it, and the next name opens. Click a name to read its answers instead.
* **By model** and **By topic** come next, as described above.
* **Names that count as \<competitor>:** click **Add** and start typing. Names that already appear in your answers show as you type; press Return to add the highlighted one, and the row stays open for the next. Click the X next to a name to stop counting it.
* **Websites:** pages on these websites count as the competitor's in source and citation charts. Click **Add**, type a domain and press Return; the row stays open for the next one. Click the X to remove one.

Press Escape to close an open row.

To change the name shown on charts, open the panel's **...** menu, choose **Rename**, edit **Name** and click **Save**.

Changes apply to past data too, across every date range, within about a minute. Adding a name includes its past mentions; removing one moves them back to a separate brand. Your stored answers are never deleted.

## Your brand

Click your row to open it in the panel. It lists every name that counts toward your project's Visibility and, under **Websites**, the websites whose cited pages count as yours. These are separate from the sites Site Audit crawls, which are set in **Website > Domains**. Edit it the same way as a competitor. Your project's name can't be removed, and the project website is changed in the project's settings.

## Suggested brands

In **Suggested**, click a row to see where answers name a brand before you decide. Click **Track** to start tracking it, or the X to stop suggesting it. To bring one back, click **Show dismissed** under the search box, then the arrow on its row.

## Stop tracking a competitor

Open the competitor, then choose **Stop tracking** from the panel's **...** menu. You can track it again later, but you'll have to add its names and websites again.

## Work on several at once

Tick the boxes on the rows you want, and the controls above the table become actions for them: **Stop tracking** in **Tracked**, **Track** or **Dismiss** in **Suggested**.

## Where competitor data shows up

In [Data Analytics](./analytics.md), the Brand filter switches between all brands, your competitors, or specific brands. The Visibility Trend chart, the Industry Ranking card and the Brand mentions tab all use your competitor groups.

## Troubleshooting

* **"Brand already tracked as a competitor"**: that name already belongs to a competitor. Open it in the list instead.
* **"That brand is one of your own brand's names"**: the name counts as your own brand. Open your row and remove it there first if it really is a competitor.
* **"That name already counts as \<brand>. Remove it there first."**: a name can only count for one group. Remove it from the other group, then add it again.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/competitors](https://docs.chatfeatured.com/using-chatfeatured/competitors).
