# Skill: Gate 0 Release Checklist

## Trigger
Use before declaring Socrates or AethosCore ready for Public Alpha Gate 0.

## Purpose
Turn a planned Gate 0 into a verified Gate 0 by requiring build, receipt, review, visualization, and public-boundary checks.

## Steps
1. Confirm the repo is on the intended branch.
2. Confirm the working tree is clean or all changes are intentional.
3. Run dependency install with frozen lockfile.
4. Run typecheck and build.
5. Generate or inspect a Socrates receipt.
6. Run Hermes review against the receipt.
7. Confirm skill candidates are captured.
8. Run public-boundary leak scans.
9. Confirm docs separate working, planned, and future features.
10. For AethosCore, confirm the example Socrates/Hermes receipt renders in the UI.

## Pass Condition
Gate 0 passes when the repo builds, the receipt/review path works, public-boundary scans are clean, and claims in docs match working behavior.

## Failure Modes
- Build fails.
- Receipt exists but lacks verification.
- Hermes review not captured or not acted on.
- Private references leak into public repo.
- UI claims live or hidden cognition instead of declared operational state.
