'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Events', [{
      event_name: "Konser budion7",
      category: "Music",
      qty_ticket: "1000",
      schedule: "7-april-2018",
      location: "Balai syahrini",
      createdAt :new Date(),
      updatedAt :new Date(),
      Price : "IDR 60000"
    }, {
      event_name: "Seminar Peredam stress",
      category: "Seminar",
      qty_ticket: "100",
      schedule: "13-february-2018",
      location: "gedung patrick star",
      createdAt :new Date(),
      updatedAt :new Date(),
      Price : "IDR 24000"
    },{
        event_name: "Final futsal antar kampung",
        category: "Sports",
        qty_ticket: "9000",
        schedule: "13-february-2018",
        location: "gelora bung teja",
        createdAt :new Date(),
        updatedAt :new Date(),
        Price : "IDR 10000"
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
