let handler = async (m, { conn, usedPrefix, command }) => {
await conn.fakeReply(m.chat, '*Group Bot By PasyaGanz* ', '0@s.whatsapp.net', '*NASA BOT*', 'status@broadcast')
  await conn.send3Button(m.chat, `❗*「 GROUP OFFCIAL 」*`, 
'[ *Group Bot WhatsApp* ] 🚀\nhttps://chat.whatsapp.com/H3ON3Cc5tKfAzFGaP1M2y9', '📂 LIST MENU', '.list', '👤 PEMILIK BOT', '.owner', '💸 SEWA BOT', '.sewa',)
}
handler.help = ['mygroup']
handler.tags = ['info']
handler.command = ['mygroup', 'mygrup', 'gcbot']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
