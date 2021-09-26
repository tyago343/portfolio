import { Router } from 'express';
import UserRoutes from './user.routes';
import postRoutes from './post.routes';

const router = Router();

router.use("/users", UserRoutes)
router.use("/posts", postRoutes)

export default router;