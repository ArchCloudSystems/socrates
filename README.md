# Socrates

Socrates is a Hermes-native, terminal-first workbench for governed, receipt-driven software work.

It is the public clean-room expression of an ArchCloudSystems development method: observe real project state, plan bounded work, act inside policy, verify with tests, write receipts, reflect on what happened, and turn repeated lessons into skills.

Socrates is designed to work beside Hermes as a learning and skill companion, while remaining useful as a standalone local CLI.

## Product loop

```text
observe → plan → act → test → reflect → receipt → skillize
```

## Relationship to AethosCore

AethosCore is the public visual Agent OS foundation and J-space UI. Socrates produces structured work state and receipts. AethosCore visualizes those receipts, Hermes reviews, lessons, policies, and skill candidates.

## Relationship to private ACS systems

Socrates is public and clean-room. It does not include private AetherCore, CAILEAN, Ailee, ACSCrew, client data, secrets, WireGuard, Telegram, Gmail, Calendar, or Pi executor internals.

Private ACS systems may inspire the philosophy, but this repo must stand alone.

## Current alpha commands

```bash
pnpm install
pnpm build
pnpm dev init
pnpm dev observe
pnpm dev plan "Prepare Gate 0 public alpha"
pnpm dev receipt --last
pnpm dev hermes mission
pnpm dev hermes review --last
```

## Gate 0 definition

Gate 0 is reached when:

- Socrates creates honest structured work state.
- Hermes reviews that state and proposes skills.
- AethosCore visualizes the receipt/review/skill loop.
- The repo builds locally.
- No private ACS material is present.

## What Socrates does not claim yet

- It does not claim full autonomous coding.
- It does not expose hidden model chain-of-thought.
- It does not include private ACS execution lanes.
- It does not run production deploys.
- It does not read secrets by default.

## Why this exists

AI coding tools are powerful but often forgetful, opaque, and reckless. Socrates aims to make agent-assisted development accountable, repeatable, and cumulative.

Socrates does the work discipline. Hermes helps the work learn. AethosCore shows the work.
