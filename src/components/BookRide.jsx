import GlobalStyle from "../GlobalStyle";
import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { Autocomplete, useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { IconButton, Button, Text, calc } from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useUserAuth } from "./authotication/context/UserAuthContext.js";



const BookRide = () => {
    <GlobalStyle />
    // const styling = { color: '#f8dc5d', fontSize: "25px" }
    const styleCal = {
        color: "#f8dc5d"
    }

    const rideContext = createContext();

   

    //create Ride
    const { user } = useUserAuth();
    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [time, settime] = useState('');
    const [date, setdate] = useState('');
    const [cost, setcost] = useState('');
    const [seats, setseats] = useState('');


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
    useEffect(() => {
        console.log(origin);
        console.log(destination);
    }, [origin, destination])

    var remove = false;
    function click() {
        var origin = document.getElementById('origin').value = '';
        var destination = document.getElementById('destination').value = '';
        var date = document.getElementById('date').value = '';
        var time = document.getElementById('time').value = '';
        var seats = document.getElementById('seats').value = '';
        var cost = document.getElementById('cost').value = '';


    }
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        const google = window.google;
        const directionService = new google.maps.DirectionsService();
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING

        });
        setDirectionsResponse(results)
        // bhaut sare direction honge but hum sirf first vale target kr rhe
        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text);

    }


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        // once it will we loaded then we want places to load again
        libraries: ['places']
    })
    const center = { lat: 26.84, lng: 75.56 }

    const [map, setMap] = useState(/**@type google.maps.Map */(null));





    return (

        <>
            <GoogleMap center={center}
                zoom={15}
                mapContainerStyle={{
                    width: '0%', height: '0%'

                }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: true,
                    fullscreenControl: false,

                }}
                onLoad={map => setMap(map)}
            >



                <Marker position={center} />
                {/* <Autocomplete/> */}
            </GoogleMap>
            <div className="regs_container">
                <form action="" className="forming" onSubmit={createRide}>
                    <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter Trip details:</h1>
                    <div className="input-fields">
                        <Autocomplete>
                            <input type='text' placeholder="Leaving From..." style={styleCal} id='origin' onChange={(e) => setorigin(e.target.value)} ref={originRef} />
                        </Autocomplete>
                    </div>
                    <div className="input-fields">
                        <Autocomplete>
                            <input type='text' placeholder="Going to..." style={styleCal} id="destination" onChange={(e) => setdestination(e.target.value)} ref={destiantionRef} />
                        </Autocomplete>
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


                    <Button onClick={calculateRoute}>calculateRoute</Button>
                    <Text style={{ color: 'white' }}>distance:{distance}</Text>

                    <Text style={{ color: 'white' }}>duration:{duration}</Text>
                    <IconButton icon={<FaLocationArrow />} style={{ color: 'red', height: 50 }}>heelo</IconButton>

                    <button type="submit" className="btn" onClick={click} >
                        Publish My Ride
                    </button>

                </form>
            </div>
        </>
    )
}

export default BookRide


