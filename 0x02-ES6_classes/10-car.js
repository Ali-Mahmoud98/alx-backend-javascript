export default class Car {
  constructor(brand = null, model = null, color = null) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._model = model;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  /**
 * cloneCar - Creates a clone of the current car instance and returns
 * a new instance of the same class. The new instance will have all the symbols
 * copied from the original car instance.
 *
 * @returns {Car} A new instance of the Car class with copied properties and symbols.
 */
  cloneCar() {
    const newCar = new this.constructor();
    const symbols = Object.getOwnPropertySymbols(this);
    symbols.forEach((symbol) => {
      newCar[symbol] = this[symbol];
    });
    return newCar;
  }
}
