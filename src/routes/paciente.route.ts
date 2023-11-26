import { Router} from "express";
import { getPacientes,CreatePacientes,DeletePaciente,UpdatePacientes,getPacientesByID } from "../controller/paciente.controller";

const router = Router();

router.get("/", getPacientes)
router.get("/:id", getPacientesByID)
router.put("/:id", UpdatePacientes)
router.delete("/:id", DeletePaciente)
router.post("/", CreatePacientes)

export default router;