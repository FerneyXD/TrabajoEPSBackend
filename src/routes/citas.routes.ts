import { Router} from "express";
import { CreateCita, DeleteCita, UpdateCita, getCitas, getOneCita } from "../controller/cita.controller";



const router = Router();

router.get("/", getCitas)
router.get("/one-cita", getOneCita)
router.post("/", CreateCita)
router.put("/", UpdateCita)
router.delete("/", DeleteCita)


export default router;