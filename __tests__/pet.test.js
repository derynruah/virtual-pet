const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fluffy')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {  
    it('sets the name property', () => {
      const pet = new Pet('Fluffy');
      expect(pet.name).toEqual('Fluffy');
    });
  });

  describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fluffy');
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1, increases hunger by 5, and reduces fitness by 3', () => {
      const pet = new Pet('Fluffy');
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4 to a max of 10', () => {
      const pet = new Pet('Fluffy');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('feed', () => {
    it('increases hunger by 3 to a max of 10', () => {
      const pet = new Pet('Fluffy');

      pet.hunger = 3;
      pet.feed();

      expect(pet.hunger).toEqual(6)
    });
  });

  describe('checkUp', () => {
    it("returns I'm hungry AND need a walk when fitness < 4 & hunger > 3 ", () =>{
      const pet = new Pet('Fluffy');

      pet.fitness = 4 - 1;
      pet.hunger = 3 + 1;
      
      expect(pet.checkUp()).toBe("I'm hungry AND need a walk");
    });
  });