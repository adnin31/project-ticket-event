'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    event_name: DataTypes.STRING,
    category: DataTypes.STRING,
    qty_ticket: DataTypes.STRING,
    schedule: DataTypes.STRING,
    location: DataTypes.STRING,
    Price :DataTypes.STRING,
    PromotorId :DataTypes.INTEGER
  });

  Event.associate = models => {
    Event.belongsTo(models.Promotor)
  }
  return Event;
};
