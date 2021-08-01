const { MessageEmbed } = require('discord.js');

module.exports = {

  name: "about",
  aliases:["abt"],
  async run(sana, message, args){

    var about = new MessageEmbed()
    .setDescription("**About Sana!**"
        +"\n"
        +"\n sana was born on the 29th of december, 1996 and she is a :capricorn:!"
        +"\n sana (bot) was created on the 26th of july 2021."
        +"\n sana (bot) was created by michal#1336"
        +"\n [discord.js](discord.js.org) helps sana to connect to discord!")

    message.lineReplyNoMention(about)

  }
}