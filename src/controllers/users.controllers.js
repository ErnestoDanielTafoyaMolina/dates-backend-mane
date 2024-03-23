import { createAccessToken } from "../libs/jwt";
import { User } from "../models/Users";
export const getProfile = async ( req, res ) => {
    const { id } = req.params;
    try {
        const userFind = await User.findOne({
            // attributes:["idUser","name","email","phone","role"],
            where:{
                "idUser":id,
            },
        });
        console.log("datavalues: ",userFind.dataValues.idUser);
        const token = await createAccessToken({ id: userFind.dataValues.idUser });
        return res.status(200).json({
            ok: true,
            msg: "User found",
            data: userFind,
            token
        })
    } catch (error) {
        console.log("there was an error on getting profile: ",error);
        return res.status(500).json({ msg: error })
    };
};