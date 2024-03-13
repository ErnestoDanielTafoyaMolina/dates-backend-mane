import app from "./app";
import { sequelize } from "./database/connection";

const port = app.get('port');

app.listen(port, async() => {
    try {
        console.log(`Server on port http://localhost:${port}`);
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("There was an error on database: ",error);
    };
});


