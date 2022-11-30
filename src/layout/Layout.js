import { AppBar, Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser, useIsLoggedIn } from "../config/hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react";
import { Box } from "@mui/system";
import { logOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";

export default function Layout() {
    const isLoggedIn = useIsLoggedIn();
    const currentUser = useCurrentUser();
    const dispatch = useDispatch();

    const [anchorEl,setAnchorEl] = useState(null);
    const [profileDialogOpen,setProfileDialogOpen] = useState(false);
    const [confirmSignOutDialogOpen,setConfirmSignOutDialogOpen] = useState(false);

    if(isLoggedIn === null) return <h1>Loading...</h1>;
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in"/>;
    return (
        <>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>Home</Typography>
                <IconButton size="large" onClick={(e)=>setAnchorEl(e.currentTarget)}color="inherit">
                    <AccountCircleIcon/>
                </IconButton>
                <Menu open={Boolean(anchorEl)} onClose={() => {setAnchorEl(null)}} anchorEl={anchorEl}>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        setProfileDialogOpen(true);
                    }}>Profile</MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        setConfirmSignOutDialogOpen(true);
                        }}>Sign Out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        <Dialog open={profileDialogOpen} onClose={() => {
            setProfileDialogOpen(false);
            
            }}> 
            <DialogTitle>Profile</DialogTitle>
            <DialogContent dividers>
                <Box display="flex" alignItems="center">
                <Avatar/>
                <Box ml={3}>
                <Typography>{currentUser?.displayName}</Typography>
                <Typography>{currentUser?.email}</Typography>
                </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> {
                    setProfileDialogOpen(false)
                }}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <Dialog open={confirmSignOutDialogOpen} onClose={()=>{
            setConfirmSignOutDialogOpen(false);
        }}>
            <DialogContent>
                <DialogContentText>Sign out from {currentUser?.email}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setConfirmSignOutDialogOpen(false);
                    dispatch(logOut());
                    }}>Sign Out</Button>
                <Button onClick={()=>{setConfirmSignOutDialogOpen(false)}}>Cancel</Button>
            </DialogActions>
        </Dialog>
        <Outlet/>
        </>
            
    )
}