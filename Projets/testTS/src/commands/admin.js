"use strict";
exports.__esModule = true;
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.clearText = function (message, args) {
        //Check permission
        if (!this.isAdmin(message))
            return;
        try {
            //No args => clear all
            if (!args || args.length <= 0)
                args = message.channel.messages.array.length.toString();
            message.channel.bulkDelete(parseInt(args))["catch"](function (error) { return message.reply('Impossible de supprimer les messages :grimacing:'); });
        }
        catch (e) {
            message.reply('Euuuhhh moi pas comprendre argument :thinking:');
        }
    };
    Admin.isAdmin = function (message) {
        if (!message.member.roles || message.member.roles.filter(function (i) { return i.name === 'Admin'; }).array().length <= 0) {
            message.reply('Cette commande nécessite d\'être admin !');
            return false;
        }
        return true;
    };
    return Admin;
}());
exports.Admin = Admin;
