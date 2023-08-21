const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate, 
  async execute (interaction, bot) {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.bot.commands.get(interaction.commandName);

	if (!command) {
		return;
	}

	try {
		await command.execute(interaction, bot);
	} catch (error) {
    return;
		}
	}
});