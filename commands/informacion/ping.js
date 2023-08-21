const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Mira mi ping'),
	async execute(interaction, bot) {
    interaction.reply({
      content: `Pong! - \`${bot.ws.ping}\``
    })
	},
};