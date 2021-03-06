import { Container, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            price: 20,
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            price: 15,
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price: 17,
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            price: 19,
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price: 25,
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: 35,
            space: 10,
        },
    ]


    return (
        <Container>
            <Typography sx={{ color: 'info.main', textAlign: 'center', py: 3 }} variant="h4">
                Available Appointment on {date.toDateString()}
            </Typography>
            {
                bookingSuccess && <Alert severity="success">Successfully Booking</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map((booking) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Booking
                                date={date}
                                key={booking.id}
                                booking={booking}
                                setBookingSuccess={setBookingSuccess}
                            ></Booking>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;