# The ChatFeatured agent

> What the agent can see and do, where to open it, who can use it, and how to configure it

The ChatFeatured agent is a chat assistant that works on your project's data. Ask it how your Visibility is trending, which sources AI engines cite, or what to write next, and it looks up the answer itself. It can also make changes for you: edit prompts and the brand book, manage competitors, approve and publish articles, and set up recurring reports.

There is one agent for analytics, tracking setup, content, publishing, site audits and tasks. Inside an article, a separate [AI Editor](#the-ai-editor) handles edits to that article's text.

The agent needs an active or trialing plan. Owners, Admins and Members can use it; Viewers can't. It acts as you, so it can only change what your role allows.

## Where to find it

* **Full page:** in the sidebar, open **Agent > Chat**.
* **Side panel:** on any other page, click **Agent chat** in the top bar, or press Cmd+J (Ctrl+J on Windows).

Both use the same conversations. When you open the side panel from a page such as Prompts, Site Audit or Articles, the agent knows which page you're on and starts there. On the Articles page, an article's menu also has **Add to Chat**.

## What the agent works on

The agent picks the right area from what you ask. You don't choose a mode, and the conversation carries over when it switches.

| Area | What it covers |
| - | - |
| Analytics & Insights | Visibility, sentiment, citations, competitor comparisons, trends, AI crawler traffic, plus Google Analytics and Search Console when connected |
| Brand & Tracking Setup | Brand book and personas, tracked prompts, topics, competitors, keyword research |
| Content Strategy & Articles | Article ideas from visibility gaps, editing details, approving, archiving and deleting articles |
| Scheduling & Publishing | Scheduling, publishing to a connected CMS, featured images, publish status |
| Site Audit | Your site's technical, content and AEO health and page-level fixes |
| Tasks | Adding opportunities to your task list, updating tasks, and managing automations |

It covers the same 7 AI engines as the rest of ChatFeatured. It can also read your brand book and Knowledge Base, search the web, and read a page you link.

## Chatting with the agent

* Type `@` to attach Knowledge Base documents or folders. The agent reads those first.
* Type `/` for **New chat** and **Clear chat**.
* For anything longer than 15,000 characters, upload it to the [Knowledge Base](../using-chatfeatured/knowledge-base.md) and `@` it instead.

When a trend or ranking matters, the agent draws a chart in its reply. **History** at the top of the full page lists your recent conversations. Members see only their own conversations; Owners and Admins see every conversation in the project.

![The agent's answer to a question about this week's performance, summarizing Visibility, sentiment, citations and competitive rank](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/agent/chat.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=7f2b99d33a61166645728e4d4ecfbe8a)

## What it can change

The agent doesn't only recommend. When you ask, it makes the change directly. It can:

* Create, edit, pause and resume tracked prompts, and attach keywords to them
* Edit the brand book and personas
* Add, edit and remove competitors, and add and research keywords
* Save article ideas, edit an article's title and details, and approve ideas (which starts writing and uses article credits)
* Archive, restore and permanently delete articles
* Schedule, reschedule or cancel an article, publish it to a connected CMS, and set a featured image
* Add opportunities to your task list and update task status
* Create, change, pause, run or delete [automations](../using-chatfeatured/automations.md)

It can't edit an article's body text (use the [AI Editor](#the-ai-editor)) or change your website. It tells you what to fix, and you make the fix.

> [!WARNING]
>
> Changes happen as soon as the agent runs them. Deleting an article can't be undone, approving spends article credits, and publishing sends the article to your live site. Be specific about which articles you mean.

## Opportunities

When you ask what to do next, or it finds an earned-media opening (a high-authority publication you could get cited on), it surfaces an opportunity. On the full Agent page these collect in the **Opportunities** panel on the right; in the side panel they appear as cards in the conversation.

Each card shows a type (Content, Earned Media, UGC or Sentiment) and a title. Expand it for what the agent found, why it matters and the recommended action. Nothing is saved until you click **Add to Tasks** or ask the agent to add it. The button then changes to **View Task**, which opens it on the [Tasks](../using-chatfeatured/tasks.md) page.

## Configure the agent

Agent settings sit under **Agent > Configure** in the sidebar: **Memory** and **History**. The [writing guidelines](../using-chatfeatured/articles.md#writing-guidelines) and [disallowed domains](../using-chatfeatured/articles.md#research) the agent follows are under **Content Hub > Configure**.

### Memory

When you state a standing preference in chat, such as "stop suggesting Reddit", the agent saves it to memory and applies it later. Say "remember this" to make sure it saves.

Memory has three levels: **Organization** (every project in the workspace), **This project** (shown with the project's name) and **You** (how the agent works with you personally). You can edit or delete entries, or click **Add** to write one yourself.

### History

**Interaction history** is the agent's record of what it has done in this project: scheduled runs, opportunities it surfaced or added, emails it sent, memory changes. It can't be edited.

## The AI Editor

Inside an article, click **AI Editor** in the toolbar to open the editing agent beside the text. Select text first to scope the edit to that passage.

Its changes appear as suggestions you **Accept** or **Reject**, one at a time or with **Accept all** / **Reject all**. It follows your [writing guidelines](../using-chatfeatured/articles.md#writing-guidelines), and you can type `@` to point it at Knowledge Base documents.

The AI Editor works only while the article can be edited. Articles that are Awaiting Approval, Approved, Scheduled, Published or Archived are locked. See [Articles](../using-chatfeatured/articles.md#statuses).

## Scheduled runs

The agent can do recurring work on its own, like a weekly performance report. Set it up on the [Automations](../using-chatfeatured/automations.md) page, or ask the agent ("every Monday, send me a performance report").


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/ai-agents/overview](https://docs.chatfeatured.com/ai-agents/overview).
