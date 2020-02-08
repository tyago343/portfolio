import express from "express";
import user from "./User/user.route";
import post from "./Post/post.route";
const router = express.Router();

router.use("/user", user);
router.use("/post", post);

export default router;
