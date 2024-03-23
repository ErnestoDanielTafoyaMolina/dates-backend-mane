import { Router } from "express";
import { getProfile } from "../../controllers/users.controllers";

const router = Router();
router.get("/:id", getProfile);


export default router;