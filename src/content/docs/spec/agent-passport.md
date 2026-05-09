---
title: Agent Passport™ Credential
description: APIS v2.0 Agent Passport and Machine Passport credential structure, issuance requirements, and lifecycle semantics.
sidebar:
  order: 2
---

## APIS-001

The Agent Passport™ is the canonical credential for delegate identity in APIS v2.0. It is paired with a Machine Passport when the agent key is anchored to a machine, virtual machine, DNSSEC domain, software HSM, or development key.

- Status: Version 2.0 — Canonical — Supersedes APIS v1.0
- DID format: `did:passport:[realm]:[uuid]`
- Signature algorithm: Ed25519 recommended (P-256 acceptable)

## Required Claims

| Claim | Description |
| --- | --- |
| `passport_id` | UUID of the credential record |
| `passport_did` | DID identifier in `did:passport` namespace |
| `issuer_id` | Issuer identity |
| `realm` | Issuer realm namespace |
| `issued_at` | RFC3339 issuance timestamp |
| `status` | `active`, `suspended`, or `revoked` |
| `public_key` | Agent JWK used for cryptographic binding |
| `key_fingerprint` | `SHA-256(public_key)` |
| `principal_id` | Principal accountable for delegate actions |
| `mandate_id` | Principal authorization binding this delegate to scoped authority |
| `machine_passport_id` | Machine Passport binding when applicable |
| `trust_tier` | `tier1-tpm`, `tier2-vtpm`, `tier2_5-dnssec`, `tier3-software-hsm`, or `tier4-development` |
| `memory_anchor_id` | Continuity anchor identifier |
| `revocation_nonce` | Monotonic nonce for instant token invalidation |

## Optional Claims

- `expires_at`
- `delegate_id`
- `software_id`
- `software_version`
- `framework`
- `model_id`
- `hardware_attestation`
- `dnssec_record`
- issuer-defined extension claims

## Issuance Requirements

A valid issuance flow must include:

1. Ownership context: `realm`, `principal_id`, optional `owner_user_id`.
2. Key binding: request includes agent public key.
3. Proof of possession:
   1. Issuer returns random nonce.
   2. Agent signs nonce with private key.
   3. Issuer verifies signature before minting.
4. Trust-tier evidence:
   1. Tier 1: TPM quote and certificate chain.
   2. Tier 2: vTPM or platform attestation.
   3. Tier 2.5: DNSSEC-signed TXT record binding key fingerprint to the realm.
   4. Tier 3/4: software custody declaration.

No proof-of-possession means no passport.

## Machine Passport Rule

A Machine Passport binds a registered machine, VM, DNSSEC-controlled domain, software HSM, or development key environment to a principal and trust tier. Agent Passports may reference `machine_passport_id` so verifiers can evaluate the machine trust anchor before accepting a signed action.

## Memory Anchor Rule

Every passport must have `memory_anchor_id`.

- If provided by requester: treat as opaque value.
- If missing: issuer computes `SHA-256(public_key)`.

## Revocation Semantics

- Passport™ starts with `revocation_nonce = 0`.
- Any revocation event increments nonce.
- Existing tokens become invalid when nonce changes.

## Minimal Example

```json
{
  "passport_id": "550e8400-e29b-41d4-a716-446655440000",
  "passport_did": "did:passport:aetherpro.us:550e8400-e29b-41d4-a716-446655440000",
  "issuer_id": "aetherpro-technologies",
  "realm": "aetherpro.us",
  "issued_at": "2026-02-08T00:00:00Z",
  "status": "active",
  "public_key": {
    "kty": "OKP",
    "crv": "Ed25519",
    "x": "base64url-encoded-public-key"
  },
  "key_fingerprint": "sha256:...",
  "principal_id": "principal-12345",
  "mandate_id": "mandate-789",
  "machine_passport_id": "machine-passport-123",
  "trust_tier": "tier1-tpm",
  "memory_anchor_id": "anchor-abcdef",
  "revocation_nonce": 0
}
```
