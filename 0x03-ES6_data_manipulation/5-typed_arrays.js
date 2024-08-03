// export default function createInt8TypedArray(length, position, value) {
//   if (position >= length) {
//     throw new Error('Position outside range');
//   }
//   const xint8Array = new Int8Array(length);
//   xint8Array.fill(value, position, position + 1);
//   return new DataView(xint8Array.buffer);
// }
function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Step 2: Create a DataView for the buffer
  const view = new DataView(buffer);

  // Step 3: Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Step 4: Set the Int8 value at the specified position
  view.setInt8(position, value);
  // Return the DataView
  return view;
}

export default createInt8TypedArray;
