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