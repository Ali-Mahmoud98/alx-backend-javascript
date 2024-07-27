import handleProfileSignup from './6-final-user';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

jest.mock('./4-user-promise');
jest.mock('./5-photo-reject');

describe('handleProfileSignup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should resolve both promises', async () => {
    signUpUser.mockResolvedValue({ firstName: 'John', lastName: 'Doe' });
    uploadPhoto.mockResolvedValue('profile-photo-url');

    const result = await handleProfileSignup('John', 'Doe', 'photo.jpg');

    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'John', lastName: 'Doe' } },
      { status: 'fulfilled', value: 'profile-photo-url' },
    ]);
  });

  test('should reject uploadPhoto and resolve signUpUser', async () => {
    signUpUser.mockResolvedValue({ firstName: 'John', lastName: 'Doe' });
    uploadPhoto.mockRejectedValue(new Error('photo.jpg cannot be processed'));

    const result = await handleProfileSignup('John', 'Doe', 'photo.jpg');

    expect(result).toEqual([
      { status: 'fulfilled', value: { firstName: 'John', lastName: 'Doe' } },
      { status: 'rejected', value: new Error('photo.jpg cannot be processed') },
    ]);
  });

  test('should reject signUpUser and resolve uploadPhoto', async () => {
    signUpUser.mockRejectedValue(new Error('Signup failed'));
    uploadPhoto.mockResolvedValue('profile-photo-url');

    const result = await handleProfileSignup('John', 'Doe', 'photo.jpg');

    expect(result).toEqual([
      { status: 'rejected', value: new Error('Signup failed') },
      { status: 'fulfilled', value: 'profile-photo-url' },
    ]);
  });

  test('should reject both promises', async () => {
    signUpUser.mockRejectedValue(new Error('Signup failed'));
    uploadPhoto.mockRejectedValue(new Error('photo.jpg cannot be processed'));

    const result = await handleProfileSignup('John', 'Doe', 'photo.jpg');

    expect(result).toEqual([
      { status: 'rejected', value: new Error('Signup failed') },
      { status: 'rejected', value: new Error('photo.jpg cannot be processed') },
    ]);
  });
});
