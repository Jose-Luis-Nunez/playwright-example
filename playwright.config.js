// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['html', { open: 'never', outputFolder: 'reports' }]],
  use: {
    actionTimeout: 3000,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        ignoreHTTPSErrors: true,
        headless: true,
        viewport: { width: 1366, height: 800 },

        args: ["--enable-features=ShadowDOMV0"],
      },
    },
  ],
  outputDir: 'test-results/',
};

module.exports = config;
