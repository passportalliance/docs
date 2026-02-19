---
title: Compliance Suite
description: Baseline conformance tests and expected issuer behavior.
sidebar:
  order: 3
---

## Purpose

Conformance tests verify that issuer implementations satisfy APIS minimum security and interoperability guarantees.

## Published Baseline Tests

- [Proof of Possession Test](/tests/conformance/test-proof-of-possession.yaml)
- [Revocation Behavior Test](/tests/conformance/test-revocation.yaml)
- [JWKS Publication Test](/tests/conformance/test-jwks.yaml)

## Test Objectives

### Proof of Possession

An issuer must reject passport minting attempts that do not include a valid signed nonce.

### Revocation Behavior

Previously issued tokens must fail when `revocation_nonce` changes after revocation.

### JWKS Publication

Issuer JWKS endpoint must be publicly available and include key material consistent with passport verification.

## Suggested CI Flow

```bash
# Pseudocode workflow
run test-proof-of-possession
action: fail_on_passport_without_valid_nonce

run test-revocation
action: fail_if_old_token_still_valid

run test-jwks
action: fail_if_jwks_missing_or_invalid
```

## Certification Use

Certified issuer review should include automated conformance output plus governance and policy artifacts.
