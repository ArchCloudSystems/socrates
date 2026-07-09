import { execFileSync } from "node:child_process";

export function gitStatus(): string {
  try {
    return execFileSync("git", ["status", "--short"], { encoding: "utf8" }).trim() || "clean or not a git repo with no changes shown";
  } catch {
    return "git status unavailable";
  }
}

export function gitBranch(): string {
  try {
    return execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim() || "unknown";
  } catch {
    return "unknown";
  }
}
