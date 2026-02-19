import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.passportalliance.org',
  integrations: [
    starlight({
      title: 'Passport Alliance',
      description: 'The identity standard for AI agents.',
      logo: {
        src: './src/assets/passport-alliance-logo.svg',
        alt: 'Passport Alliance'
      },
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/passportalliance'
      }
    })
  ]
});
