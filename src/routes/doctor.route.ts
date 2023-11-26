import { Router} from "express";
import { CreateDoctor, DeleteDoctor, UpdateDoctor, getDoctores, getDoctoresByID } from "../controller/doctor.controller";



const router = Router();

router.get("/", getDoctores)
router.get("/:id", getDoctoresByID)
router.put("/:id", UpdateDoctor)
router.delete("/:id", DeleteDoctor)
router.post("/", CreateDoctor)

export default router;