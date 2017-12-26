'use strict';
    // Include our "db"
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op
    const db = require("../../models/index.js");
    const Orders = db.Order;
    const amqp = require('amqplib/callback_api');

    
    function createOrder(req, res, next) {
        const { totalCost, address, latLng } = req.body
        Orders.create({ totalCost, address, latLng }).then(order => {
            // you can now access the newly created task via the variable task4
            res.json({success:1, description:'laksjdlkasjd'});
            return order;
        }).then(order2queue => {
            console.log('then que '+order2queue)
            amqp.connect('amqp://localhost', function(err, conn) {
                conn.createChannel(function(err, ch) {
                  var q = 'task_queue';
                  var msg = process.argv.slice(2).join(' ') || "Hello World!";
              
                  ch.assertQueue(q, {durable: true});
                  ch.sendToQueue(q, new Buffer(msg), {persistent: true});
                  console.log(" [x] Sent '%s'", msg);
                });
                setTimeout(function() { conn.close(); process.exit(0) }, 500);
            });
            
        });
    }

    module.exports = {
        createOrder 
    };

    /*"Location": {
        "type": "Point",
        "coordinates": [41.43206,-81.38992]
        }*/