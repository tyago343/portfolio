import express from "express";
import { urlencoded, json } from "body-parser";
import morgan from "morgan";
import api from "./routes/api";
import path from "path";
const app = express();

// middlewares;
app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());
// app.use("/", express.static(path.join(__dirname, "/dist")));
app.use(express.static("dist"));
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});
app.use("/api", api);
app.listen(3000, () => {
  console.log("server listen on port 3000");
});
