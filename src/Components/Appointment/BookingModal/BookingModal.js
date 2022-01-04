import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

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

const BookingModal = ({ open, handleClose, booking, date }) => {
    const { name, time } = booking;

    const handleSubmit = e => {
        e.preventDefault();




        alert('success')
        handleClose()
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
                                defaultValue='Name'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue='Email'
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