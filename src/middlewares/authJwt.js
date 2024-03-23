import jwt from "jsonwebtoken";
import { configs } from "../config";


export const auth = (req, res, next) => {

    const { authorization } = req.headers;
  
    if(!authorization){
      return res.status(401).json({
        ok: false,
        msg:"Unauthorized Request"
      });
    }
  
    const  token  = authorization.split(' ')[1]
    try {
      if (!token)
        return res
          .status(401)
          .json({ message: "No token, authorization denied" });
  
      jwt.verify(token, configs.JWT_SECRET, (error, user) => {
        if (error) {
          return res.status(401).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
