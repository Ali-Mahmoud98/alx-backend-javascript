export default function cleanSet(xSet, xStartString) {
  if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele && ele.startsWith(xStartString))
    .map((ele) => ele.replace(xStartString, ''))
    .join('-');
}

// function cleanSet(xSet, xStartString) {
//   if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
//     return '';
//   }

//   const result = [];

//   for (const value of xSet) {
//     if (value.startsWith(xStartString) && value) {
//       result.push(value.slice(xStartString.length));
//     }
//   }

//   return result.join('-');
// }

// export default cleanSet;
