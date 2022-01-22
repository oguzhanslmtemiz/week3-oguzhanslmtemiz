import { Router } from "express";
import { createUser } from "../controllers/register";
import validate from "../middlewares/validate";
import { registerSchema } from "../schemas/user";

const router = Router();

router.post("/", validate(registerSchema), createUser);

export default router;
