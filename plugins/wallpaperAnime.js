const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© NASA BOT', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['wallpaperanime2']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime2$/i
handler.limit = true

module.exports = handler
