import { Router } from "express";
import { deleteDate, getDate, getDates, patchDate, postDate } from "../../controllers/dates.controllers";
const router = Router();

router.route("/")
    .get( getDates )
    .post( postDate );

router.route("/:dateId")
    .get( getDate )
    .patch( patchDate )
    .delete( deleteDate );

export default router;