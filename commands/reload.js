const Discord = require('discord.js');
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  if(message.author.id !== config.ownerID) {
    message.channel.send("Successfully reload!");
    client.destroy();
  }
  
  message.channel.send("You dont my dev!")
}

module.exports.help = {
  name: "reload"
}
