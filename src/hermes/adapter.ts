import path from "node:path";
import { hermesDir } from "../core/paths.js";
import { readText, writeText } from "../core/fs.js";
import { hermesMission, hermesReviewPrompt } from "./prompts.js";
import type { SocratesReceipt } from "../receipts/schema.js";

export async function writeHermesMission(): Promise<string> {
  const out = path.join(hermesDir(), "mission.md");
  await writeText(out, hermesMission());
  return out;
}

export async function writeHermesReviewPrompt(receiptPath: string): Promise<string> {
  const raw = await readText(receiptPath);
  const receipt = JSON.parse(raw) as SocratesReceipt;
  const out = path.join(hermesDir(), `review-${receipt.runId}.md`);
  await writeText(out, hermesReviewPrompt(receipt));
  return out;
}
