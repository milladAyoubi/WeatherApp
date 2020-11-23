const http = require('http')



const url = 'http://api.weatherstack.com/current?access_key=fd4ab5def50a0a0c8d0cfcff7f835846&query=40,-75&units=f' 

const request = http.request(url, (response) => {


   

   

    var data = ''

    response.on('data', (chunk) => {

        data = data + chunk.toString()

 





    })

    response.on('end', () => {
      var body = JSON.parse(data)
      console.log(data)

    })  
})
request.end()




