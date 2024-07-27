'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // Define associations here
      Ticket.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Ticket.init(
    {
      userId: DataTypes.INTEGER,
      category: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Ticket',
    }
  );
  return Ticket;
};
