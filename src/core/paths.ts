import path from "node:path";
import process from "node:process";

export function projectRoot(): string {
  return process.cwd();
}

export function socratesDir(root = projectRoot()): string {
  return path.join(root, ".socrates");
}

export function receiptsDir(root = projectRoot()): string {
  return path.join(socratesDir(root), "receipts");
}

export function hermesDir(root = projectRoot()): string {
  return path.join(socratesDir(root), "hermes");
}
