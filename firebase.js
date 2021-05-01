import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB9lt0afR4o9-cerQoaX6FAJFNZhvaKkMo",
  authDomain: "whatsapp-2-9eec3.firebaseapp.com",
  projectId: "whatsapp-2-9eec3",
  storageBucket: "whatsapp-2-9eec3.appspot.com",
  messagingSenderId: "534033248743",
  appId: "1:534033248743:web:b468a35d258592cd7bcd42"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };