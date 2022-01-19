let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.send3Button(m.chat, `NASA BOT WHATSAPP V.2.0\n\n😴😴😴😴😴`, 
'© Copyright Nasa Bot 🛸\nOwner: KeylaCans\nNote: Jika Wa Mod Silahkan Ketik #menuall WhatsApp Mod Tidak Support Button\nThanks To:\nNurutomo-BochilGaming-Idham-Ariffb-Marvell', '📂 LIST MENU', '.list', '👤 PEMILIK BOT', '.owner', '📍 GROUP OFFICIAL', '.mygrup',)
}
handler.help = ['turu', 'tidur']
handler.tags = ['tools']
handler.command = ['turu', 'tidur']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
