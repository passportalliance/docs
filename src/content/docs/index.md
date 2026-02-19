---
title: The Identity Standard for AI Agents
description: Verifiable identity, scoped authorization, and full accountability for autonomous agents.
template: splash
head: []
hero:
  tagline: Passport Alliance defines APIS, an open standard for trustworthy AI agent identity and delegation.
  actions:
    - text: Read the Specification
      link: /spec/overview/
      icon: right-arrow
      variant: primary
    - text: Issuer Requirements
      link: /issuers/requirements/
      icon: external
---

## Why Passport Alliance

Autonomous software agents can already call APIs, move money, and operate infrastructure. APIS establishes a common trust language for this reality:

- Who the agent is
- Who authorized it
- What the authorization scope is
- How trust can be revoked immediately

## Three Pillars

- **Identity**: DID-based Agent Passport credentials (`did:passport:<uuid>`) cryptographically bound to agent keys.
- **Authorization**: Principals grant scoped, time-bound mandates to delegates instead of broad standing access.
- **Accountability**: Issuer, principal, and delegate signatures provide verifiable chain-of-custody for agent actions.

## What You Can Do Here

- **Understand APIS v1**: Start with [Specification Overview](/spec/overview/) and drill into passports, mandates, signatures, and federation trust.
- **Become an Issuer**: Review [Issuer Requirements](/issuers/requirements/) and [Compliance](/issuers/compliance/) for certification and test expectations.
- **Integrate as a Verifier**: Use [Developer Quickstart](/developers/quickstart/) and [Reference Downloads](/reference/downloads/) to validate and enforce APIS.

## Project Status

- APIS v1 specification: Canonical draft in active implementation
- Governance model: Working model published for public review
- Conformance tests: Initial baseline published in this repository
- Registry model: Signed, mirrorable issuer registry design defined

For source materials, see the repository directories `SPEC/`, `GOVERNANCE/`, and `TESTS/`.

## Stewardship and Contact

Passport Alliance was created by **Cory Gibson**, Founder, CEO, and CTO of **AetherPro Technologies**.

Initial APIS and Passport work began as a Keycloak fork with the Legal-Based Access Control (LBAC) framework and is now opening to broader community participation.

- Contributor and partnership inquiries: [partnerships@aetherpro.tech](mailto:partnerships@aetherpro.tech)
- Issuer onboarding and operational inquiries: [operations@aetherpro.us](mailto:operations@aetherpro.us)
