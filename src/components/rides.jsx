import React from 'react'

const Rides = ({ ride }) => {
    const myStyle = {
        border: "solid black 2px",
        borderRadius: "40px",
        margin: "2%",
        padding: "2%",
        marginLeft: "30%",
        marginRight: "30%",
    }
    return (
        <div style={myStyle}>
            <h1>Result</h1>
            <p>From : {ride.origin}</p>
            <p>To   : {ride.destination}</p>
            <p>Time : {ride.time}</p>
            <p>Date : {ride.date}</p>
            <p>Available Seats : {ride.seats}</p>
            <p>Cost : {ride.cost}</p>
            <p>Email : {ride.email}</p>
        </div>
    )
}

export default Rides
