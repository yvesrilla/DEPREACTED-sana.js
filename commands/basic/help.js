const Discord = require('discord.js');

module.exports={
    name: "help",
    aliases: ["h", "gib help"],
    async run(sana, message, args){
        //embed creation

        const help = new Discord.MessageEmbed()
        .setDescription("**sana's help panel!**"
        +"\n welcome to my help panel, here you'll see all of my available commands!"
        +"\n"
        +"\n __basic commands__"
        +"\n `.h` `.about` `.support` `.status` `.premium`"
        +"\n"
        +"\n __levelling commands__"
        +"\n `.rank` `.lb` `.leaderboard`"
        +"\n"
        +"\n __music commands__"
        +"\n `.play` `.leave` `.queue`"
        +"\n"
        +"\n __trading card commands__"
        +"\n in the **works**!")

        message.lineReply({help})
    }
}
