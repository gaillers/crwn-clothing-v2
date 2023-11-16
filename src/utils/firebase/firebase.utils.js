import { initializeApp } from "firebase/app";

// Google Sign in
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Database Firebase Authentication
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHj2_CypieFzkFggip0KORSLUZ3Aw-g-w",
  authDomain: "gold-blueprint-296319.firebaseapp.com",
  projectId: "gold-blueprint-296319",
  storageBucket: "gold-blueprint-296319.appspot.com",
  messagingSenderId: "578978565420",
  appId: "1:578978565420:web:8a3a1464c44ec0c9b5b089",
  measurementId: "G-JZJ496ED3G",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// Create user firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};