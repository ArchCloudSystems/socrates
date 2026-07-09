# Skill: Receipt Truthfulness Review

## Trigger
Use when reviewing a Socrates receipt before commit, release, or public sharing.

## Purpose
Confirm that a receipt's claims match the evidence captured in the run.

## Steps
1. Check that mode, status, summary, files, and verification agree.
2. Confirm planned work is not described as completed work.
3. Confirm empty files means no file mutations were claimed.
4. Confirm commands listed as run include reproducible evidence.
5. Flag any claim that could be mistaken for verified success.

## Boundaries
- Do not infer success from a plan.
- Do not treat available scripts as passing scripts.
- Do not claim a build passed unless a build command actually ran and exited successfully.
- Do not expose hidden chain-of-thought.

## Verification
A receipt passes when its claims are falsifiable, evidence-backed, and internally consistent.

## Failure Modes
- Plan verbs imply completed action.
- Verification is prose-only.
- Build/test success is claimed without command output.
- Files were changed but not listed.
- Status says success while verification is missing or failed.
