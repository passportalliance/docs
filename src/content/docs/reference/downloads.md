---
title: Reference Downloads
description: Canonical machine-readable artifacts for APIS implementation.
sidebar:
  order: 1
---

## APIS Contracts

- [APIS v2.0 Canonical PDF](/spec/APIS-v2.0.pdf)
- [APIS v2.0 Implementation Guide](/spec/APIS-v2.0-Implementation-Guide.pdf)
- [Passport Alliance Charter](/spec/Passport-Alliance-Charter.pdf)
- [APIS v2.0 OpenAPI YAML](/spec/apis-v2.openapi.yaml)
- [APIS v2.0 JSON Schema](/spec/apis-v2.schema.json)
- [Registry API OpenAPI JSON](/spec/registry.openapi.json)
- [Alliance Root Key (well-known)](/.well-known/alliance-root.jwk)

## DOI and Record

- DOI: [`10.5281/zenodo.18820877`](https://doi.org/10.5281/zenodo.18820877)
- Record page: [`https://zenodo.org/records/18820877`](https://zenodo.org/records/18820877)
- Published: May 4, 2026
- Status: Version 2.0 — Canonical — Supersedes APIS v1.0

## Conformance Definitions

- [Proof of Possession Test YAML](/tests/conformance/test-proof-of-possession.yaml)
- [Revocation Test YAML](/tests/conformance/test-revocation.yaml)
- [JWKS Publication Test YAML](/tests/conformance/test-jwks.yaml)

## Fetch via CLI

```bash
curl -O https://docs.passportalliance.org/spec/apis-v2.openapi.yaml
curl -O https://docs.passportalliance.org/spec/apis-v2.schema.json
curl -O https://docs.passportalliance.org/spec/registry.openapi.json
curl -O https://docs.passportalliance.org/spec/APIS-v2.0.pdf
curl -O https://docs.passportalliance.org/.well-known/alliance-root.jwk
```

## Versioning Guidance

Pin these artifacts by commit or release tag in CI pipelines. Do not consume unpinned contracts for production compliance gates.
