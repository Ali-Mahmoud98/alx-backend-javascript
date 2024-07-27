import { uploadPhoto, createUser } from './utils';

/**
 * asyncUploadUser - Uploads a photo and creates a user simultaneously.
 * Uses Promise.all to wait for both operations to complete.
 * Returns the results of both operations if successful, or null values if
 * any operation fails.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing:
 *   - {Object} photo - The result of the uploadPhoto operation. If the operation
 *      fails, this is null.
 *   - {Object} user - The result of the createUser operation. If the operation
 *      fails, this is null.
 */
export default async function asyncUploadUser() {
  try {
    // Wait for both uploadPhoto and createUser to complete
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    // Return the results if both operations are successful
    return { photo, user };
  } catch (e) {
    // Return null values if any operation fails
    return { photo: null, user: null };
  }
}
