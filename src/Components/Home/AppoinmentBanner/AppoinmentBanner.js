import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appoinmentBg = {
    background: `url(${bg})`,
    marginTop: 150,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,.7)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ width: '100%' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                    <Grid item xs={6} md={5}>
                        <img
                            style={{ width: '500px', marginTop: '-115px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={6} md={7} sx={{
                        color: 'text.primary',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant='h5' style={{ color: 'white' }}>
                                Appoinment
                            </Typography>

                            <Typography variant='h5' style={{ color: 'white' }}>
                                Make an Appoinment Today
                            </Typography>

                            <Typography variant='h6' sx={{ fontWeight: 400 }} style={{ color: 'white', margin: '10px 0' }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quas dignissimos labore explicabo suscipit inventore beatae fugit at repellendus veniam!
                            </Typography>

                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppoinmentBanner;