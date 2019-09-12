module.exports = (coffea, msg) => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let mssg = msg.content.toLowerCase() || msg.content.toUpperCase()
    const prefixes = ["c ", "c!", "coffee ", `<@!${coffea.user.id}>`, `<@${coffea.user.id}>`]
    let prefix = false
    for(const tprefix of prefixes) {
        if(mssg.startsWith(tprefix)) prefix = tprefix;
    }

    if(!prefix) return;
}
