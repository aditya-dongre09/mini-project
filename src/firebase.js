import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAbAmhl2UGFj_Bk6pjBkMYAUcfu9pbAHMI',
    authDomain: 'mini-bazaar-e41f0.firebaseapp.cm' ,
    databaseURL: 'https://mini-bazaar-e41f0.firebaseio.com',
    projectId: 'mini-bazaar-e41f0',
    storageBucket: 'mini-bazaar-e41f0.appspot.com',
    messagingSenderId: '210149116755' ,
    appId: '1:210149116755:web:58a79ad0f9500e77aaafa6',
    measurementId: 'G-9X2SD5J15C'
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectFirestore,projectStorage};
export const auth = app.auth();
export default app;

