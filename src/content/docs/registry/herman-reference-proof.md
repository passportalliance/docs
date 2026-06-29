---
title: Herman Reference Proof
description: Public registry entry for Herman, the Hermes Agent, as the first verified APIS v2.1 Agent Passport reference proof.
sidebar:
  order: 2
---

## Registry Entry Status

- Entry type: Reference proof
- Status: Verified reference proof
- Registry role: Public verification record
- Automation status: Static publication entry, not a claim of a live automated registry backend

## Summary

Herman, the Hermes Agent, is the first verified Agent Passport reference proof published for APIS v2.1.

This entry demonstrates the APIS v2.1 minting and proof chain with public-safe artifacts. It is a verification surface for one conforming mint, not a claim that the entire registry stack is already fully automated.

## Verified Record

| Field | Value |
| --- | --- |
| Display name | Herman |
| Agent class | Hermes-based agent |
| DID | `did:passport:syndicate:herman` |
| Realm | `syndicate` |
| Principal | AetherPro Technologies LLC |
| Trust tier | `2.5` |
| Anchor | `herman._apis.syndicateai.co` |
| Issuer key | `apis-realm-issuer-2026-05-09` |
| Verification posture | Published chain and DNS anchor re-verifiable from public artifacts |

## What This Proves

- APIS v2.1 publication is backed by a real conforming reference proof
- a minted Agent Passport can be bound to a public namespace anchor
- the issuer delegation chain and public verification materials can be checked independently

## Proof Artifacts

- [HERMAN-PROOF.pdf](/registry/HERMAN-PROOF.pdf)
- [Alliance Root Key (well-known)](/.well-known/alliance-root.jwk)
- [APIS v2.1 DOI](https://doi.org/10.5281/zenodo.21042004)
- [APIS concept DOI](https://doi.org/10.5281/zenodo.18820876)

## Public Verification Chain

```text
Alliance root
  -> issuer delegation
    -> realm issuer key
      -> minted Agent Passport reference
        -> DNS TXT anchor for Herman
```

## Honest Scope

- This entry is a public reference proof, not a published bearer token.
- The full JWT is intentionally not published here.
- Tier 2.5 remains DNS-account-security-bound, as documented in APIS v2.1.
- This page does not claim a fully automated registry service. It publishes a static verification record.

## Related Pages

- [Agent Registry](/registry/)
- [Agent Passport Profiles](/spec/profiles/)
- [Faraday Operator Profile](/registry/faraday-operator-profile/)

