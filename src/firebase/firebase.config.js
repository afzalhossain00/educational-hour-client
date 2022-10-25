// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJzsfKb_2issO8Y310QPfWCUdLDUPwJoA",
    authDomain: "educational-hour.firebaseapp.com",
    projectId: "educational-hour",
    storageBucket: "educational-hour.appspot.com",
    messagingSenderId: "88259750009",
    appId: "1:88259750009:web:6743106637e6151beecca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;