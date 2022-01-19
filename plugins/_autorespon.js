let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'nasa bot tidak aktif' : banned ? 'kamu dibanned' : 'NASA BOT WHATSAPP V.2.0\n\nNASA BOT DISINI !!!',
                '◪ ==〔 NASA BOT 〕=>﻿\n❏\n❏ *Creator* : _wa.me/62822648654777_\n❏ *Mode* : _Public_\n❏ *Prefix* : _Multi Prefix_\n❏ *Group Official* : _https://bit.ly/3sROEBj_\n❏ *Channel Yt* : _https://bit.ly/2XJJ3BL_\n❏ *Website* : _https://teammarvell.wordpress.com_\n❏\n◪ ==〔 INFO BOT 〕=>﻿\n❏\n❏ *Nama Bot* : _Nasa Bot_\n❏ *Nama Owner* : _KeylaCans_\n❏ *Nomer Owner* : _wa.me/62822648654777_\n❏\n◪ ==〔 THANKS 〕=>\n﻿\n© Copyright Nasa Bot 🛸\nOwner: KeylaCans\nThanks To:\nNurutomo-BochilGaming-Idham-Ariffb-Marvell',
                isBanned ? '🔓 UNBAN' : banned ? 'PEMILIK BOT' : '📂 MENU',
                isBanned ? '.unban' : banned ? '.owner' : '.menu',
                m.isGroup ? '🔒 BAN' : isBanned ? 'UNBAN' : '💸 DONASI',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi')
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send3Button(m.chat, `NASA BOT WHATSAPP V.2.0`.trim(), '┌〔 Undang Bot ke Grup 〕\n├ 7 Hari / Rp 5,000\n├ 30 Hari / Rp 20,000\n└────\n\n┌〔 Sewa Bot Via 〕\n├ Pulsa, Emoney\n└────\n\n┌〔  Pulsa 〕\n├ Telkom [082264865477]\n└────\n\n┌〔 Emoney 〕\n├ Gopay [082264865477]\n└────\n\n┌〔 Penting 〕\n├ Bot On 24 Jam\n├ Fitur Group\n├ Welcome Image\n├ Anti Link\n├ Auto kick\n├ Anti Delete\n├ Bot Wajib Admn\n├ Owner Wajib Admn\n├ Spam,Telfun,Vc : Banned\n├ Dll\n├ Minat?\n├ Chat Owner/Pemilik Bot\n└────\n\n© Copyright Nasa Bot 🛸\nOwner: KeylaCans\nNote: Jika Wa Mod Silahkan Ketik #menuall WhatsApp Mod Tidak Support Button\nThanks To:\nNurutomo-BochilGaming-Idham-Ariffb-Marvell', '📂 LIST MENU', '.list', '👤 PEMILIK BOT', '.owner', '📍 GROUP OFFICIAL', '.mygrup', { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    let str = `
وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_Wa\'alaikumussalam wr.wb._
`.trim()
    if (isSalam && !m.fromMe) {
        await conn.fakeReply(m.chat, str, '0@s.whatsapp.net', '*BOT BY MARVELL*')
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`NASA BOT By Marvell-Keyla | Aktif Selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} `).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
