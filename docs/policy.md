# Policy Model

Socrates starts from least privilege.

Default mode: `propose`.

Forbidden by default:

- `.env`
- `.env.*`
- `.git/**`
- `**/secrets/**`
- credentials
- production deploy commands
- force push
- destructive shell commands

Policy should be explicit, local, and visible.
