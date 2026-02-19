---
title: Registry Signing Model
description: Signed issuer registry architecture and verifier trust workflow.
sidebar:
  order: 3
---

## Purpose

The Passport Alliance registry is the authoritative list of recognized APIS issuers.

The model is built to prevent spoofed issuer legitimacy while allowing broad implementation of APIS.

## Registry Endpoints

- `GET /issuers.json`
- `GET /issuers.sig`

`issuers.json` is the complete registry payload. `issuers.sig` is a detached signature for that payload.

## Root of Trust

- Alliance root public key is published for verification.
- Alliance private signing key is held in offline or HSM-controlled custody.

Only registry payloads signed by Alliance keys are authoritative.

## Verifier Workflow

1. Fetch `issuers.json` and `issuers.sig`.
2. Validate payload hash and signature.
3. Evaluate local trust policy (tiers, domains, geography).
4. Accept or reject issuer for runtime verification.

## Mirror Model

Member organizations can mirror registry files for resilience. Mirrors are distribution points, not authorities.

## Compromise Response

If an issuer is compromised:

1. Change status to `suspended` or `revoked`.
2. Re-sign registry payload.
3. Publish update and propagate to mirrors.
4. Verifiers reject affected issuer based on updated status.

## Design Principle

Code can be copied.
Trust signaling is controlled by transparent governance and cryptographic signatures.
