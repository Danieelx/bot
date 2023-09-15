const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  run: async (client) => {
    console.log('Ready.')
  }
};
// 💻 Coded by => Daniel
// 🔵 Discord: Daniel.006