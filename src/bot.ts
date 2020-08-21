import {config} from 'dotenv';
import {Client, Message, MessageAttachment} from 'discord.js'
import  {prefix} from './config.json';
import {Attachment} from './functions'

config();

const client: Client = new Client()

// @ts-ignore
client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
    if (client.user) {
        client.user.setActivity('cosas brillantes', {type: 'WATCHING'});
    }
    console.log('Listo!');
})

client.on('message', (message: Message) => {
    if (message.content === `${prefix}nosfe`) {
        const date = new Date();
        const time = date.getHours();
        if (time > 1 && time < 4) {
            message.channel.send('Es la hora del Nosfe, ejecuta !!callnosfe para llamarlo.').then( () => {
                message.channel.send(Attachment('https://www.cinemascomics.com/wp-content/uploads/2019/10/nosferatu-1922-reboot.jpg')).then(value => value.react('📟'))
            })
        } else {
            message.channel.send('Es muy posible que a esta hora Nosfe se encuentre durmiendo, ejecuta !!nosfetime para consultar su horario.')
                .then(value => value.react('⚰'))
        }
    }
    if (message.content === `${prefix}nosfetime`) {
        message.channel.send('El nosfe despierta entre las 2 y 3 am').then(value => value.react('🕰'));
    }
    if (message.content === `${prefix}callnosfe`) {
        message.channel.send(`Despierta Nosfe 🧛 <@314533506275606529>`).then( () => {
            message.channel.send(Attachment('http://www.gatropolis.com/wp-content/uploads/2017/08/Remake-Nosferatu.jpg')).then(value => value.react('🧛'));
        })
    }
    if (message.content === `${prefix}help`) {
        message.channel.send('💁🏻 ***Comandos actuales:*** \n' +
            ' **!!nosfe:** Consulta si Nosfe está disponible ⚰️ \n' +
            ' **!!nosfetime:** Consulta horario de Nosfe 🕰️\n' +
            ' **!!callnosfe:** Hace un llamado a Nosfe 📟\n' +
            ' **!!pezon:** Invocar a un trapito putaku <:renzo2:596970235689566232>\n' +
            ' **!!profe:** Invocar al rey de los camarones CHAAAAAA 🔥\n' +
            ' **!!riko** Para esas noches de soledad \n' +
            ' **!!estaca:** Usar con cuidado, éste comando puede acabar definitivamente con nosfe 🩸\n' +
            ' **!!kinkurimson:** Activa el poder de Kin Kurimson (solo puede ser activado por el pack master) \n' +
            ' **!!ajo:** Ataca a Nosfe 🧄 \n ').then(value => value.react('707023961183092777'));
    }
    if (message.content === `${prefix}ajo`) {
        message.channel.send(`Hiriendo al nosfe... \n🧄🧄🧄🧄🧄`).then( () =>
            message.channel.send(Attachment('https://i.pinimg.com/originals/6a/43/b1/6a43b14ee7b3b10695bc9ad373305432.gif')).then(value => value.react('🧄'))
        )
    }
    if (message.content === `${prefix}pezon`) {
        message.channel.send(`<@313502945964589057> invocado`).then(value => value.react('🍿'));
    }
    if (message.content === `${prefix}profe`) {
        message.channel.send(`<@560481541986189348> CHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`).then( () => {
            message.channel.send(Attachment('https://i0.wp.com/www.thatmomentin.com/wp-content/uploads/2015/08/bubbl-1.jpg')).then(value => value.react('🔥'))
        }
        );
    }
    if (message.content === `${prefix}estaca`) {
        message.channel.send(`Estás muy cerca de asesinar a nosfe`).then( () => {
                message.channel.send('https://static.tvtropes.org/pmwiki/pub/images/dracula-1_6352.jpg').then(value => value.react('🩸'))
            }
        );
    }
    if (message.content === `${prefix}riko`) {
        message.channel.send(`BOSSU, ilumínanos <@461965694016421888>`).then( () => {
            message.channel.send('https://i.ytimg.com/vi/gyqCZwVFkL8/hqdefault.jpg')
        })
    }
    if (message.content === `${prefix}kinkurimson`) {
        if (message.author.id === '461965694016421888') {
            message.channel.send(Attachment('https://i.ytimg.com/vi/t_CfXd0zLYI/maxresdefault.jpg'))
        } else {
            const authorId = message.author.id
            message.channel.send(`<@${authorId}> parece que no tienes lo que requiere para activar éste poder`)
        }
    }
})
