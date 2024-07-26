### What Are Symbols in JavaScript?

In JavaScript, symbols are a primitive data type introduced in ECMAScript 2015 (ES6). They are often used to create unique identifiers for object properties. Symbols are:

- **Unique**: Each symbol is unique and cannot be duplicated.
- **Immutable**: Once created, a symbol’s value cannot be changed.
- **Non-enumerable**: Symbols are not included in typical enumerations of object properties (like `for...in` loops or `Object.keys()`).

### Creating and Using Symbols

You create a symbol using the `Symbol()` function:

```
const mySymbol = Symbol('description');
```

The optional `description` is a string used for debugging purposes but does not affect the uniqueness of the symbol.

You can use symbols as property keys for objects:

```javascript
const mySymbol = Symbol('uniqueKey');
const obj = {
  [mySymbol]: 'value'
};

console.log(obj[mySymbol]); // Outputs: 'value'
```

### Retrieving Symbol Properties

To retrieve symbol properties from an object, you use `Object.getOwnPropertySymbols()`. This method returns an array of symbols that are properties of the specified object.

### Example of `Object.getOwnPropertySymbols()`

Here's a complete example demonstrating how `Object.getOwnPropertySymbols()` works:

```
const symbol1 = Symbol('sym1');
const symbol2 = Symbol('sym2');

const myObject = {
  [symbol1]: 'value1',
  [symbol2]: 'value2',
  regularProperty: 'value3'
};

// Retrieve symbol properties
const symbols = Object.getOwnPropertySymbols(myObject);

console.log(symbols); // Outputs: [Symbol(sym1), Symbol(sym2)]

// Access the properties using the symbols
symbols.forEach(symbol => {
  console.log(myObject[symbol]); // Outputs: 'value1' and 'value2'
});
```

### Explanation

- **Symbols**: `symbol1` and `symbol2` are unique symbols used as keys in `myObject`.
- **`Object.getOwnPropertySymbols(myObject)`**: This method retrieves an array of symbols used as keys in `myObject`.
- **Output**: The returned array `[Symbol(sym1), Symbol(sym2)]` contains the symbols that are properties of `myObject`. It does not include the `regularProperty` because it is a string key, not a symbol.

### Using Symbols in `cloneCar`

In the `cloneCar` method from your `Car` class example:

```
cloneCar() {
  const newCar = new this.constructor();
  const symbols = Object.getOwnPropertySymbols(this);
  symbols.forEach((symbol) => {
    newCar[symbol] = this[symbol];
  });
  return newCar;
}
```

- **`Object.getOwnPropertySymbols(this)`**: Retrieves the symbols that are properties of the current instance (`this`).
- **`symbols.forEach((symbol) => { newCar[symbol] = this[symbol]; })`**: Iterates over the symbols and copies the corresponding properties from the current instance to the new instance.

### Summary

- Symbols are unique, immutable identifiers for object properties.
- `Object.getOwnPropertySymbols()` retrieves an array of symbol properties from an object.
- In the `cloneCar` method, symbols are used to ensure that symbol properties are copied to a new instance, preserving their unique identity.