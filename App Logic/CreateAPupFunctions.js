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
  const obj = Dog.call(this, name); 
  obj.age = 1;
  obj.personality = parentOne.personality;
  obj.isPup = true;
  obj.image = parentTwo.breedPuppy
  obj.breedDog = parentTwo.breedDog;
  obj.breedPuppy = parentTwo.breedPuppy;
  return obj
}

Puppy.prototype = Object.create(Dog.prototype); 
Puppy.prototype.constructor = Puppy;

module.exports.Dog = Dog;
module.exports.Puppy= Puppy;
