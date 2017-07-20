const express = require('express');
const router = express.Router();

const model = require ('../models');

router.get('/:id', (req,res)=> {//function for get all event edit by adnin
    model.Buyer.findAll({
      include : [model.Event,model.Participant]
    }).then(buyer =>{
      model.Participant.findAll().then(participant=>{
        model.Event.findById(req.params.id).then(event =>{
          res.render("buyTicket",{dataParticipant : participant , dataEvent: event,
          dataBuyer :buyer})
        })
      })
    })

})
  function totalharga(ticket,harga) {
    return ticket * harga
  }
  function kurangTicket() {

  }

router.post('/:id', (req,res)=> {//function for get all event edit by adnin
  model.Buyer.create({
    ParticipantId : req.body.listParticipant,
    EventId : req.body.listEvent,
    jumlah_ticket :req.body.jumlah_ticket,
    total_bayar : totalharga(req.body.jumlah_ticket,req.body.button)
  }).then(()=>{
    model.Event.findById(req.params.id).then(event =>{
      model.Event.update({
        qty_ticket : event.qty_ticket-req.body.jumlah_ticket
      },{
        where : {id:req.params.id}
      }).then(()=>res.redirect("/"))
    })
  })

})









module.exports = router;
