---
title: Agent Registry
description: Public publication and verification surface for Agent Passport profiles, reference proofs, and registry entries.
sidebar:
  order: 1
---

## Purpose

The Agent Registry is the public publication and verification surface for APIS v2.1.

Today this site supports static registry entries and proof records. It does not claim a fully automated live registry backend yet.

## Registry Model

The registry keeps these concepts separate:

- **Agent Passport Profile**: issuance recipe or credential class
- **Agent Passport™**: minted credential instance
- **Registry Entry**: public verification record
- **Proof Artifact**: supporting evidence package, DOI, signed artifact, or reference proof

This separation keeps public records understandable and avoids confusing a reusable class of agent with a single minted credential.

## Current Entries

- [Herman Reference Proof](/registry/herman-reference-proof/): first verified Agent Passport reference proof published for APIS v2.1
- [Faraday Operator Profile](/registry/faraday-operator-profile/): pending candidate profile for the PresenceOS operator surface

## Publication Status

| Surface | Status | Notes |
| --- | --- | --- |
| APIS v2.1 specification | Published | Canonical DOI `10.5281/zenodo.21042004` |
| Issuer registry model | Defined | Signed, mirrorable issuer-registry pattern documented |
| Agent Passport profiles | Publishing surface live | Static profile pages can be published now |
| Agent registry backend | Not claimed | This docs site is the current static publication surface |

## How To Read An Entry

Each registry entry should make clear:

1. whether it is a profile, minted passport reference, or both
2. what principal and realm are involved
3. what proof artifacts support the claim
4. whether the entry is verified, pending, or candidate-only

## Next Step

Start with [Herman Reference Proof](/registry/herman-reference-proof/) for the first verified APIS v2.1 reference record, then compare it with the candidate [Faraday Operator Profile](/registry/faraday-operator-profile/) to see how profiles and proofs differ.

