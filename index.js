const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTAwMDg3MjgzODA4NjMyODkz.YW8Nmw.3uiVCKFMEmY3TO6lkgpLT3DSonI"

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})



const welcomeChannelId = "928035745992683549"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)