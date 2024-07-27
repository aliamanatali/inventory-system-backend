'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'assignedTo');
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'assignedTo', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'SET NULL',
    });
  }
};
