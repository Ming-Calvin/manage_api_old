'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Menus', [
      {
        name: '分类管理',
        path: 'Classified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '品牌管理',
        path: 'Brand',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '规格管理',
        path: 'Specifications',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '参数管理',
        path: 'Parameter',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '商品推荐',
        path: 'Recommend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '订单管理',
        path:'Order',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '商品管理',
        path: 'Commodity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};