'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AssignedProduct extends Model {}
AssignedProduct.init(
  {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AssignedProduct',
  });
  return AssignedProduct;
};