# 0x03. ES6 data manipulation

## Resources

* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
* [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## 0. Basic list of objects
* Create a function named `getListStudents` that returns an array of objects.
* Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
* The array contains the following students in order:
    * `Guillaume`, id: `1`, in `San Francisco`
    * `James`, id: `2`, in `Columbia`
    * `Serena`, id: `5`, in `San Francisco`
```
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```
## 1. More mapping
* Create a function `getListStudentIds` that returns an array of ids from a list of object.
This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.
* If the argument is not an array, the function is returning an empty array.
* You must use the `map` function on the array.

```
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 
```

## 2. Filter
* Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
* It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.
* You must use the `filter` function on the array.
```
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```

## 3. Reduce
* Create a function `getStudentIdsSum` that returns the sum of all the student ids.
* It should accept a list of students (from `getListStudents`) as a parameter.
* You must use the `reduce` function on the array.
```
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$ 
```


