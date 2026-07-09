import path from "node:path";
import { receiptsDir } from "../core/paths.js";
import { exists, readText } from "../core/fs.js";

export async function latestReceiptPath(): Promise<string | null> {
  const latest = path.join(receiptsDir(), "latest.txt");
  if (!(await exists(latest))) return null;
  return (await readText(latest)).trim();
}
