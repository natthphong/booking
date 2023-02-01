const {createError}  = require ('../untils/error')
const express = require('express');
const { updateUser, deleteUser, getUser, getallUser } = require('../controllers/Conuser');
const {  verifyyToken} = require('../untils/verifyToken.js');
const {  verifyUser, verifyAdmin} = require('../untils/verifyuser.js');

const router = express.Router();

/*
//verifytoken
router.get('/checkAuthentication',verifyyToken,(req,res,next)=>{
    res.send("HELLO Token")
})
//verifyUser
router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
    res.send("HELLO USER")
})
//verifyAdmin
router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
    res.send("HELLO admin")
})

*/


//Update
router.put('/:id' , verifyUser,updateUser)
//Delete
router.delete('/:id' , verifyUser,deleteUser)
//Get
router.get('/:id' ,verifyUser, getUser)
//Get all
router.get('/' ,verifyAdmin, getallUser)



module.exports = router;