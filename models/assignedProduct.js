'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AssignedProduct extends Model {}

  AssignedProduct.init(
    {
      userId: DataTypes.INTEGER,
      productId: {
        type: DataTypes.INTEGER,
        unique: true // Add unique constraint here
      }
    },
    {
      sequelize,
      modelName: 'AssignedProduct',
    }
  );

  return AssignedProduct;
};
