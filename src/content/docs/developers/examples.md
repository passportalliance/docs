---
title: Integration Examples
description: Common APIS integration patterns for issuers and verifiers.
sidebar:
  order: 3
---

## Pattern 1: API Gateway Verification

Use APIS verification inside your edge or gateway layer before forwarding requests to business services.

```text
Client -> Gateway -> APIS Verification -> Service
```

Checks at gateway:

- delegate signature
- principal mandate validity
- issuer trust and revocation status

## Pattern 2: Multi-Tenant SaaS

Assign each tenant a `realm_id` and tenant-specific trusted issuer policy.

Benefits:

- tenant-specific trust controls
- clean isolation for issuer acceptance rules
- explicit governance boundaries

## Pattern 3: High-Risk Actions

Require stronger runtime policy for actions like payments or infrastructure changes.

Example controls:

- short mandate TTL
- tighter rate/budget caps
- step-up principal approval

## Pattern 4: Incident Response Automation

When an issuer or delegate is compromised:

1. set issuer/passport status to suspended or revoked
2. increment `revocation_nonce`
3. flush verifier token/session caches
4. require re-issuance before restoring activity

## Pattern 5: Conformance in CI

Run APIS conformance checks on every release candidate for issuer software.

```bash
# example job sequence
run test-proof-of-possession.yaml
run test-revocation.yaml
run test-jwks.yaml
```
