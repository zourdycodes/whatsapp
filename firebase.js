import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJJAGQuuP43K_bducgq97vGLv2NUHDjtM",
  authDomain: "whatsapp-frontend-88080.firebaseapp.com",
  projectId: "whatsapp-frontend-88080",
  storageBucket: "whatsapp-frontend-88080.appspot.com",
  messagingSenderId: "635747875849",
  appId: "1:635747875849:web:8739d92820fedc303f0cd8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
