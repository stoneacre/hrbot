/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function (controller) {
  controller.hears("sample", "message,direct_message", async (bot, message) => {
    await bot.reply(message, "I heard a sample message.");
  });

  //   controller.hears(
  //     ["report a violation", "report violation", "violation", "report"],
  //     "message,direct_message",
  //     async (bot, message) => {
  //       await bot.reply(
  //         message,
  //         "Now look who's acting like a little bitch. Get back to work and don't make me tell you how to do your job!"
  //       );
  //     }
  //   );

  //   controller.hears("fernan", "message,direct_message", async (bot, message) => {
  //     await bot.reply(
  //       message,
  //       "Oh...it's 'that' guy. Hi Fernan.. not that I care..."
  //     );
  //   });

  //   controller.hears("nick", "message,direct_message", async (bot, message) => {
  //     await bot.reply(message, "Nick's the guy who likes 'em big!");
  //   });

  controller.on("message,direct_message", async (bot, message) => {
    await bot.reply(message, `Echo: ${message.text}`);
  });
};
