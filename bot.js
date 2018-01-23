cosnt Discord = require('discord.js');
cosnt client = new.Discord.Client();

client.on('ready', () => {
console.log('I am ready!');
});

client.on('message', message => {
if (message.content === 'Marinette?') {
message.reply('Chat Noir?);
}
});

client.login(process.env.BOT_TOKEN);
