import { Pagination } from "@discordx/pagination";
import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import { wizardPages } from "../assets/wizardPages.js";

@Discord()
export class SetupWizard {
  @Slash({
    name: "setup",
    description: "Let's you customise the bot",
  })
  async pages(interaction: CommandInteraction): Promise<void> {
    const pagination = new Pagination(interaction, wizardPages);
    await pagination.send();
  }
}
