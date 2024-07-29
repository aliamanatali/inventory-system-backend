"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      name: DataTypes.STRING,
      qrCode: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
      },
      category: DataTypes.STRING,
      purchaseDate: DataTypes.DATE,
      warrantyDate: DataTypes.DATE,
      condition: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
