import { config } from "dotenv";

config();

export const configs = {
    port: process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
};