import bcrypt from "bcryptjs";
import { User } from "../models/Users";
import { isCompletedInfo } from "../services/validateInfo";
export const register = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req?.body;
        const is = isCompletedInfo(name, email, password, phone, role);
        if (!is) {
            return res.status(400).json({
                ok: false,
                msg: "Bad request"
            });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
             name,
             email, 
             password:hashedPassword, 
             phone, 
             role 
            });
        return res.status(201).json({
            ok: true,
            msg: "User created",
            data: newUser
        })
    } catch (error) {
        console.log("there was an error on register: ", error);
        return res.status(500).json({ msg: error })
    }
};
export const login = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ msg: error })
    };
};

export const logout = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({ msg: error })
    };
}