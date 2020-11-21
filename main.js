const request = require("request");
const geoCode = require('./geoCode')
const forecast = require('./forecast')


console.log('Welcome To Node Weather App!')

console.log('-------------------------------')



//Only Works With Location New York
const address = process.argv[2]

console.log('City: ' + address )

if(!address) 
  console.log('Error: Enter a location please')

geoCode(address,(error,{latitude,longitude,location}) => {
  if(error)
  console.log('Error:',error);
  else
  console.log('Its official location is',location);



  forecast(latitude, longitude, (error,forecastData) => {
    if(error)
    console.log('Error:',error);
    else
    console.log('Currently it is',forecastData);
  });
  
});

