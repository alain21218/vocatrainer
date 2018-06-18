import { Radio } from './radio';
import { Admin } from './admin';
import { MoreOrLess } from './moreorless';
import { Client, Message, TextChannel } from 'discord.js';

export class Commands {
    private static commands = [
        { name: "&play LienYoutube", description: "Joue une musique à partir d'un lien youtube" },
        { name: "&leave", description: "Expulse le bot du canal vocal" },
        { name: "&game", description: "Mini-jeu" },
        { name: "&flip", description: "Lance une pièce" },
        { name: "&dice", description: "Lance le dé" },
        { name: "&clear NombreDeMessages", description: "Supprime des messages (Admin seulement)" },
    ];

    private static PREFIX = "&";
    private radio: Radio;
    private game: MoreOrLess;

    constructor() {}
    
    public static treat(client:Client, message:Message) {
        let request = message.content as any;

        if(request.startsWith(this.PREFIX)) {
            //Remove PREFIX
            request = request.substr(this.PREFIX.length, request.length);
            
            const split = request.split(" ");
            const cmd = split[0];
            const args = split[1];
            
            console.log(cmd);

            switch(cmd){
                case "play":
                    if(!this.radio) this.radio = new Radio(message.member.voiceChannel, message.channel as TextChannel);
                    this.radio.play(args);
                    break;
                case "reset":
                    if(!this.radio) this.radio = new Radio(message.member.voiceChannel, message.channel as TextChannel);
                    this.radio.clearQueue();
                    break;
                case "queue":
                    if(!this.radio) this.radio = new Radio(message.member.voiceChannel, message.channel as TextChannel);
                    this.radio.displayQueue();
                    break;
                case "next":
                    if(!this.radio) this.radio = new Radio(message.member.voiceChannel, message.channel as TextChannel);
                    this.radio.goNext();
                    break;
                case "current":
                    if(!this.radio) this.radio = new Radio(message.member.voiceChannel, message.channel as TextChannel);
                    this.radio.displayCurrent();
                    break;
                case "leave":
                    if(!this.radio) return;
                    this.radio.leave(message.member);
                    break;
                case "pause":
                    if(this.radio) this.radio.pause();
                    break;
                case "resume":
                    if(this.radio) this.radio.resume();
                    break;
                case "clear":
                    Admin.clearText(message, args);
                    break;
                case "game":
                    this.game = new MoreOrLess(client, message.channel as TextChannel);
                    message.reply('D\'accord, jouons à "plus ou moins".');
                    message.reply('Je mémorise un chiffre entre 0 & 100 et tu dois le trouver en proposant un chiffre de cette manière =>50');
                    message.reply('Je t\'écoute :smile:');
                    break;
                case "flip":
                    const flip = Math.random() > 0.5;
                    if(flip) message.reply("Pile");
                    else message.reply('face');
                    break;
                case "dice":
                    let val = Math.random() * 6;
                    val = Math.round(val);
                    if(val <= 0) val = 1;
                    message.reply('', { file: `./assets/de${val}.jpeg` });
                    break;
                case "help":
                    let msg = "\`\`\`sh";
                    this.commands.forEach(item => msg += `\n${item.name} \t# ${item.description}\n`);
                    msg += "\`\`\`";
                    message.channel.send(msg);
                    break;
                default:
                    message.reply("Commande inconnue :astonished:");
            }
        }
    }

}