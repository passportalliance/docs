---
title: Issuer Overview
description: Realm Issuer roles, recognition levels, and APIS v2.1 ecosystem responsibilities.
sidebar:
  order: 1
---

## Issuer Role in APIS

Realm Issuers establish cryptographic identity for delegates by minting Agent Passport™ credentials, issuing or referencing Machine Passports, and exposing verification infrastructure (discovery, JWKS, status endpoints, and revocation state).

## Baseline Issuer Responsibilities

- Verify key possession at issuance
- Bind delegates to principal accountability context
- Bind Agent Passports to mandates and, where applicable, Machine Passports
- Record trust-tier evidence without overstating hardware guarantees
- Publish JWKS and discovery metadata
- Expose passport status/revocation semantics
- Maintain auditable issuance lifecycle records

## Issuer Recognition Levels

| Level | Trust Signal | Typical Use |
| --- | --- | --- |
| Founding | Initial standards issuer | Canonical reference |
| Certified | Audited and approved | Production federation |
| Registered | Self-attested | Controlled partner/sandbox |
| Sandbox | Development only | Testing and integration |

Trust tiers describe key custody and machine identity evidence. Issuer recognition describes governance posture. APIS v2.1 keeps those concepts separate.

## Interoperability Principle

Any organization can implement APIS endpoints. Alliance recognition indicates governance-backed trust posture and audit expectations.

## Next Steps

1. Review [Issuer Requirements](/issuers/requirements/)
2. Run [Compliance Checks](/issuers/compliance/)
3. Submit governance and policy materials for review
