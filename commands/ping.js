module.exports.run = (coffea, msg) => {
    msg.channel.createMessage("Pong!")
}

module.exports.config = {
    "aliases": []
}

module.exports.help = {
    "name": "ping"
}
