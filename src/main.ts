import { dirname, importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";
import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import "dotenv/config";

export const bot = new Client({
  // To use only guild command
  // botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

  // Discord intents
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildVoiceStates,
  ],

  // Debug logs are disabled in silent mode
  silent: false,

  // Configuration for @SimpleCommand
  simpleCommand: {
    prefix: "?",
  },
});

bot.once("ready", () => {
  // Make sure all guilds are cached
  // await bot.guilds.fetch();

  // Synchronize applications commands with Discord
  void bot.initApplicationCommands();

  // To clear all guild commands, uncomment this line,
  // This is useful when moving from guild commands to global commands
  // It must only be executed once
  //
  void bot.clearApplicationCommands(
    ...bot.guilds.cache.map((g) => g.id)
  );

  console.log("Bot started");
});

bot.on("interactionCreate", (interaction: Interaction) => {
  bot.executeInteraction(interaction);
});

bot.on("messageCreate", (message: Message) => {
  void bot.executeCommand(message);
});

async function run() {
  await importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`);
  if (!process.env.BOT_TOKEN) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }
  await bot.login(process.env.BOT_TOKEN);
}

void run();
