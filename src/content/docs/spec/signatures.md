---
title: Three-Party Signatures
description: Cryptographic chain linking issuer, principal, and delegate actions.
sidebar:
  order: 6
---

## APIS-002

The three-party signature model provides non-repudiation and clear chain-of-custody for autonomous actions.

1. Issuer signature on passport
2. Principal signature on mandate
3. Delegate signature on action request

## Signature Layers

### Layer 1: Issuer

- Target: Agent Passport
- Purpose: asserts delegate identity and issuer trust origin

### Layer 2: Principal

- Target: Mandate
- Purpose: proves explicit authorization from accountable owner

### Layer 3: Delegate

- Target: Runtime action
- Purpose: proves the acting agent key executed this request

## Cryptographic Standards

- Preferred algorithm: EdDSA (Ed25519)
- Signature format: JWS Compact Serialization
- Canonicalization: RFC 8785 (JSON Canonicalization Scheme)

## Verification Sequence

```text
verify_delegate_signature(action)
verify_principal_signature(mandate)
verify_issuer_signature(passport)
verify_mandate_scope(action, mandate)
verify_passport_status(passport_did, revocation_nonce)
```

Fail closed on any failed check.

## Why It Matters

This model gives verifiers immediate answers to:

- Which identity key signed this action?
- Which principal authorized that identity?
- Which trusted issuer vouched for it?

That evidence is required for production-grade incident response and audit.
