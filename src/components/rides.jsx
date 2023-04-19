import React from 'react'

const Rides = ({ ride }) => {
    const myStyle = {
        border: "solid black 2px",
        margin: "10%",
    }
    return (
        <div style={myStyle}>
            <p>From:{ride.origin}</p>
            <p>To:{ride.destination}</p>
            <p>Time:{ride.time}</p>
            <p>Date{ride.date}</p>
            <p>Available Seats:{ride.seats}</p>
            <p>Cost:{ride.cost}</p>
        </div>
    )
}

export default Rides
