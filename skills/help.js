module.exports = function (controller) {
  controller.hears(
    ["help", "info"],
    ["direct_mention", "direct_message"],
    async (bot, message) => {
      await bot.reply(message, {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                " :tada: *Introducing ME, the WONDERFUL, the INDISPENSABLE, the AMAZING HR_BOT* :tada:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "I am the Official Meteor Affinity HR Bot. I handle all things HR. You can use me by @mentioning me with keywords. At the moment, I am not that smart. Please, be patient as I learn. Fortunately for you, I am a quick learner. For example, I learned to hate DMB. There, Liz. I said it! What are you going to do, report me to HR?",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: " :juggling: *SKILLS* :juggling:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "Let's get into what I can do. As I learn new skills, my creators will update my help section. You can see this help section at any time by writing `@hr_bot help` or `@hr_bot info`.",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":page_facing_up: *Important Docs*  :page_facing_up:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "`@hr_bot core values`     See Our Core Values",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
              },
              url:
                "https://drive.google.com/file/d/0B7C-qyZKhG5PNVdiTVI2S09Ganc/view?usp=sharing",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "`@hr_bot handbook`     See Our Employee Handbook",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click Me",
              },
              url:
                "https://docs.google.com/document/d/10S17NxhUeTLl8B3zc8iGUHN9yUAMaDW-bngt-VaSHiE",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":laughing: *Fun Stuff* :laughing:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "`@hr_bot hello`    Say hi to me!",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "`@hr_bot tell me a joke`    Comedic relief through bad jokes!",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "`@hr_bot chuck norris`    Sometimes, you just need a little Chuck Norris fact.",
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":egg: *Easter Eggs* :egg:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "There are tons of fun little easter eggs that you'll just have to discover. I am giving you a couple right now. Enjoy!",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "`@hr_bot who made you`    :thinking_face:",
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "`@hr_bot we need a sacrifice`    When we need to bring in the big guns!",
            },
          },
        ],
      });
    }
  );
};
