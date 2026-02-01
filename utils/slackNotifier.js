const fetch = require("node-fetch");

async function sendSlackAlert(message) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Slack webhook URL not set");
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: message,
    }),
  });
}

module.exports = { sendSlackAlert };
