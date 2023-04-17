import React from "react";
import { NavLink } from "react-router-dom";
//import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { BsPersonCircle } from "react-icons/bs"
import { GrAddCircle } from "react-icons/gr"
import Login from "./authotication/components/Login";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
const Navbar = (props) => {
    <GlobalStyle />



    return (
        <>

            <div className="main">

                <ul className="leftchild">
                    <li>
                        <NavLink to="/Home" style={{ textDecoration: "none" }} onClick={props.hc2}>Home </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/customerCard' style={{ textDecoration: 'none' }} className="navlink">About</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/PublishRide' style={{ textDecoration: 'none' }} className="navlink" onClick={props.hc}><GrAddCircle className="add" size={18} onClick={props.hc}
                        />Book a ride</NavLink>
                    </li>
                    <li>
                        <NavLink to='/BookRide' style={{ textDecoration: 'none' }} className="navlink" onClick={props.hc}><GrAddCircle className="add" size={18} onClick={props.hc}
                        />Publish Ride</NavLink>
                    </li>
                </ul>


                <ul className="rightchild">
                    <div className="sub-child">
                        <li>
                            <NavLink className='signbtn' to='/Login' style={{ textDecoration: 'none' }}><BsPersonCircle className="design" size={25} color='black' />Sign in</NavLink>
                        </li>
                    </div>
                    {/* <li>
                                <NavLink to='/' style={{textDecoration:'none'}}>Signin</NavLink>
                            </li> */}
                </ul>


            </div>






        </>
    )
}
export default Navbar;