const {createError}  = require ('../untils/error')
const express = require('express');
const {createHotel,updateHotel,deleteHotel,getHotel,getallHotel} = require('../controllers/Conhotel.js');
const { verifyAdmin } = require('../untils/verifyuser');

const router = express.Router();

//create
router.post('/' ,verifyAdmin, createHotel)
//Update
router.put('/:id' , verifyAdmin,updateHotel)
//Delete
router.delete('/:id' , verifyAdmin,deleteHotel)
//Get
router.get('/:id' , getHotel)
//Get all
router.get('/' , getallHotel)



module.exports = router;