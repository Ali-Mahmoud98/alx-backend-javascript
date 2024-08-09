export default function updateUniqItems(xMap) {
  if (!xMap || !(xMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  xMap.forEach((value, key) => {
    if (value === 1) {
      xMap.set(key, 100);
    }
  });
  return xMap;
}
