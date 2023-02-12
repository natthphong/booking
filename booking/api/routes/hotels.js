
const {createHotel,updateHotel,deleteHotel,getHotel,getallHotel, countByCity, countByType, getHotelRooms} = require('../controllers/Conhotel.js');
const { verifyAdmin } = require('../untils/verifyuser');

const router = require('express').Router();


router.get('/countByCity' , countByCity);
router.get("/countByType", countByType);
router.get("/room:id", getHotelRooms);

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