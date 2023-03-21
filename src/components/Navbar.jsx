import React from "react";
import {NavLink} from "react-router-dom";
// import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import {BsPersonCircle} from "react-icons/bs"
import {GrAddCircle} from "react-icons/gr"
const Navbar=()=>{ 
    <GlobalStyle/>
    return(
        <>
            
                <div className="main">
                    
                        <ul className="leftchild">
                            <li>
                                <NavLink to='/' style={{textDecoration:'none'}} >Home</NavLink>
                            </li>
                            <li>
                            <NavLink to='/' style={{textDecoration:'none'}} className="navlink"><GrAddCircle className="add" size={18}/>Publish a ride</NavLink>
                            </li>
                        </ul>
                  
                    
                        <ul className="rightchild">
                            <div className="sub-child">
                            <li>
                                <NavLink className='signbtn' to='/' style={{textDecoration:'none'}}><BsPersonCircle className="design"  size={25} color='black'/>Sign in</NavLink>
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