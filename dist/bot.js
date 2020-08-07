"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
dotenv_1.config();
const client = new discord_js_1.Client();
// @ts-ignore
client.login(process.env.DISCORD_TOKEN);
client.on('message', (message) => {
    if (message.content === `${config_json_1.prefix}nosfe`) {
        const date = new Date();
        const time = date.getHours();
        if (time > 5 && time < 15) {
            message.channel.send('Es muy posible que a esta hora Nosfe se encuentre durmiendo, ejecuta !!nosfetime para consultar su horario.');
        }
        else {
            const image = new discord_js_1.MessageAttachment('https://www.cinemascomics.com/wp-content/uploads/2019/10/nosferatu-1922-reboot.jpg');
            message.channel.send('Es la hora del Nosfe, ejecuta !!callnosfe para llamarlo.').then(() => {
                message.channel.send(image);
            });
        }
    }
    if (message.content === `${config_json_1.prefix}nosfetime`) {
        message.channel.send('El nosfe despierta entre las 2 y 3 am');
    }
    if (message.content === `${config_json_1.prefix}callnosfe`) {
        const image = new discord_js_1.MessageAttachment('http://www.gatropolis.com/wp-content/uploads/2017/08/Remake-Nosferatu.jpg');
        message.channel.send(`Despierta Nosfe🧛 <@314533506275606529>`).then(() => {
            message.channel.send(image);
        });
    }
    if (message.content === `${config_json_1.prefix}help`) {
        message.channel.send('```💁🏻 comandos actuales: \n' +
            ' !!nosfe: consulta si Nosfe está disponible ⚰️ \n' +
            ' !!nosfetime: consulta horario de Nosfe 🕰️\n' +
            ' !!callnosfe: hace un llamado a Nosfe 📟\n' +
            ' !!ajo: ataca a Nosfe 🧄 \n ``` ');
    }
    if (message.content === `${config_json_1.prefix}ajo`) {
        const image = new discord_js_1.MessageAttachment('https://i.pinimg.com/originals/6a/43/b1/6a43b14ee7b3b10695bc9ad373305432.gif');
        message.channel.send(`Hiriendo al nosfe... \n🧄🧄🧄🧄🧄`).then(() => message.channel.send(image));
    }
});
