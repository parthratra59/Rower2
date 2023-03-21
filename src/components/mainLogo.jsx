import React from 'react'
import GlobalStyle from "../GlobalStyle";
import finalLogo1 from "../logos/finalLogo1.png";
const MainLogo = () => {
  <GlobalStyle />
  return (


    <div className="landing-logo">
      <a href="./App.jsx">
        <img src={finalLogo1} alt="" className="logo" />
        <h1>Rower Taxi</h1>
        <p>Providing instant taxi's</p>
      </a>
    </div>
  )
}

export default MainLogo
