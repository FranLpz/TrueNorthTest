'use strict';
    // Include our "db"
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Orders = db.Order;

    
    function createOrder(req, res, next) {
        const { totalCost, address, latLng } = req.body
        console.log(totalCost, address, latLng)
        res.json('Yeah!')
    }

    module.exports = {
        createOrder 
    };

    /*"Location": {
        "type": "Point",
        "coordinates": [41.43206,-81.38992]
        }*/