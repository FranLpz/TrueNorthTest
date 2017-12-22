'use strict';
    // Include our "db"
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Restaurants = db.Restaurant;

    //GET /all restaurants operationId
    function getAll(req, res, next) {
        const { min, max } = req.swagger.params;
        Restaurants.findAll({
            where: {
                rating: {
                    [Op.between]: [min.value, max.value],
                }
              }
        }).then (response =>{
            res.json(response);
        });
    }

    module.exports = {
        getAll 
    };