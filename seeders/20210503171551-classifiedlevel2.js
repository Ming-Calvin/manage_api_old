'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Classifiedlevel2s', [
      {
        classifiedId: 1,
        name: '羽绒服',
        level: '2',
        effective: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        classifiedId: 1,
        name: '衬衫',
        level: '2',
        effective: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        classifiedId: 2,
        name: '短裤',
        level: '2',
        effective: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classifiedlevel2s', null, {});
  }
};