const express = require('express')
var bodyParser = require('body-parser')
const mongo = require('../DataBase.js/index.js')

const app = express()
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

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