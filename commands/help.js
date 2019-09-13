module.exports.run = (coffea, msg, args) => {
    const cmds = coffea.commands.filter(f => f.config.owner !== true)

    msg.channel.createMessage({embed: {
        color: 0x0,
        title: "Coffea Help Page",
        thumbnail: {
            url: coffea.user.avatarURL
        },
        description: cmds.map(c => `\`${c.help.usage}\` - ${c.help.desc}`).join("\n"),
        fields: [
            {
                "name": "Links",
                "value": `**Join the [Support Server](https://discord.gg/xk2SjaZ) if 
                         \nyou need help with anything.**`
            
            }
        ]
    }})
}

module.exports.config = {
    aliases: []
}

module.exports.help = {
    name: "help",
    desc: "Look at all the commands for Coffea.",
    usage: "help"
}
