"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'qrCode', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Products', 'qrCode', {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
    });
  }
};
