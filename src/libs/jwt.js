import jwt from "jsonwebtoken";
import { configs } from "../config";

export async function createAccessToken( payload ) {
    return new Promise((resolve, reject) => {
      jwt.sign( payload, configs.JWT_SECRET, { expiresIn: "1d" }, ( err, token ) => {
        if ( err ) reject( err );
        resolve( token );
      });
    });
  }