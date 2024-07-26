export default function appendToEachArrayValue(array, appendString) {
  const retArr = [];
  for (const index of array) {
    retArr.push(`${appendString}${index}`);
  }

  return retArr;
}
