let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
 if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Error!'
conn.sendFile(m.chat, json.url, '', '© NASA BOT', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['neko1']
handler.tags = ['weebs']
handler.command = /^neko1$/i

module.exports = handler
