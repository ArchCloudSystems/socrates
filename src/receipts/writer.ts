import path from "node:path";
import { receiptsDir } from "../core/paths.js";
import { writeText, ensureDir } from "../core/fs.js";
import type { SocratesReceipt } from "./schema.js";

export function runIdFromTask(task: string): string {
  const slug = task.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48) || "run";
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${stamp}-${slug}`;
}

export async function writeReceipt(receipt: SocratesReceipt): Promise<string> {
  const day = receipt.createdAt.slice(0, 10);
  const dir = path.join(receiptsDir(), day, receipt.runId);
  await ensureDir(dir);
  const jsonPath = path.join(dir, "receipt.json");
  const mdPath = path.join(dir, "receipt.md");
  await writeText(jsonPath, JSON.stringify(receipt, null, 2));
  await writeText(mdPath, renderReceiptMarkdown(receipt));
  await writeText(path.join(receiptsDir(), "latest.txt"), jsonPath);
  return jsonPath;
}

export function renderReceiptMarkdown(r: SocratesReceipt): string {
  const list = (items: string[]) => items.length ? items.map((i) => `- ${i}`).join("\n") : "- none recorded";
  return `# Socrates Receipt\n\n## Task\n${r.task}\n\n## Mode\n${r.mode}\n\n## Status\n${r.status}\n\n## Summary\n${r.summary}\n\n## Observations\n${list(r.observations)}\n\n## Plan\n${list(r.plan)}\n\n## Files\n${list(r.files)}\n\n## Commands\n${list(r.commands)}\n\n## Verification\n${list(r.verification)}\n\n## Lessons\n${list(r.lessons)}\n\n## Hermes Review\n${r.hermesReview.summary}\n\n## Skill Candidates\n${list(r.skillCandidates)}\n`;
}
