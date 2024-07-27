### Promise States

A promise in JavaScript can be in one of three states:

1. **Pending**: The initial state. The promise is neither fulfilled nor rejected.
   ```javascript
   let promise = new Promise((resolve, reject) => {
     // The promise is pending here
   });
   ```

2. **Fulfilled**: The operation completed successfully.
   ```javascript
   let promise = Promise.resolve('Success');
   // The promise is fulfilled with the value 'Success'
   ```

3. **Rejected**: The operation failed.
   ```javascript
   let promise = Promise.reject(new Error('Failure'));
   // The promise is rejected with an error
   ```

### `Promise.allSettled`

`Promise.allSettled` is a method that takes an iterable of promises and returns a promise that resolves after all of the given promises have either fulfilled or rejected. The returned promise resolves with an array of objects that describe the outcome of each promise.

Each object in the array has the following properties:
- **status**: Indicates whether the promise was fulfilled or rejected.
  - `'fulfilled'`
  - `'rejected'`
- **value** (if fulfilled): The value with which the promise was fulfilled.
- **reason** (if rejected): The reason why the promise was rejected.

#### Example:
```javascript
const promises = [
  Promise.resolve('First promise'),
  Promise.reject('Second promise failed'),
  Promise.resolve('Third promise')
];

Promise.allSettled(promises).then((results) => {
  console.log(results);
  // Output:
  // [
  //   { status: 'fulfilled', value: 'First promise' },
  //   { status: 'rejected', reason: 'Second promise failed' },
  //   { status: 'fulfilled', value: 'Third promise' }
  // ]
});
```

### Difference Between `Promise.all` and `Promise.allSettled`

- **`Promise.all`**:
  - **Waits for all promises to be fulfilled.**
  - If any promise is rejected, it immediately rejects with the reason of the first promise that rejects.
  - Useful when you need all promises to succeed and if one fails, the whole operation should be considered failed.
  
  ```javascript
  const promises = [
    Promise.resolve('First promise'),
    Promise.reject('Second promise failed'),
    Promise.resolve('Third promise')
  ];

  Promise.all(promises).then((results) => {
    // This will not be called
  }).catch((error) => {
    console.log(error);
    // Output: 'Second promise failed'
  });
  ```

- **`Promise.allSettled`**:
  - **Waits for all promises to either fulfill or reject.**
  - **Never short-circuits**; always returns an array with the status and value/reason of each promise.
  - Useful when you need to know the result of all promises, regardless of whether they succeeded or failed.

  ```javascript
  const promises = [
    Promise.resolve('First promise'),
    Promise.reject('Second promise failed'),
    Promise.resolve('Third promise')
  ];

  Promise.allSettled(promises).then((results) => {
    console.log(results);
    // Output:
    // [
    //   { status: 'fulfilled', value: 'First promise' },
    //   { status: 'rejected', reason: 'Second promise failed' },
    //   { status: 'fulfilled', value: 'Third promise' }
    // ]
  });
  ```

In summary:
- Use `Promise.all` when you need all promises to be fulfilled to proceed.
- Use `Promise.allSettled` when you want to wait for all promises to complete, regardless of their outcome.
