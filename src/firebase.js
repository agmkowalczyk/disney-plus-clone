import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAw6dtIGuMgvPlpVgykyxWcaqoZDikrW-E",
  authDomain: "disney-plus-24a7d.firebaseapp.com",
  projectId: "disney-plus-24a7d",
  storageBucket: "disney-plus-24a7d.appspot.com",
  messagingSenderId: "658918080236",
  appId: "1:658918080236:web:c96d46cb0dd97c1bdb2fc9",
  measurementId: "G-W5GLH1WQ4H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
