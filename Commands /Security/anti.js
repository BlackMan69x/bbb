const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "anti",
  aliases: ["config"],
  description: "To show command limits the bot",
  usage: ["p!anti"],
  category: ["Security"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
  const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle("List of all commands Security")
      .setDescription(`

**__Anti Commands__**

\`antichannel\` **__on__** , **__off__**
\`antirole\` **__on__** , **__off__**
\`antiban\` **__on__** , **__off__**
\`antikick\` **__on__** , **__off__**
\`antispam\` **__on__** , **__off__**
\`antibot\` **__on__** , **__off__**

`)
  message.channel.send(embed);
    }
}
