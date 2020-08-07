import {config} from 'dotenv';
import {Client, Message, MessageAttachment} from 'discord.js'
import  {prefix} from './config.json';

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
            const image = new MessageAttachment('https://www.cinemascomics.com/wp-content/uploads/2019/10/nosferatu-1922-reboot.jpg');
            message.channel.send('Es la hora del Nosfe, ejecuta !!callnosfe para llamarlo.').then( () => {
                message.channel.send(image)
            })
        } else {
            message.channel.send('Es muy posible que a esta hora Nosfe se encuentre durmiendo, ejecuta !!nosfetime para consultar su horario.');
        }
    }
    if (message.content === `${prefix}nosfetime`) {
        message.channel.send('El nosfe despierta entre las 2 y 3 am');
    }
    if (message.content === `${prefix}callnosfe`) {
        const image = new MessageAttachment('http://www.gatropolis.com/wp-content/uploads/2017/08/Remake-Nosferatu.jpg');
        message.channel.send(`Despierta Nosfe🧛 <@314533506275606529>`).then( () => {
            message.channel.send(image)
        })
    }
    if (message.content === `${prefix}help`) {
        message.channel.send('```💁🏻 comandos actuales: \n' +
            ' !!nosfe: consulta si Nosfe está disponible ⚰️ \n' +
            ' !!nosfetime: consulta horario de Nosfe 🕰️\n' +
            ' !!callnosfe: hace un llamado a Nosfe 📟\n' +
            ' !!pezon: Invocar a un trapito putaku <:renzo2:596970235689566232>\n' +
            ' !!ajo: ataca a Nosfe 🧄 \n ``` ')
    }
    if (message.content === `${prefix}ajo`) {
    	const image = new MessageAttachment('https://i.pinimg.com/originals/6a/43/b1/6a43b14ee7b3b10695bc9ad373305432.gif');
        message.channel.send(`Hiriendo al nosfe... \n🧄🧄🧄🧄🧄`).then( () =>
            message.channel.send(image)
        )
    }
    if (message.content === `${prefix}pezon`) {
        message.channel.send(`<@313502945964589057> invocado`)
    }
   
})
