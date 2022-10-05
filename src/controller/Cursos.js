import {connect} from '../database';


//Lista profesores
export const getCursos = async (req, res) => {
    //Probar extracción por consola
    const connection = await connect()
    const [row] = await connection.query("SELECT * FROM cursos order by id DESC");
    //console.log(row);
    res.json(row);
}

//Cuenta profesores
export const getCursosCount = async (req, res) => {
    const connection = await connect()
    const [row] = await connection.query("SELECT count(*) as total FROM cursos");
    //console.log(row);
    res.json(row);
}


//Ingresa profesor
export const saveCurso = async (req, res) => {
    const nombre = req.body.nombre;
    const connection = await connect()
    /*const insert = await connection.query("INSERT INTO profersores(nombre,apellido) VALUES(?,?)"),[nombre,apellido], (err,result) => {
        console.log(err);
    };*/
    const sqlInsert = ("INSERT INTO cursos(curso) VALUES(?)");
    const insert = await connection.query(sqlInsert,nombre, (err,result) => {
        console.log(err);
    })
  
}
