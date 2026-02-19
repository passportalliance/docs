---
title: Developer Quickstart
description: Register an agent, mint a passport, and verify signed actions.
sidebar:
  order: 1
---

## 5-Minute Flow

This quickstart covers the minimum integration path:

1. Request issuance nonce from issuer
2. Sign nonce with agent private key
3. Mint Agent Passport
4. Present passport-backed identity to a verifier

## Step 1: Request Nonce

```bash
curl -X POST https://issuer.example.com/v1/issuance/nonce \
  -H "Content-Type: application/json" \
  -d '{"principal_id":"principal-123","realm_id":"default"}'
```

## Step 2: Sign Nonce

Use your agent private key to sign the nonce payload.

## Step 3: Mint Passport

```bash
curl -X POST https://issuer.example.com/v1/passports \
  -H "Content-Type: application/json" \
  -d @passport-mint-request.json
```

`passport-mint-request.json` should include `public_key`, `signed_nonce`, principal context, and agent declaration fields.

## Step 4: Verify at Runtime

Verifier flow:

1. Resolve issuer metadata
2. Fetch issuer JWKS
3. Verify passport and action signatures
4. Check status and `revocation_nonce`
5. Enforce mandate scope

## Minimal Python Example

```python
from passport_sdk import PassportClient

client = PassportClient(
    token="<passport_or_access_token>",
    issuer_url="https://issuer.example.com"
)

result = client.verify_action(
    action="email.send",
    payload={"to": "ops@example.com", "subject": "APIS test"}
)

print(result)
```

## Next Steps

- [SDK and API Surface](/developers/sdk/)
- [Integration Examples](/developers/examples/)
- [Reference Downloads](/reference/downloads/)
