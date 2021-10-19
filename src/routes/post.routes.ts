import { checkJwt } from "controller/auth.controller";
import {
  getAllPosts,
  getPostById,
  updatePost,
  createPost,
  deletePost,
} from "controller/post.controller";
import { Router } from "express";
import multer from "multer";
import path from "path";

export const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, "../public/images"),
    filename: (_req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  export const fileUpload = multer({
    storage: diskStorage,
  }).single("image");
const router = Router();

router.get("/", checkJwt, getAllPosts);
router.post("/", fileUpload, createPost);
router.get("/:id", checkJwt, getPostById);
router.put("/:id", checkJwt, updatePost);
router.delete("/:id", checkJwt, deletePost);

export default router;
