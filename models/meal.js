'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meal = sequelize.define('Meal', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    restaurantId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Meal.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', sourceKey: 'id' });
      }
    }
  });
  return Meal;
};