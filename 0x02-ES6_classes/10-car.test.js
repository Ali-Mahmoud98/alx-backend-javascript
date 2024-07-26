import Car from './10-car.js';

describe('Car', () => {
  test('should create a Car instance with given properties', () => {
    const car = new Car('Toyota', 'Camry', 'Red');
    expect(car._brand).toBe('Toyota');
    expect(car._model).toBe('Camry');
    expect(car._color).toBe('Red');
  });

  test('should clone a Car instance correctly', () => {
    const originalCar = new Car('Toyota', 'Camry', 'Red');
    const clonedCar = originalCar.cloneCar();

    expect(clonedCar).toBeInstanceOf(Car);
    expect(clonedCar._brand).toBe(undefined);
    expect(clonedCar._model).toBe(undefined);
    expect(clonedCar._color).toBe(undefined);
  });

  test('should create a new instance for cloneCar', () => {
    const originalCar = new Car('Toyota', 'Camry', 'Red');
    const clonedCar = originalCar.cloneCar();

    expect(originalCar).not.toBe(clonedCar);
    expect(originalCar.cloneCar()).not.toBe(clonedCar.cloneCar());
  });

  test('should clone Car with default values correctly', () => {
    const originalCar = new Car();
    const clonedCar = originalCar.cloneCar();

    expect(clonedCar).toBeInstanceOf(Car);
    expect(clonedCar._brand).toBe(undefined);
    expect(clonedCar._model).toBe(undefined);
    expect(clonedCar._color).toBe(undefined);
  });

  test('should handle symbol properties if present', () => {
    const symbol = Symbol('test');
    const originalCar = new Car('Toyota', 'Camry', 'Red');
    // eslint-disable-next-line no-underscore-dangle
    originalCar[symbol] = 'special';

    const clonedCar = originalCar.cloneCar();

    expect(clonedCar[symbol]).toBe('special');
  });
});
