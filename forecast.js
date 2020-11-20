const request = require('request')



const forecast = (latitude, longitude,callback) => {


  const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query='+ latitude +','+ longitude ;

    request({url:url, json:true}, (error,response) => {
        if(error) 
            callback('',undefined)
        else if(response.body.error) {
            callback('Error TO connect',undefined)
        }
        else 
        callback(undefined, response.body.location.country + ' is the greatest')
  

    });

}






module.exports = forecast