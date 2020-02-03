import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  console.log(
    "eeeeeeeeeeeeeeeeeeeeeeeeelllllllllllllllllllooooooooooooooooooooooooooooooo"
  );
  res.send("HOLA");
});

export default router;
