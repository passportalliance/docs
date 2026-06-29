---
title: SDK and API Surface
description: Core endpoints and implementation artifacts for issuer and verifier integrations.
sidebar:
  order: 2
---

## API Baseline

APIS integrations rely on a small set of canonical endpoints:

- `POST /v2/passport-init`
- `POST /v2/passport-init/challenge`
- `POST /v2/passports`
- `GET /v2/passports/{passport_did}`
- `GET /v2/passports/{passport_did}/status`
- `POST /v2/passports/{passport_did}/renew`
- `POST /v2/passports/{passport_did}/revoke`
- `GET /.well-known/openid-configuration`
- `GET /.well-known/jwks.json`

## Artifacts

- [APIS v2.1 OpenAPI baseline](/spec/apis-v2.openapi.yaml)
- [APIS v2.1 JSON Schema baseline](/spec/apis-v2.schema.json)
- [Registry OpenAPI](/spec/registry.openapi.json)

## Verifier SDK Responsibilities

A verifier-oriented SDK should implement:

1. discovery metadata retrieval
2. JWKS caching and rotation handling
3. signature verification for passport/mandate/action
4. Machine Passport and trust-tier validation
5. revocation nonce checking
6. policy and scope enforcement hooks

## Issuer SDK Responsibilities

An issuer-oriented SDK should provide:

- nonce generation and lifecycle handling
- proof-of-possession verification
- DID and fingerprint generation
- Machine Passport and Agent Passport issuance
- APIS-APP provisioning, renewal, and revocation flows
- credential minting and status transitions
- immutable audit event publishing

## Compatibility Guidance

Treat schemas in `/spec/*.json|yaml` as contract artifacts and pin versions in your integration pipeline.
