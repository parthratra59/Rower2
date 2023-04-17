import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';


const Registration = () => {



    <GlobalStyle />
    // const styling = { color: '#f8dc5d', fontSize: "25px" }

    const createBooking = async (e) => {
        e.preventDefault(e)
        if (date === '') {
            alert("Please Enter some Value");
            return;
        }
        await addDoc(collection(db, 'bookings'), {
            origin: origin,
            destination: destination,
            date: date,
            seats: availableSeats,
        })
    }



    const styleCal = {
        color: "#f8dc5d"

    }

    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [date, setdate] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');


    function click() {
        var origin = document.getElementById('origin').value;
        var destination = document.getElementById('destination').value;
        var date = document.getElementById('date').value;
        var seats = document.getElementById('seats').value;
        if (origin === '' || destination === '' || date === '' || seats === '') {
            alert("Enter all the fields");
        }

    }



    return (
        <>

            <div className="regs_container">
                <form action="" className="forming" onSubmit={click}>
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter trip details:</h1>
                    <div className="input-fields" >

                        <input type='text' placeholder="Leaving from..." style={styleCal} id="origin" onChange={(e) => { setorigin(e.target.value) }} />
                    </div>
                    <div className="input-fields">
                        <label htmlfor="username"></label>
                        <input type='text' placeholder="Going to..." style={styleCal} id="destination" onChange={(e) => { setdestination(e.target.value) }} />
                    </div>
                    <div className="input-fieldsi">
                        {/* <label htmlfor="" className="subinput"></label> */}
                        <input type='date' className="inputing" style={styleCal} id="date" onChange={(e) => { setdate(e.target.value) }} />
                        <label htmlfor="username"></label>
                        <input type='number' className="inputing" placeholder="Passenger..." style={{ color: "#f8dc5d" }} id="seats" onChange={(e) => { setAvailableSeats(e.target.value) }} />

                    </div>

                    <button type="submit" className="btn" onClick={createBooking}>
                        Search
                    </button>

                </form>
            </div >
        </>
    )
}
export default Registration;
