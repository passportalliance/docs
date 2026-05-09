---
title: Governance Overview
description: Passport Alliance™ governance model, committee structure, Realm Issuers, and root trust anchor.
sidebar:
  order: 1
---

## Governance Intent

Passport Alliance™ governance is designed to keep APIS v2.0 open while preventing trust fragmentation and spoofed issuer legitimacy.

The Alliance does not prevent protocol implementation. It governs recognition in the public trust registry.

The Alliance also maintains the governance model for the root trust anchor, recognized Realm Issuers, and versioned APIS publications.

## Committees

### Steering Committee

- Strategic direction
- Membership and certification decisions
- Dispute and incident resolution

### Technical Committee

- APIS evolution and version control
- Test suite definition
- RFC review and ratification recommendations

### Working Groups

Ad-hoc groups for focused domains such as security, enterprise, government, and AI safety.

## Realm Issuer Recognition

| Level | Description |
| --- | --- |
| `founding` | Original standards initiator |
| `certified` | Fully audited APIS issuer |
| `registered` | Self-attested issuer |
| `sandbox` | Development/testing issuer |

## Certified Issuer Expectations

To maintain certified status, issuers must:

- implement APIS v2.0 required fields and flows
- pass automated conformance suite
- complete security review
- publish issuance/revocation/key policies
- support incident response obligations

## Registry Governance

The Alliance publishes a signed issuer registry used by verifiers as trust input. Member mirrors can distribute copies, but only Alliance keys sign authoritative changes.

See [Registry Signing Model](/governance/registry-signing/) for details.
