## Domain Tracker

This app executes a function every hour , every day and check the status of whatever domains you want to know are available or not. This uses to GoDaddy API for that. If the domain is available for purchase it will send you an email via Twilio's SendGrid API.

**How it works?**
It uses Pub/Sub , Cloud Scheduler and Cloud Functions.

Cloud Scheduler from Cron "0 0-23 1-31 1-12 0" publishes a topic to PubSub API. The Cloud Function is subscribed to that topic. So it executes.