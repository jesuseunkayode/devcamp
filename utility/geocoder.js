const NodeGeocoder = require('node-geocode')

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;