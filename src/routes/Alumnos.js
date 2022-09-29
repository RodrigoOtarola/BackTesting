import { Router } from "express";

//import de router
import { getAlumnos, getAlumnosCount, saveAlumno, } from "../controller/Alumnos";


const router = Router();

//lista Alumnos
router.get('/alumnos',getAlumnos);

//cuenta Alumnos
router.get('/alumnosCount', getAlumnosCount);


//ingresa Alumno
router.post('/ingresaAlumno',saveAlumno);

export default router;