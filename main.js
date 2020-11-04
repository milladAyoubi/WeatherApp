const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query=37.8267,-122.4233'


request({url: url }, (error, response) =>{

   const data = JSON.parse(response.body)
   console.log(data.current)

})
