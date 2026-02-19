---
title: Issuer Requirements
description: Technical and governance controls required for APIS issuer participation.
sidebar:
  order: 2
---

## Tier 1: Self-Certified Issuer

Self-certified issuers can operate in local trust realms and private ecosystems.

### Technical Checklist

- [ ] Discovery: publish `/.well-known/openid-configuration`
- [ ] JWKS: publish `/.well-known/jwks.json`
- [ ] Signatures: support Ed25519 or equivalent approved algorithm
- [ ] DIDs: issue `did:passport:*` credentials
- [ ] Proof-of-possession: enforce signed nonce challenge
- [ ] Revocation: support `revocation_nonce` lifecycle

## Tier 2: Certified Issuer

Certified issuers are approved for broader federation trust and governance-backed legitimacy.

### Additional Controls

- [ ] Pass Alliance conformance suite
- [ ] Publish issuance, revocation, and key rotation policy
- [ ] Complete security assessment
- [ ] Commit to incident reporting SLAs
- [ ] Support high availability for discovery and status endpoints

## Governance Materials

Certified applicants should submit:

- legal entity details and operational contacts
- security policy set and audit artifacts
- service scope declaration (geography, domain, passport types)
- incident response playbook

## Maintenance Expectations

Certification is not one-time. Issuers should expect periodic reassessment and potential status changes if controls degrade.
