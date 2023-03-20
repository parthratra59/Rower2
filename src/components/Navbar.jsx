import React from "react";
import {NavLink} from "react-router-dom";
// import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
// import {CgMenu,CgCloseO} from "react-icons/cg"
import GlobalStyle from "../GlobalStyle";
const Navbar=()=>{ 
    <GlobalStyle/>
    return(
        <>
        
            <div className="maindiv">
                    <ul className="left-nav">
                        <li>
                            <NavLink className="navbar-link" to='/'>Home</NavLink>
                           
                        </li>
                        <li>
                        <NavLink className="navbar-link" to='/Publish a ride'><IoIosAddCircleOutline id="icons"
                        />Publish a ride</NavLink>
                        
                        </li>
                    </ul>
                  


                {/* <div className="signin"> */}
                <ul className="right-nav">
                        <li>
                            <NavLink className="">sign in</NavLink>
                        </li>
                        <li>
                            <NavLink className="">login</NavLink>
                        </li>
                </ul>
                    {/* </div> */}
            {/* </div> */}
                
                </div>

                
            {/* </Nav> */}
        </>
    )
}
export default Navbar;