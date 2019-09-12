const Eris = require("eris")
const config = require("./config.json")
const coffea = new Eris(config.token)

const CatLoggr = require("cat-loggr")
const loggr = new CatLoggr({
    levels: [
        { name: "events", color: CatLoggr._chalk.red.bgBlack },
        { name: "commands", color: CatLoggr._chalk.black.bgRed }
    ]
})

const fs = require("fs")
// Command Handler
fs.readdir("./commands/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")

    if(files.length === 0) {
        loggr.commands("There are no commands to load!")
    }
})

// Event Handler
fs.readdir("./events/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")

    if(files.length === 0) {
        loggr.events("There are no events to load")
        return;
    }

    for(let i = 0; i < files.length; i++) {
        const event = require(`./events/${files[i]}`)
        coffea.on(files[i].slice(0, -3), event.bind(null, coffea))
        loggr.events(`Loaded ${files[i].slice(0, -3)} event successfully.`)
    }
})

coffea.connect()
