let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} sekarang AFK${text ? ': ' + text : ''}
`)
conn.sendButton(m.chat, `Mau Berhenti Afk? Click Berhenti Afk\n*KHUSUS ORANG AFK*`, '© Copyright Nasa Bot 🛸', 'BERHENTI AFK', 'ya')

}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
