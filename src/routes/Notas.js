import { Router } from "express";
import { getNotas, getNotasCount } from "../controller/Notas";

//import de router


const router = Router();

//lista notas
router.get('/notas',getNotas);

//cuenta Alumnos
router.get('/notasCount', getNotasCount);

/*
//ingresa Alumno
router.post('/ingresaAlumno',saveAlumno);*/

export default router;