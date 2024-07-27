import handleResponseFromAPI from './2-then';

describe('handleResponseFromAPI', () => {
  // Mock console.log
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return {status: 200, body: "success"} when promise resolves', async () => {
    const mockPromise = Promise.resolve();
    const result = await handleResponseFromAPI(mockPromise);

    expect(result).toEqual({status: 200, body: 'success'});
    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });

  test('should return an Error when promise rejects', async () => {
    const mockPromise = Promise.reject();
    const result = await handleResponseFromAPI(mockPromise);

    expect(result).toBeInstanceOf(Error);
    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});
