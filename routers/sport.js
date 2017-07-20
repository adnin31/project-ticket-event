const express = require('express');
const router = express.Router();

const model = require ('../models');

router.get('/',function(req,res) {
  model.Event.findAll({
    where :{category : 'Sports'}
  }).then(dataSport=>{
    res.render('sport',{title :'Sport', dataSport : dataSport})
  })
})

module.exports = router;
