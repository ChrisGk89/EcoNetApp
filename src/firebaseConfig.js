// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0XtP2xOaO0eCT4jzuezXrLgWZbCpxwKw",
    authDomain: "econet-56c9c.firebaseapp.com",
    projectId: "econet-56c9c",
    storageBucket: "econet-56c9c.appspot.com",
    messagingSenderId: "626422241981",
    appId: "1:626422241981:web:02bad584107522d1fbb5d4",
    measurementId: "G-TNX66JNBGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, appleProvider };
