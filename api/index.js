
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

//router
const auth = require('./routes/auth.js');
const hotels = require('./routes/hotels.js');
const rooms = require('./routes/rooms.js');
const users = require('./routes/users.js');


//config
const app = express();
app.use(express.urlencoded({ extended: true }));

///connectMongodb
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb');
    } catch (error) {
        throw error;
    }
}



//middleware

app.use('/auth',auth);
app.use('/hotels',hotels);
app.use('/rooms',rooms);
app.use('/users',users);


app.use((err,req,res,next)=>{
    const errStatus = err.status||500;
    const errMessage = err.message||"Something went wrong!";

   return res.status(500).json({
    sucess:false,
    status:errStatus,
    message:errMessage,
    stack:err.stack
   })
});




app.get('/', (req, res) => {
    res.send('hello first require')
})

mongoose.connection.on('disconnected' , ()=>{
    console.log('mongoDB disconnected');
})

mongoose.connection.on('connected' , ()=>{
    console.log('mongoDB connected');
})





app.listen(9999, () => {
    connect();
    console.log(`"port 9999 is running  mongo"`);
})