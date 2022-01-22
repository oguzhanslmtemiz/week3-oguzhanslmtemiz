import { Router } from "express";
import { listUsers } from "../controllers/dashboard";
import { userAuth } from "../middlewares/authenticate";

const router = Router();

router.get("/", userAuth, listUsers);

export default router;
