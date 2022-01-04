import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Paper sx={{ textAlign: 'center', py: 3 }} elevation={3}>
                <Typography sx={{ fontWeight: 600, color: 'info.main' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABE
                </Typography>
                <Button onClick={handleOpen} variant="contained">BOOK APOINTMENT</Button>
            </Paper>
            <BookingModal
                date={date}
                booking={booking}
                open={open}
                handleClose={handleClose}
            ></BookingModal>
        </>
    );
};

export default Booking;