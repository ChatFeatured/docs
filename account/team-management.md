# Team management

> Roles, invitations, project access, custom permissions and auto-join for your workspace.

Everyone in a workspace is a member with one of four roles. You manage members under **Settings** > **Members**. There's no charge per member.

## Roles

| | Owner | Admin | Member | Viewer |
| - | - | - | - | - |
| Projects they can see | All | All | Assigned only | Assigned only |
| Work in a project (prompts, articles, competitors, site audit, integrations and the rest) | Yes | Yes | Yes | View only |
| Comment on articles | Yes | Yes | Yes | Yes |
| Use the agent | Yes | Yes | Yes | No |
| See every agent conversation in a project | Yes | Yes | Only their own | No |
| Set up Agent Analytics | Yes | Yes | No | No |
| Add projects | Yes | Yes | Yes | No |
| See billing | Yes | Yes | No | No |
| Invite and manage members, change the plan, edit the workspace | Yes | No | No | No |

A workspace can have more than one Owner, and always keeps at least one. To hand a workspace over, make the new person an Owner, then have them change your role.

## Invite someone

Only Owners can invite.

1. Go to **Settings** > **Members** and click **Invite Member**.
2. Enter their **Email Address**.
3. Under **Permissions**, pick a role: Owner, Admin, Member or Viewer. Optionally fine-tune it with [custom permissions](#custom-permissions).
4. For Members and Viewers, choose their projects under **Project Access**. At least one is required. Owners and Admins always see every project.
5. Click **Send Invitation**.

They get an email with an **Accept Invitation** button. Unaccepted invitations are listed under **Pending Invitations** and expire after 30 days. From an invitation's actions menu, Owners can **Resend Invitation** or **Cancel Invitation**.

## Accepting an invitation

1. Click **Accept Invitation** in the email.
2. Sign in, or create your account, with the address the invitation was sent to. Signing in with Google works too.
3. On the invitation page, click **Accept Invitation**.

If you're signed in with a different address, click **Continue as** the invited address to sign in with the right one. An expired or canceled invitation opens an "Invitation Error" page; ask for a new invitation.

## Members list

**Current Members** shows each member's role, project access and when they joined. A **Custom** badge next to the role means their permissions differ from the role's defaults.

![The Current Members list, showing a member's role, project access, join date and Actions menu](https://mintcdn.com/chatfeatured/6uBafkjCiCK9CA0J/images/account/members.webp?fit=max\&auto=format\&n=6uBafkjCiCK9CA0J\&q=85\&s=13888b7e6007dc49c36ffa4c22fcc421)

Each member's actions menu has, for Owners:

* **Edit Permissions**: change their role and fine-tune permissions, then **Save Permissions**.
* **Manage Project Access**: choose which projects a Member or Viewer can see, then **Save Changes**.
* **Remove Member**: they lose access right away.

## Custom permissions

The four roles are presets. When inviting someone or editing their permissions, an Owner can turn individual permissions up or down, grouped into Articles, AI Agent, Prompts & Analytics, Project, and Workspace & Billing. For example, you can let a Member see billing or the agency dashboard, or stop a Viewer from commenting. **Reset to preset** removes the customization.

Managing members and editing the workspace stay with Owners and can't be granted.

## Auto-join

Auto-join adds anyone who signs up with your company's email domain to the workspace. Only Owners see it, on **Settings** > **Members**.

1. Turn on **Enable auto-join**.
2. Under **Allowed Email Domains**, add your domains, like `acme.com`. Personal email domains aren't allowed.
3. Choose the **Default Role** new members get.
4. For Members, choose the **Default Project Access**. At least one project is required.
5. Click **Save changes**.

Auto-join applies to new accounts only. Invite anyone who already has a ChatFeatured account.

## Agent email recipients

Automations can email their results. The agent can always email workspace members. To let it email someone outside the workspace, such as a client, add their address under **Agent email recipients** in **Settings** > **Members**. Owners and Admins can edit the list. See [Automations](../using-chatfeatured/automations.md).

## Workspace name and logo

Owners can rename the workspace and change its logo under **Settings** > **Overview** > **Edit**. To delete a workspace, email [support@chatfeatured.com](mailto:support@chatfeatured.com).

## Your profile

Under **Settings** > **Profile** you can edit your name and email, change your password, and turn the **Task Assignments** and **Articles Ready for Review** emails on or off.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/account/team-management](https://docs.chatfeatured.com/account/team-management).
