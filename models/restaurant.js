'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurant = sequelize.define('Restaurant', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    logo: DataTypes.STRING, 
    comercialName: DataTypes.STRING, 
    legalName: DataTypes.STRING, 
    rating: DataTypes.FLOAT, 
    commercialEmail: DataTypes.STRING,
    adminNumber: DataTypes.STRING,
    adress: DataTypes.STRING,
    Location: DataTypes.GEOMETRY('POINT')
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Restaurant.hasMany(models.Review);
        Restaurant.hasMany(models.Order);
        //models.restaurant.hasMany(models.review, { foreignKey: 'restaurant_id', sourceKey: 'id', onDelete: 'cascade' });
      }
    }
  });
  return Restaurant;
};