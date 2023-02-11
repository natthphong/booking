const  mongoose  = require('mongoose');
const Roomshcema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
     
    },
    price:{
        type: Number,
        required:true,
    },
    maxPeople:{
        type: Number,
        required:true,
    },

    desc:{
        type: String,
        required:true
    }
    ,

    roomNumber:[{
        number:Number,
        unvailableDates:[{type:Date}]
    }],
},{timestamps:true,collection:"rooms"})
//mongoose.model("Hotel" , Hotelshcema)



module.exports =  mongoose.model("Room" , Roomshcema);