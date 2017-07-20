const express = require('express');
const router = express.Router();

const model = require ('../models');


router.get('/', (req,res)=> {//function for get all event edit by adnin
  model.Event.findAll().then(event =>{
    console.log(event);
    res.render('index',{
      title: 'Even Ticket Seller', dataEvent: event
    })
  })
})


router.get('/add-event', (req, res) => { // by dayat
  res.render('add-event', {
    title: 'Add Event'
  })
})

router.post('/add-event', (req,res) => { // by dayat
  model.Event.create(req.body)
  .then(row => {res.redirect('/')})
})

router.get('/editEvent/:id',(req,res)=>{
  model.Event.findById(req.params.id).then(event =>{
    console.log(event);
    res.render('editEvent',{
      title: 'Edit Event', dataEvent : event
    })
  })
})



module.exports = router
