import bcrypt from "bcryptjs";
import { User } from "../models/Users";
import { existingUser, isCompletedInfo } from "../services/validateInfo";
import { createAccessToken } from "../libs/jwt";
export const register = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req?.body;
        const completedInfo = isCompletedInfo(name, email, password, phone, role);
        if (!completedInfo) {
            return res.status(400).json({
                ok: false,
                msg: "Bad request"
            });
        };
        const isUser = await existingUser(email);
        if (isUser) {
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
        const token = await createAccessToken({ id: newUser.dataValues.idUser });

        return res.status(201).json({
            token
        });
    } catch (error) {
        console.log("there was an error on register: ", error);
        return res.status(500).json({ msg: error })
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req?.body;
        const isUser = await existingUser( email );
        if (!isUser) {
            return res.status(400).json({
                ok: false,
                msg: "User doesn't exist, please register."
            });
        };
        const user = await User.findOne({
            where: {
                email
            }
        });
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({
                ok: false,
                msg: "Wrong password"
            });
        }
        const token = await createAccessToken({ id: user.dataValues.idUser });
        return res.status(200).json({
            token   
        });
    } catch (error) {
        return res.status(500).json({ msg: error })
    };
};

export const logout = async (req, res) => {
    try {
        return res.status(200).json({ token: "" })
    } catch (error) {
        return res.status(500).json({ msg: error })
    };
}