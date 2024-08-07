import { Discord, Slash } from "discordx";
import type { CommandInteraction } from "discord.js";

@Discord()
export class Testing {
  @Slash({
    description: "foo bar",
    name: "foo",
  })
  async pages(interaction: CommandInteraction): Promise<void> {
    await interaction.reply("here is your foobar: 🍫");
    await interaction.channel?.send({
      content: `Avatar of ${interaction.user.username}`,
      files: [interaction.user.displayAvatarURL()]
    });
  }
}