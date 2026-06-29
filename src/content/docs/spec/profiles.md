---
title: Agent Passport Profiles
description: Registry-ready profile model for describing the issuance recipe and class of an APIS agent before or alongside minting.
sidebar:
  order: 2.5
---

## Purpose

An Agent Passport Profile describes the kind of agent being issued, not the minted Agent Passport itself.

This is useful when you want a public catalog or Agent Registry that answers questions like:

- What class of agent is this
- What capabilities is it expected to have
- What restrictions govern it
- What proof format or artifact should accompany issuance

## Profile vs Passport

| Artifact | Role |
| --- | --- |
| `Agent Passport Profile` | Reusable issuance recipe or class definition |
| `Agent Passport™` | Signed credential for one concrete agent instance |
| `Agent Registry Entry` | Published reference record that may point to a profile, a minted passport proof, or both |

Do not collapse these into one object. A profile should remain stable across many issued agents, while a minted passport is instance-specific and revocable.

Use the [Vocabulary](/reference/vocabulary/) page for the canonical public terms used across this site.

## Suggested Core Fields

These fields are a practical starting point for profile publication:

- `profile_id`
- `display_name`
- `subject_type`
- `agent_class`
- `issuer`
- `default_name`
- `realm`
- `capabilities`
- `restrictions`
- `endorsements`
- `lifecycle`
- `proof`

## Example

```json
{
  "profile_id": "hermes.assistant.v1",
  "display_name": "Hermes Agent",
  "subject_type": "agent",
  "agent_class": "assistant",
  "issuer": "passportalliance.org",
  "default_name": "Herman",
  "realm": "passportalliance.org",
  "capabilities": [
    "communicate.user",
    "present.passport",
    "emit.signed_actions"
  ],
  "restrictions": [
    "no_secret_exfiltration",
    "must_emit_audit_events"
  ],
  "endorsements": [
    "passportalliance.reference-agent"
  ],
  "lifecycle": {
    "revocable": true,
    "renewal_required": true
  },
  "proof": {
    "format": "APIS-v2.1",
    "artifact_required": true
  }
}
```

## Registry Pattern

A future Agent Registry can be layered cleanly:

1. Signed issuer registry
2. Published profile catalog
3. Optional agent reference entries with proof artifacts

This keeps the public site useful even before a fully dynamic registry service exists.

## Current Reference Milestone

APIS v2.1 includes a verified reference proof for Herman, the Hermes Agent, as the first minted Agent Passport milestone. The website can act as the publication surface for profile definitions, proof artifacts, and later registry records without treating every profile as an already-live credential.

See also:

- [Agent Registry](/registry/)
- [Herman Reference Proof](/registry/herman-reference-proof/)
- [Faraday Operator Profile](/registry/faraday-operator-profile/)
