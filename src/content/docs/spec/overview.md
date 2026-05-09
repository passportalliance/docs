---
title: Specification Overview
description: High-level architecture and trust model for canonical APIS v2.0.
sidebar:
  order: 1
---

## APIS Scope

APIS v2.0 defines a portable, verifiable, and revocable identity model for autonomous software agents. It is runtime-agnostic, model-agnostic, and framework-agnostic.

Core objective: make it possible for any verifier to evaluate trust with consistent cryptographic and policy signals.

APIS v2.0 supersedes APIS v1.0. Version 2.0 adds realm-scoped DIDs, Machine Passports, hardware and DNS trust anchors, APIS-APP automated provisioning, and a formal trust-tier model.

## Canonical Citation

- Canonical spec PDF: [Passport Alliance Specification (APIS v2.0)](/spec/APIS-v2.0.pdf)
- Implementation guide PDF: [APIS v2.0 Implementation Guide](/spec/APIS-v2.0-Implementation-Guide.pdf)
- DOI: [`10.5281/zenodo.18820877`](https://doi.org/10.5281/zenodo.18820877)
- Published: May 4, 2026
- Status: Version 2.0 — Canonical — Supersedes APIS v1.0

## Domain Entities

APIS uses these primary entities:

1. `Issuer`: Mints and signs Agent Passport™ credentials.
2. `Principal`: Legally accountable human or organization.
3. `Delegate`: The software agent acting on behalf of the principal.
4. `Mandate`: Scoped authorization linking principal intent to delegate actions.
5. `Machine Passport`: Credential binding a machine or registered node to a trust anchor.
6. `Realm`: Issuer-controlled namespace for DIDs, keys, policies, and status endpoints.

## Three-Layer Identity Model

1. Passport™ layer: durable identity (`did:passport:[realm]:[uuid]`).
2. Memory layer: continuity anchor (`memory_anchor_id`).
3. Runtime layer: signed actions under mandate policy.

APIS rule: Passport™ credentials never store memory itself, but always link to memory continuity via anchor.

## Verification Flow

A verifier should execute this sequence:

1. Resolve the `did:passport:[realm]:[uuid]` to issuer and passport metadata.
2. Fetch issuer keys from JWKS.
3. Validate Agent Passport, Machine Passport, mandate, and signed action signatures.
4. Verify the credential chain and recorded trust tier.
5. Check current status and `revocation_nonce`.
6. Enforce mandate scope for the requested action.

## Trust Tiers

| Tier | Anchor | Intended Use |
| --- | --- | --- |
| Tier 1 | Physical TPM 2.0 | Highest-assurance machine-bound identity |
| Tier 2 | Virtual TPM | Cloud or virtualized environments with platform attestation |
| Tier 2.5 | DNSSEC-anchored identity | Domain-controlled agent identity where TPM access is unavailable |
| Tier 3 | Software HSM | Internal production or controlled environments |
| Tier 4 | Development/software key | Development, tests, and low-risk automation |

## Compliance Baseline

An APIS v2.0-compliant Realm Issuer must support:

- Proof-of-possession challenge at issuance
- Public JWKS publication
- Alliance root key publication at `/.well-known/alliance-root.jwk`
- Passport™ status resolution endpoint
- Revocation nonce semantics
- APIS-APP `passport-init`, `passport-renew`, and `passport-revoke` provisioning concepts
- Agent Passport and Machine Passport lifecycle handling
- Immutable audit logging of issuance and lifecycle events

Continue with:

- [Agent Passport™](/spec/agent-passport/)
- [Mandates](/spec/mandates/)
- [Three-Party Signatures](/spec/signatures/)
- [Federation Trust](/spec/federation/)
