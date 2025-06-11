// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔁 substitua pelos dados do seu Firebase Project
const firebaseConfig = {
  apiKey: "AIzaSyDRXZ3Dngsw7EvXQW4UQqJ5_9qGRtWoXko",
  authDomain: "cade-35d71.firebaseapp.com",
  projectId: "cade-35d71",
  storageBucket: "cade-35d71.appspot.com",
  messagingSenderId: "1083200852732",
  appId: "1:1083200852732:web:188b06e61b31dd357d7d79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
