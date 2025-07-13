const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="olasunkanmidaniel21@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "";
global.website =process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_22_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVWU3K3ZxR3JXQy9lNmNJeVFLaksxRXdwY1BuNVE3eFJyemlZdnpZZFpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2RWFxbUI4YVFwR3BxanFOZVpWRVJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkOTZhZDk4LWI4MTktNDliYy05YjYzLTBhZjdmNTAyOWY0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAxODAsXG4gICAgICAzOCxcbiAgICAgIDIzNCxcbiAgICAgIDIyMixcbiAgICAgIDEyOCxcbiAgICAgIDE4OSxcbiAgICAgIDQyLFxuICAgICAgMjEsXG4gICAgICAxNzEsXG4gICAgICA0NyxcbiAgICAgIDQxLFxuICAgICAgNzksXG4gICAgICAyMjAsXG4gICAgICAxOTMsXG4gICAgICAxMDQsXG4gICAgICAyNDYsXG4gICAgICA0NCxcbiAgICAgIDc0LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDI1MSxcbiAgICAgIDk2LFxuICAgICAgMjAsXG4gICAgICAxMzMsXG4gICAgICAyMjksXG4gICAgICA1MSxcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgMjM1LFxuICAgICAgMTM0LFxuICAgICAgMjYsXG4gICAgICAyMDcsXG4gICAgICA1MCxcbiAgICAgIDEwNyxcbiAgICAgIDEwMCxcbiAgICAgIDIxOCxcbiAgICAgIDE3MyxcbiAgICAgIDI0MixcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083RzRJc0JFTERaemNNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFlJOHhNUmg5VGpWSUNOSGZmUnhxRHFHYm1mTmhuU3lROXBVV2JwZENoTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrUXM1WTlpbWxDWUZWOEdlazk5M0dtVXZVaiswdU92dXk4eFllN1J2cnlJcGkvVkZ6ODRXdTFyVnlvMGhMNVJ5QlRaMDBqeDdVYW5EOWN5RUZLejJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJTHl2MzJHdGx4aTR2MU5OMC9JbUFFY05PU2FoMXM1elUwb0dDcmZyaS9reEgzV0NaYkJMZ2k1VkIvTTdvMjhpZmVnWUNSOWJUaC9SN2dFQUNKWHloZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjM1NjI4Mjg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTA0MjY2Nzc2OTA1MDQ6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjM1NjI4Mjg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUyMzk0OTMyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Daniel",
  packname: process.env.PACK_NAME || "Daniel",
  botname : process.env.BOT_NAME  || "Daniel",
  ownername:process.env.OWNER_NAME|| "Daniel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
