import Building from './5-building.js';

// the ValidSubclass should override evacuationWarningMessage
class ValidSubclass extends Building {
  evacuationWarningMessage() {
    return 'This is an evacuation warning';
  }
}

class InvalidSubclass extends Building {
  // Does not override evacuationWarningMessage
}

describe('Building Class', () => {
  test('should create an instance of Building', () => {
    const building = new Building(1000);
    expect(building.sqft).toBe(1000);
  });

  test('should create an instance of ValidSubclass', () => {
    const validSubclass = new ValidSubclass(2000);
    expect(validSubclass.sqft).toBe(2000);
    expect(validSubclass.evacuationWarningMessage()).toBe('This is an evacuation warning');
  });

  test('should throw an error when creating an instance of InvalidSubclass', () => {
    expect(() => {
      new InvalidSubclass(3000);
    }).toThrow('Class extending Building must override evacuationWarningMessage');
  });

  test('should allow updating sqft property', () => {
    const building = new Building(4000);
    building.sqft = 4500;
    expect(building.sqft).toBe(4500);
  });
});
