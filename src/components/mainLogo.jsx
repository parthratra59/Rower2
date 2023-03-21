import React from 'react'
import GlobalStyle from "../GlobalStyle";
import finalLogo1 from "../logos/finalLogo1.png";
const MainLogo = () => {
  <GlobalStyle />
  return (


    <div className="landing-logo">
      <a href="/">
        <img src={finalLogo1} alt="" className="logo" />
        {/* <h1>ROWER TAXI</h1>
        <h2>Providing instant taxi's</h2> */}

      </a>
    </div>
  )
}

export default MainLogo
