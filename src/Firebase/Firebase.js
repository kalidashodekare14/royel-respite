// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMS7DGVFUbG7gMqZs2wqmqVJp1L7SSfI",
  authDomain: "royal-respite.firebaseapp.com",
  projectId: "royal-respite",
  storageBucket: "royal-respite.appspot.com",
  messagingSenderId: "975744316821",
  appId: "1:975744316821:web:d85e64472873d1e542b29c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth