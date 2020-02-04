import { Router } from "express";
import User from "../../db/models/User";
const router = Router();

router.get("/", (req, res) => {
  try {
    const users = User.find({}).exec();
  } catch (err) {
    res.send(404);
  }
});

export default router;
