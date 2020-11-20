const request = require("request");
const geoCode = require('./utils/geoCode')

//Refer to WeatherStack API Documentaion for Additional Functions:)
const url =
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

  request({ url: mapBox, json: true }, (error, response) => {
    if(error) {console.log('Unable to Connect to Service');}
    if(response.body.error) {console.log('No Matching Result');}


    var long = response.body.features[0].center[1];
    var lat = response.body.features[0].center[0];
    console.log(" > Longitude " + long);
    console.log(" > Latitude " + lat);
  
  });


