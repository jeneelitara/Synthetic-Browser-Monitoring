// playwright.config.js
require("dotenv").config();
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 60 * 1000,
  retries: 0,

  reporter: [
    ["list"],
    ["html", { open: "never" }],
    [
      "./node_modules/playwright-slack-report/dist/src/SlackReporter.js",
      {
        slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
        channels: ["#all-itara"], // must be real channel(s)
        sendResults: "on-failure", // 🔥 best for monitoring
      },
    ],
    ["json", { outputFile: "results/report.json" }],
  ],

  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
  },
});
