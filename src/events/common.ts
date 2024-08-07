import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class Example {
  @On()
  messageDelete([message]: ArgsOf<"messageDelete">, client: Client): void {
    console.log("Message Deleted", client.user?.username, message.content);
  }
  @On()
  async memberJoin([member]: ArgsOf<"guildMemberAdd">, client: Client): Promise<void> {
    await member.send(`Welcome to the server, ${member.user.username}!`);
  }
}
