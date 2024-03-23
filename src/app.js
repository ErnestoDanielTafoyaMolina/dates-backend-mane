// dependences
import express,{ urlencoded, json } from "express";
import cors from "cors";
import morgan from "morgan";
import { configs } from "./config";

//initialization
const app = express();
app.set('port',configs.port);

//own routes imports

import datesRoutesV1 from "./routes/v1/dates.routes";
import userRoutes from "./routes/v1/users.routes";
import authRoutes from "./routes/v1/auth.routes";

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended:false }));


//own routes
app.use("/api/v1/dates",datesRoutesV1)
app.use("/api/v1/users",userRoutes)
;app.use("/api/v1/auth",authRoutes);
//default route
app.use(( req, res ) => {
    return res.status(404).json({
        ok: false, 
        msg:" Route not found :c "
    });
});

//export default

export default app;


