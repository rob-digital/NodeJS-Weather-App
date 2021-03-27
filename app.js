const request = require('request')
const geoCode = require('./utils/geocode')
const requestWeather = require('./utils/forecast')
 
const address = process.argv[2]

if(!address) {
    console.log('------------------------------------');
    console.log(`Please provide address`);
    console.log('------------------------------------');
} else {
    geoCode(`${process.argv[2]}`, (error, { latitude, longitude, location } = {}) => {
        if(error) {
            return console.log(error);
        }
        console.log('------------------------------------');
        console.log('errrr', error);
        console.log('data',  { latitude, longitude, location });
        console.log('------------------------------------');

        requestWeather( latitude, longitude, (error, forecastData) => {
            if(error) return console.log(error);
            console.log('------------------------------------');
            console.log(`WEATHER FORECAST in ${location}: ` , forecastData);
            console.log('------------------------------------');
        })
    })
}


