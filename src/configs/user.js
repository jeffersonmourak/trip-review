import firebase from '@configs/firebase';

const database = firebase.database();

async function getUserTrips(uid) {
  const ref =  database.ref(`users/${uid}/trips`),
        snapshot = await ref.once('value');

  return snapshot.val() || [];
}

async function updateTrips(uid, trips) {
  const ref = database.ref(`users/${uid}/trips`)

  await ref.set(trips);
}

export {
  getUserTrips,
  updateTrips
}