exports.run = function(coffea, msg, args) {
    if (msg.author.id !== "439373663905513473") {
        msg.channel.createMessage("This brew is not for you to drink (No permissions).")
    } else {
        if (!args[0]) return msg.channel.createMessage("So.. where is the code?")
        try {
            let code = args.join(" ")
            var evaled = eval(code);
            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);
            if (code.includes("--silent")) {
                msg.channel.createMessage(clean(evaled))
            } else {
                msg.channel.createMessage({
                    embed: {
                        color: 0x00CA06,
                        description: `\`Eval Result\`:
                        \`\`\`js
                        ${clean(evaled)}
                        \`\`\``
                    }
                })
            }
        } catch (err) {
            msg.channel.createMessage(`\`Error\`:
                \`\`\`js
                ${clean(err)}
                \`\`\``);
        }
    }
}

function clean(text) {
    if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
        return text;
    }
}

exports.config = {
    aliases: [],
    owner: true
}

exports.help = {
    name: "eval",
    desc: "Runs JavaScript code.",
    usage: "eval <code>"
}
