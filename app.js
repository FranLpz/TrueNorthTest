'use strict';

const SwaggerExpress = require('swagger-express-mw');
const Sequelize = require('sequelize');
const app = require('express')();
const Op = Sequelize.Op
//const sequelize = new Sequelize('postgres://flopez:123456@localhost:5432/truenorth');
module.exports = app; // for testing

const { calcDistance } = require("./api/helpers/distanceService");

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  
  // install middleware
  swaggerExpress.register(app);
  const port = process.env.PORT || 10010;
  app.listen(port);

  /*sequelize
  .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });*/
});
