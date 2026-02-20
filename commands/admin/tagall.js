/**
 * Ta/**
 * TagAll Command (Bot admin না হলেও কাজ করবে)
 */

module.exports = {
  name: 'tagall',
  aliases: ['everyone', 'mentionall'],
  category: 'group',
  groupOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const groupMetadata = await sock.groupMetadata(extra.from);
      const members = groupMetadata.participants;

      const emojis = [
        "│🌸 ᩧ𝆺ྀི𝅥","│👑 ᩧ𝆺ྀི𝅥","│🎀 ᩧ𝆺ྀི𝅥",
        "│🦋 ᩧ𝆺ྀི𝅥","│💎 ᩧ𝆺ྀི𝅥","│🎾 ᩧ𝆺ྀི𝅥",
        "│🎈 ᩧ𝆺ྀི𝅥","│🧁 ᩧ𝆺ྀི𝅥","│🍿 ᩧ𝆺ྀི𝅥","│🪀 ᩧ𝆺ྀི𝅥"
      ];

      const customMsg = args.join(' ') || '💗 ATTENTION EVERYONE 💗';

      let text = `
🪀 🇬‌𝐑𝐎𝐔𝐏 : ${groupMetadata.subject}
🪀 🇲‌𝐄𝐌𝐁𝐄𝐑𝐒 : ${members.length}
🪀 🇲‌𝐄𝐒𝐒𝐀𝐆𝐄 : ${customMsg}

╭┈─「 ɦเ αℓℓ ƒɾเεɳ∂ร 🥰 」┈❍
`;

      let count = 0;
      for (const m of members) {
        const emoji = emojis[count % emojis.length];
        text += `${emoji} @${m.id.split('@')[0]}\n`;
        count++;
      }

      text += `╰────────────❍

💬 Sent with Love by 𓆩Xtylish-Shahin𓆪 🖤
💗 Stay Active — Stay Stylish! ✨
`;

      await sock.sendMessage(extra.from, {
        text,
        mentions: members.map(m => m.id)
      }, { quoted: msg });

    } catch (err) {
      console.error('TagAll Error:', err);
      await sock.sendMessage(extra.from, {
        text: '⚠ কিছু সমস্যা হয়েছে ভাই 😅'
      }, { quoted: msg });
    }
  }
};
