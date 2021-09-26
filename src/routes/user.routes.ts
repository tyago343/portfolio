import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "controller/user.controller";
import { Router } from "express"
const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;