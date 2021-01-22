const  usersCtr={};
const userModel=require('../models/user')
const bcrypt = require('bcryptjs');
usersCtr.getUsers= async (req,res)=>
{
    await userModel.find((err,users)=>{
        if(err){
            return res.json({message:"error"})
        }
        return res.json(users);
    })
};
usersCtr.createUser= async (req,res)=>
{
    const{userName,password}=req.body;
    const hashedPassword=bcrypt.hashSync(password,10);
    const user=new userModel({
        userName,
        password:hashedPassword
    })

    await user.save({w:1},(err,user)=>{
        if(err){
           return res.json({message:"User exist"});
        }
        return res.json(user);
    })

   
       
    
}
usersCtr.deleteUser= async (req,res)=>
{
    await userModel.findByIdAndDelete({_id:req.params.id},(err,user)=>{
        if(err){
            return res.json({message:"error"})
        }
        return res.json({message:"delete!"})
    })
};
usersCtr.updateUser= async (req,res)=>
{
    await userModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(error,user)=>{
        if(error){
            return res.json({message:"error"});
        }
        return res.json(user);
    })
    
};
usersCtr.getUser= async (req,res)=>
{
    
    if(req.params.id!=="null"){
        await userModel.findById({_id:req.params.id},(err,user)=>{
            if(err){
                return res.json({message:"error"})
            }
            return res.json(user);
        })
    }
    else{
        await userModel.find({userName:req.params.name},(err,user)=>{
            if(err){
                return res.json({message:"error"})
            }
            return res.json(user);
        })
    }
};

module.exports=usersCtr;