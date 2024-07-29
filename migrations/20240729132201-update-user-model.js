'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_email_constraint' // You can name the constraint as you like
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', 'unique_email_constraint');
  }
};
