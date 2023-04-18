import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';


const Registration = () => {

    <GlobalStyle />
    const styleCal = {
        color: "#f8dc5d"
    }

    const createBooking = async (e) => {
        e.preventDefault();
        if (date === '' || origin === '' || destination === '' || availableSeats === '') {
            alert("Please Enter all the values");
            return;
        }
        await addDoc(collection(db, 'bookings'), {
            origin: origin,
            destination: destination,
            date: date,
            seats: availableSeats,
        })
        setorigin('');
        setdestination('');
        setdate('');
        setAvailableSeats('');
    }

    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [date, setdate] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');

    function clearInputs() {
        document.getElementById('origin').value = '';
        document.getElementById('destination').value = '';
        document.getElementById('date').value = '';
        document.getElementById('seats').value = '';
    }

    return (
        <>
            <div className="regs_container">
                <form action="" className="forming" onSubmit={createBooking}>
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter trip details:</h1>
                    <div className="input-fields" >
                        <input type='text' placeholder="Leaving from..." style={styleCal} id="origin" value={origin} onChange={(e) => { setorigin(e.target.value) }} />
                    </div>
                    <div className="input-fields">
                        <label htmlfor="username"></label>
                        <input type='text' placeholder="Going to..." style={styleCal} id="destination" value={destination} onChange={(e) => { setdestination(e.target.value) }} />
                    </div>
                    <div className="input-fieldsi">
                        <input type='date' className="inputing" style={styleCal} id="date" value={date} onChange={(e) => { setdate(e.target.value) }} />
                        <label htmlfor="username"></label>
                        <input type='number' className="inputing" placeholder="Passenger..." style={{ color: "#f8dc5d" }} id="seats" value={availableSeats} onChange={(e) => { setAvailableSeats(e.target.value) }} />
                    </div>

                    <button type="submit" className="btn" onClick={clearInputs} >
                        Search
                    </button>

                </form>
            </div >
        </>
    )
}
export default Registration;
