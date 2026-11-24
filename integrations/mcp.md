# AI agent (MCP)

> Connect Claude, ChatGPT, Cursor and other MCP clients to ChatFeatured to read your analytics and manage content

ChatFeatured runs an MCP (Model Context Protocol) server. Connect an AI agent to it and the agent can read your AI search analytics, manage prompts, competitors and your brand book, and create, schedule and publish articles in any project you have access to. The setup page is **Integrations → AI Agent (MCP)**.

The connection acts as you, with your role in every workspace and project you can open. Project data needs an active or trialing plan on the project's workspace.

## Server URL

```text
https://chatfeatured.com/api/mcp
```

The server uses the Streamable HTTP transport. If your client asks, choose HTTP, not SSE.

> [!NOTE]
>
> The server's tools changed in November 2026. Existing connections keep working and pick up the new tools the next time your client connects, so there's nothing to set up again. Saved instructions or scripts that name an old tool, such as `list_brands` or `query_analytics`, need the new names below.

## Connect with OAuth (recommended)

Add the URL and your client opens a ChatFeatured sign-in page. No key, client ID or secret is needed.

> [tab] Claude
>
> Add the [ChatFeatured plugin](#claude-plugin), which brings the connector and its skills:
>
> 1. In Claude (web or desktop), go to **Customize > Plugins**, select **Add > Add marketplace** and enter `ChatFeatured/claude-plugin`.
> 2. Turn on **Sync automatically** and add **chatfeatured**.
> 3. On the plugin's **Connectors** tab, connect ChatFeatured and sign in with your ChatFeatured account.
>
> Plugins need a paid Claude plan. On the Free plan, add the connector on its own: go to **Customize > Connectors**, select **Add > Add custom connector**, paste the server URL, and sign in.

> [tab] Claude Code
>
> Install the [ChatFeatured plugin](#claude-plugin), which brings the connector and its skills:
>
> ```bash
> claude plugin marketplace add ChatFeatured/claude-plugin && \
>   claude plugin install chatfeatured@chatfeatured
> ```
>
> To keep it up to date, run `/plugin`, open **Marketplaces > chatfeatured** and select **Enable auto-update**. Then run `/mcp` and sign in when prompted.
>
> For the connector without the skills, run `claude mcp add --transport http chatfeatured https://chatfeatured.com/api/mcp` instead.

> [tab] ChatGPT
>
> Add a custom MCP server in ChatGPT's settings (called connectors or apps, depending on your version). Paste the server URL, choose OAuth, and sign in with your ChatFeatured account. Custom MCP servers depend on your ChatGPT plan and workspace policies.

> [tab] Cursor
>
> Add the server to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` in a project:
>
> ```json
> {
>   "mcpServers": {
>     "chatfeatured": {
>       "url": "https://chatfeatured.com/api/mcp"
>     }
>   }
> }
> ```
>
> Cursor opens a browser to sign in the first time it connects.

Signed-in clients appear under **Connected apps**. Click the trash icon to disconnect one.

## Claude plugin

The ChatFeatured plugin for Claude adds the connector and six skills, which Claude uses when a request matches. You can also pick one by typing `/` in Claude, or `/chatfeatured:<skill>` in Claude Code.

| Skill | What it does |
| - | - |
| `ai-visibility-report` | How your brand shows up in AI answers for a period, what changed and what to do next. Works as a scheduled Monday report. |
| `competitor-brief` | Where one competitor beats you in AI answers, which pages they get cited from, and what to change. |
| `content-gaps` | Prompts where competitors are mentioned and you aren't, turned into article ideas. |
| `article-pipeline` | Takes article ideas through writing, edits and publishing to your CMS. |
| `site-audit-triage` | Turns a site audit into a short, ordered list of fixes that help AI assistants cite your site. |
| `project-setup` | Sets up a new brand from its website: brand book, topics, prompts to track and a trial. |

The plugin comes from the `ChatFeatured/claude-plugin` repository, and setup steps are in the Claude and Claude Code tabs above. With **Sync automatically** (Claude) or **Enable auto-update** (Claude Code) on, new versions arrive by themselves. Otherwise, select **Check for updates** on the marketplace in Claude, or run `/plugin marketplace update chatfeatured` in Claude Code.

If you added the ChatFeatured connector before installing the plugin, keep it. Claude uses one connection for the same server URL, so you won't see the tools twice.

## Connect with an API key

Use an API key for clients that don't support OAuth, and for scripts.

1. Go to **Integrations → AI Agent (MCP)** and scroll to **API keys**.
2. Click **Create API key**, give it a **Name**, and click **Create key**.
3. Copy the key from the **API key created** dialog. You won't see it again.

The key has access to all projects you can access. Send it in an `x-api-key` header, as `Authorization: Bearer cf_...`, or as an `?api_key=` query parameter.

Most clients take a config like this one:

```json
{
  "mcpServers": {
    "chatfeatured": {
      "url": "https://chatfeatured.com/api/mcp",
      "headers": {
        "x-api-key": "cf_your_key_here"
      }
    }
  }
}
```

For Claude Code:

```bash
claude mcp add --transport http chatfeatured https://chatfeatured.com/api/mcp \
  --header "x-api-key: cf_your_key_here"
```

From your own code, use any MCP client library with a Streamable HTTP transport. With the official TypeScript SDK (`@modelcontextprotocol/sdk`):

```javascript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const transport = new StreamableHTTPClientTransport(
  new URL("https://chatfeatured.com/api/mcp"),
  { requestInit: { headers: { "x-api-key": process.env.CHATFEATURED_API_KEY } } }
);
const client = new Client({ name: "my-script", version: "1.0.0" });
await client.connect(transport);

const result = await client.callTool({
  name: "get_context",
  arguments: {},
});
console.log(result.content);
```

The **API keys** list shows your MCP keys. Click the trash icon to delete one; clients using it lose access immediately. MCP keys and project [REST API](./rest-api.md) keys aren't interchangeable.

### Rate limit

Everything you connect shares one limit of 300 units a minute: every API key and every OAuth connection, over MCP and the REST API alike. Each message your client sends costs 1 unit, tool listings included. A tool call costs its operation's units on top: most reads 1, changes 2, and 5 for anything that starts work, such as writing an article. Each API key also allows 100 messages a minute on its own.

Over either limit, the server answers `429 Too Many Requests` with a `Retry-After` header, or the tool call fails with `rate_limited` and the seconds to wait.

## How a session works

Field names match the [REST API](./rest-api.md), so a project is a `projectId`.

1. `get_context` lists your workspaces and the projects you can reach. Every project tool takes a `projectId` from it. If you can reach more than 25 projects, it asks for the one you mean instead: name it, by name or domain, and the assistant searches for it.
2. `get_brief` shows how the project is doing. Drill in with `query_visibility`, or `query_sql` for questions it can't answer.
3. `save_articles` creates article ideas. Set `write: true` on an idea to start writing it, or call `write_articles` later. Each article written uses one from your monthly article allowance.
4. Writing returns a job. `wait_for_job` waits up to 50 seconds per call, so the assistant calls it again until the article is done (usually 2 to 5 minutes).
5. `get_article` reads the draft, and `edit_article` changes the body.
6. `publish_article` publishes it to a connected CMS, schedules it, or records a page you published yourself so it's tracked for citations.

Anything that uses a plan allowance says so and reports what's left in its result. When an allowance runs out, the tool answers `limit_reached` before doing any work.

## Tools

### Core tools

| Tool | What it does |
| - | - |
| `get_context` | Your workspaces, your role in each, and the projects you can reach. Pass `project` (a name, domain or id) to find one. |
| `get_brief` | How the project is doing in AI search: headline numbers, platforms, competitor ranking, prompt movers and cited domains. |
| `query_visibility` | Slices any visibility metric by prompt, model, competitor, cited page or domain, country and date. |
| `query_sql` | Runs one read-only SQL query over the project's visibility data. Call it with `explain: true` first to get the schema. |
| `get_answers` | The AI answers behind the numbers: what each platform answered to your prompts. |
| `get_changes` | What moved since a date: tracking changes, prompt movers and new citations. |
| `get_recommendations` | One ranked list of what to do next: content gaps, audit fixes and opportunities. |
| `save_prompts` | Adds prompts to track, up to 500 at once. Prompts past your slot limit are added paused. |
| `save_competitors` | Adds a competitor or changes one. |
| `save_articles` | Creates article ideas, and starts writing the ones marked `write: true`. |
| `write_articles` | Starts writing ideas, or retries failed articles. |
| `get_article` | Reads an article's outline, its whole body, or one section as Markdown. |
| `edit_article` | Edits an article body: find and replace, inserts, or whole sections. |
| `publish_article` | Publishes to a connected integration, schedules a publish date, or records a page you published yourself. |
| `connect` | Gives you a link to open for a step that needs a person, such as a sign-in or checkout. |
| `wait_for_job`, `get_job`, `cancel_job` | Follow or stop work that takes time, such as writing an article or running an audit. |
| `describe_operation` | The full inputs and outputs of any operation the area tools list. |

### Area tools

Everything else is reached through a pair of tools per area: `<area>_read` and `<area>_write`. Each takes an `operation` and its `input`, and its description lists the operations it runs. The assistant picks the right one; you don't need to name them.

| Area | What's in it |
| - | - |
| `account` | Your profile, API keys, connected apps and notifications. |
| `organization` | Workspaces, team members, invitations and billing. |
| `projects` | Projects and their setup, the brand book, personas, and writing guidelines and rules. |
| `prompts` | Prompts, suggested prompts, topics, and the keywords linked to prompts. |
| `competitors` | Competitors, suggested competitors, and the names that count as each brand. |
| `visibility` | The brief, analytics, AI answers, cited sources and tracked content. |
| `articles` | Articles, ideas, versions and comments. |
| `publishing` | Where each article is published or scheduled. |
| `integrations` | CMS integrations, authors, and the ChatFeatured CMS with its form submissions. |
| `images` | The image library, stock photos and uploads. Generating images with AI is only in the dashboard. |
| `keywords` | The keyword bank and keyword research. |
| `knowledge_base` | Knowledge base documents. |
| `tasks` | Tasks and recommendations. |
| `website` | Site and page audits, their issues, and llms.txt. |
| `crawlers` | AI crawler and agent visits to your site. |
| `web_analytics` | Google Analytics, Search Console, Bing Webmaster Tools, Plausible, Fathom and Databuddy. |
| `social` | Social posts that AI answers cite. |
| `ads` | ChatGPT ads. |
| `reports` | AEO and performance reports for clients, with white labeling. Only listed when one of your workspaces has the agency product. |
| `automations` | Automations, their runs, and agent memory. |
| `webhooks` | Webhook endpoints, their deliveries, and the event log. |
| `jobs` | Lists jobs (read only). |

Errors start with a code, such as `not_found` or `plan_required`, and say what to do next. [API and MCP errors](./api-errors.md) lists them all.

## Slash commands

The server also offers ready-made requests for common jobs. Clients that support them list them as slash commands or in a prompt menu. How they're named depends on your client and on what you called the server when you added it. Each one tells the assistant which tools to use.

| Command | What it does |
| - | - |
| `weekly-report` | This week's AI visibility: the headline numbers, what changed, and the three things to do next. |
| `content-gaps` | Prompts where competitors are mentioned and you aren't, with an article idea for each. It asks before saving any ideas. Optionally focuses on one competitor. |
| `competitor-brief` | Where one competitor beats you in AI answers, which pages they get cited from, and what you could change. |
| `edit-article` | Revises an article: reads only the sections it needs, makes the change, and tells you what changed. |

Every command takes an optional project. Leave it out and the assistant uses your only project, or asks which one.

## Troubleshooting

> [accordion] "plan\_required: This project doesn't have an active ChatFeatured plan"
>
> The project's workspace has no active or trialing plan. `get_context` still works.

> [accordion] "not\_found: Project not found"
>
> The `projectId` belongs to a project you aren't a member of, or it's mistyped. Check it against `get_context`.

> [accordion] 401 "Invalid or expired credentials"
>
> With an API key, check it wasn't deleted, that you copied all of it, and that it's an MCP key rather than a REST API key. With OAuth, disconnect the assistant under **Connected apps** and connect it again.

> [accordion] 403 "MCP access requires organization membership"
>
> Your account isn't in any workspace. Ask a workspace Owner to [invite you](../account/team-management.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/mcp](https://docs.chatfeatured.com/integrations/mcp).
