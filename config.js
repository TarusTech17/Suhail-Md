const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254725505351";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://www.instagram.com/tarus_brian_kipchirchir?igsh=czdjdDUyY2x3aTJz" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_16_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJ1cjZtbnJwa3M1aWNPTWludTNyMjBjaGFaZ0VieDY0R0Y0YXRtcDRYdEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI1NTA1MzUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMDA5MjQ4QjkxMjIwQ0FEMDI5MUJEQTExMzA3OUUwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwMjQ5NjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic0tEMi1mNm9TNnFYclRPZUVaRzlmQVwiLFxuICBcInBob25lSWRcIjogXCJkMmJkZjdhMS1mZWU2LTRiOGUtOGQwZS1mYzkwMTNlYTE5MTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyMzQsXG4gICAgICAyMjAsXG4gICAgICAyOSxcbiAgICAgIDE5MCxcbiAgICAgIDMxLFxuICAgICAgMTI4LFxuICAgICAgNjMsXG4gICAgICAyNDYsXG4gICAgICA0NyxcbiAgICAgIDExNyxcbiAgICAgIDc0LFxuICAgICAgMTM1LFxuICAgICAgNTksXG4gICAgICAxMTQsXG4gICAgICA2MCxcbiAgICAgIDEzOSxcbiAgICAgIDExOSxcbiAgICAgIDEzMCxcbiAgICAgIDE5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDIxMyxcbiAgICAgIDExNSxcbiAgICAgIDE0OSxcbiAgICAgIDE0MCxcbiAgICAgIDIyMixcbiAgICAgIDIyNixcbiAgICAgIDc0LFxuICAgICAgMTQyLFxuICAgICAgMTM2LFxuICAgICAgOTAsXG4gICAgICAyMjUsXG4gICAgICAxNTgsXG4gICAgICA3NCxcbiAgICAgIDEyOSxcbiAgICAgIDEzOSxcbiAgICAgIDEwOSxcbiAgICAgIDE4OSxcbiAgICAgIDYzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1MWllQNkFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjU1MDUzNTE6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMRUNIRVJPIERPWUVOXCIsXG4gICAgXCJsaWRcIjogXCI3OTA4NzcxMjM5OTU3MTo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZWZqOVVIRVBlSGtMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRKLzk4Kyt5dmY4NzhaemlwNXdJeHRIRXhnaU9tWllxWmw1UG9IK25xRHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFpFR3NvR1JjWm1vZm92UmM5UytpN0t4Nit4eVhaWmRnNXloVUcwcTkxdXBzOVNucVJuWFBvWkNSdloxVTQrNS9mT2R5Wlo3NnJRMUF5TCt2SDJXRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmhFeTZqSXJEU3pLcS9DUDRyWnhqT1lyNzhnTDliVXVJc2h0WDJ0M0hRYW81RnRNaEVVQ25nOXNBVlpmS01BWWpya2d3RXZvOXU2S0t4S2Z5S0Z1Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI1NTA1MzUxOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMjQ5NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCLy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIvLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "LECHERO DOYEN",


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
