Export a `const` instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:
  ```
  {
    protocol: 'http',
    name: 'getUsers',
  }
  ```
Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.
```
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
```
