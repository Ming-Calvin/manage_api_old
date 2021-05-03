'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Classifieds', [
      {
        name: '上衣',
        level: '1',
        effective: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: '外裤',
        level: '1',
        effective: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classifieds', null, {});
  }
};
