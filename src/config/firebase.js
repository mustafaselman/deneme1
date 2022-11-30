
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, updateCurrentUser, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, collection,onSnapshot, deleteDoc, doc, addDoc} from "firebase/firestore"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productsSlice";
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
export const db = getFirestore(app)

export const productsRef = collection(db, "products");

export const useProductsListener = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    return onSnapshot(productsRef, (snapshot) => {
      
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {id:doc.id, ...data, createdAt: data.createdAt?.toDate() };
      });
      dispatch(setProducts(docs))
    });
  },[dispatch]);

}

export const deleteProduct = (id) => {
  deleteDoc(doc(db, "products", id))
}

export const addProduct = () => {
  const uid = auth.currentUser?.uid
  addDoc(productsRef, {
    name: "ıphone",
    description: "Lorem ıpsum",
    price: 2022,
    uid,
  } )
}