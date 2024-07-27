import loadBalancer from './7-load_balancer';

describe('loadBalancer', () => {
  test('should return result of the fastest promise', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUK = new Promise((resolve) => {
      setTimeout(resolve, 100, ukSuccess);
    });

    const promiseFR = new Promise((resolve) => {
      setTimeout(resolve, 200, frSuccess);
    });

    const result = await loadBalancer(promiseUK, promiseFR);
    expect(result).toBe(ukSuccess);
  });

  test('should return result of the fastest promise when one promise is slower', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';

    const promiseUKSlow = new Promise((resolve) => {
      setTimeout(resolve, 400, ukSuccess);
    });

    const promiseFR = new Promise((resolve) => {
      setTimeout(resolve, 200, frSuccess);
    });

    const result = await loadBalancer(promiseUKSlow, promiseFR);
    expect(result).toBe(frSuccess);
  });

  test('should handle rejected promises correctly', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const errorMsg = 'Error downloading from FR';

    const promiseUK = new Promise((resolve) => {
      setTimeout(resolve, 100, ukSuccess);
    });

    const promiseFR = new Promise((_, reject) => {
      setTimeout(reject, 200, new Error(errorMsg));
    });

    const result = await loadBalancer(promiseUK, promiseFR);
    expect(result).toBe(ukSuccess);
  });

  test('should reject when the fastest promise rejects', async () => {
    const ukSuccess = 'Downloading from UK is faster';
    const errorMsg = 'Error downloading from FR';

    const promiseUK = new Promise((_, reject) => {
      setTimeout(reject, 100, new Error(errorMsg));
    });

    const promiseFR = new Promise((resolve) => {
      setTimeout(resolve, 200, ukSuccess);
    });

    await expect(loadBalancer(promiseUK, promiseFR)).rejects.toThrow(errorMsg);
  });
});
