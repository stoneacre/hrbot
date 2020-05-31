# Official Tongue-in-Cheek HR Slack Bot for Meteor Affinity

## Deployment

Currently deployed to [HEROKU](https://dashboard.heroku.com/apps/meteor-hr-bot/) as it's free and easy. We will probably migrate to serverless functions at some point.

Every push to master will automatically deploy to Heroku. We currently do not have any tests, so be careful!

## Roadmap

### Culture

- ~~comedic relief with matched messages~~
- ~~comedic relief with joke telling API (dad jokes, chuck norris, etc)~~
- ~~links to our core values when prompted~~
- ~~links to our Employee Handbook when prompted~~

## Organizational

- prompting for guesstimates for blast
- announcing blast winner
- reminder of holidays in US and S. America
- reminder of important dates in shared calendar (blasts, etc)
- onboarding
  -- hr bot info should launch when someone joins general
- company-specific version of capturing relevant feedback. See [this inspiration](https://meteoraffinity.slack.com/apps/ABQJ20E2Z-grow)
- create OKRs, with reminders, and allow commenting. See [this project](https://meteoraffinity.slack.com/apps/AU9M045ML-simple-goals) for inspiration.
- daily standup with post to channels per team. [inspiration](https://meteoraffinity.slack.com/apps/A44PZQW83-dailybot)
- MAYBE a simple knowledge base collector [inspiration](https://meteoraffinity.slack.com/apps/A0ZP4FD0B-obie) but we likely don't need this at our size.

## Developer Tools

- Integrate [Botkit CMS](https://github.com/howdyai/botkit-cms)

This project is based on the awesome [Botkit Docs](https://botkit.ai/docs/v4)

https://github.com/kelektiv/node-cron will be used for cron tasks.
