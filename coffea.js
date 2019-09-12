const Eris = require("eris")
const config = require("./config.json")
const coffea = new Eris(config.token)

const CatLoggr = require("cat-loggr")
const loggr = new CatLoggr()

const fs = require("fs")
// Event Handler
fs.readdir("./events/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")

    if(files.length === 0) {
        loggr.log("There are no events to load")
        return;
    }

    for(let i = 0; i < files.length; i++) {
        const event = require(`./events/${files[i]}`)
        coffea.on(files[i].slice(0, -3), event.bind(null, coffea))
    }
})

coffea.connect()
