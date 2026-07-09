#!/usr/bin/env node
import { Command } from "commander";
import fs from "node:fs/promises";
import path from "node:path";
import { ensureDir, writeText } from "../core/fs.js";
import { socratesDir } from "../core/paths.js";
import { gitBranch, gitStatus } from "../observe/git.js";
import { observePackage } from "../observe/package.js";
import { createPlanReceipt } from "../workflows/plan.js";
import { latestReceiptPath } from "../tools/latest-receipt.js";
import { writeHermesMission, writeHermesReviewPrompt } from "../hermes/adapter.js";

const program = new Command();
program.name("socrates").description("Hermes-native terminal workbench for governed, receipt-driven software work.").version("0.1.0-alpha.0");

program.command("init").description("Initialize .socrates project files.").action(async () => {
  const dir = socratesDir();
  await ensureDir(dir);
  await ensureDir(path.join(dir, "receipts"));
  await ensureDir(path.join(dir, "skills"));
  await ensureDir(path.join(dir, "hermes"));
  await writeText(path.join(dir, "config.yaml"), `project:\n  name: ${path.basename(process.cwd())}\nworkflow:\n  default_mode: propose\n  receipt_required: true\nhermes:\n  enabled: true\n  mode: companion\n`);
  await writeText(path.join(dir, "policy.yaml"), `mode: propose\nforbidden_paths:\n  - .env\n  - .env.*\n  - .git/**\n  - '**/secrets/**'\n`);
  await writeText(path.join(dir, "canon.md"), `# Project Canon\n\nPublic-safe Socrates project.\n`);
  await writeText(path.join(dir, "preferences.md"), `# Preferences\n\n- Prefer truthful receipts over fake success.\n- Prefer bounded changes over broad rewrites.\n`);
  const mission = await writeHermesMission();
  console.log(`Initialized ${dir}`);
  console.log(`Hermes mission: ${mission}`);
});

program.command("observe").description("Observe project state without modifying files.").action(() => {
  const pkg = observePackage();
  console.log("Socrates observation");
  console.log(`Branch: ${gitBranch()}`);
  console.log(`Git status: ${gitStatus()}`);
  console.log(`Package manager: ${pkg.packageManager}`);
  console.log(`Scripts: ${Object.keys(pkg.scripts).join(", ") || "none detected"}`);
});

program.command("doctor").description("Run alpha readiness checks.").action(async () => {
  const pkg = observePackage();
  console.log("Socrates doctor");
  console.log(`Node package scripts detected: ${Object.keys(pkg.scripts).length}`);
  console.log("Security reminder: run grep/gitleaks checks before publishing.");
});

program.command("plan").argument("<task>").description("Create a propose-mode plan receipt.").action(async (task: string) => {
  const receipt = await createPlanReceipt(task);
  console.log(`Plan receipt written: ${receipt}`);
  console.log("Next: pnpm dev hermes review --last");
});

program.command("receipt").option("--last", "Show latest receipt path").description("Inspect receipts.").action(async (opts: { last?: boolean }) => {
  if (!opts.last) {
    console.log("Use --last for the latest receipt in this alpha.");
    return;
  }
  const latest = await latestReceiptPath();
  if (!latest) {
    console.log("No latest receipt found. Run `socrates plan \"task\"` first.");
    return;
  }
  console.log(latest);
  console.log(await fs.readFile(latest, "utf8"));
});

const hermes = program.command("hermes").description("Hermes companion helpers.");

hermes.command("mission").description("Write Hermes mission file.").action(async () => {
  const out = await writeHermesMission();
  console.log(`Hermes mission written: ${out}`);
});

hermes.command("review").option("--last", "Generate review prompt for latest receipt").description("Generate Hermes review prompt.").action(async (opts: { last?: boolean }) => {
  if (!opts.last) {
    console.log("Use --last for the latest receipt in this alpha.");
    return;
  }
  const latest = await latestReceiptPath();
  if (!latest) {
    console.log("No latest receipt found. Run `socrates plan \"task\"` first.");
    return;
  }
  const out = await writeHermesReviewPrompt(latest);
  console.log(`Hermes review prompt written: ${out}`);
  console.log("Paste that file into Hermes for review.");
});

program.parseAsync();
