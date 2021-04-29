'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Logins', [
      {
        username: 'root',
        password: 'root',
        phone: '15960049901',
        email: '2431165604@qq.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Logins', null, {});
  }
};
