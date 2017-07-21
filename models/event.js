'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    category: DataTypes.STRING,
    qty_ticket: DataTypes.STRING,
    schedule: DataTypes.STRING,
    location: DataTypes.STRING,
    price :DataTypes.INTEGER,
    PromotorId :DataTypes.INTEGER
  });

  Event.associate = models => {
    Event.belongsTo(models.Promotor);
    Event.hasMany(models.Buyer);
    
  }

  return Event;
};
