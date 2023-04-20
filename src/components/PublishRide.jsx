import React, { useState, useRef, useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import { db } from './authotication/firebase.js';
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc, where } from 'firebase/firestore';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
// import { Autocomplete } from "@react-google-maps/api";
import { IconButton, Button, Text } from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useUserAuth } from "./authotication/context/UserAuthContext";
import Results from "./Results";

const PublishRide = (props) => {
  const { user } = useUserAuth();
  const [email, setemail] = useState('');
  const [rides, setRides] = useState([]);
  const [origin, setorigin] = useState('');
  const [destination, setdestination] = useState('');
  const [date, setdate] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');




  useEffect(() => {

    const q = query(collection(db, 'publishedRides'), where("origin", "==", origin), where("destination", "==", destination), where("date", "==", date));
    const unsubcribe = onSnapshot(q, (querySnapshot) => {
      let ridesArr = []
      querySnapshot.forEach((doc) => {
        ridesArr.push({ ...doc.data(), id: doc.id })
      });
      setRides(ridesArr)
    })
    return () => unsubcribe()
  }, [origin, destination, date])


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
      email: user.email,
    })
    setorigin('');
    setdestination('');
    setdate('');
    setAvailableSeats('');
  }






  function clearInputs() {
    document.getElementById('origin').value = '';
    document.getElementById('destination').value = '';
    document.getElementById('date').value = '';
    document.getElementById('seats').value = '';
  }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // once it will we loaded then we want places to load again
    libraries: ['places']
  })
  const center = { lat: 26.84, lng: 75.56 }

  const [map, setMap] = useState(/**@type google.maps.Map */(null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef()
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef()


  return (
    <>
      <div className="regs_container">
        <form action="" className="forming" onSubmit={createBooking}>
          <h1 style={{ fontSize: "40px", color: "#f8dc5d" }}>Enter trip details:</h1>
          <div className="input-fields" >
            <Autocomplete>
              <input type='text' placeholder="Leaving from..." style={styleCal} id="origin" onChange={(e) => { setorigin(e.target.value) }} />
            </Autocomplete>
          </div>
          <div className="input-fields">
            <Autocomplete>
              <input type='text' placeholder="Going to..." style={styleCal} id="destination" onChange={(e) => { setdestination(e.target.value) }} />
            </Autocomplete>
          </div>
          <div className="input-fieldsi">
            <input type='date' className="inputing" style={styleCal} id="date" value={date} onChange={(e) => { setdate(e.target.value) }} />
            <label htmlfor="username"></label>
            <input type='number' className="inputing" placeholder="Passenger..." style={{ color: "#f8dc5d" }} id="seats" value={availableSeats}
              onChange={(e) => {
                if (e.target.value >= 1) {
                  setAvailableSeats(e.target.value)
                }
              }} />
          </div>

          <button type="submit" className="btn" onChange={props.dataTransfer(origin, destination)} >
            Search
          </button>


        </form>


      </div >
      {rides.map((ride) =>
      (
        <Results
          result={ride} />
      )
      )}




    </>
  )
}
export default PublishRide;

