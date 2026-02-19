---
title: Principals
description: Accountability and authorization authority in APIS.
sidebar:
  order: 3
---

## Principal Role

A principal is the legally accountable entity for delegate behavior. Principals can be organizations or humans depending on policy context.

## Responsibilities

Principals are expected to:

- Approve delegate onboarding
- Issue or sign mandates defining scope
- Enforce risk and financial constraints
- Revoke delegate authority when needed

## Principal Identity Requirements

At minimum, implementations should track:

- `principal_id` (stable internal identifier)
- public key material for mandate signing
- policy domain (realm, business unit, or tenant)
- audit attribution metadata

## Principal-to-Delegate Binding

A delegate is valid only when:

1. Passport is active and issuer-trusted.
2. Principal relationship is known and current.
3. At least one active mandate authorizes requested action.

## Security Guidance

- Use dedicated signing keys for principals.
- Rotate principal keys under managed policy.
- Require stronger controls (MFA, approvals) for high-risk mandate issuance.
- Keep immutable records linking principal signatures to issued mandates.
