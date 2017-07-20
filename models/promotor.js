'use strict';
module.exports = function(sequelize, DataTypes) {
  var Promotor = sequelize.define('Promotor', {
    promotor_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    eventId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Promotor;
};