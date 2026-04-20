import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201223672323', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
  // Owner 1
    { name: "Gojo ", lid: "247579682029763@lid", jid: "201022846899@s.whatsapp.net" },
  // Owner 2
    { name: "yamu", lid: "221307316789354@lid", jid: "201285247098@s.whatsapp.net" },
  // Owner 3
    { name: "yosaf", jid: "201210224775@s.whatsapp.net", lid: "50414477168824@lid" },
  ],
  settings: { noWelcome: true },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ 𝙋𝙊𝙈𝙉𝙄 🎪 〈", 
  nameChannel: "MA31 ~ Gojo 🕷️", 
  idChannel: "120363225356834044@newsletter",
  urls: {
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029ValxOlxIt5rnh4YGPp26"
  },
  copyright: { 
    pack: 'Go ma ـ ـا', 
    author: 'Ma'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
