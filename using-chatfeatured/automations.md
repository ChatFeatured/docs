# Automations

> Schedule the agent to run reports and reviews on its own and deliver the results by email or in the dashboard

An automation is an instruction the [ChatFeatured agent](../ai-agents/overview.md) runs on a schedule, with nobody in the chat: a weekly performance report, a competitor review every Thursday, a monthly content summary. Each run writes a report and delivers it to the people you pick.

Find them under **Automations** in the sidebar. **Automations** lists what you've set up, and **Runs** shows every run and its result. Automations need an active or trialing plan. Viewers can see them but not edit them.

## Create an automation

![The New automation form, filled in from the Weekly competitor review template](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/automations/new-automation.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=7d8b7caaf78c5aa7937b9025983aa1ba)

**1. Open the form**

Click **Add automation** at the top of the Automations page.

**2. Pick a template, or start blank**

**Start from a template** fills in the name, instructions and schedule. Edit any of them afterwards.

**3. Name it and write the instructions**

**Name** is how the automation appears in lists. **AI Agent Instructions** is what the agent does on every run. Write it as a complete brief, because nobody is there to answer follow-up questions.

**4. Set the schedule**

Choose a **Schedule Cadence** and a time. See [Schedule options](#schedule-options).

**5. Choose who gets the results**

Turn on **Notifications** and pick channels and recipients. See [Delivery and recipients](#delivery-and-recipients).

**6. Save**

Click **Create automation**. Turn off the **Active** switch at the top of the form to pause an automation without deleting it.

You can also ask the agent in chat, for example "every Friday at 9am, send me a competitor review", and it creates the automation for you.

## Templates

| Template | Default schedule | What it does |
| - | - | - |
| Weekly performance report | Mondays at 9:00 | Visibility, mention and sentiment trends, competitor movement and top citations versus the prior week, with recommended actions |
| Weekly competitor review | Thursdays at 9:00 | Where competitors gained or lost ground on your prompts, and sources they're cited on that you aren't |
| Monthly content summary | 1st of the month at 9:00 | What was published or generated last month, how it performed, and the biggest remaining content gaps |
| Weekly site audit review | Wednesdays at 9:00 | Open site audit issues, the lowest-scoring pages that matter, and the top fixes, added to your Tasks page |
| Monthly article generation | 15th of the month at 9:00 | Finds your biggest Visibility gap with no article yet, approves an article for it and has it written. The article is left in Review for you to publish |

> [!WARNING]
>
> Monthly article generation approves an article on every run, which uses one [article credit](./articles.md#approve-ideas-and-article-credits).

## Schedule options

* **Daily:** every day at the time you set.
* **Weekly:** a day of the week and a time.
* **Monthly:** a day of the month from 1 to 28, and a time.
* **Custom:** a cron expression, such as `0 9 * * 1` for Mondays at 9:00.

Pick the timezone the schedule runs in below it. A new automation starts in your browser's timezone, and the default automations run at 9:00 in your project's country. Editing an automation keeps its timezone unless you change it, and every automation shows its timezone next to the schedule.

## Delivery and recipients

Turn on **Notifications** to deliver each run's results. You can use one or both channels:

* **Send results via email:** each recipient gets the report by email, and can reply to continue the conversation with the agent.
* **Notify in the dashboard:** adds each result to the bell menu, linked to the run.

Under **Who hears about it**, tick the teammates who should get results. Email needs at least one recipient. To email someone outside the workspace, such as a client, their address has to be on the workspace's approved list under **Outside the workspace**. Owners and Admins can add one there with **Add**.

## Run now, edit and delete

Each automation card shows when it last ran, the result, and a **Last run summary**.

* **Run now** runs the automation immediately. The regular schedule isn't affected.
* **Edit** reopens the form. Click **Save changes** when you're done.
* **Delete automation** (the trash icon in the form) stops its scheduled runs and removes its run history. This can't be undone.

## Runs

**Automations > Runs** lists every run, filterable by status, date and automation. Open a run to read its full report. **Open full report in chat** opens the run's conversation in the agent, where you can ask follow-up questions.

| Result | What it means |
| - | - |
| Succeeded | The run finished and delivered its report. |
| Queued | The run is due and waiting to start. |
| Running | The run is in progress. |
| Incomplete | The run hit its step limit before it could finish. Its partial work is saved in the conversation. Try narrowing the instructions. |
| Failed | The run hit an error. |
| Aborted | The run was stopped before it finished. |
| Skipped | The project had no active plan when the run was due, or the previous run was still going. |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/using-chatfeatured/automations](https://docs.chatfeatured.com/using-chatfeatured/automations).
