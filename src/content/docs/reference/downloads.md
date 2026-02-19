---
title: Reference Downloads
description: Canonical machine-readable artifacts for APIS implementation.
sidebar:
  order: 1
---

## APIS Contracts

- [APIS OpenAPI YAML](/spec/apis-v1.openapi.yaml)
- [APIS JSON Schema](/spec/apis-v1.schema.json)
- [Registry API OpenAPI JSON](/spec/registry.openapi.json)

## Conformance Definitions

- [Proof of Possession Test YAML](/tests/conformance/test-proof-of-possession.yaml)
- [Revocation Test YAML](/tests/conformance/test-revocation.yaml)
- [JWKS Publication Test YAML](/tests/conformance/test-jwks.yaml)

## Fetch via CLI

```bash
curl -O https://docs.passportalliance.org/spec/apis-v1.openapi.yaml
curl -O https://docs.passportalliance.org/spec/apis-v1.schema.json
curl -O https://docs.passportalliance.org/spec/registry.openapi.json
```

Replace `docs.passportalliance.org` with your deployment host until production DNS is active.

## Versioning Guidance

Pin these artifacts by commit or release tag in CI pipelines. Do not consume unpinned contracts for production compliance gates.
