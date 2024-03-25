import { User } from "../models/Users";

export const isCompletedInfo =( name, email, password, phone, role="user" ) =>{
    if(!name || !email || !password || !phone || !role){
        return false
    }
    return true
};

export const existingUser = async ( email ) =>{
    const userFind = await User.findOne({
        attributes:["email","phone"],
        where:{
            "email":email
        },
    });
    if(!userFind){
        return false
    }
    return true;
};