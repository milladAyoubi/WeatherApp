const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query=37.8267,-122.4233'

console.log('Welcome To WeatherApp W/ WeatherStack API')
console.log('------------------------------------------')
request({url: url }, (error, response) =>{

   const data = JSON.parse(response.body)
   console.log(' > Current Temperature is ' + data.current.temperature + ' C')

})
