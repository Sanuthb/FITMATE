import {initializeApp} from 'firebase/app';
import {getAuth}from 'firebase/auth';      
import {getFirestore}from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBk6azqQ1JG6w3m9qRrb5z5PtbitvM8MMU",
    authDomain: "fitmate-52329.firebaseapp.com",
    projectId: "fitmate-52329",
    storageBucket: "fitmate-52329.appspot.com",
    messagingSenderId: "537574834911",
    appId: "1:537574834911:web:a6daeab9100a995afe1f6a",
    measurementId: "G-M2E3JCJ1QH"
}

const app = initializeApp(firebaseConfig);

const firebaseauth=getAuth(app);

const firestoredb=getFirestore(app);

export {app,firebaseauth,firestoredb} 