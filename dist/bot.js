"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const config_json_1 = require("./config.json");
const functions_1 = require("./functions");
const Commando = require("discord.js-commando");
const path = require("path");
dotenv_1.config();
const client = new Commando.CommandoClient({
    owner: "287424214619783170",
    commandPrefix: config_json_1.prefix,
});
// @ts-ignore
client.login(process.env.DISCORD_TOKEN);
client.registry
    .registerDefaultTypes()
    .registerGroups([
    ["misc", "misc commands"],
    ["moderation", "moderation commands"],
])
    .registerDefaultGroups()
    .registerDefaultCommands({
    help: false,
    prefix: false,
    ping: false,
    _eval: false,
    unknownCommand: false,
    commandState: true,
})
    .registerCommandsIn(path.join(__dirname, "../src/cmds"));
client.on("ready", () => {
    if (client.user) {
        client.user.setActivity("cosas brillantes", { type: "WATCHING" });
        /*  let channel = client.channels.cache.get('436550759908376576');
            let txtChannel = (channel as TextChannel);
            txtChannel.send(`HE VUELTO`).then( () => {
                txtChannel.send(Attachment('https://i.pinimg.com/originals/78/9f/97/789f9701531733ee07f95657caa0cb30.jpg'))
            }) */
    }
    console.log("Listo!");
});
client.on("voiceStateUpdate", (oldState, newState) => {
    var _a;
    if (oldState.channelID !== oldState.guild.me.voice.channelID ||
        newState.channel)
        return;
    if (((_a = oldState.channel) === null || _a === void 0 ? void 0 : _a.members.size) == 1)
        setTimeout(() => {
            var _a;
            if (((_a = oldState.channel) === null || _a === void 0 ? void 0 : _a.members.size) == 1)
                oldState.channel.leave();
        }, 100);
});
client.on("message", (message) => {
    if (message.content === `${config_json_1.prefix}nosfe`) {
        const date = new Date();
        const time = date.getHours();
        if (time > 1 && time < 4) {
            message.channel
                .send("Es la hora del Nosfe, ejecuta !!callnosfe para llamarlo.")
                .then(() => {
                message.channel
                    .send(functions_1.Attachment("https://www.cinemascomics.com/wp-content/uploads/2019/10/nosferatu-1922-reboot.jpg"))
                    .then((value) => value.react("📟"));
            });
        }
        else {
            message.channel
                .send("Es muy posible que a esta hora Nosfe se encuentre durmiendo, ejecuta !!nosfetime para consultar su horario.")
                .then((value) => value.react("⚰"));
        }
    }
    if (message.content === `${config_json_1.prefix}nosfetime`) {
        message.channel
            .send("El nosfe despierta entre las 2 y 3 am")
            .then((value) => value.react("🕰"));
    }
    if (message.content === `${config_json_1.prefix}callnosfe`) {
        message.channel
            .send(`Despierta Nosfe 🧛 <@314533506275606529>`)
            .then(() => {
            message.channel
                .send(functions_1.Attachment("http://www.gatropolis.com/wp-content/uploads/2017/08/Remake-Nosferatu.jpg"))
                .then((value) => value.react("🧛"));
        });
    }
    if (message.content === `${config_json_1.prefix}help`) {
        message.channel
            .send("💁🏻 ***Comandos actuales:*** \n" +
            " **??nosfe:** Consulta si Nosfe está disponible ⚰️ \n" +
            " **??nosfetime:** Consulta horario de Nosfe 🕰️\n" +
            " **??callnosfe:** Hace un llamado a Nosfe 📟\n" +
            " **??pezon:** Invocar a un trapito putaku <:renzo2:596970235689566232>\n" +
            " **??profe:** Invocar al rey de los camarones CHAAAAAA 🔥\n" +
            " **??riko** Para esas noches de soledad \n" +
            " **??estaca:** Usar con cuidado, éste comando puede acabar definitivamente con nosfe 🩸\n" +
            " **??kinkurimson:** Activa el poder de Kin Kurimson (solo puede ser activado por el pack master) \n" +
            " **??ajo:** Ataca a Nosfe 🧄 \n" +
            " **??p :** Reproduce audio. Audios disponibles: camarones, dura, medejaronsolo, nena, proferisa, toyready, piensachato, atrapada, \n" +
            " omaewa, kc, zawarudo, aea, kurisutina, nya, okarin, sob, desu, psy, yare")
            .then((value) => value.react("707023961183092777"));
    }
    if (message.content === `${config_json_1.prefix}ajo`) {
        message.channel
            .send(`Hiriendo al nosfe... \n🧄🧄🧄🧄🧄`)
            .then(() => message.channel
            .send(functions_1.Attachment("https://i.pinimg.com/originals/6a/43/b1/6a43b14ee7b3b10695bc9ad373305432.gif"))
            .then((value) => value.react("🧄")));
    }
    if (message.content === `${config_json_1.prefix}pezon`) {
        message.channel
            .send(`<@313502945964589057> invocado`)
            .then((value) => value.react("🍿"));
    }
    if (message.content === `${config_json_1.prefix}profe`) {
        message.channel
            .send(`<@560481541986189348> CHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)
            .then(() => {
            message.channel
                .send(functions_1.Attachment("https://i0.wp.com/www.thatmomentin.com/wp-content/uploads/2015/08/bubbl-1.jpg"))
                .then((value) => value.react("🔥"));
        });
    }
    if (message.content === `${config_json_1.prefix}estaca`) {
        message.channel.send(`Estás muy cerca de asesinar a nosfe`).then(() => {
            message.channel
                .send("https://static.tvtropes.org/pmwiki/pub/images/dracula-1_6352.jpg")
                .then((value) => value.react("🩸"));
        });
    }
    if (message.content === `${config_json_1.prefix}riko`) {
        message.channel.send(`BOSSU, ilumínanos <@461965694016421888>`).then(() => {
            message.channel.send("https://i.ytimg.com/vi/gyqCZwVFkL8/hqdefault.jpg");
        });
    }
    if (message.content === `${config_json_1.prefix}kinkurimson`) {
        message.channel.send(functions_1.Attachment("https://i.ytimg.com/vi/t_CfXd0zLYI/maxresdefault.jpg"));
        /* if (message.author.id === "461965694016421888") {
          message.channel.send(
            Attachment("https://i.ytimg.com/vi/t_CfXd0zLYI/maxresdefault.jpg")
          );
        } else {
          const authorId = message.author.id;
          message.channel.send(
            `<@${authorId}> parece que no tienes lo que requiere para activar éste poder`
          );
        } */
    }
});
