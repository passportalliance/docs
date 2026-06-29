---
title: Faraday Operator Profile
description: Candidate Agent Passport Profile for Faraday as the PresenceOS operator surface.
sidebar:
  order: 3
---

## Registry Entry Status

- Entry type: Profile publication
- Status: Candidate / pending
- Registry role: Public profile record
- Minted passport status: Not claimed in this repo

## Summary

Faraday is the intended PresenceOS operator surface. In this registry it is presented as a candidate Agent Passport Profile, not as an already-minted agent passport.

This page exists so the publication surface can describe a real planned operator identity class without overclaiming that a proof artifact or minted credential has already been published here.

## Candidate Profile

```json
{
  "profile_id": "presenceos.operator.v1",
  "display_name": "PresenceOS Operator Agent",
  "subject_type": "agent",
  "agent_class": "operator",
  "default_name": "Faraday",
  "realm": "syndicate",
  "endorsements": [
    "presenceos.operator",
    "aether.gateway.client",
    "collabfabric.participant",
    "redwatch.auditable"
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

## Interpretation

- **Profile**: yes
- **Minted Agent Passport™**: not published here
- **Registry Entry**: yes, as a candidate public profile record
- **Proof Artifact**: expected in the future, not published in this repo today

## Why It Matters

Faraday is a good example of why the Profile and Passport distinction matters:

- the profile can be documented now
- the minted credential should only be published after a real proof artifact exists
- the registry can show pending operator identities without implying they are already verified

## Related Pages

- [Agent Passport Profiles](/spec/profiles/)
- [Agent Registry](/registry/)
- [Herman Reference Proof](/registry/herman-reference-proof/)

