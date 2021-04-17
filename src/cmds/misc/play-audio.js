const Commando = require("discord.js-commando");
const path = require("path");

module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "play",
      group: "misc",
      memberName: "play",
      description: "Plays some audio",
    });
  }

  async run(message) {
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
      subCmd == "atrapada"
    ) {
      voice.channel.join().then((connection) => {
        connection.play(path.join(__dirname, `../../files/${subCmd}.ogg`));
      });
    }
  }
};
