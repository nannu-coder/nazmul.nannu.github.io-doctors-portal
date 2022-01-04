import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerbg = {
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Box style={bannerbg} sx={{ width: '100%' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid style={{ ...verticalCenter }} item xs={6}>
                        <Box>
                            <Typography style={{ margin: '10px 0' }} variant='h3'>
                                Your New Smile <br />
                                Starts Here
                            </Typography>

                            <Typography sx={{ my: 3, fontWeight: 400, color: 'gray' }} variant='h6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea sed amet minus, quia aliquam facilis minima voluptatem? Temporibus, id.
                            </Typography>
                            <Button variant="contained">Get Appoinment</Button>
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={6} style={verticalCenter}>
                        <img style={{ width: '450px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;