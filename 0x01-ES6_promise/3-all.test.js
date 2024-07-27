import handleProfileSignup from './3-all';
import * as utils from './utils';

describe('handleProfileSignup', () => {
  // Mock console.log
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test('should log "photo-profile-1 Guillaume Salva" when both promises resolve', async () => {
    // Mock the implementations of uploadPhoto and createUser
    jest.spyOn(utils, 'uploadPhoto').mockResolvedValue({
      status: 200,
      body: 'photo-profile-1',
    });
    jest.spyOn(utils, 'createUser').mockResolvedValue({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });

    await handleProfileSignup();

    expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
  });

  test('should log "Signup system offline" when uploadPhoto rejects', async () => {
    // Mock uploadPhoto to reject
    jest.spyOn(utils, 'uploadPhoto').mockRejectedValue(new Error('Upload failed'));
    jest.spyOn(utils, 'createUser').mockResolvedValue({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });

    await handleProfileSignup();

    expect(console.log).toHaveBeenCalledWith('Signup system offline');
  });

  test('should log "Signup system offline" when createUser rejects', async () => {
    // Mock createUser to reject
    jest.spyOn(utils, 'uploadPhoto').mockResolvedValue({
      status: 200,
      body: 'photo-profile-1',
    });
    jest.spyOn(utils, 'createUser').mockRejectedValue(new Error('Create user failed'));

    await handleProfileSignup();

    expect(console.log).toHaveBeenCalledWith('Signup system offline');
  });
});
