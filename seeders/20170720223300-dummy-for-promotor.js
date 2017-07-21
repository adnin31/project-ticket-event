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
    return queryInterface.bulkInsert('Promotors', [{
      promotor_name: "John Lennon",
      phone_number: "08112234445",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      promotor_name: "Mario Tegar",
      phone_number: "0882786239",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      promotor_name: "Andi Kaskus",
      phone_number: "0817888005",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      promotor_name: "Adnin Hidayat",
      phone_number: "0815778779",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      promotor_name: "Jeng Kellyn",
      phone_number: "0822112233",
      createdAt :new Date(),
      updatedAt :new Date()
    }])
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
