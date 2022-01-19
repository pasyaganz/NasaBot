let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.hekel)}”`, '', 'BUCIN', `${usedPrefix + command}`)
}
handler.help = ['hekel']
handler.tags = ['quotes']
handler.command = /^(hekel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.hekel = [ 
"Dear kamu yang tertulis di halaman defacementku.. Kapan jadi pacarku?",
"Kalau donlot file .iso pake command 'wget -c' biar pas putus ditengah jalan bisa nyambung lagi kayak hubungan kita",
"Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink yg setiap saat bisa mendinginkan ku",
"Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu",
"jadi kamu deketin aku cuma mau cat /etc/passwd-in aku? Terus kamu hek temen2 kostku, gitu?",
"berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
"Masa aku harus pake teknik symlink bypass buat buka2 folder hatimu yg open_basedir enabled.",
"Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi :|",
"Jangan cuma bisa inject hatinya, tp harus bisa patchnya jg. Biar nggak selingkuh sama heker lain",
"Aku memang programmer PHP, tapi aku nggak akan php-in kamu kok.",
"Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
"Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! ( ‾_‾ )",
"Aku deketin kamu cuma untuk redirect ke hati temenmu.",
"Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
"Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required)",
"kamu tau ga bedanya kamu sama sintax PHP,kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain >_<",
"Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus skrg bisa apa aja? | Menjaring hatimu lewat komputerku | :*",
"Jika cinta itu Array, maka, cintaku padamu tak pernah empty jika di unset().",
"SQLI ( Structured Query Love Injection )",
"aku ingin kamu rm -rf kan semua mantan di otak mu,aku lah root hati kamu",
"senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
"kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu <3",
"Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
"hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta",
"Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja",
"Jangan men-dualboot-kan hatiku kepadamu",
"KDE klh Cantiknya, GNOME klh Simplenya, FluxBox klh Ringannya, pokonya Semua DE itu Kalah Sama Kamu",
"Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
"/mfspayload hati/gombal/bapakmu LHOST=L.0.v.3 LPORT=007 X > RasaCinta.exe",
"cinta kita gakan bisa dipisahkan walau setebal apapun itu firewall !!"
]
