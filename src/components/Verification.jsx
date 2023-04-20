import GlobalStyle from "../GlobalStyle";
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { Autocomplete, useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { IconButton, Button, Text } from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useUserAuth } from "./authotication/context/UserAuthContext.js";

const BookRide = () => {
    <GlobalStyle />
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    const styleCal = {
        color: "#f8dc5d"
    }

    //create Ride
    const { user } = useUserAuth();
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
            email: user.email,
        })
        setorigin('');
        setdestination('');
        setdate('');
        settime('');
        setcost('');
        setseats('');

    }

    var remove = false;
    function click() {
        var origin = document.getElementById('origin').value = '';
        var destination = document.getElementById('destination').value = '';
        var date = document.getElementById('date').value = '';
        var time = document.getElementById('time').value = '';
        var seats = document.getElementById('seats').value = '';
        var cost = document.getElementById('cost').value = '';


    }



   

    



    return (

        <>
           
            <div className="regs_container">
                <form action="" className="forming" onSubmit={createRide}>
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter Trip details:</h1>
                    <div className="input-fields">
                        <Autocomplete>
                            <input type='text' placeholder="Leaving From..." style={styleCal}    />
                        </Autocomplete>
                    </div>
                    <div className="input-fields">
                        <Autocomplete>
                            <input type='text' placeholder="Going to..." style={styleCal} name="destination"  />
                        </Autocomplete>
                    </div>
                    <div className="input-fieldsi">
                        {/* <label htmlfor="" className="subinput"></label> */}
                        <input type='date' className="inputing" style={styleCal} id="date"  />
                        <input type='time' className="inputing" style={styleCal} id="time"  />

                    </div>
                    <div className="input-fieldsi">
                        {/* <label htmlfor="" className="subinput"></label> */}
                        <input type='number' className="inputing" placeholder="Seats Available" style={{ color: "#f8dc5d" }}  />
                        <input type='number' className="inputing" placeholder="Cost Per Person" style={{ color: "#f8dc5d" }}  />
                    </div>



                    <button type="submit" className="btn" onClick={click} >
                        Publish My Ride
                    </button>

                </form>
            </div>
        </>
    )
}

export default BookRide


