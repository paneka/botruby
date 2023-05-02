const fs = require('fs')
const chalk = require('chalk')

// composting
global.autoTyping = false
global.autoRecord = false

// database
global.public = true
global.chatsSettings = JSON.parse(fs.readFileSync('./database/chatsettings.json'))
global.antiwagc = chatsSettings.anti.whatsappGroups
global.antiwadm = chatsSettings.anti.whatsappDirect
global.antiyt = chatsSettings.anti.youtube
global.antiig = chatsSettings.anti.instagram
global.antifb = chatsSettings.anti.facebook
global.antitg = chatsSettings.anti.telegram
global.antitt = chatsSettings.anti.tiktok
global.antitwt = chatsSettings.anti.twitter
global.antidocs = chatsSettings.anti.documents
global.antitoxic = chatsSettings.anti.toxic
global.antiflood = chatsSettings.anti.flood
global.antilinks = chatsSettings.anti.links
global.xplevel = chatsSettings.extras.xpLevel
global.nsfw = chatsSettings.extras.NSFW
global.notbuttons = chatsSettings.extras.notButtons
global.bannedGroup = chatsSettings.banned.groups
global.bannedUser = chatsSettings.banned.users

// owner vcard
global.owner = ['5491136736564'] // número de teléfono
global.ownername = "Daiya" // nombre
global.social1 = "ig: daiya.blue" // red social 1
global.social2 = "tiktok: daiya.blue" // red social 2
global.location = "blossomcrys" // localidad

// bot config
global.botname = 'Ruby' // nombre del bot
global.website = 'https://twitch.tv/blossomcrys' // website 1
global.website2 = "https://www.youtube.com/@blossomcrys" // website 2
global.website3 = "https://discord.gg/S28VQf68Mb" // website 3
global.themeemoji = "💎" // emoji personalizable
global.packname = "Sticker By Ruby-chan" // nombre del pack de stickers
global.author = botname // nombre del autor de stickers
global.wm = "RUBY" // marca de agua que aparecerán en los mensajes del bot
global.prefa = ['!'] // prefijo para llamar al bot

// procesamiento mensajes
global.mess = {
    success: 'Ruby lo logró, ama',
    notAdmin: 'Solo los que la señorita Dai confía pueden usar esa función, ni lo intentes sucio humano',
    bot: '¿Quién te crees qué eres? Solo la señorita Dai puede hacer eso, inútil',
    botNotAdmin: 'Ruby debe tener más poder para cumplir esa función',
    wait: 'Humano, paciencia por favor...',
    error: 'Necesito proteger a la señorita Dai...Necesito más sangre...tsk...',
    banMember: 'Ya no eres digno de pisar Reluxya, ni acercarte a Blossom Crys, me das lástima.',
    banGroup: 'Este es el fin...Ruby logró aniquilar a todos, por favor no llore niña...'
}

// tema
global.thum = fs.readFileSync('./media/theme/rubybot.jpg')
global.welcomeImage = fs.readFileSync('./media/theme/bienvenido.jpg')

// otros
global.sessionName = 'session'
global.sp = ''

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
