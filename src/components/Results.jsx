import React from 'react'

const Results = ({ result }) => {
  return (
    <div style={{ border: "2px black solid", borderRadius: "20px", padding:"1%",width:"50%",marginTop:"-20%" }}>
      <br />
      <h1>Results</h1>
      <p>From : {result.origin}</p>
      <p>To   : {result.destination}</p>
      <p>Time : {result.time}</p>
      <p>Date : {result.date}</p>
      <p>Available Seats : {result.seats}</p>
      <p>Cost : {result.cost}</p>
      <p>Email : {result.email}</p>
    </div>
  )
}

export default Results
