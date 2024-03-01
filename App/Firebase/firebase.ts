import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXZuD9UrfklXOF37imraWYApyXh9qI7go',
  authDomain: 'food-app-23d12.firebaseapp.com',
  projectId: 'food-app-23d12',
  storageBucket: 'food-app-23d12.appspot.com',
  messagingSenderId: '665136886336',
  appId: '1:665136886336:web:2cd26a11aa913deedc25a5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export default {db, storage};
