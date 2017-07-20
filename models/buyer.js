'use strict';
module.exports = function(sequelize, DataTypes) {
  var Buyer = sequelize.define('Buyer', {
    ParticipantId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Buyer;
};