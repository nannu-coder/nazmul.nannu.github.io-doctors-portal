import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography, Button, Box, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const [fieldData, setFieldData] = useState({});
    const { loginUser, isLoading, error, user, googleSignIn } = UseAuth();

    const location = useLocation();
    const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newFieldData = { ...fieldData };
        newFieldData[field] = value;
        console.log(newFieldData)
        setFieldData(newFieldData)
    }

    const handleSubmit = e => {
        e.preventDefault();
        loginUser(fieldData.email, fieldData.password, location, history)
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }

    return (
        <Container>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ textAlign: 'center' }} item xs={12} md={6}>
                        <Typography style={{ marginTop: '150px' }} variant="body1" gutterBottom>
                            Login
                        </Typography>
                        {isLoading ? <CircularProgress /> : <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                onChange={handleLogin}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onChange={handleLogin}
                                type='password'
                                variant="standard" />
                            <Button type='submit' sx={{ width: '75%', m: 1 }} variant='contained'>Login</Button>

                            <Typography style={{ marginTop: '5px' }} variant="body2" gutterBottom>
                                Don't Have an Account? <Link to='/register'>Please Register</Link>
                            </Typography>
                        </form>}
                        <p>--------------------XXX--------------------</p>
                        <Button onClick={handleGoogleSignIn} sx={{ width: '75%', m: 1 }} variant='contained'>Google SignUp</Button>
                        {user.email && <Alert severity="success">Successfully login</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;