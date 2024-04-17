import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run fe-ssr:serve:development',
        production: 'nx run fe-ssr:serve:production',
      },
      ciWebServerCommand: 'nx run fe-ssr:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
