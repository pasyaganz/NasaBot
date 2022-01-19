//nothing to say ,_,
let fs = require ('fs')
let path = require('path')
let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler  = async (m, { conn }) => {
let poto = fs.readFileSync(path.join(__dirname , '../src/gopay.jpg'))
let ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "62895334402456-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 99999999,status: 200, thumbnail: fs.readFileSync('./src/gopay.jpg'), surface: 200, message: `NASABOT`, orderTitle: '\n\n\n\n\n', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
await conn.updatePresence(m.chat, Presence.recording)
let owh = fs.readFileSync(path.join(__dirname , '../src/gopay.jpg')).toString('base64')
let teks = `
┌〔 Undang Bot ke Grup 〕
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 20,000
└────

┌〔 Sewa Bot Via 〕
├ Pulsa, Emoney
└────
┌〔  Pulsa 〕
├ Telkom [082274423698]
└────
┌〔 Emoney 〕
├ Dana [0895334402456]
└────

┌〔 Penting 〕
├ Bot On Kalau Owner Punya Waktu
├ Fitur Group
├ Welcome Image
├ Anti Link
├ Auto kick
├ Anti Delete
├ Bot Wajib Admn
├ Owner Wajib Admn
├ Spam,Telfun,Vc : Banned
├ Dll
├ Minat?
├ Chat Owner/Pemilik Bot
└────`
let piltek = `NASA BOT WA DI RECODE OLEH MARVELL DAN SEDIKIT MODIFIKASI DARI PASYA GANZ`     // Kalau Mau Ganti Jangan di Hapus Hargai Juga Yg Recode Plen Kasian :)
   conn.relayWAMessage(conn.prepareMessageFromContent(m.chat,{ "orderMessage": { "itemCount": 99999, "message": teks, "footerText": "*_© Buggy By Pasya_*", "thumbnail": poto, "surface": 'CATALOG' }}, {quoted:ftroli,
    externalAdReply: {
                    title: 'NASA BOT',
                    body: `TYDAK LEG? OKE:>`,
                    mediaType: 2,
        			sourceUrl: 'https://github.com',
                    thumbnailUrl: await conn.getProfilePicture(conn.user.jid) 
                }}))
   
    
    
}
handler.help = ['sewa']
handler.tags = ['info', 'shop']
handler.command = ['sewa', 'sewa bot', 'sewabot']
handler.owner = false
handler.premium = false

module.exports = handler