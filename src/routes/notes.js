//Importamos el enrutador
const {Router}=require('express');
const router=Router();

//Importamos el cotrolador con todos los metodos que atacaran a las notas
const {getNotes,createNote,deleteNote,getNote,updateNote}=require('../controllers/notes.controller');

//Creamos las respectivas rutas
router.route("/")
    .get(getNotes)
    .post(createNote)

router.route("/:id?/:author?")
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote)

//Exportamos las rutas
module.exports=router;