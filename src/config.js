import { config } from "dotenv";

config();

export const configs = {
    //puerto
    port: process.env.PORT || 3001,
    
    //base de datos
    DB_URL:process.env.HOST  || "",
    DB_PASSWORD:process.env.PASSWORD  || "",
    DB_DIALECT:process.env.DIALECT  || "", 
    DB_NAME:process.env.DB_NAME  || "",

    //whatsapp
    BOT_ID: process.env.BotId  || "",
    FB_URL:process.env.FaceBookUrl || "",
    FB_TOKEN:process.env.FB_BearerToken || "",
    DEFAULT_PHONE_NUMBER:process.env.DefaultPhoneNumber || "",

    //JWT
    JWT_SECRET: process.env.JWT_SECRET || "",
};