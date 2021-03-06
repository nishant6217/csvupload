const express=require('express');

// creating express app
const app=express();
const cors = require("cors");

const port=process.env.PORT || 8000;

//  requiring Database
const db=require('./config/mongoose');
const cokkiesparser=require('cookie-parser');
// using passport lib for authentication



// using middlewares

app.use(express.urlencoded());
app.use(cokkiesparser());

app.use('/uploads',express.static(__dirname +'/uploads'));


app.set('view engine','ejs');
app.set('views','./view');

app.use(cors());
// setting our routes 
app.use('/',require('./route'));

//  firing server here 
app.listen(port,function(err)
{
     if(err)  {console.log(`Error in running server:${port}`);return;}

     console.log(`Surver is up and Running at POrt :${port}`); return;
});