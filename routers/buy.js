const express = require('express');
const router = express.Router();

const model = require ('../models');

router.get('/', (req,res)=> {//function for get all event edit by adnin
    res.render('buyTicket')
})









module.exports = router;
