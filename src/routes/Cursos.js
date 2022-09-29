import { Router } from "express";
import { getCursosCount, getCursos, saveCurso } from "../controller/Cursos";

//import de router


const router = Router();

//lista cursos
router.get('/cursos',getCursos);

//cuenta cursos
router.get('/cursosCount',getCursosCount);


//ingresa curso
router.post('/ingresaCurso',saveCurso);

export default router;