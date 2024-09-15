import { Pagination, PaginationType } from "@discordx/pagination";
import type { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import { wizardPages } from "../assets/wizardPages.js";

@Discord()
export class SetupWizard {
  @Slash({
    name: "setup",
    description: "Let's you customise staria",
  })
  async pages(interaction: CommandInteraction): Promise<void> {
    const options = { showStartEnd: false, type: PaginationType.Button }
    const pagination = new Pagination(interaction, wizardPages, options);
    await pagination.send();
  }
}
