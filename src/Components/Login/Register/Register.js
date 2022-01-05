import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography, Button, Box, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [fieldData, setFieldData] = useState({});
    const { registerUser, isLoading, error, user } = UseAuth();

    const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newFieldData = { ...fieldData };
        newFieldData[field] = value;
        setFieldData(newFieldData)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (fieldData.password !== fieldData.password2) {
            alert('dont match')
            return
        }

        registerUser(fieldData.email, fieldData.password, fieldData.name, history);

    }

    return (
        <Container>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ textAlign: 'center' }} item xs={12} md={6}>
                        <Typography style={{ marginTop: '150px' }} variant="body1" gutterBottom>
                            Login
                        </Typography>
                        {!isLoading && <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleLogin}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                onBlur={handleLogin}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                onBlur={handleLogin}
                                type='password'
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Re-Type Password"
                                name="password2"
                                onBlur={handleLogin}
                                type='password'
                                variant="standard" />

                            <Button type='submit' sx={{ width: '75%', m: 1 }} variant='contained'>Register</Button>

                            <Typography style={{ marginTop: '5px' }} variant="body2" gutterBottom>
                                Allready Registered? <Link to='/login'>Please Login</Link>
                            </Typography>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user.email && <Alert severity="success">Successfully User Created</Alert>}
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

export default Register;