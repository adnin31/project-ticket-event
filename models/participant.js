'use strict';
module.exports = function(sequelize, DataTypes) {
  var Participant = sequelize.define('Participant', {
    participant_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    personal_id: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Participant.associate = models =>{
    Participant.hasMany(models.Buyer)
    }
  return Participant;
};
