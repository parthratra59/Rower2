import React from 'react'
import GlobalStyle from "../GlobalStyle.jsx";
import propTypes from 'prop-types';

const CustomerCard = (props) => {
  let div1 = {
    color: "black",
    border: "3px solid black",
    height: "300px",
    width: "500px",
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "white",
    marginLeft: "200px",
    justifyContent: "center",
    position: ""
  }




  return (

    <div className="customerCardDiv1" style={div1}>
      <div style={{ position: "relative" }}>
        <label htmlFor="" style={{}}> {props.Start}</label><br />
        <img src="" alt="" />
        <label htmlFor="">{props.destination}</label>
      </div>
    </div>
  )
}

export default CustomerCard
