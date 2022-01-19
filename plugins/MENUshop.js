let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
await conn.fakeReply(m.chat, '*Reading Menu Shop* ', '0@s.whatsapp.net', '*NASA BOT*', 'status@broadcast')
     const rows = [
        {title: '⋮☰ SEMUA PERINTAH', description: "List Fitur All", rowId:".menu"},
        {title: '✓ OWNER', description: "Owner nya siapa? KeylaCans", rowId:"/owner"},
        {title: '💲 BELI PREMIUM', description: "Mau Beli Premium Ya", rowId:"/beliprem"},
        {title: '📝 SCRIPT BOT', description: "Free Apikey, No Enc, Bisa Recode Full", rowId:"/sc"},
        {title: '💸 SEWA BOT', description: "Murah Loh, Bot On 24 Jam", rowId:"/sewa"},
    ]
    
    const sections = [{title: "Pilih Salah Satu", rows: rows}]
    const button = {
        buttonText: 'FITUR DISINI !!!',
        description: "🛒 LIST SHOP BOT WHATSAPP 🛒\n\n📍Silahkan DiPiilih Kak📍\n\n❗JANGAN SPAM❗\n\nThanks To:\nNurutomo-Istikmal-Idham-Ariffb-Marvell\n\n© Copyright Nasa Bot 🛸",
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
} 
handler.help = ['shop', 'shopping'] 
handler.tags = ['main']
handler.command = /^(shopping|shopbot|menushop)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.private = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

