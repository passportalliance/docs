---
title: Mandates
description: Scoped authorization model for principal-to-delegate delegation.
sidebar:
  order: 5
---

## Mandate Purpose

A mandate is a principal-signed authorization describing what a delegate can do, in what scope, and for how long.

Mandates prevent blank-check agent access.

APIS v2.0 treats the principal / mandate / delegate relationship as the core legal and technical authorization model.

## Minimum Mandate Fields

| Field | Description |
| --- | --- |
| `mandate_id` | Unique identifier |
| `principal_id` | Granting authority |
| `delegate_did` | Authorized delegate |
| `realm` | Issuing realm for the delegate DID |
| `scope` | Allowed actions/capabilities |
| `minimum_trust_tier` | Optional verifier policy floor for machine or key custody |
| `issued_at` | Creation timestamp |
| `expires_at` | Expiration timestamp |
| `policy` | Runtime limits and enforcement hints |
| `signature` | Principal cryptographic signature |

## Scope Design

Scopes should be explicit and narrow, for example:

- `email.send`
- `calendar.read`
- `payments.submit` (with threshold)

Avoid wildcard scopes in production environments.

## Policy Extensions

Mandates may include rate, budget, and environment constraints:

```json
{
  "requests_per_minute": 120,
  "max_daily_actions": 1000,
  "budget_cap": "$500",
  "environments": ["prod", "staging"]
}
```

## Verification Rules

A verifier should reject requests if:

- mandate is expired
- principal signature is invalid
- requested action is outside scope
- delegate DID does not match mandate binding

## Lifecycle

Mandates can be rotated, suspended, or revoked independently of passport lifecycle, depending on risk posture.
