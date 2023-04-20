import React, { useState, useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import Home from "../Home";
import PublishRide from "./PublishRide";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLogo from "./mainLogo";
import CustomerCard from "./customerCard";
import PhoneSignUp from "./authotication/components/PhoneSignUp";
import Signup from "./authotication/components/Signup";
import Home2 from "./authotication/components/Home2";
import ProtectedRoute from "./authotication/components/ProtectedRoute";
import { UserAuthContextProvider } from "./authotication/context/UserAuthContext";
import Login from "./authotication/components/Login";
import Navbar from "./Navbar";
// import Registration from "./Registration";
import Map from "./Map";
import BookRide from "./BookRide";
import Published from "./published";



const SplitBackground = () => {

  const [destination, setdestination] = useState('');
  const [origin, setorigin] = useState('');

  function dataTransfer(origin, destination) {
    setdestination(destination);
    setorigin(origin);

  }

  useEffect(() => {
    console.log(origin);
    console.log(destination);
  }, [origin, destination])

  const [Mapping, setMap] = useState(false);
  // const se hm c
  function handleclick() {
    setMap(true);
    console.log(Mapping);
  }
  function handleclick2() {
    setMap(false);
    console.log(Mapping);
  }


  return (
    <>
      <UserAuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="parent">
            <div className="child-1">
              {/* <Registration/> */}
              {Mapping ? <Map origin={origin} destination={destination} /> : <MainLogo />}
              {/* <MainLogo /> */}


            </div>

            <div className="child-2">
              <BrowserRouter>
                <Navbar hc={handleclick} hc2={handleclick2} />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/PublishRide' element={<PublishRide />} />
                  <Route path="/phonesignup" exact element={<PhoneSignUp />} />
                  <Route path="/Login" exact element={<Login />} />
                  <Route path="/signup" exact element={<Signup />} />
                  <Route path="/BookRide" exact element={<BookRide dataTransfer={dataTransfer} />} />
                  <Route path="/published" exact element={<Published />} />


                  <Route path="/home"
                    element={
                      <ProtectedRoute>
                        <Home2 />
                      </ProtectedRoute>
                    }
                  />
                </Routes>

              </BrowserRouter>

            </div>
          </div>
        </ThemeProvider>
      </UserAuthContextProvider>
    </>
  )
}
const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  //media queries krdi set
  media: { mobile: "100px", tab: "998px" },

};
export default SplitBackground;