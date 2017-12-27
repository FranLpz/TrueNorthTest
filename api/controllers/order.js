'use strict';
    // Include our "db"
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Orders = db.Order;
    const Restaurants = db.Restaurant;
    const { producerOne, consumer } = require('../helpers/queueSys');
    const { calcDistance } = require('../helpers/distanceService');
    const { sender } = require('../helpers/mailer');

    
    function createOrder(req, res, next) {
        const { meals, totalCost, address, latLng, restaurantId } = req.body
        Orders.create({ meals, totalCost, address, latLng, restaurantId }).then(order => {
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
                        console.log('delivery at: ',data.rows[0].elements[0].duration.text);
                        producerOne(JSON.stringify({'distance':data.rows[0].elements[0].duration.text, 'orderId': order.id, 'message':'You have a new order, Order Id: '+order.id}),'Notifications')
                    } else {
                        producerOne(JSON.stringify({'distance':'none', 'message':'Google did not found a route for order: '+order.id}),'Notifications')
                        console.log("Google did not found a path for your motorcycle");
                    }
                    producerOne(JSON.stringify(order),'Orders')
                    return true;
                }).catch(err =>{
                    producerOne(JSON.stringify({'distance':'none', 'message':'some error occurred for order: '+order.id}),'Notifications')
                    console.log("error ",err);
                });
                return Location, commercialEmail;

            }).catch(err =>{
                console.log("error ",err);
            });

            
            return order;
        }).catch(err =>{
            console.log("error ",err);
            res.json({success:0, description:'error ' + err});
        });
    }

    function getOrder(req, res, next) {
        consumer('Orders').then((ch)=> {
            ch.prefetch(1);
            return ch.consume('Orders', function(msg) {
              if (msg !== null) {
                var recievedOrder = JSON.parse(msg.content.toString());
                Restaurants.findById(
                    recievedOrder.restaurantId,
                    { attributes: ['commercialEmail'] }
                ).then( ({ commercialEmail }) => {
                    return sender.sendMail(
                        {
                            from: 'flopez@teravisiontech.com',
                            to: commercialEmail,
                            subject: 'You have a new order',
                            text: 'Your have a new order!'
                        },
                        (error, info) => {
                            if (error) console.log(error);
                            else
                                console.log('Email successfully sent to '+commercialEmail+': '+info.response);
                        }
                    );
                })    

                res.json(recievedOrder);
              }
            });
          });
    }

    module.exports = {
        createOrder,
        getOrder
    };

    /*"Location": {
        "type": "Point",
        "coordinates": [41.43206,-81.38992]
        }*/