# Passport Alliance Documentation Site

This is the public documentation site for the Passport Alliance, built with Astro + Starlight.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run check`

## Content Structure

Content lives in `src/content/docs/`.

- `spec/` - APIS technical specification
- `governance/` - Foundation governance and trust model
- `issuers/` - Issuer onboarding and compliance requirements
- `developers/` - Developer integration docs
- `reference/` - OpenAPI/schema downloads and standards references

## Source Material

This site is sourced from documents in the parent repository:

- `SPEC/`
- `GOVERNANCE/`
- `TESTS/`
- `WEBSITE/content/`

When those source docs change, update matching pages in `src/content/docs/` and the downloadable files under `public/`.
