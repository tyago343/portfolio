import express from "express";
import user from "./User/user.route";
const router = express.Router();

router.use("/user", user);

export default router;
