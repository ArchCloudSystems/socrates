# Hermes Integration

Hermes is treated as a learning and memory companion, not a reckless executor.

## Initial integration model

1. Socrates creates a receipt.
2. `socrates hermes review --last` generates a Hermes review prompt.
3. Hermes reviews the receipt and proposes lessons or skills.
4. The user approves useful skills.
5. Socrates imports approved skills into `.socrates/skills/`.
6. AethosCore visualizes the receipt, review, and skill candidates.

## Hermes should do

- critique receipts
- identify repeated failures
- propose skills
- flag public/private boundary risks
- improve project canon

## Hermes should not do

- ask for secrets
- copy private AetherCore internals
- mutate production
- overclaim functionality
- make private ACS assumptions
