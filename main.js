const request = require("request");
const geoCode = require('./geoCode')
const forecast = require('./forecast')
//Refer to WeatherStack API Documentaion for Additional Functions:)
/*const url =
  "http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query=37.8267,-122.4233";


console.log("Welcome To WeatherApp W/ WeatherStack API");
console.log("------------------------------------------");

request({ url: url }, (error, response) => {

  if(error) {console.log('Error')};
  if(response.body.error) {console.log('Error')};

  const data = JSON.parse(response.body);
  var weatherType = data.current.weather_descriptions[0];
  
  console.log("Its " + data.current.observation_time);

  console.log(" > Current Temperature is " + data.current.temperature + " C");
  console.log(" > Chance of Rain is " + data.current.precip + " %");
  
  if (weatherType == "Partly cloudy")
    console.log(
      "It may be " + weatherType + " today but dont let that get you down!"
    );
  });



  
  
*/


//Only Works With Location New York
const address = process.argv[2]

console.log(process.argv)

if(!address) 
  console.log('Error: Enter a location please')

geoCode(address,(error,{latitude,longitude,location}) => {
  if(error)
  console.log('Error:',error);
  else
  console.log('Geographic Data:',location);



  forecast(latitude, longitude, (error,forecastData) => {
    if(error)
    console.log('Error:',error);
    else
    console.log('Forecast Data:',forecastData);
  });
  
});

