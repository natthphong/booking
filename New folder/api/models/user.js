const  mongoose  = require('mongoose');
const Usershcema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },

    password:{
        type: String,
        required:true
    }
    ,

    isAdmin:{
        type: Boolean,
       default:false
    }
},{timestamps:true})
//mongoose.model("Hotel" , Hotelshcema)



module.exports =  mongoose.model("User" , Usershcema);