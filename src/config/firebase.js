
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, updateCurrentUser, getAuth, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCH4-DkbJklQx0o4ab9TwuIIgFHFtpRQHo",
  authDomain: "deneme1-65bf5.firebaseapp.com",
  projectId: "deneme1-65bf5",
  storageBucket: "deneme1-65bf5.appspot.com",
  messagingSenderId: "352606502480",
  appId: "1:352606502480:web:a90096453a740ab0241b55"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const signUp = async (name,email,password) => {
await createUserWithEmailAndPassword(auth, email, password);
await updateCurrentUser(auth, {displayName:name})
};

export const signIn = async (email,password) => {
    await signInWithEmailAndPassword(auth, email, password)
}