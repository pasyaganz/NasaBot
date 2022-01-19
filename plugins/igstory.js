const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `uhm.. username nya mana?\n\ncontoh:\n\n${usedPrefix + command} rhynz`
if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`
  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    for (let { downloadUrl, type } of json)
      await m.reply(global.wait)
     conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '© NASA BOT', m)

  })

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i

handler.limit = true

module.exports = handler
