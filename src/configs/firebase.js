import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB7iFyskq8to40G2FP_J6EbsZfu8Z_-vwY",
  authDomain: "limbo-199316.firebaseapp.com",
  databaseURL: "https://limbo-199316.firebaseio.com",
  projectId: "limbo-199316",
  storageBucket: "limbo-199316.appspot.com",
  messagingSenderId: "483807082940"
}

firebase.initializeApp(config);

export default firebase;