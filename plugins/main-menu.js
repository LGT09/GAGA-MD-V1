const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
pattern: "menu2",
alias: ["allmenu","fullmenu"],
use: '.menu2',
desc: "Show all bot commands",
category: "menu",
react: "📜",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
let totalCommands = Object.keys(commands).length;
let dec = `
╔═══════════════════════════════════════╗
║  📜 𝗚𝗮𝗴𝗮𝟬𝟵 𝗫𝗠𝗗 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁  ║
║        ⚡ 500+ Total Commands ⚡       ║
╚═══════════════════════════════════════╝

┌─────────────────────────────────────┐
│ 🎭 Created by Lil Gaga Traxx09 ©️ 2025 │
│        👑 Gaga is the King 👑        │
└─────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟭. 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 / 𝗨𝘁𝗶𝗹𝗶𝘁𝘆 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 (𝟰𝟬+)

┃ 📋 `.menu` → Show all bot features
┃ ❓ `.help` → Help menu
┃ ℹ️ `.about` → Bot info
┃ 💬 `.support` → Support channel link
┃ ⏰ `.uptime` → Show uptime
┃ 📡 `.ping` → Ping status
┃ 📊 `.status` → Show bot status
┃ 👤 `.profile` → Show user profile
┃ ✏️ `.setname` → Change bot name
┃ 📝 `.setbio` → Update bio
┃ 🖼️ `.setpic` → Update profile picture
┃ 👨‍💼 `.owner` → Show owner info
┃ 🐛 `.report` → Report a bug
┃ 🪲 `.bugmenu` → Show bug commands
┃ 🎭 `.gaga` → Brand signature
┃ 📢 `.tagall` → Tag all group members
┃ 📜 `.rules` → Show group rules
┃ 🔍 `.info` → Group info
┃ 👋 `.welcome` → Toggle welcome messages
┃ 😢 `.goodbye` → Toggle goodbye messages

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟮. 𝗔𝗱𝗺𝗶𝗻 / 𝗚𝗿𝗼𝘂𝗽 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 (𝟱𝟬+)

┃ 🚫 `.ban` → Ban user
┃ ✅ `.unban` → Unban user
┃ 🔇 `.mute` → Mute user
┃ 🔊 `.unmute` → Unmute user
┃ ⬆️ `.promote` → Promote member
┃ ⬇️ `.demote` → Demote member
┃ ➕ `.add` → Add member
┃ 👢 `.kick` → Remove member
┃ 🧹 `.clear` → Clear chat
┃ 🔒 `.lock` → Lock group
┃ 🔓 `.unlock` → Unlock group
┃ 👥 `.admins` → List admins
┃ 📣 `.tagadmin` → Tag admins
┃ 🔗 `.antilink` → Block links
┃ 🛡️ `.antispam` → Block spam
┃ ⚠️ `.warn` → Warn user
┃ ✔️ `.unwarn` → Remove warning
┃ 📖 `.logs` → View logs
┃ ⚙️ `.settings` → Show settings
┃ 🗑️ `.delete` → Delete bot message

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟯. 𝗙𝗮𝗸𝗲 𝗠𝗲𝘁𝗿𝗶𝗰𝘀 ✨ (𝗦𝗽𝗲𝗰𝗶𝗮𝗹) (𝟮𝟬+)

┃ 👥 `.fakefollowers <1-2500>` → Add fake followers
┃ 👫 `.fakemembers <1-850>` → Add fake members
┃ 💖 `.fakereactions <1-450>` → Add fake reactions
┃ 🎺 `.praise` → Send a sermon praise line
┃ 📖 `.verse` → Random Bible verse

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟰. 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 𝗧𝗼𝗼𝗹𝘀 (𝟱𝟬+)

┃ 🎵 `.ytmp3 <link>` → Download YouTube audio
┃ 🎥 `.ytmp4 <link>` → Download YouTube video
┃ 🎬 `.tiktok <link>` → TikTok download
┃ 📸 `.instagram <link>` → Instagram download
┃ 📘 `.facebook <link>` → Facebook video download
┃ 🐦 `.twitter <link>` → Twitter video download
┃ ☁️ `.soundcloud <link>` → Download song
┃ 🎧 `.spotify <link>` → Download Spotify track
┃ 📱 `.apk <app>` → Download APK
┃ 🎞️ `.movie <name>` → Download movies
┃ 📺 `.series <name>` → Download series

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟱. 𝗙𝘂𝗻 / 𝗚𝗮𝗺𝗲𝘀 (𝟲𝟬+)

┃ ❌ `.tictactoe` → Play tic tac toe
┃ 🎲 `.dice` → Roll a dice
┃ 🪙 `.coin` → Flip a coin
┃ 🔮 `.8ball` → Ask magic 8-ball
┃ 💯 `.truth` → Truth question
┃ 😈 `.dare` → Dare challenge
┃ 🧠 `.quiz` → Random quiz
┃ 🤔 `.riddle` → Random riddle
┃ 😂 `.meme` → Random meme
┃ 🃏 `.joke` → Random joke
┃ 💡 `.fact` → Random fact
┃ 😀 `.emoji-mix 😀+😂` → Emoji mix

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟲. 𝗔𝗜 / 𝗦𝗺𝗮𝗿𝘁 𝗧𝗼𝗼𝗹𝘀 (𝟴𝟬+)

┃ 🤖 `.ai <question>` → Ask Gaga09 Nexus
┃ 🧬 `.nexus` → Open Nexus assistant
┃ 🌐 `.translate <lang>` → Translate text
┃ ✍️ `.grammar` → Fix grammar
┃ 📄 `.summarize` → Summarize text
┃ 📝 `.essay <topic>` → Generate essay
┃ 📚 `.homework` → Homework helper
┃ 🔬 `.science` → Science solver
┃ ➗ `.math` → Math solver
┃ 🧮 `.calculator <expression>` → Calculate
┃ ⚗️ `.chemistry` → Chemical solver
┃ 📜 `.history` → History answers
┃ 🌍 `.geography` → Geography solver
┃ 💻 `.program <code>` → Generate code

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟳. 𝗦𝗼𝗰𝗰𝗲𝗿 / 𝗦𝗽𝗼𝗿𝘁𝘀 ⚽ (𝟰𝟬+)

┃ ⚽ .scores → Live scores
┃ 📅 .fixtures → Premier League fixtures
┃ 🐐 .ronaldo → "Ronaldo is 100× better than Messi"
┃ ⚡ .messi → Messi stats
┃ 🏆 .team <name> → Team info
┃ 👟 .player <name> → Player info
┃ 📊 .table → League table
┃ 🏅 .ucl → Champions League updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟴. 𝗦𝗲𝗮𝗿𝗰𝗵 / 𝗜𝗻𝗳𝗼 (𝟲𝟬+)

┃ 🔍 .google <query> → Google search
┃ 📖 .wiki <query> → Wikipedia
┃ 📰 .news → Latest news
┃ ☁️ .weather <city> → Weather updates
┃ ⏰ .time <city> → Local time
┃ 🎤 .lyrics <song> → Song lyrics
┃ 📚 .define <word> → Dictionary
┃ 💭 .quote → Random quote
┃ ✝️ .bible → Bible verse
┃ ☪️ .quran → Quran verse

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟵. 𝗠𝗲𝗱𝗶𝗮 / 𝗘𝗱𝗶𝘁𝗶𝗻𝗴 (𝟰𝟬+)

┃ 🎨 .sticker → Create sticker
┃ 🖼️ .toimg → Sticker to image
┃ 🎞️ .gif → Video to gif
┃ 🐌 .slowmo → Slow motion video
┃ ⚡ .fast → Speed up video
┃ 🎙️ .voice → Voice changer
┃ 😀 .emoji2img → Convert emoji
┃ 💬 .caption → Add caption

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 𝟭𝟬. 𝗘𝘅𝘁𝗿𝗮 𝗧𝗼𝗼𝗹𝘀 (𝟲𝟬+)

┃ 🌐 .ip <address> → IP lookup
┃ 📱 .sim → SIM card info
┃ ☎️ .phone → Phone info
┃ 🔢 .number <num> → Number lookup
┃ 📲 .qr <text> → Generate QR
┃ 📷 .scanqr → Scan QR
┃ ┃┃ .barcode → Generate barcode
┃ 📦 .track → Track parcel

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

╔═══════════════════════════════════════╗
║   ⚡ 𝗧𝗼𝘁𝗮𝗹: 𝟱𝟬𝟬+ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 ⚡    ║
║  🎯 𝗕𝘂𝗶𝗹𝘁 𝗳𝗼𝗿 𝗣𝗼𝘄𝗲𝗿 & 𝗦𝗽𝗲𝗲𝗱  ║
╚═══════════════════════════════════════╝

┌─────────────────────────────────────┐
│    ᴾᵒʷᵉʳᵉᵈ ᵇʸ ᴸⁱˡ ᴳᵃᵍᵃ ᵀʳᵃˣˣ⁰⁹     │
│         ©️ ²⁰²⁵ ᴬˡˡ ᴿⁱᵍʰᵗˢ         │
└─────────────────────────────────────┘

✨ 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗚𝗮𝗴𝗮𝟬𝟵 𝗫𝗠𝗗! ✨

${config.DESCRIPTION}`;

await conn.sendMessage(from, { 
    image: { url: config.MENU_IMAGE_URL || 'https://i.Kc2W/IMG-20250019.jpg' }, 
    caption: dec, 
    contextInfo: { 
        mentionedJid: [m.sender], 
        forwardingScore: 999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
            newsletterJid: '120363341564@newsletter', 
            newsletterName: config.BOT_NAME, 
            serverMessageId: 143 
        } 
    } 
}, { quoted: mek });

} catch (e) { 
    console.log(e); 
    reply(`Error: ${e}`); 
} 
});
