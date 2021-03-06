const Discord = require('discord.js');
const color = require('../utils/color.json');

module.exports.run = async (client, message, args) => {
  let author = message.author.username;
  
  let embed = new Discord.RichEmbed()
  .setColor(color.gold)
  .addField("Name", client.user.username)
  .addField("ID", client.user.id)
  .addField("Guilds", client.guilds.size)
  .addField("Users", client.users.size)
  .addField("Library", "discord.js")
  .addField("Uptime", `${client.readyAt.getDate()}.${client.readyAt.getMonth() + 1}.${client.readyAt.getFullYear()}\n${client.readyAt.getHours()}h ${client.readyAt.getMinutes()}min ${client.readyAt.getSeconds()}sec`)
  .addField("Resources", `[SUPPORT SERVER](https://discord.gg/v7AJqr8)`)
  .setTimestamp()
  .setFooter(`${author}`);
  
  message.channel.send(embed);
}

module.exports.help = {
  name: "botinfo"
}
