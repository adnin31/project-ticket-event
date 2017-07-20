'use strict';
module.exports = function(sequelize, DataTypes) {
  var Promotor = sequelize.define('Promotor', {
    promotor_name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  });

  Promotor.associate = models => {
    Promotor.hasMany(models.Event)
  }
  return Promotor;
};
