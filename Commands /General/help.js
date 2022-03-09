const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["p!help","p!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let help = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(Author)
    .setImage(Image)
    .setDescription(`

General
\`invite\` , \`stats\` , \`serverinfo\` , \`userinfo\`
Moderation
 \`prefix\` , \`kick\` , \`ban\` , \`unbanall\` , \`clear\`
 \`lock\` , \`unlock\` , \`lockall\` , \`unlockall\`
\`addrole\` , \`removerole\` , \`nick\`
Security
\`anti\` , \`settings\` , \`punishment\` , \`whitelist\`

`)
    .setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=941653939273732096&permissions=8&scope=bot') 
       .setEmoji(`🛡`)
       .setLabel('Invite')

      let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://top.gg/bot/941653939273732096/vote') 
       .setEmoji(`🗳`)
       .setLabel('Vote')

      let button3 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/wjv9KAWe9j') 
       .setEmoji(`☢️`)
       .setLabel('Support')

     
      let row1 = new MessageActionRow()
      .addComponents(button1, button2, button3)

   return message.channel.send(help,row1);
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "Disabled"
        if ( command.enabled ) {
        ccmd = "Enabled"
        }
      let help1 = new Discord.MessageEmbed()
     .setColor(Color) 
     .setThumbnail(message.author.avatarURL())
     .setTitle("**Help**")
     .setDescription(command.description || command.name + " this command don't have a description")
     .addField("**Usage**", "" + command.usage.join(", ") + "" )
     .addField("**Category**", "" + command.category.join(", ") + "" )
     .addField("**Command is**", ccmd);
      message.channel.send(help1)
        }
    }
  }};
