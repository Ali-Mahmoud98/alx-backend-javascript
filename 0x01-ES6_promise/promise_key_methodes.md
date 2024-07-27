# Promies Key Methods
Promises in JavaScript have several key methods that help manage asynchronous operations. Here’s a rundown of the most commonly used methods:

### 1. `Promise.resolve(value)`

- **Purpose**: Creates a promise that is resolved with the given value.
- **Usage**: Useful for returning a promise from a synchronous function or converting a non-promise value into a promise.
- **Example**:
  ```javascript
  Promise.resolve('Success').then((value) => console.log(value)); // Outputs: Success
  ```

### 2. `Promise.reject(reason)`

- **Purpose**: Creates a promise that is rejected with the given reason.
- **Usage**: Useful for returning a promise from a function that fails immediately or for converting an error into a promise.
- **Example**:
  ```javascript
  Promise.reject(new Error('Failure')).catch((error) => console.log(error.message)); // Outputs: Failure
  ```

### 3. `Promise.all(iterable)`

- **Purpose**: Takes an iterable of promises and returns a single promise that resolves when all of the promises in the iterable have resolved, or rejects if any of the promises reject.
- **Usage**: Useful when you need to wait for multiple promises to complete successfully before proceeding.
- **Example**:
  ```javascript
  Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    .then((values) => console.log(values)); // Outputs: [1, 2, 3]
  ```

### 4. `Promise.allSettled(iterable)`

- **Purpose**: Takes an iterable of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected. The resulting promise resolves with an array of objects describing the outcome of each promise.
- **Usage**: Useful when you want to know the outcome of all promises, regardless of whether they succeeded or failed.
- **Example**:
  ```javascript
  Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(new Error('Failed')),
    Promise.resolve(3)
  ]).then((results) => {
    console.log(results);
    // Outputs:
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'rejected', reason: Error('Failed') },
    //   { status: 'fulfilled', value: 3 }
    // ]
  });
  ```

### 5. `Promise.any(iterable)`

- **Purpose**: Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all of them are rejected), then it returns a promise that rejects with an AggregateError.
- **Usage**: Useful when you need only one promise to succeed, and you don’t care which one.
- **Example**:
  ```javascript
  Promise.any([
    Promise.reject(new Error('Fail')),
    Promise.reject(new Error('Fail again')),
    Promise.resolve('Success')
  ]).then((value) => console.log(value)); // Outputs: Success
  ```

### 6. `Promise.race(iterable)`

- **Purpose**: Takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects. The returned promise adopts the state (fulfilled or rejected) of the first promise to settle.
- **Usage**: Useful when you need to react to the first promise that settles, regardless of whether it resolves or rejects.
- **Example**:
  ```javascript
  Promise.race([
    new Promise((resolve) => setTimeout(resolve, 100, 'Fast')),
    new Promise((resolve) => setTimeout(resolve, 200, 'Slow'))
  ]).then((value) => console.log(value)); // Outputs: Fast
  ```

### 7. `Promise.finally(onFinally)`

- **Purpose**: Adds a callback that is executed regardless of the promise's final state (fulfilled or rejected). The `onFinally` handler is called when the promise is settled, but it does not modify the result of the promise.
- **Usage**: Useful for performing cleanup actions or executing code that should run no matter whether the promise was resolved or rejected.
- **Example**:
  ```javascript
  Promise.resolve('Done')
    .finally(() => console.log('Cleanup'))
    .then((value) => console.log(value)); // Outputs: Cleanup \n Done
  ```

### Summary

- **`Promise.resolve(value)`**: Creates a resolved promise with a value.
- **`Promise.reject(reason)`**: Creates a rejected promise with a reason.
- **`Promise.all(iterable)`**: Waits for all promises to fulfill or any to reject.
- **`Promise.allSettled(iterable)`**: Waits for all promises to settle and reports their results.
- **`Promise.any(iterable)`**: Resolves with the first fulfilled promise or rejects if none fulfill.
- **`Promise.race(iterable)`**: Resolves or rejects as soon as the first promise in the iterable settles.
- **`Promise.finally(onFinally)`**: Adds a callback that runs regardless of the promise’s outcome.

These methods help in managing and coordinating multiple asynchronous operations in JavaScript.
