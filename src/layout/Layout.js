import { AppBar, Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser, useIsLoggedIn } from "../config/hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react";
import { Box } from "@mui/system";

export default function Layout() {
    const isLoggedIn = useIsLoggedIn();
    const currentUser = useCurrentUser();

    const [anchorEl,setAnchorEl] = useState(null);

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
                    <MenuItem onClick={() => {setAnchorEl(null)}}>Profile</MenuItem>
                    <MenuItem onClick={() => {setAnchorEl(null)}}>Sign Out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        <Dialog open={true}>
            <DialogTitle>Profile</DialogTitle>
            <DialogContent dividers>
                <Box display="flex" alignItems="center">
                <Avatar/>
                <Box ml={3}>
                <Typography>{currentUser.displayName}</Typography>
                <Typography>{currentUser.email}</Typography>
                </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button>Cancel</Button>
            </DialogActions>
        </Dialog>
        <Outlet/>
        </>
            
    )
}