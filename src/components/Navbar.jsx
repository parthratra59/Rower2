import React from "react";
import { NavLink } from "react-router-dom";
//import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { useLocation } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs"
import { GrAddCircle } from "react-icons/gr"
import {BsFillCarFrontFill} from "react-icons/bs"
import {MdDomainVerification} from "react-icons/md"
import Login from "./authotication/components/Login";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
const Navbar = (props) => {
    <GlobalStyle />
    // const Location=useLocation();
    // const [publishride,showpublishride]=useState(false);
    // useEffect(()=>{
    //     if(location.pathname==='/Registration')
    //     {
    //         showpublishride(false);
    //     }
    //     else{
    //         showpublishride(true);
    //     }
    // },[location])


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
                    <li>
                        <NavLink to='/published' style={{ textDecoration: 'none' }} className="navlink" onClick={props.hc}><BsFillCarFrontFill className="add" size={18} onClick={props.hc}
                        />MyRides</NavLink>
                    </li>

                    <li>
                        <NavLink to='/Verification' style={{ textDecoration: 'none' }} className="navlink" onClick={props.hc}><MdDomainVerification className="add" size={18} onClick={props.hc}
                        />Verification</NavLink>
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