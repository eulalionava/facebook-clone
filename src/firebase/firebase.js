// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAQzN55mhiwTLOFaqRFDlr1tvboaSrtOm8",
    authDomain: "facebook-clone-3f70f.firebaseapp.com",
    projectId: "facebook-clone-3f70f",
    storageBucket: "facebook-clone-3f70f.appspot.com",
    messagingSenderId: "212336459581",
    appId: "1:212336459581:web:c35d4adbef0de71945cf54",
    measurementId: "G-RW7LBV6GGV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();