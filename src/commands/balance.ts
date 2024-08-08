import { Discord, SimpleCommand, SimpleCommandMessage, Slash } from "discordx";
import { EmbedBuilder, type CommandInteraction, type Message } from "discord.js";

@Discord()
export class Balance {
  getEmbed(command: CommandInteraction | Message): EmbedBuilder {
    const balanceEmbed = new EmbedBuilder()
      .setAuthor({name: command.member!.user.username, iconURL: command.member!.avatar! })
      .setDescription("I am a description <:rupees:1268507076871716936> ` infinite rupees `")
    return balanceEmbed;
  }

  @SimpleCommand({ name: "balance" })
  async simpleBalance(command: SimpleCommandMessage): Promise<void> {
    await command.message.channel?.send({embeds: [this.getEmbed(command.message)]});
  }

  @Slash({ description: "displays your rupees, fragments, xp and your rank.", name: "balance" })
  async slashBalance(command: CommandInteraction): Promise<void> {
    await command.reply({embeds: [this.getEmbed(command)]});
  }
}