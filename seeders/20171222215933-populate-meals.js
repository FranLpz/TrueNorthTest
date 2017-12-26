'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [{
      "name": "Thunderheart",
      "description": "Switchable next generation instruction set",
      "price": 33.53,
      "restaurantId":1
    }, {
      "name": "Pride and Glory",
      "description": "Diverse encompassing moderator",
      "price": 57.97,
      "restaurantId":1
    }, {
      "name": "Birdemic: Shock and Terror",
      "description": "Business-focused client-driven focus group",
      "price": 60.63,
      "restaurantId":1
    }, {
      "name": "Last Passenger",
      "description": "Re-engineered user-facing definition",
      "price": 22.84,
      "restaurantId":2
    }, {
      "name": "Cousins in Love (a.k.a. Tender Cousins) (Tendres Cousines)",
      "description": "Customer-focused modular structure",
      "price": 57.68,
      "restaurantId":2
    }, {
      "name": "Captains Courageous",
      "description": "Face to face high-level application",
      "price": 28.0,
      "restaurantId":2
    }, {
      "name": "Stella: Live in Boston",
      "description": "Business-focused methodical protocol",
      "price": 60.28,
      "restaurantId":2
    }, {
      "name": "Tall Man, The",
      "description": "Automated object-oriented solution",
      "price": 84.28,
      "restaurantId":2
    }, {
      "name": "Tyler Perry's Madea's Family Reunion",
      "description": "Multi-channelled fresh-thinking throughput",
      "price": 81.29,
      "restaurantId":2
    }, {
      "name": "Flat, The",
      "description": "Multi-layered encompassing benchmark",
      "price": 58.97,
      "restaurantId":2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  }
};
