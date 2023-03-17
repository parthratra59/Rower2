import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
const Navbar=()=>{ 
    const Nav =styled.nav`
    .navbar-list{
        display:flex;
        gap:1rem;
        li{
        list-style:none;
        .navbar-link
        {
            &:link,
            &:visited{
                display: inline-block;
                
                text-decoration: none; 
                ${'' /* line ht gyi */}
                font-size:1.2rem;
                ${'' /* text-transform:uppercase; */}
                
                color:${({theme})=>theme.colors.black};
                transition:color 0.3s linear;
                cursor:pointer;
                            
                }
                &:hover,
                &:active{
                    color:${({theme})=>theme.colors.helper};
                }
            }
        }
    }
    `;
    return(
        <>
            <Nav>
                <div className="menuIcon">
                    <ul className="navbar-list">
                        <li>
                            <NavLink className="navbar-link" to='/'>Home</NavLink>
                           
                        </li>
                        <li>
                        <NavLink className="navbar-link" to='/Publish a ride'><IoIosAddCircleOutline id="icons"
                        />Publish a ride</NavLink>
                        
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    )
}
export default Navbar;