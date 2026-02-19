---
title: Issuer Application Process
description: Practical submission flow for organizations seeking Alliance recognition.
sidebar:
  order: 4
---

## Application Flow

1. Complete APIS implementation and baseline conformance tests.
2. Publish required policy documents.
3. Submit issuer scope declaration.
4. Complete technical and governance review.
5. Receive tier assignment and signed registry listing.

## Submission Package

Prepare:

- issuer profile (`issuer_id`, entity details, contacts)
- discovery and JWKS endpoints
- conformance test results
- issuance/revocation/key policy links
- incident response contact and escalation path

## Scope Declaration Template

```json
{
  "issuer_id": "example-university",
  "geographical_scope": ["US"],
  "domain_scope": ["research", "operations"],
  "passport_types": ["ai-agent", "service-agent"],
  "requested_tier": "registered"
}
```

## Decision Outcomes

- approved at requested tier
- approved at reduced tier with remediation items
- deferred pending remediation
- rejected with documented rationale

## After Approval

Approved issuers are published in the signed registry with status and tier metadata.

## Submission Contact

For issuer application and operational coordination, contact [operations@aetherpro.us](mailto:operations@aetherpro.us).

For strategic partnerships related to issuer programs, contact [partnerships@aetherpro.tech](mailto:partnerships@aetherpro.tech).
