// dependences
import express,{ urlencoded, json } from "express";
import cors from "cors";
import morgan from "morgan";
import { configs } from "./config";

//initialization
const app = express();
app.set('port',configs.port);

//own routes imports

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended:false }));


//own routes

//default route
app.use(( req, res ) => {
    return res.status(404).json({
        ok: false, 
        msg:" Route not found :c "
    });
});

//export default

export default app;


