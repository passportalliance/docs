---
title: Delegates
description: Agent qualification and runtime obligations for APIS delegates.
sidebar:
  order: 4
---

## Delegate Definition

A delegate is a software agent that can prove key possession, accept mandates, sign actions, and be revoked.

Framework or hosting stack does not determine eligibility.

APIS v2.0 identity attaches to the credential chain and keypair, not to the model, harness, or hosting framework.

## Qualification Criteria

An agent qualifies for APIS issuance only if it can:

1. Generate and hold a cryptographic key pair.
2. Complete proof-of-possession challenge.
3. Consume and enforce scoped mandates.
4. Sign outbound actions or requests.
5. Accept revocation and stop acting under revoked credentials.

## Runtime Expectations

Delegates should expose:

- stable passport DID
- key identifier/fingerprint
- current active mandate identifiers
- current Machine Passport reference, when present
- declared trust tier
- signing evidence on protected actions

## Operational Constraints

Delegates must never treat capability claims as unlimited authority. Runtime policy must require valid mandate scope and freshness.

## Sub-Delegation

APIS supports two principal-selected modes:

- `no sub-delegation` (default)
- `controlled sub-delegation` with explicit depth and mandatory scope reduction

If a deployment does not implement safe sub-delegation controls, it should disable sub-delegation entirely.
