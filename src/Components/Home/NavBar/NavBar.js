import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';


const NavBar = () => {
    const { user, logout } = UseAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} to='/home'>
                                Home
                            </NavLink>
                            <NavLink style={{ color: '#ffffff', textDecoration: 'none' }} to='/appointment'>
                                <Button color="inherit">Appointment</Button>
                            </NavLink>
                        </Typography>
                        {
                            user.email ?
                                <Box>
                                    <Link style={{ textDecoration: 'none' }} to='/dashboard'>
                                        <Button style={{ color: '#ffffff' }} color="inherit">DashBoard</Button>
                                    </Link>
                                    <Button onClick={logout} color="inherit">LogOut</Button>
                                </Box>
                                : <Link to='/login'>
                                    <Button color="inherit">Login</Button>
                                </Link>
                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavBar;