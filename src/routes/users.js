const {Router}=require('express');
const router=Router();

//Importamos el cotrolador con todos los metodos que atacaran a los usuarios
const {getUsers,createUser,deleteUser,getUser,updateUser}=require('../controllers/users.controller');

//Creamos las respectivas rutas
router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:id")
    .delete(deleteUser)
    .put(updateUser)
    .get(getUser);
    
module.exports=router;

