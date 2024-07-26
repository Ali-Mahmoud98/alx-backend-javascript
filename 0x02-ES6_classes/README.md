# 0x02. ES6 classes

## Resources
* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)
* [Metaprogramming - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

## Learning Objectives
* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols

## Commands:
* to run the code:
```
npm run dev <your_main.js>
```
* to check linting:
```
npm run lint <your_file.js>
```
* to test your module or code:
first you should install `jest` then update your `package.json`:
```
"jest": {
    "testMatch": [
      "**/?(*.)+(test).js"
    ]
  }
```
add in scripts in `package.json`:
```
"test": "jest"
```
make your test file (ex: `module.test.js`) then use the command:
```
npm run test module.test.js
```
