const { join } = require('fs');
const { readdirSync } = require('path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./data/config');
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

bot.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
      bot.commands.set(command.data.name, command);
		} 
	}
}

const eventsPath = join(__dirname, 'events');
const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args));
	} else {
    bot.on(event.name, (...args) => event.execute(...args));
	}
}



bot.login(token); // token de tu bot
// 💻 Coded by => Daniel
// 🔵 Discord: Daniel.006