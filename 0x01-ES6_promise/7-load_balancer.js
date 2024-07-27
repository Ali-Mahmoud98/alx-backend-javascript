/**
 * loadBalancer - Returns the result of the fastest settled download promise.
 * Uses Promise.race to determine which of the given promises resolves first.
 *
 * @param {Promise} chinaDownload - A promise representing the download from China.
 * @param {Promise} USDownload - A promise representing the download from the US.
 * @returns {Promise} - A promise that resolves or rejects with the result of the
 * first settled promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race() returns the first settled promise
  // Promise.race to determine which of the given promises resolves first.
  return Promise.race([chinaDownload, USDownload]);
}
