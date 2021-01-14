//lectura variables de entorno
require('dotenv').config();

//Importar app
const app=require('./app');

//Importar database
require("./database");

//Funcion main
function main(){
    app.listen(app.get('port'),()=>console.log("servidor corriendo en puerto "+app.get('port')));
}
main();

