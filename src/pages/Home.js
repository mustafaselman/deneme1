import React from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../config/firebase';
import { logOut } from '../redux/authSlice';

function Home() {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut(auth));
    }
  return (

    <div>
       <h1>Home</h1>
    <button onClick={handleLogOut} >Sign Out</button>
    </div>
    
  )
}

export default Home