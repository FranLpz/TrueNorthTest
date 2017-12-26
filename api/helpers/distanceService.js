const axios = require('axios');

const calcDistance = (source, target) => {
    return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${firstLocation}|&destinations=${secondLocation}&key=AIzaSyColnIk7nrUZXnFu2VAVUll9mNp6PpxmSE`);
};

module.exports = {
    calcDistance
};

/*https://developers.google.com/maps/documentation/javascript/distancematrix?hl=es-419 */