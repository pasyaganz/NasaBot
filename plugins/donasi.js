let handler = async (m, { conn, usedPrefix, command }) => {
await conn.fakeReply(m.chat, '*Sultan Mau Donasi Ya?* ', '0@s.whatsapp.net', '*NASA BOT*')
  await conn.send3Button(m.chat, `
┌〔 Donasi • Pulsa 〕
├ Telkom [082274423698]
└────
┌〔 Donasi • Emoney 〕
├ Dana [0895334402456]
└────
┌〔 Donasi • Link 〕
├ saweria : -
└────`, 
'© Copyright Nasa Bot 🛸\nOwner: PasyaGanz', '📂 LIST MENU', '.list', '👤 PEMILIK BOT', '.owner', '📍 GROUP OFFICIAL', '.mygrup',)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
