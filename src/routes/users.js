const {Router}=require('express');
const router=Router();

//Importamos el cotrolador con todos los metodos que atacaran a los usuarios
const {getUsers,createUser,deleteUser,getUser,updateUser, authUser}=require('../controllers/users.controller');

//Creamos las respectivas rutas
router.route("/")
    .get(getUsers)
    .post(createUser);

router.route("/:auth")
    .post(authUser);
    
router.route("/:id")
    .delete(deleteUser)
    .put(updateUser)
    .get(getUser);
    
module.exports=router;

