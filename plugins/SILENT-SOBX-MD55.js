const {
  cmd
} = require("../command");
const {
  ytsearch,
  ytmp3,
  ytmp4
} = require("@dark-yasiya/yt-dl.js");
const _0x5e9766 = {};
function _0x4b55ec(_0x2e6bde, _0x5d13b1, _0x3242dd, _0xd36b5a) {
  return _0x3983(_0x2e6bde - 0x222, _0xd36b5a);
}
_0x5e9766.pattern = "videoxtra";
_0x5e9766.react = "🐦‍🔥";
_0x5e9766.desc = "Download Youtube song";
_0x5e9766.category = "main";
_0x5e9766.use = ".ytvxtra < Yt url or Name >";
_0x5e9766.filename = __filename;
cmd(_0x5e9766, async (_0x19c800, _0x3d9729, _0x341678, {
  from: _0x5662fe,
  prefix: _0x24eb11,
  quoted: _0x303a10,
  q: _0x4eae0b,
  reply: _0x16aeae
}) => {
  try {
    if (!_0x4eae0b) {
      return await _0x16aeae("Please provide a YouTube URL or song name.");
    }
    const _0x3fa290 = await ytsearch(_0x4eae0b);
    if (_0x3fa290.results.length < 1) {
      return _0x16aeae("No results found!");
    }
    let _0x3f696a = _0x3fa290.results[0];
    let _0x475b60 = "https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x3f696a.url);
    let _0x20f8d4 = await fetch(_0x475b60);
    let _0x4c418b = await _0x20f8d4.json();
    if (_0x4c418b.status !== 200 || !_0x4c418b.success || !_0x4c418b.result.download_url) {
      return _0x16aeae("Failed to fetch the video. Please try again later.");
    }
    let _0x5a9c13 = "🎬 *SILENT-SOBX-MD VIDEO DOWNLOADER* 🎬\n\n📌 *Title:* " + _0x3f696a.title + "\n⏱️ *Duration:* " + _0x3f696a.timestamp + "\n👁️ *Views:* " + _0x3f696a.views + "\n👤 *Author:* " + _0x3f696a.author.name + "\n🔗 *Link:* " + _0x3f696a.url;
    const _0x1d251a = {
      'url': _0x4c418b.result.thumbnail || ''
    };
    const _0x216fd7 = {
      image: _0x1d251a,
      caption: _0x5a9c13
    };
    const _0x44bcb7 = {
      quoted: _0x3d9729
    };
    await _0x19c800.sendMessage(_0x5662fe, _0x216fd7, _0x44bcb7);
    const _0x8e4c1c = {
      url: _0x4c418b.result.download_url
    };
    const _0x314d9b = {
      video: _0x8e4c1c,
      mimetype: "video/mp4"
    };
    const _0x5b57af = {
      quoted: _0x3d9729
    };
    await _0x19c800.sendMessage(_0x5662fe, _0x314d9b, _0x5b57af);
  } catch (_0x4e8ed1) {
    console.log(_0x4e8ed1);
    _0x16aeae("An error occurred. Please try again later.");
  }
});
const _0x4d88de = {
  pattern: "mp4",
  react: '🤩',
  desc: "Download YouTube song",
  category: "main"
};
function _0x1fafb7(_0x566b9b, _0x4f9d3a, _0x1062be, _0x33a608) {
  return _0x3983(_0x1062be + 0x320, _0x33a608);
}
_0x4d88de.use = ".song <Yt url or Name>";
_0x4d88de.filename = __filename;
cmd(_0x4d88de, async (_0x7b3cb1, _0x52124f, _0x66b017, {
  from: _0x117aba,
  prefix: _0x54c735,
  quoted: _0x31aa8e,
  q: _0x3ef049,
  reply: _0x396821
}) => {
  try {
    if (!_0x3ef049) {
      return await _0x396821("❌ *Please provide a YouTube URL or song name.*");
    }
    const _0x4fccc1 = await ytsearch(_0x3ef049);
    if (_0x4fccc1.results.length < 1) {
      return _0x396821("⚠️ *No results found!*");
    }
    let _0x336809 = _0x4fccc1.results[0];
    let _0x1d23c9 = "https://api.siputzx.my.id/api/d/ytmp4?url=" + encodeURIComponent(_0x336809.url);
    let _0xb79257 = await fetch(_0x1d23c9);
    let _0x41c9f9 = await _0xb79257.json();
    if (!_0x41c9f9.status || !_0x41c9f9.data || !_0x41c9f9.data.dl) {
      return _0x396821("❌ *Failed to fetch the video. Please try again later.*");
    }
    let _0x33bda6 = "🎥 *SILENT-SOBX-MD VIDEO DOWNLOADER* 🎥\n\n📌 *Title:* " + _0x41c9f9.data.title + "\n🌐 *Source:* YouTube\n🔗 *Link:* " + _0x336809.url + "\n\n💾 *DOWNLOADING YOUR VIDEO PLEASE WAIT!*";
    const _0x229c30 = {
      url: _0x336809.thumbnail
    };
    const _0x51448b = {
      image: _0x229c30,
      caption: _0x33bda6
    };
    const _0x5155c6 = {
      quoted: _0x52124f
    };
    await _0x7b3cb1.sendMessage(_0x117aba, _0x51448b, _0x5155c6);
    const _0x27064c = {
      'url': _0x41c9f9.data.dl
    };
    const _0x344e11 = {
      video: _0x27064c,
      mimetype: "video/mp4"
    };
    const _0x69ff6 = {
      quoted: _0x52124f
    };
    await _0x7b3cb1.sendMessage(_0x117aba, _0x344e11, _0x69ff6);
  } catch (_0xe5e26d) {
    console.error(_0xe5e26d);
    _0x396821("⚠️ *An unexpected error occurred. Please try again later.*");
  }
});
const _0x3c550b = {
  pattern: "play",
  alias: ["song"],
  react: '🎶',
  desc: "Download YouTube song",
  category: 'main',
  use: ".song <Yt url or Name>",
  filename: __filename
};
cmd(_0x3c550b, async (_0x4014e9, _0x523581, _0x42dfde, {
  from: _0x1a6e59,
  prefix: _0xbd15e,
  quoted: _0x48a38e,
  q: _0x562fe3,
  reply: _0x199f48
}) => {
  try {
    if (!_0x562fe3) {
      return await _0x199f48("❌ Please provide a YouTube URL or song name.");
    }
    await _0x199f48("🎶 *SILENT-SOBX-MD MUSIC FOUND PLEASE WAIT*");
    const _0x515492 = await ytsearch(_0x562fe3);
    if (_0x515492.results.length < 1) {
      return _0x199f48("❌ No results found!");
    }
    let _0x122fb3 = _0x515492.results[0];
    let _0x199bcb = "https://ditzdevs-ytdl-api.hf.space/api/ytmp3?url=" + encodeURIComponent(_0x122fb3.url);
    console.log("🔗 API URL:", _0x199bcb);
    let _0x276c68 = await fetch(_0x199bcb);
    let _0x52f8e8 = await _0x276c68.json();
    console.log("📥 API Response:", _0x52f8e8);
    if (!_0x52f8e8.status || !_0x52f8e8.download || !_0x52f8e8.download.downloadUrl) {
      return _0x199f48("❌ Failed to fetch the audio. Please try again later.");
    }
    let _0x49ef3f = "🎶 *SILENT-SOBX-MD MUSIC DOWNLOADER* 🎶\n\n📀 *TITLE:* " + _0x52f8e8.download.title + "\n⏳ *DURATION:* " + _0x52f8e8.result.duration + " sec\n🔗 *YOUTUBE LINK:* " + _0x122fb3.url + "\n🕒 *EXPIRES IN:* " + _0x52f8e8.download.expiresIn + "\n\n> *© POWERED BY SILENTLOVER432 ♡*";
    const _0xa0996 = {
      url: _0x122fb3.thumbnail
    };
    const _0x96ad33 = {
      image: _0xa0996,
      caption: _0x49ef3f
    };
    const _0x1b4e5e = {
      quoted: _0x523581
    };
    await _0x4014e9.sendMessage(_0x1a6e59, _0x96ad33, _0x1b4e5e);
    console.log("🎼 Sending audio from URL:", _0x52f8e8.download.downloadUrl);
    const _0x42e29d = {
      'url': _0x52f8e8.download.downloadUrl
    };
    const _0x54fef3 = {
      audio: _0x42e29d,
      mimetype: 'audio/mpeg'
    };
    const _0x11944b = {
      quoted: _0x523581
    };
    await _0x4014e9.sendMessage(_0x1a6e59, _0x54fef3, _0x11944b);
    console.log("✅ Audio sent successfully!");
  } catch (_0x5dde46) {
    console.log("❌ Error:", _0x5dde46);
    _0x199f48("❌ An error occurred. Please try again later.");
  }
});
