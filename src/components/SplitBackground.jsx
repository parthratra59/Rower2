import React from "react";
import GlobalStyle from "../GlobalStyle";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import Home from "../Home";
import PublishRide from "./PublishRide";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const SplitBackground=()=>{
    return(
        <>
        
            <ThemeProvider theme={theme}>
        <GlobalStyle/>
             <div className="parent">
                <div className="child-1">
                  
                </div>
                
                <div className="child-2">
               <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/PublishRide' element={<PublishRide/>}/>
                   

                </Routes>
                </BrowserRouter>
                  
                </div>
            </div>
            </ThemeProvider>
        </>
    )
}
const theme={
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
    media:{mobile:"100px",tab:"998px"},

  };
export default SplitBackground;