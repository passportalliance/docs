---
title: Specification Overview
description: High-level architecture and trust model for canonical APIS v2.1.
sidebar:
  order: 1
---

## APIS Scope

APIS v2.1 defines a portable, verifiable, and revocable identity model for autonomous software agents. It is runtime-agnostic, model-agnostic, and framework-agnostic.

Core objective: make it possible for any verifier to evaluate trust with consistent cryptographic and policy signals.

APIS v2.1 supersedes APIS v2.0. Version 2.1 adds confidential-compute attestation coverage, algorithmic tier resolution, provider-neutral DNS and HTTPS namespace proof, and a verified reference proof for a first minted passport while preserving the core APIS model.

## Canonical Citation

- Canonical DOI: [`10.5281/zenodo.21042004`](https://doi.org/10.5281/zenodo.21042004)
- Concept DOI: [`10.5281/zenodo.18820876`](https://doi.org/10.5281/zenodo.18820876)
- Local PDF artifact: [Passport Alliance Specification (APIS v2.0)](/spec/APIS-v2.0.pdf)
- Local implementation guide: [APIS v2.0 Implementation Guide](/spec/APIS-v2.0-Implementation-Guide.pdf)
- Published: June 29, 2026
- Status: Version 2.1 — Canonical — Supersedes APIS v2.0

## Domain Entities

APIS uses these primary entities:

1. `Issuer`: Mints and signs Agent Passport™ credentials.
2. `Principal`: Legally accountable human or organization.
3. `Delegate`: The software agent acting on behalf of the principal.
4. `Mandate`: Scoped authorization linking principal intent to delegate actions.
5. `Machine Passport`: Credential binding a machine or registered node to a trust anchor.
6. `Realm`: Issuer-controlled namespace for DIDs, keys, policies, and status endpoints.
7. `Agent Passport Profile`: Issuance recipe describing the class of agent a passport is meant to represent.
8. `Registry Entry`: Public verification record describing a profile, proof artifact, or minted passport reference.
9. `Proof Artifact`: Evidence package or signed/public artifact used to support verification.

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
| Tier 1.5 | Attestable vTPM | Cloud or virtualized environments with rooted attestation chains |
| Tier 2.0 | Confidential compute | SEV-SNP or TDX-class hardware-signed measurement environments |
| Tier 2.5 | DNSSEC-anchored identity | Domain-controlled agent identity where TPM access is unavailable |
| Tier 3 | Software HSM | Internal production or controlled environments |
| Tier 4 | Development/software key | Development, tests, and low-risk automation |

## Profiles and Registry Readiness

APIS now distinguishes between:

- the **minted Agent Passport™**, which is the signed credential bound to a specific delegate key
- the **Agent Passport Profile**, which is the reusable issuance recipe or class definition for that delegate type

This split makes it easier to build an eventual Agent Registry without confusing a class of agents with a single credential instance. See [Agent Passport Profiles](/spec/profiles/).

For vocabulary used across the publication surface, see [Vocabulary](/reference/vocabulary/).

## Compliance Baseline

An APIS v2.1-compliant Realm Issuer must support:

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
- [Agent Passport Profiles](/spec/profiles/)
- [Mandates](/spec/mandates/)
- [Three-Party Signatures](/spec/signatures/)
- [Federation Trust](/spec/federation/)
