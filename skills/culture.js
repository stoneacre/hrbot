module.exports = function (controller) {
  // use a function to match a condition in the message
  controller.hears(
    ["core values"],
    ["message", "direct_mention", "direct_message"],
    async (bot, message) => {
      await bot.reply(message, {
        text:
          "Oh, you want to see our CORE VALUES?! Just click on the link below!",
        attachments: [
          {
            fallback: "Test link button to https://slack.com/",
            actions: [
              {
                type: "button",
                name: "core_values",
                text: "Core Values (PDF)",
                url:
                  "https://drive.google.com/file/d/0B7C-qyZKhG5PNVdiTVI2S09Ganc/view?usp=sharing",
                style: "primary",
              },
            ],
          },
        ],
      });
    }
  );

  controller.hears(
    ["handbook", "employee manual", "employee guidebook"],
    ["direct_mention", "direct_message"],
    async (bot, message) => {
      await bot.reply(message, {
        text:
          "Thou asks and thou shall receive! BEHOLD! The Meteor Affinity Handbook",
        attachments: [
          {
            fallback: "Test link button to https://slack.com/",
            actions: [
              {
                type: "button",
                name: "handbook",
                text: "handbook (gdoc)",
                url:
                  "https://docs.google.com/document/d/10S17NxhUeTLl8B3zc8iGUHN9yUAMaDW-bngt-VaSHiE",
                style: "primary",
              },
            ],
          },
        ],
      });
    }
  );
};
