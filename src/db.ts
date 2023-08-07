import pg from "pg"
import {databaseURL} from "../dbconfig.js"

const database:pg.Client = new pg.Client(databaseURL);

database.connect((erro) => {
    if(erro){
        return console.log("Não foi possivel conectar com o ElephantSQL", erro);
    }else {
        return console.log("Conectado ao ElephantSQL!");
    }
});

export default database
