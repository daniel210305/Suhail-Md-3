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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_30_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDhHV1VxTGcybURGd3pNclVBUHpreTBDM3lHZ2dURnRkRllEL2VkQlJwRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicHpCc3ZzSUpSMm14NUcyczN3LUV5QVwiLFxuICBcInBob25lSWRcIjogXCJlMThhMDQyNS03NzdiLTQwOWQtOWZlOS00MjZmZDgyMGJlOGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICA5MyxcbiAgICAgIDI0OSxcbiAgICAgIDIwNCxcbiAgICAgIDE3NSxcbiAgICAgIDg0LFxuICAgICAgODMsXG4gICAgICAxMjIsXG4gICAgICA4OCxcbiAgICAgIDEzNCxcbiAgICAgIDE3LFxuICAgICAgMTEwLFxuICAgICAgMTYxLFxuICAgICAgMTQxLFxuICAgICAgMTMsXG4gICAgICAxNDYsXG4gICAgICAxNDMsXG4gICAgICA5MyxcbiAgICAgIDE3NyxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDEwMyxcbiAgICAgIDI5LFxuICAgICAgNzksXG4gICAgICAxNTksXG4gICAgICA5NixcbiAgICAgIDksXG4gICAgICAyMTAsXG4gICAgICA1NyxcbiAgICAgIDEzOCxcbiAgICAgIDEyNSxcbiAgICAgIDE2MixcbiAgICAgIDk3LFxuICAgICAgMzcsXG4gICAgICAxODcsXG4gICAgICAxNTQsXG4gICAgICAxNDMsXG4gICAgICAyLFxuICAgICAgMjEyLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pHNElzQkVJYldxOE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0WUk4eE1SaDlUalZJQ05IZmZSeHFEcUdibWZOaG5TeVE5cFVXYnBkQ2hNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInkzZnhDdVo3ajNhcnVKWFh3Q3kvdnJ3QVJXZmFMY3R3WDk4c3g4anhQbEhxN1RScHp4TC9jUTdmVEhwY2pYNlh6QXo2eXFpMFRBOFV6ZS9OWExwRUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZXdmZEREZ5MkZKazUwcHJQSXlUS3JyWFlMY0dTSVFtV0QvRnVpeTd0aTY4cmJXSW1UVU9YSDJmbWNGWVdid1ZiMEhJTVR5ZVV4TDJtSFdDdXp0bkFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMzU2MjgyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MDQyNjY3NzY5MDUwNDo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMzU2MjgyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTE4Mzc0NTBcbn0iCn0="  // PUT your SESSION_ID 


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
