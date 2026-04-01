const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fd278b",
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 15000,
  fixturesFolder: "cypress/fixtures",
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://stage.app.kordis.io",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-gpu')
        }
        if (browser.name === 'electron') {
          launchOptions.preferences.sandbox = false
        }
        return launchOptions
      })
    },
  },
});
