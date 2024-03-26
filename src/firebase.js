// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA37Izp58tp0MDdInd6rLLNe0ZREpIc93s",
  authDomain: "clone-7b3ee.firebaseapp.com",
  projectId: "clone-7b3ee",
  storageBucket: "clone-7b3ee.appspot.com",
  messagingSenderId: "454950799743",
  appId: "1:454950799743:web:94027e69abb83e781af24a",
  measurementId: "G-TTYQ67TGRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth()
export default app;