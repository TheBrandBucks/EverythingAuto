// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyB3w7MXqX2VANl-w5PHEahicAgU3_p5Mdk",
  authDomain: "tabyeen--login.firebaseapp.com",
  projectId: "tabyeen--login",
  storageBucket: "tabyeen--login.firebasestorage.app",
  messagingSenderId: "191330927747",
  appId: "1:191330927747:web:f91f363ab2dfdbc72207b6",
  measurementId: "G-6YJ81VZHJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider =new GoogleAuthProvider()
export {auth, provider};
// const analytics = getAnalytics(app);