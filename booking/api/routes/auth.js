const express = require('express');
const { register, login } = require('../controllers/auth');
const { countByCity, countByType } = require('../controllers/Conhotel');
const router = express.Router();


router.post('/register',register)
router.post('/login',login)

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
module.exports = router;