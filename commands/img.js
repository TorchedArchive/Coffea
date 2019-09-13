module.exports.run = async (coffea, msg) => {
    const fetch = require("node-fetch")
    const res = await fetch("https://coffee.alexflipnote.dev/random.json").then(res => res.json())
    
    msg.channel.createMessage({embed: {
        color: 0xE9D115,
        description: "Perfect coffee.. ☕",
        image: {
            url: res.file
        },
        footer: {
            text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
        }
    }})
}

module.exports.config = {
    "aliases": []
}

module.exports.help = {
    name: "img",
    desc: "Provide a random image of coffee.",
    usage: "img"
}
