---
title: Developer FAQ
description: Common implementation questions about APIS and Passport Alliance™.
sidebar:
  order: 4
---

## Is APIS tied to one model provider or framework?

No. APIS is designed to be model-agnostic and runtime-agnostic.

## Can I implement APIS without Alliance membership?

Yes. Protocol implementation is open. Alliance membership affects trust recognition and registry status, not protocol access.

## What cryptography is required?

Ed25519 is the recommended baseline for signatures. P-256 is acceptable where needed by policy or platform constraints.

## How does revocation work in practice?

Revocation increments `revocation_nonce` on the passport. Verifiers reject tokens with stale nonce values.

## Do I need a central Passport™ server?

No single global server is required for protocol usage. Federation trust can be local, and registry data can be mirrored.

## Can APIS be used outside AI-specific use cases?

Yes. Any software delegate that meets key, signature, mandate, and revocation requirements can fit the model.

## Where are the canonical API contracts?

Use the artifacts in [Reference Downloads](/reference/downloads/).

## How do I contact Passport Alliance™ to contribute?

For contributor discussions and partnership-level collaboration, email [partnerships@aetherpro.tech](mailto:partnerships@aetherpro.tech).
