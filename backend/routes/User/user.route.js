import { Router } from "express";
import controllers from "./user.controller";
import User from "../../db/models/User";
const router = Router();

router
  .route("/")
  .get(controllers.getMany)
  .post(controllers.createOne);
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/login").post(async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ message: "need username and password" });
  }

  const invalid = { message: "Invalid email and password combination" };

  try {
    const user = await User.findOne({ username: req.body.username })
      .select("username password")
      .exec();

    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    return res.status(201).send({ user });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});
export default router;
