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
      event_name: "Music Nice",
      category: "Music",
      qty_ticket: "1006",
      schedule: "7-april-2018",
      location: "Balai syahrini",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 200000

    }, {
      event_name: "Seminar Peredam Ngantuk",
      category: "Seminar",
      qty_ticket: "100",
      schedule: "13-february-2018",
      location: "gedung patrick star",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 24000
    },{
        event_name: "Final futsal antar kota",
        category: "Sports",
        qty_ticket: "9000",
        schedule: "13-february-2018",
        location: "gelora bung teja",
        createdAt :new Date(),
        updatedAt :new Date(),
        price : 10000
    },{
      event_name: "Konser slank",
      category: "Music",
      qty_ticket: "1000",
      schedule: "8-januari-2018",
      location: "Gor simatupang",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 50000

    },{
      event_name: "seminar parenting",
      category: "Seminar",
      qty_ticket: "103",
      schedule: "7-desember-2018",
      location: "Balai syahrini",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 600000

    },{
      event_name: "pertandingan mu vs cl",
      category: "Sports",
      qty_ticket: "12320",
      schedule: "7-januari-2018",
      location: "Gelora Sahari",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 23400

    },{
      event_name: "Final Badminton",
      category: "Sports",
      qty_ticket: "104",
      schedule: "23-april-2019",
      location: "Senayan Sport Center",
      createdAt :new Date(),
      updatedAt :new Date(),
      price : 50000

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
