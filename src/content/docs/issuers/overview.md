---
title: Issuer Overview
description: Issuer roles, trust tiers, and ecosystem responsibilities.
sidebar:
  order: 1
---

## Issuer Role in APIS

Issuers establish cryptographic identity for delegates by minting Agent Passports and exposing verification infrastructure (discovery, JWKS, status endpoints).

## Baseline Issuer Responsibilities

- Verify key possession at issuance
- Bind delegates to principal accountability context
- Publish JWKS and discovery metadata
- Expose passport status/revocation semantics
- Maintain auditable issuance lifecycle records

## Trust Tiers

| Tier | Trust Signal | Typical Use |
| --- | --- | --- |
| Founding | Initial standards issuer | Canonical reference |
| Certified | Audited and approved | Production federation |
| Registered | Self-attested | Controlled partner/sandbox |
| Sandbox | Development only | Testing and integration |

## Interoperability Principle

Any organization can implement APIS endpoints. Alliance recognition indicates governance-backed trust posture and audit expectations.

## Next Steps

1. Review [Issuer Requirements](/issuers/requirements/)
2. Run [Compliance Checks](/issuers/compliance/)
3. Submit governance and policy materials for review
