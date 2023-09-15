const { REST, Routes } = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');
const { botId, token } = require('./data/config');
const commands = [];
const foldersPath = join(__dirname, 'commands');
const commandFolders = readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		}
  }
}

const rest = new REST().setToken(token);

(async () => {
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
);
})();
// 💻 Coded by => Daniel
// 🔵 Discord: Daniel.006