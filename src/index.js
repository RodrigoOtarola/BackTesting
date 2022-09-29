import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//import de router Profesores
import profesoresRoute from './routes/Profesores';

//import de router Alumnos
import alumnosRoute from './routes/Alumnos';

//import de router Notas
import notasRoute from './routes/Notas';

//import de router Cursos
import cursosRoute from './routes/Cursos';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())

//Router profesores
app.use(profesoresRoute);

//Router alumnos
app.use(alumnosRoute);

//Router notas
app.use(notasRoute);

//Router cursos

app.use(cursosRoute);

/*app.get('/', (req, res) => {
res.send('Hola Mundo');
});*/

const port = 3001;

app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}`);
});