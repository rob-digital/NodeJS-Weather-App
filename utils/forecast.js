const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=39b71a5afa67675f0f148c29e0020304&query=${latitude},${longitude}&units=m`

    request({ url, json: true}, (error, response) => {
        if (error) {
            callback(`Unable to connect to the weather service`, undefined)
        } else if(response.body.error) {
            
            callback(`Unable to find location`, undefined);
            
        } else {
            const currentWeather = response.body.current
    
            callback(undefined, `${currentWeather.weather_descriptions[0]}. Current temp is ${currentWeather.temperature} degree Celsius.`
            )
        }
    })
}


module.exports = forecast