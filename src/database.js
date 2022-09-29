//Importado desde la dependencia
import mysql from 'mysql2/promise';
//Immportado desde configdb
import { config } from "./config";

//Conección a la ddbb
export const connect = async () => {
    //Probar conexion
    /*const conn = await mysql.createConnection(config);
    const result = await conn.query('SELECT 1 + 1');
    console.log(result);*/
    
    return await mysql.createConnection(config);
};