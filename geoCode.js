const request = require('request');




const geoCode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibmlja29saWNlMzk2MyIsImEiOiJja2g0NTUxNjcxNXB0MnJscWUwY3g4YTF4In0.rxPSADky4xlbyZx2V7Xw5g';
  
    request({url: url, json:true}, (error,response) => {
      if(error) {
        callback('Unable To connect to location Service', undefined);
      }
      else if (response.body.features.length === 0 ) {
        callback('Unable To Find Location',undefined) 
      }
      else {
  
      callback(undefined, {
          latitude: response.body.features[0].center[0],
          longitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name
  
      })
    }
  
  
    });
  };
  
  module.exports = geoCode
  
  
  
  
  