const express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
const mongo = require('../DataBase/index.js')
const cors = require('cors')
var ip = require('ip');
 

const app = express()
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors());
console.log(ip.address())

app.post('/pups', function (req, res) {
    mongo.save(req.body, (err) => {
      if(err){
        console.log(err);
        return;
       } else {
        res.sendStatus(201)
       }
    })
  });
  
  app.get('/pups', function (req, res) {
    mongo.get((err, data)=>{
      if (err){
        console.log(err)
      } else {
        res.send(data)
      }
    })
  });

  app.put('/pups', function (req, res) {
    mongo.save(req.body, (err) => {
        if(err){
          console.log(err);
          return;
        } else {
          res.sendStatus(201)
        }
    })
  })
 
app.listen(3000)