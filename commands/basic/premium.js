const { MessageEmbed } = require('discord.js');

module.exports= {

    name: "premium",
    aliases:["richrichrich"],
    async run(sana, message, args){

        var premium = new MessageEmbed()
        .setDescription("** sana premium is a amazing paid boost!**"
        +"\n sana premium is a paid boost to sana which includes alot of features!"
        +"\n"
        +"\n **features you'll recieve**"
        +"\n • bass boost command + volume command in your server"
        +"\n • custom rank background for your server"
        +"\n • sneak peaks to the bot (ONLY FOR THE USER WHO BOUGHT THE PREMIUM FOR THE BOT FOR THEIR SERVER)"
        +"\n • custom warn, kick, ban and mute message -> e.g `oopsie daisy! you have been muted for (duration) because you (reason)` `... kicked </3 ... rsn: (reason)`"
        +"\n"
        +"\n to subscribe to sana premium for your server please press/click [here](https://patreon.com/michbots)"
        +"\n oh and make sure to be in sana's support server by saying `.support`")
        message.lineReplyNoMention(premium)

    }

}