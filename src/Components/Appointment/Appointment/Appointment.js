import React from 'react';
import AppoinmentHeader from '../AppointmentHeader/AppoinmentHeader';
import AvailableAppointment from '../AvailableAppoinment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;