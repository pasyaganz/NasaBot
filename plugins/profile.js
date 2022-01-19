let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let str = `
┏━━°❀❬ *PROFILE* ❭❀°━━┓
┃
┣➥ 👤 Name:
┣ ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} (@${m.sender.replace(/@.+/, '')})
┣➥ 📲 Number:
┣ +${m.sender.split`@`[0]}
┣➥ 🔗 Link:
┣ https://wa.me/${m.sender.split`@`[0]}
┃
┗━━━━━━━━━━━━━━━━

*© NASA BOT*
`.trim()
    let mentionedJid = [m.sender]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    
  }
}
handler.help = ['profile']
handler.tags = ['rpg']
handler.command = /^(profile|profil|pp|propile|propil)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)