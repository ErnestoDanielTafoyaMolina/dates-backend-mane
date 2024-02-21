import { config } from "dotenv";

config();

export const configs = {
    port: process.env.PORT || 3001,
    MONGO_URI:process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test",
    BOT_ID: process.env.BotId  || "",
    FB_URL:process.env.FaceBookUrl || "",
    FB_TOKEN:process.env.FB_BearerToken || "",
    DEFAULT_PHONE_NUMBER:process.env.DefaultPhoneNumber || "",
};