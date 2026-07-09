# Security Policy

Socrates is public-safe by design.

## Default boundaries

- Do not commit `.env` files.
- Do not include API keys, tokens, private URLs, client data, infrastructure maps, private network configuration configs, private messaging integrations bot tokens, private productivity integrations/private productivity integrations tokens, or private private systems material.
- Do not claim production deployment support unless it is explicitly implemented and documented.
- Do not expose hidden chain-of-thought. Socrates records declared operational state only.

## Recommended pre-public scan

```bash
git status
grep -R "ghp_" . --exclude-dir=.git || true
grep -R "ANTHROPIC_API_KEY" . --exclude-dir=.git || true
grep -R "OPENAI_API_KEY" . --exclude-dir=.git || true
grep -R "GOOGLE_CLIENT" . --exclude-dir=.git || true
find . -name ".env*" -not -name ".env.example"
```

Use a dedicated secret scanner such as gitleaks before publishing.
