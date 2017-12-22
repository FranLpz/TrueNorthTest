'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meals = sequelize.define('Meal', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Meals;
};