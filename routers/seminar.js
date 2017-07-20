const express = require('express');
const router = express.Router();

const model = require ('../models');


router.get('/',function(req,res) {
  model.Event.findAll({
    where :{category : 'Seminar'}
  }).then(dataSeminar=>{
    res.render('seminar',{title :'Seminar',dataSeminar :dataSeminar})
  })
})

module.exports = router;
