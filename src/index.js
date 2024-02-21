import app from "./app";
import { ConnectDb } from "./database/connection";

const port = app.get('port');

app.listen(port, async() => {
    console.log(`Server on port http://localhost:${port}`);
    await ConnectDb();
});