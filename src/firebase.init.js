// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu90wQ7-Q8QJRZMKTDgxaj0z9rh5Fxf4o",
    authDomain: "genius-car-services-2-a514c.firebaseapp.com",
    projectId: "genius-car-services-2-a514c",
    storageBucket: "genius-car-services-2-a514c.appspot.com",
    messagingSenderId: "608928523922",
    appId: "1:608928523922:web:9b941ad530a45f7629e84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;