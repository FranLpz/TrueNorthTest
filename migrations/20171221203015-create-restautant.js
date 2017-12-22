'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      logo:{
        type: Sequelize.STRING
      }, 
      comercialName:{
        type: Sequelize.STRING
      }, 
      legalName:{
        type: Sequelize.STRING
      }, 
      rating:{
        type: Sequelize.FLOAT,
        validate: { min: 1, max: 5 }
      }, 
      commercialEmail:{
        type: Sequelize.STRING
      },
      adminNumber:{
        type: Sequelize.STRING
      },
      adress:{
        type: Sequelize.STRING
      },
      Location:{
        type: Sequelize.GEOMETRY('POINT')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};