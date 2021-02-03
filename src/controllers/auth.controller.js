const  authCtr={};
const userModel=require('../models/user')
const bcrypt = require('bcryptjs');

authCtr.authUser=async(req,res)=>{
    const {userName,password}=req.body;

    await userModel.findOne({userName:userName},(err,user)=>{
        
        if(!user){
            return res.json({message:"Username not exist"});
        }
        else{
            const auth=bcrypt.compareSync(password,user.password);
            if(auth){
                return res.json({_id:user._id,userName:user.userName,imgProfile:user.imgProfile});
            }
            else{
                return res.json({message:'Incorret password'});
            }
        }

    })

    
}
authCtr.authUsername=async(req,res)=>{
    const {userName}=req.body;

    await userModel.find({userName:userName},(err,user)=>{
        
        if(user.length===1){
            return res.json({message:'Username exist'});
        }
       
        return res.json({message:'Valid username'});
        
    })
    
}
module.exports=authCtr;