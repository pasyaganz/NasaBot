let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
await conn.fakeReply(m.chat, '*Sultan Mau Jadi Member Premium* ', '0@s.whatsapp.net', '*NASA BOT*', 'status@broadcast')

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃
┣━━°❀❬ *BELI PREMIUM* ❭❀°━━┓
┃
┣➥ *Perhari : 20k*
┣➥ *Perminggu : 50k*
┣➥ *Perbulan : 90k*
┃
┣━━°❀❬ *FITUR* ❭❀°━━┓
┃
┣➥ *Join Gc✓*
┣➥ *Jadi Bot✓*
┣➥ *Tambahin Bot Ke Gc✓*
┣➥ *Dll*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo (Author)*
┣➥ *KeylaCans (Pemilik)*
┣➥ *Marvell (pengembang)*
┣➥ *Istikmal-BochilGaming*
┣➥ *Idham-DZX*
┣➥ *Ariffb*
┣➥ *Dll*
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['beliprem']
handler.tags = ['shop']
handler.command = /^beliprem$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler



