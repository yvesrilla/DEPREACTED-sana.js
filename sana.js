//imports
const { client } = require('discord.js');
const sana = new client;
const config = require('./config.json');
const ms = require('ms')
const status = ['.h for help', 'luv u!', 'made by michal#1336', `in ${client.guilds.cache.size} servers!`];

// mongoose setup
const mongoose = require('mongoose');
await mongoose.connect(config.mongokey, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(console.log(`connected to ${sana.user.tag}'s mongoDB database!`));



// file setup

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        sana.commands.set(command.name, command);
    }
}
sana.on("error", console.error);

// command handeller

sana.on("message", async (message) => {

    if (message.author.sana) return;
    if (message.channel.type === 'dm') return; 




    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = sana.commands.get(commandName) || sana.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (command) {
            if (command.cooldown) {
                if (Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Please Wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: true })}\` Before using this command again!`);
                command.run(sana, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(sana, message, args);
        }
    }
})


// client login and status
sana.login(config.token).then(() => {
    console.log(`${sana.user.tag} logged in.`)
    console.log("sana is online!")


    const updateDelay = 5;
    let currentIndex = 0;
  
  
    setInterval(() => {
      const activity = status[currentIndex];
      sana.user.setActivity(activity);
  
      currentIndex = currentIndex >= status.length - 1 
        ? 0
        : currentIndex + 1;
    }, updateDelay * 1000);
})
