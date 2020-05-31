const { BotkitConversation } = require("botkit");

module.exports = function (controller) {
  // define the conversation
  const onboarding = new BotkitConversation("onboarding", controller);

  onboarding.say(
    "Hello ! You must be new here! I am the Official HR Bot of Meteor Affinity. We'll get to how awesome I am later. Right now, I am going to proceed to ask you a few questions. Are you ready? "
  );

  // Get first name;

  onboarding.ask(
    "What is your first name? I'll use your first name for various public and private messages, so try not to use any weird nicknames you have, like MuffyPants.",
    async (answer, convo, bot) => {},
    { key: "first_name" }
  );

  onboarding.say(
    "{{vars.first_name}} has such a nice ring to it. I would totally name my first babybot after you. {{vars.first_name}}_bot is a pretty awesome name. Ok, enough chit-chat, let's continue."
  );

  //Get birthday
  onboarding.ask(
    "Now, when is your birthday? Please use the format MM/DD/YYYY. I may be a bot, but I'm still just a :duck:. Don't make it too hard on me.",
    async (answer, convo, bot) => {
      await bot.say(`${answer}, you say? You look at least 10 years younger!`);
    },
    {
      key: "birthday",
    }
  );

  onboarding.ask(
    "Let's make sure we have all of your info correct. So, your name is: `{{vars.first_name}}` and your birthday is `{{vars.birthday}}`. Is this all correct (yes/no)? ",
    [
      {
        pattern: "yes",
        handler: async function (answer, convo, bot) {
          await convo.gotoThread("confirmed");
        },
      },
      {
        pattern: "no",
        handler: async function (answer, convo, bot) {
          await bot.say(
            "Oh snap! We'll have to start over then! Just start the process over again by typing `@hr_bot onboarding` whenever you are ready. :sob:"
          );
          await convo.stop();
        },
      },
      {
        default: true,
        handler: async (response_text, convo, bot, full_message) => {
          await bot.say("I do not understand your response!");
          // start over!
          return await convo.repeat();
        },
      },
    ],
    "confirm",
    "confirmation_name"
  );

  // define a 'confirmed' thread
  onboarding.addMessage(
    "Awesome! That's all I need for now. The onboarding is complete. Have an awesome day, {{vars.first_name}}",
    "confirmed"
  );

  // handle the end of the conversation
  onboarding.after(async (results, bot) => {
    const name = results.first_name;
    const birthday = results.birthday;
  });

  // add the conversation to the dialogset
  controller.addDialog(onboarding);

  // launch the dialog in response to a message or event
  controller.hears(["onboarding"], "direct_mention", async (bot, message) => {
    bot.beginDialog("onboarding");
  });
};
