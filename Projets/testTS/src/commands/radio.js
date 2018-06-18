"use strict";
exports.__esModule = true;
var ytdl = require("ytdl-core");
var es6_promise_1 = require("es6-promise");
var Radio = /** @class */ (function () {
    function Radio(voiceChannel, textChannel) {
        this.queue = new Array();
        this.connected = false;
        this.currentMusic = -1;
        this.streamOptions = { seek: 0, volume: 0.1 };
        this.voiceChannel = voiceChannel;
        this.textChannel = textChannel;
    }
    Radio.prototype.displayQueue = function () {
        var _this = this;
        console.log("radio - displayQueue");
        var display = new Array();
        this.queue.forEach(function (item, index) {
            var text = "";
            if (index === _this.currentMusic) {
                text = "> ";
            }
            display.push(text + item.title);
        });
        this.textChannel.send(display.join('\n'));
    };
    Radio.prototype.displayCurrent = function () {
        console.log("radio - displayCurrent");
        this.textChannel.send(this.music);
    };
    Radio.prototype.clearQueue = function () {
        console.log("radio - clearQueue");
        this.currentMusic = -1;
        this.queue.length = 0;
        this.dispatcher.pause();
        this.dispatcher.destroy();
        this.textChannel.send("Liste de lecture réinitialisée");
    };
    Radio.prototype.play = function (link) {
        var _this = this;
        console.log("radio - play");
        ytdl.getInfo(link, function (error, info) {
            if (error)
                console.error(error);
            else {
                _this.queue.push({ link: link, title: info.title });
                _this.textChannel.send("Titre ajouté à la liste de lecture");
                if (!_this.connected) {
                    _this.join().then(function () {
                        if (_this.currentMusic < 0) {
                            _this.currentMusic++;
                            _this.read();
                        }
                    });
                }
            }
        });
    };
    Radio.prototype.read = function () {
        console.log("radio - read");
        if (!this.connection) {
            console.error("No connection...");
            return;
        }
        try {
            this.textChannel.send("Lecture du titre \"" + this.music.title + "\"");
            console.log(this.music);
            this.dispatcher = this.connection.playStream(ytdl(this.music.link, { filter: 'audioonly' }), this.streamOptions);
            this.bindConnectionEvents();
        }
        catch (e) {
            this.textChannel.send("Aïe ça bloque pendant la lecture :cry:");
        }
    };
    Radio.prototype.haveNext = function () {
        console.log("radio - haveNext");
        return this.currentMusic >= 0 ? (this.queue.length > this.currentMusic) : false;
    };
    Radio.prototype.goNext = function () {
        this.dispatcher.on('end', function () { });
        if (this.haveNext()) {
            this.currentMusic++;
            this.read();
        }
    };
    Radio.prototype.bindConnectionEvents = function () {
        var _this = this;
        console.log("radio - bindConnectionEvents");
        this.dispatcher.on('end', function () {
            console.log('=> end event');
            _this.goNext();
        });
    };
    Object.defineProperty(Radio.prototype, "music", {
        get: function () {
            console.log("radio - music");
            return this.queue ? this.queue[this.currentMusic] : "";
        },
        enumerable: true,
        configurable: true
    });
    Radio.prototype.pause = function () {
        console.log("radio - pause");
        this.dispatcher.pause();
    };
    Radio.prototype.resume = function () {
        console.log("radio - resume");
        this.dispatcher.resume();
    };
    Radio.prototype.join = function () {
        var _this = this;
        console.log("radio - join");
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.voiceChannel.join()
                .then(function (connection) {
                _this.connection = connection;
                _this.connected = true;
                resolve();
            })["catch"](function (error) {
                console.error(error);
                _this.textChannel.send("J'ai un petit souci pour rejoindre le vocal :cry:");
                _this.connected = false;
                reject();
            });
        });
    };
    Radio.prototype.leave = function () {
        console.log("radio - leave");
        if (this.dispatcher)
            this.dispatcher.destroy();
        this.connected = false;
        this.voiceChannel.leave();
    };
    return Radio;
}());
exports.Radio = Radio;
