"use strict";
exports.__esModule = true;
var MoreOrLess = /** @class */ (function () {
    function MoreOrLess(client, channel) {
        this.life = 5;
        this.state = 0; //0: in progress || 1: win || -1: loose
        this.client = client;
        this.channel = channel;
        this.init();
    }
    MoreOrLess.prototype["try"] = function (num) {
        if (this.mistery - num !== 0)
            this.life--;
        return this.mistery < num ? 1 : this.mistery > num ? -1 : 0;
    };
    MoreOrLess.prototype.init = function () {
        var _this = this;
        this.mistery = Math.random() * 100;
        this.mistery = Math.round(this.mistery);
        this.life = 5;
        this.state = 0;
        this.client.on('message', function (message) {
            if (_this.state !== 0)
                return;
            if (message.content.startsWith('=>')) {
                var num = message.content.replace('=>', '');
                num = parseInt(num);
                if (!num) {
                    message.reply('Ca fonctionne qu\'avec des chiffres');
                    return;
                }
                if (num > 100 || num < 0) {
                    message.reply('J\'ai besoin d\'une proposition entre 0 et 100');
                    return;
                }
                var res = _this["try"](parseInt(num));
                switch (res) {
                    case -1:
                        message.reply('Plus grand');
                        break;
                    case 1:
                        message.reply('Plus petit');
                        break;
                    case 0:
                        _this.state = 1;
                        break;
                }
                _this.checkState();
            }
        });
    };
    MoreOrLess.prototype.checkState = function () {
        if (this.life < 0) {
            this.state = -1;
        }
        switch (this.state) {
            case -1:
                this.channel.send('Partie terminée. Tu as perdu :cry:');
                break;
            case 1:
                this.channel.send('Partie terminée. Tu as gagné :smile:');
                break;
        }
        if (this.state !== 0)
            this.channel.send('Le nombre mystère était le ' + this.mistery);
    };
    return MoreOrLess;
}());
exports.MoreOrLess = MoreOrLess;
