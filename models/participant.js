'use strict';
module.exports = function(sequelize, DataTypes) {
  var Participant = sequelize.define('Participant', {
    participant_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address: DataTypes.STRING,
    personal_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Participant;
};