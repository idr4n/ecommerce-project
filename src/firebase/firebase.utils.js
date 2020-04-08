import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD87KXyycXSGyXe-URFYYQM5If1zgZFbjk',
  authDomain: 'e-commerce-db-4c569.firebaseapp.com',
  databaseURL: 'https://e-commerce-db-4c569.firebaseio.com',
  projectId: 'e-commerce-db-4c569',
  storageBucket: 'e-commerce-db-4c569.appspot.com',
  messagingSenderId: '771822807493',
  appId: '1:771822807493:web:fcae6037630604117d03ac',
  measurementId: 'G-H8RWPWMGTG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
