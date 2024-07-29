'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('AssignedProducts', {
      fields: ['productId'],
      type: 'unique',
      name: 'unique_product_id'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('AssignedProducts', 'unique_product_id');
  }
};
