# 0x01. ES6 Promises

## Resources
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/articles/promises)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

Certainly! Let's explore these JavaScript concepts in a scientific manner, focusing on their definitions, principles, use cases, and how they interrelate.

## Promises

### Definition
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

#### Principles
1. **States**:
   - **Pending**: Initial state, neither fulfilled nor rejected.
   - **Fulfilled**: Operation completed successfully.
   - **Rejected**: Operation failed.

2. **Chaining**:
   - `then()`: Attaches callbacks for the fulfillment and rejection cases.
   - `catch()`: Attaches a callback for only the rejection case.
   - `finally()`: Executes a callback regardless of the promise's outcome.

#### Use Cases
- Handling asynchronous operations like network requests, file reading, etc.
- Simplifying complex asynchronous code.

#### Example
```javascript
let promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true; // Simulate success
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
});
```

### JavaScript Promise: An Introduction

#### Basic Concept
Promises allow handling asynchronous operations in a more manageable way compared to callbacks, preventing "callback hell."

#### Key Methods
- `Promise.resolve(value)`: Returns a promise that is resolved with the given value.
- `Promise.reject(reason)`: Returns a promise that is rejected with the given reason.
- `Promise.all(promises)`: Waits for all promises to be resolved or any to be rejected.
- `Promise.race(promises)`: Waits for the first promise to be resolved or rejected.

#### Example
```javascript
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```

### Async/Await

#### Definition
- **Async**: Declares an asynchronous function.
- **Await**: Pauses the execution of an async function, waiting for a promise to resolve.

#### Principles
1. **Async Functions**:
   - Always return a promise.
   - Can use `await` within them.

2. **Await Expression**:
   - Causes the function to wait for the promise.
   - Can only be used inside async functions.

#### Use Cases
- Simplifying the syntax of promises.
- Making asynchronous code look synchronous.

#### Example
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

### Throw / Try

#### Definition
- **Throw**: Throws a user-defined exception.
- **Try**: Allows you to define a block of code to be tested for errors.

#### Principles
1. **Try Block**:
   - Contains code that may throw an error.

2. **Catch Block**:
   - Contains code to handle the error.

3. **Finally Block**:
   - Contains code that will execute after try and catch, regardless of the outcome.

#### Use Cases
- Handling errors in synchronous and asynchronous code.
- Ensuring cleanup operations are performed.

#### Example
```javascript
function riskyOperation() {
  try {
    let result = performOperation(); // may throw an error
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    console.log('Operation complete.');
  }
}

riskyOperation();
```

### Interrelation of Concepts

- **Promises** form the foundation of modern asynchronous JavaScript.
- **Async/Await** is built on top of promises, providing a cleaner syntax.
- **Throw/Try** is used for error handling, both in synchronous code and within async functions when using `await`.

#### Example Combining All Concepts
```javascript
async function processData() {
  try {
    let data = await fetchData();
    let result = await processData(data);
    console.log(result);
  } catch (error) {
    console.error('Processing error:', error);
  } finally {
    console.log('Processing finished.');
  }
}

processData();
```

By understanding these concepts in depth, you'll be better equipped to write efficient and error-resistant asynchronous JavaScript code.

## **Promises Use Cases**
Promises are used in JavaScript to handle asynchronous operations, making it easier to work with code that involves delayed results, such as network requests, file I/O, and timers. Here are some common use cases for promises:

### 1. **Network Requests**
Handling HTTP requests to fetch data from APIs or submit data to servers.

#### Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 2. **File I/O**
Reading and writing files in a non-blocking manner, especially in environments like Node.js.

#### Example:
```javascript
const fs = require('fs').promises;

fs.readFile('path/to/file.txt', 'utf-8')
  .then(content => console.log(content))
  .catch(error => console.error('Error reading file:', error));
```

### 3. **Timers and Delays**
Performing actions after a certain delay using `setTimeout` wrapped in a promise.

#### Example:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('Executed after 1 second'));
```

### 4. **Animation and UX**
Animating elements or handling user interactions that depend on time-based events.

#### Example:
```javascript
function animate(element, duration) {
  return new Promise((resolve) => {
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'translateX(100px)';
    setTimeout(resolve, duration);
  });
}

animate(document.getElementById('box'), 1000).then(() => {
  console.log('Animation completed');
});
```

### 5. **Database Operations**
Executing database queries and ensuring the results are handled after the query completes.

#### Example:
```javascript
const db = require('database-module');

db.query('SELECT * FROM users')
  .then(results => console.log(results))
  .catch(error => console.error('Database error:', error));
```

### 6. **Event Handling**
Handling events in a sequence where one event's outcome depends on the completion of another.

#### Example:
```javascript
function waitForEvent(element, event) {
  return new Promise(resolve => element.addEventListener(event, resolve, { once: true }));
}

waitForEvent(document.getElementById('button'), 'click')
  .then(() => console.log('Button clicked'));
```

### 7. **Chaining Asynchronous Tasks**
Executing multiple asynchronous tasks in a specific order, where each task depends on the result of the previous one.

#### Example:
```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(user => fetch(`https://api.example.com/user/${user.id}/posts`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error));
```

### 8. **Parallel Execution**
Running multiple asynchronous tasks in parallel and handling their results together.

#### Example:
```javascript
const fetchUser = fetch('https://api.example.com/user').then(response => response.json());
const fetchPosts = fetch('https://api.example.com/posts').then(response => response.json());

Promise.all([fetchUser, fetchPosts])
  .then(([user, posts]) => {
    console.log('User:', user);
    console.log('Posts:', posts);
  })
  .catch(error => console.error('Error:', error));
```

### 9. **Error Handling**
Catching errors in asynchronous operations and handling them gracefully.

#### Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```

### 10. **Service Worker and Web Workers**
Handling tasks in background scripts, like caching resources or processing data, without blocking the main thread.

#### Example:
```javascript
navigator.serviceWorker.register('/service-worker.js').then(registration => {
  console.log('Service Worker registered:', registration);
}).catch(error => {
  console.error('Service Worker registration failed:', error);
});
```

These use cases demonstrate the versatility of promises in managing asynchronous operations, making code more readable and maintainable.

