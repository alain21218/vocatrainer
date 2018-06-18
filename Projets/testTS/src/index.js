"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var commands_1 = require("./commands/commands");
var client = new discord_js_1.Client();
client.login('NDI3NTU1NzU5MTM2NTcxMzky.DZmRNQ.IAW1rnjj3ZbrVxg4ihk1oiumYPQ');
client.on('ready', function () {
    // client.user.setAvatar('./assets/gw2.png')
    // client.user.setActivity('Guild Wars 2')
});
client.on('message', function (message) {
    commands_1.Commands.treat(client, message);
});
