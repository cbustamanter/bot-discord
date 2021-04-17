const Commando = require("discord.js-commando");
const path = require("path");

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "p",
      group: "misc",
      memberName: "p",
      description: "Plays some audio",
    });
  }

  async run(message) {
    let timeoutID;
    const { voice } = message.member;
    const { content } = message;
    const options = content.split(" ");
    const subCmd = options[1];
    if (!voice.channelID) {
      message.reply("Debes estar conectado en un canal de voz");
      return;
    }

    if (
      subCmd == "toyready" ||
      subCmd == "proferisa" ||
      subCmd == "nena" ||
      subCmd == "camarones" ||
      subCmd == "dura" ||
      subCmd == "medejaronsolo" ||
      subCmd == "atrapada" ||
      subCmd == "piensachato" ||
      subCmd == "tuturu" ||
      subCmd == "kc" ||
      subCmd == "omaewa" ||
      subCmd == "zawarudo"
    ) {
      voice.channel.join().then((connection) => {
        connection.play(path.join(__dirname, `../../files/${subCmd}.ogg`));
        timeoutID = setTimeout(() => {
          console.log('dc');
          connection.disconnect();
        }, 300000); // 5 min
      });
    }
    clearTimeout(timeoutID);
    timeoutID = undefined;
  }
};
