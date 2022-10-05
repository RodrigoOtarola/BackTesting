import {connect} from '../database';

//Lista alumnos
export const getAlumnos = async (req, res) => {
    //Probar extracción por consola
    const connection = await connect()
    const [row] = await connection.query("select * from view_alumnosnotas");
    //console.log(row);
    res.json(row);
}

//Cuenta Alumnos
export const getAlumnosCount = async (req, res) => {
    const connection = await connect()
    const [row] = await connection.query("SELECT count(*) as total FROM alumnos");
    //console.log(row);
    res.json(row);
}


//Ingresa profesor
export const saveAlumno = async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const n3 = req.body.n3;
    const n4 = req.body.n4;
    
    const connection = await connect()
    const sqlInsert = ("call sp_alumnosnotas(?,?,?,?,?,?)");
    const insert = await connection.query(sqlInsert,[nombre,apellido,n1,n2,n3,n4], (err,result) => {
        console.log(err);
    })
}
