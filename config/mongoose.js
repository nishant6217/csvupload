const mongoose=require('mongoose');




mongoose.connect('mongodb+srv://nish6217:nish6217@cluster0.30ubr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to database','error'));

db.once('open',function()
{
    console.log("Connected to Database :DB");
});



module.exports=db;