const {Router}=require('express');
const router=Router();
const {authUser,authUsername}=require('../controllers/auth.controller');

router.route('/')
.post(authUser)

router.route('/:userName')
.post(authUsername)
module.exports=router;