import React from 'react'
import {TextField,  Button, Box, Link, Typography} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { changeEmail, changeName, changePassword, register } from '../redux/authSlice'
import {Link as RouterLink} from "react-router-dom"
export default function SignUp() {
    const name = useSelector(state => state.auth.name)
    const email = useSelector(state => state.auth.email)
    const password = useSelector(state => state.auth.password)
    
    const isLoading = useSelector(state => state.auth.isLoading)
    console.log(name,email,password)
    const dispatch = useDispatch();
    const handleNameChange = (e) => {
        dispatch(changeName(e.currentTarget.value))
    }
    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }
    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({name,email,password}));
    }
  return (
    <form onSubmit={handleSubmit}>
        
    <Typography variant="h5" sx={{ textAlign: "center"}}>Sign Up</Typography>
    
    <TextField fullWidth margin="normal" label="Full Name" required autoComplete="name" autoFocus value={name} onChange={handleNameChange}/>
    <TextField fullWidth margin='normal' label='Email adress' required autoComplete={email} value={email} onChange={handleEmailChange}/>
    <TextField fullWidth margin='normal' label='password' required type="password" value={password} onChange={handlePasswordChange}/>
    <Button type="submit" variant="contained" fullWidth sx={{ mt:2}}>
        {isLoading ? "Loading..." : "Sign Up"}
    </Button>
    <Box sx={{display:"flex", justifyContent:"flex-end",alignItems: "center",mt: 4}}>
        
        <Link component={RouterLink} to="../sign-in">Already have an account? Sign ın</Link>
    </Box>
   
    </form>
  )
}
