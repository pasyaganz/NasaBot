const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | NASABOT | 10k Bang?`) 
	let [poop, tytyd] = text.split("|")
	if(!poop) return m.reply("Masukkan Teks Utama")
	if(!tytyd) tytyd = "NASABOT"
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
        let img = "./src/logo.jpg"
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: tytyd,
                            orderTitle: "KeylaCans🍃",
                            thumbnail: fs.readFileSync("./src/logo.jpg"),
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}

handler.help = ['faketroli']
handler.tags = ['virus']
handler.command = /^faketroli/i
handler.owner = true

module.exports = handler
