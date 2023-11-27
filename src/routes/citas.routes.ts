import { Router} from "express";
import { CreateCita, DeleteCita, UpdateCita, getCitas, getCitasByDoctor, getCitasByPaciente, getEspecialidadDoctor, getOneCita } from "../controller/cita.controller";



const router = Router();

router.get("/", getCitas)
router.get("/:idpaciente/paciente", getCitasByPaciente)
router.get("/:iddoctor/doctor", getCitasByDoctor)
router.get("/doctor/especialidad", getEspecialidadDoctor)
router.get("/one-cita", getOneCita)
router.post("/", CreateCita)
router.put("/", UpdateCita)
router.delete("/", DeleteCita)


export default router;