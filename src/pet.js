const MAXIMUM_FITNESS = 10;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  }

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= 10 ) {
    this.fitness += 4;
  } else {
    this.fitness = 10;
  }
}

Pet.prototype.feed = function() {
  if ((this.hunger + 3) <= 10 ) {
    this.hunger += 3;
  } else {
    this.fitness = 10;
  }
}

Pet.prototype.checkUp = function() {
  if (this.fitness < 4 && this.hunger > 3) {
     return "I'm hungry AND need a walk"
  } else if (this.fitness < 4) {
     return "I need a walk";
  } else if (this.hunger > 3) {
     return "I am hungry";
  } else {
    return "I feel great";
  }
}

module.exports = Pet;