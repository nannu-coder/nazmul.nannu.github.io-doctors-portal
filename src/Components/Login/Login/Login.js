import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, TextField, Typography, Button, Box } from '@mui/material';
import login from '../../../images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const [fieldData, setFieldData] = useState({});

    const handleLogin = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newFieldData = { ...fieldData };
        newFieldData[field] = value;
        console.log(newFieldData)
        setFieldData(newFieldData)
    }

    return (
        <Container>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ textAlign: 'center' }} item xs={12} md={6}>
                        <Typography style={{ marginTop: '150px' }} variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <form>
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
                            <Button sx={{ width: '75%', m: 1 }} variant='contained'>Login</Button>

                            <Typography style={{ marginTop: '5px' }} variant="body2" gutterBottom>
                                Don't Have an Account? <Link to='/register'>Please Register</Link>
                            </Typography>
                        </form>
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