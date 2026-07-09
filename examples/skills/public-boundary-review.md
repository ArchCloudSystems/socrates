---
id: public-boundary-review
confidence: draft
---

# Skill: Public Boundary Review

## Trigger

Use before publishing, committing, or documenting public Socrates/AethosCore work.

## Purpose

Ensure public repos do not expose private ACS infrastructure, client context, secrets, or private system internals.

## Steps

1. Review changed files.
2. Search for API keys, tokens, private URLs, client names, and private infrastructure details.
3. Check README and docs for overclaims.
4. Confirm private systems are referenced only as inspiration, not dependency.
5. Record findings in the receipt.

## Boundaries

- Do not read or print `.env` values.
- Do not import private AetherCore source.
- Do not publish private receipts.

## Verification

- `pnpm build`
- grep token checks
- manual docs review

## Failure Modes

- Future features written as current features.
- Private ACS terms appearing without boundary explanation.
- Example data accidentally copied from private work.
