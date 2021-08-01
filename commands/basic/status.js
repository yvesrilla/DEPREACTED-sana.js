const { MessageEmbed } = require('discord.js');

module.exports = {

  name:"status",
  aliases:["stats"],
  async run(sana, message, args){

    var stats = new MessageEmbed()
    .setDescription(`**${sana.user.tag}'s status!'`
    
    +`\n in ${client.guilds.cache.size} servers!`
    +"\n Owner: <@717422301192126485>"
    +"\n Still lovin n carin for u!")

    message.lineReplyNoMention(stats)


  }

}