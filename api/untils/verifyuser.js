const { createError } = require("./error");
const { verifyyToken } = require("./verifyToken")


module.exports = {
    verifyUser: (req,res,next)=>{

    
        verifyyToken(req,res,next,()=>{
            if((req.user.id === req.params.id) || req.user.isAdmin){
                next()
            }else{
                return next(createError(403,"You are not authenticated!"))
            }
        })
        
    },

    verifyAdmin: (req,res,next)=>{
        console.log("admin")
        verifyyToken(req,res,next,()=>{
            if(req.user.isAdmin){
                next()
            }else{
                return next(createError(403,"You are not Admin!"))
            }
        })
    }
}