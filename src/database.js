const mongoose=require('mongoose');

const URI='mongodb+srv://Jose182:ZxZBhmE8TQWLEnN4@cluster0.4hqpe.mongodb.net/blog?retryWrites=true&w=majority';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

const conn=mongoose.connection;

conn.once('open',()=>{
    console.log("Conexión correcta");
});

