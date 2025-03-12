const axios = require("axios");
const { cmd } = require("../command");

// Helper function to convert a country ISO code to its flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .split("")
    .map(letter => String.fromCodePoint(letter.charCodeAt(0) + 127397))
    .join("");
}

cmd({
    pattern: "check",
    react: "🔍",
    desc: "Checks the country calling code and returns the corresponding country name(s) with flag",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        let code = args[0];
        if (!code) {
            return reply("*🎐 ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ. ᴇxᴀᴍᴘʟᴇ: `.ᴄʜᴇᴄᴋ 𝟿𝟸`*");
        }

        // Remove any '+' signs from the code
        code = code.replace(/\+/g, '');

        // Fetch all countries using the REST Countries v2 API
        const url = "https://restcountries.com/v2/all";
        const { data } = await axios.get(url);

        // Filter countries whose callingCodes include the given code
        const matchingCountries = data.filter(country =>
            country.callingCodes && country.callingCodes.includes(code)
        );

        if (matchingCountries.length > 0) {
            const countryNames = matchingCountries
                .map(country => `${getFlagEmoji(country.alpha2Code)} ${country.name}`)
                .join("\n");
            reply(`📮 *COUNTRY CODE*: ${code}\n🌍 *COUNTRIES*:\n${countryNames}\n\n> ©POWERD BY SILENTLOVER432 ♥️`);
        } else {
            reply(`❌ No country found for the code ${code}.`);
        }
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while checking the country code.");
    }
});
