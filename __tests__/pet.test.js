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

  describe('isAlive', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Fluffy');
    });
    
    it('confirms if the pet is alive or dead', () => {
        
        expect(pet.isAlive).toBe(true);
    });

    it('confirms if the pet is alive or dead', () => {
        pet.hunger = 11;
        
        expect(pet.isAlive).toBe(false);
    });

    it('confirms if the pet is alive or dead', () => {
        pet.age = 31;
        
        expect(pet.isAlive).toBe(false);
    });

    it('confirms if the pet is alive or dead', () => {
        pet.fitness = 5;
        pet.hunger = 5;
        pet.age = 5;
        expect(pet.isAlive).toBe(true);
    });
});

  describe('growUp', () => {
    const pet = new Pet('Fluffy');
    it('increments the age by 1, increases hunger by 5, and reduces fitness by 3', () => {
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.walk()).toThrow(`${pet.name} is no longer alive :(`);
    });
  });

  describe('walk', () => {
    const pet = new Pet('Fluffy');

    it('increases fitness by 4 to a max of 10', () => {

      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toEqual(8);
    });

    it('throws an error if the pet is not alive', () => {
      pet.age = 30;
      expect(() => pet.walk()).toThrow(`${pet.name} is no longer alive :(`);
    });
  });

describe('feed', () => {
  const pet = new Pet('Fluffy');
  it('decreases hunger by 3', () => {
      pet.growUp();
      pet.feed();
    expect(pet.hunger).toEqual(2);
  })

  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow(`${pet.name} is no longer alive :(`);
  });
});

  describe('checkUp', () => {
    const pet = new Pet('Fluffy');
    it("returns I'm hungry AND need a walk when fitness < 4 & hunger > 5 ", () =>{
      pet.fitness = 3;
      pet.hunger = 6;
      expect(pet.checkUp()).toBe("I'm hungry AND need a walk");
    });

    it('returns pet.name is no longer alive :( when the pet is dead', () => {
      pet.age = 30;
      expect(pet.checkUp()).toBe(`${pet.name} is no longer alive :(`);
    });
  });