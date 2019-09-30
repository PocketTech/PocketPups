const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PupDatabase');

let pupListSchema = mongoose.Schema({
  "id": Number,
  "name": String,
  "age": Number,
  "hunger": Number,
  "happiness": Number, 
  "energy": Number,
  "personality": String,
  "isPup": {
    type: Boolean,
    default: false
  },
  "image": String,
  "breedDog": String,
  "breedPuppy": String
});

let Pup = mongoose.model('Pup', pupListSchema);

let save = (data, callback) => {
    Pup.create(data, (err, item) => {
      if(err){
        callback(err)
      } else {
        callback(null, item)
      }
    })

}

let get = (callback) =>{
  Pup.find({}).exec((err, data) => {
    if (err){
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports.save = save;
module.exports.get = get;