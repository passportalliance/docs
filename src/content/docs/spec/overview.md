---
title: Specification Overview
description: High-level architecture and trust model for APIS v1.
sidebar:
  order: 1
---

## APIS Scope

APIS v1 defines a portable, verifiable, and revocable identity model for autonomous software agents. It is runtime-agnostic and model-agnostic.

Core objective: make it possible for any verifier to evaluate trust with consistent cryptographic and policy signals.

## Domain Entities

APIS uses four primary entities:

1. `Issuer`: Mints and signs Agent Passports.
2. `Principal`: Legally accountable human or organization.
3. `Delegate`: The software agent acting on behalf of the principal.
4. `Mandate`: Scoped authorization linking principal intent to delegate actions.

## Three-Layer Identity Model

1. Passport layer: durable identity (`did:passport:<uuid>`).
2. Memory layer: continuity anchor (`memory_anchor_id`).
3. Runtime layer: signed actions under mandate policy.

APIS rule: Passport credentials never store memory itself, but always link to memory continuity via anchor.

## Verification Flow

A verifier should execute this sequence:

1. Resolve issuer metadata from `/.well-known/openid-configuration`.
2. Fetch issuer keys from JWKS.
3. Validate JWT signature and key fingerprint.
4. Check current `revocation_nonce` and status.
5. Enforce mandate scope for requested action.

## Compliance Baseline

An APIS v1-compliant issuer must support:

- Proof-of-possession challenge at issuance
- Public JWKS publication
- Passport status resolution endpoint
- Revocation nonce semantics
- Immutable audit logging of issuance and lifecycle events

Continue with:

- [Agent Passport](/spec/agent-passport/)
- [Mandates](/spec/mandates/)
- [Three-Party Signatures](/spec/signatures/)
- [Federation Trust](/spec/federation/)
