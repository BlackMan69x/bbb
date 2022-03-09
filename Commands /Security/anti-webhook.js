const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antiwebhook",
  aliases: ["anti-webhook"],
  description: "Prevent others from crating or deleting webhooks",
  usage: ["p!antiwebhook [number/on/off]"],
  category: ["Security"],
  enabled: false,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
 
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.webhook.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`🟢 The **AntiWebhook** system is enabled correctly!`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
        guild.webhook.onoff = "off";
        guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`🔴 The **AntiWebhook** system is disabled correctly!`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`error syntax 🔴\n ${guild.prefix}antiwebhook [on,off] `
        );
      return message.channel.send(embed2);
  }
};
