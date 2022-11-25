const axios=require('axios')
const url = 'https://api.reliefweb.int/v1/reports?appname=apidoc&limit=500'

const disasterAPI = (callback)=>{
    axios.get(url)
    .then(response => {
       const info = Math.floor(Math.random()*500)+1
        callback({
            diasterName:response.data.data[info].fields.title,
            dishref:response.data.data[info].href,
        })

    })
}

module.exports = disasterAPI

