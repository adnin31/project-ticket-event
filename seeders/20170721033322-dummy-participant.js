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
    return queryInterface.bulkInsert('Participants', [{
      participant_name: "Beta Saya",
      phone_number: "08198000",
      address: "Jl. Cemara 23, Jakarta",
      personal_id: "11190907887818",
      password: "user",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      participant_name: "Syahrini",
      phone_number: "081823777",
      address: "Jl. Sudirman 11, Jakarta",
      personal_id: "122300017889898",
      password: "user",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      participant_name: "John Doe",
      phone_number: "0815787909",
      address: "Jl. Pahlawan 70, Bandung",
      personal_id: "445300017237842",
      password: "user",
      createdAt :new Date(),
      updatedAt :new Date()
    }, {
      participant_name: "Obama",
      phone_number: "099111000",
      address: "Jl. Mawar 123, Surabaya",
      personal_id: "5989898192091203",
      password: "user",
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
