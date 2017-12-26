'use strict';
    // Include our "db"
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Orders = db.Order;
    const Restaurants = db.Restaurant;
    const amqp = require('amqplib/callback_api');
    const { producerOne } = require('../helpers/queueSys')
    const { calcDistance } = require('../helpers/distanceService')

    
    function createOrder(req, res, next) {
        const { meals, totalCost, address, latLng, restaurantId } = req.body
        Orders.create({ meals, totalCost, address, latLng, restaurantId }).then(order => {
            // you can now access the newly created task via the variable task4
            res.json({success:1, description:'Success'});
            return order;
        }).then(order => {
            Restaurants.findById(
                order.restaurantId,
                { attributes: ['Location', 'commercialEmail'] }
            ).then( ({ Location, commercialEmail }) => {
                calcDistance(Location.coordinates , order.latLng.coordinates)
                .then( ({data}) => {
                    if(data.rows[0].elements[0].status === "OK"){
                        console.log(data.rows[0].elements[0].duration.text);
                    } else {
                        console.log("Google did not found a path for your motorcycle");
                    }
                    producerOne(JSON.stringify({'distance':data.rows[0].elements[0].duration.text, 'message':'You have a new order, Order Id: '+order.id}),'Notifications')
                    producerOne(JSON.stringify(order),'Orders')
                    return true;
                });
                return Location, commercialEmail;
            })

            
            return order;
        });
    }

    module.exports = {
        createOrder 
    };

    /*"Location": {
        "type": "Point",
        "coordinates": [41.43206,-81.38992]
        }*/