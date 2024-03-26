import { Router } from "express";
import { deleteDate, getDate, getDates, patchDate, postDate } from "../../controllers/dates.controllers";
import { auth } from "../../middlewares/authJwt";
const router = Router();

// router.use(auth);
router.route("/")
    .get( getDates )
    .post( postDate );

router.route("/:dateId")
    .get( getDate )
    .patch( patchDate )
    .delete( deleteDate );

export default router;