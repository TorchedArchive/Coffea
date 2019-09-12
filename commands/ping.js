module.exports.run = (coffea, msg) => {
    msg.channel.createMessage({embed: {
        color: 0xE9D115,
        description: `🏓 Pong! ${coffea.shards.get(0).latency}ms`
    }})
}

module.exports.config = {
    "aliases": []
}

module.exports.help = {
    "name": "ping",
    "desc": "See how long it takes me to deliver coffee to discord. (Response Time)"
    "usage": "ping"
}
