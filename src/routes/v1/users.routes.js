import { Router } from "express";
import { getProfile } from "../../controllers/users.controllers";
import { auth } from "../../middlewares/authJwt";

const router = Router();
router.get("/:id", auth ,getProfile);


export default router;