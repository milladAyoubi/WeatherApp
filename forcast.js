const request = require('request')



const forcast = (latitude,longitude,callback) => {


  const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query='+latitude+','+longitude + '&units=f';

    request({url:url, json:true}, (error,response) => {
        if(error) 
            callback('Error',undefined)
        else if(response.body.error) {
            callback('Error',undefined)
        }
        else 
        callback(undefined, response.body.daily.data[0].summary)
  

    });

}






module.exports = forcast