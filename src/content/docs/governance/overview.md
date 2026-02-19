---
title: Governance Overview
description: Passport Alliance governance model, committee structure, and issuer tiers.
sidebar:
  order: 1
---

## Governance Intent

Passport Alliance governance is designed to keep APIS open while preventing trust fragmentation and spoofed issuer legitimacy.

The Alliance does not prevent protocol implementation. It governs recognition in the public trust registry.

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

## Issuer Tiers

| Tier | Description |
| --- | --- |
| `founding` | Original standards initiator |
| `certified` | Fully audited APIS issuer |
| `registered` | Self-attested issuer |
| `sandbox` | Development/testing issuer |

## Certified Issuer Expectations

To maintain certified status, issuers must:

- implement APIS v1 required fields and flows
- pass automated conformance suite
- complete security review
- publish issuance/revocation/key policies
- support incident response obligations

## Registry Governance

The Alliance publishes a signed issuer registry used by verifiers as trust input. Member mirrors can distribute copies, but only Alliance keys sign authoritative changes.

See [Registry Signing Model](/governance/registry-signing/) for details.
