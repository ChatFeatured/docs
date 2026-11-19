# Git-based CMS integration

> Publish ChatFeatured articles as Markdown files committed to your site's GitHub repository

The Git-based CMS integration publishes each article as a Markdown file, with front matter, committed to your site's GitHub repository. It works with CloudCannon, Hugo, Jekyll, Astro, and more. Your CMS picks up the commit and your site rebuilds as usual. Set it up under **Integrations → Git-based CMS**. Only GitHub repositories are supported.

> [!WARNING]
>
> Every publish rewrites the whole file from the article in ChatFeatured, so edits made in your CMS editor or the repository are lost. Make your edits in ChatFeatured.

## Setup

### Step 1: Give ChatFeatured access to your repository

There are two ways in. The ChatFeatured GitHub App is the default and works for organizations that turn off personal access tokens. A fine-grained token is the alternative.

**With the GitHub App**

1. Go to **Integrations → Git-based CMS** and click **Connect with GitHub**. Sign in to GitHub if it asks.
2. Pick the account or organization that owns your site's repository, choose **Only select repositories**, and pick the repository.
3. Click **Install**. GitHub sends you back to ChatFeatured with the repository ready to pick.

The App only gets Contents and Pull requests access to the repositories you picked, and commits show up as made by the ChatFeatured app. If you aren't an owner of the organization, GitHub asks an owner to approve the install. Click **Connect with GitHub** again once they have.

**With a fine-grained token**

Click **Use a personal access token instead** on the integration page, then create the token:

1. On GitHub, go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens** and click **Generate new token**.
2. Under **Repository access**, choose **Only select repositories** and pick the repository your site builds from.
3. Under **Repository permissions**, set **Contents** to **Read and write**. If you'll [publish via pull request](#publishing-via-pull-request), set **Pull requests** to **Read and write** too.
4. Generate the token and copy it. Note its expiry date: publishing stops when the token lapses.

### Step 2: Connect in ChatFeatured

Open an existing post in your repository to see its branch, folder, extension and front matter keys. Then go to **Integrations → Git-based CMS** and fill in:

| Field | What to enter |
| - | - |
| **GitHub Repository** | With the GitHub App, pick it from the list. With a token, type `owner/repo-name`. |
| **Branch** | The branch your CMS builds from, often `main` |
| **Content Path** | The folder your posts live in, such as `content/posts`. New posts are created there as `<slug>.md`. |
| **File format** | `.md` or `.mdx`, matching your existing posts |
| **GitHub Access Token** | Token only: the token from Step 1 |
| **Site URL (optional)** | Your site's address, such as `https://www.example.com`. Needed to link to and track published posts. |
| **URL pattern (optional)** | How your site builds a post's URL, such as `/blog/{slug}/`. Leave blank to derive it from the content path (Hugo's default). |
| **Default author (optional)** | Used when no author is given at publish time |

Optionally set up the two options below, then click **Connect repository**. ChatFeatured checks its access, the repository and the branch before saving. To change settings later, edit the form and click **Update Connection**. If the repository you want isn't in the list, click **Give the GitHub App access to it** under it and add the repository on GitHub.

### Publishing via pull request

By default, ChatFeatured commits straight to your branch. Turn on **Publish via pull request** if the branch is protected or you want to review posts first. Each publish then opens a pull request from a `chatfeatured/...` branch, and the post goes live when you merge it.

### Committing featured images

With **Commit featured images** off, front matter points to the image where ChatFeatured hosts it. Turn it on and set an **Image Folder**, such as `static/blog/uploads`, to commit each featured image into your repository. Front matter then uses a site-relative path like `/blog/uploads/<slug>.jpg`.

### Front matter

Once you're connected, the **Front matter** card lists the keys each post gets. Article fields without a key there use the defaults below. To match your theme, click **Add field**, type the key, and pick the article field under **Value comes from**. Rename a key in its box, or remove it with the trash icon. Changes save as you make them.

