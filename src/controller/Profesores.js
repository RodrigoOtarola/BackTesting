import {connect} from '../database';

//Menu Profesores

//Lista profesores
export const getProfesores = async (req, res) => {
    //Probar extracción por consola
    const connection = await connect()
    const [row] = await connection.query("SELECT * FROM profesores");
    //console.log(row);
    res.json(row);
}

//Cuenta profesores
export const getProfesoresCount = async (req, res) => {
    const connection = await connect()
    const [row] = await connection.query("SELECT count(*) FROM profesores");
    console.log(row);
    res.json(row);
}


//Ingresa profesor
export const saveProfesor = async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const connection = await connect()
    /*const insert = await connection.query("INSERT INTO profersores(nombre,apellido) VALUES(?,?)"),[nombre,apellido], (err,result) => {
        console.log(err);
    };*/
    const sqlInsert = ("INSERT INTO profesores(nombre,apellido) VALUES(?,?)");
    const insert = await connection.query(sqlInsert,[nombre,apellido], (err,result) => {
        console.log(err);
    })
  
}
