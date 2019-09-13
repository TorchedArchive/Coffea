module.exports.run = (coffea, msg, args) => {
    const cmds = coffea.commands.filter(f => f.config.owner !== true)

    msg.channel.createMessage({embed: {
        color: 0x0,
        title: "Coffea Help Page",
        thumbnail: {
            url: coffea.user.avatarURL.replace("jpg", "png")
        },
        description: cmds.map(c => `\`${c.help.usage}\` - ${c.help.desc}`).join("\n"),
        fields: [
            {
                "name": "Links",
                "value": `**➕ [Invite](https://discordapp.com/oauth2/authorize?client_id=621773057702494238&scope=bot&permissions=379969) me to your server to use commands in your server.**
                         👥 **Join the [Support Server](https://discord.gg/xk2SjaZ) if you need help with anything.**`
            
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
