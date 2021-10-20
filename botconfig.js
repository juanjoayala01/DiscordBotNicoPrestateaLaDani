module.exports = {
  Admins: ["Juanjo#3445"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token:
    process.env.Token ||
    "123123", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "900184811098996756", //Discord Client ID
  ClientSecret:
    process.env.Discord_ClientSecret || "EoDHEuhJh3fPEOt1y2OKwonH0AMOaf06", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "456852jj", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "con la mama del chris", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalink-server12312.herokuapp.com",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID:
      process.env.Spotify_ClientID || "18533e79ab2a4c04969d1ab017d047d7", //Spotify Client ID
    ClientSecret:
      process.env.Spotify_ClientSecret || "1a3edf00a77442a9820174a459a4eb44", //Spotify Client Secret
  },
};
