import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;

// App
const app = express();
createConnection();

// Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
    res.send("Goodbay boy");
});
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
