---
title: Federation Trust
description: Realm-local trust today, signed registry federation path for broader interoperability.
sidebar:
  order: 7
---

## v1 Trust Model

APIS v1 uses realm-local trust decisions.

Each realm maintains a `trusted_issuers` set with issuer IDs and key metadata. A credential is accepted only when:

- issuer signature is valid
- issuer is trusted in local policy
- passport status is active
- mandate policy permits requested action

## Registry-Assisted Federation

Passport Alliance governance adds a signed issuer registry that can be consumed by verifiers and mirrored by members.

Canonical endpoints:

- `GET /issuers.json`
- `GET /issuers.sig`

Verifiers validate signature using Alliance root key and then apply local tier policy.

## Tier-Aware Trust Policy

Example verifier policy:

```json
{
  "trusted_tiers": ["founding", "certified"],
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
