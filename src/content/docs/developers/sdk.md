---
title: SDK and API Surface
description: Core endpoints and implementation artifacts for issuer and verifier integrations.
sidebar:
  order: 2
---

## API Baseline

APIS integrations rely on a small set of canonical endpoints:

- `POST /v1/issuance/nonce`
- `POST /v1/passports`
- `GET /v1/passports/{passport_did}`
- `PATCH /v1/passports/{passport_did}/status`
- `POST /v1/passports/{passport_did}/revoke`
- `GET /.well-known/openid-configuration`
- `GET /.well-known/jwks.json`

## Artifacts

- [APIS OpenAPI](/spec/apis-v1.openapi.yaml)
- [APIS JSON Schema](/spec/apis-v1.schema.json)
- [Registry OpenAPI](/spec/registry.openapi.json)

## Verifier SDK Responsibilities

A verifier-oriented SDK should implement:

1. discovery metadata retrieval
2. JWKS caching and rotation handling
3. signature verification for passport/mandate/action
4. revocation nonce checking
5. policy and scope enforcement hooks

## Issuer SDK Responsibilities

An issuer-oriented SDK should provide:

- nonce generation and lifecycle handling
- proof-of-possession verification
- DID and fingerprint generation
- credential minting and status transitions
- immutable audit event publishing

## Compatibility Guidance

Treat schemas in `/spec/*.json|yaml` as contract artifacts and pin versions in your integration pipeline.
