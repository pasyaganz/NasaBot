let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'Awokwkwkwkwk',m)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i

module.exports = handler
