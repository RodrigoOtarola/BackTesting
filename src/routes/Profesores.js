import { Router } from "express";

//import de router
import { getProfesores, getProfesoresCount, saveProfesor } from "../controller/Profesores";

const router = Router();

//menu Profesores
//router.get('/menuProfesores',()=>{});

//lista profesores
router.get('/profesores',getProfesores);

//cuenta profesores
router.get('/profesoresCount',getProfesoresCount);

//ingresa profesor
router.post('/ingresaProfesor',saveProfesor);

export default router;