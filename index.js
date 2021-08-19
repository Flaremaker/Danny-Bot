require('dotenv').config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
//Commented out
/* client.once('ready', () => {
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
});*/

client.once('ready', () => {
	console.log('Ready!');
    client.api.applications(process.env.CLIENT_ID).guilds(process.env.GUILD_ID).commands.post({data: {
        name: 'jackpot',
        description: '1,2,3'
    }})
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'jackpot') {
		
			var slot = [];
			var count = 0;
		
			while(count != 3)
			{
				var randomNumber = Math.floor(Math.random() * 8);
				slot.push(randomNumber);
				count++;
				
			}
			var str = slot.join();
		
		await interaction.reply(str);
	}
});

client.login(process.env.TOKEN);
