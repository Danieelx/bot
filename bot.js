const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

const bot = new Client({
  intents: [GatewayIntentBits.Guilds]
});

bot.commands = new Collection();







bot.login(); // token de tu bot

// Discord: Daniel.006