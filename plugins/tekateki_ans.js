const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
   if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tete/i.test(m.quoted.contentText)) return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('Soal itu telah berakhir')
    if (/^(me)?nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(this.tekateki[id][1].jawaban))}`.trim(), '© NASA BOT', 'TEKA TEKI', ',tekateki').then(() => {
            delete this.tekateki[id]
            throw 0
        })
    }
    // if (m.quoted.id == this.tekateki[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
    if (['.tete', 'BANTUAN', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tekateki[id][2]
        await this.sendButton(m.chat, `*Benar!* +${this.tekateki[id][2]} XP`, '© NASA BOT', 'TEKA TEKI', '.tekateki')
        clearTimeout(this.tekateki[id][3])
        delete this.tekateki[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
    // }
    return !0
}
handler.exp = 0

module.exports = handler
