require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { menuAll, menuAdmin } = require('./src/texts/menu.js')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownerID = owner + '@s.whatsapp.net'

const time = moment.tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')
const date = moment.tz('America/Argentina/Buenos_Aires').format('DD/MM/YYYY')
const time2 = moment().tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')  
if (time2 > "20:00:00") { var ucapanWaktu = `Buenas noches! 🌌` }
else if (time2 > "12:00:00") { var ucapanWaktu = `Buenas tardes! 🌅` }
else if (time2 > "06:00:00") { var ucapanWaktu = `Buenos días! 🌄` }
else if (time2 > "00:00:00") { var ucapanWaktu = `Buenas noches! 🌌` }

module.exports = RubyBOT = async (RubyBOT, m, chatUpdate, store) => { try {
	var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
	var budy = (typeof m.text == 'string' ? m.text : '')
	var prefix = prefa ? /[!]/.test(body) ? body.match(/[!]/)[0] : "!" : prefa ?? global.prefix
	const isCmd = body.startsWith(prefix)
	const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null
	const args = body.trim().split(/ +/).slice(1)
	const pushname = m.pushName || "No Name"
	const botNumber = await RubyBOT.decodeJid(RubyBOT.user.id)
	const isCreator = [botNumber, ...global.owner, global.snuUUQ].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	const itsMe = m.sender == botNumber ? true : false
	const text = q = args.join(" ")
	const quoted = m.quoted ? m.quoted : m
	const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
	const type = Object.keys(mek.message)[0]
	const from = mek.key.remoteJid
	const content = JSON.stringify(mek.message)
	const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''
	const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()
	const groupMetadata = m.isGroup ? await RubyBOT.groupMetadata(m.chat).catch(e => {}) : ''
	const groupName = m.isGroup ? groupMetadata.subject : ''
	const participants = m.isGroup ? await groupMetadata.participants : ''
	const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const groupOwner = m.isGroup ? groupMetadata.owner : ''
	const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	const isgroupban = bannedGroup.includes(m.sender)
	const isuserban = bannedUser.includes(m.sender)
	let isantilinks = true
	let isNumber = x => typeof x === 'number' && !isNaN(x)
	let user = global.db.data.users[m.sender]
	if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    let setting = global.db.data.settings[botNumber]
    if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	// const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
	// const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
	// const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
	// const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
	// const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
	// const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
	// const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
	// const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	// const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

	const pickRandom = (list) => { return list[Math.floor(Math.random() * list.length)] }
	const reply = (teks) => { RubyBOT.sendMessage(m.chat, { text: teks, footerText: `${botname}` }, { quoted: m }) }
	const action = (kice) => {
		if (m.key.fromMe) return
		if (isAdmins || isCreator) return reply(`👁❕`)
		reply(`👁❗`)
		RubyBOT.groupParticipantsUpdate(m.chat, [kice], 'remove').catch((err) => replyerr(err))
	}
	const onlyAdmin = () => { if (!isAdmins && !isCreator) return m.reply(`${mess.notAdmin}`) }
	const requireAdmin = () => { if (!isBotAdmins) return m.reply(`${mess.botNotAdmin}`) }

	if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
		let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
		let { text, mentionedJid } = hash
		let messages = generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
		    userJid: RubyBOT.user.id,
		    quoted: m.quoted && m.quoted.fakeObj
		})
		messages.key.fromMe = areJidsSameUser(m.sender, RubyBOT.user.id)
		messages.key.id = m.key.id
		messages.pushName = m.pushName
		if (m.isGroup) messages.participant = m.sender
		let msg = {
		    ...chatUpdate,
		    messages: [proto.WebMessageInfo.fromObject(messages)],
		    type: 'append'
		}
		RubyBOT.ev.emit('messages.upsert', msg)
	}

	if (db.data.chats[m.chat].mute && !isPremium) return
	if (!public && !isCreator) return

	if (isantilinks) {
	    if (isUrl(m.text)) action(m.sender)
	    else if (body.includes('youtu.be' || 'youtube.com')) action(m.sender)
	}

	switch(command) {
		case 'menu': case 'ruby': case 'help': {
			reply(menuAll())
		} break
		case 'menuadmin': onlyAdmin(); {
			reply(menuAdmin())
		} break
		case 'remover': case 'añadir': case 'siadmi': case 'noadmi': onlyAdmin(); requireAdmin(); {
			if (!m.mentionedJid[0] || !q) return
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
			RubyBOT.groupParticipantsUpdate(m.chat, [users], (command === 'remover') ? 'remove' : (command === 'añadir') ? 'add' : (command === 'siadmi') ? 'promote' : (command === 'noadmi') ? 'demote' : undefined)
			reply(`Acción realizada!\n\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ᴛʜᴇᴀʟᴇᴢᴜᴜ\nᴏᴡɴᴇᴅ ʙʏ ${ownername}`)
		} break
		case 'todosruby': onlyAdmin(); {
			let teks = `*⚠ ATENCIÓN!! MENSAJE DEL ADMIN @${m.sender.split('@')[0]} ⚠*\n\n${q ? q : ''}\n\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ᴛʜᴇᴀʟᴇᴢᴜᴜ\nᴏᴡɴᴇᴅ ʙʏ ${ownername}\n\n`
			for (let mem of participants) { teks += `${themeemoji} @${mem.id.split('@')[0]}\n` }
			RubyBOT.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
		} break
		case 'botstatus': onlyAdmin(); {
			if (q === 'on') { global.public = true; reply(`bot on\n\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ᴛʜᴇᴀʟᴇᴢᴜᴜ\nᴏᴡɴᴇᴅ ʙʏ ${ownername}`) }
			if (q === 'off') { global.public = false; reply(`bot off\n\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ᴛʜᴇᴀʟᴇᴢᴜᴜ\nᴏᴡɴᴇᴅ ʙʏ ${ownername}`) }
		} break

		default: {
			if (budy.startsWith('=>')) {
				if (!isCreator) return
				function Return(sul) {
			    	sat = JSON.stringify(sul, null, 2)
			        bang = util.format(sat)
			        if (sat == undefined) bang = util.format(sul)
					return m.reply(bang)
				}
				try {
					m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) { m.reply(String(e)) }
			}

			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					m.reply(evaled)
				} catch (err) { m.reply(String(err)) }
			}

			if (budy.startsWith('$')) {
				if (!isCreator) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(err)
					if (stdout) return m.reply(stdout)
				})
			}

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = global.db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				RubyBOT.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
			}
		}
	}
} catch (err) { reply(util.format(err)) }}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})