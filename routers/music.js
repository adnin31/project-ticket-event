const express = require('express');
const router = express.Router();

const model = require ('../models');

router.get('/',function(req,res) {
  model.Event.findAll({
    where :{category : 'Music'}
  }).then(dataMusic=>{
    res.render('music',{title :'Music', dataMusic : dataMusic})
  })
})


module.exports = router;
