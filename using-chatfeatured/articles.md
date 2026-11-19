# Articles and the Content Calendar

> How articles move from idea to published, article credits, featured images, and scheduling

Articles live under **Content Hub > Articles**. ChatFeatured suggests article ideas aimed at the prompts where your Visibility is weakest, writes them once you approve, and publishes them to a connected CMS. You can also write your own from a blank draft. The Content Hub needs an active or trialing plan. Viewers can read articles and comment, but can't edit or publish.

![The Articles page, with an idea under Pending Approval and a list of published articles](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/articles/articles-list.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=7a21cc73e0114613875f412377c1d60e)

## Statuses

| Status | What it means | Can you edit it? |
| - | - | - |
| Pending | An idea waiting for approval, listed under **Pending Approval**. | Only its research, length and Knowledge Base settings |
| Writing | Approved and being written. | No |
| Draft | An article you started from scratch. | Yes |
| Review | Writing finished. Ready for you to read and edit. | Yes |
| Awaiting Approval | Frozen while someone signs off. | No |
| Approved | Signed off and ready to schedule or publish. | No |
| Scheduled | Set to publish at a future time. | No |
| Published | Live. | No |
| Archived | Set aside. **Unarchive** restores it. | No |
| Error | Writing failed. Use **Retry** from the article's menu. | No |

The usual path is Pending, Writing, Review, then Scheduled or Published. Awaiting Approval and Approved are optional, for teams that sign off before publishing.

To change status yourself, click the status badge in the editor. To edit a locked article again, set it back to Review there. When an article is Awaiting Approval, a **Mark as Approved** button appears in the editor.

## Get article ideas

On the Articles page, click **Add Article** and pick one:

* **Suggest articles:** the agent analyzes your AI search performance and suggests articles.
* **Based on topics or prompts:** pick topics or tracked prompts, then click **Suggest Articles**.
* **"I have a content idea":** describe your idea and the agent shapes it into a suggestion.
* **Start from scratch:** name the article and write it yourself in a blank draft. This doesn't use an article credit.

The first three open the [agent](../ai-agents/overview.md) in the side panel. Suggestions appear under **Pending Approval** at the top of the Articles page. Open one to see its priority, content type, target keywords, and the prompts it addresses with their 7-day Visibility.

Before approving, you can set these options on a pending idea:

