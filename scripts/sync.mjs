// Mirrors docs.chatfeatured.com into this repo as plain markdown.
//
// Reads the site's llms.txt, fetches the markdown export of every page it lists,
// rewrites links between pages to relative paths so they work on GitHub, and
// regenerates README.md and pages.json. Files from the previous run that the site
// no longer lists are deleted. Run with `node scripts/sync.mjs` (Node 20+).

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, posix } from "node:path";

const SITE = "https://docs.chatfeatured.com";
const MANIFEST = "pages.json";

// The live site groups pages by their first path segment. Pages outside these
// folders fall back to a heading made from the folder name.
const SECTIONS = {
	"getting-started": "Getting started",
	"using-chatfeatured": "Using ChatFeatured",
	"index-submissions": "Index submissions",
	"ai-agents": "AI agent",
	integrations: "Integrations",
	account: "Account",
};

async function get(url) {
	let lastError;
	for (let attempt = 1; attempt <= 3; attempt++) {
		try {
			const res = await fetch(url, { headers: { "user-agent": "chatfeatured-docs-mirror" } });
			if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
			return await res.text();
		} catch (error) {
			lastError = error;
			await new Promise((r) => setTimeout(r, attempt * 2000));
		}
	}
	throw new Error(`GET ${url} failed: ${lastError.message}`);
}

// "/integrations/cloudflare.md" -> "integrations/cloudflare.md". The site's root
// page exports as index.md, which reads better on GitHub as introduction.md.
function repoPath(sitePath) {
	const path = sitePath.replace(/^\//, "");
	return path === "index.md" ? "introduction.md" : path;
}

function liveUrl(sitePath) {
	const path = sitePath.replace(/\.md$/, "");
	return path === "/index" ? `${SITE}/` : `${SITE}${path}`;
}

function parseIndex(llmsTxt) {
	const pages = [];
	const line = /^- \[([^\]]+)\]\((https:\/\/docs\.chatfeatured\.com(\/[^)]+\.md))\)(?::\s*(.*))?$/;
	for (const raw of llmsTxt.split("\n")) {
		const m = raw.trim().match(line);
		if (!m) continue;
		pages.push({ title: m[1], sitePath: m[3], path: repoPath(m[3]), url: liveUrl(m[3]), description: (m[4] ?? "").trim() });
	}
	return pages;
}

function convert(markdown, page) {
	let text = markdown.replace(/\r\n/g, "\n");

	// Mintlify prepends a blockquote pointing agents at llms.txt. Drop it.
	text = text.replace(/^> ## Documentation Index\n(?:>.*\n)*\n*/, "");

	// Fence info strings carry a Mintlify-only attribute: ```bash theme={null}
	text = text.replace(/^([\s>]*```[^\n`]*?)\s+theme=\{null\}$/gm, "$1");

	// Links to other pages: https://docs.chatfeatured.com/x/y.md#anchor -> ../x/y.md#anchor
	text = text.replace(/https:\/\/docs\.chatfeatured\.com(\/[A-Za-z0-9/_-]+\.md)(#[^\s)]*)?/g, (_, target, anchor = "") => {
		let rel = posix.relative(posix.dirname(page.path), repoPath(target));
		if (!rel.startsWith(".")) rel = `./${rel}`;
		return rel + anchor;
	});

	return `${text.trimEnd()}\n\n---\n\nThis page mirrors [${page.url.replace("https://", "")}](${page.url}).\n`;
}

function readme(pages) {
	const groups = new Map();
	for (const page of pages) {
		const folder = page.path.includes("/") ? page.path.split("/")[0] : "getting-started";
		const heading = SECTIONS[folder] ?? folder.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());
		if (!groups.has(heading)) groups.set(heading, []);
		groups.get(heading).push(page);
	}

	const sections = [...groups]
		.map(([heading, list]) => {
			const items = list.map((p) => `- [${p.title}](${p.path})${p.description ? `: ${p.description.replace(/\.$/, "")}` : ""}`);
			return `### ${heading}\n\n${items.join("\n")}`;
		})
		.join("\n\n");

	return `# ChatFeatured docs

User documentation for [ChatFeatured](https://chatfeatured.com), the answer engine optimization (AEO) platform. ChatFeatured tracks how ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Copilot and Grok mention and cite your brand, shows which AI crawlers visit your site, and helps you change what the answers say.

This repo is a markdown copy of [docs.chatfeatured.com](https://docs.chatfeatured.com), synced every six hours. Each file covers one feature or integration: what it's for, how to set it up, and the errors people hit.

## Pages

${sections}

## Suggest a change

Open an issue, or a pull request against the page. The docs are written in ChatFeatured's main repository and this repo is generated from the live site, so we don't merge pull requests here: the next sync would overwrite them. When we take a change, we make it in the source and close the pull request, and it shows up here on the next sync.

For help with your account, email support@chatfeatured.com.

## License

The text is licensed under [CC BY 4.0](LICENSE). The ChatFeatured name and logo are not covered by the license.
`;
}

async function main() {
	const pages = parseIndex(await get(`${SITE}/llms.txt`));

	let previous = [];
	try {
		previous = JSON.parse(await readFile(MANIFEST, "utf8"));
	} catch {}

	// A broken or half-deployed site shouldn't wipe the mirror.
	if (pages.length === 0 || pages.length < previous.length * 0.8) {
		throw new Error(`llms.txt lists ${pages.length} pages, down from ${previous.length}. Not syncing.`);
	}

	for (const page of pages) {
		const markdown = await get(`${SITE}${page.sitePath}`);
		if (!/^\s*(>|#)/.test(markdown)) throw new Error(`${page.sitePath} didn't come back as markdown.`);
		await mkdir(dirname(page.path), { recursive: true });
		await writeFile(page.path, convert(markdown, page));
	}

	const current = new Set(pages.map((p) => p.path));
	for (const old of previous) {
		if (!current.has(old.path)) await rm(old.path, { force: true });
	}

	await writeFile("README.md", readme(pages));
	await writeFile(MANIFEST, `${JSON.stringify(pages.map(({ sitePath, ...rest }) => rest), null, "\t")}\n`);
	console.log(`Synced ${pages.length} pages.`);
}

main().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
