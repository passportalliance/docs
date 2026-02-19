---
title: Agent Passport Credential
description: APIS-001 credential structure, issuance requirements, and lifecycle semantics.
sidebar:
  order: 2
---

## APIS-001

The Agent Passport is the canonical credential for delegate identity in APIS v1.

- Status: Canonical draft
- DID format: `did:passport:<uuid>`
- Signature algorithm: Ed25519 recommended (P-256 acceptable)

## Required Claims

| Claim | Description |
| --- | --- |
| `passport_id` | UUID of the credential record |
| `passport_did` | DID identifier in `did:passport` namespace |
| `issuer_id` | Issuer identity |
| `issued_at` | RFC3339 issuance timestamp |
| `status` | `active`, `suspended`, or `revoked` |
| `public_key` | Agent JWK used for cryptographic binding |
| `key_fingerprint` | `SHA-256(public_key)` |
| `principal_id` | Principal accountable for delegate actions |
| `memory_anchor_id` | Continuity anchor identifier |
| `revocation_nonce` | Monotonic nonce for instant token invalidation |

## Optional Claims

- `expires_at`
- `delegate_id`
- `software_id`
- `software_version`
- issuer-defined extension claims

## Issuance Requirements

A valid issuance flow must include:

1. Ownership context: `realm_id`, `principal_id`, optional `owner_user_id`.
2. Key binding: request includes agent public key.
3. Proof of possession:
   1. Issuer returns random nonce.
   2. Agent signs nonce with private key.
   3. Issuer verifies signature before minting.

No proof-of-possession means no passport.

## Memory Anchor Rule

Every passport must have `memory_anchor_id`.

- If provided by requester: treat as opaque value.
- If missing: issuer computes `SHA-256(public_key)`.

## Revocation Semantics

- Passport starts with `revocation_nonce = 0`.
- Any revocation event increments nonce.
- Existing tokens become invalid when nonce changes.

## Minimal Example

```json
{
  "passport_id": "550e8400-e29b-41d4-a716-446655440000",
  "passport_did": "did:passport:550e8400-e29b-41d4-a716-446655440000",
  "issuer_id": "aetherpro-technologies",
  "issued_at": "2026-02-08T00:00:00Z",
  "status": "active",
  "public_key": {
    "kty": "OKP",
    "crv": "Ed25519",
    "x": "base64url-encoded-public-key"
  },
  "key_fingerprint": "sha256:...",
  "principal_id": "principal-12345",
  "memory_anchor_id": "anchor-abcdef",
  "revocation_nonce": 0
}
```
