import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup - Handles the profile signup by attempting to sign up
 * a user and upload a photo.
 * Uses Promise.allSettled to wait for both operations to complete, regardless
 * of their outcome.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} filename - The filename of the photo to upload.
 * @returns {Promise<Array>} - A promise that resolves to an array of result objects,
 * each containing:
 *   - {string} status - The status of the promise ('fulfilled' or 'rejected').
 *   - {*} value - The value if the promise was fulfilled, or the reason if it
 *    was rejected.
 */
export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    // .allSettled returns an array of result objects
    .then((res) => (
      res.map(({ status, value, reason }) => ({
        status,
        value: status === 'fulfilled' ? value : reason.toString(),
      }))));
}
