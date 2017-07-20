'use strict';
module.exports = function(sequelize, DataTypes) {
  var Buyer = sequelize.define('Buyer', {
    ParticipantId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER,
    jumlah_ticket:DataTypes.INTEGER,
    total_bayar:DataTypes.INTEGER
  });

  Buyer.associate = models =>{
    Buyer.belongsTo(models.Event);
    Buyer.belongsTo(models.Participant)
  }
  return Buyer;
};
