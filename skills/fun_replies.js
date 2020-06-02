const { getRandomInt } = require("../utils");

module.exports = function (controller) {
  // // use a function to match a condition in the message
  // controller.hears(
  //   async (message) => message.text && message.text.toLowerCase() === "foo",
  //   ["message"],
  //   async (bot, message) => {
  //     await bot.reply(message, 'I heard "foo" via a function test');
  //   }
  // );

  controller.hears(
    ["carlos"],
    ["direct_message", "direct_mention"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Why, it's my creator! You have said his name! You should use his formal title. Here are some options: ",
        attachments: [
          {
            text: "The Cherished One",
          },
          {
            text: "Our Beloved",
          },
          {
            text: "Dear Leader",
          },
          {
            text: "The REAL Kim Jong Juan!",
          },
          {
            text: "hr_bot's main squeeze",
          },
        ],
      });
    }
  );

  // use a regular expression to match the text of the message
  //   controller.hears(
  //     new RegExp(/^\d+$/),
  //     ["message", "direct_message"],
  //     async function (bot, message) {
  //       await bot.reply(message, {
  //         text: "I heard a number using a regular expression.",
  //       });
  //     }
  //   );

  // match any one of set of mixed patterns like a string, a regular expression
  //   controller.hears(
  //     ["allcaps", new RegExp(/^[A-Z\s]+$/)],
  //     ["message", "direct_message"],
  //     async function (bot, message) {
  //       await bot.reply(message, { text: "I HEARD ALL CAPS!" });
  //     }
  //   );

  controller.hears(
    ["fernan"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        // text: "Oh...it's 'that' guy. Hi Fernan.. (not that I care)",
        text: "Fernando! Sup, dawg!",
      });
    }
  );

  controller.hears(
    ["sacrifice"],
    ["message", "direct_message", "direct_mention"],
    async function (bot, message) {
      await bot.reply(message, {
        //U38ADPJGM Nick's slack id
        //U37FZRA6L Charlie's slack id for testing
        text: "<@U38ADPJGM>, you are being summoned! A sacrifice is needed!",
      });
    }
  );

  controller.hears(
    ["violation"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      const VIOLATIONS = [
        "Now, look who's acting like a little bitch. Stop being so sensitive and if you really want to report a violation, you can do so by writing to THE BOSS: `@hr_bot charlie sheen`",
        "Oh! A violation?! Ok... this is serious. Umm... I will be right back... just going to... ummm.. buy some cigarettes. Don't wait up.",
        "No need to say another word. I have read your mind and the appropriate action will be taken. To escalate the request, please reach out to my boss `@hr_bot donald trump`",
        "Oh, don't sweat it! HR violations build character!",
        "I'm sorry to hear that. I wish that there was an HR department with an automated bot who could help you. You may want to take it up with my boss: `@hr_bot charlie sheen`.",
        "Awwww... do you need a hug?",
        "You gotta tell Kanye! He always has the best advice. `@hr_bot kanye`",
      ];

      const response = VIOLATIONS[getRandomInt(0, VIOLATIONS.length)];

      await bot.replyEphemeral(message, {
        text: response,
      });
    }
  );

  controller.hears(
    ["inspire"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.replyEphemeral(message, {
        text:
          "Well, well, well. It looks like some CRYBABY :sob: needs inspiration. How about you stop wasting time and get back to work before I give you something to cry about? J/k I totally love you. If you need real inspiration try `@hr_bot kanye` to get some inspirational wisdom.",
      });
    }
  );

  controller.hears(
    ["duck"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "My life-long idol is the DONALD. When he fired people on 'The Apprentice' it would bring me tears of joy. Donald... president... and the disney character. Get it? If you want sage advice from THE DONALD, simply type `@hr_bot donald trump` in the chat.",
      });
    }
  );

  controller.hears(
    ["hi", "hello", "good morning", "good afternoon"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      const GREETINGS = [
        "Why hello there! Say...did you get even better-looking today (if that's even possible!)? I hope you have a wonderful day!",
        "WHAAAAZZZZUUUUUUUUUPPPPP!?!?",
        "Top o' the mornin' to  ya!",
        "Hi right back at ya!",
        "Hola!",
        "Yo! What's the craic?",
        "How hops it?",
        "Ahoy, matey!",
        "`tips hat and winks`",
        "Salute plurimam dicit. Si vales, bene est, ego valeo.",
        "Aloha!",
        "Namaste",
        "How's tricks?",
        "I have to admit, I was having a pretty bad day, but thanks to you, things are looking up! Have a great day!",
      ];

      const greeting = GREETINGS[getRandomInt(0, GREETINGS.length)];

      await bot.reply(message, {
        text: greeting,
      });
    }
  );

  controller.hears(
    ["who made you?"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: "My main squeeze, wherever in the world he may be... :charly:.",
      });
    }
  );
};
