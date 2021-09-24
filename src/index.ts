import express, { Request, Response } from "express"
import "reflect-metadata"
import { createConnection } from "typeorm"
import { User } from "./db/entity/User"
createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [User],
    synchronize: true,
    logging: false
})
    .then(connection => {
        console.log("estoy conectado perri.")
        let user = new User();
        user.name = "Santiago"
        user.lastName = "Casanova"
        user.userName = "tyago343"
        return connection.manager.save(user).then(photo => {
            console.log("Photo has been saved. Photo id is", photo.id);
        });
    })
    .catch(err => console.log(`ERROR ======>   ${err}`))
const PORT = process.env.PORT || 3001

// App
const app = express();
app.get("/", (_req: Request, res: Response) => {
    res.send("Goodbay boy")
})
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})