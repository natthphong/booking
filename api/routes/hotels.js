const {createError}  = require ('../untils/error')
const express = require('express');
const {createHotel,updateHotel,deleteHotel,getHotel,getallHotel} = require('../controllers/Conhotel.js');

const router = express.Router();

//create
router.post('/' , createHotel)
//Update
router.put('/:id' , updateHotel)
//Delete
router.delete('/:id' , deleteHotel)
//Get
router.get('/:id' , getHotel)
//Get all
router.get('/' , getallHotel)



module.exports = router;