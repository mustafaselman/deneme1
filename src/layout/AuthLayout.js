import { Avatar, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"


export default function AuthLayout() {
    const isLoggedIn = useIsLoggedIn();
    const error = useSelector(state => state.auth.error )

    if(isLoggedIn === null) return <h1>Loading...</h1>;
    else if (isLoggedIn === true) return <Navigate replace to="/"/>;
    return (
        <Container maxWidth="xs" sx={{mt:4}}>
            <Avatar sx={{mx: "auto", bgcolor: "secondary.main"}}>
            <LockOutlinedIcon/>
        </Avatar>
        {error && (<Typography sx={{textAlign:"center",color:"error.main"}}>{error}</Typography>)}
           <Outlet/> 
        </Container>
        
    )
}