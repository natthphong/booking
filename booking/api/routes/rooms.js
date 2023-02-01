const express = require('express');

const router = express.Router();


router.get('/' , (req,res)=>{

    res.send('hello room');
})

router.get('/register' , (req,res)=>{

    res.send('hello room register');
})



module.exports = router;