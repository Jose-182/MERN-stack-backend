//Creamos todos los metodos que atacaran directamente a las notas.
const  notesCtr={};

const noteModel=require('../models/note');

notesCtr.getNotes= async (req,res)=>
{
    const note= await noteModel.find();
    res.json(note)
};
notesCtr.createNote= async (req,res)=>
{
    const {title,description,date,id_user,color,colorLetter}=req.body;
    const note=new noteModel({
        title:title,
        description:description,
        date:date,
        id_user:id_user,
        color:color,
        colorLetter:colorLetter
    })
    
    await note.save();
    
    res.json({message:"save note"});
    
   
}
notesCtr.deleteNote= async (req,res)=>
{
    await noteModel.findByIdAndDelete({_id:req.params.id},(err,nota)=>{
        if(err){
            return res.json({message:"error"})
        }
        return res.json({message:"delete!"})
    })
};
notesCtr.updateNote= async (req,res)=>
{
    
    await noteModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,note)=>{
        
        if(err){
            return res.json({message:"error"})
        }
        return res.send(note);
    })
    
};
notesCtr.getNote= async (req,res)=>
{
    if(req.params.id!=="null"){
        await noteModel.findById(req.params.id,(err,note)=>{
            if(err){
               return res.json({message:"error"})
            }
            return res.json(note);
        })
    }
    else{
        await noteModel.find({id_user:req.params.author},(err,note)=>{
            if(err){
               return res.json({message:"error"})
            }
            return res.json(note);
        })
    }
        
        
    
       
    
};
module.exports=notesCtr;