export default function hasValuesFromArray(xSet, xArray) {
  // `.every` is a method of array that returns true if every
  // element in the array satisfies the condition
  return xArray.every((ele) => xSet.has(ele));
}
