import express from "express";
import { urlencoded, json } from "body-parser";
import morgan from "morgan";
import api from "./routes/api";
const app = express();

// middlewares;
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api", api);
app.listen(3000, () => {
  console.log("server listen on port 3000");
});
