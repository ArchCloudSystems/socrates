# Skill: Public Boundary Review

## Trigger
Use before committing or publishing public Socrates or AethosCore material.

## Purpose
Ensure public repo content remains clean-room and does not expose private ACS systems, client data, secrets, credentials, or infrastructure details.

## Steps
1. Inspect .env.example and confirm it contains placeholders only.
2. Confirm .env, real tokens, credentials, and private config files are ignored.
3. Scan committed and staged files for obvious secret patterns.
4. Scan for private ACS references that should not be in the public repo.
5. Confirm generated runtime receipts and Hermes review prompts are ignored unless intentionally sanitized as examples.
6. Verify public docs separate working features from planned features.

## Boundaries
- Do not copy private private systems, private private prototypes, private agents, private interfaces, client, private network configuration, private messaging integrations, private productivity integrations, private productivity integrations, or private executor integrations internals.
- Do not include real hostnames, tokens, keys, private paths, or client names.
- Do not publish generated local runtime state unless sanitized.

## Verification
Run a Git status check, a secret-pattern scan, and a private-reference scan before public release.

## Failure Modes
- .env.example contains real values.
- Runtime receipts contain private paths or secrets.
- Public docs reference private system internals as required.
- Public repo includes generated private review prompts.
