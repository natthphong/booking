const  mongoose  = require('mongoose');
const Hotelshcema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },

    type:{
        type: String,
        required:true
    }
    ,

    city:{
        type: String,
        required:true
    }
    ,

    address:{
        type: String,
        required:true
    }
    ,

    distance:{
        type: String,
        required:true
    }
    ,

    photos:{
        type: [String],
        required:false
    }
    ,

    desc:{
        type: String,
        required:true
    }
    ,
    title:{
        type: String,
        required:true
    }
    ,


    rating:{
        type: String,
        min:0,
        max:5
    }
    ,

    rooms:{
        type: [String]
    }
    ,

    cheapestPrice:{
        type: Number,
        required:true
    }
    ,

    featured:{
        type: Boolean,
       default:false
    }
})
//mongoose.model("Hotel" , Hotelshcema)



module.exports =  mongoose.model("Hotel" , Hotelshcema);