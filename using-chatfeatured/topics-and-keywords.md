# Topics and keywords

> Group prompts by theme with topics, and track the search phrases behind them with keywords

Topics and keywords are two ways to organise your [prompts](./prompts.md). Both live on the **All prompts** page (**Prompts** in the sidebar), as the **Topics** and **Keywords** tabs, and belong to one project.

* A **topic** groups prompts that ask the same kind of question, such as Pricing or Comparison, so you can read Visibility by theme. Topics used to be called tags. A topic can be split into **subtopics**, such as one per product or plan.
* A **keyword** is a search phrase people type into Google, such as "small business crm". Linking keywords to a prompt tells you how much demand sits behind it.

Owners, Admins and Members can create and edit both. Viewers can see them and filter by topic.

## Topics

### The Topics page

![The Topics page, listing each topic with its prompt count, Visibility and Cited rate](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/prompts/topics.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=2a393ea706b9cdd9f27983480be67f5d)

The **Topics** tab on the **All prompts** page shows one row per topic with:

* **Topic:** the name, how many prompts it holds and how many subtopics it has. Expand a row to see its subtopics and prompts.
* **Visibility:** the share of the topic's answers that name your brand, out of answers that name any brand.
* **Cited:** the share of answers that cite a page on your website, out of answers that mention any brand.

A prompt in several topics counts in each, so the rows can add up to more than your project's totals. Prompts with no topic are grouped in a **No topic** row. Click a topic to open its numbers, its **Subtopics** and the list of **Prompts in this topic**.

If your prompts were created during onboarding, some are already filed under starter topics such as Discovery, Comparison and Pricing. Edit them like any other topic.

### Create a topic

1. Open the **Topics** tab on the **All prompts** page and click **Add topic**.
2. Enter a **Name** and pick a **Color**.
3. Click **Create topic**.

You can also choose **Create topic** in the prompt dialog's **Topic** list. Topic columns in a [CSV import](./prompts.md#import-csv) create any topics that don't exist yet.

### File prompts under a topic

* **From the topic:** open the row's **...** menu, choose **Edit prompts**, tick the prompts that belong and click **Save**.
* **From one prompt:** open the prompt and edit its **Topics** property.
* **For many prompts at once:** tick prompts on the list and click **Edit topics**.

### Rename, recolor, merge or delete

The **...** menu on a topic row has **Rename**, **Change color**, **Merge into** and **Delete**. **Merge into** moves every prompt to the topic you choose, then deletes this one. **Delete** removes the topic from its prompts; the prompts stay.

### Subtopics

A subtopic is a narrower slice of a topic. Expand a topic on the **Topics** tab to see its subtopics, each with how many prompts it holds, and a **No subtopic** row for prompts that aren't in one. A prompt can stay in its topic without a subtopic.

* **Add a subtopic:** expand the topic and click **Add subtopic**, or choose **Add subtopic** in the topic's **...** menu. Enter a **Name** and click **Add subtopic**.
* **Rename or delete a subtopic:** open the subtopic's **...** menu. Deleting a subtopic keeps its prompts in the topic, with no subtopic.
* **Move one prompt:** click the folder button on its row, pick a subtopic, **New subtopic** or **No subtopic**, and click **Move**.
* **Move several prompts:** tick them under the open topic, click **Move to subtopic** and pick where they go.

The prompts list and [Data Analytics](./analytics.md) both have a **Topic** filter to scope the numbers to those prompts.

## Keywords

### The Keywords page

![The Keywords page, listing keywords with monthly searches, prompts, articles and when they were last measured](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/prompts/keywords.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=0b959c1477878cd740ffc1ffefb0c370)

Open the **Keywords** tab on the **All prompts** page to list your project's keywords, busiest first, with:

* **Searches a month:** Google's average monthly searches for the phrase over the last 12 months. Anything under ten shows as "Under 10".
* **12 months:** the monthly trend.
* **Prompts** and **Articles:** how many use the keyword.
* **Last measured.**

Search volume updates once a month, after Google publishes the previous month's numbers. A new keyword shows "Measuring…" while its number loads. "No data" means Google has no number for that phrase.

### Add keywords

Click **Add keywords** for three options:

* **Add keywords:** type them one per line, or separated by commas.
* **Import CSV:** a file with a single `keyword` column, one keyword per row. The dialog has a **Download template** link.
* **Find keywords:** get ideas around a phrase, or click **Use my website** for ideas based on your site. Tick the ones you want and add them. Keyword research has a daily limit.

```csv
keyword
small business crm
crm software for startups
```

### Keywords on prompts

A prompt's busiest keyword sets its search demand, shown in the **Demand** column of the prompts list from Very low to Very high. To change a prompt's keywords, open it and edit its **Keywords** property. If a prompt has none, ChatFeatured researches keywords from its wording.

Deleting a keyword from the Keywords page takes it off every prompt and article that uses it.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/topics-and-keywords](https://docs.chatfeatured.com/using-chatfeatured/topics-and-keywords).
