const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors=require('cors');

//settings
app.set('port',process.env.PORT||4000)
app.set('api',"/api")
//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//routes
app.use(app.get('api')+"/notes",require('./routes/notes'));
app.use(app.get('api')+"/users",require('./routes/users'));


module.exports=app