---
title: Issuer Requirements
description: Technical and governance controls required for APIS v2.0 Realm Issuer participation.
sidebar:
  order: 2
---

## Registered Realm Issuer

Registered Realm Issuers can operate in local trust realms, controlled partner ecosystems, and development environments.

### Technical Checklist

- [ ] Discovery: publish `/.well-known/openid-configuration`
- [ ] JWKS: publish `/.well-known/jwks.json`
- [ ] Signatures: support Ed25519 or equivalent approved algorithm
- [ ] DIDs: issue `did:passport:[realm]:[uuid]` credentials
- [ ] Proof-of-possession: enforce signed nonce challenge
- [ ] Revocation: support `revocation_nonce` lifecycle
- [ ] Passports: support Agent Passport lifecycle and Machine Passport references
- [ ] Provisioning: support APIS-APP `passport-init`, `passport-renew`, and `passport-revoke` concepts
- [ ] Trust tiers: record Tier 1, Tier 2, Tier 2.5, Tier 3, or Tier 4 evidence accurately

## Certified Realm Issuer

Certified issuers are approved for broader federation trust and governance-backed legitimacy.

### Additional Controls

- [ ] Pass Alliance conformance suite
- [ ] Publish issuance, revocation, and key rotation policy
- [ ] Complete security assessment
- [ ] Commit to incident reporting SLAs
- [ ] Support high availability for discovery and status endpoints
- [ ] Maintain credential-chain verification material for issuer, Machine Passport, Agent Passport, mandate, and signed action verification
- [ ] Align operational controls with CMMC Level 2 / NIST SP 800-171 expectations where serving regulated environments

## Governance Materials

Certified applicants should submit:

- legal entity details and operational contacts
- security policy set and audit artifacts
- service scope declaration (geography, domain, passport types)
- root and realm key custody documentation
- trust-tier evidence handling policy
- incident response playbook

## Maintenance Expectations

Certification is not one-time. Issuers should expect periodic reassessment and potential status changes if controls degrade.
