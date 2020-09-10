import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5Z8oIECm4XUlV5Fgpd7yGchqrwKWDU7I",
    authDomain: "c-efda4.firebaseapp.com",
    databaseURL: "https://c-efda4.firebaseio.com",
    projectId: "c-efda4",
    storageBucket: "c-efda4.appspot.com",
    messagingSenderId: "714100952352",
    appId: "1:714100952352:web:43bad8de7001fe2741db45",
    measurementId: "G-BDYFMV7REJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };