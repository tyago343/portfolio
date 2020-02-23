import express from "express";
import { urlencoded, json } from "body-parser";
import morgan from "morgan";
import api from "./routes/api";
import path from "path";
import connectDB from "./db/connection";
const app = express();

// middlewares;
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("dist"));
app.use(express.static("public"));
app.use("/api", api);
app.get("*", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});
app.listen(3000, () => {
  try {
    connectDB();
    console.log("server listen on port 3000");
  } catch (e) {
    console.log("Error en conexion BBDD", e);
  }
});
