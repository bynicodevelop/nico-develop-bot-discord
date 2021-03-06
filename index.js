const spin = require('string-content-spinner')
const env = require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()

let config = {}

if (env.error && !process.env.TOKEN) {
    throw env.error
}

if(!process.env.TOKEN) {
    config = env.parsed
}

bot.on("guildMemberAdd", member => {
    const username = member.user.username

    const welcomeString = `{Hi|Hello|Salut|bonjour} ${username}, {bienvenue|welcome}.`
    const firstMessageString = `{N'hésite pas à|Profites-en pour nous} en dire plus sur {ton langage préféré|quel langage tu es|la techno que tu utilises} et {tes objectifs|quels sont tes objectif}`

    member.guild.channels.cache.find(ch => ch.name === 'général').send(spin(welcomeString))
    member.guild.channels.cache.find(ch => ch.name === 'général').send("C'est Mr Robot qui parle")
    member.guild.channels.cache.find(ch => ch.name === 'général').send("Nico n'est pas très loin, mais il m'a demandé de prendre le relais, alors...")
    member.guild.channels.cache.find(ch => ch.name === 'général').send(spin(firstMessageString))
});

bot.login(config.TOKEN || process.env.TOKEN)
