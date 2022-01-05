import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import UseAuth from '../../../Hooks/UseAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = UseAuth();
    const initialInfo = { name: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleBooking = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookInfo = { ...bookingInfo }
        newBookInfo[field] = value;
        setBookingInfo(newBookInfo)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const appointment = { ...bookingInfo, time, serviceName: name, date: date.toLocaleDateString() }

        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleClose()
                }
            })
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                name="name"
                                onBlur={handleBooking}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleBooking}
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleBooking}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' variant='contained'>Submit</Button>
                        </form>
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;