| Article field | Default key | Notes |
| - | - | - |
| Title | `title` | |
| Date | `date` | The first publish date. It doesn't change when you publish again. |
| Description | `description` | The meta description, or the excerpt if there's none |
| Featured image | `image` | |
| Image alt text | none | Only written when you set a key. |
| Tags | `tags` | From the publish dialog |
| Keywords | `keywords` | The article's target keywords |
| Author | `author` | From the publish dialog, then the article's author, then the Default author |
| Draft flag | none | Only written when you set a key. Needed for drafts. |
| Last updated | none | The article's last edit. Only written when you set a key. |

To add a key with the same value on every post, such as `_schema: default`, add a field, choose **Same value every time**, and type the value. `true`, `false` and numbers keep their type, and an empty value writes the key with nothing after it. Choose **Set per article** instead for a key you fill in on each article under **Additional Metadata**.

A default file looks like this:

```yaml
---
title: "Your Article Title"
date: 2026-07-08T15:00:00.000Z
description: "The article's meta description"
image: "/blog/uploads/your-slug.jpg"
keywords:
  - "target keyword"
author: "Editorial Team"
---
```

## Publish an article

In the article editor, click **Publish** or **Schedule** and choose the Git-based CMS. The dialog has **Publish Status**, **Author (optional)**, **Tags** and, for Schedule, a date, time and timezone.

**Save as Draft** only appears once a front matter key, such as `draft`, takes the **Draft flag**. Without one, generators like Hugo treat every committed post as live.

| Action | In your repository | Article in ChatFeatured |
| - | - | - |
| Save as Draft | File committed with the draft flag set to true | Keeps its current status |
| Publish Now | File committed (or a pull request opened) | Published |
| Schedule | Committed at the scheduled time | Scheduled, then Published |
| Reschedule | The commit moves to the new time | Stays Scheduled |
| Cancel schedule | Nothing is committed | Back to Review |
| Unpublish | The file is deleted in a commit (or a pull request) | Back to Review |
| Publish again | The file is regenerated at the same path | Published |

To change a published article, choose **Unpublish** from its menu in the Articles list, edit it, then publish again. The `date` stays the original publish date.

## Troubleshooting

> [accordion] GitHub sent your install request to an owner of that account.
>
> You aren't an owner of the GitHub organization, so GitHub asked an owner to approve the ChatFeatured App. Once they approve it, click **Connect with GitHub** again.

> [accordion] Your GitHub account can't push to this repository
>
> ChatFeatured only connects repositories you can push to yourself on GitHub, and the list under **GitHub Repository** only shows those. Ask a repository admin for write access, or have someone who has it connect the repository.

> [accordion] To switch repositories, connect with GitHub again
>
> Moving a GitHub App connection to another repository needs a fresh check that you can push to it. Click **Give the GitHub App access to it**, finish on GitHub, then pick the new repository and click **Update Connection**.

> [accordion] The ChatFeatured GitHub App can't see this repository. Add it to the App's repository access on GitHub.
>
> The App is installed, but not on this repository. Click **Give the GitHub App access to it** under the repository list, add the repository, and click **Install** or **Save**.

> [accordion] The ChatFeatured GitHub App is no longer installed on this account, or it was suspended.
>
> Someone removed or suspended the App in the organization's GitHub settings. Click **Give the GitHub App access to it** to install it again, pick the repository from the list again, and click **Update Connection**.

> [accordion] GitHub rejected the token. Check that the fine-grained personal access token is valid and not expired.
>
> The token expired, was revoked, or wasn't copied in full. Generate a new one (Step 1), paste it into **GitHub Access Token**, and click **Update Connection**.

> [accordion] Repository not found. Check the owner/name and make sure the token is scoped to this repository.
>
> Enter the repository as `owner/repo-name`. Fine-grained tokens only see the repositories picked when they were created, so you may need a new token with the right repository selected.

> [accordion] The commit is there but the post isn't on the site
>
> Find the `via ChatFeatured` commit in your repository's history, then check your CMS's sync and build logs. Hugo hides future-dated posts by default, so check the `date`, and the draft key if you use one.

## Related

> [card] [All integrations](./overview.md)
>
> Every CMS and analytics integration ChatFeatured supports.

> [card] [Articles](../using-chatfeatured/articles.md)
>
> How articles move from idea to published.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/git-based-cms](https://docs.chatfeatured.com/integrations/git-based-cms).
