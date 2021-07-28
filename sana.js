const discord = require('discord.js')
const sana = new discord.Client()
const config = require('./config.json');
const status = ['.h for help', 'luv u!', 'stream the album taste of love!', 'made by michal#1336']


sana.on('ready', () => {
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
    
  
});


sana.login(config.token);

