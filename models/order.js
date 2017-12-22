'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    meals: DataTypes.TEXT,
    totalCost: DataTypes.FLOAT,
    address: DataTypes.TEXT,
    latLng: DataTypes.GEOMETRY('POINT')
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};