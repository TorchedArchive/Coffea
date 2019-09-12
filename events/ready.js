module.exports = (coffea) => {
    const cat = require("cat-loggr")
    const loggr = new cat()

    console.log("\n")
    loggr.log(`Coffea is now online! In ${coffea.guilds.size} guilds.`)
}
