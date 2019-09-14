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

    const args = msg.content.slice(prefix.length).trim().split(" ")
    const command = args.shift().toLowerCase()
    try {
        let cmd;
        if(coffea.commands.has(command)) {
            cmd = coffea.commands.get(command)
        } else if(coffea.aliases.get(command)) {
            cmd = coffea.commands.get(coffea.aliases.get(command))
        } else {
            return;
        }
        cmd.run(coffea, msg, args)
    } catch(err) {
        console.log(err)
    }
}
