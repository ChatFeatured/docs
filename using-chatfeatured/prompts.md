# Prompts

> Track the questions your customers ask AI engines, and see how often the answers name you

A prompt is a question you want AI engines to answer on a schedule, such as "What is the best CRM for a small business?". ChatFeatured asks it every day, on every engine in your plan, in each country you pick, and records which brands the answers name and which pages they cite. Everything in [Data Analytics](./analytics.md) is built from these answers.

Prompts live on the **All prompts** page, which you open from **Prompts** in the sidebar and which needs an active plan or trial. The page has four tabs: **Prompts**, **Suggestions**, **Topics** and **Keywords**. Topics and Keywords have their own page: [Topics and keywords](./topics-and-keywords.md).

## Engines and prompt slots

Every tracked prompt runs on every engine your plan includes. You don't pick engines per prompt.

| Plan | Engines | Prompt slots |
| - | - | - |
| Starter | ChatGPT, Perplexity, Google AI | 50 |
| Growth | ChatGPT, Perplexity, Google AI, Gemini, Bing Copilot Search | 250 |
| Enterprise | ChatGPT, Perplexity, Google AI, Gemini, Bing Copilot Search | 1,000 by default, set by your contract |

Claude, Grok and Muse are add-ons on Growth and Enterprise. See [Billing](../account/billing.md#model-add-ons).

A prompt uses one slot per country, so a prompt tracked in the US and Canada uses two. Paused prompts and suggestions use none. Slots are shared across every project in the workspace. The page header shows the count, for example "42 of 50 slots used". In a workspace with several projects, it shows the project's own slots and how many are left across the workspace, for example "28 used · 22 left". The **Usage** section in Billing shows how they split between projects.

## When prompts run

Tracked prompts run once a day, starting at 00:15 UTC. A prompt also runs straight away when you track it, resume it from its row, or add a country to it, and the answers appear as each engine replies.

## Add prompts

Click **Add prompts** at the top of All prompts and pick one of three options.

### Write your own

1. Choose **Add prompts > Write your own**.
2. Type the question in **Prompt**, the way a customer would ask an AI assistant.
3. Check the **Topic**. Every prompt you write needs one. As you type, ChatFeatured picks the closest of your topics; pick another, or use **Create topic** if none fits.
4. Optionally pick **Keywords**. Leave it empty and ChatFeatured researches keywords for you.
5. Pick one or more **Countries**. The dialog shows how many slots the prompt will use.
6. Click **Track prompt**.

### Import CSV

Choose **Add prompts > Import CSV** to add many prompts at once. **Download template** gives you a file in the right shape:

```csv
prompt,countries,keywords,topic 1,topic 2
What is the best CRM for a small business?,"US,CA","small business crm, crm software",CRM,Small business
How do I choose a project management tool?,GB,"project management software",Project management,
```

* **prompt** is required.
* **countries** takes two-letter country codes separated by commas. A row with none uses your project's default country.
* **keywords** is optional and comma separated.
* Every other column is read as a topic. Topics that don't exist yet are created.

The dialog lists the parsed rows so you can remove any before you click **Import N prompts**. If the file needs more slots than you have left, rows are tracked in file order until the slots run out and the rest are added as paused.

### Generate prompts

Choose **Add prompts > Generate prompts** to have ChatFeatured write prompts for you, then pick where to start:

* **From your topics**: topics you already track, or ones suggested for your project.
* **From a keyword**: type a keyword or idea and ChatFeatured suggests topics around it.
* **From competitors**: topics where your competitors show up in AI answers and you don't.

**1. Topics**

Tick up to 10 topics. Type a name that isn't listed to add it as a new topic.

**2. Configure**

Set how many prompts each topic gets, the countries they're asked from and the languages they're written in. A local business also sees **Places**: its city and the places it serves, which comparing and buying prompts name.

**3. Review**

Prompts appear under their topic as they're written. Click a prompt's box to move it between **Active** (tracked when you add it), **Proposed** (saved to [Suggestions](#suggestions)) and **Discarded**, and click a prompt to edit its wording. Then click **Add N to active prompts**.

Nothing is added until you click that button. Prompts beyond your free slots start as Proposed.

You can also click **Generate prompts** on a topic's page to start with that topic ticked.

If you connect [Google Search Console](../integrations/google-search-console.md), ChatFeatured also writes prompts from the searches that already bring people to your site, and marks them in Review.

## The prompts list

![The prompts list, with Visibility, Cited, Demand and Visibility Trend columns for each tracked prompt](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/prompts/prompts-list.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=a890ba92e8b96e55a702baf064931a17)

The **Prompts** tab shows one row per prompt:

* **Visibility:** the share of the prompt's answers that name your brand, out of answers that name any brand. The same Visibility as in Data Analytics.
* **Cited:** the share of answers that cite a page on your own website, out of answers that mention any brand. See [Citation rate](../getting-started/key-concepts.md#citation-rate).
* **Demand:** how much people search for the prompt's busiest keyword, from Very low to Very high.
* **Visibility Trend:** a small chart across the period.

Use **Search prompts**, **Status** (Tracked, Paused or All), **Period** and **Filter** (Topic, Demand, Country, Model) to narrow the list. The default period, Last week, is the seven complete days ending yesterday (UTC).

### The prompt panel

Click a prompt to open it beside the list. The panel shows its Visibility and trend, its properties (you can edit countries, topics and keywords here), the numbers split **By model** and **By country**, **Competitors on this prompt**, **Cited sources**, **Recent responses** with the full answer text, and **Linked articles**.

![An open prompt, showing its status, countries, topics, keywords, search demand and Visibility chart](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/prompts/prompt-detail.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=5dc52eb78090c703743e9202d9644e82)

## Edit, pause and delete

The **...** menu on a row has **Open**, **View in Data Analytics**, **Edit**, **Create article**, **Suggest with agent**, **Pause** or **Resume**, and **Delete**. **Edit** changes a prompt's countries and topics.

> [!NOTE]
>
> You can't change a prompt's wording. To ask it differently, write a new prompt. It starts with no history, so keep the old one running until the new one has a few days of answers.

**Pause** stops a prompt from running and frees its slots. Its numbers are left out of every view until you resume it, and its history comes back then. Resuming needs free slots.

**Delete** removes the prompt and its whole run history for good. Pause instead if you might want the data back.

Tick several rows to edit topics or countries, pause, resume, delete, or write articles for the selection in one go.

## Suggestions

The **Suggestions** tab lists prompts ChatFeatured thinks are worth tracking, each with its search demand and its topic. They come from setting up your project and from prompts you kept as Proposed in [Generate prompts](#generate-prompts).

* **Track** starts tracking a suggestion. It then uses slots like any other prompt.
* **Dismiss**, in the row's **...** menu, removes it. Dismissed suggestions aren't offered again. The message that confirms it has an **Undo** button.
* Tick several suggestions to track or dismiss them in one go.
* Click a suggestion to see why it was suggested.
* **Add prompts > Generate prompts** writes more. See [Generate prompts](#generate-prompts).

## Permissions

Owners, Admins and Members can add, edit, pause and delete prompts. Viewers can see prompts and their numbers but can't change them.

## Troubleshooting

> [accordion] "Not enough slots for every row" when importing
>
> The file needs more slots than you have left. The first rows are tracked and the rest are added as paused. Pause or delete prompts you no longer need, remove countries, or click **Increase limit**.

> [accordion] "Pick a topic for this prompt."
>
> Every prompt you write needs a topic. Pick one in **Topic**, or use **Create topic** in that list to add a new one. CSV imports don't need one.

> [accordion] "None of the selected countries are supported by your plan's models"
>
> No engine on your plan runs in the countries you picked. Add another country, such as your main market.

> [accordion] A prompt shows "Running now", "First results tomorrow" or "Not run in this period"
>
> "Running now" means the prompt's first run is underway. Its figures fill in on their own as each engine replies, with no need to reload. "First results tomorrow" means it hasn't been sent to the engines yet, and it will be with the next daily run. "Not run in this period" means the prompt has no answers in the **Period** you picked. Pick a longer period to see its earlier answers.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/prompts](https://docs.chatfeatured.com/using-chatfeatured/prompts).