* **Research:** research the topic on the web before writing, skipping your [disallowed domains](#research). On by default.
* **Length:** how many words the writer aims for, from **Short (\~800 words)** to **In-depth (\~3,500 words)**. **Fit to the topic**, the default, lets the writer choose.
* **Knowledge Base:** give the writer your [Knowledge Base](./knowledge-base.md) as brand context. On by default when you have documents, and you can narrow it to specific documents or folders.

## Approve ideas and article credits

Click **Approve** on a pending idea, or select several and approve them together. Writing starts right away, using your research, brand book, target keywords and [writing guidelines](#writing-guidelines). When it's done the article moves to **Review** and the person who approved it gets an "Article Ready for Review" notification. If writing fails, the article moves to **Error**; click **Retry** in its menu.

Each approved article uses one article credit from your monthly allowance:

| Plan | Article credits per month |
| - | - |
| Trial | 5 |
| Starter | 10 |
| Growth | 40 |
| Enterprise | 200 by default |

The allowance resets with your billing cycle. If you approve more articles than you have credits left, nothing is approved and you see a message like "You can only generate 2 more article(s) this month, but tried to approve 4." When you're out, the **Approve** buttons are disabled. Archiving or deleting an article doesn't refund its credit, and a retry doesn't use another one.

## Edit an article

Click an article to open the editor. While it's Draft or Review, you can edit the title, body, **Meta Description**, **SEO Title**, **Focus Keyphrase** and **Excerpt**. Changes save automatically. Written articles come with all four filled in, and publishing to WordPress sends the SEO fields to your SEO plugin.

![The article editor, with the status badge, publish date, live URL, Export, Details and Comments in the toolbar, and the meta description, excerpt and featured image above the body](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/articles/editor.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=fe3a143cb7b44f1498afb2c983fa5161)

The editor toolbar has:

* **Export:** copy the article as HTML, rich text or Markdown, or download a DOCX.
* **AI Editor:** an editing agent that suggests changes you accept or reject. See [The AI Editor](../ai-agents/overview.md#the-ai-editor).
* **Comments:** comment threads on the text.

**Additional Metadata** under the excerpt holds the JSON-LD and any custom fields your CMS needs. If a required CMS field is empty, Publish and Schedule stay disabled until you fill it in.

> [!WARNING]
>
> To change a Published article, choose **Unpublish** from its menu in the Articles list. The post goes back to a draft, or is taken offline, in your CMS and the article returns to Review. Edit it, then publish again, and the same post is updated. Changing the status from the badge only changes ChatFeatured and leaves the live post as it is.

## Featured images

The featured image sits above the article body. You can:

* **Add featured image:** pick a free stock photo from Pexels.
* **Upload your own:** JPG, PNG, GIF or WebP, under 10 MB.
* **Generate with AI:** write the image prompt from the article (**Auto from article**) or your own description (**Custom prompt**), pick a model, and click **Generate image**.

Add alt text in the **Image alt text** field below the image.

Each AI generation, including refines and regenerations, costs 1 image token:

| Plan | Image tokens per month |
| - | - |
| Starter | 20 |
| Growth | 50 |
| Enterprise | 100 by default |

Earlier generations stay in the panel's history. Pick one and click **Use as featured image** to switch back without spending a token.

## Publish

Articles in Draft, Review or Approved show a **Publish** button in the editor, and the article's menu in the Articles list has **Publish** and **Schedule** for each connected destination. With one CMS connected, publishing goes straight to it. With several, you pick one. With none, **Mark as Published** records the article as published without sending it anywhere.

You can publish to [WordPress](../integrations/wordpress.md), [Webflow](../integrations/webflow.md), [Ghost](../integrations/ghost-integration.md), [HubSpot](../integrations/hubspot.md), [Wix](../integrations/wix.md), [Sanity](../integrations/sanity.md), [Framer](../integrations/framer-integration.md), [Shopify](../integrations/shopify.md), the [Git-based CMS](../integrations/git-based-cms.md), or the built-in [ChatFeatured CMS](../integrations/blog-cms.md). Each integration's page covers its field mapping.

Once an article is Published, the editor shows its live URL. Click it to edit **Live URLs**, one row per place the article is published, including cross-posts like LinkedIn. All of them count toward citation tracking. If you've set up [Index Submissions](../index-submissions/index-submissions.md), a newly published URL is submitted right away.

If you publish somewhere ChatFeatured doesn't connect to, copy the article out with **Export**, publish it yourself, then mark it Published and add the live URL.

## Schedule

Use **Schedule** in the editor to publish at a set date and time in your timezone. It lists your connected destinations. With no CMS connected, **Schedule Manually** marks the article Published at that time without sending it anywhere. Framer articles go live at your first sync in Framer after the scheduled time.

To change a schedule, use **Reschedule** or **Cancel Schedule** in the editor, the article's menu, or the Content Calendar. The change reaches your CMS too: a rescheduled article moves to the new time, and a cancelled one returns to Review. If ChatFeatured can't publish a scheduled article, it goes back to Review and you're notified.

## Content Calendar

**Content Hub > Content Calendar** shows a month grid of your scheduled and published articles. Click a date to list its articles. The **Upcoming & Recent Articles** list beside it filters by **All**, **Scheduled** or **Published**. Scheduled articles have **Reschedule** and **Cancel** in their menu. To schedule a new article, use the Articles page or the editor.

![The Content Calendar, showing a month with published articles on their dates](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/articles/content-calendar.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=9238caf77c1a58ee4de446ba8689d029)

## Writing guidelines

The **Guidelines** tab of **Content Hub > Writing Guidelines** describes how this project's brand writes: its voice, its audience, the words it likes and its style. The article writer, the AI Editor and the chat agent all follow them.

The guidelines are a document you edit like an article, with headings, lists, links and tables. Changes save automatically as you type.

A new project starts without guidelines. **Getting Started** asks for them before Content Strategy, so your first articles are written in your voice. Click **Generate from website** and the agent reads several pages of your site in the chat, so you can follow each page it reads, then saves a first version for you to edit. Or click **Write my own** to start from a blank page.

You can also ask the agent to write or update them, for example "research our website and rewrite our writing guidelines". It reads a spread of pages on your site and saves the result to this page.

### Writing rules

The **Rules** tab on the same page holds your strict rules: how to write your name and products, words to use or never use, claims never to make. Keep voice and style in **Guidelines**, and anything that must be followed to the letter in **Rules**. Every article and AI Editor change follows the rules, and where they and the guidelines disagree, the rules win. Rules are a document like the guidelines and save as you type. You can also tell the agent a rule, for example "never use exclamation marks", and it adds it here.

If you set custom instructions for the agent before writing guidelines existed, you'll find them here as your writing rules.

## Research

**Content Hub > Research** lists your **Disallowed domains**: sites the agent must not use as sources for this project. They're left out of every web search the agent runs, including the research before an article is written, and won't be cited in articles. Add the root domain (`example.com`); subdomains are covered. **Add N competitor domains** adds your competitors' domains in one click.

## Archive and delete

Archive an article to set it aside; **Unarchive** restores it. Deleting is permanent. It removes the article's page from the ChatFeatured CMS, but copies published to another CMS stay where they are.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/articles](https://docs.chatfeatured.com/using-chatfeatured/articles).
