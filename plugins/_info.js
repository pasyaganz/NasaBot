// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let handler  = async (m, { conn }) => {
await conn.fakeReply(m.chat, '*Info Nasa Bot* ', '0@s.whatsapp.net', '*NASA BOT*', 'status@broadcast')
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
┏━━°❀❬ *INFO BOT* ❭❀°━━┓
┃
┣➥ *Bot Name* : ${conn.user.name}
┣➥ *Groups Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
┣➥ *Personal Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
┣➥ *User Total* : ${totaluser.length}
┣➥ *Wa Web Name* : ${conn.browserDescription[0]}
┣➥ *Wa Web Version* : ${conn.browserDescription[2]}
┣➥ *Browser* : ${conn.browserDescription[1]}
┣➥ *Uptime Bot* : ${clockString(process.uptime() * 1000)}
┣➥ *Baterai Bot* : 🔋 ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charging...' : '⚡ Discharging'}` : 'Unknown'}
┣➥ *Host Number* : @${global.conn.user.jid.split('@')[0]}
┣➥ *Bio Bot* : ${ppstatus.status}
┃
┗━━━━━━━━━━━━━━━━

`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('./src/gapay.jpg'), contextInfo: { mentionedJid: [global.conn.user.jid]}})
conn.send2Button(m.chat, '*_Reading Info.js_*\n\n➥ Siapa Sih Pemilik Bot Ini? Click *OWNER*\n➥ Mau Cek Profile Kamu? Click *PROFILE*', '© NASA BOT 🛸', '👤 OWNER', '.owner', '🕵️‍♂️ PROFILE', '.profile', { quoted: m })

}
handler.help = ['info']
handler.tags = ['main']
handler.command = /^(alive|info)$/i
handler.fail = null

module.exports = handler