---
title: Reference Downloads
description: Canonical machine-readable artifacts for APIS implementation.
sidebar:
  order: 1
---

## APIS Contracts

- [APIS v2.1 DOI record](https://doi.org/10.5281/zenodo.21042004)
- [APIS concept DOI (latest line)](https://doi.org/10.5281/zenodo.18820876)
- [APIS v2.1 Delta PDF](/spec/APIS-v2.1-DELTA.pdf)
- [APIS v2.0 Canonical PDF](/spec/APIS-v2.0.pdf)
- [APIS v2.0 Implementation Guide](/spec/APIS-v2.0-Implementation-Guide.pdf)
- [APIS System Primer PDF](/spec/APIS-System-Primer.pdf)
- [Passport Alliance Charter](/spec/Passport-Alliance-Charter.pdf)
- [APIS v2.0 OpenAPI YAML](/spec/apis-v2.openapi.yaml)
- [APIS v2.0 JSON Schema](/spec/apis-v2.schema.json)
- [Registry API OpenAPI JSON](/spec/registry.openapi.json)
- [Alliance Root Key (well-known)](/.well-known/alliance-root.jwk)
- [Herman Reference Proof PDF](/registry/HERMAN-PROOF.pdf)

## DOI and Record

- DOI: [`10.5281/zenodo.21042004`](https://doi.org/10.5281/zenodo.21042004)
- Concept DOI: [`10.5281/zenodo.18820876`](https://doi.org/10.5281/zenodo.18820876)
- Published: June 29, 2026
- Status: Version 2.1 — Canonical — Supersedes APIS v2.0
- Note: local PDF artifacts in this repo still include the v2.0 files plus the system primer; update the downloadable v2.1 PDF here when the publication artifact is added to the repo.

## Conformance Definitions

- [Proof of Possession Test YAML](/tests/conformance/test-proof-of-possession.yaml)
- [Revocation Test YAML](/tests/conformance/test-revocation.yaml)
- [JWKS Publication Test YAML](/tests/conformance/test-jwks.yaml)

## Fetch via CLI

```bash
curl -O https://docs.passportalliance.org/spec/apis-v2.openapi.yaml
curl -O https://docs.passportalliance.org/spec/apis-v2.schema.json
curl -O https://docs.passportalliance.org/spec/registry.openapi.json
curl -L https://doi.org/10.5281/zenodo.21042004
curl -O https://docs.passportalliance.org/spec/APIS-v2.0.pdf
curl -O https://docs.passportalliance.org/.well-known/alliance-root.jwk
curl -O https://docs.passportalliance.org/registry/HERMAN-PROOF.pdf
```

## Versioning Guidance

Pin these artifacts by commit or release tag in CI pipelines. Do not consume unpinned contracts for production compliance gates.
