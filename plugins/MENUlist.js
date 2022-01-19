let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
const defaultMenu = {
  before: `
┏━━°❀❬ *%me* ❭❀°━━┓
┃•  %ucapan, %name!
┃•  Limit : *%limit Limit*
┃•  Role : *%role*
┃•  Level : *%level (%exp / %maxexp)* [%xp4levelup]*
┃
┃•  Tanggal : *%week %weton, %date*
┃•  Tanggal Islam : *%dateIslamic*
┃•  Jam : *%time*
┃•  Uptime : *%uptime (%muptime)*
┃•  Database : *%rtotalreg Dari %totalreg*
┃
┃•  *Instagram* : 
┃  bit.ly/instagrampasya
┃•  *Github* : 
┃• %github
┃•  *Tiktok* :
┃ tiktok.com/@sya_sadboy_
┗━━━━━━━━━━━━━━━━

%readmore`.trimStart(),
  header: '┏━━°❀❬ *%category* ❭❀°',
  body: '┣➥ %cmd %islimit %isPremium',
  footer: '┗━━━━━━━━━━━━━━━━',
  after: `
%me
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  if (teks == 'all') tags = {
    'main': 'Utama',
    'quran': 'Al Qur\'an',
    'info': 'Info',
    'game': 'Game',
    'textpro': 'Text Pro',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
	'rpg': 'Epic RPG',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'virus': 'Virus & Bug',
    'shop': 'Shopping',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
    if (teks == 'rpg') tags = {
    'rpg': 'Epic RPG'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'virus') tags = {
    'virus': 'Virus & Bug'
  }
    if (teks == 'shop') tags = {
    'shop': 'Shopping'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }

  if (!args[0]) {
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
      "listMessage": {
        "title": "```┏━━°🪀 ❬ LIST MENU ❭ 🪀°━━┓\n┣➥ Islam\n┣➥ Game\n┣➥ Xp & Limit\n┣➥ Stiker\n┣➥ Rpg\n┣➥ Kerang Ajaib\n┣➥ Quotes\n┣➥ Admin\n┣➥ Grup\n┣➥ Premium\n┣➥ Internet\n┣➥ Anonymous\n┣➥ Nulis & Logo\n┣➥ Downloader\n┣➥ Tools\n┣➥ Virus & Bug\n┣➥ Shopping\n┣➥ Fun\n┣➥ Database\n┣➥ Vote & Absen\n┣➥ Pengubah Suara\n┣➥ Jadi Bot\n┣➥ Info\n┣➥ Owner\n┣➥ Tanpa Kategori\n┗━━━━━━━━━━━━━━━━```",
        "description": "\n```NOTE : \nBOT TIDAK AKAN MERESPON DI DALAM GRUP JIKA PESAN SEMENTARA TIDAK DI MATIKAN.\nJIKA INGIN MELIHAT FITURNYA\nSILAHKAN KLIK DI BAWAH INI. 👇🏻👇🏻👇🏻\n© NASA BOT WHATSAPP V.2.0```",
        "buttonText": "KLIK KAK..",
        "listType": "SINGLE_SELECT",
        "sections": [
          {
            "rows": [
              {
                "title": `Semua Perintah`,
                "description": "List Fitur All",
                "rowId": ".? all"
              }, {
                "title": "Game",
                "description": "Fitur Bermain Game",
                "rowId": ".? game"

              }, {
                "title": "XP",
                "description": "Fitur Xp & Limit",
                "rowId": ".? xp"
              }, {
                "title": "Stiker",
                "description": "Fitur Membuat Stiker",
                "rowId": ".? stiker"
              }, {
                "title": "rpg",
                "description": "Fitur Rpg Atau Judi",
                "rowId": ".? rpg"
              }, {
                "title": "Kerang Ajaib",
                "description": "Fitur Halu",
                "rowId": ".? kerang"
              }, {
                "title": "Quotes",
                "description": "Fitur Quotes",
                "rowId": ".? quotes"
              }, {
                "title": "Admin",
                "description": "Fitur Admin Grup",
                "rowId": ".? admin"
              }, {
                "title": "Grup",
                "description": "Fitur Grup",
                "rowId": ".? grup"
              }, {
                "title": "Premium",
                "description": "Fitur Khusus Member Premium",
                "rowId": ".? premium"
              }, {
                "title": "Internet",
                "description": "Fitur Internet",
                "rowId": ".? internet"
              }, {
                "title": "Anonymous",
                "description": "Yntkts",
                "rowId": ".? anonymous"
              }, {
                "title": "Nulis & Logo",
                "description": "Fitur Menulis & Buat Logo",
                "rowId": ".? nulis"
              }, {
                "title": "Downloader",
                "description": "Kamu Bisa Download Sesuatu Dari Fitur Ini",
                "rowId": ".? downloader"
              }, {
                "title": "Tools",
                "description": "Fitur Yang Menyenangkan",
                "rowId": ".? tools"
              }, {
                "title": "Virus & Bug",
                "description": "Bahaya Khusus Owner & Premium",
                "rowId": ".? virus"
              }, {
                "title": "Shopping",
                "description": "Toko Bot Jangan Lupa Di Beli",
                "rowId": ".? shop"
              }, {
                "title": "Fun",
                "description": "Fitur Yang Keren",
                "rowId": ".? fun"
              }, {
                "title": "Database",
                "description": "Yntkts",
                "rowId": ".? database"
              }, {
                "title": "Vote & Absen",
                "description": "Bisa Buat Absen & Vote",
                "rowId": ".? vote"
              }, {
                "title": "Al-Qur\'an",
                "description": "Fitur Islam",
                "rowId": ".? quran"
              }, {
                "title": "Pengubah Suara",
                "description": "Ada Suara Robot",
                "rowId": ".? audio"
              }, {
                "title": "Jadi Bot",
                "description": "Jadi Bot Tinggal Scan Aja",
                "rowId": ".? jadibot"
              }, {
                "title": "Info",
                "description": "Info Bot",
                "rowId": ".? info"
              }, {
                "title": "Tanpa Kategori",
                "description": "Tidak Ada Apa Apa",
                "rowId": ".? tanpakategori"
              }, {
                "title": "Owner",
                "description": "Khusus Owner",
                "rowId": ".? owner"
              }
            ]
          }
        ], "contextInfo": {
          "stanzaId": m.key.id,
          "participant": m.sender,
          "quotedMessage": m.message
        }
      }
    }, {}), { waitForAck: true })
    throw 0
  }
  //   throw `
  // ┌〔 DAFTAR MENU 〕
  // ├ ${_p + command} all
  // ├ ${_p + command} game
  // ├ ${_p + command} xp
  // ├ ${_p + command} stiker
  // ├ ${_p + command} rpg
  // ├ ${_p + command} kerang
  // ├ ${_p + command} quotes
  // ├ ${_p + command} admin
  // ├ ${_p + command} group
  // ├ ${_p + command} premium
  // ├ ${_p + command} internet
  // ├ ${_p + command} anonymous
  // ├ ${_p + command} nulis
  // ├ ${_p + command} downloader
  // ├ ${_p + command} tools
  // ├ ${_p + command} virus
  // ├ ${_p + command} shop
  // ├ ${_p + command} fun
  // ├ ${_p + command} database
  // ├ ${_p + command} vote
  // ├ ${_p + command} quran
  // ├ ${_p + command} audio
  // ├ ${_p + command} jadibot
  // ├ ${_p + command} info
  // ├ ${_p + command} tanpa kategori
  // ├ ${_p + command} owner
  // └────  
  //     `.trim()

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      ucapan: ucapan(),
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2Button(m.chat, text.trim(), '© Copyright Nasa Bot 🛸\nOwner: PasyaGanz', '👤 PEMILIK BOT', '.owner', '🖇 SCRIPT BOT', '.sc', { quoted: m })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', 'list', '.?']]
handler.tags = ['main']
handler.command = /^(menu|help|list|.?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi 🌚"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 12) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌆"
  }
  if (time >= 19) {
    res = "Selamat Malam ⛼"
  }
  return res
}
