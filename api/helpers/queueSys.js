// Queue System Helper
'use strict';
var host;

const open = require('amqplib').connect('amqp://localhost:5000');

module.exports = {
  producer: producer,
  producerOne: producerOne,
  consumer: consumer
};

// Publisher
function producer() {
  return open.then(function(conn) {
    return conn.createChannel();
  }).catch(console.warn);
}

// Publisher for Only One message
function producerOne(msg, queue) {
  return open.then(function(conn) {
    return conn.createChannel();
  }).then(function(ch) {
    return ch.assertQueue(queue).then(function(ok) {
      return ch.sendToQueue(queue, new Buffer(msg));
    });
  }).catch(console.warn);
}

// Consumer
function consumer(queueName) {
  return open.then(function(conn) {
    return conn.createChannel();
  }).then(function(ch) {
    return ch.assertQueue(queueName).then(function(ok) {
      return ch; 
    });
  }).catch(console.warn);
}