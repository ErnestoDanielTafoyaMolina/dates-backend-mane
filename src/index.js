import app from "./app";
import { sequelize } from "./database/connection";

const port = app.get('port');

app.listen(port, async() => {
    await sequelize.sync({force: false});
    console.log(`Server on port http://localhost:${port}`);
});


