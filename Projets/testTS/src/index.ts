import { Client, Message } from 'discord.js';
import { Commands } from './commands/commands';

const client = new Client();

client.login('NDI3NTU1NzU5MTM2NTcxMzky.DZmRNQ.IAW1rnjj3ZbrVxg4ihk1oiumYPQ');

client.on('ready', () => {
    // client.user.setAvatar('./assets/gw2.png')
    // client.user.setActivity('Guild Wars 2')
});

client.on('message', (message:Message) => {
    Commands.treat(client, message);
});

