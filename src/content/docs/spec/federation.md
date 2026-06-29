---
title: Federation Trust
description: Realm-scoped APIS v2.1 trust, signed registry federation, and verifier policy.
sidebar:
  order: 7
---

## APIS v2.1 Trust Model

APIS v2.1 uses realm-scoped trust decisions. A realm is the issuer-controlled namespace in `did:passport:[realm]:[uuid]`.

Each realm maintains a `trusted_issuers` set with issuer IDs and key metadata. A credential is accepted only when:

- issuer signature is valid
- issuer is trusted in local policy
- passport status is active
- Machine Passport and trust-tier evidence meet local policy
- mandate policy permits requested action

## Registry-Assisted Federation

Passport Alliance™ governance adds a signed issuer registry that can be consumed by verifiers and mirrored by members.

Canonical endpoints:

- `GET /issuers.json`
- `GET /issuers.sig`

Verifiers validate signature using Alliance root key and then apply local tier policy.

## Tier-Aware Trust Policy

Example verifier policy:

```json
{
  "trusted_issuer_levels": ["founding", "certified"],
  "minimum_agent_trust_tier": "tier2_5-dnssec",
  "allow_registered_in": ["sandbox"]
}
```

## Compromise Handling

If an issuer is compromised:

1. Registry updates issuer status to `suspended`.
2. Updated registry is signed and published.
3. Verifiers reject newly checked passports from that issuer.

## Design Principle

Anyone can implement APIS.

Alliance recognition controls ecosystem trust signaling, not protocol access.
