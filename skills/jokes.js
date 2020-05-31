const axios = require("axios");

module.exports = function (controller) {
  controller.hears(["chuck norris"], ["direct_mention"], async function (
    bot,
    message
  ) {
    const chuckFact = await getJoke("chuckNorris");

    await bot.reply(message, {
      text: `${chuckFact} :laughing:`,
    });
  });

  controller.hears(
    ["donald trump", "trump", "donald"],
    ["direct_mention"],
    async function (bot, message) {
      const trumpTweet = await getJoke("donaldTrump");

      await bot.reply(message, {
        text: `${trumpTweet} :astonished:`,
      });
    }
  );

  controller.hears(["dad joke", "joke"], ["direct_mention"], async function (
    bot,
    message
  ) {
    const dadJoke = await getJoke("dadJoke");

    await bot.reply(message, {
      text: `${dadJoke} :laughing:`,
    });
  });

  async function getJoke(choice) {
    const APIS = {
      chuckNorris: {
        url: "http://api.icndb.com/jokes/random",
        payloadPath: "value.joke",
      },
      donaldTrump: {
        url: "http://api.tronalddump.io/random/quote",
        payloadPath: "value",
      },
      dadJoke: {
        url: "https://icanhazdadjoke.com",
        payloadPath: "joke",
      },
    };

    const api = APIS[choice];

    try {
      const response = await axios.get(api.url, {
        headers: { Accept: "application/json" },
      });

      //each API will return a different payload, so we use reduce to get the value based on the path string
      const joke = api.payloadPath
        .split(".")
        .reduce((acc, key) => acc[key], response.data);

      return joke;
    } catch (error) {
      console.log(error);
    }
  }
};
