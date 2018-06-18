import { Message, GuildMember, TextChannel } from "discord.js";

export class Admin {
    public static clearText(message:Message, args: string) {
        //Check permission
        if(!this.isAdmin(message)) return;

        try {
            //No args => clear all
            if (!args || args.length <= 0) args = message.channel.messages.array.length.toString();

            message.channel.bulkDelete(parseInt(args))
                .catch(error => message.reply('Impossible de supprimer les messages :grimacing:'));
        } catch (e) {
            message.reply('Euuuhhh moi pas comprendre argument :thinking:');
        }
    }

    public static isAdmin(message:Message) {
        if(!message.member.roles || message.member.roles.filter( i => i.name === 'Admin').array().length <= 0) {
            message.reply('Cette commande nécessite d\'être admin !');
            return false;
        }

        return true;
    }
}