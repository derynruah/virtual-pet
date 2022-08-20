const MAXIMUM_FITNESS = 10;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const PET_DEATH = "is no longer alive :(";


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  };

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < MAXIMUM_HUNGER && this.fitness > 0;
  }
};

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error(`${this.name} ${PET_DEATH}`);
  } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(`${this.name} ${PET_DEATH}`);
  } 
  if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  };
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(`${this.name} ${PET_DEATH}`);
  }
  if ((this.hunger - 3) > 0 ) {
    this.hunger -= 3;
  } else {
    this.hunger = 0;
  }
};

Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    return `${this.name} ${PET_DEATH}`;
  } else if (this.fitness <= 4 && this.hunger >= 5) {
     return "I'm hungry AND need a walk"
  } else if (this.fitness <= 4) {
     return "I need a walk";
  } else if (this.hunger >= 5) {
     return "I am hungry";
  } else {
    return "I feel great";
  }
};

module.exports = Pet;