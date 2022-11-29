import React from 'react'
import {TextField,  Button, Box, Link, Typography} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { changeEmail, changePassword, logIn } from '../redux/authSlice'
import {Link as RouterLink} from "react-router-dom"

export default function SignIn() {
    
    const email = useSelector(state => state.auth.email)
    const password = useSelector(state => state.auth.password)
    const isLoading = useSelector(state => state.auth.isLoading)
    console.log(email,password)
    const dispatch = useDispatch();
    
    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }
    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn({email,password}));
    }
  return (
    
   
    
    <form onSubmit={handleSubmit}>
        
    <Typography variant="h5" sx={{ textAlign: "center"}}>Sign In</Typography>
    
    <TextField fullWidth margin='normal' label='Email adress' required autoComplete='email' value={email} onChange={handleEmailChange} autoFocus/>
    <TextField fullWidth margin='normal' label='password' required value={password} onChange={handlePasswordChange} type="password"/>
    <Button type="submit" variant="contained" fullWidth sx={{ mt:2}}>
        {isLoading ? "Loading..." : "Sign In"}
    </Button>
    <Box sx={{display:"flex", justifyContent:"space-between",alignItems: "center",mt: 4}}>
        <Link component={RouterLink} to="../forgot-password">Forgot Password?</Link>
        <Link component={RouterLink} to="../sign-up">Dont have an account? Sign up</Link>
    </Box>
   
    </form>
    
  )
}
