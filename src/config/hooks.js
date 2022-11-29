import {useEffect, useState} from "react"
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { setUseProxies } from "immer";

export const useIsLoggedIn = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(null);
   
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=> {
            console.log(user)
            setIsLoggedIn(!!user)
        });
    },[]);

    return isLoggedIn;
}

export const useCurrentUser = () => {
    const [user,setUser] = useState(null);

    useEffect(()=> {
        return onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    },[]);
    return user;
}