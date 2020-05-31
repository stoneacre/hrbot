/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
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
            text: "The REAL Kim Jong Juan! :grinning:",
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

  controller.hears(["fernan"], ["message", "direct_message"], async function (
    bot,
    message
  ) {
    await bot.reply(message, {
      text: "Oh...it's 'that' guy. Hi Fernan.. (not that I care)",
    });
  });

  controller.hears(
    ["sacrifice"],
    ["message", "direct_message", "direct_mention"],
    async function (bot, message) {
      await bot.reply(message, {
        //U38ADPJGM Nick's slack id
        //U37FZRA6L Charlie's slack id for testing
        text: "<@U38ADPJGM>, you are being summoned! A sacrifice is needed.",
      });
    }
  );

  controller.hears(
    ["violation"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.replyEphemeral(message, {
        text:
          "Now, look who's acting like a little bitch. Stop being so sensitive and get back to work!",
      });
    }
  );

  controller.hears(
    ["inspire"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.replyEphemeral(message, {
        text:
          "Well, well, well. It looks like some CRYBABY needs inspiration. How about you stop wasting time and get back to work before I give you something to cry about? J/k I totally love you. (Hope that inspired you... TO GET BACK TO WORK)",
      });
    }
  );

  controller.hears(
    ["duck"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "My life-long idol is the DONALD. When he fired people on 'The Apprentice' it would bring me tears of joy. Donald... president... and the disney character. Get it? If you want to read wise advice from THE DONALD, simply type `@hr_bot donald trump` in the chat.",
      });
    }
  );

  controller.hears(
    ["hi", "hello", "good morning", "good afternoon"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Why hello there! Say...did you get even better-looking today (if that's even possible!)? I hope you have a wonderful day!",
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
