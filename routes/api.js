import express from "express";
import user from "./api/user.js";
const router = express.Router();

router.use("/user", user);

export default router;
