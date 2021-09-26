import { getAllPosts, getPostById, updatePost, createPost, deletePost } from "controller/post.controller";
import { Router } from "express";

const router = Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;