export default function handleResponseFromAPI(promise) {
  return promise
    // .then called when promise resolves
    .then(() => ({ status: 200, body: 'success' }))
    // .catch called when promise rejects
    .catch(() => new Error())
    // .finally called when promise resolves or rejects
    .finally(() => console.log('Got a response from the API'));
}
