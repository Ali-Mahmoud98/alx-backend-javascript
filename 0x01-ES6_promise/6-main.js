import handleProfileSignup from './6-final-user';

/**
 * The handleProfileSignup function returns a promise that remains in the pending
 * state until all promises passed to Promise.allSettled are either fulfilled or
 * rejected. This means that right after you call handleProfileSignup, it will return
 * Promise { <pending> } because the promises it waits for have not yet settled
 * (either resolved or rejected).
 */
console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
// expected output: Promise { <pending> }

let func = async () => {
  const result = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(result);
  // expected output:
  //[ 
  //  { 
  //    status: 'fulfilled',
  //    value: { firstName: 'Bob', lastName: 'Dylan' }
  //  },
  //  { 
  //    status: 'rejected',
  //    value: new Error('photo.jpg cannot be processed')
  //      ...
  //  }
  //]
};

func();
