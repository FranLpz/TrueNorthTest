'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    meals: DataTypes.ARRAY(DataTypes.INTEGER),
    totalCost: DataTypes.FLOAT,
    address: DataTypes.TEXT,
    latLng: DataTypes.GEOMETRY('POINT'),
    restaurantId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.Restaurant);
      }
    }
  });
  return Order;
};