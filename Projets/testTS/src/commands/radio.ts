import { Client, VoiceChannel, Message, User, GuildMember, StreamDispatcher, TextChannel, VoiceConnection } from 'discord.js';
import ytdl = require('ytdl-core');
import { Promise } from 'es6-promise';

export class Radio {
    private dispatcher:any;
    private queue = new Array<{
        link: string,
        title: string
    }>();
    private voiceChannel: VoiceChannel;
    private textChannel: TextChannel;
    private connected = false;
    private currentMusic = -1;
    private connection: VoiceConnection;

    private streamOptions = { seek: 0, volume: 0.1 };

    constructor(voiceChannel:VoiceChannel, textChannel:TextChannel){
        this.voiceChannel = voiceChannel;
        this.textChannel = textChannel;
    }

    public displayQueue() {
        console.log("radio - displayQueue");
        let display = new Array<string>();
        this.queue.forEach( (item, index ) => {
            let text = "";
            if(index === this.currentMusic){
                text = "> ";
            }
            display.push(text + item.title)
        });
        this.textChannel.send(display.join('\n'));
    }

    public displayCurrent() {
        console.log("radio - displayCurrent");
        this.textChannel.send(this.music);
    }

    public clearQueue() {
        console.log("radio - clearQueue");
        this.currentMusic = -1;
        this.queue.length = 0;
        this.dispatcher.pause();
        this.dispatcher.destroy();

        this.textChannel.send("Liste de lecture réinitialisée");
    }
    
    public play(link:string) {
        console.log("radio - play");
        ytdl.getInfo(link, (error, info) => {
            if(error) console.error(error);
            else {
                this.queue.push({link:link, title: info.title});
                this.textChannel.send("Titre ajouté à la liste de lecture");

                if(!this.connected){
                    this.join().then(() => {
                        if(this.currentMusic < 0){
                            this.currentMusic++;
                            this.read();
                        }
                    });
                }
            }
        }); 
        
    }

    private read() {
        console.log("radio - read");
        if(!this.connection){
            console.error("No connection..."); 
            return;
        } 

        try{
            this.textChannel.send(`Lecture du titre "${this.music.title}"`);            
            console.log(this.music);
            this.dispatcher = this.connection.playStream(
                ytdl(this.music.link, { filter : 'audioonly' }),
                this.streamOptions
            );

            this.bindConnectionEvents();
        }catch(e) {
            this.textChannel.send("Aïe ça bloque pendant la lecture :cry:");
        }
    }

    public haveNext() {
        console.log("radio - haveNext");
        return this.currentMusic >= 0 ? (this.queue.length > this.currentMusic) : false;
    }

    public goNext() {
        this.dispatcher.on('end', ()=>{});
        if(this.haveNext()){
            this.currentMusic++;
            this.read();
        }
    }

    public bindConnectionEvents() {
        console.log("radio - bindConnectionEvents");
        this.dispatcher.on('end', () => {
            console.log('=> end event');
            this.goNext();
        });
    }

    public get music() {
        console.log("radio - music");
        return this.queue ? this.queue[this.currentMusic]: "";
    }

    public pause() {
        console.log("radio - pause");
        this.dispatcher.pause();
    }

    public resume() {
        console.log("radio - resume");
        this.dispatcher.resume();
    }

    public join() {
        console.log("radio - join");
        return new Promise((resolve, reject) => {
            this.voiceChannel.join()
                .then((connection) => {
                    this.connection = connection;
                    this.connected = true;
                    resolve();
                })
                .catch(error => {
                    console.error(error);
                    this.textChannel.send("J'ai un petit souci pour rejoindre le vocal :cry:");
                    this.connected = false;
                    reject();
                });
        });
    } 

    public leave() {
        console.log("radio - leave");
        if(this.dispatcher) this.dispatcher.destroy();
        this.connected = false;
        this.voiceChannel.leave();
    } 

}