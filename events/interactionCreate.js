const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate, 
  async run (interaction, bot) {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.bot.commands.get(interaction.commandName);

	if (!command) {
		return;
	}

	try {
		await command.execute(interaction, bot);
	} catch (error) {
    interaction.reply({
      content: 'Hubo un error al ejecutar el comando.'
    })
    logger.error(error)
		}
	}
});
// 💻 Coded by => Daniel
// 🔵 Discord: Daniel.006