const axios = require('axios')
const disasterHref = (hreflink,hrefData)=>{
axios.all([
    axios.get(hreflink),
  ]).then(axios.spread((response1) => {
    hrefData({disName:response1.data.data[0].fields.country[0].name,
        date:response1.data.data[0].fields.date.original,
        information:response1.data.data[0].fields.body
        
    })
    // console.log(response1.data.data[0].fields.body)
  }))
}
module.exports = disasterHref