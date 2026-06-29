---
title: APIS v2.1 Documentation
description: Canonical APIS v2.1 documentation for verifiable AI agent identity, trust anchors, passport profiles, mandates, verification, and revocation.
template: splash
head: []
hero:
  tagline: Passport Alliance™ defines APIS v2.1, the open Agent Passport Issuance Standard for trustworthy AI agent identity, delegation, and registry-ready profiles.
  actions:
    - text: Read the Specification
      link: /spec/overview/
      icon: right-arrow
      variant: primary
    - text: View Agent Registry
      link: /registry/
      icon: external
    - text: Issuer Requirements
      link: /issuers/requirements/
      icon: external
---

## Why Passport Alliance™

Autonomous software agents can already call APIs, move money, and operate infrastructure. APIS v2.1 establishes a common trust language for this reality:

- Who the agent is
- What profile or class it was issued under
- Who authorized it
- What the authorization scope is
- How trust can be revoked immediately

## Three Pillars

- **Identity**: Realm-scoped Agent Passport™ credentials (`did:passport:[realm]:[uuid]`) cryptographically bound to agent keys.
- **Authorization**: Principals grant scoped, time-bound mandates to delegates instead of broad standing access.
- **Accountability**: Issuer, principal, and delegate signatures provide verifiable chain-of-custody for agent actions.
- **Trust Anchors**: Machine Passports and trust tiers identify whether the agent key is anchored in physical TPM 2.0, attestable vTPM, confidential-compute evidence, DNSSEC or HTTPS namespace proof, software HSM, or development software keys.

## What You Can Do Here

- **Understand APIS v2.1**: Start with [Specification Overview](/spec/overview/) and drill into passports, profiles, mandates, signatures, trust tiers, and federation trust.
- **Become an Issuer**: Review [Issuer Requirements](/issuers/requirements/) and [Compliance](/issuers/compliance/) for certification and test expectations.
- **Integrate as a Verifier**: Use [Developer Quickstart](/developers/quickstart/) and [Reference Downloads](/reference/downloads/) to validate and enforce APIS.
- **Plan a registry**: Use [Agent Passport Profiles](/spec/profiles/) to model issuable agent classes before publishing future agent registry entries.

## Publication Surfaces

- **APIS v2.1**: The canonical publication chain is anchored by DOI [`10.5281/zenodo.21042004`](https://doi.org/10.5281/zenodo.21042004).
- **Agent Passport Profiles**: Public profile definitions describe the issuance class for agents before or alongside minting.
- **Agent Registry**: This site publishes static registry entries and proof records today, with room for a future dynamic registry service.
- **Herman Reference Proof**: See the first verified APIS v2.1 minted passport reference proof at [Herman Reference Proof](/registry/herman-reference-proof/).
- **Faraday Operator Profile**: See the pending operator profile at [Faraday Operator Profile](/registry/faraday-operator-profile/).

## Core Vocabulary

- **Principal**: Issuing or owning legal or organizational identity accountable for the agent and its authorizations.
- **Delegate**: Scoped authority granted by a principal to a software actor.
- **Agent Passport Profile**: Issuance recipe or credential class definition.
- **Agent Passport™**: Minted credential instance bound to a concrete agent key.
- **Registry Entry**: Public verification record that can point to a profile, proof artifact, or minted passport reference.
- **Proof Artifact**: Evidence package, DOI record, signed artifact, or reference proof used to support verification.

## Project Status

- APIS v2.1 specification: Canonical publication, published June 29, 2026
- Status: Version 2.1 — Canonical — Supersedes APIS v2.0
- Governance model: Passport Alliance governance, Realm Issuers, and root trust anchor model documented
- Conformance tests: Initial baseline published in this repository
- Registry model: Signed, mirrorable issuer registry design defined
- Profile model: Agent Passport Profile documented as the issuance recipe for future registry use
- Reference proof: Herman, the Hermes Agent, is recorded as the first verified minted Agent Passport reference proof for APIS v2.1
- DOI record: [`10.5281/zenodo.21042004`](https://doi.org/10.5281/zenodo.21042004)
- Concept DOI: [`10.5281/zenodo.18820876`](https://doi.org/10.5281/zenodo.18820876)
- Public website: [`passportalliance.org`](https://passportalliance.org)

For source materials, see the repository directories `SPEC/`, `GOVERNANCE/`, and `TESTS/`.

## Stewardship and Contact

Passport Alliance™ was created by **Cory Gibson**, Founder, CEO, and CTO of **AetherPro Technologies**.

Initial APIS and Passport™ work began with the Passport reference implementation and Legal-Based Access Control (LBAC) framework. APIS v2.1 is now presented as a standards-oriented trust framework for broader issuer, developer, verifier, and governance participation.

- Contributor and partnership inquiries: [partnerships@aetherpro.tech](mailto:partnerships@aetherpro.tech)
- Issuer onboarding and operational inquiries: [operations@aetherpro.us](mailto:operations@aetherpro.us)

## Trademark Notice

Passport™, Agent Passport™, and Passport Alliance™ are trademarks of AetherPro Technologies LLC.
