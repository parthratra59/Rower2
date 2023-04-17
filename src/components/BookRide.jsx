import GlobalStyle from "../GlobalStyle";
import React, { useState, useEffect } from 'react';
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

const BookRide = () => {
    <GlobalStyle />
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    const styleCal = {
        color: "#f8dc5d"
    }

    //create Ride

    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [time, settime] = useState('');
    const [date, setdate] = useState('');
    const [cost, setcost] = useState('');
    const [seats, setseats] = useState('');
    const [published, setpublished] = useState('');

    const createRide = async (e) => {
        e.preventDefault(e)
        if (cost === '') {
            alert("Please Enter some Value");
            return;
        }
        await addDoc(collection(db, 'publishedRides'), {
            origin: origin,
            destination: destination,
            date: date,
            time: time,
            cost: cost,
            seats: seats,
        })
    }


    function click() {
        var origin = document.getElementById('origin').value;
        var destination = document.getElementById('destination').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var seats = document.getElementById('seats').value;
        var cost = document.getElementById('cost').value;
        if (origin === '' || destination === '' || date === '' || time === '' || seats === '' || cost === '') {
            alert("Enter all the fields");
        }

    }



    return (

        <div className="regs_container">
            <form action="" className="forming" onSubmit={createRide}>
                <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter Trip details:</h1>
                <div className="input-fields">
                    <input type='text' placeholder="Leaving From..." style={styleCal} id='origin' onChange={(e) => setorigin(e.target.value)} />
                </div>
                <div className="input-fields">
                    <input type='text' placeholder="Going to..." style={styleCal} id="destination" onChange={(e) => setdestination(e.target.value)} />
                </div>
                <div className="input-fieldsi">
                    {/* <label htmlfor="" className="subinput"></label> */}
                    <input type='date' className="inputing" style={styleCal} id="date" onChange={(e) => setdate(e.target.value)} />
                    <input type='time' className="inputing" style={styleCal} id="time" onChange={(e) => settime(e.target.value)} />

                </div>
                <div className="input-fieldsi">
                    {/* <label htmlfor="" className="subinput"></label> */}
                    <input type='number' className="inputing" placeholder="Seats Available" style={{ color: "#f8dc5d" }} id="seats" onChange={(e) => setseats(e.target.value)} />
                    <input type='number' className="inputing" placeholder="Cost Per Person" style={{ color: "#f8dc5d" }} id="cost" onChange={(e) => setcost(e.target.value)} />
                </div>
                <button type="submit" className="btn" onClick={click} >
                    Publish My Ride
                </button>

            </form>
        </div>

    )
}

export default BookRide


