const { consumer } = require('../helpers/queueSys');

function getNotification(req, res, next) {
    consumer('Notifications').then((ch)=> {
        ch.prefetch(1);
        return ch.consume('Notifications', function(msg) {
            if (msg !== null) {
            var recievedMsg = JSON.parse(msg.content.toString());
            sendSMS('Your order '+recievedMsg.orderId+' has been proccessed and will arrive in '+recievedMsg.distance)
            //console.log(recievedMsg)
            res.json(recievedMsg);
            }
        });
    });
}

function sendSMS(message) {
    /**
     * function to send sms to customer
     */
    console.log(message);
}

module.exports = {
    getNotification
};