const express = require('express');
const router = express.Router();
const model = require('../models');


router.get('/', (req, res) => {
  model.Promotor.findAll({include:[model.Event]}).then(promotor => {
    console.log(promotor);
    res.render('promotor', {
      title: 'Promotor page', dataPromotor: promotor
    })
  })
})

router.get('/addPromotor', (req, res) => {
  res.render('addPromotor', {title: 'Add Promotor Page'});
})

router.post('/addPromotor', (req, res) => {
  model.Promotor.create(req.body).then(promotor => {
    res.redirect('/promotor')
  })
})

router.get('/editPromotor/:id', (req,res) => {
  model.Promotor.findById(req.params.id).then(promotor => {
    res.render('editPromotor', {
      title: 'Edit Promotor Page', dataPromotor: promotor
    })
  })
})

router.post('/editPromotor/:id', (req,res) => {
  model.Promotor.update(req.body, {where: {id: req.params.id}}).then(promotor => {
    res.redirect('/promotor')
  })
})

router.get('/deletePromotor/:id', (req,res) => {
  model.Promotor.destroy({where: {id:req.params.id}}).then(promotor => {
    res.redirect('/promotor')
  })
})

router.get('/addEvent/:id', (req, res) => {
  res.render('addEvent', {
    title: 'Add Event', id: req.params.id
  })
})

router.post('/addEvent/:id', (req,res) => {
  model.Event.create({
    event_name: req.body.event_name,
    category: req.body.category,
    schedule: req.body.schedule,
    qty_ticket: req.body.qty_ticket,
    location: req.body.location,
    Price: req.body.Price,
    PromotorId: req.params.id,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(row => {res.redirect('/promotor')})
})

router.get('/editEvent/:id',(req,res)=>{
  model.Event.findById(req.params.id).then(event =>{
    console.log(event);
    res.render('editEvent',{
      title: 'Edit Event', dataEvent : event
    })
  })
})

router.get('/deleteEvent/:id', (req,res) => {
  model.Event.destroy({where: {id:req.params.id}}).then(event => {
    res.redirect('/promotor')
  })
})

module.exports = router

// {include:[model.Event]}
