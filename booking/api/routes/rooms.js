const {createError}  = require ('../untils/error')
const express = require('express');

const { verifyAdmin } = require('../untils/verifyuser');
const { createRoom, updateRoom, deleteRoom, getRoom, getallRoom } = require('../controllers/Conroom');

const router = express.Router();

//create
router.post('/:hotelid' ,verifyAdmin, createRoom)
//Update
router.put('/:id' , verifyAdmin,updateRoom)
//Delete
router.delete('/:id/:hotelid' , verifyAdmin,deleteRoom)
//Get
router.get('/:id' , getRoom)
//Get all
router.get('/' , getallRoom)



module.exports = router;