import React from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Header=()=>{
    const MainHeader = styled.header`
    padding:0 1.5rem;
    height:3rem;
    display:flex;
    align-items:center;
    ${'' /* justify-content:start; */}
    `;

    return(
        <>
            <MainHeader>
                <Navbar/>
            </MainHeader>
        </>
    );
}
export default Header;