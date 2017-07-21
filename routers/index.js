const express = require('express');
const router = express.Router();

const model = require ('../models');


router.get('/', (req,res)=> {//function for get all event edit by adnin
  model.Event.findAll().then(event =>{
    res.render('index',{
      title:'Home', dataEvent: event
    })
  })

})

router.get('/login',(req,res)=>{
  res.render('login',{title :'Login'})
})

router.post('/login',function(req,res){
  model.Participant.findOne({
    where:{participant_name:req.body.username, password : req.body.password}
  }).
  then(data=>{
    if(data){
      req.session.user = data.participant_name;
      res.redirect('/')
    }else {
      res.send('salah')
    }
  })
})
module.exports = router
