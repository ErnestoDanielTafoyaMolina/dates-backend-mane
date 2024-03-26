import { Router } from "express";
import { register, login, logout } from "../../controllers/auth.controllers";
import { auth } from "../../middlewares/authJwt";
const router = Router();

router.post("/register", auth , register);
router.post("/login", login);
router.post("/logout", logout);

export default router;