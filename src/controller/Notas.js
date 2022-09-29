import {connect} from '../database';

//Lista alumnos
export const getNotas = async (req, res) => {
    //Probar extracción por consola
    const connection = await connect()
    const [row] = await connection.query("SELECT * FROM notas");
    //console.log(row);
    res.json(row);
}

//Cuenta Alumnos
export const getNotasCount = async (req, res) => {
    const connection = await connect()
    const [row] = await connection.query("SELECT count(*) FROM notas");
    //console.log(row);
    res.json(row);
}

/*
//Ingresa profesor
export const saveAlumno = async (req, res) => {

}
*/