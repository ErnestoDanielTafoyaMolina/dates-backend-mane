import mongoose from "mongoose";
import { configs } from "../config";

export async function ConnectDb(){
    try {
        await mongoose.connect(configs.MONGO_URI);
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.log("There was an error connecting database...", error);
        return;
    };
};