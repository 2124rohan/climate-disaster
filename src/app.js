const path = require('path')
const express = require('express')
const User = require('./models/donation')
const disasterAPI =require('./utils/climateapi')
const disasterHref =require('./utils/hrefLink')
require('./database/database')
const bodyParser = require('body-parser')


//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

//set (key , value to set)
//set up handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)


//setup static directory to serve 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index')
})

app.get('/ant_index', (req, res)=>{
    res.render('ant_index')
})

app.post('/alluserinfo',async(req,res)=>{
    const user =new User(req.body)
       await user.save()
        .then(data => {
            console.log("item saved to database");
          })
          .catch(erorr => {
            console.log("unable to save to database");
          });
      })

app.get('/contactform', (req, res)=>{
    res.render('contactform')
})

app.get('/Donationform', (req, res)=>{
    res.render('Donationform')
})


app.get('/disaster',(req, res)=>{
    disasterAPI(({diasterName,dishref}={})=>{
        disasterHref(dishref,({disName,date,information}={})=>{
            res.send({
                disData:diasterName,
                finalData:disName,
                date:date,
                information:information
            })
        })
    
        
    })
})

// app.get('/help', (req, res)=>{
//     res.render('help', {
//         title: 'Help',
//         name: 'Sahil Asolkar'
//     })
// })


app.listen(port, ()=>{
    console.log('server is up on port ' +port)
})
