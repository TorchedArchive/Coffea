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
coffea.commands = new Map()
coffea.aliases = new Map()
fs.readdir("./commands/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")

    if(files.length === 0) {
        loggr.commands("There are no commands to load!")
    }

    for(let i = 0; i < files.length; i++) {
        let props = require(`./commands/${files[i]}`)
        props.file = files[i];
        coffea.commands.set(props.help.name, props)
        props.config.aliases.forEach(a => {
            coffea.aliases.set(a, props.help.name)
        })
        loggr.commands(`Loaded command ${files[i].slice(0, -3)} successfully.`)
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

Map.prototype.filter = function(fn, thisArg) {
	if (thisArg) fn = fn.bind(thisArg);
    const results = new Map();
    for (const [key, val] of this) {
    	if (fn(val, key, this)) results.set(key, val);        
    }
    return results;
      
}

Map.prototype.map = function(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const arr = new Array(this.size);
    let i = 0;
    for (const [key, val] of this) arr[i++] = fn(val, key, this);
    return arr;
  }
