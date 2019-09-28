var getOlder = function(obj){
  obj['age']++;
};
  
var feed = function(obj){
  if (obj['hunger'] - 5 > 0) {
    obj['hunger'] -= 5;
  } else {
    obj['hunger'] = 0;
  }
  if (obj['happiness'] - 5 > 0) {
    obj['happiness'] -= 5;
  } else {
    obj['happiness'] = 0;
  }
};
  
var play = function(obj){
  // increase happiness by number of units of time 
  if (obj['happiness'] + 40 < 100){
    obj['happiness'] += 40;
  } else {
    obj['happiness'] = 100
  }
  //until zero energy
  if (obj['energy'] - 30 > 0){
    obj['energy'] -= 30;
  } else {
    obj['energy'] = 0;
  }
  
  if (obj['hunger'] + 2 <= 10){
    obj['hunger'] += 2;
  } else {
    obj['hunger'] = 10;
  }
};
  
var nap = function(obj){
  if (obj['energy'] + 40 < 100){
    obj['energy'] += 40
  } else {
    obj['energy'] = 100;
  }
  if (obj['happiness'] - 5 > 0) {
    obj['happiness'] -= 5;
  } else {
    obj['happiness'] = 0;
  }
};

module.exports.getOlder = getOlder;
module.exports.feed = feed;
module.exports.play = play;
module.exports.nap = nap;