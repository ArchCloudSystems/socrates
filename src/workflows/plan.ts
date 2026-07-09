import { gitBranch, gitStatus } from "../observe/git.js";
import { observePackage } from "../observe/package.js";
import { runIdFromTask, writeReceipt } from "../receipts/writer.js";
import type { SocratesReceipt } from "../receipts/schema.js";

export async function createPlanReceipt(task: string): Promise<string> {
  const pkg = observePackage();
  const now = new Date().toISOString();
  const receipt: SocratesReceipt = {
    runId: runIdFromTask(task),
    task,
    mode: "propose",
    status: "planned",
    createdAt: now,
    summary: "Created a bounded propose-mode plan. No file mutations were performed.",
    observations: [
      `Git branch: ${gitBranch()}`,
      `Git status: ${gitStatus()}`,
      `Package manager: ${pkg.packageManager}`,
      `Available scripts: ${Object.keys(pkg.scripts).join(", ") || "none detected"}`
    ],
    plan: [
      "Validate current build state.",
      "Keep work public-safe and clean-room.",
      "Make bounded changes only after explicit approval.",
      "Write a receipt for any meaningful run.",
      "Generate a Hermes review prompt after receipt creation."
    ],
    files: [],
    commands: ["git status", "package.json script inspection"],
    verification: ["No code execution beyond observation in this alpha planning command."],
    lessons: ["Planning should produce evidence before action."],
    hermesReview: {
      status: "pending",
      summary: "Run `socrates hermes review --last` and paste the prompt into Hermes."
    },
    skillCandidates: ["receipt-truthfulness-review", "public-boundary-review"]
  };
  return writeReceipt(receipt);
}
