const express = require('express');
const router = express.Router();

const model = require ('../models');

router.get('/',function(req,res) {
  model.Participant.findAll().then(participant=>{
    res.render('user',{title :'participant', dataParticipant : participant})
  })
})

router.get('/:id',function(req,res) {
  model.Participant.findAll({
    where : {id : req.params.id},
    include : [model.Buyer]
  }).then(participant=>{
    model.Buyer.findAll({
        include : [model.Event,model.Participant],
        where :{ParticipantId:participant[0].id}
    }).then(buyer=>{
      res.render('detailUser',{title :'detail', dataParticipant : participant, dataBuyer : buyer})
    })
  })
})


module.exports = router;
