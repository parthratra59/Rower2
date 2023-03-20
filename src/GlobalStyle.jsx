
// import React from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle=createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: gt-eesti, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.parent
{
    ${'' /* position:relative; */}
    display:flex;
    height:100vh;
    width:100%
    
}
.child-1{
    ${'' /* position:absolute; */}
   background:black;

   height:100vh;
   width:70%;
   
   ${'' /* background-size:cover; */}
   ${'' /* background-position:50% 15%; */}
   
}
.child-2{
    ${'' /* position:absolute; */}
    background:#f8dc5d;
    height:100vh;
    width:100%;

    ${'' /* background-size:cover; */}

   
}
#icons{
    float:left;
    vertical-align:bottom;
    margin-right:3px;
    height:1.2rem;
    ${'' /* padding: .5em; */}
    ${'' /* line-height: 1.22; */}
}
`
export default GlobalStyle;