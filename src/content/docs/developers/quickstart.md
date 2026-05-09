---
title: Developer Quickstart
description: Provision APIS v2.0 passports, bind mandates, and verify signed actions.
sidebar:
  order: 1
---

## 5-Minute Flow

This quickstart covers the minimum APIS v2.0 integration path:

1. Select a realm and trust tier
2. Run APIS-APP `passport-init` to register machine and agent context
3. Sign issuer challenge with the agent private key
4. Mint Agent Passport™ and optional Machine Passport
5. Present passport-backed signed actions to a verifier

## Step 1: Start passport-init

```bash
passport-init provision \
  --issuer https://issuer.example.com \
  --realm example.com \
  --principal principal-123 \
  --agent-name invoice-agent-001 \
  --tier tier2_5-dnssec
```

`passport-init` is the APIS-APP client concept: an ACME-like provisioning flow for Machine Passports and Agent Passports. Implementations may expose equivalent API calls directly.

## Step 2: Complete Challenge

The issuer returns a nonce. The agent signs the nonce with the private key that will be bound to the Agent Passport.

```bash
curl -X POST https://issuer.example.com/v2/passport-init/challenge \
  -H "Content-Type: application/json" \
  -d @signed-challenge.json
```

The request includes `public_key`, `signed_nonce`, `realm`, `principal_id`, requested `trust_tier`, mandate context, and any TPM/vTPM/DNSSEC/software custody evidence.

## Step 3: Install Passports

The issuer returns a signed Agent Passport and, when applicable, a Machine Passport reference.

```bash
passport-init status --agent invoice-agent-001
```

The Agent Passport DID uses the realm-scoped format:

```text
did:passport:example.com:invoice-agent-001
```

## Step 4: Verify at Runtime

Verifier flow:

1. Resolve the `did:passport:[realm]:[uuid]`
2. Fetch issuer JWKS
3. Verify Agent Passport, Machine Passport, mandate, and action signatures
4. Verify trust tier evidence and credential chain
5. Check status and `revocation_nonce`
6. Enforce mandate scope

## Minimal Python Example

```python
from passport_sdk import PassportClient

client = PassportClient(
    token="<passport_or_access_token>",
    issuer_url="https://issuer.example.com"
)

result = client.verify_action(
    action="email.send",
    payload={"to": "ops@example.com", "subject": "APIS v2.0 test"},
    minimum_trust_tier="tier2_5-dnssec"
)

print(result)
```

## Next Steps

- [SDK and API Surface](/developers/sdk/)
- [Integration Examples](/developers/examples/)
- [Reference Downloads](/reference/downloads/)
