import fs from "node:fs";
import path from "node:path";

export type PackageObservation = {
  packageManager: "pnpm" | "npm" | "yarn" | "bun" | "unknown";
  scripts: Record<string, string>;
};

export function observePackage(root = process.cwd()): PackageObservation {
  let packageManager: PackageObservation["packageManager"] = "unknown";
  if (fs.existsSync(path.join(root, "pnpm-lock.yaml"))) packageManager = "pnpm";
  else if (fs.existsSync(path.join(root, "package-lock.json"))) packageManager = "npm";
  else if (fs.existsSync(path.join(root, "yarn.lock"))) packageManager = "yarn";
  else if (fs.existsSync(path.join(root, "bun.lockb"))) packageManager = "bun";

  const pkgPath = path.join(root, "package.json");
  let scripts: Record<string, string> = {};
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8")) as { scripts?: Record<string, string> };
    scripts = pkg.scripts ?? {};
  }
  return { packageManager, scripts };
}
