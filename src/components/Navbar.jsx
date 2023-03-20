import React from "react";
import {NavLink} from "react-router-dom";
// import styled from "styled-components";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import {CgMenu,CgCloseO} from "react-icons/cg"
import GlobalStyle from "../GlobalStyle";
const Navbar=()=>{ 
    <GlobalStyle/>
    return(
        <>
            
                <div className="main">
                    
                        <ul className="leftchild">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                            <NavLink to='/'>Publish to ride</NavLink>
                            </li>
                        </ul>
                  
                    
                        <ul className="rightchild">
                            <li>
                                <NavLink to='/'>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'>Signin</NavLink>
                            </li>
                        </ul>
                  

                </div>
          
        

                       

          
        </>
    )
}
export default Navbar;