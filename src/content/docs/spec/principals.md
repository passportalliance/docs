---
title: Principals
description: Accountability and authorization authority in APIS.
sidebar:
  order: 3
---

## Principal Role

A principal is the legally accountable entity for delegate behavior. Principals can be organizations or humans depending on policy context.

In APIS v2.0, the principal grants a mandate to a delegate agent and remains the accountable authority for the agent's authorized actions.

## Responsibilities

Principals are expected to:

- Approve delegate onboarding
- Issue or sign mandates defining scope
- Enforce risk and financial constraints
- Revoke delegate authority when needed
- Select acceptable trust tiers for the agent's operating context

## Principal Identity Requirements

At minimum, implementations should track:

- `principal_id` (stable internal identifier)
- public key material for mandate signing
- policy domain (realm, business unit, or tenant)
- allowed trust tier for delegated actions
- audit attribution metadata

## Principal-to-Delegate Binding

A delegate is valid only when:

1. Passport™ is active and issuer-trusted.
2. Principal relationship is known and current.
3. At least one active mandate authorizes requested action.

## Security Guidance

- Use dedicated signing keys for principals.
- Rotate principal keys under managed policy.
- Require stronger controls (MFA, approvals) for high-risk mandate issuance.
- Keep immutable records linking principal signatures to issued mandates.
