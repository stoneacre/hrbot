const axios = require("axios");
const { getRandomInt } = require("../utils");

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

  controller.hears(["kanye"], ["direct_mention"], async function (
    bot,
    message
  ) {
    const kanyeQuote = await getJoke("kanyeWest");

    await bot.reply(message, {
      text: `${kanyeQuote} :exploding_head:`,
    });
  });

  controller.hears(["charlie sheen"], ["direct_mention"], async function (
    bot,
    message
  ) {
    const SHEEN_QUOTES = [
      "It's quite fitting that Slash is getting a star on the very street Axl Rose will one day be sleeping on,",
      "I never insert myself into situations where I am completely blind or don't have a single clue about what's being discussed. I don't to be an impostor and just helping for the sake of helping. If I am going to help somebody, I want it to be valuable. And if they don't follow my advice, then they are a frigging idiot. I'm joking.",
      "The best way to not get your heart broken, is pretending you don't have one.",
      "I am on a drug. It's called Charlie Sheen. It's not available. If you try it once, you will die. Your face will melt off and your children will weep over your exploded body.",
      "Slash sat me down at his house and said, You've got to clean up your act. You know you've gone too far when Slash is saying, Look, you've got to get into rehab.",
      "Resentments are the rocket fuel that lives in the tip of my saber.",
      "I gotta take the baton from Chuck Norris.",
      "I don't believe in rock bottom. Rock bottom is like a fishing term.",
      "I'm still alive, which is pretty cool.",
      "My success rate is 100 percent. Do the math.",
      "I have a 10,000-year-old brain and the boogers of a 7-year-old. That's how I describe myself.",
      "The only thing I'm addicted to right now is winning.",
      "Shut your evil mucus-hole you truth terrorist. You LOSE every time a mirror implodes from your barbed and gristle image.",
      "Charlie Sheen has the potential to cause your soul to weep and forfeit",
      "I blinked and I cured my brain.",
      "I am on a drug. It's called Charlie Sheen.",
      "Let's talk about something exciting. Me.",
      "Every plan I have is the best plan in the room.",
      "I'm on a quest to claim absolute victory on every front.",
      "I’m not 'aw shucks'. Because I'm gnarly.",
      "A lot of people think Major League's called Wild Thing. As they should.",
      "I’m done with the winning cause I’ve already won.",
      "I wish him nothing but pain in his silly travels especially if they wind up in my octagon. Clearly I have defeated this earthworm with my words -- imagine what I would have done with my fire breathing fists.",
      "I will not believe that if I do something then I have to follow a certain path because it was written for normal people. People who aren’t special. People who don’t have tiger blood and Adonis DNA.",
      "Bring me Dr. Clown shoes.",
      "I’m an F-18, bro.",
      "I am battle-tested bayonets, bro.",
      "Winning, anyone? Rhymes with winning. Anyone? Yeah, that would be us. Sorry, man, didn’t make the rules. Oops!",
    ];

    var sheenQuote = SHEEN_QUOTES[getRandomInt(0, SHEEN_QUOTES.length)];

    await bot.reply(message, {
      text: `${sheenQuote} :exploding_head:`,
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
      kanyeWest: {
        url: "https://api.kanye.rest",
        payloadPath: "quote",
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
