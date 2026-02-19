# Passport Alliance Docs

Public documentation site for `docs.passportalliance.org`, built with Astro + Starlight.

## Purpose

This repository hosts APIS specification docs, governance docs, issuer requirements, and developer integration content.

## Stack

- Astro 5
- Starlight
- Markdown content in `src/content/docs/`

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Start dev server:
```bash
pnpm run dev
```

3. Build for production:
```bash
pnpm run build
pnpm run preview
```

## Content Layout

- `src/content/docs/spec/` - APIS specification pages
- `src/content/docs/governance/` - Governance and trust model
- `src/content/docs/issuers/` - Issuer requirements and onboarding
- `src/content/docs/developers/` - Developer docs
- `src/content/docs/reference/` - Reference artifacts and standards context

## Deployment

Deploy this site to `docs.passportalliance.org` (Vercel static deployment works out of the box).

## Stewardship and Contact

- Stewarded by AetherPro Technologies
- Founder/CEO/CTO: Cory Gibson
- Contributor and partnership inquiries: `partnerships@aetherpro.tech`
- Issuer onboarding and operations: `operations@aetherpro.us`

## Repository Hygiene

This repo intentionally does **not** track:

- `node_modules/`
- `.astro/`
- `dist/`
- local `.env*` files

See `.gitignore` for full rules.

## License

Licensed under Apache License 2.0. See `LICENSE`.

## Trademark Notice

`Passport` and `Passport Alliance` names and logos are trademarks of Passport Alliance. The Apache-2.0 license does not grant trademark rights.
