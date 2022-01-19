let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 43200000) return // setiap 12 jam
    await this.sendButton(m.chat, `
┌〔 *NASA BOT* 〕
│ 
├ _Hai 👋🏻_
├ ${ucapan()}
├ ${user.banned ? 'Kamu Dibanned' : 'Ada Yang Bisa Saya Bantu?'}
├ Saya Nasa Bot WhatsApp
├ DiProgram Untuk Menjawab
│Pesan Secara Otomatis
├ Jika Di Banned Atau Ada Bug
│Lapor Owner.
├ _Rules :_
├ Dilarang Spam, Vc, Telfun
├ Data Yang Kamu Kirim Di Bot
│Akan Masuk Ke Database
├ Dilarang Share 18+
├ Bot Ada Fitur AutoBanned
│Jika Larangan Di Langgar
│Bot Akan Banned Kamu:V
│ 
└────      
`.trim(), '© NASA BOT BY PASYA GANZ', user.banned ? 'PEMILIK BOT' : 'MENU', user.banned ? ',owner' : '.menu')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat DiniHari 🌚"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌆"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌃"
    }
    return res
}
