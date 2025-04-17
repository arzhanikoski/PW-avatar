import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    viewport: { width: 1200, height: 800 }, // 👈 Set desired viewport size
    launchOptions: {
      args: ['--window-size=1200,800'], // 👈 For actual browser window size (non-headless)
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1200, height: 800 }, // 👈 Also set here to ensure it overrides device settings
      },
    },
  ],
});
