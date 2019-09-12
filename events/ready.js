module.exports = (coffea) => {
    const cat = require("cat-loggr")
    const loggr = new cat()

    loggr.log(`\nCoffea is now online! In ${coffea.guilds.size} guilds.`)
}
