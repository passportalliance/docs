import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.passportalliance.org',
  integrations: [
    starlight({
      title: 'Passport Alliance™',
      description: 'APIS v2.1 documentation for verifiable AI agent identity, trust anchors, mandates, profiles, verification, and revocation.',
      favicon: '/favicon.ico',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32.png',
          },
        },
      ],
      logo: {
        src: './src/assets/passport-alliance-logo.svg',
        alt: 'Passport Alliance™'
      },
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/passportalliance'
      }
    })
  ]
});
