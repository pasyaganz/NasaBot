let fs = require('fs')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0])
        throw false
    }
    let res = JSON.parse(fs.readFileSync('./src/caklontong.json'))
    let random = Math.floor(Math.random() * res.length)
    let json = res[random]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}calo untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.send2Button(m.chat, caption.trim(), '© NASA BOT', 'BANTUAN', '.calo', 'NYERAH', 'nyerah'),
        json, poin,
        setTimeout(async() => {
           if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.keterangan}`, '© NASA BOT', 'CAK LONTONG', '.caklontong')
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler
