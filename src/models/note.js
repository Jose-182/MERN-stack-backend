const {Schema,model}=require('mongoose');

const noteSchema=new Schema({
    title: String,
    description: {
        type:String,
        required:true
    },
    id_user: String,
    color:String,
    colorLetter:String,
    date:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true
})

module.exports=model("Note",noteSchema);