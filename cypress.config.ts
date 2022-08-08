import { defineConfig } from 'cypress'

export default defineConfig({
  experimentalStudio: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 100000,
  responseTimeout: 100000,
  env: {
    host: 'http://localhost:8080',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
