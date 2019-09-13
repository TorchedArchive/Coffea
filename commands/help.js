module.exports.run = (coffea, msg, args) => {
    const cmds = coffea.commands.filter(f => f.help.name === "ping")

    msg.channel.createMessage({embed: {
        color: 0x0,
        description: "e"
    }})
    console.log(cmds.map())
}

module.exports.config = {
    aliases: []
}

module.exports.help = {
    name: "help",
    desc: "Look at all the commands for Coffea.",
    usage: "help [command]"
}
