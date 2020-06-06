import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyDAGjXY14_V1VxmiwA5sexlZM88ua5s2tg',
    authDomain: 'devcloud-fcf04.firebaseapp.com',
    databaseURL: 'https://devcloud-fcf04.firebaseio.com',
    projectId: 'devcloud-fcf04',
    storageBucket: 'devcloud-fcf04.appspot.com',
    messagingSenderId: '651122794000',
    appId: '1:651122794000:web:749375899f7d99b0b4b495',
    measurementId: 'G-28YS2B38KK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
firebase.analytics();

export default firebase;
