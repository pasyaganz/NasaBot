let handler = function (m) {
  // this.sendContact(m.chat, '62895334402456', 'Andy', m)
  conn.sendContact(m.chat, '62895334402456', 'PasyaGanz', m)
  conn.fakeReply(m.chat, 'Jangan Spam Owner Aku Kak :)\nwa.me/62895334402456', '62895334402456@s.whatsapp.net', '*CREATOR/OWNER : Pemilik Bot*', 'status@broadcast')
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
