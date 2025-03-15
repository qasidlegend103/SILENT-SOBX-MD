const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/9fnf1j' }, // Image URL from your request
            caption: `╭━━〔 *SILENT-SOBX-MD OWNERSHIP* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *HERES IS THE OWNER DETAILS🫟*
┃◈┃• *NAME* - ${ownerName}
┃◈┃• *NUMBER* ${ownerNumber}
┃◈┃• *VERSION*: 3.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: '🔍SILENT-SOBX-MD🫟',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

      // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/SILENTLOVER0432/SILENT-SOBX-MD-DATABASE/raw/refs/heads/main/Auto_voice/AUD-20250309-WA0019.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: 'SILENT-SOBX-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
