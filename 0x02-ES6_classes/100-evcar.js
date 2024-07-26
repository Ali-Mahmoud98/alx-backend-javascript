import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
      const newCar = new Car();
      const symbols = Object.getOwnPropertySymbols(this);
      symbols.forEach((symbol) => {
        newCar[symbol] = this[symbol];
      });
    return newCar;
  }
}
