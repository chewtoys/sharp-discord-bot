const Discord = require('discord.js');
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports.run = async (client, message, args) => {
  let nsfwEmbed = new Discord.RichEmbed()
  .setAuthor("This is not NSFW channel!")
  .setDescription("Use **NSFW** commands in **NSFW** channel (look in channel settings)")
  .setImage("https://i.imgur.com/oe4iK5i.gif")
  .setFooter(message.author.username)
  .setTimestamp();
  
  if(!message.channel.nsfw) return message.channel.send(nsfwEmbed);

  let cum = await neko.getNSFWCumsluts();

  let embed = new Discord.RichEmbed()
  .setAuthor("Random cum found!")
  .setFooter("Powered by nekos.life")
  .setTimestamp()
  .setImage(cum.url);

  message.channel.send(embed);
}

module.exports.help = {
  name: "cum"
}
