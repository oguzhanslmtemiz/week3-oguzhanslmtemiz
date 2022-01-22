import { Router } from "express";
import { getUser } from "../controllers/login";
import validate from "../middlewares/validate";
import { loginSchema } from "../schemas/user";

const router = Router();

router.post("/", validate(loginSchema), getUser);

export default router;
