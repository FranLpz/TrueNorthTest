const axios = require('axios');

const calcDistance = (source, target) => {
    return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${source}|&destinations=${target}`);
};

module.exports = {
    calcDistance
};

/*https://developers.google.com/maps/documentation/javascript/distancematrix?hl=es-419 */