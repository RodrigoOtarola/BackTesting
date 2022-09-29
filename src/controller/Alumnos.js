import {connect} from '../database';

//Lista alumnos
export const getAlumnos = async (req, res) => {
    //Probar extracción por consola
    const connection = await connect()
    const [row] = await connection.query("SELECT * FROM alumnos");
    //console.log(row);
    res.json(row);
}

//Cuenta Alumnos
export const getAlumnosCount = async (req, res) => {
    const connection = await connect()
    const [row] = await connection.query("SELECT count(*) FROM alumnos");
    //console.log(row);
    res.json(row);
}


//Ingresa profesor
export const saveAlumno = async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const connection = await connect()
    const sqlInsert = ("INSERT INTO alumnos(nombre,apellido) VALUES(?,?)");
    const insert = await connection.query(sqlInsert,[nombre,apellido], (err,result) => {
        console.log(err);
    })
}
