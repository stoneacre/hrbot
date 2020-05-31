/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function (controller) {
  // use a function to match a condition in the message
  controller.hears(
    async (message) => message.text && message.text.toLowerCase() === "foo",
    ["message"],
    async (bot, message) => {
      await bot.reply(message, 'I heard "foo" via a function test');
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

  // match any one of set of mixed patterns like a string, a regular expression
  controller.hears(
    ["fernan", "fernan arrived"],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: "Oh...it's 'that' guy. Hi Fernan.. (not that I care)",
      });
    }
  );

  controller.hears(
    ["sacrifice", "sacrifice time"],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: "Nick! you are being summoned!",
      });
    }
  );

  controller.hears(
    ["report", "violation", "report violation", "report a violation"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Now look who's acting like a little bitch. Stop being so sensitive and get back to work!",
      });
    }
  );

  controller.hears(
    ["inspire me"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Well, well, well. It looks like some CRYBABY needs inspiration. How about you stop wasting time and get back to work before I give you something to cry about? J/k I totally love you. (Hope that inspired you... TO GET BACK TO WORK)",
      });
    }
  );

  controller.hears(
    ["duck", "why are you a duck?"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "My life-long idol is the DONALD. When he fired people on 'The Apprentice' it would bring me tears of joy. Donald... president... and the duck. Get it? Ok, I'll let myself out.",
      });
    }
  );

  controller.hears(
    ["info", "who are you", "what can you do", "help"],
    ["direct_mention", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Hi there. I am the Official Meteor Affinity Chat Bot. I handle all things HR. You can use me by @mentioning me with keywords. Right now can prompt me with: '@hr_bot hi (or hello or good morning)', '@hr_bot why are you a duck?', '@hr_bot report a violation', '@hr_bot inspire me'. I'm at version 1, so I not that smart. Be patient as I learn. I am a quick learner. For example, I learned to hate DMB. There, Liz. I said it! What are you going to do, report me to HR?",
      });
    }
  );

  controller.hears(
    ["hi", "hello", "good morning"],
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
        text: "My Lord and Savior C. San Diego.",
      });
    }
  );
};
