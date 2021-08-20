require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
    client.api.applications(process.env.CLIENT_ID).guilds(process.env.GUILD_ID).commands.post({data: {
        name: 'ping',
        description: 'ping pong!'
    }})
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.login(process.env.TOKEN);
