"use strict";
exports.__esModule = true;
var radio_1 = require("./radio");
var admin_1 = require("./admin");
var moreorless_1 = require("./moreorless");
var Commands = /** @class */ (function () {
    function Commands() {
    }
    Commands.treat = function (client, message) {
        var request = message.content;
        if (request.startsWith(this.PREFIX)) {
            //Remove PREFIX
            request = request.substr(this.PREFIX.length, request.length);
            var split = request.split(" ");
            var cmd = split[0];
            var args = split[1];
            console.log(cmd);
            switch (cmd) {
                case "play":
                    if (!this.radio)
                        this.radio = new radio_1.Radio(message.member.voiceChannel, message.channel);
                    this.radio.play(args);
                    break;
                case "reset":
                    if (!this.radio)
                        this.radio = new radio_1.Radio(message.member.voiceChannel, message.channel);
                    this.radio.clearQueue();
                    break;
                case "queue":
                    if (!this.radio)
                        this.radio = new radio_1.Radio(message.member.voiceChannel, message.channel);
                    this.radio.displayQueue();
                    break;
                case "next":
                    if (!this.radio)
                        this.radio = new radio_1.Radio(message.member.voiceChannel, message.channel);
                    this.radio.goNext();
                    break;
                case "current":
                    if (!this.radio)
                        this.radio = new radio_1.Radio(message.member.voiceChannel, message.channel);
                    this.radio.displayCurrent();
                    break;
                case "leave":
                    if (!this.radio)
                        return;
                    this.radio.leave(message.member);
                    break;
                case "pause":
                    if (this.radio)
                        this.radio.pause();
                    break;
                case "resume":
                    if (this.radio)
                        this.radio.resume();
                    break;
                case "clear":
                    admin_1.Admin.clearText(message, args);
                    break;
                case "game":
                    this.game = new moreorless_1.MoreOrLess(client, message.channel);
                    message.reply('D\'accord, jouons à "plus ou moins".');
                    message.reply('Je mémorise un chiffre entre 0 & 100 et tu dois le trouver en proposant un chiffre de cette manière =>50');
                    message.reply('Je t\'écoute :smile:');
                    break;
                case "flip":
                    var flip = Math.random() > 0.5;
                    if (flip)
                        message.reply("Pile");
                    else
                        message.reply('face');
                    break;
                case "dice":
                    var val = Math.random() * 6;
                    val = Math.round(val);
                    if (val <= 0)
                        val = 1;
                    message.reply('', { file: "./assets/de" + val + ".jpeg" });
                    break;
                case "help":
                    var msg_1 = "\`\`\`sh";
                    this.commands.forEach(function (item) { return msg_1 += "\n" + item.name + " \t# " + item.description + "\n"; });
                    msg_1 += "\`\`\`";
                    message.channel.send(msg_1);
                    break;
                default:
                    message.reply("Commande inconnue :astonished:");
            }
        }
    };
    Commands.commands = [
        { name: "&play LienYoutube", description: "Joue une musique à partir d'un lien youtube" },
        { name: "&leave", description: "Expulse le bot du canal vocal" },
        { name: "&game", description: "Mini-jeu" },
        { name: "&flip", description: "Lance une pièce" },
        { name: "&dice", description: "Lance le dé" },
        { name: "&clear NombreDeMessages", description: "Supprime des messages (Admin seulement)" },
    ];
    Commands.PREFIX = "&";
    return Commands;
}());
exports.Commands = Commands;
