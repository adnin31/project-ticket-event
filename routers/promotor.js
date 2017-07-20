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

// router.get('/addEvent/:id', (req, res) => {
//   model.Promotor
//   res.render('addEvent', {
//     title: 'Add Event'
//   })
// })
//
// router.post('/addEvent', (req,res) => {
//   model.Event.create(req.body)
//   .then(row => {res.redirect('/')})
// })


module.exports = router

// {include:[model.Event]}
