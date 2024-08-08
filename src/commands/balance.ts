import { Discord, SimpleCommand, SimpleCommandMessage, Slash } from "discordx";
import { EmbedBuilder, type CommandInteraction, type Message } from "discord.js";

@Discord()
export class Balance {
  async balance(command: CommandInteraction | Message): Promise<void> {
    const balanceEmbed = new EmbedBuilder()
      .setAuthor({name: command.member!.user.username, iconURL: command.member!.avatar! })
      .setDescription("I am a description <:rupees:1268507076871716936> ` infinite rupees `")
    await command.channel?.send({embeds: [balanceEmbed]});
  }

  @SimpleCommand({ name: "balance" })
  async simpleBalance(command: SimpleCommandMessage): Promise<void> {
    await this.balance(command.message);
  }

  @Slash({ description: "displays your rupees, fragments, xp and your rank.", name: "balance" })
  async slashBalance(command: CommandInteraction): Promise<void> {
    await this.balance(command);
  }
}