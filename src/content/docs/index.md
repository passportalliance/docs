---
title: APIS v2.0 Documentation
description: Canonical APIS v2.0 documentation for verifiable AI agent identity, trust anchors, mandates, verification, and revocation.
template: splash
head: []
hero:
  tagline: Passport Alliance™ defines APIS v2.0, the open Agent Passport Issuance Standard for trustworthy AI agent identity and delegation.
  actions:
    - text: Read the Specification
      link: /spec/overview/
      icon: right-arrow
      variant: primary
    - text: Issuer Requirements
      link: /issuers/requirements/
      icon: external
---

## Why Passport Alliance™

Autonomous software agents can already call APIs, move money, and operate infrastructure. APIS v2.0 establishes a common trust language for this reality:

- Who the agent is
- Who authorized it
- What the authorization scope is
- How trust can be revoked immediately

## Three Pillars

- **Identity**: Realm-scoped Agent Passport™ credentials (`did:passport:[realm]:[uuid]`) cryptographically bound to agent keys.
- **Authorization**: Principals grant scoped, time-bound mandates to delegates instead of broad standing access.
- **Accountability**: Issuer, principal, and delegate signatures provide verifiable chain-of-custody for agent actions.
- **Trust Anchors**: Machine Passports and trust tiers identify whether the agent key is anchored in physical TPM 2.0, vTPM, DNSSEC, software HSM, or development software keys.

## What You Can Do Here

- **Understand APIS v2.0**: Start with [Specification Overview](/spec/overview/) and drill into passports, mandates, signatures, trust tiers, and federation trust.
- **Become an Issuer**: Review [Issuer Requirements](/issuers/requirements/) and [Compliance](/issuers/compliance/) for certification and test expectations.
- **Integrate as a Verifier**: Use [Developer Quickstart](/developers/quickstart/) and [Reference Downloads](/reference/downloads/) to validate and enforce APIS.

## Project Status

- APIS v2.0 specification: Canonical publication, published May 4, 2026
- Status: Version 2.0 — Canonical — Supersedes APIS v1.0
- Governance model: Passport Alliance governance, Realm Issuers, and root trust anchor model documented
- Conformance tests: Initial baseline published in this repository
- Registry model: Signed, mirrorable issuer registry design defined
- DOI record: [`10.5281/zenodo.18820877`](https://doi.org/10.5281/zenodo.18820877)
- Public website: [`passportalliance.org`](https://passportalliance.org)

For source materials, see the repository directories `SPEC/`, `GOVERNANCE/`, and `TESTS/`.

## Stewardship and Contact

Passport Alliance™ was created by **Cory Gibson**, Founder, CEO, and CTO of **AetherPro Technologies**.

Initial APIS and Passport™ work began with the Passport reference implementation and Legal-Based Access Control (LBAC) framework. APIS v2.0 is now presented as a standards-oriented trust framework for broader issuer, developer, verifier, and governance participation.

- Contributor and partnership inquiries: [partnerships@aetherpro.tech](mailto:partnerships@aetherpro.tech)
- Issuer onboarding and operational inquiries: [operations@aetherpro.us](mailto:operations@aetherpro.us)

## Trademark Notice

Passport™, Agent Passport™, and Passport Alliance™ are trademarks of AetherPro Technologies LLC.
