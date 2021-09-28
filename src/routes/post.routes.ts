import { checkJwt } from "controller/auth.controller";
import {
    getAllPosts,
    getPostById,
    updatePost,
    createPost,
    deletePost,
} from "controller/post.controller";
import { Router } from "express";

const router = Router();

router.get("/", checkJwt, getAllPosts);
router.post("/", checkJwt, createPost);
router.get("/:id", checkJwt, getPostById);
router.put("/:id", checkJwt, updatePost);
router.delete("/:id", checkJwt, deletePost);

export default router;
