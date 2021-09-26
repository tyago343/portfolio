import { Router } from 'express';
import UserRoutes from './user.routes';
import postRoutes from './post.routes';
import { refreshToken } from 'controller/user.controller';

const router = Router();

router.use("/users", UserRoutes)
router.use("/posts", postRoutes)
router.post("/refresh_token", refreshToken)
export default router;