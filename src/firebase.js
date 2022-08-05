import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCO3QWLiPMJyrZqZLi66vsRsvVVgcGvyQg",
    authDomain: "donationbay-e73e3.firebaseapp.com",
    projectId: "donationbay-e73e3",
    storageBucket: "donationbay-e73e3.appspot.com",
    messagingSenderId: "782503376003",
    appId: "1:782503376003:web:f7466ee2269ae9864997b6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { initializeApp, db  };