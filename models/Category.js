const { DataTypes, Model } = require("sequelize");
const database = require("../database/database.js");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: database,
    modelName: "category",
  }
);

module.exports = Category;
