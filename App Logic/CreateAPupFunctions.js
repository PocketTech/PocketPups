const Dog = function(name, personality, breedDog, breedPuppy){
  const obj = {}
  obj.name = name;
  obj.age = 5;
  obj.hunger = 10;
  obj.happiness = 100; 
  obj.energy = 100;
  obj.personality = personality; 
  obj.isPup = false;
  obj.image = breedDog;
  obj.breedDog = breedDog;
  obj.breedPuppy = breedPuppy;
  return obj
};

const Puppy = function(name, parentOne, parentTwo){ 
  Dog.call(this, name); 
  this.age = 1;
  this.personality = parentOne.personality;
  this.isPup = true;
  this.image = parentTwo.breedPuppy
  this.breedDog = parentTwo.breedDog;
  this.breedPuppy = parentTwo.breedPuppy;
}

Puppy.prototype = Object.create(Dog.prototype); 
Puppy.prototype.constructor = Puppy;

module.exports.Dog = Dog;
module.exports.Puppy= Puppy;
